import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useMedia } from '../../hooks/use-media/use-media';
import { CopyrightNotice } from '../copyright-notice/copyright-notice';
import { TheoremLogo } from '../theorem-logo/theorem-logo';

const useStyles = makeStyles({
  footerAppBar: {
    top: 'auto',
    bottom: 0,
    /* Black Pearl / 100 */
    backgroundColor: '#031323'
  },
  toolbar: {
    minHeight: 54
  },
  grow: {
    flexGrow: 1
  },
  textColor: {
    color: '#fff',
    fontSize: 12
  },
  link: {
    fontWeight: 'bold'
  }
});

export function Footer(): ReactElement {
  const classes = useStyles();

  /* IMPORTANT!: I'm using this instead of Hidden to avoid having to overwrite all the CSS from MUI */
  const isSmall = useMedia('(max-width: 960px)');

  return (
    <AppBar position="fixed" component="footer" className={classes.footerAppBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters classes={{ regular: classes.toolbar }}>
          <TheoremLogo />

          {!isSmall && (
            <>
              <div className={classes.grow} />

              <CopyrightNotice
                className={classes.textColor}
                linkClassName={clsx(classes.textColor, classes.link)}
              />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
