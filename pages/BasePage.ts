import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async getPageUrl() {
    return this.page.url();
  }

  async isElementVisible(selector: string) {
    return await this.page.locator(selector).isVisible();
  }

  async clickElement(selector: string) {
    await this.page.locator(selector).click();
  }

  async fillInput(selector: string, text: string) {
    await this.page.locator(selector).fill(text);
  }

  async waitForElement(selector: string, timeout: number = 5000) {
    await this.page.locator(selector).waitFor({ timeout });
  }
}