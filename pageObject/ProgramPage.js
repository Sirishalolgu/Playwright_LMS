const dataSet = JSON.parse(JSON.stringify(require('../utils/add_new_program.json')));

class ProgramPage {
    constructor(page){
        this.page = page;
        this.programButton = page.getByRole("button", {name:'Program'});
        this.classButton = page.getByRole("button", {name:'Class'});
        this.batchButton = page.getByRole("button", {name:'Batch'});
        this.logoutButton = page.getByRole("button", {name:'Logout'});
        this.addProgramButton = page.locator(".mat-menu-item");
        this.addprgBtn = page.getByText("Add New Program");
        this.getLmsTitle = page.locator("mat-toolbar");
        this.manageProgram = page.getByText(" Manage Program");        
        this.closeButton = page.locator('.p-dialog-header-icon');
        this.disabledDeleteButton = page.locator('.p-button-danger').first();
        this.searchButton = page.getByPlaceholder('Search...');
        this.checkboxButton = page.locator('.p-checkbox-box')
        this.deleteConfirmMessage = page.locator('.p-toast-message-content');
        this.addProgramSuccessMessage = page.locator('.p-toast-detail');
        this.programName = page.locator('#programName');
        this.programDescription = page.locator('#programDescription');
        this.lastPaginator = page.locator('.p-paginator-last');
        this.cancelButton = page.getByText('Cancel');
        this.searchButton = page.locator('#filterGlobal');
        this.deleteButton = page.locator('#deleteProgram');
        this.confirmDelete = page.getByText('Yes');
        this.cancelDelete = page.getByText('No');
        this.programNameHeader = page.getByText('Program Name ');
        this.programDescriptionHeader = page.getByText('Program Description ');
        this.programNameHeader = page.getByText('Program Status ');
        this.sortButton = page.locator('.p-sortable-column-icon');
        this.programNameElements = page.locator('.p-datatable-tbody tr td:nth-child(2)'); 
        this.programDescriptionElements = page.locator('.p-datatable-tbody tr td:nth-child(3)');
        this.programStatusElements = page.locator('.p-datatable-tbody tr td:nth-child(4)'); 
        this.paginatorNext = page.locator('.p-paginator-next');
        this.paginatorLast = page.locator('.p-paginator-last');
        this.paginatorPrev = page.locator('.p-paginator-prev');
        this.pageHighlight = page.locator('.p-highlight');
        this.paginatorFirst = page.locator('.p-paginator-page');
        this.pageNumberBefore = null;
        this.pageNumberAfter = null;
        this.isActiveChecked = null; 
        this.deleteButtonCount = null;
        this.deleteButtonCountAfterDelete = null;
    }
    async clickOnProgram(){
        await this.programButton.click();                    
    }

    async closeAddProgram(){
        await this.clickOnAddProgramButton();
        await this.clickCloseButton();
    }

    async getManageProgramTitle(){       
        const fullText = await this.manageProgram.textContent();
        const trimmedText = fullText.trim();
        console.log("Manage program = " +trimmedText);
        return trimmedText;
    }

    async getLMSTitle(){
        const fullText = await this.getLmsTitle.textContent();
        console.log("Full Toolbar Text = " + fullText);
        // Extract only the "LMS - Learning Management System" part       
        const extractedTitle = fullText.match(/LMS - Learning Management System/)[0] || fullText.trim();
        console.log("Extracted Title = " + extractedTitle);
        return extractedTitle;
    }

    async getButtonTitle(){
        const fullText = await this.getLmsTitle.textContent();
        console.log("Full Toolbar Text = " + fullText);
        const menuText = fullText.replace("LMS - Learning Management System", "").trim();        
        const formattedMenu = menuText.replace(/([A-Z])/g, ", $1").trim().substring(2);
        console.log("Extracted Menu Items = " + formattedMenu);
        return formattedMenu;
    }

    async getLogoutButtonText(){
        const fullText = await this.getLmsTitle.textContent();
        console.log("Full Toolbar Text = " + fullText);         
         const menuText = fullText.replace("LMS - Learning Management System", "").trim();        
         const formattedMenu = menuText.replace(/([A-Z])/g, ", $1").trim().substring(2);
         console.log("Formatted Menu: " + formattedMenu);
         const logoutMatch = formattedMenu.match(/\bLogout\b/);  
         console.log("Logout Button Text: " + logoutMatch);        
         return logoutMatch[0] ;      }

