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

import {toggleAddAromeoDevice} from '../actions/controlAction';

class AromeoAddModal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const actions = [
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

        return (
            <div>
                <Dialog
                    title="Register New Aromeo"
                    actions={actions}
                    modal={true}
                    open={this.props.isAddAromeo}
                >
                    Add Aromeo
                </Dialog>
            </div>
        );
    }
};

export default connect(
    state => ({
        isRemoveAromeo: state.control.isRemoveAromeo,
    }),
    {
        toggleAddAromeoDevice
    }
)(AromeoAddModal)

const styles = {
    icon: {
        height: 15,
        width: 15
    }
}