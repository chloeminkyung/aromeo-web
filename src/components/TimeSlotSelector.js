"use strict";
const React = require('react');
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {durations, durationNumToDurationString} from '../constants/mapperAndConstants'

export default class TimeSlotSelector extends React.Component {
    render() {
        const {period, timeChoice, blendChoice, durationChoice, blends, handleTimeSlotChoices, handleTimeSelector} = this.props;
        return (
            <Row style={styles.row}>
                <Col md={12}>
                    <Row>
                        <Col mdOffset={2} md={1}><b>{period}</b>: </Col>
                        <Col md={3}>
                            <TimePicker value={timeChoice} hintText="Select start time" onChange={(event, date)=>handleTimeSelector(period, date)}
                                        textFieldStyle={styles.timePicker} />
                        </Col>
                        <Col md={3}>
                            <SelectField
                                floatingLabelText="Blend"
                                value={blendChoice}
                                onChange={(event, key, payload)=>handleTimeSlotChoices(period, 'blend', event, key, payload)}
                                style={styles.selectField}
                            >

                                {
                                    blends!=null?
                                        blends.map(function(blend){
                                            return <MenuItem key={blend.blend_id} value={blend.blend_name} primaryText={blend.blend_name} />;

                                        }):null
                                }
                            </SelectField>
                        </Col>
                        <Col md={3}>
                            <SelectField
                                floatingLabelText="Duration"
                                value={durationChoice}
                                onChange={(event, key, payload)=>handleTimeSlotChoices(period, 'duration', event, key, payload)}
                                style={styles.selectField}
                            >
                                {
                                    durations.map(function (duration, index) {
                                        let durationString = durationNumToDurationString(duration)
                                        return <MenuItem key={index} value={duration} primaryText={durationString} />
                                    })
                                }
                            </SelectField>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
};

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
};