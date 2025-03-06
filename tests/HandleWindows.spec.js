import { test, expect } from '@playwright/test';

test('handle windows', async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    page.pause()

    const [second] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("'Follow On Twitter'")
    ]);

    console.log(second.url());

    const [third] = await Promise.all([
        page.waitForEvent("popup"),
         page.click("#followboth")
   ])
   await third.waitForLoadState();
   
   const pages = third.context().pages();
   console.log('No.of tabs: ' + pages.length);
   const facebookPage = pages[0];
   
   
   for (let index = 0; index < pages.length; index++) {
       const url = pages[index].url()
       if (url == "https://www.facebook.com/lambdatest/") {
          const facebookPage = pages[index];
       }
   }
   const text = await facebookPage.textContent("//h1")
   console.log(text);

});