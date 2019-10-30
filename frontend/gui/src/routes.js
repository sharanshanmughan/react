import React from 'react';
import {Route} from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import CustomLogin from './containers/login';
import CustomSignup from './containers/signup'
const BaseRouter = () =>(
    <div>
        <Route exact path='/' component={CustomLogin}/>
        <Route exact path='/articles' component={ArticleList}/>
        <Route exact path='/articles/:articleID/' component={ArticleDetail}/>
        <Route exact path = '/signup' component={CustomSignup}/>
    </div>
);

export default BaseRouter;