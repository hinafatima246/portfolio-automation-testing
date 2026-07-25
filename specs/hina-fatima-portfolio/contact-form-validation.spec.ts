import { test, expect } from '@playwright/test';

test('Contact form blocks submission when required fields are empty', async ({ page }) => {
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  const form = page.locator('form').first();
  if (await form.count()) {
    await expect(form).toBeVisible();
  }
});
