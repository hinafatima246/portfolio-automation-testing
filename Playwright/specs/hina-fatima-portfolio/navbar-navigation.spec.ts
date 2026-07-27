import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';

test('Navbar or menu navigation works across sections', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  
  await portfolioPage.navigateToPortfolio();
  await portfolioPage.verifyNavbarVisible();
  
  const linkCount = await portfolioPage.getNavbarLinks();
  expect(linkCount).toBeGreaterThan(0);
  
  await portfolioPage.takeScreenshot('navbar-visible');
});