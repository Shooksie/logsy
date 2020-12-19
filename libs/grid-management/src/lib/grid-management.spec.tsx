import React from 'react';
import { render } from '@testing-library/react';

import GridManagement from './grid-management';

describe('GridManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GridManagement />);
    expect(baseElement).toBeTruthy();
  });
});
