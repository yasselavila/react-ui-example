import React, { ReactElement, ReactNode } from 'react';
import { ErrorMessage } from '../error-message/error-message';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';

export interface DataProjectorProps {
  children?: ReactNode;
  loading?: boolean;
  error?: unknown;
  onRetry?: (arg?: any) => void | any;
}

export function DataProjector(props: DataProjectorProps): ReactElement {
  if (props.loading) {
    return <LoadingIndicator />;
  } else if (props.error) {
    return <ErrorMessage onRetry={props.onRetry} />;
  }

  return <div>{props.children || 'Nothing to see here yet'}</div>;
}
