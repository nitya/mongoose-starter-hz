import { test, expect } from '@playwright/test';

test('login from home page', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('text=Login to see todo items');
  await page.click('a:has-text("Login")');
  await expect(page).toHaveURL('/.auth/login/github');
})
