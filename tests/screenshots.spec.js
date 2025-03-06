const { test, expect } = require('@playwright/test');

test('current view screenshot', async({page}, testInfo)=>{
    await page.goto("https://www.numpyninja.com/")
    await page.screenshot({path:'screenshots/'+'homepageview_'+Date.now()+'.png'})

    const homepage = await page.screenshot();
    testInfo.attach('Home Screen', {
        body: homepage,
        contentType: 'image/png',
    });
});


test('full page screenshot', async({page}, testInfo)=>{
    await page.goto("https://www.numpyninja.com/")
    await page.screenshot({path:'screenshots/'+'homepageview_'+Date.now()+'.png', fullPage:true})

    const fullscreen = await page.screenshot({fullPage:true});
    testInfo.attach('Full Screen', {
        body: fullscreen,
        contentType: 'image/png',
    });
});


    test('Specific element screenshot', async({page}, testInfo)=>{
        await page.goto("https://www.numpyninja.com/")
        await page.screenshot({path:'screenshots/'+'homepageview_'+Date.now()+'.png', fullPage:true})
    
        const fullscreen = await page.screenshot({fullPage:true});
        testInfo.attach('Full Screen', {
            body: fullscreen,
            contentType: 'image/png',
        });

})