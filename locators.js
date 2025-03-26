class locators {
    constructor(){
        this.locators = new Map([
            ["LoginSauceLabPage", new Map([
                ["username" , '[data-test="username"]'],// an array of 2 elements(key-value pair is inside an array)
                ["password" , '[data-test="password"]'], //Each entry in new Map([...]) must be an array with 2 elements: [key, value].
                ["loginButton" , '[data-test="login-button"]'],
                ["errorMessage", '//h3[@data-test="error"]']
            ])],
            ["Home Page", new Map([
                ["addToCart", '[data-test="add-to-cart-sauce-labs-backpack"]'], //Xpath locator
                ["sauceLabPack",'a[data-test="item-4-title-link"]'] //cSS locator

            ])]
        ]);
    }
    getLocator(page, element) {
        return this.locators.get(page)?.get(element) || null;

        
    }
}

module.exports = new locators();