import { Route, Redirect } from 'react-router-dom';
import React from 'react';

// HOC
import { HomeLayoutHOC, RestaurantLayoutHOC, CheckoutLayoutHOC } from './HOC';

// pages
import Home from './Page/Home';
import Overview from './Page/Restaurant/Overview';
import OrderOnline from './Page/Restaurant/OrderOnline';
import Reviews from './Page/Restaurant/Reviews';
import Photos from './Page/Restaurant/Photos';
import Menu from './Page/Restaurant/Menu';
import Checkout from './Page/Checkout';

function App() {
  return (
    <>
      <Route path='/' exact>
        <Redirect to='/delivery' />
      </Route>

      <HomeLayoutHOC path='/:type' exact component={Home} />

      <Route path='/restaurant/:id' exact>
        <Redirect to='/restaurant/:id/overview' />
      </Route>

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
      <CheckoutLayoutHOC path='/checkout/order' exact component={Checkout} />
    </>
  );
}

export default App;
