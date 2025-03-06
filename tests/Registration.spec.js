// import { faker } from '@faker-js/faker/locale/en';
const { faker } = require('@faker-js/faker');
const {test,expect} = require('@playwright/test')

test('Sign Up User', async ({page}) => {

    // function randomString(length){
    //     var str = "";
    //     for(var i = 0; i < length; ++i){
    //          str += randomChar();
    //     }
    //     return str;
    //  }
    //  var RandomString = randomString(32);
    //  var randomPassword = RandomString+ Math.random();

    const username = faker.internet.userName();
    const password = faker.internet.password();

    // const randomName = faker.person.fullName(); // Rowan Nikolaus
    // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

    const url = "https://dsportalapp.herokuapp.com/";
    await page.goto(url)

    // await page.pause()
await page.goto('https://dsportalapp.herokuapp.com/');
await page.getByRole('button', { name: 'Get Started' }).click();
await page.getByRole('link', { name: 'Register' }).click();
await page.getByRole('textbox', { name: 'Username:' }).click();
await page.getByRole('textbox', { name: 'Username:' }).fill(username);
await page.getByRole('textbox', { name: 'Password:' }).click();
await page.getByRole('textbox', { name: 'Password:' }).fill(password);
await page.getByRole('textbox', { name: 'Password confirmation:' }).click();
await page.getByRole('textbox', { name: 'Password confirmation:' }).fill(password);
await page.getByRole('button', { name: 'Register' }).click();
await page.getByRole('link', { name: 'Sign out' }).click();
});