import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';


export class ProductPage extends BasePage {
    readonly searchInput: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('[data-testid="search-input"]');
        this.productName = page.locator('[data-testid="product-name"]');
        this.productPrice = page.locator('[data-testid="product-price"]');
    }


    async selectCategory(categoryName: string) {
        await this.page.getByRole('link', { name: categoryName }).click();
    }

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
    }
    async verifyProductVisible(productName: string) {
        await expect(this.page.getByRole('link', { name: productName }).first(),
        ).toBeVisible();
    }
    async verifyNoProductsFound() {
        await expect(
            this.page.getByText('No products found', { exact: true }),
        ).toBeVisible();
    }
    async selectSize(value: string) {
        await this.page.getByTestId(`filter-size-${value}`).check({ force: true });
    }

    async clearSize(value: string) {
        await this.page.getByTestId(`filter-size-${value}`).uncheck({ force: true });
    }

    async verifySizeFilterChecked(value: string) {
        await expect(
            this.page.getByTestId(`filter-size-${value}`),
        ).toBeChecked();
    }

    async verifySizeFilterUnchecked(value: string) {
        await expect(
            this.page.getByTestId(`filter-size-${value}`),
        ).not.toBeChecked();
    }
    async verifyProductsBySize(value: string) {
        await expect(
            this.page.getByText(`Size: ${value.toUpperCase()}`, { exact: false }).first(),
        ).toBeVisible();
    }
    async openProduct(productName: string) {
        await this.page.getByRole('link', { name: productName }).first().click();
    }

    async verifyProductDetails(productName: string, price: string) {
        await expect(
            this.page.getByRole('heading', {
                name: productName,
                level: 3,
            }),
        ).toBeVisible();

        await expect(
            this.page.getByRole('heading', {
                name: price,
                level: 3,
            }),
        ).toBeVisible();
    }

    async goBackToProducts() {
        await this.page.getByRole('link', { name: 'Go To Back' }).click();
    }

    async addProductToCart(productName: string) {
        await this.page
            .getByRole('button', { name: `Add ${productName} to cart` })
            .click();
    }

    async openCart() {
        await this.page.locator('[data-testid="header-cart-link"]').click();
    }

}