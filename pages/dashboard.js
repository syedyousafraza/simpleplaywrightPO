// pages/dashboard.js
const { expect } = require('@playwright/test');

class Dashboard {
    constructor(page) {
        this.page = page;
        this.productName = this.page.locator('[data-test="item-4-title-link"]');
        this.backToProductLink = page.locator('[data-test="back-to-products"]');
      //  await page.locator('[data-test="item-4-title-link"]').click();
      //  await page.locator('[data-test="back-to-products"]').click();
    }

    async clickOnProduct() {
        console.log('Waiting for the product name element to be visible');
        console.log('Element is visible, clicking on the product name element');
        await this.productName.click();
        console.log('Clicked on the product name element');
        await expect(this.backToProductLink).toBeVisible();        
    }

    async verifyVisibility(){
        return await expect( this.productName).toBeVisible();
    }
}

module.exports = {Dashboard};
