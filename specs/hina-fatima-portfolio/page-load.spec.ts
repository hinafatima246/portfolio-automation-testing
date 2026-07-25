import { test, expect } from '@playwright/test';

test('Website loads correctly and shows the expected title', async ({ page }) => {
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(/demo-portfolio-seven-gamma\.vercel\.app/);
  await expect(page.locator('body')).toBeVisible();
});
