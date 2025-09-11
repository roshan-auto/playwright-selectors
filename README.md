# Playwright Selectors Lab 🎯

This repo demonstrates **flaky vs stable selectors** in Playwright using a simple
Page Object Model (POM) framework.

Target site: [Testbed](https://roshan-auto.github.io/testbed/)

## 🌟 What You'll Learn
- Why `nth-child` and deeply nested CSS are fragile
- Why Playwright recommends **role selectors** and **test IDs**
- How to build maintainable tests with Page Object Model (POM)

## 📂 Project Layout
```
pages/LoginPage.js         # POM for login page
tests/login-flaky.spec.js  # Bad selectors (flaky demo)
tests/login-stable.spec.js # Good selectors (stable demo)
```

## ⚡ Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run flaky test:
   ```bash
   npx playwright test tests/login-flaky.spec.js
   ```
3. Run stable test:
   ```bash
   npx playwright test tests/login-stable.spec.js
   ```

## 🔑 Selector Best Practices (from Playwright docs)
1. Prefer **role selectors** (`getByRole`) → semantic & accessible
2. Use **test IDs** for non-semantic elements
3. Use **text selectors** only when text is stable
4. Avoid deeply nested CSS / XPath
5. Review selectors in code reviews

See: [Playwright Selectors Best Practices](https://playwright.dev/docs/selectors#best-practices)

## 🧩 Next Steps
- Add more page objects for forms, modals, or dynamic elements
- Demonstrate `getByTestId` usage
- Show scoping selectors (`locator().getByRole()`)
