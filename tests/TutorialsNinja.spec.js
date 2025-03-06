import { test, expect } from '@playwright/test';

test('Test placing product order', async ({ page }) => {

    let orderPlacedText = "Your order has been placed!";

  await page.goto('https://tutorialsninja.com/demo/');
  await page.getByRole('link', { name: 'MP3 Players', exact: true }).click();
  await page.getByRole('link', { name: 'Show AllMP3 Players' }).click();
  await page.getByRole('button', { name: ' Add to Cart' }).nth(3).click();
  await page.getByRole('link', { name: 'shopping cart', exact: true }).click();
  await page.getByRole('link', { name: 'Checkout', exact: true }).click();
  await page.getByRole('radio', { name: 'Guest Checkout' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('abcd');
  await page.getByRole('textbox', { name: '* Last Name' }).click();
  await page.getByRole('textbox', { name: '* Last Name' }).fill('xyz');
  await page.getByRole('textbox', { name: '* E-Mail' }).click();
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: '* Telephone' }).click();
  await page.getByRole('textbox', { name: '* Telephone' }).fill('123-344-4456');
  await page.getByRole('textbox', { name: '* Address' }).click();
  await page.getByRole('textbox', { name: '* Address' }).fill('555 Sara Street');
  await page.getByRole('textbox', { name: '* City' }).click();
  await page.getByRole('textbox', { name: '* City' }).fill('Salt');
  await page.getByRole('textbox', { name: '* Post Code' }).click();
  await page.getByRole('textbox', { name: '* Post Code' }).fill('3445');
  await page.getByLabel('Country').selectOption('223');
  await page.getByLabel('Region / State').selectOption('3636');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Confirm Order' }).click();

  await expect(page.getByRole('heading', { name: 'Your order has been placed!' })).toHaveText(orderPlacedText)

  await page.close()

});