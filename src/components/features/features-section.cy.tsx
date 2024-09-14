import { FeatureSection } from './feature-section';

describe('FeatureSection Component', () => {
  it('renders the FeatureSection component', () => {
    cy.mount(<FeatureSection />);

    // Check if the main title is rendered
    cy.contains('Our Serviced Apartments').should('be.visible');

    // Check if the description is rendered
    cy.contains(
      'Fully-furnished, self-catering accommodations for corporate housing, short-term stay, or temporary home'
    ).should('be.visible');

    // Check if each feature item is rendered with the correct title
    const features = [
      'Best Rate Guaranteed',
      'Free Wi-Fi',
      'Reserve Now, Pay Later',
      'Free Cancellation',
    ];

    features.forEach((title) => {
      cy.contains(title).should('be.visible');
    });

    // Check if each feature item has an image
    cy.get('img').should('have.length', features.length);
  });
});
