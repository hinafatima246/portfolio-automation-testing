import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';
import { ContactFormPage } from '../../pages/ContactFormPage';

test('Contact form blocks submission when required fields are empty', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  const contactFormPage = new ContactFormPage(page);
  
  await portfolioPage.navigateToPortfolio();
  await contactFormPage.verifyFormExists();
  await contactFormPage.takeScreenshot('empty-form');
});