import React, { ReactElement } from 'react';
import logo from './logo.svg';

export interface HonestoLogoProps {
  className?: string;
}

export function HonestoLogo({ className }: HonestoLogoProps): ReactElement {
  return <img src={logo} alt="Honesto" className={className} />;
}
