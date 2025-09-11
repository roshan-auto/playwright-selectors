// ✅ Demonstrates stable Playwright-recommended selectors
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login with stable selectors', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // Using role-based selectors
  await loginPage.login('demo', 'demo123');

  // Assert welcome heading
  await loginPage.assertWelcomeVisible();
});
