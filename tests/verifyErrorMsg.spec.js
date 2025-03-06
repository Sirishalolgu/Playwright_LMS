const {test,expect} = require('@playwright/test')

test('Verify Error Message', async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin")
    await page.getByPlaceholder("Password").type("admin1234")
    await page.locator("//button[@type='submit']").click()

    const errorMessage = await page.locator("//p[contains(@class, 'oxd-alert-content-text')]").textContent();
    expect(errorMessage.includes("Invalid")).toBeTruthy()
    // await expect()
});