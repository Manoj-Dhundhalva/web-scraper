import { z } from "zod";

export const scrapeTaskSchema = z.object({
  url: z.url(),
  timeout: z.number().int().positive().default(30000),
});

export type TScrapeTask = z.infer<typeof scrapeTaskSchema>;

export const scrapeSchema = z.object({
  scrapeTasks: z.array(scrapeTaskSchema),
});

export type TScrapeBody = z.infer<typeof scrapeSchema>;
