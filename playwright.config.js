// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Directory where your test files are located
  timeout: 30000,      // Global timeout for tests
  expect: {
    timeout: 10000      // Timeout for expect assertions
  },
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]], // Reporters to use
  use: {
    browserName: 'chromium', // Default browser
    headless: false,          // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    video: 'off',             // Record videos of the test runs
    screenshot: 'on',        // Take screenshots on failures
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
  outputDir: 'test-results/', // Directory for storing test artifacts
});
