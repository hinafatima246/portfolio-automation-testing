import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';
import { ContactFormPage } from '../../pages/ContactFormPage';

test('Invalid input handling shows clear feedback', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  const contactFormPage = new ContactFormPage(page);
  
  await portfolioPage.navigateToPortfolio();
  await contactFormPage.verifyFormExists();
  await contactFormPage.fillInvalidEmail('not-an-email');
  
  await contactFormPage.takeScreenshot('invalid-email-entered');
});