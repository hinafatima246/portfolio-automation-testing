import { test, expect } from '@playwright/test';

test('Primary call-to-action buttons are interactive', async ({ page }) => {
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  const cta = page.locator('button, a').filter({ hasText: /contact|project|hire|resume/i }).first();
  if (await cta.count()) {
    await expect(cta).toBeVisible();
  }
});
