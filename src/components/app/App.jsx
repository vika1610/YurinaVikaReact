import { Provider } from 'react-redux';
import { Layout } from '../layout/Layout';
import { Restaurants } from '../restaurants/Restaurants';
import { ThemeContextProvider } from '../themeContext/ThemeContextProvider';
import { UserContextProvider } from '../userContext/UserContextProvider';
import './reset.css';
import { store } from '../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
