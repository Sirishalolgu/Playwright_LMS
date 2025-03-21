const { test, expect } = require('@playwright/test');
//const dataset=JSON.parse(JSON.stringify(require("../utils/TestData.json")));
const dataset = require("../utils/TestData.json");

exports.BatchPage = class BatchPage {

    constructor(page) {
        this.page = page;
        this.page.setDefaultTimeout(10000);
        this.SignInButton = page.getByRole('textbox', { name: 'User' });
        this.Password = page.getByRole('textbox', { name: 'Password' });
        this.LoginButton = page.getByRole('button', { name: 'Login' });
        this.BatchButton = page.getByRole('button', { name: 'Batch' });
        this.pageHeader = page.locator('.box');


        this.BatchDescriptionColumnHeader = page.getByRole('columnheader', { name: 'Batch Description ' });
        this.BatchStatusColumnHeader = page.getByRole('columnheader', { name: 'Batch Status ' });
        this.NoOfClassesColumnHeader = page.getByRole('columnheader', { name: 'No Of Classes ' });
        this.ProgramNameColumnHeader = page.getByRole('columnheader', { name: 'Program Name ' });
        this.EditDeleteGridCell = page.getByRole('gridcell', { name: 'Edit / Delete' });


        this.AddNewBatchMenuItem = page.getByRole('menuitem', { name: 'Add New Batch' });
        this.BatchDetails = page.locator('span.p-dialog-title', { hasText: 'Batch Details' });

        this.dropdown = page.getByRole('button', { name: '' });


        this.ExpandDropdownButton = page.getByRole('button', { name: '' });
        this.TestProgramsOption = page.getByRole('option', { name: 'TestPrograms' });

        this.BatchNameTextbox = page.getByRole('textbox', { name: 'Batch Name *' });
        this.DescriptionTextbox = page.getByRole('textbox', { name: 'Description *' });
        this.FirstRadioButton = page.locator('.p-radiobutton-box').first();
        this.NumberOfClassesSpinButton = page.getByRole('spinbutton', { name: 'Number of Classes *' });
        this.SaveButton = page.getByRole('button', { name: 'Save' });
        this.BatchNamePrefixTextbox = page.locator('#batchProg');
        this.testProgramInput = page.locator('#batchProg');
        this.errormessage=  page.getByText('This field accept only');


    }

    async enterBatchNamePrefix(prefix) {
        await this.BatchNamePrefixTextbox.click();
        await this.BatchNamePrefixTextbox.fill(prefix);
    }

    getBatchNamePrefixTextBoxValue() {
        return this.testProgramInput.inputValue();
    }

    async enterBatchNameSuffix(invalidSuffix) {
        await this.BatchNameTextbox.fill(invalidSuffix);
    }

   async getBatchNameSuffixErrorMessage() {  
        return await this.errormessage.textContent();
    }



    getBatchNamePrefix() {

       // const testProgramInput = page.locator('#batchProg');
        const inputValue = this.testProgramInput.inputValue();
        console.log('Batch Program Text:', inputValue);
        return inputValue;
    }
    async selectProgramNameFromDropdown(programName) {
        await this.ExpandDropdownButton.click();
        const programOption = this.page.getByRole('option', { name: programName });
        await programOption.waitFor({ state: 'visible', timeout: 20000 });
        await programOption.click();

    }

    async isTestProgramEnabled() {

        this.dropdown.click();

        await this.TestProgramsOption.waitFor({ state: 'visible', timeout: 20000 });

        return await this.TestProgramsOption.isEnabled();

    }

    async isRadioButtonEnabled() {
        return await this.FirstRadioButton.isEnabled();
    }

    async isSaveButtonEnabled() {
        return await this.SaveButton.isEnabled();

    }
    async isBatchNameTextbox() {
        return await this.BatchNameTextbox.getAttribute('role') === 'textbox';
    }


    async isDescriptionTextbox() {
        return await this.DescriptionTextbox.getAttribute('role') === 'textbox';
    }
    async isNumberOfClassesSpinButton() {
        return await this.NumberOfClassesSpinButton.getAttribute('role') === 'spinbutton';
    }

    async verifyBatchDetailsPopupVisible() {
        await expect(this.BatchDetails).toBeVisible();
    }

    async getBatchDetailsText() {
        return await this.BatchDetails.textContent();
    }

    async enterBatchName(batchName) {
        await this.BatchNameTextbox.click();
        await this.BatchNameTextbox.fill(batchName);
    }
    async enterDescription(description) {
        await this.DescriptionTextbox.click();
        await this.DescriptionTextbox.fill(description);
    }

    async selectRadioButton(active = true) {
        if (active) {
            await this.FirstRadioButton.click();
        } else {
            const secondRadioButton = this.page.locator('.p-radiobutton-box').nth(1);
            await secondRadioButton.click();
        }
    }


    async enterNumberOfClasses(numberOfClasses) {
        await this.NumberOfClassesSpinButton.click();
        await this.NumberOfClassesSpinButton.fill(numberOfClasses.toString());
    }
    async clickAddBatchButton() {
        // await this.AddNewBatchMenuItem.click();
        await this.AddNewBatchMenuItem.dblclick();

    }
    async searchProgram(programName) {
        await this.ExpandDropdownButton.click();
        const programOption = this.page.getByRole('option', { name: programName });
        await programOption.click();
    }
    async fillCredentials() {
        await this.SignInButton.click();
        await this.SignInButton.fill(dataset.username);
        await this.Password.click();
        await this.Password.fill(dataset.password);
        await this.LoginButton.click();
    }

    async goto() {
        console.log("Navigating to:", dataset.url); // Debugging log
        await this.page.goto(dataset.url, { timeout: 60000, waitUntil: "domcontentloaded" });
    }


    // async clickMenu(menuName) {
    //     await this.page.waitForSelector('.cdk-overlay-backdrop', { state: 'hidden' }); // Wait for the backdrop to disappear

    //   //  await this.page.waitForLoadState('networkidle'); // Wait for the page to finish loading
    //     const menuButton = this.page.getByRole('button', { name: menuName });
    //     await menuButton.waitFor({ state: 'visible' }); // Wait for the button to be visible
    //     console.log(await this.page.getByRole('button', { name: menuName }).count());
    //     if (await this.page.isVisible('.cdk-overlay-backdrop')) {
    //         await this.page.click('.cdk-overlay-backdrop'); // Dismiss the backdrop if necessary
    //     }
    //     await menuButton.click();
    //    // await menuButton.click();
    // }

    async clickMenu(menuName) {
        // Wait for the page to finish loading
        await this.page.waitForLoadState('networkidle');

        // Wait for the backdrop to disappear
        if (await this.page.isVisible('.cdk-overlay-backdrop')) {
            console.log('Backdrop is visible. Attempting to dismiss...');
            await this.page.click('.cdk-overlay-backdrop'); // Dismiss the backdrop
            await this.page.waitForSelector('.cdk-overlay-backdrop', { state: 'hidden', timeout: 20000 });
        }

        // Locate the menu button
        const menuButton = this.page.getByRole('button', { name: menuName });
        await menuButton.waitFor({ state: 'visible', timeout: 20000 }); // Wait for the button to be visible

        // Click the menu button
        await menuButton.click();
    }



    async clickonBatchButton() {
        await this.BatchButton.click(); // Use the batch locator
    }

    // async verifyBatchPage(pageName) {
    //     await expect(this.pageHeader).toHaveText(`Manage ${pageName}`);
    // }

    // async verifyBatchPage(pageName) {
    //     const expectedText = `Manage ${pageName}`;
    //     await expect(this.pageHeader).toHaveText(expectedText, { useInnerText: true });
    // }

    async verifyBatchPage(pageName) {
        const expectedText = `Manage ${pageName}`;
        const uniquePageHeader = this.page.locator('.box', { hasText: expectedText });
        await expect(uniquePageHeader).toHaveText(expectedText, { useInnerText: true });
    }


    async saveBatch() {
        await this.SaveButton.click();
    }
}

