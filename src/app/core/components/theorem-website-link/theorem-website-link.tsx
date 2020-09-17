import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';

const useStyles = makeStyles(() => ({
  a: {
    textDecoration: 'none'
  }
}));

export interface TheoremWebsiteLinkProps {
  children?: ReactNode;
  className?: string;
}

export function TheoremWebsiteLink({ children, className }: TheoremWebsiteLinkProps): ReactElement {
  const classes = useStyles();

  return (
    <Link
      className={clsx(classes.a, className)}
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.theorem.co/"
    >
      {children || 'Theorem'}
    </Link>
  );
}
