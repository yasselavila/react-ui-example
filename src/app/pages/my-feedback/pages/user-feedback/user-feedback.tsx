import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrapper } from '../../../../core/components/content-wrapper/content-wrapper';
import { UserList, UserListItem } from '../../../../core/components/user-list';
import { useStoredQuestions } from '../../../../core/hooks/use-stored-questions/use-stored-questions';
import { Answers } from './components/answers/answers';

const useStyles = makeStyles(({ palette }: Theme) => ({
  gridItem: {
    padding: '0 !important'
  },
  userListContainer: {
    flex: 1,
    borderRight: `1px solid ${palette.divider}`
  },
  userList: {
    padding: 0
  },
  alItem: {
    borderBottom: `1px solid ${palette.divider}`
  }
}));

export default function UserFeedback(): ReactElement {
  const classes = useStyles();
  const { userId } = useParams<{ userId: string }>();

  const storage = useStoredQuestions();
  const stored = storage.getValue();

  /* Unique users */
  const users = [
    ...(new Map(stored.map((item) => item.user).map((item) => [item.id, item])).values() as any)
  ];

  const user = users.filter((user) => user.id === userId).shift();

  /* Filter answers of the current user */
  const questions = stored.filter((item) => item.user.id === userId);

  return (
    <ContentWrapper noPadding size="lg" header={<Typography variant="h4">My Feedback</Typography>}>
      <Grid container spacing={0}>
        <Grid item xs={4} className={clsx(classes.gridItem, classes.userListContainer)}>
          <UserList className={classes.userList}>
            <ListItem className={classes.alItem}>
              <ListItemText primary={<Typography variant="button">Feedback Received</Typography>} />
            </ListItem>

            {users?.map((user) => (
              <UserListItem key={user.id} user={user} to={'/my-feedback/' + user.id} />
            ))}
          </UserList>
        </Grid>
        <Grid item xs={8} className={classes.gridItem}>
          <Answers user={user} data={questions} />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}
