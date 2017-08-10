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

        var defaultDate = Date.now()

        this.state = {
            schedule_name: "",
            description: "",
            AM: {
                startTime: defaultDate,
                blendName: "Not Selected",
                blend: [0,0,0,0,0],
                duration: 0
            },
            PM: {
                startTime: defaultDate,
                blendName: "Not Selected",
                blend: [0,0,0,0,0],
                duration: 0
            },
            Night: {
                startTime: defaultDate,
                blendName: "Not Selected",
                blend: [0,0,0,0,0],
                duration: 0
            }
        }
    }

    render() {
        const {blends} = this.props;
        const self = this;
        function createButton(){
            this.props.toggleCreateDefaultSchedule(false);
            requestBodyGenerate();
        }

        function requestBodyGenerate() {
            let body = {
                hotel_id: "1",
                schedule_name: self.state.schedule_name,
                description: self.state.description,
                timeslots: [self.state.AM, self.state.PM, self.state.Night]
            }

            self.props.createSchedule(body);
        }

        const action = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={()=>this.props.toggleCreateDefaultSchedule(false)}
            />,
            <FlatButton
                label="Create"
                primary={true}
                onTouchTap={createButton.bind(this)}
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
            if(choiceType.localeCompare("blendName")==0)
                updateContent["blend"] = blends[key].oils_encoded;
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
                            <TimeSlotSelector period="AM" timeChoice={this.state.AM.startTime}
                                              blendChoice={this.state.AM.blendName}
                                              durationChoice={this.state.AM.duration}
                                              blends={blends}
                                              handleTimeSlotChoices={handleTimeSlotChoices.bind(this)}
                                              handleTimeSelector={handleTimeSelector.bind(this)} />

                            <TimeSlotSelector period="PM" timeChoice={this.state.PM.startTime}
                                              blendChoice={this.state.PM.blendName}
                                              durationChoice={this.state.PM.duration}
                                              blends={blends}
                                              handleTimeSlotChoices={handleTimeSlotChoices.bind(this)}
                                              handleTimeSelector={handleTimeSelector.bind(this)} />

                            <TimeSlotSelector period="Night" timeChoice={this.state.Night.startTime}
                                              blendChoice={this.state.Night.blendName}
                                              durationChoice={this.state.Night.duration}
                                              blends={blends}
                                              handleTimeSlotChoices={handleTimeSlotChoices.bind(this)}
                                              handleTimeSelector={handleTimeSelector.bind(this)} />
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
