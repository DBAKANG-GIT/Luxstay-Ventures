import { mount } from 'cypress/react';
import { FeaturedOn } from './featured-on';

describe('FeaturedOn Component', () => {
  const platforms = [
    { src: '/public/logo/airbnb-logo.png', alt: 'Airbnb' },
    { src: '/public/logo/booking-com.png', alt: 'Booking.com' },
    { src: '/public/logo/homeaway.png', alt: 'HomeAway' },
    { src: '/public/logo/vrbo-logo.png', alt: 'Vrbo' },
    { src: '/public/logo/agoda.png', alt: 'Misterb&b' },
  ];

  beforeEach(() => {
    mount(<FeaturedOn />);
  });

  it('renders the component successfully', () => {
    cy.get('h2').should('contain.text', 'Our Properties Are Featured On');
  });

  it('displays the correct number of platform logos', () => {
    cy.get('div').find('img').should('have.length', platforms.length);
  });

  it('verifies all logos have the correct alt text', () => {
    platforms.forEach((platform) => {
      cy.get('img').should('have.attr', 'alt', platform.alt);
    });
  });

  it('checks for hover effect on logos', () => {
    platforms.forEach((platform, index) => {
      cy.get('img').eq(index).trigger('mouseover');
      cy.get('img')
        .eq(index)
        .should('have.css', 'transform', 'matrix(1.1, 0, 0, 1.1, 0, 0)');
    });
  });
});
