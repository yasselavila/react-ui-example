import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import React, { Children, ReactElement, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  common: {
    minHeight: 75
  }
}));

export interface NavMenuProps {
  children: ReactNode;
}

export function NavMenu({ children }: NavMenuProps): ReactElement {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | false>(false);

  useEffect(() => {
    const idx = Children.toArray(children).findIndex(({ props }: any) =>
      pathname.startsWith(props.to)
    );
    setActiveIndex(idx !== -1 ? idx : false);
  }, [children, pathname]);

  return (
    <Tabs indicatorColor="primary" value={activeIndex} classes={{ flexContainer: classes.common }}>
      {children}
    </Tabs>
  );
}
