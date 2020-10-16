

describe('Pizza App', () => { 
    beforeEach(()=>{ 
        cy.visit('http://localhost:3000/pizza')
    })

    
    it('sanity checks', () => { 
        
        expect(5).to.equal(5) 
    })

    //THIS WAY IS MUCH CLEANER
    const nameInput = () => cy.get('input[name=name]')
    const submitBtn = () => cy.get('button[id=submit]')
    const cancelBtn = () => cy.get('button[id=cancel]')

    it('the proper elements exist', () => { 
        cy.get('jabsehsda').should('not.exist')
        nameInput().should('exist')
        submitBtn().should('exist')//check buttons
        cancelBtn().should('exist')//check buttons
    })





    describe('Filling out inputs and cancelling', ()=>{ 
        it('submit button is disabled', () => { 
            submitBtn().should('be.disabled')
        })

        it('Can type inside the input', () =>{ 
            nameInput()
                .should('have.value', '')
                .type('A NAME')
                .should('have.value', 'A NAME') 
        })


        it('The cancel button can reset the inputs, and disable the submit button', () => { 
            nameInput().type('something goes here')
            cancelBtn().click()
            nameInput().should('have.value', '')
            submitBtn().should('be.disabled')
        })
    })

    
})
