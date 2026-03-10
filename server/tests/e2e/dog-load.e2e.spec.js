import { test, expect } from '@playwright/test';

test('dog image loads when page loads', async ({ page }) => {

  // Change to your actual frontend port
  await page.goto('http://localhost:5173');

  // Wait for image element to appear
  const image = page.locator('img');

  // Wait until src attribute is set to a valid URL
  await expect(image).toHaveAttribute('src', /https:\/\//);

});