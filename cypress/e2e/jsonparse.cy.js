/// <reference types="Cypress"/>

describe("JSON Parse",()=>{
    cy.request({
        method:"GET",
        url:'https://fakestoreapi.com/products'
    }).then((result)=>{
        expect(result.status).to.equal(200)
    })
})