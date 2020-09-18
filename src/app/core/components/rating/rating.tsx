import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { ReactElement, useCallback, useState } from 'react';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  root: {
    flexGrow: 1,
    padding: spacing(1, 0)
  },
  paper: {
    paddingBottom: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: palette.divider
  },
  paperFilled: {
    backgroundColor: '#7F0FD7'
  },
  desc: {
    marginTop: spacing(1),
    fontSize: 16,
    color: palette.text.secondary
  }
}));

export interface RatingProps {
  readOnly?: boolean;
  value?: number;
  filledClassName?: string;
  onChange?: (value: number) => void;
}

export function Rating({ readOnly, value, filledClassName, onChange }: RatingProps): ReactElement {
  const classes = useStyles();

  const [filled, setFilled] = useState(value ?? 0);
  const [hover, setHover] = useState<number | null>(null);

  const handleChange = useCallback(
    (newValue: number) => {
      if (!readOnly) {
        onChange?.(newValue);
        setFilled(newValue);
      }
    },
    [onChange, readOnly]
  );

  return (
    <div className={classes.root}>
      <div onMouseLeave={() => !readOnly && setHover(null)}>
        <Grid container spacing={0} justify="space-between">
          {Array.from(Array(10).keys()).map((curr) => (
            <Grid item key={curr} xs={1}>
              <Paper
                className={clsx(classes.paper, {
                  [filledClassName || classes.paperFilled]: hover ? hover > curr : filled > curr
                })}
                onMouseEnter={() => !readOnly && setHover(curr + 1)}
                onClick={() => handleChange(curr + 1)}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      {!readOnly && (
        <Typography component="legend" align="right" className={classes.desc}>
          {filled}/10
        </Typography>
      )}
    </div>
  );
}
