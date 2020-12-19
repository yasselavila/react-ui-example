import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement, useMemo } from 'react';

const useStyles = makeStyles({
  abbr: {
    textDecoration: 'none'
  }
});

export interface CopyrightNoticeProps {
  className?: string;
}

export function CopyrightNotice({ className }: CopyrightNoticeProps): ReactElement {
  const classes = useStyles();

  const yearInfo = useMemo(() => {
    const year: number = new Date().getUTCFullYear();
    return ' 2020' + (year !== 2020 ? ` - ${year}` : '');
  }, []);

  return (
    <p className={className} aria-label="Copyright notice">
      {'Copyright '}
      <abbr className={classes.abbr} title="Copyright">
        &#169;
      </abbr>
      {yearInfo}
      {'. All Rights Reserved.'}
    </p>
  );
}
