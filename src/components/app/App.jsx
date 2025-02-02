import { Layout } from '../layout/Layout';
import { Restaurants } from '../restaurants/Restaurants';
import { ThemeContextProvider } from '../themeContext/ThemeContextProvider';
import './reset.css';

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Restaurants />
      </Layout>
    </ThemeContextProvider>
  );
};
