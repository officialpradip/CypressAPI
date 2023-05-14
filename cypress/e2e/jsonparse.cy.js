/// <reference types="Cypress"/>

describe("JSON Parse",()=>{
    it("demo",()=>{

    
    cy.request({
        method:'GET',
        url:'https://fakestoreapi.com/products'
    }).then((res)=>{
        expect(res.status).to.eq(200)
    })
})
})