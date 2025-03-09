import { ThemeContextProvider } from '../components/themeContext/ThemeContextProvider';
import { UserContextProvider } from '../components/userContext/UserContextProvider';
import { Layout } from '../components/layout/Layout';
import { ReduxProvider } from '../components/redux/provider';
import '../styles/reset.css';

export const metadata = {
  title: 'Restaurants',
  description: 'next js app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/public/favicon.svg' />
      </head>
      <body>
        <div id='root'>
          <ReduxProvider>
            <ThemeContextProvider>
              <UserContextProvider>
                <Layout>{children}</Layout>
              </UserContextProvider>
            </ThemeContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
