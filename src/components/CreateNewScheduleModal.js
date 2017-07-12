"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TimePicker from 'material-ui/TimePicker';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import TimeSlotSelector from './TimeSlotSelector'
import {toggleCreateDefaultSchedule, createSchedule} from '../actions/scheduleAction';

class CreateNewScheduleModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            schedule_name: "",
            description: "",
            AM: {
                startTime: null,
                blend: 0,
                duration: 0
            },
            PM: {
                startTime: null,
                blend: 0,
                duration: 0
            },
            Night: {
                startTime: null,
                blend: 0,
                duration: 0
            }
        }
    }

    createButton(){
        this.props.toggleCreateDefaultSchedule(false);
        this.requestBodyGenerate()
    }

    requestBodyGenerate() {
        let body = {
            hotel_id: "1",
            schedule_name: this.state.schedule_name,
            description: this.state.description,
            timeslots: [this.state.AM, this.state.PM, this.state.Night]
        }

        this.props.createSchedule(body);
        console.warn(body)
    }

    render() {
        const {blends} = this.props;
        const action = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.props.toggleCreateDefaultSchedule(false)}
            />,
            <FlatButton
                label="Create"
                primary={true}
                onTouchTap={()=>this.createButton()}
            />,
        ];

        function handleTextInputs(name, event){
            var update = {};
            update[name] = event.target.value;
            this.setState(update);
        }
        function handleTimeSlotChoices(period, choiceType, event, key, payload){
            let update = {};
            let updateContent = Object.assign({}, this.state[period]);
            updateContent[choiceType] = payload;
            update[period] = updateContent;
            this.setState(update);
        }
        function handleTimeSelector(period, date) {
            let update = {};
            let updateContent = Object.assign({}, this.state[period]);
            updateContent['startTime'] = date;
            update[period] = updateContent;
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
                                   onChange={handleTextInputs.bind(this, 'schedule_name')}
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
                        <Col md={12}>
                            <TimeSlotSelector period="AM" timeChoice={this.state.AM.startTime} blendChoice={this.state.AM.blend} durationChoice={this.state.AM.duration}
                                              blends={blends} handleTimeSlotChoices={handleTimeSlotChoices.bind(this)} handleTimeSelector={handleTimeSelector.bind(this)} />
                            <TimeSlotSelector period="PM" timeChoice={this.state.PM.startTime} blendChoice={this.state.PM.blend} durationChoice={this.state.PM.duration}
                                              blends={blends} handleTimeSlotChoices={handleTimeSlotChoices.bind(this)} handleTimeSelector={handleTimeSelector.bind(this)} />
                            <TimeSlotSelector period="Night" timeChoice={this.state.Night.startTime} blendChoice={this.state.Night.blend} durationChoice={this.state.Night.duration}
                                              blends={blends} handleTimeSlotChoices={handleTimeSlotChoices.bind(this)} handleTimeSelector={handleTimeSelector.bind(this)} />
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
        toggleCreateDefaultSchedule, createSchedule
    }
)(CreateNewScheduleModal)

const styles = {
    row: {marginTop: 10},
    timePicker: {
        width: '100%'
    },
    selectField: {
        width: '100%',
        marginTop:-24,
        padding:0,
    }
}
