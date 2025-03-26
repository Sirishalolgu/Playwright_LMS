const testData=JSON.parse(JSON.stringify(require("../../utils/class.json")));

class ClassPage {

    constructor(page){
        this.page = page;
        this.classButton = page.getByRole("button", {name:'Class'});
        this.manageClassLabel=page.getByText(" Manage Class");
        this.titalOfClassPage=page.getByText('LMS - Learning Management System');
        this.searchBar=page.locator('#filterGlobal');
        this.batchName=page.getByText(" Batch Name ");
        this.classTopic=page.getByText("Class Topic ");
        this.classDiscription=page.getByText("Class Description ");
        this.status=page.getByText(" Status ");
        this.classDate=page.getByText(" Class Date ");
        this.staffName=page.getByText(" Staff Name ");
        this.paginationText=page.getByText("Showing 0 to 0 of 0 entries");
        this.EditDelete=page.getByText(" Edit / Delete ");
        this.deleteButton=page.getByRole("button",{name:'&nbsp;'});
        this.totalClass=page.getByText(" In total there are 0 classes. ");

        // Add new Class
        this.addNewClassButton=page.getByText("Add New Class");
        this.classDetail=page.getByLabel('Class Details')
        this.cancelButton=page.getByText("Cancel");
        this.saveButton=page.getByText("Save");
        this.batchNameText=page.getByLabel('Class Details').getByText('Batch Name')
        this.batchNameDropdown=page.getByRole('textbox', { name: 'Select a Batch Name' });
       // this.batchNameDropdown=page.getByPlaceholder('Select a Batch Name');
        this.classTopic=page.getByRole('columnheader', { name: 'Class Topic ' });
        this.classDescription=page.getByLabel('Class Details').getByText('Class Description');
        this.selectClassDates=page.getByText(" Select Class Dates ");
        this.noOfClasses=page.getByText("No of Classes");
        this.staffNameNew=page.getByLabel('Class Details').getByText("Staff Name");
        this.statusNew=page.getByLabel('Class Details').getByText("Status");
        this.comments=page.getByLabel('Class Details').getByText("Comments");
        this.recording=page.getByLabel('Class Details').getByText("Recording");
        this.notes=page.getByLabel('Class Details').getByText("Notes");
        this.activeButton=page.locator('input[type="radio"][value="Active"]');
        this.inactiveButton=page.locator('input[type="radio"][value="Inactive"]');
        this.classTopicTextbox=page.locator("#classTopic")
        this.classDescriptionTextbox=page.locator("#classDescription");
        this.selectDatesTextbox=page.locator("#icon");
        this.noOfClassesTesxtbox=page.locator("#classNo");
        this.staffNameDropdown=page.getByRole('textbox', { name: 'Select a Staff Name' });
        this.commentTextbox=page.locator("#classComments");
        this.notesTextbox=page.locator("#classNotes");
        this.recordingTextbox=page.locator("#classRecordingPath");

        this.batchOption = page.getByText('text=Python101'); 
        this.dropdownArrow = page.locator("span.p-dropdown-trigger-icon ng-tns-c171-231 pi pi-chevron-down");
        this.radioButtons = page.locator('input[name="category"]');
        this.dayDate=page.locator('span.p-ripple', { hasText: '27' });        
        this.selectDate=page.getByText(testData.mandatoryfeilds.date).first();
    

        //deleteClass
        this.closeButton = page.locator('button.p-dialog-header-icon.p-dialog-header-close.p-link.p-ripple');
        this. deleteButton = page.locator('button.p-button-rounded.p-button-danger.p-button-icon-only');
        this.confirmDelete=page.getByText('Confirm');
        this.NoButton=page.locator('button.p-confirm-dialog-reject.p-button');
        this.yesButton=page.getByRole('button',{name:'Yes'});
        this.delete_close_Button=page.locator('button.p-dialog-header-icon.p-dialog-header-close');
        this.classDeletemsg=page.locator('.p-toast-detail');


        //searchbox
        this.searchbox=page.locator("#filterGlobal");
        this.python101text=page.locator('td[_ngcontent-tix-c217]');

        //editClass
        this.editButton = page.locator('button.p-button-rounded.p-button-success.p-button-icon-only');
        this.classupdatemsg=page.locator('.p-toast-detail');

        //pagination
        this.nextPage=page.locator('.p-paginator-next');
        this.previousPage=page.locator('.p-paginator-prev');
        this.recordsOnNextPage=page.locator('.p-paginator-current');
        this.recordsOnPreviousPage=page.locator('.p-paginator-current');
        
    }

