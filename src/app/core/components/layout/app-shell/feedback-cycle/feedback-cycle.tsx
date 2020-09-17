import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: {
    height: '100%',
    margin: spacing(0, 2),
    padding: spacing(2, 2, 2, 0),
    borderRight: `1px solid ${palette.divider}`,
    textAlign: 'right'
  },
  description: {
    fontSize: 11,
    color: palette.text.secondary
  },
  data: {
    fontSize: 16,
    fontWeight: 400
  },
  days: {
    color: '#00bea2'
  }
}));

export function FeedbackCycle(): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.description}>Next Feedback Cycle</span>
      <div className={classes.data}>
        Oct 2020 – <span className={classes.days}>13 days</span>
      </div>
    </div>
  );
}
