# cypress_rec_homework

# Use the following application and api to prepare your Cypress homework

BaseURL: https://thinking-tester-contact-list.herokuapp.com/
API Documentation: https://documenter.getpostman.com/view/4012288/TzK2bEa8

# TASK 1 - Create contacts via API

Create 10 user contacts by sending a POST request to a contact list API with authorization and a dummy header. The test case loops through the number of contacts to create, defines the contact data, and sends a POST request to create the contact. After each POST request, the test case should check that the response status is 201 (created) and that the response body contains the contact data.

# TASK 2 - Delete contacts via UI

The test suite has two tests. In the first test, identify the first row of the table, click on it and then delete it using the "Delete Contact" button. In the second test, you need to find all the rows and delete the 6th row. In both cases, make sure that the row has been deleted correctly.
