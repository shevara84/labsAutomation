import { Page, Locator } from '@playwright/test';


export class BasePage {
   readonly page: Page;
   readonly goToBack: Locator;
   readonly shopPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToBack = page.locator('[data-testid="go-back-btn"]');
    this.shopPage = page.locator('[data-testid="shop-page"]');
  }
  // Method to navigate to a specific URL
  async navigateTo(url: string  = ''): Promise<void> {
    await this.page.goto(url);
  }
  // Method to verify the current URL matches the expected URL
  async verifyUrl(expectedUrl: string): Promise<void> {
    await this.page.waitForURL(process.env.BASE_URL! + expectedUrl);
  }

}