const { test, expect } = require('@playwright/test');
const locators = require('../locators/locators.json');
const { safeClick, safeFill, waitForResponse } = require('../utils/commands');

test('Scenario1', async ({ page }) => {
  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Fill Username input with "standard_user"
  await safeFill(page, locators.usernameInput, 'standard_user');

  // Fill Password input with "secret_sauce"
  await safeFill(page, locators.passwordInput, 'secret_sauce');

  // Click Login button
  await safeClick(page, locators.loginButton);

  // Click Add to cart button for Sauce Labs Backpack
  await safeClick(page, locators.addToCartSauceLabsBackpack);

  // Click Add to cart button for Sauce Labs Bolt T-Shirt
  await safeClick(page, locators.addToCartSauceLabsBoltTShirt);

  // Click Add to cart button for Sauce Labs Bike Light
  await safeClick(page, locators.addToCartSauceLabsBikeLight);

  // Click Shopping cart link
  await safeClick(page, locators.shoppingCartLink);

  // Click Checkout button
  await safeClick(page, locators.checkoutButton);

  // Click Continue button
  await safeClick(page, locators.continueButton);

  // Click Cancel button
  await safeClick(page, locators.cancelButton);
});
