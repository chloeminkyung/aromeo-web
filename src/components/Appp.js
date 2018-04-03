import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {logo, manage, schedule, search, help, order, control} from '../constants/ImageHandler'
import '../style.css';

import NavigationComponent from './NavigationBar.js';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

const items = [
    <SidebarItem background={'#131313'} textAlign={'center'} ><img style={{display: 'inline-block', padding: 0, marginBottom: 10, marginTop: 10, marginRight: 10}} height={20} src={logo}/></SidebarItem>,
    <SidebarItem activeHightlight={'#1b1818'} color={'#976757'} textAlign={'left'} href={'/control'} ><img className="icons" src={control}/>Control</SidebarItem>,
    <SidebarItem activeHightlight={'#1b1818'} color={'#976757'} textAlign={'left'} href={'/scheduling'} ><img className="icons" src={schedule}/>Scheduling</SidebarItem>,
    <SidebarItem activeHightlight={'#1b1818'} color={'#976757'} textAlign={'left'} href={'/order'} ><img className="icons" src={order}/>Order</SidebarItem>,
    <SidebarItem activeHightlight={'#1b1818'} color={'#976757'} textAlign={'left'} href={'/help'} ><img className="icons" src={help}/>Help</SidebarItem>,
    <SidebarItem activeHightlight={'#1b1818'} color={'#976757'} textAlign={'left'} href={'/test_control'} ><img className="icons" src={control}/>control test</SidebarItem>
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
                <Sidebar margin={20} width={260} background={'#211e1e'} content={items}>
                    {/*<NavigationComponent />*/}
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
    marginRight: 100,
};
