import {test as setup, expect} from '@playwright/test';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async({page}) =>{
    await page.goto(url);
    await page.locator('#username').fill('uusss');
    await page.locator('#password').fill('uusss');
})