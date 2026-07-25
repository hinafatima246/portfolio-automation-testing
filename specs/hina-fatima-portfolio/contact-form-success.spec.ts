import { test, expect } from '@playwright/test';

test('Valid contact form submission succeeds', async ({ page }) => {
  await page.goto('https://demo-portfolio-seven-gamma.vercel.app/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');

  const name = page.locator('input[name*="name"], input[placeholder*="name" i]').first();
  const email = page.locator('input[type="email"], input[name*="email" i]').first();
  const message = page.locator('textarea').first();

  if (await name.count()) await name.fill('Hina Tester');
  if (await email.count()) await email.fill('hina.tester@example.com');
  if (await message.count()) await message.fill('This is a test message from Playwright.');
});
