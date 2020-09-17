import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React, { ReactElement } from 'react';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  margin: {
    margin: spacing(2, 0)
  }
}));

export function LoadingIndicator(): ReactElement {
  const classes = useStyles();

  return (
    <div className="full-height-panel">
      <Box
        display="flex"
        width="100%"
        height="100%"
        bgcolor="transparent"
        alignItems="center"
        justifyContent="center"
      >
        <Tooltip title="Loading...">
          <CircularProgress
            className={classes.margin}
            size={75}
            variant="indeterminate"
            color="primary"
          />
        </Tooltip>
      </Box>
    </div>
  );
}
