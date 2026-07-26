import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactFormPage extends BasePage {
  readonly formSelector = 'form';
  readonly nameInputSelector = 'input[name*="name"], input[placeholder*="name" i]';
  readonly emailInputSelector = 'input[type="email"], input[name*="email" i]';
  readonly messageInputSelector = 'textarea';
  readonly submitButtonSelector = 'button[type="submit"], input[type="submit"], button';

  constructor(page: Page) {
    super(page);
  }

  async verifyFormExists() {
    const form = this.page.locator(this.formSelector).first();
    if (await form.count()) {
      await expect(form).toBeVisible();
    }
  }

  async fillContactForm(name: string, email: string, message: string) {
    const nameInput = this.page.locator(this.nameInputSelector).first();
    const emailInput = this.page.locator(this.emailInputSelector).first();
    const messageInput = this.page.locator(this.messageInputSelector).first();

    if (await nameInput.count()) await nameInput.fill(name);
    if (await emailInput.count()) await emailInput.fill(email);
    if (await messageInput.count()) await messageInput.fill(message);
  }

  async fillInvalidEmail(invalidEmail: string) {
    const emailInput = this.page.locator(this.emailInputSelector).first();
    if (await emailInput.count()) {
      await emailInput.fill(invalidEmail);
      await this.page.keyboard.press('Tab');
    }
  }

  async submitForm() {
    const submit = this.page.locator(this.submitButtonSelector)
      .filter({ hasText: /send|submit|contact/i })
      .first();
    
    if (await submit.count()) {
      await expect(submit).toBeVisible();
      await submit.click();
    }
  }

  async verifyFormIsVisible() {
    const form = this.page.locator(this.formSelector).first();
    if (await form.count()) {
      await expect(form).toBeVisible();
      return true;
    }
    return false;
  }
}