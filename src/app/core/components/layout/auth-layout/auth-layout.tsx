import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import { Footer } from '../../footer/footer';
import { HonestoLogo } from '../../honesto-logo/honesto-logo';
import { HonestoTextLogo } from '../../honesto-text-logo/honesto-text-logo';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  layoutRoot: {
    display: 'flex',
    background: '#ffffff url(background.jpg) no-repeat center center',
    backgroundSize: 'cover'
  },
  paper: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacing(7),
    borderRadius: 0
  },
  logo: {
    marginBottom: spacing(4),
    height: 70
  },
  divider: {
    margin: spacing(5, 0),
    width: '70%',
    /* Black Pearl – 15 */
    borderTop: '2px solid #D9DCDE'
  }
}));

export interface AuthLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function AuthLayout({ children }: AuthLayoutProps): ReactElement {
  const classes = useStyles();

  return (
    <>
      <div className={clsx('full-height-panel', classes.layoutRoot)}>
        <Container maxWidth="xs" disableGutters>
          <Box
            display="flex"
            width="100%"
            height="100%"
            bgcolor="transparent"
            alignItems="center"
            justifyContent="center"
          >
            <Paper elevation={1} className={classes.paper}>
              <HonestoLogo className={classes.logo} />
              <HonestoTextLogo />

              <div className={classes.divider} />

              <main role="main">{children}</main>
            </Paper>
          </Box>
        </Container>
      </div>

      <Footer />
    </>
  );
}
