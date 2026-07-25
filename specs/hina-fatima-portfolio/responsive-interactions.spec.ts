import { test, expect } from '@playwright/test';

test('Interactive elements remain accessible across viewport changes', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  await page.setViewportSize({ width: 768, height: 1024 });
  await page.waitForTimeout(300);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);

  const buttons = page.locator('button, a');
  await expect(buttons.first()).toBeVisible();
});
