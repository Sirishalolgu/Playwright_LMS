Feature: validating class page 

Background: Admin is logged in to LMS Portal
    Given Admin is on dashboard page after Login
    When Admin clicks the Class Navigation bar in the Header
    
@Navigation_to_classpage
  Scenario: Validating navigation to class page
    Then Admin should land on the Manage class page

@Title_on_classpage
  Scenario: Validating the Title in the Manage class page
    Then Admin should see the " LMS - Learning Management System " Title
  
@Header_on_classpage
  Scenario: Validating the ManageClass header in the Manage class page
    Then Admin should see the " Manage Class" Header

@Searchbar_on_classpage
  Scenario: Validating the searchbar headers in the class page
    Then Admin should see the Search Bar in Manage class page

@datatable_headers_on_classpage
  Scenario: Validating the data table headers in the class page
    Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name, Edit Delete
   
@test_and_pagination_icon_on_classpage
   Scenario: Validating the text and pagination icon on the class page
    Then Admin should see the " showing x to y of  z entries" and enabled pagination controls under the data table

@Delete_button_on_classpage
   Scenario: Validating the Delete button under the Manage class 
    Then Admin should see the Delete button under the Manage class page header.
   
@total_no_of_classes_on_classpage
   Scenario: Validate the total no of classes on class page
    Then Admin should see Total no of classes in below of the data table.