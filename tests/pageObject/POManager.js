const {LoginPage} = require('./LoginPage');
const {ClassPage} = require('./ClassPage');


class POManager{

    constructor(page){       
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.classPage = new ClassPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

   getClassPage(){
        return this.classPage;
    }
}
module.exports = {POManager};