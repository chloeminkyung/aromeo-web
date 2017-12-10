import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

import {setToggleId} from '../actions/adminAction';

import {aromeo_logo} from '../constants/ImageHandler'

class NavigationComponent extends React.Component{

    handleSelect(toggleId, setToggleId) {
        console.warn(toggleId)
        event.preventDefault();
        setToggleId(toggleId);
    }

    handleChange(event, index, value){
        this.setState({value});
    }

   render() {
       //console.log(this.props.toggleId)
        console.warn(this.props.toggleId)

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
                        <NavItem eventKey={2}>Scheduling</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/order">
                        <NavItem eventKey={3}>Order</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/help">
                        <NavItem eventKey={4}>Help</NavItem>
                    </LinkContainer>
                    <NavDropdown eventKey="5" title= {this.props.toggleId == 0? "Hotel List": this.props.toggleId} id="nav-dropdown" onSelect={(x)=>this.handleSelect(x,this.props.setToggleId)}>
                        <MenuItem eventKey="5.1">Hotel1</MenuItem>
                        <MenuItem eventKey="5.2">Hotel2</MenuItem>
                        <MenuItem eventKey="5.3">Hotel3</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="5.4">Summary</MenuItem>


                        {/*{*/}
                            {/*if(accounts!= null){*/}
                            {/*accounts.map(function(blend, index){*/}
                                {/*return (*/}
                                    {/*<MenuItem value={index} primaryText={account.blend_name} />*/}
                                {/*)}*/}
                            {/*}else{*/}
                                {/*null;*/}
                            {/*}*/}
                        {/*}*/}
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default connect(
    state => ({
        toggleId: state.admin.toggleId
    }),
    {
        setToggleId
    }
)(NavigationComponent)
