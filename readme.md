# Simple Playwright Page Object

## Description

The **Simple Playwright Page Object** project is a Playwright setup for end-to-end testing. It supports multiple browsers and provides configuration for running tests with various options. This project is set up with Playwright's test framework and includes scripts for running tests in different browsers.

## Configuration

The configuration for Playwright is defined in the `playwright.config.js` file:

- **Test Directory**: `./tests` - Location of your test files.
- **Timeouts**: 
  - Global test timeout: 30 seconds
  - Expect assertion timeout: 10 seconds
- **Reporters**:
  - List reporter for console output
  - JSON reporter, outputting results to `test-results.json`
- **Default Browser**: Chromium
- **Browser Options**:
  - Headless: `false` (runs with browser UI)
  - Viewport: 1280x720
  - Ignore HTTPS errors: `true`
  - Video recording: `off`
  - Screenshots on failure: `on`
- **Projects**:
  - Chromium
  - Firefox
  - WebKit
- **Output Directory**: `test-results/` - Directory for storing test artifacts

## Screenshot 

![alt text](image.png)


## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <https://github.com/syedyousafraza/simpleplaywrightPO.git>
cd <repository-directory>
npm install


Scripts
Use the following npm scripts to run your tests:

Run All Tests: Executes tests in all browsers.
npm test

Run Tests in Firefox: Executes tests only in Firefox.
npm run test:firefox

Run Tests in Chromium: Executes tests only in Chromium.
npm run test:chromium

Run Tests in WebKit: Executes tests only in WebKit.
npm run test:webkit

Output
Test results are saved in the test-results/ directory. The test-results.json file is generated with the JSON reporter. Ensure that test-results.json and the test-results/ directory are added to .gitignore to avoid committing test artifacts.

