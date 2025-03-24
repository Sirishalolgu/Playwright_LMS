class ProgramPage {

    constructor(page){
        this.page = page;
        //this.programButton = page.locator("#program");
        this.programButton = page.getByRole("button", {name:'Program'});
        this.classButton = page.getByRole("button", {name:'Class'});
        this.batchButton = page.getByRole("button", {name:'Batch'});
        this.logoutButton = page.getByRole("button", {name:'Add New Program'});
        this.getLmsTitle = page.locator(".mat-toolbar");
    }

    async clickOnProgram(){
        console.log("program button name is = " + await this.programButton.textContent());
        await this.programButton.click();
        //await this.page.waitForTimeout(10000);
       // console.log(await this.page.getLmsTitle.title());        
    }
    getLocator(){
        return this.programButton;
    }

    async getBroken(){
        await this.programButton.click();
        await page.waitForLoadState('domcontentloaded'); 
        const urli = this.page.url();
        console.log("url = "+ urli);
        const response = await page.request.get(urli);
                const status = response.status();
                if (status >= 400) {
                    console.log(`❌ Broken Link: ${urli} (Status: ${status})`);
                    brokenLinks.push({ button: id, url: urli, status });
                } else {
                    console.log(`✅ Working Link: ${urli} (Status: ${status})`);
                }
    }

    async brokenLinks(){
        const links = [this.programButton, this.classButton, this.batchButton, this.logoutButton];
        let brokenLinks = [];
        for (const id of links) {
            try {
                console.log(`🔎 Checking button: ${id}`);
                const button = await page.$(id);
    
                await page.waitForSelector(id, { timeout: 5000 }); // Ensure button exists
                await button.click(); // Click the button
    
                // Wait for navigation (if necessary)
                await page.waitForLoadState('domcontentloaded');
    
                // Get the new URL after clicking
                const newUrl = page.url();
                console.log(`➡ Navigated to: ${newUrl}`);
    
                // Check if the page loads properly
                const response = await page.request.get(newUrl);
                const status = response.status();
    
                if (status >= 400) {
                    console.log(`❌ Broken Link: ${newUrl} (Status: ${status})`);
                    brokenLinks.push({ button: id, url: newUrl, status });
                } else {
                    console.log(`✅ Working Link: ${newUrl} (Status: ${status})`);
                }
    
                // Navigate back to the home page if needed
                await page.goBack();
    
            } catch (error) {
                console.log(`⚠️ Error checking ${id}: ${error.message}`);
                brokenLinks.push({ button: id, url: 'N/A', status: 'Error' });
            }
        }
    }
}

module.exports = {ProgramPage};
