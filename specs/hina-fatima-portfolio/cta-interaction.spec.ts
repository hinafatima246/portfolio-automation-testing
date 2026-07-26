import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';

test('Primary call-to-action buttons are interactive', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  
  await portfolioPage.navigateToPortfolio();
  await portfolioPage.verifyCtaButtonsVisible();
  await portfolioPage.clickCtaButton();
  
  await portfolioPage.takeScreenshot('cta-clicked');
});