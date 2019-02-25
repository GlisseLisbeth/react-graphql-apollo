import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//import container
import Search from './Search';
//import component
import UserItem from '../components/UserItem';
const AppContainer = () => (
  <BrowserRouter>
    <Fragment>
      <div className="app-container container-fluid">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={ Search } />
          <Route exact path={`${process.env.PUBLIC_URL}/user/:login`} component={ UserItem } />
        </Switch>
      </div>
    </Fragment>
  </BrowserRouter>
);

export default AppContainer;