    async getAddProgramButtonText(){     
        await this.page.waitForTimeout(200);
        const fullText = await this.addProgramButton.textContent();
        console.log("add program = " +fullText);
        return fullText;
    }

    async getManageProgramText(){
        const fullText = await this.manageProgram.textContent();
        const trimmedText = fullText.trim();
        console.log("Manage program = " +trimmedText);
        return trimmedText;
    }

    async getProgramTableHeadings(){     
        let headings = [];
        for(let i=1; i<=3; i++){
            const tableHeading = await this.page.locator("th").nth(i).textContent();
            console.log("table heading = " +tableHeading);
            headings.push(tableHeading.trim());
        }
        return headings.join(", ");
    }

    async getDeleteDisabled(){
      return  await this.disabledDeleteButton.isDisabled();
    }

    async getSerachButton(){      
       const seacrhText =  await this.page.locator('#filterGlobal').getAttribute('placeholder');
       console.log("Search Text = " +seacrhText);
       return seacrhText;
    }

    async getTableHeaders(){       
        let tableHeading = [];
        for(let i=1; i<=4; i++){
            const headingText = await this.page.locator('th').nth(i).textContent();
            tableHeading.push(headingText.trim());
            
        }
        let result = tableHeading.join(", ");
        result = result.replace(/\s*\/\s*/g, "/");
        return result;
    }

    async getUncheckedCheckBox(){      
       const checkIfFalse =  await this.checkboxButton.first().isChecked();
       return checkIfFalse;
    }

    async getAllCheckboxes(){      
        let checkboxStatus = [];
        const count =  await this.checkboxButton.count();
        console.log("count = " + count);
        for(let i=0;i<count;i++){
            const checkIfFalse = await this.checkboxButton.nth(i).isChecked();
            checkboxStatus.push(checkIfFalse);
        }
        return checkboxStatus;
    }

    async getSortIcon() {     
        let sortIcons = [];
        const count = await this.page.locator('p-sorticon').count();
        for (let i = 0; i < count; i++) {
            const sort = await this.page.locator('p-sorticon').nth(i).isVisible();
            sortIcons.push(sort);
        }
        return sortIcons;
    }

    async getDeleteIcons(){     
        let totalDeletIcons = [];
        const count = await this.page.getByRole('row').locator('.action').count();
        for(let i=0; i<count; i++){
            const deleteIcon = await this.page.locator('.action').nth(i).isVisible();
            totalDeletIcons.push(deleteIcon);
        }
        return totalDeletIcons;
    }

    async getPaginator(){      
        return await this.page.locator('.p-paginator-current').textContent();       
    }

    async getFooterText(){      
      console.log("footer content = " +await this.page.locator('.p-datatable-footer').textContent());
        return await this.page.locator('.p-datatable-footer').textContent();      
    }

    async clickOnAddProgramButton(){
        await this.addProgramButton.click();              
    }

    async clickOnAddProgram(){
        await this.clickOnProgram();
        await this.addProgramButton.click();              
    }

    async isPopUpVisible(){
        await this.page.waitForTimeout(500); 
        const isVisible = await this.page.locator('.p-dialog-resizable').isVisible(); 
        console.log("isVisible = " +isVisible);
        return isVisible;       
    }

    async clickCloseButton(){
        await this.closeButton.click();
    }

    async getProgramDetailsTitle(){
        return await this.page.locator('#pr_id_2-label').textContent();        
    }

    async getStarAfterName(){
        return await this.page.locator('label').filter({ hasText: 'Name*' }).locator('span').textContent();
    }

    async clickOnSave(){
        await this.page.locator('#saveProgram').click();
    }

    async getErrorMessage(){
        const errorMessageLocator = this.page.locator('.p-invalid');
        const count = await errorMessageLocator.count();
        let errorMessages = [];
        for(let i=0; i<count; i++){
            const errormsg = await errorMessageLocator.nth(i).textContent();
            errorMessages.push(errormsg.replace(".", ""));
        }
        return errorMessages;
    }

