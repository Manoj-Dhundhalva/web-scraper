import { Router } from "express";

import scraperRoutes from "./scraper.routes.js";

const router = Router();

router.use("/scraper", scraperRoutes);

export default router;
