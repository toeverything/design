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

const Component = () => {
  const isDark = useDarkMode();
  const theme = useTheme();
  useEffect(() => {
    theme.setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);
  return null;
};

export const decorators = [
  (Story: ComponentType) => {
    return (
      <ThemeProvider>
        <Component />
        <Story />
      </ThemeProvider>
    );
  },
];
