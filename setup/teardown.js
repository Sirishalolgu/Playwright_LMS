const { test, expect } = require('@playwright/test');

test('to test teardown file working fine', async({page})=> {
    console.log('I am Global teardown')
})