import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';
import { ContentWrapper } from '../../../../core/components/content-wrapper/content-wrapper';
import { UserList } from '../../../../core/components/user-list';
import { useStoredQuestions } from '../../../../core/hooks/use-stored-questions/use-stored-questions';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 0
  }
});

export default function UserFeedback(): ReactElement {
  const classes = useStyles();
  const storage = useStoredQuestions();

  // <UserListItem key={user.id} user={user} />

  return (
    <ContentWrapper noPadding size="lg" header={<Typography variant="h4">My Feedback</Typography>}>
      <Grid container spacing={2}>
        <Grid item xs={1} md={4}>
          <UserList>//</UserList>
        </Grid>
        <Grid item xs={11} md={8}>
          Hello
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}
