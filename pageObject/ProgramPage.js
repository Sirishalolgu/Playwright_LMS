class ProgramPage {

    constructor(page){
        this.page = page;
        this.programButton = page.locator("#program");
        this.getLmsTitle = page.locator(".mat-toolbar");
    }

    async clickOnProgram(){
        console.log("program button name is = " + await this.programButton.textContent());
        await this.programButton.click();
        await this.page.waitForTimeout(10000);
        console.log(await this.page.getLmsTitle.title());        
    }
    getLocator(){
        return this.programButton;
    }
}

module.exports = {ProgramPage};
