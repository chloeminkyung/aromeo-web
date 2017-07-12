"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TimePicker from 'material-ui/TimePicker';

import Moon from 'material-ui/svg-icons/image/brightness-3';
import Sun from 'material-ui/svg-icons/image/wb-sunny';
import Cloud from 'material-ui/svg-icons/image/wb-cloudy';

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
                onTouchTap={()=>this.props.toggleCreateDefaultSchedule(false)}
            />,
        ];

        function handleTextInputs(name, event){
            var update = {};
            update[name] = event.target.value;
            this.setState(update);
        }

        return (
            <div>
                <Dialog
                    title="Create New Schedule"
                    actions={action}
                    modal={true}
                    open={this.props.isCreateScheduleModalOpen}
                >
                    <Row style={styles.row}>
                        <Col md={2}>
                            Schedule Name
                        </Col>
                        <Col md={10}>
                            <input className={"form-control"} type="text" placeholder="Schedule Name"
                                   onChange={handleTextInputs.bind(this, 'name')}
                            />
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col md={2}>
                            Description
                        </Col>
                        <Col md={10}>
                            <textarea className={"form-control"} onChange={handleTextInputs.bind(this,'description')} />
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col md={12}>
                            Timeslot
                        </Col>
                        <Col mdOffset={2} md={10}>
                            <Row>
                                <Col mdOffset={2} md={2}>{<Sun />} <b>AM</b>: </Col>
                                <Col md={8}><TimePicker style={styles.timepicker} hintText="Select Time" /></Col>
                            </Row>
                            <Row>
                                <Col mdOffset={2} md={2}> {<Cloud />} <b>PM</b>: </Col>
                                <Col md={8}><TimePicker hintText="Select Time" /></Col>
                            </Row>
                            <Row>
                                <Col mdOffset={2} md={2}> {<Moon />} <b>Night</b>: </Col>
                                <Col md={8}><TimePicker hintText="Select Time" /></Col>
                            </Row>
                        </Col>
                    </Row>
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

const styles = {
    row: {marginTop: 10},
    timepicker: {
        color: 'red'
    }
}
