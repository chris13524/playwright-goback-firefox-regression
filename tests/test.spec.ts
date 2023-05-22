import { test, expect } from '@playwright/test';

test('goBack works', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator("h1")).toHaveText(/enables reliable/);

  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator("h1")).toHaveText(/Installation/);

  await page.reload(); // comment out to fix Firefox test
  await expect(page.locator("h1")).toHaveText(/Installation/);

  await page.goBack();
  await expect(page.locator("h1")).toHaveText(/enables reliable/);
});
