import React, { ReactElement } from 'react';
import logo from './logo.svg';

export interface TheoremLogoProps {
  className?: string;
}

export function TheoremLogo({ className }: TheoremLogoProps): ReactElement {
  return <img src={logo} alt="Theorem" className={className} />;
}
