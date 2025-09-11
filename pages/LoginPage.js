// Page Object Model for Login Page
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    // ❌ Flaky selectors (for demo purposes only)
    this.usernameInputFlaky = 'input:nth-child(1)';
    this.passwordInputFlaky = 'input:nth-child(2)';
    this.loginButtonFlaky = 'div > button';

    // ✅ Stable selectors (recommended)
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.welcomeHeading = page.getByRole('heading', { name: 'Welcome' });
  }

  async goto() {
    await this.page.goto('/');
  }

  // Flaky login (shows bad practice)
  async loginWithFlakySelectors(username, password) {
    await this.page.fill(this.usernameInputFlaky, username);
    await this.page.fill(this.passwordInputFlaky, password);
    await this.page.click(this.loginButtonFlaky);
  }

  // Stable login (good practice)
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertWelcomeVisible() {
    await expect(this.welcomeHeading).toBeVisible();
  }
};
