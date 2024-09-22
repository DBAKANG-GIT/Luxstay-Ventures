import TermsAndConditionsComponent from './terms-and-conditions';

describe('TermsAndConditionsComponent', () => {
  beforeEach(() => {
    cy.mount(<TermsAndConditionsComponent />);
  });

  it('renders the component', () => {
    cy.get('h1').contains('Terms & Conditions');
    cy.get('p').contains('Current as of September 2024');
  });

  it('renders all sections', () => {
    const sections = [
      '1. Scope',
      '2. Agreement for Occupation',
      '3. Paying for your Accommodation',
      '4. Cancellation or Changes to your booking by us',
      '5. Death, Personal Injury or Loss of Property',
      '6. Keys',
      '7. Services',
      '8. Wireless Broadband Internet and Hardwire',
      "9. Client's Obligations",
      '10. Termination of this Agreement',
      '11. If you cancel your Booking',
      '12. Health and Safety',
      '13. Data Protection and Privacy Policy',
      '14. Complaints',
      '15. Jurisdiction and Governing Law',
      '16. Your Rights',
      '17. Interpretation',
    ];

    sections.forEach((section) => {
      cy.get('button').contains(section).should('exist');
    });
  });
});
