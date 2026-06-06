import { Router } from "express";
import { validateBody } from "@/middlewares/validation.middleware.js";
import { scrapeSchema } from "@/schemas/scrape.schema.js";
import { scrapeController } from "@/controllers/scrape.controller.js";
import { closeBrowser, launchBrowser } from "@/middlewares/browser.middleware.js";

const router = Router();

router.use(launchBrowser);

router.post("/", validateBody(scrapeSchema), scrapeController);

router.use(closeBrowser);

export default router;
