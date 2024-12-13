import '@/style/globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { webInfo } from '@/utils';
import { ThemeProvider } from '@mui/material';
import theme from '@/assets/theme';
import Providers from '@/assets/Providers';

export const metadata = {
  title: webInfo.name + ' - Electric Vehicles, E Rickshaws, and More',
  description: `${webInfo.name} E-Rickshaw India's Best leading manufacturers exporter suppliers of e rickshaw, battery rickshaw, Li-ion rickshaw.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
