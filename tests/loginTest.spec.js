// loginTest.spec.js

const { chromium } = require('playwright');
// As we export LoginPage as an Object so make sure to use {LoginPage} as object with brackets
const { LoginPage } = require('../pages/loginPage');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);

    try {
        const url = 'https://www.saucedemo.com/'; // URL 
        const username = 'standard_user'; // Update with your username
        const password = 'secret_sauce'; // Update with your password
        await loginPage.navigateToLoginPage(url);
        await loginPage.login(username, password);
        
        // You can add assertions or further actions after login if needed


    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await browser.close();
    }
})();