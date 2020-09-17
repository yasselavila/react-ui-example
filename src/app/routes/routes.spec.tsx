import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes, AuthRoutes } from './routes';

// TODO
describe('Routes', () => {
  describe('Auth Routes', () => {
    const RoutesComponent = () => (
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    );

    it('should render successfully', () => {
      const { baseElement } = render(<RoutesComponent />);
      expect(baseElement).toBeTruthy();
    });
  });

  describe('App Routes', () => {
    const RoutesComponent = () => (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );

    it('should render successfully', () => {
      const { baseElement } = render(<RoutesComponent />);
      expect(baseElement).toBeTruthy();
    });
  });
});
