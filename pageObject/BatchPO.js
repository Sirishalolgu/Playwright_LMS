const { test, expect } = require('@playwright/test');
exports.BatchPage = class BatchPage {


    constructor(page) {
        this.page = page;
        this.page.setDefaultTimeout(10000);
        this.SignInButton = page.getByRole('textbox', { name: 'User' });
        this.Password = page.getByRole('textbox', { name: 'Password' });
        this.LoginButton = page.getByRole('button', { name: 'Login' });
        this.BatchButton = page.getByRole('button', { name: 'Batch' }); 
        this.pageHeader = page.locator('.box');
    }

    async fillCredentials() {
        await this.SignInButton.click();
        await this.SignInButton.fill('Playwright@gmail.com');
        await this.Password.click();
        await this.Password.fill('March@2025');
        await this.LoginButton.click();
    }

    async goto() {
        await this.page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
    }

    
    async clickMenu(menuName) {
        const menuButton = this.page.getByRole('button', { name: menuName });
        await menuButton.click();
    }



    async clickBatchButton() {
        await this.BatchButton.click(); // Use the batch locator
    }

    async verifyBatchPage(pageName) {
        await expect(this.pageHeader).toHaveText(`Manage ${pageName}`);
    }
}

