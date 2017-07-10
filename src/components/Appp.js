import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavigationComponent from './NavigationBar.js';

const aromeoTheme = getMuiTheme({
    palette: {
        primary1Color: '#351d49',
        darkPurple: '#170231',
        lightPurple: '#351d49',
    },
});

export default function App({children}){
    return (
        <MuiThemeProvider muiTheme={aromeoTheme}>
            <div>
                <NavigationComponent />
                <div style={containerDivStyle}>
                    {children}
                </div>
            </div>
        </MuiThemeProvider>
    )
}


const containerDivStyle = {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100
};
