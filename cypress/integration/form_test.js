describe("Test our inputs and submit our form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })
    it("Add text to inputs and submit form", () => {
        cy.get('[name=name]')
        .type("Gordon");
        cy.get(':nth-child(7) > :nth-child(1) > input')
        .check();
        cy.get(':nth-child(7) > :nth-child(4) > input')
        .check();
        cy.get('button')
        .click();

    })
})
