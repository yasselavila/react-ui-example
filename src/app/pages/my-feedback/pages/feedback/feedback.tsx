import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentWrapper } from '../../../../core/components/content-wrapper/content-wrapper';
import { useStoredQuestions } from '../../../../core/hooks/use-stored-questions/use-stored-questions';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  caption: {
    display: 'block'
  },
  gobackButton: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: spacing(4)
  }
}));

export default function Feedback(): ReactElement {
  const classes = useStyles();
  const history = useHistory();
  const storage = useStoredQuestions();

  const goBack = useCallback(() => history.push('/share-feedback'), [history]);

  const firstUser = storage.getValue().shift()?.user;

  if (firstUser) {
    // XXX: Avoid error related to redirection while rendering
    setTimeout(() => history.push('/my-feedback/' + firstUser.id), 150);

    return <div />;
  }

  return (
    <ContentWrapper>
      <Typography variant="h4">
        No feedback to display
        <span role="img" aria-labelledby="Magic ball">
          🔮
        </span>
      </Typography>

      <Typography variant="caption" className={classes.caption}>
        There is no feedback to display at this time – check back in a bit!
      </Typography>

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
