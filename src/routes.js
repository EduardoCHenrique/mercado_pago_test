import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { hot } from 'react-hot-loader/root';
const Home = React.lazy(() => import('views/Home'))
const ProductDetail = React.lazy(() => import('./views/ProductDetail'))

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/search' component={Home} />
    <Route path="/item/:id" component={ProductDetail}/>
  </Switch>
)

export default Routes