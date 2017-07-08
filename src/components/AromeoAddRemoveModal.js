"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';

import {toggleAddAromeoDevice, toggleRemoveAromeoDevice} from '../actions/controlAction';

class AromeoAddModal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.isAddAromeo){


        }
        const addAromeoActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.props.toggleAddAromeoDevice(false)}
            />,
            <FlatButton
                label="Add"
                primary={true}
                disabled={true}
                onTouchTap={()=>this.props.toggleAddAromeoDevice(false)}
            />,
        ];

        const removeAromeoActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.props.toggleRemoveAromeoDevice(false)}
            />,
            <FlatButton
                label="Remove"
                primary={true}
                disabled={true}
                onTouchTap={()=>this.props.toggleRemoveAromeoDevice(false)}
            />,
        ];


        return (
            <div>
                {
                    this.props.isAddAromeo?
                        <Dialog
                            title="Register New Aromeo"
                            actions={addAromeoActions}
                            modal={true}
                            open={this.props.isAddAromeo}
                        >
                            Add Aromeo
                        </Dialog>
                        :
                        <Dialog
                            title="Remove Aromeo"
                            actions={removeAromeoActions}
                            modal={true}
                            open={this.props.isRemoveAromeo}
                        >
                            Add Aromeo
                        </Dialog>
                }

            </div>
        );
    }
};

export default connect(
    state => ({
        isRemoveAromeo: state.control.isRemoveAromeo,
        isAddAromeo: state.control.isAddAromeo,
    }),
    {
        toggleAddAromeoDevice, toggleRemoveAromeoDevice
    }
)(AromeoAddModal)

const styles = {
    icon: {
        height: 15,
        width: 15
    }
}