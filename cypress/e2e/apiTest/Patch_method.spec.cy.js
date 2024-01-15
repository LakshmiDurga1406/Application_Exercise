/// <reference types="cypress" />

describe("Create Tourist Test", () => {

    it('Patch - create Tourist', () => {
      //  cy.visit('http://localhost:3000')

        let resquestBody = {
           
            "name": "Lakshmi"
                            }


        cy.request({

            method: 'PATCH',
            url: ' https://reqres.in/api/users/2',
            body: resquestBody



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);
           expect(resp.status).to.eq(200)              //verify status code ---200

          
            expect(resp.body.name).to.eq(resquestBody.name) 
         
        })




    })


})