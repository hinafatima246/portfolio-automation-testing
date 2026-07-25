import { test, expect } from '@playwright/test';

test('Navigation and buttons remain usable at mobile width', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  const buttons = page.locator('button, a');
  await expect(buttons.first()).toBeVisible();
});
