import React, { ReactElement } from 'react';
import logo from './logo.svg';

export interface HonestoTextLogoProps {
  className?: string;
}

export function HonestoTextLogo({ className }: HonestoTextLogoProps): ReactElement {
  return <img src={logo} alt="Honesto" className={className} />;
}
