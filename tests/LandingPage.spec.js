const {test,expect} = require('@playwright/test')

test('Valid login', async ({page}) => {
    const url = "https://dsportalapp.herokuapp.com/";
    await page.goto(url)

    const currentUrl = await page.url()
    console.log("Title is "+url)

    const title = await page.title()
    console.log("Titile is: "+title)

    //Locate Get Started button and click it
    await page.getByText("Get Started").click()

    // Locate Sign In link at top right corner and click it
    await page.locator("//a[contains(text(),'Sign in')]").click()
    
    //Verify Sign In page has login in url
    await expect(page).toHaveURL(/login/)

    //Login with valid username
    await page.locator("//input[@id='id_username']").type("Numpysdet84")
    await page.locator("//input[@id='id_password']").type("sdet84batch")

    //Click login button
    await page.locator("//input[@type = 'submit']").click()

    //Sign Out
    await page.locator("//a[contains(text(),'Sign out')]").click()

    //validate sign out brings user to home page
    await expect(page).toHaveURL(/home/)


});