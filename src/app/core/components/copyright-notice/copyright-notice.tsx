import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement, useMemo } from 'react';
import { TheoremWebsiteLink } from '../theorem-website-link/theorem-website-link';

const useStyles = makeStyles({
  abbr: {
    textDecoration: 'none'
  }
});

export interface CopyrightNoticeProps {
  className?: string;
  linkClassName?: string;
}

export function CopyrightNotice({ className, linkClassName }: CopyrightNoticeProps): ReactElement {
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
      {' '}
      <TheoremWebsiteLink className={linkClassName} />
      {', LLC. All Rrights Reserved.'}
    </p>
  );
}
