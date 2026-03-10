import { test, expect } from '@playwright/test';

test('error displayed when API call fails', async ({ page }) => {

  // Intercept the API and force it to fail
  await page.route('**/api/dogs/random', route => route.abort());

  await page.goto('http://localhost:5173');

  // Check that an error element is visible
  const errorElement = page.locator('text=/error/i');
  await expect(errorElement).toBeVisible();

});