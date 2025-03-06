import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';

const { Given, When, Then } = createBdd();
const LoginPage = require('../pageObject/LoginLMSPage');

    let page;
    let loginPage;

    Given('The browser is open', async ({ browser }) => {
      const context = await browser.newContext();
      page = await context.newPage();
    });

    Given('Admin gives the correct LMS portal URL', async () => {
      loginPage = new LoginPage(page);
      await loginPage.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login'); // Replace with your URL
    });

    Given('Admin gives the invalid LMS portal URL', async () => {
      loginPage = new LoginPage(page);
      let response;
      try{
        response = await page.goto('https://playwright-frontend-app-a9ea85794ad9990.herokuapp.com/invalid', { timeout: 5000 });
      }catch(error){
        console.error(`Error navigating to link: ${error.message}`);
        return; // Exit early if connection fails
      }
      expect(response.status()).toBeGreaterThanOrEqual(400);
    });

    Then('Admin should land on the login page', async () => {
      // Add assertions to verify login page elements (e.g., title, form elements)
      await expect(page).toHaveTitle(/LMS/); // Replace with your title
    });

    Then('Admin should receive application error', async () => {
      // Add assertions to verify error message or page content
      await expect(page).toHaveTitle(/Error/); // Replace with your error page title
    });

    Then('HTTP response >= 400. Then the link is broken', async () => {
      let response;
      try {
        response = await page.goto('http://localhost:3000/broken-link', { timeout: 5000 });
    } catch (error) {
        console.error(`Error navigating to link: ${error.message}`);
        return; // Exit early if connection fails
    }
      expect(response.status()).toBeGreaterThanOrEqual(400);
    });

    Then('Admin should see correct spellings in all fields', async () => {
      // Add assertions to verify spelling in all fields
      // This is a complex check and might require a separate helper function
      // or a more sophisticated approach to verify text content.
      // Example:
      // const textContent = await page.textContent('body');
      // expect(textContent).not.toContain('misspelled');
    });

    Then('Admin should see LMS - Learning Management System', async () => {
      const appName = await loginPage.getApplicationName();
      console.log(typeof appName, appName);
      expect(appName[0]).toBe('LMS - Learning Management System'); 
    });

    Then('Admin should see company name below the app name', async () => {
    //   const companyName = await loginPage.getCompanyName();
      await loginPage.getCompanyName();
    //   expect(companyName).toBeDefined(); // Replace with your company name
    });

    Then('Admin should see "Please login to LMS application"', async () => {
      const signInContent = await loginPage.getSignInContent();
      expect(signInContent).toBe('Please login to LMS application'); // Replace with your sign-in content
    });

    Then('Admin should see two text field', async () => {
      // Replace with actual locators
      const usernameField = page.locator('//input[@name="username"]');
      const passwordField = page.locator('//input[@name="password"]');
      await expect(usernameField).toBeVisible();
      await expect(passwordField).toBeVisible();
    });

    Then('Admin should see "User" in the first text field', async () => {
      const userFieldLabel = await loginPage.getUserFieldLabel();
      expect(userFieldLabel).toBe('User'); // Replace with your label
    });

    Then('Admin should see one dropdown', async () => {
      const dropdown = page.locator('//select[@name="role"]');
      await expect(dropdown).toBeVisible();
    });

    Then('Admin should see asterisk mark symbol next to text for mandatory fields', async () => {
      const asterisk = loginPage.asteriskUser;
      await expect(asterisk).toBeVisible();
    });

    Then('Admin should see "Password" in the second text field', async () => {
      const passwordFieldLabel = await loginPage.getPasswordFieldLabel();
      expect(passwordFieldLabel).toBe('Password'); // Replace with your label
    });

    Then('Admin should see asterisk mark symbol next to password text', async () => {
      const asterisk = loginPage.asteriskPassword;
      await expect(asterisk).toBeVisible();
    });

    Then('Admin should see "select the role " placeholder in dropdown', async () => {
      const placeholder = await loginPage.getDropdownPlaceholder();
      expect(placeholder).toBe('select the role '); // Replace with your placeholder
    });

    Then('Admin should see "Admin , staff, student" options in dropdown', async () => {
      const options = await loginPage.getDropdownOptions();
      expect(options).toEqual(['Admin ', 'staff', 'student']); // Replace with your options
    });

    Then('Admin should see input field on the centre of the page', async () => {
      const isCentered = await loginPage.isInputFieldOnCenter();
      expect(isCentered).toBe(true);
    });

    Then('Admin should see login button', async () => {
      const isVisible = await loginPage.isLoginButtonVisible();
      expect(isVisible).toBe(true);
    });

    Then('Admin should see user in gray color', async () => {
      const isGray = await loginPage.isUserFieldDescriptiveTextVisible();
      expect(isGray).toBe(true);
    });

    Then('Admin should see password in gray color', async () => {
      const isGray = await loginPage.isPasswordFieldDescriptiveTextVisible();
      expect(isGray).toBe(true);
    });

    When('Admin enter valid data in all field and clicks login button', async () => {
      await loginPage.enterUsername('valid_user'); // Replace with valid data
      await loginPage.enterPassword('valid_password'); // Replace with valid data
      await loginPage.clickLogin();
    });

    Then('Admin should land on home page', async () => {
      // Add assertions to verify home page elements (e.g., title, content)
      await expect(page).toHaveTitle(/Home/); // Replace with your home page title
    });

    When('Admin enter invalid data and clicks login button', async () => {
      await loginPage.enterUsername('invalid_user'); // Replace with invalid data
      await loginPage.enterPassword('invalid_password'); // Replace with invalid data
      await loginPage.clickLogin();
    });

    Then('Error message "Invalid username and password Please try again"', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toBe('Invalid username and password Please try again'); // Replace with your error message
    });

    When('Admin enter value only in password and clicks login button', async () => {
      await loginPage.enterPassword('valid_password'); // Replace with valid data
      await loginPage.clickLogin();
    });

    Then('Error message" Please enter your user name"', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toBe('Please enter your user name'); // Replace with your error message
    });

    When('Admin enter value only in user name and clicks login button', async () => {
      await loginPage.enterUsername('valid_user'); // Replace with valid data
      await loginPage.clickLogin();
    });

    Then('Error message" Please enter your password "', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toBe('Please enter your password '); // Replace with your error message
    });

    When('Admin enter valid credentials  and clicks login button through keyboard', async () => {
      await loginPage.enterUsername('valid_user'); // Replace with valid data
      await loginPage.enterPassword('valid_password'); // Replace with valid data
      await loginPage.clickLoginWithKeyboard();
    });

    When('Admin enter valid credentials  and clicks login button through mouse', async () => {
      await loginPage.enterUsername('valid_user'); // Replace with valid data
      await loginPage.enterPassword('valid_password'); // Replace with valid data
      await loginPage.clickLoginWithMouse();
    });
