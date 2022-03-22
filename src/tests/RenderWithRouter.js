import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const customHistory = createMemoryHistory();
  const allSelectors = render(<Router history={ customHistory }>{ component }</Router>);

  return { ...allSelectors, customHistory };
};

export default renderWithRouter;