    async clickOnClass(){
        console.log("class page" +this.classButton);

        await this.classButton.click();
    }
    
    async getUrl()
    {
        return await this.page.url();

    }
    async clickOnAddNewClass()
    {
        console.log("Checking if addNewClass button exists...");
    
        await this.classButton.waitFor({ state: 'visible', timeout: 10000 });
        console.log("Class button is visible. Clicking now...");
        await this.addNewClassButton.click();
    }

    async AddNewclass_WithMandetoryFields()
    {
        
        await this.batchNameDropdown.click();
        await this.batchNameDropdown.fill(testData.mandatoryfeilds.batchname);
        //await this.dropdownArrow.click();
        //await this.batchOption.click();
        await this.classTopicTextbox.fill(testData.mandatoryfeilds.classtopic);
        await this.selectDatesTextbox.click();
       //await this.selectDatesTextbox.fill(testData.mandatoryfeilds.date);
       // await this.selectDate.click();
        //const datelog= await this.selectDatesTextbox.fill(testData.mandatoryfeilds.date);
        
        await this.dayDate.nth(2).click();
      //  this.noOfClassesTesxtbox.fill(testData.mandatoryfeilds.NoOfclass);
      // console.log(" date is"+datelog);
        await this.staffName.click();
       await this.staffNameDropdown.scrollIntoViewIfNeeded();
       await this.staffNameDropdown.click();
        await this.staffNameDropdown.fill(testData.mandatoryfeilds.staffname);
        await this.activeButton.scrollIntoViewIfNeeded();
      //  await this.activeButton.waitForElementState('visible'); 
        await this.activeButton.click();
        await this.saveButton.click();

    }

    async addNewclass_successMessage(expectedMessage)
    {
        this.page.once('dialog', async dialog => {
            console.log(`Popup message: ${dialog.message()}`);
            expect(dialog.message()).toBe(expectedMessage); // Validate popup message
        });
    }
    async searchBoxByBatchName()
    {
       // await this.searchbox.click();
        await this.searchbox.fill('Python101');
        const allbatchNames=await this.python101text.allTextContents();
        return allbatchNames.every(name => name.trim() === 'python101');
       // console.log("All batch names are 'Python101':", allbatchNames);
    }

    async searchBoxByClassTopic()
    {
  
        await this.searchbox.fill('Python006');
        const allclasstopics=await this.python101text.allTextContents();
        return allclasstopics.every(name => name.trim() === 'python006');
      
    }

    async searchBoxByStaffName()
    {
        await this.searchbox.fill('Getha Takur');
        const allclasstopics=await this.python101text.allTextContents();
        return allclasstopics.every(name => name.trim() === 'Getha Takur');   
    }
    async deleteClassButton()
    {
        await this.addNewClassButton.click();
        await this.closeButton.click();
        //await this.deleteButton.first().waitFor({ state: 'visible' });
        await this.deleteButton.first().click();

        console.log ("confirmdelete",this.confirmDelete);
      
    }
    async delete_NO_Button()
    {
        await this.NoButton.click();
    }
    async delete_yes_Button()
    {
        await this.yesButton.click();
        const msgDelete = await this.classDeletemsg.textContent();
        return msgDelete;
    }

    async delete_close_button()
    {
        await this.delete_close_Button.click();
    }

    
    async editClassButton()
    {
        await this.addNewClassButton.click();
        await this.closeButton.click();
        await this.editButton.first().click();
    }

    async editStaffName()
    {
        await this.staffNameDropdown.scrollIntoViewIfNeeded();
        await this.staffNameDropdown.click();
         await this.staffNameDropdown.fill("Saranya M");
         await this.saveButton.click();
       const updatemsg= await this.classupdatemsg.textContent();
       return updatemsg;
    }

    async editPopUP_CancelButton()
    {
        await this.staffNameDropdown.scrollIntoViewIfNeeded();
        await this.staffNameDropdown.click();
         await this.staffNameDropdown.fill("Saranya M");
         await this.cancelButton.click();
      
    }
    async NextPageValidation()
    {
        await this.nextPage.scrollIntoViewIfNeeded();
        await this.nextPage.click();
        const nextrecords= await this.recordsOnNextPage.textContent();
        console.log("nextrecords are:",nextrecords);
        return nextrecords;
    }

    async PreviousPageValidation()
    {
        await this.previousPage.scrollIntoViewIfNeeded();
        await this.previousPage.click();
        const previousrecords= await this.recordsOnPreviousPage.textContent();
        console.log("previousrecords are:",previousrecords);
        return nextrecords;
        
    }
}

module.exports = {ClassPage};
