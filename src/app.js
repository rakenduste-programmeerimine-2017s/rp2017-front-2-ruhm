import React from 'react'
import { render } from 'react-dom'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './components/Home'
import Words from './components/Words'
import NotFound from './components/NotFound'
import { Layout } from 'antd'
import './app.scss'

import store from './store'

const { Sider, Header, Footer, Content } = Layout

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/words' component={Words} />
        <Route component={NotFound} />
      </Switch>

    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
)
