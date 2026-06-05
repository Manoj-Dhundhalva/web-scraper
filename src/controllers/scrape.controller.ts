import type { Request, Response, NextFunction } from "express";
import { webScraper } from "@/services/web-scraper.service.js";
import type { TScrapeBody } from "@/schemas/scrape.schema.js";
import { constructProblem } from "@/helpers/construct-problem.helpers.js";

const getProblemUrl = (contestId: number, problemIndex: string) =>
  `https://codeforces.com/problemset/problem/${contestId}/${problemIndex}`;

export async function scrapeController(req: Request<object, unknown, TScrapeBody>, res: Response, next: NextFunction) {
  try {
    const problemUrls = req.body.problems.map((problem) => getProblemUrl(problem.contestId, problem.problemIndex));

    const htmlPages = await webScraper.getHtmlPages(problemUrls);

    const problems = htmlPages.map((htmlPage, i) => ({
      url: problemUrls[i],
      ...constructProblem(htmlPage),
    }));

    res.status(200).json({ problems });
  } catch (error) {
    next(error);
  } finally {
    await webScraper.close();
  }
}
