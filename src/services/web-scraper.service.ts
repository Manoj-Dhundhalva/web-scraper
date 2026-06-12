import env from "@/config/env.js";
import type { TScrapeTask } from "@/schemas/scrape.schema.js";
import { firefox, type Browser, type BrowserContext } from "playwright";

class WebScraperService {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;

  private idleTimer: NodeJS.Timeout | null = null;
  private activeRequests = 0;

  private readonly IDLE_TIMEOUT = env.BROWSER_IDLE_TIMEOUT;

  private async getBrowser(): Promise<Browser> {
    if (!this.browser) {
      console.log("Launching browser...");
      this.browser = await firefox.launch({ headless: true });
    }

    return this.browser;
  }

  private async getContext(): Promise<BrowserContext> {
    if (!this.context) {
      const browser = await this.getBrowser();
      console.log("Creating browser context...");
      this.context = await browser.newContext({ locale: "en-US" });
    }

    return this.context;
  }

  async init() {
    await this.getContext();
  }

  private resetIdleTimer(): void {
    if (this.idleTimer) clearTimeout(this.idleTimer);

    this.idleTimer = setTimeout(() => {
      void this.close();
    }, this.IDLE_TIMEOUT);
  }

  async getHtmlPage({ url, timeout }: TScrapeTask): Promise<string> {
    this.activeRequests++;

    try {
      const context = await this.getContext();
      const page = await context.newPage();

      try {
        const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout });

        if (response?.headers()["content-type"]?.includes("text/html")) {
          const htmlPage = await page.content();
          console.log("[HIT]: ", url, htmlPage.length);
          return htmlPage;
        }

        return "";
      } catch (error) {
        console.log("Error while fetching html", error);
        return "";
      } finally {
        await page.close();
      }
    } finally {
      this.activeRequests--;
      if (this.activeRequests === 0) this.resetIdleTimer();
    }
  }

  async close(): Promise<void> {
    console.log("Closing browser...");

    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }

    await this.context?.close();
    await this.browser?.close();

    this.context = null;
    this.browser = null;
  }
}

export const webScraper = new WebScraperService();
