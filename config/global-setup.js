// const { chromium, firefox, webkit } = require('@playwright/test');
// const fs = require('fs');

// module.exports = async () => {
//     const browsers = { chromium, firefox, webkit };
    
//     for (const [browserName, browserType] of Object.entries(browsers)) {
//         console.log(`🔹 Launching ${browserName} for global setup...`);
        
//         const browser = await browserType.launch();
//         const context = await browser.newContext();
//         const page = await context.newPage();

//         await page.goto('https://www.saucedemo.com/');
//         await page.fill('[data-test="username"]', 'standard_user');
//         await page.fill('[data-test="password"]', 'secret_sauce');
//         await page.click('[data-test="login-button"]');

//         // Ensure login was successful
//         await page.waitForURL('/inventory/');
        
//         // Save authentication state separately for each browser
//         const storageFile = `auth-${browserName}.json`;
//         await context.storageState({ path: storageFile });

//         console.log(`✅ Saved auth state for ${browserName}: ${storageFile}`);
//         await browser.close();
//     }
// };