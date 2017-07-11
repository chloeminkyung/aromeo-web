"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {toggleCreateDefaultSchedule} from '../actions/scheduleAction';

class RemoveModal extends React.Component {
    constructor(props){
        super(props);
    }

    removeHandler(){
        this.props.removeFunction(this.props.targetId);
        this.props.toggleFunction(false);
    }

    render() {
        const {item, isOpen, toggleFunction} = this.props;

        const action = [
            <FlatButton
                label="No, Don't Remove"
                primary={true}
                onTouchTap={()=>toggleFunction(false)}
            />,
            <FlatButton
                label="Yes, Remove"
                primary={true}
                onTouchTap={()=>this.removeHandler()}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Remove Confirmation"
                    actions={action}
                    modal={true}
                    open={isOpen}
                >
                    Are you sure you want to remove {item} ?
                </Dialog>
            </div>
        );
    }
};

export default connect(
    state => ({
        isRemoveBlendModalOpen: state.schedule.isRemoveBlendModalOpen,
    }),
    {
        toggleCreateDefaultSchedule
    }
)(RemoveModal)
