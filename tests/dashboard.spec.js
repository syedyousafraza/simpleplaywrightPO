
const { Dashboard } = require("../pages/dashboard");
const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage")


test("click on something", async ({ page }) => {


    const dashboard = new Dashboard(page);
    const login = new LoginPage(page);

    const url = 'https://www.saucedemo.com/'; // URL 
    const username = 'standard_user'; // Update with your username
    const password = 'secret_sauce'; // Update with your password

    await login.navigateToLoginPage(url);
    await login.login(username, password);

    //apply assertion that element is visible

 

});