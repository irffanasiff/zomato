import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { HomeLayoutHOC, RestaurantLayoutHOC, CheckoutLayoutHOC } from './HOC';

// pages
import {
  Home,
  RedirectRestaurant,
  Overview,
  OrderOnline,
  Reviews,
  Menu,
  Photos,
  Checkout,
  GoogleAuth,
} from './Page';

// redux action
import { getMyself } from './Redux/Reducer/User/user.action';

// axios global settings
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMyself());
  });

  return (
    <>
      <Route path='/' exact>
        <Redirect to='/delivery' />
      </Route>
      <Route path='/restaurant/:id' exact component={RedirectRestaurant} />

      <HomeLayoutHOC path='/:type' exact component={Home} />

      <HomeLayoutHOC path='/google/:token' exact component={GoogleAuth} />
      <RestaurantLayoutHOC
        path='/restaurant/:id/overview'
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path='/restaurant/:id/order-online'
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC path='/restaurant/:id/menu' exact component={Menu} />
      <RestaurantLayoutHOC
        path='/restaurant/:id/reviews'
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC
        path='/restaurant/:id/photos'
        exact
        component={Photos}
      />
      <CheckoutLayoutHOC path='/checkout/orders' exact component={Checkout} />
    </>
  );
}

export default App;
