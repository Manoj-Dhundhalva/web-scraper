import { chromium, type Browser } from "playwright";

class WebScraperService {
  private browserPromise: Promise<Browser> | null = null;

  private async getBrowser(): Promise<Browser> {
    if (!this.browserPromise) {
      this.browserPromise = chromium.launch({ headless: false });
    }

    return this.browserPromise;
  }

  async getHtmlPages(urls: string[]): Promise<string[]> {
    const browser = await this.getBrowser();
    const context = await browser.newContext();

    try {
      return await Promise.all(
        urls.map(async (url) => {
          const page = await context.newPage();

          try {
            const response = await page.goto(url, {
              waitUntil: "domcontentloaded",
              timeout: 30_000,
            });

            return (await response?.text()) ?? "";
          } finally {
            await page.close();
          }
        }),
      );
    } finally {
      await context.close();
    }
  }

  async close(): Promise<void> {
    if (!this.browserPromise) return;

    const browser = await this.browserPromise;
    await browser.close();
    this.browserPromise = null;
  }
}

export const webScraper = new WebScraperService();
