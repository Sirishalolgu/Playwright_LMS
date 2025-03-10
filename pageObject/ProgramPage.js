class ProgramPage {

    constructor(page){
        this.page = page;
        this.programButton = page.getByRole("button", {name:'Program'});
    }

    async clickOnProgram(){
        await this.programButton.click();
    }
}

module.exports = {ProgramPage};
