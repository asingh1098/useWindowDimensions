import React from 'react';
import { mount } from '@cypress/react';
import WindowDimensionsTestComponent from '../../src/components/windowDimensionsTestComponent';

describe('useWindowDimensions Hook', () => {
  it('should display window dimensions and mobile width status', () => {
    mount(<WindowDimensionsTestComponent />);
    cy.contains("Width:");
    cy.contains("Height:");
    cy.contains("Is Mobile Width:");
  });
});
