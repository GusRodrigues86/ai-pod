import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

function appTheme() {
  return createVuetify({
    theme: {
      defaultTheme: 'dark', // Set the default theme to dark
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#121212',
            surface: '#1E1E1E',
            'on-surface': '#FFFFFF',
            primary: '#BB86FC',
            secondary: '#03DAC6',
            error: '#CF6679',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FF9800'
          }
        }
      }
    },
    components,
    directives,
    ssr: true
  });
}

export { appTheme };
