import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {aromeo_logo, logo, manage, schedule, search, help, order} from '../constants/ImageHandler'
import '../style.css';

import NavigationComponent from './NavigationBar.js';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

const items = [
    <SidebarItem background={'#15181f'} textAlign={'center'}><img style={{display: 'inline-block', padding: 0, marginBottom: 10, marginTop: 10, marginRight: 10}} height={20} src={logo}/></SidebarItem>,
    <SidebarItem color={'#a27161'} textAlign={'left'} href={'/control'}><img style={{display: 'inline-block', padding: 0, marginRight: 10}} src={manage}/>Control</SidebarItem>,
    <SidebarItem color={'#a27161'} textAlign={'left'} href={'/scheduling'}><img style={{display: 'inline-block', padding: 0, marginRight: 10}} src={schedule}/>Scheduling</SidebarItem>,
    <SidebarItem color={'#a27161'} textAlign={'left'} href={'/order'}><img style={{display: 'inline-block', padding: 0, marginRight: 10}} src={order}/>Order</SidebarItem>,
    <SidebarItem color={'#a27161'} textAlign={'left'} href={'/help'}><img style={{display: 'inline-block', padding: 0, marginRight: 10}} src={help}/>Help</SidebarItem>,
];



const aromeoTheme = getMuiTheme({
    palette: {
        primary1Color: '#351d49',
        pickerHeaderColor: '#351d49',
        darkPurple: '#170231',
        lightPurple: '#351d49',
    },
});

export default function App({children}){
    return (
        <MuiThemeProvider muiTheme={aromeoTheme}>
            <div>
                <Sidebar margin={20} width={260} background={'#232733'} content={items}>
                <NavigationComponent />
                <div style={containerDivStyle}>
                    {children}
                </div>
                </Sidebar>
            </div>
        </MuiThemeProvider>
    )
}


const containerDivStyle = {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100
};
