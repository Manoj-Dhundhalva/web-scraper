import { isProdEnv } from "@/config/env.js";
import { webScraper } from "@/services/web-scraper.service.js";
import { type Request, type Response, type NextFunction } from "express";

export const launchBrowser = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => {
  try {
    await webScraper.init();
    next();
  } catch (error) {
    next(error);
  }
};

export const closeBrowser = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!isProdEnv()) await webScraper.close();
    next();
  } catch (error) {
    next(error);
  }
};
