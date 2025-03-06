import { createBdd } from "playwright-bdd";

const{Given, When, Then} = createBdd();


Given('I am on home page', async ({page}) => {
  await page.goto('https://playwright.dev');

  });
  
  When('I click link {string}', async ({page}, arg) => {
    await page.getByRole('link', { arg }).click();

  });
  
  Then('I see in title {string}', async ({page}, arg) => {
    await expect(page).toHaveTitle(new RegExp(arg));

  });