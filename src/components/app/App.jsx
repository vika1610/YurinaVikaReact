import { Provider } from 'react-redux';
import { Layout } from '../layout/Layout';
import { Restaurants } from '../restaurants/Restaurants';
import { ThemeContextProvider } from '../themeContext/ThemeContextProvider';
import { UserContextProvider } from '../userContext/UserContextProvider';
import './reset.css';
import { store } from '../redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from '../../pages/home-page';
import { RestaurantPage } from '../../pages/restaurant-page';
import { MenuPage } from '../../pages/menu-page';
import { ReviewsPage } from '../../pages/reviews-page';
import { DishPage } from '../../pages/dish-page';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <UserContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/restaurants' element={<Restaurants />}>
                  <Route index element={<div>choose restaurant</div>} />
                  <Route path=':restaurantId' element={<RestaurantPage />}>
                    <Route index element={<Navigate to='menu' replace />} />
                    <Route path='menu' element={<MenuPage />} />
                    <Route path='reviews' element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path='/dish/:dishId' element={<DishPage />} />
              </Route>
            </Routes>
          </UserContextProvider>
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
  );
};
