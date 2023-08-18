import './preview.css';
import { ThemeProvider, useTheme } from 'next-themes';
import type { ComponentType } from 'react';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { Preview } from '@storybook/react';

export const parameters: Preview = {
  argTypes: {
    param: {
      table: { category: 'Group' },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

const ThemeChange = () => {
  const isDark = useDarkMode();
  const theme = useTheme();
  if (theme.resolvedTheme === 'dark' && !isDark) {
    theme.setTheme('light');
  } else if (theme.resolvedTheme === 'light' && isDark) {
    theme.setTheme('dark');
  }
  return null;
};

const Component = () => {
  const isDark = useDarkMode();
  const theme = useTheme();
  useEffect(() => {
    theme.setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);
  return null;
};

export const decorators = [
  (Story: ComponentType, context) => {
    return (
      <ThemeProvider themes={['dark', 'light']} enableSystem={true}>
        <ThemeChange />
        <Component />
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
