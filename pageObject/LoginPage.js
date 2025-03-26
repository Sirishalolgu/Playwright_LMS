const { createWorker } = require("tesseract.js");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('//input[@id="username"]');
    this.passwordField = page.locator('//input[@id="password"]');
    this.errorMessage = page.locator('[role="alert"]');
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login");
    this.programButton = page.locator("#program");

    // Fetch the second error message with role="alert"
    this.secondErrorMessage = page.locator('[role="alert"]').nth(1);

    this.applicationName = page.getByRole("img");
    this.signInContent = page.locator('text="Please login to LMS application"');
    this.textFields = page.locator("input");
    this.asteriskPassword = page.locator('//label[text()="Password"]/span');
    this.inputFields = page.locator("//input");
    this.userFieldLabel = page.getByText("User");
    this.passwordFieldLabel = page.getByText("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async goto(url) {
    await this.page.goto(url);
  }
  async goto() {
    console.log("I am in login page");
    await this.page.goto(
      "https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login"
    );
    await this.page.waitForLoadState("networkidle");

    // json to string to js object
    const jsonDataForLogin = JSON.parse(
      JSON.stringify(require("../utils/loginFields.json"))
    );
  }

  async loginWithValidCredentials() {
    //await this.page.waitForTimeout(1000);
    await this.page.waitForLoadState("networkidle");
    await this.username.fill(jsonDataForLogin.username);
    await this.page.waitForTimeout(100);
    await this.password.fill(jsonDataForLogin.password);
    await this.page.waitForTimeout(100);
    await this.loginButton.click();
    //await this.page.waitForTimeout(100);
    await this.page.waitForLoadState("networkidle");
    //  console.log("program button name is = " + await this.page.locator("#button").textContent());
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

  async clickUsername() {
    await this.usernameField.click();
  }

  async clickPassword() {
    await this.passwordField.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async getPasswordErrorMessage() {
    await this.usernameField.fill("");
    return await this.secondErrorMessage.textContent();
  }

  async getApplicationName() {
    await this.applicationName.screenshot({
      path: "screenshots/screenshot.png",
    });

    // Initialize Tesseract worker (without logger)
    const worker = await createWorker();
    await worker.load();
    await worker.reinitialize("eng"); // Directly initialize with language

    // Perform OCR on the image
    const {
      data: { text },
    } = await worker.recognize("screenshots/screenshot.png");

    console.log("Extracted Text:", text); // Prints the text inside the image

    await worker.terminate();
    return text;
  }

  async getSignInContent() {
    return await this.signInContent.textContent();
  }

  async visitInvalidUrl(visitInvalidUrl, page) {
    let response;
    try {
      // Visit the invalid URL
      response = await page.goto(visitInvalidUrl, {
        timeout: 10000, // Increased timeout
        waitUntil: "load",
      });
    } catch (error) {
      console.error("Error navigating to the invalid URL:", error.message);
      return;
    }

    return response;
  }

  async getUserFieldLabel() {
    const userText = await this.userFieldLabel.textContent();
    return userText;
  }

  async getPasswordFieldLabel() {
    return await this.passwordField.getAttribute("data-placeholder");
  }

  // Return a fresh locator for a given field name
  getAsteriskFieldLocator(fieldName) {
    return this.page.locator(`label:has-text("${fieldName} *")`);
  }

  // Method to verify the asterisk mark is visible
  async verifyAsteriskForField(fieldName) {
    const locator = this.getAsteriskFieldLocator(fieldName);
    return locator;
  }

  async isLoginPage() {
    return await this.page.url();
  }

  async getDropdownPlaceholder() {
    return await this.dropdownPlaceholder.textContent();
  }

  async getDropdownOptions() {
    const options = await this.dropdownOptions.allTextContents();
    return options;
  }

  async countTextFields() {
    return await this.textFields.count();
  }

  async isPasswordFieldVisible() {
    return await this.passwordField;
  }

  async isLoginButtonVisible() {
    return await this.loginButton.isVisible();
  }

  async isBrokenLink(url) {
    let response;

    try {
      response = await this.page.goto(url, { timeout: 5000 });
    } catch (error) {
      return { isBroken: true, status: "Connection Failed" }; // Handle failed connections
    }
    console.log(`Checked link: Status ${response.status()}`);

    return { isBroken: response.status() >= 400, status: response.status() };
  }

  async isFieldDescriptiveTextGreyedOut(expectedText) {
    const textField = this.page.locator(`role=textbox[name="${expectedText}"]`);

    // Ensure the element exists and is visible
    if (!(await textField.isVisible())) {
      console.log("ERROR: Field not visible.");
      return false;
    }

    // Get the computed color of the text (descriptive text or label)
    const color = await textField.evaluate((el) => getComputedStyle(el).color);

    return color === "rgba(0, 0, 0, 0.87)";
  }

  async isInputFieldOnCenter() {
    const inputFields = await this.inputFields.all();
    for (const inputField of inputFields) {
      const boundingBox = await inputField.boundingBox();
      if (!boundingBox) {
        return false; // Element not visible
      }
    }
    return true;
  }

  async clickLoginWithKeyboard() {
    await this.loginButton.focus();
    await this.page.keyboard.press("Enter");
  }

  async clickLoginWithMouse() {
    await this.loginButton.hover();
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
