import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });