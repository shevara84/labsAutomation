import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
   readonly emailInput: Locator;
   readonly passwordInput: Locator;
   readonly submitButton: Locator;
   readonly loginErrorMsg: Locator;
   readonly logOutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('[data-testid="login-email-input"]');
    this.passwordInput = page.locator('[data-testid="login-password-input"]');
    this.submitButton = page.getByRole('button', { name: 'Login' });
    this.loginErrorMsg = page.locator('[data-testid="login-error-message"]');
    this.logOutButton = page.locator('[data-testid="header-logout-btn"]');
  }
  // Method to perform login action
  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  // Method to perform logout action
  async logout(): Promise<void> {
    await this.logOutButton.click();
  }
}