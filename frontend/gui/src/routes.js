import React from 'react';
import {Route} from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import CustomLogin from './containers/login'
const BaseRouter = () =>(
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/articles/:articleID/' component={ArticleDetail}/>
        <Route exact path='/login' component={CustomLogin}/>
    </div>
);

export default BaseRouter;