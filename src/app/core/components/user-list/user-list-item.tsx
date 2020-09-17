import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement, ReactNode, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { User } from '../../models';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: {
    borderBottom: `1px solid ${palette.divider}`
  },
  avatar: {
    width: spacing(7),
    height: spacing(7),
    marginRight: spacing(2)
  },
  text: {
    fontSize: 18,
    fontWeight: 500
  }
}));

export interface UserListItemProps {
  user: User;
  to?: string;
  actions?: ReactNode;
}

export function UserListItem({ user, to, actions }: UserListItemProps): ReactElement {
  const classes = useStyles();

  const history = useHistory();
  const { pathname } = useLocation();

  const selected = useMemo(() => to && pathname === to, [pathname, to]);
  const handleRedirect = useCallback(() => to && history.push(to), [to, history]);

  return (
    <ListItem
      className={classes.root}
      button={!!to as any}
      selected={!!selected}
      onClick={handleRedirect}
    >
      <ListItemAvatar>
        <Avatar src={user.avatar} className={classes.avatar} />
      </ListItemAvatar>

      <ListItemText
        classes={{ primary: classes.text }}
        primary={`${user?.firstName} ${user?.lastName}`}
      />

      {actions && <ListItemSecondaryAction>{actions}</ListItemSecondaryAction>}
    </ListItem>
  );
}
