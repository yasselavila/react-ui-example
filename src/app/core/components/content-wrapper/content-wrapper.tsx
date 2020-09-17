import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  marginTop: {
    marginTop: spacing(4)
  },
  paper: {
    margin: spacing(2, 0),
    borderRadius: 0,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
  },
  paperPadding: {
    padding: spacing(4)
  }
}));

export interface ContentWrapperProps {
  children: ReactNode;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  noPadding?: boolean;
  header?: ReactNode;
}

export function ContentWrapper(props: ContentWrapperProps): ReactElement {
  const { children, size, noPadding, header } = props;
  const classes = useStyles();

  const paperClasses = clsx(classes.paper, {
    [classes.paperPadding]: !noPadding,
    [classes.marginTop]: !header
  });

  return (
    <Container disableGutters maxWidth={size || 'md'}>
      {header && <div className={classes.marginTop}>{header}</div>}

      <Paper className={paperClasses}>{children}</Paper>
    </Container>
  );
}
