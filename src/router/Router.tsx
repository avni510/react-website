import * as React from 'react';
import { Route } from 'react-router-dom';
import { AboutMe } from '../AboutMe';
import { Home } from '../Home';

const routes = (
  <Route>
    <Route exact path="/" component={Home}/>
    <Route path="/about_me" component={AboutMe}/>
 </Route>
)

export default routes;
