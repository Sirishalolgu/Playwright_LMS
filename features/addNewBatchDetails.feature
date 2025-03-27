# Feature: Add New Batch details pop up

#   Background: Admin is on the Add new batch pop up
#     Given Admin is on batch page
#     When Admin clicks on "Add New batch" under the "batch" menu bar
#     Then Admin should see the Batch Details pop up window


    # Scenario: Validate all the fields exist in pop up
    #     Given Admin is on the Batch Details Pop Up Window
    #     When Admin checks all the fields are enabled
    #     Then The pop up should include the fields Batch Name, Number of classes and Description as text box, Program Name as drop down, Status as radio button
   
    # Scenario: Validate batch name prefix selected program name
    #     Given Admin is on the Batch Details Pop Up Window
    #     When Admin selects program name present in the dropdown
    #     Then Admin should see selected program name in the batch name prefix box
  
    # Scenario: Validate batch name suffix box should accept only numbers
    #     Given Admin is on the Batch Details Pop Up Window
    #     When Admin enters alphabets in batch name suffix box
    #     Then Admin should get error message below the text box of respective field
 
    # Scenario: Validate batch name prefix box is not editable
    #     Given Admin is on the Batch Details Pop Up Window
    #     When Admin enters alphabets in batch name prefix box
    #     Then Admin should see empty text box
 
    # Scenario: Validate input data only for mandatory fields
    #     Given Admin is on the Batch Details Pop Up Window
    #     When Admin enters the data only to the mandatory fields and clicks save button
    #     Then Admin should get a successful message

  # @batch
#   Scenario Outline: Validate input data missing for mandatory fields
#     Given Admin is on the Batch Details Pop Up Window
#     When Admin leaves blank the mandatory  "<Program Name>", "<Batch Name>", "<Description>", "<Number of Classes>", "<Active or Inactive>" fields and clicks save button
#     Then Admin should get an error message on the respective mandatory field "<Field>"

#     Examples:
#       | Program Name | Batch Name | Description | Number of Classes | Active or Inactive |
#       |              | 005     | Desc1       |                10 | true             |
#       | TestPrograms     |            | Desc2       |                15 | false           |
#       | TestPrograms     | 010     |             |                20 | true             |
#       | TestPrograms     | 011     | Desc3       |                   | false           |
#       | TestPrograms     | 013     | Desc4       |                25 |                    |
   
   

    #  @batch
        # Scenario Outline: Validate save button in Batch details pop up
        #     Given Admin is on the Batch Details Pop Up Window
        #     When Admin enters the valid data "<Program Name>", <Batch Name>, "<Description>", <Number of Classes>, "<Active or Inactive>" fields and clicks save button
        #     Then Admin should get a successful message

        #     Examples:
        #       | Program Name   | Batch Name | Description | Number of Classes | Active or Inactive |
        #       | TestPrograms   | 88452      | Desc1       | 10                | true               |
        #       | TestPrograms   | 88602      | Desc2       | 15                | true               |
        #       | TestPrograms   | 88901      | Desc3       | 20                | true               |


    
    
        # Scenario Outline: Validate cancel button in Batch details pop up
        #     Given Admin is on the Batch Details Pop Up Window
        #     When Admin enter the valid data "<Program Name>", "<Batch Name>", "<Description>", "<Number of Classes>", "<Active or Inactive>" fields and clicks cancel button
        #     Then Admin can see the batch "<Program Name>""<Batch Name>" details popup closes without creating any batch

        #     Examples:
        #       | Program Name   | Batch Name | Description | Number of Classes | Active or Inactive |
        #       | TestProgramsa   | 88452      | Desc1       | 10                | true               |
        #       | TestProgramsa   | 88602      | Desc2       | 15                | true               |
        #       | TestProgramsa   | 88901      | Desc3       | 20                | true               |
    
    
    # Scenario: Validate close icon on the batch details pop up
    #     Given Admin is on the Batch Details Pop Up Window
    #     When Admin clicks on the close icon
    #     Then batch details pop up closes


        # Scenario: Run a specific feature file
        #     Given Admin wants to run a specific feature file
        #     When Admin runs the command to execute the feature file
        #     Then the specified feature file should be executed
