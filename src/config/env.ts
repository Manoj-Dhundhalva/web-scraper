import { z } from "zod";

export const APP_STAGE = {
  STAGING: "staging",
  PROD: "prod",
} as const;

process.env.APP_STAGE = process.env.APP_STAGE || APP_STAGE.STAGING;

const envSchema = z.object({
  APP_STAGE: z.enum([APP_STAGE.PROD, APP_STAGE.STAGING]).default(APP_STAGE.STAGING),
  PORT: z.coerce.number().positive().default(3000),
  RATE_LIMIT_WINDOW: z.coerce.number().positive().default(60000),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Invalid environment variables\n");

  const tree = z.treeifyError(result.error);
  console.error(JSON.stringify(tree, null, 2));

  console.error("\nValidation Errors:");

  result.error.issues.forEach((issue) => {
    const path = issue.path.length > 0 ? issue.path.join(".") : "root";
    console.error(`  • ${path}: ${issue.message}`);
  });

  process.exit(1);
}

export const env = result.data;

export type Env = typeof env;

export const isProdEnv = () => env.APP_STAGE === APP_STAGE.PROD;
export const isDevEnv = () => env.APP_STAGE === APP_STAGE.STAGING;

export default env;
