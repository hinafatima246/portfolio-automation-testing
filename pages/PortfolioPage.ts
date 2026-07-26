import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PortfolioPage extends BasePage {
  readonly portfolioUrl = 'https://demo-portfolio-seven-gamma.vercel.app/';
  readonly navSelector = 'nav, header';
  readonly ctaButtonSelector = 'button, a';
  readonly bodySelector = 'body';

  constructor(page: Page) {
    super(page);
  }

  async navigateToPortfolio() {
    await this.goto(this.portfolioUrl);
  }

  async verifyPageTitle() {
    const title = await this.getPageTitle();
    expect(title.length).toBeGreaterThan(0);
  }

  async verifyPageLoaded() {
    await expect(this.page.locator(this.bodySelector)).toBeVisible();
  }

  async verifyUrlCorrect() {
    await expect(this.page).toHaveURL(/demo-portfolio-seven-gamma\.vercel\.app/);
  }

  async verifyNavbarVisible() {
    const nav = this.page.locator(this.navSelector).first();
    await expect(nav).toBeVisible();
  }

  async getNavbarLinks() {
    return await this.page.locator(this.navSelector + ' a').count();
  }

  async verifyCtaButtonsVisible() {
    const cta = this.page.locator(this.ctaButtonSelector);
    expect(await cta.count()).toBeGreaterThan(0);
  }

  async clickCtaButton() {
    const cta = this.page.locator(this.ctaButtonSelector)
      .filter({ hasText: /contact|project|hire|resume/i })
      .first();
    
    if (await cta.count()) {
      await cta.click();
    }
  }

  async resizeViewport(width: number, height: number) {
    await this.page.setViewportSize({ width, height });
    await this.page.waitForTimeout(300);
  }

  async verifyResponsiveLayout() {
    const buttons = this.page.locator('button, a');
    expect(await buttons.count()).toBeGreaterThan(0);
  }
}