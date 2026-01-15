'use client';

import React from 'react';
import { script } from '@/components/ui/gluestack-ui-provider/script';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';

const THEME_STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark' | 'system';

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

export function ThemeToggleButton() {
  const [theme, setTheme] = React.useState<Theme>('system');

  React.useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    script(initial);
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const effectiveTheme =
    theme === 'system' ? getSystemTheme() : theme;

  const handleToggle = () => {
    setTheme((prev) => {
      if (prev === 'light') {
        script('dark');
        return 'dark';
      }
      if (prev === 'dark') {
        script('light');
        return 'light';
      }
      const systemTheme = getSystemTheme();
      const next = systemTheme === 'dark' ? 'light' : 'dark';
      script(next);
      return next;
    });
  };

  return (
    <Fab
      onPress={handleToggle}
      className="m-6 bg-primary-500"
      size="lg"
      placement="bottom right"
    >
      <FabIcon as={effectiveTheme === 'dark' ? SunIcon : MoonIcon} />
    </Fab>
  );
}

