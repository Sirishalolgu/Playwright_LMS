const { test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test'); 
const { BasePage } = require('../pages/BasePage');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
// const { CheckoutPage } = require('../pages/CheckoutPage');
// const { PaymentPage } = require('../pages/PaymentPage');

test('Complete product purchase process', async ({ page }) => {
  const productPage = new ProductPage(page);
  // Launch the browser first
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });

    // Create a context with a custom User-Agent
    const context = await browser.newContext({
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    });

    // ✅ Create a new page instance
    const pageInstance = await context.newPage();

    // ✅ Initialize BasePage and HomePage properly
    const basePage = new BasePage(pageInstance);
    // await basePage.init();  
    // await basePage.navigate('https://demo.nopcommerce.com/');

    await basePage.navigate('https://demo.nopcommerce.com/');

    const homePage = new HomePage(pageInstance); // ✅ Pass the correct page instance
    await homePage.selectProduct('Desktops'); // ✅ This will now work correctly
    // const basePage = new BasePage(context);
    
    // const homePage = new HomePage(context);

//   const checkoutPage = new CheckoutPage(page);
//   const paymentPage = new PaymentPage(page);

  // Create a context with a custom User-Agent
//   const context = await browser.newContext({
//     userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
// });

// const basePage = new BasePage(context);
// await basePage.navigate('https://demo.nopcommerce.com/');

  // await homePage.navigate('/');
  await homePage.selectProduct('Desktops');
  // await homePage.searchProduct('iPod Nano');
  await productPage.addProductToCart();
  await productPage.goToCart();
//   await checkoutPage.proceedToCheckout();
//   await paymentPage.selectPaymentMethod('cod'); // Example: 'cod' for Cash on Delivery
//   await paymentPage.confirmOrder();

  // Verify order confirmation
//   expect(await page.textContent('.order-success')).toContain('Your order has been placed!');
});
