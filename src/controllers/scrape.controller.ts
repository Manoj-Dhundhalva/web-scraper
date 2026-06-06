import type { Request, Response, NextFunction } from "express";
import { webScraper } from "@/services/web-scraper.service.js";
import type { TScrapeBody } from "@/schemas/scrape.schema.js";

export async function scrapeController(req: Request<object, unknown, TScrapeBody>, res: Response, next: NextFunction) {
  try {
    const { urls } = req.body;
    const htmlPages = await webScraper.getHtmlPages(urls);
    res.status(200).json({ htmlPages });
  } catch (error) {
    next(error);
  } finally {
    await webScraper.close();
  }
}
