// Set up a beforeEach() hook to log in to the application
beforeEach(() => {
  const email = "test@andrew.com";
  const password = "Test12!@";

  // Navigate to the login page
  cy.visit("/login");

  // Fill in the login form with the username and password
  cy.get("#email").type(email);
  cy.get("#password").type(password);

  // Submit the form
  cy.get("#submit").click();

  // Verify that we are logged in
  cy.url().should("include", "/contactList");
});

describe("Login and delete contacts from the list", () => {
  it("Logs in to website, goes to the element and delete it", () => {
    // Go to the row
    cy.get(".contactTableBodyRow").first().click();

    // Click 'Delete Contact' button
    cy.get("#delete").click();

    // Listen for the window:alert event and get its text
    cy.on("window:alert", (message) => {
      // Verify that the alert message contains the expected text
      expect(message).to.contain(
        "Are you sure you want to delete this contact?"
      );

      // Get the element that you want to interact with after closing the alert
      cy.get('button:contains("OK")').click();
    });
  });

  it("Logs in to website, find all elements with the same string and delete one of them", () => {
    cy.get("#myTable tr") // Find all table rows
      .eq(5) // Select the 6th row in the filtered set (index 5 since indexing starts at 0)
      .click() // Click the delete button
      .then(() => {
        // Click 'Delete Contact' button
        cy.get("#delete").click();
        cy.on("window:alert", (message) => {
          // Verify that the alert message contains the expected text
          expect(message).to.contain(
            "Are you sure you want to delete this contact?"
          );

          // Click the OK button in the alert
          cy.get('button:contains("OK")').click();
        });
      });
  });
});
