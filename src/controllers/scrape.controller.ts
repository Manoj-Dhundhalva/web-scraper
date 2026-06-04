import type { Request, Response, NextFunction } from "express";
import { webScraper } from "@/services/web-scraper.service.js";
import { htmlToJson } from "@/helpers/parser.js";
import type { TScrapeBody } from "@/schemas/scrape.schema.js";

export async function scrapeController(req: Request<object, unknown, TScrapeBody>, res: Response, next: NextFunction) {
  const { urls } = req.body;

  try {
    const settled = await Promise.allSettled(
      urls.map(async (url) => {
        const html = await webScraper.getHtml(url);
        const parsed = htmlToJson(html);
        return { url, parsed };
      }),
    );

    const results = settled.map((result, i) =>
      result.status === "fulfilled"
        ? { url: urls[i], status: "success", parsed: result.value.parsed }
        : { url: urls[i], status: "error", error: result.reason?.message },
    );

    res.status(200).json({ data: results });
  } catch (error) {
    next(error);
  } finally {
    await webScraper.close();
  }
}
