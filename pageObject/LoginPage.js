class LoginPage{
    constructor(page){
        this.page = page;
    }
    async goto(){       
        await this.page.goto("https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login");
    }
}

module.exports = {LoginPage};