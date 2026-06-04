import { z } from "zod";

export const scrapeSchema = z.object({
  problems: z
    .array(
      z.object({
        contestId: z.number(),
        problemIndex: z.string().length(1),
      }),
    )
    .min(1),
});

export type TScrapeBody = z.infer<typeof scrapeSchema>;
