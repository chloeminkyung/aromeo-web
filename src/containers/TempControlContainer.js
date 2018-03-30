import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {getAllBlends, getAllSchedules} from '../actions/scheduleAction'
import {getAromeoStatus, updateAllAromeoSchedule, turnOnAromeo} from '../actions/controlAction'
import {getAllHotels} from '../actions/adminAction'

import {Row, Col, Glyphicon, Button, Modal} from 'react-bootstrap'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class TempControlContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            schedule: 0,
            blend: 0,
            aromeo: 0
        }
    }

    componentDidMount(){
        // this.props.getAromeoStatus(hotelId);
        // this.props.getAllBlends(hotelId);
        // this.props.getAllHotels();
        this.props.getAllSchedules();
    }

    handleBlendChange(event, index, value){
        this.setState({blend: index});
    }

    handleScheduleChange(event, index, value){
        this.setState({schedule: index});
    }

    handleApplyClick(event, index, value) {
        this.props.updateAllAromeoSchedule(this.state.schedule+1)
    }

    handleStartNowClick(event, index, value) {
        this.props.turnOnAromeo(true)
    }

    handleStopNowClick(event, index, value) {
        this.props.turnOnAromeo(false)
    }


    render() {
        const {blends, schedules, aromeos, admin} = this.props;
        // console.warn(blends);
        // console.warn(aromeos);

        return (
            <div>
                <Row>
                    {
                        this.props.hotelId == null?
                        <p>Control Page for null</p>:
                        <p>Control Page for {this.props.hotelId}</p>
                    }
                </Row>
                <Row>
                    <h1 style={styles.textCentered}>Temporary Control Page workingggggg???? </h1>
                    <br/>
                    <Col md={6}>
                        <Paper style={styles.paper}>
                            <h4 style={styles.textCentered}>Apply Schedule</h4>
                            <Col md={12}>
                                <SelectField
                                    value={this.state.schedule}
                                    onChange={this.handleScheduleChange.bind(this)}
                                    style={styles.dropdown}
                                >
                                    {
                                        schedules!=null?
                                            schedules.map(function(schedule, index){
                                                return (
                                                    <MenuItem value={index} primaryText={schedule.schedule_name} />
                                                )
                                            }):null
                                    }
                                </SelectField>
                            </Col>

                            <RaisedButton
                                label="Apply"
                                style={styles.button}
                                onClick={this.handleApplyClick.bind(this)} />

                            <RaisedButton label="Reset" style={styles.button} />
                        </Paper>
                    </Col>
                    <Col md={6}>
                        <Paper style={styles.paper}>
                            <h4 style={styles.textCentered}>Start Blend Diffusion Now </h4>
                            <Col md={12}>
                                <SelectField
                                    value={this.state.blend}
                                    onChange={this.handleBlendChange.bind(this)}
                                    style={styles.dropdown}
                                >
                                    {
                                        blends!=null?
                                            blends.map(function(blend, index){
                                                return (
                                                    <MenuItem value={index} primaryText={blend.blend_name} />
                                                )
                                            }):null
                                    }
                                </SelectField>
                            </Col>
                            <RaisedButton
                                label="Start Now"
                                style={styles.button}
                                onClick={this.handleStartNowClick.bind(this)} />
                            <RaisedButton
                                label="Stop"
                                style={styles.button}
                                onClick={this.handleStopNowClick.bind(this)} />
                        </Paper>
                    </Col>
                </Row>

                <Row>
                    <br/>
                    <Paper style={styles.paper}>
                        <h4 style={styles.textCentered}>Aromeo</h4>
                        <Col md={4}>
                            {
                                aromeos!=null?
                                    aromeos.map(function(aromeo, index){
                                        return (
                                            <MenuItem value={index} primaryText={aromeo.name} />
                                        )
                                    }):null
                            }
                        </Col>
                        <Col md={4}>
                            {
                                aromeos!=null?
                                    aromeos.map(function(aromeo, index){
                                        return (
                                            <MenuItem value={index} primaryText={aromeo.schedule_name} />
                                        )
                                    }):null
                            }
                        </Col>
                        <Col md={4}>
                            {
                                aromeos!=null?
                                    aromeos.map(function(aromeo, index){
                                        return (
                                            <MenuItem value={index} primaryText={aromeo.power_on.toString()} />
                                        )
                                    }):null
                            }
                        </Col>
                    </Paper>
                </Row>

            </div>
        );
    }
}

export default connect(
    state => ({
        blends: state.schedule.blends,
        schedules: state.schedule.schedules,
        aromeos: state.control.filteredDataList,

        toggleId: state.admin.toggleId,
        hotels:state.admin.hotels,
        hotelId: state.admin.hotelId

    }),
    {
        getAllBlends, getAllSchedules, getAllHotels, getAromeoStatus, updateAllAromeoSchedule, turnOnAromeo
    }
)(TempControlContainer)

const styles = {
    textCentered: {
        textAlign: 'center'
    },
    paper: {
        height: 250,
        padding: 15
    },
    button: {
        margin: '2.5%',
        width: '45%'
    },
    dropdown: {
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '5%',
        marginBottom: '5%',
    }
}