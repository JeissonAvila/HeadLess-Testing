context('Habitica Tests', () => {

  it('makes a succesful login ', () => {
      cy.visit('https://habitica.com/static/home')
      cy.wait(3000)
      cy.get('.login-button').click();
      cy.wait(3000)
      cy.get('#usernameInput').type('pa_test');
      cy.get('#passwordInput').type('fake@email.com');
      cy.get('.btn-info[type="submit"]').click()
      cy.wait(3000)
      cy.get('.svg-icon').should('be.visible')
      //cy.get('.header-welcome').should('contain', ' Welcome back! ')
    })

  it('makes a wrong sign up attemp', () => {
      cy.visit('https://habitica.com/static/home')
      cy.wait(3000)
      cy.get('input[placeholder="Username"]').type('pa_test')
      cy.get('[type="email"]').type('onassottuse-0220@yopmail.com')
      cy.get('[placeholder="Password"]').type('fake@email.com')      
      cy.get('[placeholder="Confirm Password"]').type('fake@email.com')
      cy.get('.input-error').should('contain', ' Username already taken. ')
    })

  it('register a new challenge', () => {
      cy.visit('https://habitica.com/static/home')
      cy.wait(3000)
      cy.get('.login-button').click();
      cy.wait(3000)
      cy.get('#usernameInput').type('pa_test');
      cy.get('#passwordInput').type('fake@email.com');
      cy.get('.btn-info[type="submit"]').click()
      cy.wait(3000)
      cy.get(':nth-child(7) > .nav-link').click()
      cy.wait(3000)
      cy.get('.header-row > .col-md-4 > .btn').click()
      cy.wait(3000)
      cy.get('input[placeholder="What is your Challenge name?"]').type(' Desafio de Prueba')
      cy.get('input[placeholder="What short tag should be used to identify your Challenge?"]').type('DP Test')
      cy.get('.summary-textarea').type('Este es el resumen')
      cy.get('.description-textarea').type("Esta es la descripcion")
      cy.get(':nth-child(5) > .form-control').select('Public Challenges')
      cy.get('.category-select').click({ force: true })
      cy.wait(3000)
      cy.get('#challenge-modal-cat-creativity').click({force: true})
	  cy.wait(3000)
      cy.get('.category-box > .btn').click()
      cy.wait(3000)
      cy.get('.submit-button-wrapper > .btn').click({ force: true })
      cy.wait(3000)
      cy.get('.alert-warning').should('contain', ' You do not have enough gems to create a Tavern challenge ')
    })

  it('register a new habit', () => {
      cy.visit('https://habitica.com/static/home')
      cy.wait(3000)
      cy.get('.login-button').click();
      cy.wait(3000)
      cy.get('#usernameInput').type('pa_test');
      cy.get('#passwordInput').type('fake@email.com');
      cy.get('.btn-info[type="submit"]').click()
      cy.wait(3000)
      cy.get('.habit > .tasks-list > .quick-add').type('Prueba del habito');
      cy.get('.habit > .tasks-list > .quick-add').type('{enter}')
      cy.get('.task-title').should('contain', 'Prueba del habito')
    })

  it('register a new daily task', () => {
      cy.visit('https://habitica.com/static/home')
      cy.wait(3000)
      cy.get('.login-button').click();
      cy.wait(3000)
      cy.get('#usernameInput').type('pa_test').should('have.value', 'pa_test');
      cy.get('#passwordInput').type('fake@email.com');
      cy.get('.btn-info[type="submit"]').click()
      cy.wait(3000)
      cy.get('.daily > .tasks-list > .quick-add').type('Tarea Diaria');
      cy.get('.daily > .tasks-list > .quick-add').type('{enter}')
      cy.get('.task-title').should('contain', 'Tarea Diaria')
    })

});