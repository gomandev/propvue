import React from 'react';
import { render } from '@testing-library/react';
import Component from '../components/home/Footer';

describe('<Footer />', () => {
  it('should  render site footer', () => {
    const { getByTestId } = render(<Component />);
    expect(getByTestId('footer-test')).toBeVisible();
  });
});
