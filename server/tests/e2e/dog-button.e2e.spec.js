import { test, expect } from '@playwright/test';

test('dog image loads when button clicked', async ({ page }) => {

  await page.goto('http://localhost:5173');

  // Find the button that fetches a new dog image
  const button = page.locator('button');

  await button.click();

  // Wait for image to update
  const image = page.locator('img');

  await expect(image).toHaveAttribute('src', /https:\/\//);

});