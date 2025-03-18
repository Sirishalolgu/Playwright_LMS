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
        this.activeButton=page.locator("#Active");
        this.inactiveButton=page.locator("#Inactive");
        this.classTopicTextbox=page.locator("#classTopic")
        this.classDescriptionTextbox=page.locator("#classDescription");
        this.selectDatesTextbox=page.locator("#icon");
        this.noOfClassesTesxtbox=page.locator("#classNo");
        this.staffNameDropdown=page.getByRole('textbox', { name: 'Select a Staff Name' });
        this.commentTextbox=page.locator("#classComments");
        this.notesTextbox=page.locator("#classNotes");
        this.recordingTextbox=page.locator("#classRecordingPath");


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
}

module.exports = {ClassPage};
