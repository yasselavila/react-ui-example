import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { ReactElement } from 'react';
import { CopyrightNotice } from '../copyright-notice/copyright-notice';

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
  cr: {
    color: '#fff',
    fontSize: 12,
    width: '100%',
    textAlign: 'center'
  }
});

export function Footer(): ReactElement {
  const classes = useStyles();

  return (
    <AppBar position="fixed" component="footer" className={classes.footerAppBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters classes={{ regular: classes.toolbar }}>
          <CopyrightNotice className={classes.cr} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
