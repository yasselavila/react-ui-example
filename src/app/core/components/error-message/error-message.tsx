import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import RetryIcon from '@material-ui/icons/Replay';
import React, { ReactElement, useCallback } from 'react';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  margin: {
    margin: spacing(2)
  },
  retryContainer: {
    margin: spacing(2),
    textAlign: 'center'
  },
  buttonIcon: {
    fontSize: 20
  },
  buttonText: {
    marginLeft: spacing(1)
  }
}));

export interface ErrorMessageProps {
  onRetry?: (value?: any) => void | any;
}

export function ErrorMessage({ onRetry }: ErrorMessageProps): ReactElement {
  const classes = useStyles();
  const handleOnRetry = useCallback(() => onRetry?.(), [onRetry]);

  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      bgcolor="transparent"
      alignItems="center"
      justifyContent="center"
    >
      <div className={classes.margin}>
        <Typography variant="body1" align="center">
          Ups! An error ocurred
        </Typography>

        {onRetry && (
          <div className={classes.retryContainer}>
            <Button color="default" variant="outlined" onClick={handleOnRetry}>
              <SvgIcon className={classes.buttonIcon} component={RetryIcon} />
              <span className={classes.buttonText}>Retry</span>
            </Button>
          </div>
        )}
      </div>
    </Box>
  );
}
