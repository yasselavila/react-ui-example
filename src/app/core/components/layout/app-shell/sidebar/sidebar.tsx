import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { ReactElement, ReactNode, useMemo } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { HonestoTextLogo } from '../../../honesto-text-logo/honesto-text-logo';

const useStyles = makeStyles(({ palette }: Theme) => ({
  drawerPaper: {
    width: 280,
    maxWidth: 280
  },
  titleBar: {
    backgroundColor: palette.background.paper
  },
  scroll: {
    flex: 1
  }
}));

export interface SidebarProps {
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ children, open, onClose }: SidebarProps): ReactElement {
  const classes = useStyles();

  const paperClasses = useMemo(() => ({ paper: classes.drawerPaper }), [classes.drawerPaper]);

  return (
    <Hidden smUp>
      <Drawer
        className="full-height-panel"
        classes={paperClasses}
        anchor="left"
        variant="temporary"
        open={open}
        onClose={onClose}
      >
        <AppBar elevation={2} position="sticky" className={classes.titleBar}>
          <Toolbar>
            <HonestoTextLogo />
          </Toolbar>
        </AppBar>

        <PerfectScrollbar className={classes.scroll}>{children}</PerfectScrollbar>
      </Drawer>
    </Hidden>
  );
}
