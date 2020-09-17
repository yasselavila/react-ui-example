import Avatar from '@material-ui/core/Avatar';
import MuiLink from '@material-ui/core/Link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../context/auth';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: {
    display: 'inline-flex'
  },
  avatar: {
    width: spacing(7),
    height: spacing(7),
    marginRight: spacing(1.5)
  },
  content: {
    paddingTop: spacing(1)
  },
  userName: {
    fontSize: 16,
    fontWeight: 400
  },
  logout: {
    color: palette.text.secondary,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold'
  }
}));

export function UserData(): ReactElement {
  const classes = useStyles();
  const { userInfo } = useAuth();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src={userInfo?.avatar} />

      <div className={classes.content}>
        <Typography variant="body2" className={classes.userName}>
          {`${userInfo?.firstName} ${userInfo?.lastName}`}
        </Typography>

        <MuiLink component={Link} to="/logout" className={classes.logout}>
          Logout
        </MuiLink>
      </div>
    </div>
  );
}
