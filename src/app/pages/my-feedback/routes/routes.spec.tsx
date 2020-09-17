import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MyFeedbackRoutes } from './routes';

// TODO
describe('My Feedback Routes', () => {
  const RoutesComponent = () => (
    <BrowserRouter>
      <MyFeedbackRoutes />
    </BrowserRouter>
  );

  it('should render successfully', () => {
    const { baseElement } = render(<RoutesComponent />);
    expect(baseElement).toBeTruthy();
  });
});
