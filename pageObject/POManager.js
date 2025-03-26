const LoginPage = require('./LoginPage');
const ProgramPage = require('./ProgramPage');


class POManager{

    constructor(page){       
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.programPage = new ProgramPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getProgramPage(){
        return this.programPage;
    }
}
module.exports = POManager;