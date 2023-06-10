const cucumber = require('cypress-cucumber-preprocessor').default 
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hf7bje',
  e2e: {
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      projectId: "hf7bje",
      on('file:preprocessor', cucumber())
    },
  },
});