    async getStatusActive(){
        await this.page.locator('.p-radiobutton-box').first().click();
    }
    async checkIfActiveChecked(){
        const isChecked = await this.page.locator('.p-radiobutton-checked').isVisible();
        console.log('isChecked = '+ isChecked);
        return isChecked;
    }

    async getData(){       
        await this.page.waitForTimeout(500);
        await this.programName.fill(dataSet.programName);
        await this.page.waitForTimeout(500);
        await this.programDescription.fill(dataSet.programDescription);
        await this.page.waitForTimeout(500);
        await this.page.locator('.p-radiobutton-box').first().click();
        await this.clickOnSave();        
    }

    async getSuccessMessage(){
        let expectedMessage = dataSet.successMessage;
        const successMessage = await this.addProgramSuccessMessage.textContent();
        return successMessage;
    }

    async clickCancelProgram(){
        await this.page.getByText('Cancel').click();
    }
    
    async clickOnEditButton(){
       await this.page.locator('#editProgram').first().click();
    }

    async editProgramName(){
        await  this.clickOnEditButton();
        await this.page.waitForTimeout(500);
        await this.programName.fill(dataSet.editedName);
        await this.page.waitForTimeout(500);
        await this.clickOnSave();
        await this.page.waitForTimeout(500);
    }

    async getEdittedProgramName(programName){
        await this.page.waitForTimeout(500);
        const edittedName = await this.page.locator('td').filter({hasText: dataSet.editedName});
        console.log("EdittedName: "+edittedName);
        return await edittedName.isVisible();
    }

    async editProgramDescription(){
        await  this.clickOnEditButton();
        await this.page.waitForTimeout(500);
        await this.programDescription.fill(dataSet.editedDescription);
        await this.page.waitForTimeout(500);
        await this.clickOnSave();
    }

    async getEdittedProgramDescription(Description){
        await this.page.waitForTimeout(500);
        const edittedName = await this.page.locator('td').filter({hasText: dataSet.editedDescription}).first();
        console.log("EdittedName: "+edittedName);
        return await edittedName.isVisible();
    }

    async editProgramStatus(){        
        await  this.clickOnEditButton();
        await this.page.waitForTimeout(500);
         this.isActiveChecked = await this.page.locator('.p-radiobutton input[type="radio"]').first().isChecked(); 
         console.log("Active status = " + this.isActiveChecked );
         if( this.isActiveChecked === true){
            await this.page.locator('.p-radiobutton-box').last().click();
            console.log("Active status after edit for inactive = " + this.isActiveChecked );
        } else {
            await this.page.locator('.p-radiobutton-box').first().click();
            console.log("Active status after edit for active = " + this.isActiveChecked );
        }
        await this.clickOnSave();
        return  this.isActiveChecked;
       }

       async getEdittedActiveStatus(){
        const activeStatus =  this.isActiveChecked;
        return activeStatus;
       }

       async clickCancelButton(){
        await  this.clickOnEditButton();
        await this.page.waitForTimeout(500);
         await this.cancelButton.click();
       }

    async clickSearchWithEditedProgram(){
        await this.searchButton.fill(dataSet.editedName);
    }

    async clickSearchWithProgramDescription(){
        await this.searchButton.fill(dataSet.programDescription);
    }

    async clickSearchWithNonExistantProgram(){
        await this.searchButton.fill('random');
    }

    async clickSearchWithProgramName(){
        await this.searchButton.fill(dataSet.programName);
    }

    async clickSearchWithPartialProgramName(){
        await this.searchButton.fill(dataSet.partialName);
    }

    async getProgramSearchHeadings(){        
        let headings = [];
        for(let i=1; i<=3; i++){
            const tableHeading = await this.page.locator("th").nth(i).textContent();
            console.log("table heading = " +tableHeading);
            headings.push(tableHeading.trim());
        }
        return headings.join(", ");
    }
    
    async clickOnCloseOfProgramDetails(){
        await this.clickOnEditButton();
        await this.clickCloseButton();
    }

