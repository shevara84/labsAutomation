import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly mobileInput: Locator;
  readonly addressInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly pinCodeInput: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.getByLabel('First Name*');
    this.lastNameInput = page.getByLabel('Last Name*');
    this.emailInput = page.getByLabel('E-mail*');
    this.mobileInput = page.getByLabel('Mobile No.*');
    this.addressInput = page.getByLabel('Address*');
    this.stateInput = page.getByLabel('State*');
    this.cityInput = page.getByLabel('City*');
    this.pinCodeInput = page.getByLabel('Pin Code*');
  }

  async proceedToCheckout() {
    await this.page
      .getByRole('link', { name: 'Proceed To Checkout' })
      .click();
  }

  async fillCheckoutForm(
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    address: string,
    state: string,
    city: string,
    pinCode: string,
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.mobileInput.fill(mobile);
    await this.addressInput.fill(address);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.pinCodeInput.fill(pinCode);
  }

  async continue() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async placeOrder() {
    await this.page.getByRole('link', { name: 'Place Order' }).click();
  }

  async verifyOrderSuccess() {
    await expect(
      this.page.getByText(
        'Your order has been placed successfully.',
        { exact: true },
      ),
    ).toBeVisible();
  }
}