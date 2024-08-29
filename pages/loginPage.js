// loginPage.js

class LoginPage {
    constructor(page) {
        this.page = page;

        this.errorMessage = this.page.locator("h3[data-test='error']")
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }

    async getErrorMessage(){
        return this.errorMessage.textContent();
    }
    async isErrorMessageVisible() {
        return this.errorMessage.isVisible();
      }
}

module.exports = { LoginPage }; // Export as an object
