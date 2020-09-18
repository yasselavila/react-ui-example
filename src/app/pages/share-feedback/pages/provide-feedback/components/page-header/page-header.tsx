import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import GoBackIcon from '@material-ui/icons/ChevronLeft';
import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../../../../../core/models';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    width: spacing(7),
    height: spacing(7)
  },
  gbButton: {
    paddingLeft: 0
  },
  gbButtonIcon: {
    fontSize: 20
  },
  gbButtonText: {
    marginLeft: spacing(1)
  }
}));

export interface PageHeaderProps {
  title: string;
  user: User;
}

export function PageHeader({ title, user }: PageHeaderProps): ReactElement {
  const classes = useStyles();
  const history = useHistory();

  const goBack = useCallback(() => history.push('/share-feedback'), [history]);

  return (
    <div className={classes.root}>
      <Button color="default" variant="text" className={classes.gbButton} onClick={goBack}>
        <SvgIcon className={classes.gbButtonIcon} component={GoBackIcon} />
        <span className={classes.gbButtonText}>Back</span>
      </Button>

      <Grid container spacing={2} justify="space-between">
        <Grid item xs={11}>
          <Typography variant="h4">{title}</Typography>

          <Typography variant="button">
            SHARE YOUR FEEDBACK FOR {user.firstName} {user.lastName}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Avatar className={classes.avatar} src={user.avatar} />
        </Grid>
      </Grid>
    </div>
  );
}
