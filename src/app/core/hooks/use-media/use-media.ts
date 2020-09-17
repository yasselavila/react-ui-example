/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from 'react';

export function useMedia(mediaQuery: string): boolean {
  /* Is API supported? */
  if (typeof window !== 'object' || !('matchMedia' in window)) {
    return false;
  }

  const [matches, setMatches] = useState(!!window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);

    if (matches !== media.matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(!!media.matches);

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [matches, mediaQuery]);

  return matches;
}
