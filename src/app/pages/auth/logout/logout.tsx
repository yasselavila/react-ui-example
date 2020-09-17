import React, { ReactElement } from 'react';
import { LoadingIndicator } from '../../../core/components/loading-indicator/loading-indicator';
import { useAuth } from '../../../core/context/auth';

export default function Logout(): ReactElement {
  const { logout } = useAuth();

  // Note: Avoid 'Cannot update a component (`AuthProvider`) while rendering a different component'
  setTimeout(() => logout(), 250);

  return <LoadingIndicator />;
}
