import { z } from "zod";

export const scrapeSchema = z.object({
  urls: z.array(z.url()).min(1),
});

export type TScrapeBody = z.infer<typeof scrapeSchema>;
