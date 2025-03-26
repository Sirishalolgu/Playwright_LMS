// json to string to js object
const jsonDataForLogin = JSON.parse(JSON.stringify(require("../../utils/loginFields.json")));
class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login");
        this.programButton = page.locator("#program");
    }
    async goto(){       
        console.log("I am in login page");
        await this.page.goto(jsonDataForLogin.url);
        await this.page.waitForLoadState('networkidle');
    }

    async loginWithValidCredentials(){
        //await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('networkidle');
        await this.username.fill(jsonDataForLogin.username);
        await this.page.waitForTimeout(100);
        await this.password.fill(jsonDataForLogin.password);
        await this.page.waitForTimeout(100);
        await this.loginButton.click();
        //await this.page.waitForTimeout(100);
        await this.page.waitForLoadState('networkidle');
      //  console.log("program button name is = " + await this.page.locator("#button").textContent());
    }
}

module.exports = {LoginPage};