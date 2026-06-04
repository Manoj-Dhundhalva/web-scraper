import { z } from "zod";

const envSchema = z.object({
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

export default env;
