import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShareFeedbackRoutes } from './routes';

// TODO
describe('Share Feedback Routes', () => {
  const RoutesComponent = () => (
    <BrowserRouter>
      <ShareFeedbackRoutes />
    </BrowserRouter>
  );

  it('should render successfully', () => {
    const { baseElement } = render(<RoutesComponent />);
    expect(baseElement).toBeTruthy();
  });
});
