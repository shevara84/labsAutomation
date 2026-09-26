import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly quantityInput: Locator;

  constructor(page: Page) {
    super(page);

    this.quantityInput = page.getByTitle('Quantity');
  }

  async verifyProduct(productName: string) {
    await expect(
      this.page.getByText(productName, { exact: true }),
    ).toBeVisible();
  }

  async verifyPrice(price: string) {
    await expect(
      this.page.getByText(price, { exact: true }).first(),
    ).toBeVisible();
  }

  async verifyQuantity(quantity: string) {
    await expect(this.quantityInput).toHaveValue(quantity);
  }

  async verifyTotal(total: string) {
    await expect(
      this.page.getByText(total, { exact: true }).last(),
    ).toBeVisible();
  }
}