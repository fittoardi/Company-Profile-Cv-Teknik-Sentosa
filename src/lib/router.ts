import { useEffect, useState, useCallback } from 'react';

// Minimal hash-based router — no dependency, works without server config.
// Paths are stored without the leading "#".

function getInitialPath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function useRoute(): [string, (path: string) => void] {
  const [path, setPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const onHashChange = () => setPath(getInitialPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return [path, navigate];
}
