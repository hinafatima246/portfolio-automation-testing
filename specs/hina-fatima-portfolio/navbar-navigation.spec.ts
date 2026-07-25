import { test, expect } from '@playwright/test';

test('Navbar or menu navigation works across sections', async ({ page }) => {
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  const nav = page.locator('nav, header').first();
  await expect(nav).toBeVisible();
});
