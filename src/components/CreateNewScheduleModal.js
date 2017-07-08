"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {toggleCreateDefaultSchedule} from '../actions/scheduleAction';

class CreateNewScheduleModal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const action = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.props.toggleCreateDefaultSchedule(false)}
            />,
            <FlatButton
                label="Create"
                primary={true}
                disabled={true}
                onTouchTap={()=>this.props.toggleCreateDefaultSchedule(false)}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Create New Schedule"
                    actions={action}
                    modal={true}
                    open={this.props.isCreateScheduleModalOpen}
                >
                    Create New Default Schedule
                </Dialog>
            </div>
        );
    }
};

export default connect(
    state => ({
        isCreateScheduleModalOpen: state.schedule.isCreateScheduleModalOpen,
    }),
    {
        toggleCreateDefaultSchedule
    }
)(CreateNewScheduleModal)
