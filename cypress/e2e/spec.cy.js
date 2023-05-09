/// <reference types="Cypress"/>

describe("API TESTING",()=>{
    it("GET CALL",()=>{
        cy.request("GET",'https://jsonplaceholder.typicode.com/posts')
        .its('status').should('equal',200)

    })
    it("Another way",()=>{
        cy.request({
            'method':'GET',
            'url': 'https://jsonplaceholder.typicode.com/posts'
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })

    it("POST CALL",()=>{
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:{
                
                    userId: 100,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  

            }
        }
        ).its('status')
        .should('equal',201)
    })

    it("PUT CALL",()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                
                    userId: 100,
                    title: "put call sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  

            }
        }
        ).its('status')
        .should('equal',200)
    })

    it("DELETE CALL",()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                
                    userId: 100,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  

            }
        }
        ).its('status')
        .should('equal',200)
    })
})