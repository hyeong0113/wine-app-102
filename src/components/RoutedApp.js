import React, {Component} from 'react';
import {Router, IndexRoute, Route, browserHistory} from 'react-router'

import {RegionsPage} from './RegionsPage'
import {WineListPage} from './WineListPage'
import {WinePage} from './WinePage'
import {WineApp} from './WineApp'
import {NotFound} from './NotFound'


export class RoutedApp extends Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path="/" component={WineApp}>
            <IndexRoute component={RegionsPage} />
            <Route path="regions/:regionId" component={WineListPage} />
            <Route path="regions/:regionId/wines/:wineId" component={WinePage} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      );
    }
  }

  export default RoutedApp