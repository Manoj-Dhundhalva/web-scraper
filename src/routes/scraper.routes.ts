import { Router } from "express";
import { validateBody } from "@/middlewares/validation.js";
import { scrapeSchema } from "@/schemas/scrape.schema.js";
import { scrapeController } from "@/controllers/scrape.controller.js";

const router = Router();

router.post("/", validateBody(scrapeSchema), scrapeController);

export default router;
