// loginTest1.spec.js

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage'); // 


test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    const url = 'https://www.saucedemo.com/'; // URL 
    const username = 'standard_user'; // Update with your username
    const password = 'secret_sauce'; // Update with your password

    await loginPage.navigateToLoginPage(url);
    await loginPage.login(username, password);

    // Add assertions or further actions after login if needed
    const pageTitle = await page.title();
    console.log("this we get as title " + pageTitle);
    // Verify the title
    expect(pageTitle).toBe('Swag Labs');
 //end
});
