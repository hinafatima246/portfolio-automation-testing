import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';

test('Interactive elements remain accessible across viewport changes', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  
  await portfolioPage.resizeViewport(1280, 900);
  await portfolioPage.navigateToPortfolio();
  await portfolioPage.verifyResponsiveLayout();
  await portfolioPage.takeScreenshot('desktop-view');
  
  await portfolioPage.resizeViewport(768, 1024);
  await portfolioPage.verifyResponsiveLayout();
  await portfolioPage.takeScreenshot('tablet-view');
  
  await portfolioPage.resizeViewport(390, 844);
  await portfolioPage.verifyResponsiveLayout();
  await portfolioPage.takeScreenshot('mobile-view-final');
});