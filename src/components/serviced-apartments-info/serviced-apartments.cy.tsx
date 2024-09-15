import { ServicedApartmentsComponent } from './serviced-apartments';

describe('ServicedApartmentsComponent', () => {
  beforeEach(() => {
    // Intercept requests to the Next.js backend image endpoint and return placeholder image data
    const interceptImage = (imagePath: string) => {
      cy.readFile(imagePath, null).then((img) => {
        const imageBuffer = img.buffer;

        cy.intercept('_next/image*', {
          statusCode: 200,
          headers: { 'Content-Type': 'image/jpeg' },
          body: imageBuffer,
        });
      });
    };

    interceptImage('src/public/images/about_image_1.jpeg');
    interceptImage('src/public/images/about_image_2.jpeg');
    interceptImage('src/public/images/about_image_3.jpeg');
    interceptImage('src/public/images/about_image_4.jpeg');

    // Mount the component under test
    cy.mount(<ServicedApartmentsComponent />);
  });

  it('renders the main heading and subheading', () => {
    // Check if the main heading is rendered
    cy.contains('h1', 'Why serviced apartments?').should('be.visible');

    // Check if the subheading is rendered
    cy.contains(
      'h2',
      '8 Reasons to stay in serviced apartments over hotels'
    ).should('be.visible');
  });

  it('renders all reasons', () => {
    const reasons = [
      'Space',
      'Home Cooking',
      'Cost Effective',
      'Central Locations',
      'Home Comfort',
      'Familiarity',
      'Freedom',
      'House Keeping',
    ];

    reasons.forEach((reason, index) => {
      cy.contains('h3', `${index + 1}. ${reason}`).should('be.visible');
    });
  });

  it('renders all images in desktop view', () => {
    cy.viewport('macbook-15');
    cy.mount(<ServicedApartmentsComponent />);

    // Check if all images are rendered and visible
    cy.get('img:visible')
      .should('have.length', 4)
      .each(($img) => {
        cy.wrap($img).should('be.visible');
      });
  });

  it('renders all images in mobile and tablet views', () => {
    const viewports: Cypress.ViewportPreset[] = ['iphone-6', 'ipad-2'];

    viewports.forEach((viewport) => {
      cy.viewport(viewport);
      cy.mount(<ServicedApartmentsComponent />);

      // Check if all images are rendered and visible
      cy.get('img:visible')
        .should('have.length', 4)
        .each(($img) => {
          cy.wrap($img).should('be.visible');
        });
    });
  });

  it('renders the accordion in mobile view', () => {
    cy.viewport('iphone-6');
    cy.mount(<ServicedApartmentsComponent />);

    // Check if the accordion is rendered
    cy.get('[data-accordion-item').should('be.visible');

    // Check if all accordion items are rendered
    const reasons = [
      'Space',
      'Home Cooking',
      'Cost Effective',
      'Central Locations',
      'Home Comfort',
      'Familiarity',
      'Freedom',
      'House Keeping',
    ];

    reasons.forEach((reason, index) => {
      cy.contains('button', `${index + 1}. ${reason}`).should('be.visible');
    });
  });

  it('renders the grid layout in tablet view', () => {
    cy.viewport('ipad-2');
    cy.mount(<ServicedApartmentsComponent />);

    // Check if the grid layout is rendered
    cy.get('.md\\:grid').should('be.visible');

    // Check if all reasons are rendered
    const reasons = [
      'Space',
      'Home Cooking',
      'Cost Effective',
      'Central Locations',
      'Home Comfort',
      'Familiarity',
      'Freedom',
      'House Keeping',
    ];

    reasons.forEach((reason, index) => {
      cy.contains('h3', `${index + 1}. ${reason}`).should('be.visible');
    });

    // Check if all images are rendered and visible
    cy.get('img:visible')
      .should('have.length', 4)
      .each(($img) => {
        cy.wrap($img).should('be.visible');
      });
  });

  it('renders the grid layout in desktop view', () => {
    cy.viewport('macbook-15');
    cy.mount(<ServicedApartmentsComponent />);

    // Check if the grid layout is rendered
    cy.get('.lg\\:grid').should('be.visible');

    // Check if all reasons are rendered
    const reasons = [
      'Space',
      'Home Cooking',
      'Cost Effective',
      'Central Locations',
      'Home Comfort',
      'Familiarity',
      'Freedom',
      'House Keeping',
    ];

    reasons.forEach((reason, index) => {
      cy.contains('h3', `${index + 1}. ${reason}`).should('be.visible');
    });

    // Check if all images are rendered and visible
    cy.get('img:visible')
      .should('have.length', 4)
      .each(($img) => {
        cy.wrap($img).should('be.visible');
      });
  });
});
