import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect} from 'react-router'

import Appp from './components/Appp';
import TempControlContainer from './containers/TempControlContainer';
import ControlContainer from './containers/ControlContainer';
import SchedulingContainer from './containers/SchedulingContainer';
import OrderContainer from './containers/OrderContainer';
import HelpContainer from './containers/HelpContainer';

const NotFound = () => (
    <h1>404.. This page is not found!</h1>);


export default (
    <Route path='/'>
        <IndexRedirect to='control'/>
        <Route path='' component={Appp}>
            <Route path='control' component={TempControlContainer} />
            <Route path='test_control' component={ControlContainer} />
            <Route path='scheduling' component={SchedulingContainer} />
            <Route path='order' component={OrderContainer} />
            <Route path='help' component={HelpContainer}/>
            <Route path='*' component={NotFound} />
        </Route>
    </Route>
)