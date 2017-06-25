import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {Row, Col, Glyphicon, Button} from 'react-bootstrap';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class DeviceToolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange(event, index, value){
        this.setState({value});
    }

    render(){
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="Control Options" />
                        <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    Control
                                    <NavigationExpandMoreIcon />
                                </IconButton>
                            }
                        >
                            <MenuItem primaryText="Manage Aromeo" />
                            <MenuItem primaryText="Add Aromeo" />
                            <MenuItem primaryText="Remove Aromeo" />
                        </IconMenu>
                        <ToolbarSeparator />
                    </ToolbarGroup>
                    <ToolbarGroup>

                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}

const styles = {
    deviceToolbar: {
    }
}