    async clickDeleteButton(){
        await this.page.waitForTimeout(500);
        this.deleteButtonCount = await this.deleteButton.count();
        console.log("Delete button count before program deleted = " + this.deleteButtonCount);
        if(this.deleteButtonCount > 0){
            await this.deleteButton.first().click();
        }else{
            console.log("No Program with the said search name not found");
        }
    }

    async getDeleteConfirm(){
        await this.page.waitForTimeout(500);
        return await this.page.locator('.p-confirm-dialog').isVisible();
    }

    async confirmDeleteProgram(){
        await this.page.waitForTimeout(1000);
        const isBoxVisible =  await this.page.locator('.p-confirm-dialog').isVisible();
        console.log("confirm box visible = " +isBoxVisible);
        await this.confirmDelete.click();
        this.deleteButtonCountAfterDelete = await this.deleteButton.count();
        await this.page.waitForTimeout(1000);
        console.log("Delete button count after program deleted = " + this.deleteButtonCountAfterDelete)
    }
    
    async isSearchedProgramDeleted(){
        await this.clickSearchWithProgramName();
        await this.page.waitForTimeout(1000);
        if(await this.deleteButton.isVisible()){
            this.deleteButtonCount = await this.deleteButton.count();
             console.log("deklete before confirm = "+ this.deleteButtonCount);
             await this.clickDeleteButton();
            await this.confirmDeleteProgram();        
        
        }
        else{
            console.log("No Program with the said search name not found");
        }
    }

    async isAllDeleted(){
        await this.page.waitForTimeout(1000);
        this.deleteButtonCount = await this.deleteButton.count();
        console.log("delete buttons after search  = " +this.deleteButtonCount);
        return this.deleteButtonCount;
    }

    async getProgramModule(){
        await this.addProgramButton.click();       
        await this.closeButton.click();
    }

    async getProgramDeletedMessage(){
        const getConfirmationMessage = await this.page.getByText('Program Deleted').textContent();
        console.log('Confirm messhge = '+ getConfirmationMessage);
        return getConfirmationMessage;
    }

    async cancelDeleteProgram(){
        await this.page.locator('.p-confirm-dialog-reject').click();
    }

    async closeDeleteConfirm(){
        await this.page.locator('.p-dialog-header-close').click();
    }

    async clickOnCheckbox(){
        await this.checkboxButton.nth(5).click();
    }

    async isDeleteEnabled(){
        const isEnabled = await this.disabledDeleteButton.first().isEnabled();
        console.log("Delete icon is now enabled = " + isEnabled);
        return isEnabled;
    }

    async clickDeleteByCheckboxSelection(){
        await this.clickOnCheckbox();
        await this.disabledDeleteButton.first().click();        
    }

    async clickProgramNameSort(){
        await this.sortButton.first().click();
    }

    async clickProgramDescriptionSort(){
        await this.sortButton.nth(1).click();
    }

    async clickProgramStatusSort(){
        await this.sortButton.last().click();
    }

    async isProgramNameSorted(){
        const allProgramElements = await this.programNameElements.allTextContents();
        console.log("all prog elements = " + allProgramElements);
        const sortedAsecending = [...allProgramElements].sort((a,b) => a.localeCompare(b));
        const sortedDescending = [...sortedAsecending].reverse();

        if(JSON.stringify(allProgramElements) === JSON.stringify(sortedAsecending)){
            console.log("All program names are ascended");
            return "Ascending";
        } else if(JSON.stringify(allProgramElements) === JSON.stringify(sortedDescending)){
            console.log("All program names are descending order");
            return "Descending";
        }else{
            console.log("Program names not sorted properly");
            return "Not sorted";
        }
    }

    async isProgramDesriptionSorted(){
        await this.page.waitForTimeout(1000);
        const allProgramElements = await this.programDescriptionElements.allTextContents();
        console.log("all prog elements = " + allProgramElements);
        const sortedAsecending = [...allProgramElements].sort((a,b) => a.localeCompare(b));
        const sortedDescending = [...sortedAsecending].reverse();

        if(JSON.stringify(allProgramElements) === JSON.stringify(sortedAsecending)){
            console.log("All program descriptions are ascended");
            return "Ascending";
        } else if(JSON.stringify(allProgramElements) === JSON.stringify(sortedDescending)){
            console.log("All program names are descending order");
            return "Descending";
        }else{
            console.log("Program description not sorted properly");
            return "Not sorted";
        }
    }

