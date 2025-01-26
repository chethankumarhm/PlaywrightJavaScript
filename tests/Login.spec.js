// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Demo Web Shop");
});

test('get started link', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Click the get started link.
  await page.locator("//a[text()='Register']").click();

  // Expects page to have a heading with the name of Installation.
  const registerText = await page.locator("//h1[text()='Register']").textContent();
  expect(registerText).toBe(registerText);

});
