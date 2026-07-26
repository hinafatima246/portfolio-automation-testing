import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';

test('Navigation and buttons remain usable at mobile width', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  
  await portfolioPage.resizeViewport(390, 844);
  await portfolioPage.navigateToPortfolio();
  await portfolioPage.verifyResponsiveLayout();
  
  await portfolioPage.takeScreenshot('mobile-view');
});