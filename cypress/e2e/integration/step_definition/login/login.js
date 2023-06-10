import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const loginPage = require("../../../pages/login")

Given('I am on login page', () => {

  loginPage.login();

  //cy.visit("https://www.guru99.com");

})