import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

import {gethotelBlends} from '../actions/scheduleAction';
import {gethotelAromeoStatus} from '../actions/controlAction';
import {setToggleId, setHotelId, getAllHotels} from '../actions/adminAction';

import {aromeo_logo} from '../constants/ImageHandler'

class NavigationComponent extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            hotel: 0,
            hotelId: null
        }
    }

    handleHotelChange(event, index, value){
        this.setState({hotelId: index});
    }

    componentDidMount(){
        if(this.props.hotels==null)
            this.props.getAllHotels();
            // this.props.gethotelBlends(hotelId);
            // this.props.gethotelAromeoStatus(hotelId);
    }

    handleHotelSelect(hotelId, setHotelId) {
        event.preventDefault();
        setHotelId(hotelId);
        this.props.gethotelBlends(hotelId);
        this.props.gethotelAromeoStatus(hotelId);
    }


   render() {
       const {hotels, admin} = this.props;
       console.warn(hotels);
       console.warn("to check hotel id"+ this.props.hotelId);

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
                        <NavItem eventKey={1.1}>Control</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/scheduling">
                        <NavItem eventKey={2.1}>Scheduling</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/order">
                        <NavItem eventKey={3.1}>Order</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/help">
                        <NavItem eventKey={4.1}>Help</NavItem>
                    </LinkContainer>
                    <NavDropdown eventKey="5"
                                 title= {this.props.hotelId == null? "Hotel List": this.props.hotelId} id="nav-dropdown"
                                 onChange={this.handleHotelChange.bind(this)} onSelect = {(x)=>this.handleHotelSelect(x, this.props.setHotelId)}>
                        {/*onChange={this.handleBlendChange.bind(this)} onSelect={(x)=>this.handleSelect(x,this.props.setToggleId)}*/}
                        {
                            hotels != null ?  hotels.map(function(hotel, index){
                                return (
                                    <MenuItem eventKey={hotel.account_id} value={hotel.account_id}>{hotel.account_name}</MenuItem>
                                )
                            }):   null
                        }
                        {/*<MenuItem eventKey="5.4">Summary</MenuItem>*/}
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default connect(
    state => ({
        hotels: state.admin.hotels,
        toggleId: state.admin.toggleId
    }),
    {
        setToggleId,setHotelId, getAllHotels, gethotelBlends, gethotelAromeoStatus
    }
)(NavigationComponent)
