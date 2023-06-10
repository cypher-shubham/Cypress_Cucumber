class loginPage {

    login(){
        cy.visit("https://guru99.com")
    }
}

module.exports = new loginPage();