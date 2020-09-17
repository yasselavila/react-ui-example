import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { ReactElement, ReactNode, useCallback, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Footer } from '../../footer/footer';
import { Navbar } from './navbar/navbar';
import { SideMenu } from './side-menu/side-menu';
import { Sidebar } from './sidebar/sidebar';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  layoutRoot: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: palette.background.paper
  },
  main: {
    margin: spacing(2, 'auto', 6, 'auto'),
    borderRadius: 0,
    width: 'auto',
    maxWidth: '100%'
  },
  scroll: {
    flex: 1,
    marginBottom: 54
  }
}));

export interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps): ReactElement {
  const classes = useStyles();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), [setSidebarOpen]);

  return (
    <>
      <div className={clsx('full-height-panel', classes.layoutRoot)}>
        <Sidebar open={sidebarOpen} onClose={toggleSidebar}>
          <SideMenu />
        </Sidebar>

        <Navbar toggleSidebar={toggleSidebar} />

        <PerfectScrollbar className={classes.scroll}>
          <Container maxWidth="lg">
            <main role="main" className={classes.main}>
              {children}
            </main>
          </Container>
        </PerfectScrollbar>
      </div>

      <Footer />
    </>
  );
}
