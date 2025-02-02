import { Layout } from '../layout/Layout';
import { Restaurants } from '../restaurants/Restaurants';
import { ThemeContextProvider } from '../themeContext/ThemeContextProvider';
import { UserContextProvider } from '../userContext/UserContextProvider';
import './reset.css';

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
