const { createWorker } = require('tesseract.js');

class LoginLMSPage {
    constructor(page) {
      this.page = page;
      this.usernameField = page.locator('//input[@id="username"]'); // Replace with actual locators
      //getByRole('textbox', { name: 'User' })
      this.passwordField = page.locator('//input[@id="password"]'); // Replace with actual locators
      this.loginButton = page.locator('//button[@type="submit"]'); // Replace with actual locators
      this.errorMessage = page.locator('.error-message'); // Replace with actual locators
      // this.applicationName = page.locator('.application-name'); // Replace with actual locators
      this.applicationName = page.getByRole('img');
      //getByRole('img')
      this.companyName = page.locator('.company-name'); // Replace with actual locators
      this.signInContent = page.locator('.sign-in-content'); // Replace with actual locators
      this.userFieldLabel = page.locator('//label[text()="User"]'); // Replace with actual locators
      this.passwordFieldLabel = page.locator('//label[text()="Password"]'); // Replace with actual locators
      this.dropdown = page.locator('//select[@name="role"]'); // Replace with actual locators
      this.asteriskUser = page.locator('//label[text()="User"]/span'); // Replace with actual locators
      this.asteriskPassword = page.locator('//label[text()="Password"]/span'); // Replace with actual locators
      this.dropdownPlaceholder = page.locator('//select[@name="role"]/option[text()="select the role "]'); // Replace with actual locators
      this.dropdownOptions = page.locator('//select[@name="role"]/option'); // Replace with actual locators
      this.inputFields = page.locator('//input'); // Replace with actual locators
    }

    async goto(url) {
      await this.page.goto(url);
    }

    async enterUsername(username) {
      await this.usernameField.fill(username);
    }

    async enterPassword(password) {
      await this.passwordField.fill(password);
    }

    async clickLogin() {
      await this.loginButton.click();
    }

    async getErrorMessage() {
      return await this.errorMessage.textContent();
    }

    async getApplicationName() {

      await this.applicationName.screenshot({ path: 'screenshots/screenshot.png' });

   // Initialize Tesseract worker (without logger)
   const worker = await createWorker();
    await worker.load();
    await worker.reinitialize('eng');  // Directly initialize with language

    // Perform OCR on the image
    const { data: { text } } = await worker.recognize('screenshots/screenshot.png');

    console.log("Extracted Text:", text);  // Prints the text inside the image
    const extractedText = "fe LMS - Learning Management System";
    const match = extractedText.match(/LMS - Learning Management System/);

if (match) {
    console.log(match[0]);  // Output: "LMS - Learning Management System"
}

    await worker.terminate();
    return match;

      // console.log(receivedText);
      // const match = receivedText.match(/\+\s*(.*LMS - Learning Management System)/);
      // console.log(match);
      // console.log("Extracted Text:", match ? match[1].trim() : "No match found");
      // const match = text.match(/\+\s*(.*LMS - Learning Management System)/);

      // if (match) {
      //   console.log("Extracted Text:", match[1].trim()); // "LMS - Learning Management System"
      // } else {
      //   console.log("No match found");
      // }
      // return match;
      // console.log("Extracted Text:", text);

// expect(text).toContain("Expected Content");
//       await expect(this.applicationName).toBeVisible(); // Ensures image is visible
//       return await this.applicationName.textContent();
    }

    async getCompanyName() {
      return await this.companyName.textContent();
    }

    async getSignInContent() {
      return await this.signInContent.textContent();
    }

    async getUserFieldLabel() {
      return await this.userFieldLabel.textContent();
    }

    async getPasswordFieldLabel() {
      return await this.passwordFieldLabel.textContent();
    }

    async getDropdownPlaceholder() {
      return await this.dropdownPlaceholder.textContent();
    }

    async getDropdownOptions() {
      const options = await this.dropdownOptions.allTextContents();
      return options;
    }

    async isLoginButtonVisible() {
      return await this.loginButton.isVisible();
    }

    async isUserFieldDescriptiveTextVisible() {
      return await this.usernameField.evaluate(el => {
        return window.getComputedStyle(el).color === 'rgb(128, 128, 128)'; // Example: Check for gray color
      });
    }

    async isPasswordFieldDescriptiveTextVisible() {
      return await this.passwordField.evaluate(el => {
        return window.getComputedStyle(el).color === 'rgb(128, 128, 128)'; // Example: Check for gray color
      });
    }

    async isInputFieldOnCenter() {
      const inputFields = await this.inputFields.all();
      for (const inputField of inputFields) {
        const boundingBox = await inputField.boundingBox();
        if (!boundingBox) {
          return false; // Element not visible
        }
        // Implement logic to check if the input field is on the center of the page
        // This will depend on your page layout.  Example:
        // const pageWidth = await this.page.viewportSize().width;
        // const inputFieldCenterX = boundingBox.x + boundingBox.width / 2;
        // if (Math.abs(inputFieldCenterX - pageWidth / 2) > someTolerance) {
        //   return false;
        // }
      }
      return true;
    }

    async clickLoginWithKeyboard() {
      await this.loginButton.focus();
      await this.page.keyboard.press('Enter');
    }

    async clickLoginWithMouse() {
      await this.loginButton.hover();
      await this.loginButton.click();
    }
  }

  module.exports = LoginLMSPage;
