/// <reference types="Cypress"/>

describe("Auth API Testing", () => {
    let authAccess;
  
    before("Token Generation", () => {
      cy.request({
        method: "POST",
        url: "https://simple-books-api.glitch.me/api-clients/",
        body: {
          clientName: "Postman",
          clientEmail: Math.random().toString(5).substring(2) + "@example.com",
        },
      }).then((res) => {
        authAccess = res.body.authAccess;
      });
    });
  
    it("Order Book", () => {
      cy.request({
        method: "POST",
        url: "https://simple-books-api.glitch.me/api-clients/orders",
        headers: { Authorization: `Bearer ${authAccess}` },
        body: {
          bookId: 1,
          customerName: "John",
        },
      }).then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body.created).to.be.true;
      });
    });
  });
  