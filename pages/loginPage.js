// loginPage.js

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
}

module.exports = { LoginPage }; // Export as an object
