import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';

test('Website loads correctly and shows the expected title', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  
  await portfolioPage.navigateToPortfolio();
  await portfolioPage.verifyPageLoaded();
  await portfolioPage.verifyUrlCorrect();
  await portfolioPage.verifyPageTitle();
  
  await portfolioPage.takeScreenshot('homepage-loaded');
});