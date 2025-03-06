import { createBdd } from "playwright-bdd";
import { LoginPage } from "../pages/LoginPage";

const{Given, When, Then} = createBdd();

Given('User is on Login Page', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/');
    await loginPage.login('invalid@example.com', 'wrongpassword');
      expect(await loginPage.getErrorMessage()).toContain('Warning: No match for E-Mail Address and/or Password.');
  });
  
  When('User enters valid Username into Username field', async ({}) => {
    // Step: When User enters valid Username into Username field
    // From: features\Orange.feature:5:5   
  });
  
  When('User enters valid password into password field', async ({}) => {
    // Step: And User enters valid password into password field
    // From: features\Orange.feature:6:5   
  });
  
  When('User clicks on Login button', async ({}) => {
    // Step: And User clicks on Login button
    // From: features\Orange.feature:7:5   
  });
  
  Then('User should Login successfully', async ({}) => {
    // Step: Then User should Login successfully
    // From: features\Orange.feature:8:5   
  });