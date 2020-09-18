import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  button: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: spacing(4)
  },
  caption: {
    display: 'block'
  }
}));

export function ThankYou(): ReactElement {
  const classes = useStyles();

  const history = useHistory();
  const shareMore = useCallback(() => history.push('/share-feedback'), [history]);

  return (
    <>
      <Typography variant="h4">Thank you for sharing your feedback!</Typography>

      <Typography variant="caption" className={classes.caption}>
        Continue to give feedback to other team members.
      </Typography>

      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
        onClick={shareMore}
      >
        Share More Feedback
      </Button>
    </>
  );
}
