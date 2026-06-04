import type { Request, Response, NextFunction } from "express";
import { webScraper } from "@/services/web-scraper.service.js";
import type { TScrapeBody } from "@/schemas/scrape.schema.js";
import { constructProblem } from "@/helpers/construct-problem.helpers.js";

const getProblemUrl = (contestId?: number, problemIndex?: string) => {
  if (contestId == null || problemIndex == null) return "";
  return `https://codeforces.com/problemset/problem/${contestId}/${problemIndex}`;
};

export async function scrapeController(req: Request<object, unknown, TScrapeBody>, res: Response, next: NextFunction) {
  const { problems } = req.body;

  try {
    const settled = await Promise.allSettled(
      problems.map(async (problem) => {
        const url = getProblemUrl(problem.contestId, problem.problemIndex);
        const html = await webScraper.getHtml(url);
        return { url, html };
      }),
    );

    const results = settled.map((result, i) =>
      result.status === "fulfilled"
        ? {
            url: getProblemUrl(problems[i]?.contestId, problems[i]?.problemIndex),
            status: "success",
            html: result.value.html,
          }
        : {
            url: getProblemUrl(problems[i]?.contestId, problems[i]?.problemIndex),
            status: "error",
            error: result.reason?.message,
          },
    );

    const data = results.map((result) => {
      if (result.status === "error") return { url: result.url, error: result.error };
      if (!result.html) return { url: result.url };
      return { url: result.url, ...constructProblem(result.html) };
    });

    res.status(200).json({ problems: data });
  } catch (error) {
    next(error);
  } finally {
    await webScraper.close();
  }
}
