import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../../pages/PortfolioPage';
import { ContactFormPage } from '../../pages/ContactFormPage';

test('Valid contact form submission succeeds', async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);
  const contactFormPage = new ContactFormPage(page);
  
  await portfolioPage.navigateToPortfolio();
  await contactFormPage.verifyFormExists();
  await contactFormPage.fillContactForm('Hina Tester', 'hina.tester@example.com', 'This is a test message');
  await contactFormPage.submitForm();
  
  await contactFormPage.takeScreenshot('form-submitted');
});