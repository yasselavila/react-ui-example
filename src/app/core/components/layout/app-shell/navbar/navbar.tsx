import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../../../../hooks/use-media/use-media';
import { HonestoTextLogo } from '../../../honesto-text-logo/honesto-text-logo';
import { FeedbackCycle } from '../feedback-cycle/feedback-cycle';
import { NavMenu } from '../nav-menu/nav-menu';
import { UserData } from '../user-data/user-data';

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  appBar: {
    width: '100%',
    backgroundColor: palette.background.default,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    color: palette.text.primary
  },
  toolbar: {
    minHeight: 75,
    padding: spacing(0, 1, 0, 0)
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: spacing(1.5),
    marginRight: spacing(2)
  }
}));

export interface NavbarProps {
  toggleSidebar: () => void;
}

export function Navbar({ toggleSidebar }: NavbarProps): ReactElement {
  const classes = useStyles();

  /* IMPORTANT!: I'm using this instead of Hidden to avoid having to overwrite all the CSS from MUI */
  const isSmall = useMedia('(max-width: 960px)');

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Container disableGutters={isSmall} maxWidth="lg">
        <Toolbar disableGutters className={classes.toolbar}>
          {isSmall && (
            <Tooltip title={'Toggle Sidebar'}>
              <IconButton
                aria-label="Toggle Sidebar"
                className={classes.menuButton}
                onClick={toggleSidebar}
              >
                <SvgIcon component={MenuIcon} />
              </IconButton>
            </Tooltip>
          )}

          <HonestoTextLogo />

          {!isSmall && (
            <>
              <div className={classes.grow} />

              <NavMenu>
                <Tab component={Link} to="/share-feedback" label="Share Feedback" />
                <Tab component={Link} to="/my-feedback" label="My Feedback" />
                <Tab component={Link} to="/team-feedback" label="Team Feedback" />
                <Tab component={Link} to="/teams" label="Teams" />
              </NavMenu>

              <div className={classes.grow} />

              <FeedbackCycle />

              <UserData />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
