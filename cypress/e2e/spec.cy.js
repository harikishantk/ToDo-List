// Declare the score variable
let score = 0;

// import fs
const fs = require ('fs');

// Create test to check landing page working or not
describe ('Landing Page Working or not', () => {
  it ('Visit the app', () => {
    cy.visit ('/');
  });

  // if the landing page working then score will be 1
  it ('Check the landing page', () => {
    score++;
  }
  );
});

describe ('Accept text in the input or not', () => {
  it ('Accepts input', () => {
    const text = 'New Todo';
    cy.visit ('/');
    cy.get('input').type(text).should('have.value', text);
  });
});

// Create test to delete the todo by clicking on the task li tag
describe ('Delete the task or not', () => {
  context ('No Todos', () => {
    it ('Deletes a todo', () => {
      cy.visit ('/');
      cy.get ('input').type ('New todo').type ('{enter}');
      cy.get ('li').click ();
    });
  });
});

// Create test to check the body have blue color or not
describe ('Check the body color', () => {
  it ('Check the body color', () => {
    cy.visit ('/');
    cy.get ('body').should ('have.css', 'background-color', 'rgb(102, 204, 255)');
  });
});

// save the score in json
afterEach (() => {
  const result = {
    score: score,
  };
  const json = JSON.stringify (result);
  fs.writeFileSync ('cypress/results/results.json', json);
}
);