Feature: Navigation

  Background: Admin is logged in to LMS Portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program on the navigation bar

  @NavigationCheck
  Scenario: Verify that Admin is able to navigate to Program module
    Then Admin should be navigated to Program module

  @BrokenLinks
  Scenario: Verify any broken links on program page
    Then Admin should not have any broken links for Program module

  # @VefiryLMSTitle
  # Scenario: Verify heading in menu bar
  #   Then Admin should see the heading "LMS - Learning Management System"

  # @VerifyOtherModuleNames
  # Scenario: Verify other modules name displayed in menu bar
  #   Then Admin should see the module names as in order "Program, Batch, Class, Logout"

  # @VerifyLogout
  # Scenario: Verify Logout displayed in menu bar
  #   Then Admin should see Logout in menu bar

  # @VerifySubMenu
  # Scenario: Verify sub menu displayed in program menu bar
  #   Then Admin should see sub menu in menu bar as "Add New Program"

  # @VefiryManageProgram
  # Scenario: Verify heading in manage program
  #   Then Admin should see the heading "Manage Program"

  # @VerifyProgramModuleDetails
  # Scenario: Verify view details of programs
  #   Then Admin should able to see Program name, description, and status for each program

  # @VerifyMultiDelete
  # Scenario: Verify the Multiple Delete button state
  #   Then Admin should see a Delete button in left top is disabled

  # @VerifySearchButton
  # Scenario: Verify the Search button
  #   Then Admin should see Search bar with text as "Search..."

  # @VefirycolumnHeader
  # Scenario: Verify column header name of data table
  #   Then Admin should see data table with column header on the Manage Program Page as Program Name, Program Description, Program Status, Edit/Delete

  # @Verify_Checkbox_Default_State_In_Column_Header
  # Scenario: Verify checkbox default state beside Program Name column header
  #   Then Admin should see checkbox default state as unchecked beside Program Name column header 

  # @Verify_Checkbox_Default_State_In_Table_Header
  # Scenario: Verify checkboxes default state beside each Program names in the data table
  #   Then Admin should see check box default state as unchecked on the left side in all rows against program name

  # @VerifySortIcon
  # Scenario: Verify Sort icon in manage program
  #   Then Admin should see the sort arrow icon beside to each column header except Edit and Delete

  # @VerifyEdit&DeleteIcon
  # Scenario: Verify edit and delete icon in manage program
  #   Then Admin should see the Edit and Delete buttons on each row of the data table

  # @VerifyPagination
  # Scenario: Verify pagination icons below data table in manage program
  #   Then Admin should see the text as "Showing x to y of z entries" along with Pagination icon below the table

  # @VerifyFooter
  # Scenario: Verify footer message in manage program
  #   Then Admin should see the footer as "In total there are z programs."