import type { Request, Response, NextFunction } from "express";
import { webScraper } from "@/services/web-scraper.service.js";
import type { TScrapeBody } from "@/schemas/scrape.schema.js";

export async function scrapeController(req: Request<object, unknown, TScrapeBody>, res: Response, next: NextFunction) {
  try {
    const { scrapeTasks } = req.body;
    const htmlPages = await Promise.all(scrapeTasks.map((task) => webScraper.getHtmlPage(task)));
    res.status(200).json({ htmlPages });
    next();
  } catch (error) {
    next(error);
  }
}
