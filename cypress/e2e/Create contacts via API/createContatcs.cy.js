describe("Creating user contacts", () => {
  it("should create 10 user contacts with authorization and dummy header", () => {
    // Define the base URL of your API
    const baseUrl = "https://thinking-tester-contact-list.herokuapp.com";

    // Define the number of contacts you want to create
    const numContacts = 2;

    // Define your authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE4NzUzNTAzMmY0NzAwMTM1MDk0ZTIiLCJpYXQiOjE2Nzk5MDQzNDV9.hw7pNid48L2jD9SekLoJc3sDMID27Y6Vr2nkpo1ii7Q";

    // Use a loop to create the contacts
    for (let i = 1; i <= numContacts; i++) {
      // Define the contact data
      const contactData = {
        firstName: `John ${i}`,
        lastName: `Doe`,
        birthdate: `1980-02-02`,
        email: `contact${i}@example.com`,
        phone: `8005555555`,
        street1: `1 Main St.`,
        street2: `Apartment A`,
        city: `Anytown`,
        stateProvince: `KS`,
        postalCode: `12345`,
        country: `USA`,
      };

      // Send a POST request to create the contact with authorization header
      cy.request({
        method: "POST",
        url: `${baseUrl}/contacts`,
        headers: {
          Authorization: `Bearer ${token}`,
          DummyHeader: "123456",
        },
        body: contactData,
      }).then((response) => {
        // Check that the response status is 201 (created)
        expect(response.status).to.equal(201);

        // Check that the response body contains the contact data
        expect(response.body.name).to.equal(contactData.name);
        expect(response.body.email).to.equal(contactData.email);
        expect(response.body.phone).to.equal(contactData.phone);
      });
    }
  });
});
