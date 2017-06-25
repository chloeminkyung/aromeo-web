import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

import {aromeo_logo} from '../constants/ImageHandler'

export default class NavigationComponent extends React.Component{
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand><img style={{display: 'inline-block', padding: 0, margin: 0}} height={20} src={aromeo_logo}/> <b style={{color: 'white'}}>AROMEO</b></Navbar.Brand>
                    </LinkContainer>
                    {/*<p style={{paddingTop: '15px', display:'inline-block', color:'white'}}> Control Page </p>*/}
                </Navbar.Header>

                <Nav pullRight>
                    <LinkContainer to="/control">
                        <NavItem eventKey={1}>Control</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/scheduling">
                        <NavItem eventKey={1}>Scheduling</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/order">
                        <NavItem eventKey={1}>Order</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/help">
                        <NavItem eventKey={1}>Help</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}
