import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentWrapper } from '../../core/components/content-wrapper/content-wrapper';
import { useStoredQuestions } from '../../core/hooks/use-stored-questions/use-stored-questions';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  gobackButton: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: spacing(4)
  }
}));

export default function MyFeedback(): ReactElement {
  const classes = useStyles();
  const history = useHistory();
  const storage = useStoredQuestions();

  const goBack = useCallback(() => history.push('/share-feedback'), [history]);

  const firstUser = Object.keys(storage.getValue() as {}).shift() ?? null;
  console.log('ZZ: ', firstUser, Object.keys(storage.getValue() as {}));

  if (firstUser) {
    history.push('/my-feedback/' + firstUser);
  }

  return (
    <ContentWrapper header={<Typography variant="h4">My Feedback</Typography>}>
      <Typography variant="h4">You have not provided any feedback yet</Typography>

      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.gobackButton}
        onClick={goBack}
      >
        Back to Share Feedback
      </Button>
    </ContentWrapper>
  );
}
