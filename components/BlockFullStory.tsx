'use client';

import { useEffect } from 'react';

export default function BlockFullStory() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const originalFetch = window.fetch.bind(window);

    // Override fetch to silently ignore requests to FullStory edge domain to avoid noisy runtime errors
    (window as any).fetch = async (...args: any[]) => {
      try {
        const urlArg = args[0];
        const url = typeof urlArg === 'string' ? urlArg : urlArg?.url;

        if (typeof url === 'string' && url.includes('edge.fullstory.com')) {
          // Return an empty successful Response so calling code won't throw
          console.warn('[BlockFullStory] blocked fetch to', url);
          return new Response(null, { status: 204, statusText: 'No Content' });
        }

        return await originalFetch(...args);
      } catch (err) {
        const urlArg = args[0];
        const url = typeof urlArg === 'string' ? urlArg : urlArg?.url;

        if (typeof url === 'string' && url.includes('edge.fullstory.com')) {
          console.warn('[BlockFullStory] suppressed FullStory fetch error', err);
          return new Response(null, { status: 204, statusText: 'No Content' });
        }

        throw err;
      }
    };

    return () => {
      (window as any).fetch = originalFetch;
    };
  }, []);

  return null;
}
