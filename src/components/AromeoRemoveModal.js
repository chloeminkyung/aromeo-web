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

import {toggleRemoveAromeoDevice} from '../actions/controlAction';

class AromeoAddModal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.props.toggleRemoveAromeoDevice(false)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={()=>this.props.toggleRemoveAromeoDevice(false)}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Remove Aromeo"
                    actions={actions}
                    modal={true}
                    open={this.props.isRemoveAromeo}
                >
                    Add Aromeo.
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
        toggleRemoveAromeoDevice
    }
)(AromeoAddModal)

const styles = {
    icon: {
        height: 15,
        width: 15
    }
}