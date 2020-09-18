import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentWrapper } from '../../core/components/content-wrapper/content-wrapper';

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  button: {
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: spacing(4)
  },
  the404: {
    color: palette.text.secondary,
    fontWeight: 'bold'
  }
}));

export default function NotFound(): ReactElement {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = useCallback(() => history.push('/share-feedback'), [history]);

  return (
    <ContentWrapper>
      <Typography variant="body1" className={classes.the404}>
        404
      </Typography>

      <Typography variant="h4">
        Sorry! The page you are looking for cannot be found.
        <span role="img" aria-labelledby="Sad">
          😢
        </span>
      </Typography>

      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.button}
        onClick={handleClick}
      >
        Back to Share Feedback
      </Button>
    </ContentWrapper>
  );
}
