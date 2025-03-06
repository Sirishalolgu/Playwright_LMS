import { test, expect } from '@playwright/test';
const { faker } = require('@faker-js/faker');

// import exp from 'constants';

test.describe('Register, Login and Logout test', ()=> {
    test('Register new user', async({page}) => {

        let email = faker.internet.email();
        
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php');
        await expect(await page.url()).toContain('https://ecommerce-playground.lambdatest.io/index.php')
        
        await page.getByRole('button', { name: ' My account' }).hover();
        await page.getByRole('link', { name: 'Register', exact: true }).click();
        await expect(page.url()).toContain('account/register')

        await page.getByRole('textbox', { name: 'First Name*' }).click();
        await page.getByRole('textbox', { name: 'First Name*' }).fill('Smile');
        await page.getByRole('textbox', { name: 'Last Name*' }).click();
        await page.getByRole('textbox', { name: 'Last Name*' }).fill('Alwaz');

        await page.getByRole('textbox', { name: 'E-Mail*' }).fill(email);
        await page.getByRole('textbox', { name: 'Telephone*' }).fill('123456789');
        await page.getByRole('textbox', { name: 'Password*' }).fill('smile1234');
        await page.getByRole('textbox', { name: 'Password Confirm*' }).fill('smile1234');
        await page.getByText('I have read and agree to the').click();
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('link', { name: ' Logout' }).click();
        await page.getByRole('link', { name: 'Continue' }).click();
    })

    test('Login existing user', async({page}) => {

        let email = faker.internet.email();
        
        await page.goto('https://ecommerce-playground.lambdatest.io/index.php');
        await expect(await page.url()).toContain('https://ecommerce-playground.lambdatest.io/index.php')
        
        await page.getByRole('button', { name: ' My account' }).hover();
        
    })
})