import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am on logout page', () => {

  cy.visit("https://www.guru99.com");

})