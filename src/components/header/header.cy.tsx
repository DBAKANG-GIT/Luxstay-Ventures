import Navbar from './header';

describe('Navbar', () => {
  beforeEach(() => {
    // Mount the component under test
    cy.mount(<Navbar />);
  });

  it('renders correctly', () => {
    // Check if the logo is rendered
    cy.get('nav').should('be.visible');

    // Check if the navigation links are rendered
    cy.get('a').contains('Home').should('be.visible');
    cy.get('a').contains('Our Accommodation').should('be.visible');
    cy.get('a').contains('About').should('be.visible');
    cy.get('a').contains('Contact Us').should('be.visible');
  });
});
