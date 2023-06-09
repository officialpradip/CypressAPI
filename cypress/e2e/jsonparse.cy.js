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

it("demo loop",()=>{
    let total=0
    let titles=[]
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
        expect(res.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")

        
    })
})
})