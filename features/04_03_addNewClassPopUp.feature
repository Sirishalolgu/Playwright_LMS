Feature: validating class page 

Background: Admin is logged in to LMS Portal
    Given Admin is on dashboard page after Login 
    When Admin clicks the Class Navigation bar in the Header and clicks the addNewClass
    
            
    @New_Class_Added_With_Mandetory_Fields
  Scenario: Validating navigation to class page
    When Admin enters mandatory fields in the form and clicks on save button
    Then Admin gets message Class added Successfully 