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
let total=0;
it("demo loop",()=>{
    let total=0
    cy.request({
        method:'GET',
        url:'https://fakestoreapi.com/products',
        qs:{limit:5}
    }).then((res)=>{
        expect(res.status).to.eq(200)
        res.body.forEach(element => {
            total=total+ element.price
            
        });
        expect(total).to.eq(899.23)
        
    })
})
})