class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login");
    }
    async goto(){       
        await this.page.goto("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login");
    }

    async loginWithValidCredentials(){
        this.username.fill("Playwright@gmail.com");
        this.password.fill("March@2025");
        this.loginButton.click();
    }
}

module.exports = {LoginPage};