    async isProgramStatusSorted(){
        const allProgramElements = await this.programStatusElements.allTextContents();
        console.log("all prog elements = " + allProgramElements);
        const sortedAsecending = [...allProgramElements].sort((a,b) => a.localeCompare(b));
        const sortedDescending = [...sortedAsecending].reverse();

        if(JSON.stringify(allProgramElements) === JSON.stringify(sortedAsecending)){
            console.log("All program names are ascended");
            return "Ascending";
        } else if(JSON.stringify(allProgramElements) === JSON.stringify(sortedDescending)){
            console.log("All program status are descending order");
            return "Descending";
        }else{
            console.log("Program status not sorted properly");
            return "Not sorted";
        }
    }

    async clickPaginatorNext(){
        await this.paginatorNext.click();
    }

    async clickPaginatorLast(){
        await this.paginatorLast.click();
        await this.page.waitForTimeout(1000);
        this.pageNumberBefore = this.pageHighlight.textContent();
        console.log("page before = " + this.pageNumberBefore);
    }

    async clickPaginatorPrev(){
        await this.paginatorPrev.click();

    }

    async isPaginatorNextEnabled(){
        const isEnabled = await this.paginatorNext.isEnabled();
        console.log("paginator next is enabled" + isEnabled);
        return isEnabled;
    }

    async isPaginatorPrevEnabled(){
        const isEnabled = await this.paginatorPrev.isEnabled();
        console.log("paginator prev is enabled" + isEnabled);
        return isEnabled;
    }

    async isPreviousPage(){
        this.pageNumberBefore;
        await this.page.waitForTimeout(1000);
        this.pageNumberAfter = await this.pageHighlight.textContent();
        console.log("page after = " + this.pageNumberAfter);
        if(this.pageNumberAfter < this.pageNumberBefore){
            return true;
        }else{
            return false;
        }
    }

    async clickFirstPage(){
        await this.paginatorFirst.first().click();
    }

    getLocator(){
        return this.programButton;
    }

    getExpectedLinks(){
        const expectedLinks = []
    }

    async brokenLinks(page){
        const buttons = [
            { name: "Program", locator: this.programButton },
            { name: "Class", locator: this.classButton },
            { name: "Batch", locator: this.batchButton },
            { name: "Logout", locator: this.logoutButton }
        ];
    
        let brokenLinks = [];
        for (const button of buttons) {
            try {
                console.log(`Checking button: ${button.name}`);    
                await button.locator.waitFor({ timeout: 600 });    
                await button.locator.click();
                console.log(`Clicked ${button.name} button`);    
              if (button.name !== "Logout") {
                try {
                    await this.addProgramButton.waitFor({ state: 'visible', timeout: 300 });  
                    console.log("Add Program pop-up appeared!");
                    this.addProgramButton.click();
                    await this.closeButton.click();
                    console.log("Closed Add Program pop-up");    
                } catch (error) {
                    console.log("No pop-up appeared, continuing...");
                }
            }                 
                await page.waitForLoadState('domcontentloaded');    
                const newUrl = page.url();
                console.log(`➡ Navigated to: ${newUrl}`);    
                const response = await page.request.get(newUrl);
                const status = response.status();
                console.log(`HTTP Status: ${status}`);    
                if (status >= 400) {
                    console.log(`Broken Link: ${newUrl} (Status: ${status})`);
                    brokenLinks.push({ button: button.name, url: newUrl, status });
                } else {
                    console.log(`Working Link: ${newUrl} (Status: ${status})`);
                }    
                await page.goBack();
                await page.waitForLoadState('domcontentloaded');
    
            } catch (error) {
                console.log(`Error checking ${button.name}: ${error.message}`);
                brokenLinks.push({ button: button.name, url: 'N/A', status: 'Error' });
            }
        }
    
        if (brokenLinks.length > 0) {
            console.log(`Found ${brokenLinks.length} broken links!`, brokenLinks);
        } else {
            console.log("No broken links found!");
        }

    }
}

module.exports = {ProgramPage};
