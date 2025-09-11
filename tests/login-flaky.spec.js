// ❌ Demonstrates flaky selectors
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login with flaky selectors', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // Using brittle nth-child selectors
  await loginPage.loginWithFlakySelectors('qa_user', 'secret');

  // This may break if DOM structure changes
  await loginPage.assertWelcomeVisible();
});
