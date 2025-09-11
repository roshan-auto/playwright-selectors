const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: 'https://roshan-auto.github.io/testbed/',
    headless: true,
    trace: 'on-first-retry'
  },
  reporter: [['list']]
});
