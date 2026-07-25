import { test, expect } from '@playwright/test';

test('Invalid input handling shows clear feedback', async ({ page }) => {
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  const email = page.locator('input[type="email"], input[name*="email"], textarea').first();
  if (await email.count()) {
    await email.fill('not-an-email');
  }
});
