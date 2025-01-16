import Footer from './footer';

describe('Footer', () => {
  beforeEach(() => {
    // Mount the component under test
    cy.mount(<Footer />);
  });

  it('renders correctly', () => {
    // Check if the footer is rendered
    cy.get('footer').should('be.visible');

    // Check if the logo is rendered
    // cy.get('Image[alt="Luxstay Ventures Logo"]').should('be.visible');

    // Check if the description is rendered
    cy.get('p')
      .contains(
        'Everything we do, we believe will enhance your living experience.'
      )
      .should('be.visible');

    // Check if the "More about us" link is rendered
    cy.get('a').contains('More about us').should('be.visible');

    // Check if the contact info is rendered
    cy.get('h3').contains('Contact Us').should('be.visible');
    cy.get('p').contains('Customer care').should('be.visible');
    cy.get('a[href="mailto:info@luxstayventures.com"]').should('be.visible');

    // Check if the location info is rendered
    cy.get('h3').contains('Location').should('be.visible');
    cy.get('p').contains('LUXSTAY VENTURES LTD').should('be.visible');
    cy.get('p')
      .contains('483 Green Lanes, London, N13 4BS')
      .should('be.visible');

    // Check if the newsletter subscription form is rendered
    cy.get('h3').contains('Subscribe for our newsletters').should('be.visible');
    cy.get('form').should('be.visible');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

    // Check if the social media icons are rendered
    // Todo: fix
    // cy.get('Image[alt="LinkedIn Icon"]').should('be.visible');
    // cy.get('Image[alt="Instagram Icon"]').should('be.visible');
    // cy.get('Image[alt="Facebook Icon"]').should('be.visible');

    // Check if the legal section is rendered
    cy.get('p').contains('COMPLIANCE AND LEGAL').should('be.visible');
    // cy.get('Image[alt="ICO Logo"]').should('be.visible');
    // cy.get('Image[alt="PRS Logo"]').should('be.visible');
    cy.get('a').contains('Terms & conditions').should('be.visible');
    cy.get('a').contains('Privacy Policy').should('be.visible');
    cy.get('p')
      .contains('2025 Luxstay Ventures All rights reserved')
      .should('be.visible');
  });
});
