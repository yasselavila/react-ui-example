import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 0
  }
});

export interface UserListProps {
  children: ReactNode;
  className?: string;
}

export function UserList({ children, className }: UserListProps): ReactElement {
  const classes = useStyles();

  return <List className={clsx(classes.root, className)}>{children}</List>;
}
