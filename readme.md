**This is very simple test for a page object in Playwright 
**It contains 2 files 
- 1- loginTest1.spec 
`which is using  "@playwright/test": "^1.44.0", from package.json and to use it we are doing 
const { test, expect } = require('@playwright/test');`
- 2- loginTest.spec
`which is using  "playwright": "^1.44.0" from package.json and to use it we are doing 
const { chromium } = require('playwright');`

To run this test file 'loginTest.spec.js' with Playwright's test runner, you can use the command:
`npm playwright test `

This command will only execute 1 test which has @playwright/test" dependencies and skip the other one. As you are utilizing playwright running 

To execute the other file 'loginTest.spec' you need to go the tests directory and execute command to run standalone file
`node loginTest.spec.js `

When you are working with framework you have to follow @playwright/test" dependency and try to use it. 


2- Another thing to note here: We are defining browser launching and page opening in 'loginTest.spec' as we are not using /test capabilities of playwright here. So you have to do it. 
On the other hand we are not doing it and it open it use it capabilities by default. 


*There are two primary ways to write and execute tests with Playwright:

Using Playwright Core: In this approach, you directly use the Playwright library (require('playwright')) to interact with browsers and perform actions. You manually handle tasks like launching a browser, creating a new page, and navigating to URLs.

Using Playwright Test: Playwright Test is a test framework built on top of Playwright. It provides a test runner and a testing API (test, expect, etc.) that simplifies writing and organizing tests. Playwright Test takes care of launching browsers, creating pages, and other setup/teardown tasks automatically, allowing you to focus on writing test logic.*