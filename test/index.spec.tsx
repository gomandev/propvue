import React from 'react';
import { render } from '@testing-library/react';
import Component from '../pages/index';

describe('<Index />', () => {
  it('should  render entrypoint', () => {
    const { getByTestId } = render(<Component />);
    expect(getByTestId('entry-point')).toBeVisible();
  });
});
