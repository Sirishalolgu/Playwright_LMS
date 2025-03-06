import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shop.webdriver.io/');
  await page.getByRole('link', { name: 'WebdriverIO Trucker Cap $' }).click();
  await page.getByRole('combobox').selectOption('Black');
  await page.getByRole('button', { name: 'Add to Cart $' }).click();
  await page.getByRole('button', { name: 'Continue to cart $' }).click();

  await page.getByRole('button', { name: 'Continue to payment' }).click();
  // await page.locator('.grid-controls').click({
  //   button: 'right'
  // });
  await page.locator('[data-test-id="contact-form"]').getByLabel('Country Selector').selectOption('CA');
  await page.locator('[data-test-id="contact-phone-input"]').click();
  // await page.locator('[data-test-id="contact-phone-input"]').click();
  // await page.locator('.📚19-6-0_FrL8').first().click({
  //   modifiers: ['ControlOrMeta']
  // });
  // await page.locator('.inline-message > .📚19-6-0rIy1g > .📚19-6-0_FrL8').first().click();
  // await page.getByRole('button', { name: 'Place order $' }).click();
  // await page.locator('[data-test-id="contact-phone-input"]').click();
  // await page.getByLabel('Country Selector').nth(1).selectOption('CA');
  // await page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
  await page.locator('[data-test-id="contact-phone-input"]').fill('657-216-4811');

  await page.locator('[data-test-id="contact-email-input"]').click();
  await page.locator('[data-test-id="contact-email-input"]').fill('smilealwaz2017@gmail.com');

  await page.evaluate(() => window.scrollBy(0, 900));
  // await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
  const creditCard = await page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'Card number' });
  // const creditCard = page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'Card number' });
  // await creditCard.scrollIntoViewIfNeeded();
  if(await creditCard.isVisible()){
    await creditCard.click();
  }
  

  await page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('5366961284886082');
  await page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'MM/YY' }).fill('08/27');
  await page.locator('#sq-card div').first().click();
  await page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'MM/YY' }).click();
  await page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'CVV' }).click();
  await page.locator('iframe[name="single-card-3602a1e3-cc29-a671-5c40-815c7dda7da1"]').contentFrame().getByRole('textbox', { name: 'CVV' }).fill('761');
  await page.locator('.grid-controls').click();
  // await page.locator('[data-test-id="contact-phone-input"]').click();
  await page.getByRole('button', { name: 'Place order $' }).click();
});