const { test, expect } = require('@playwright/test');

test('to test setup file working fine', async({page})=> {
    console.log('I am Global Setup')
})