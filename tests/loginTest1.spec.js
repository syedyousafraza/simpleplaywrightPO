// loginTest1.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage.js'); // 
const { Dashboard } = require('../pages/dashboard.js');

test('Login Successfull Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new Dashboard(page);

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

    // // Ensure the URL is correct after login
    // const currentURL = page.url();
    // console.log('Current URL after login:', currentURL);
    // expect(currentURL).toBe('https://www.saucedemo.com/inventory.html'); // Update this to the expected URL after login

    // await dashboard.clickOnProduct();
});

test('Failed Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboard = new Dashboard(page);

    const url = 'https://www.saucedemo.com/'; // URL 
    const username = 'standard_user11'; // Update with your username
    const password = 'secret_sauce11'; // Update with your password

    await loginPage.navigateToLoginPage(url);
    await loginPage.login(username, password);

    // Add assertions or further actions after login if needed
    // Check for the error message
    const isErrorVisible = await loginPage.isErrorMessageVisible();
    expect(isErrorVisible).toBeTruthy();

    const errorMessage = await loginPage.getErrorMessage();
    console.log("Login error message: " + errorMessage);
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service'); // Update message based on your application
});