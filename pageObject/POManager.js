const LoginPage = require('./LoginPage');
const ProgramPage = require('./ProgramPage');
const ClassPage = require('./ClassPage');

class POManager{
    constructor(page){       
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.programPage = new ProgramPage(this.page);
        this.classPage = new ClassPage(this.page);
    }
    getLoginPage(){
        return this.loginPage;
    }
    getProgramPage(){
        return this.programPage;
    }
    getClassPage(){
        return this.classPage;
    }
}
module.exports = POManager;