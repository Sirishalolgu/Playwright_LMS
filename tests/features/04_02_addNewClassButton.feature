Feature: validating addNewclass button 

Background: Admin is on the Manage class page after clicking class on navigation bar header

   Given Admin is on dashboard page after Login
    When Admin clicks the Class Navigation bar in the Header and clicks the addNewClass 
    
    
@classDetailPopup
  Scenario: Validate Class Details Popup window
    Then Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button 

@inputfieldsValidation
  Scenario: Validate input fields and their text boxes in Class details form 
    Then Admin should see few input fields and their respective text boxes in the class details window