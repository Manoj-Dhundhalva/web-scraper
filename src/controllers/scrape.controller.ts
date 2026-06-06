import type { Request, Response, NextFunction } from "express";
import { webScraper } from "@/services/web-scraper.service.js";
import type { TScrapeBody } from "@/schemas/scrape.schema.js";
import { isProdEnv } from "@/config/env.js";

export async function scrapeController(req: Request<object, unknown, TScrapeBody>, res: Response, next: NextFunction) {
  try {
    const { scrapeTasks } = req.body;
    const htmlPages = await Promise.all(scrapeTasks.map((task) => webScraper.getHtmlPage(task)));
    res.status(200).json({ htmlPages });
  } catch (error) {
    next(error);
  } finally {
    if (!isProdEnv()) webScraper.close();
  }
}
