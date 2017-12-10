import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {getAllBlends, getAllSchedules} from '../actions/scheduleAction'
import {getAllAromeoStatus} from '../actions/controlAction'
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
            aromeo: 0,
        }
    }

    componentDidMount(){
        if(this.props.blends==null)
            this.props.getAllBlends();
        if(this.props.schedules==null)
            this.props.getAllSchedules();
    }

    handleBlendChange(event, index, value){
        this.setState({blend: index});
    }

    handleScheduleChange(event, index, value){
        this.setState({schedule: index});
    }

    render() {
        const {blends, schedules, aromeos, admin} = this.props;
        console.log("its connected" + this.props.toggleId)
        console.warn(blends);

        return (
            <div>
                <Row>
                    {
                        this.props.toggleId == 5.1?
                            <p>1</p>:
                            this.props.toggleId == 5.2?
                                <p>2</p>:
                                    <p>3</p>
                    }
                </Row>
                <Row>
                    <h1 style={styles.textCentered}>Temporary Control Page</h1>
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
                                style={styles.button} />
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
                            <RaisedButton label="Start Now" style={styles.button} />
                            <RaisedButton label="Stop" style={styles.button} />
                        </Paper>
                    </Col>
                </Row>

                <Row>
                    <br/>
                    <Paper style={styles.paper}>
                        <h4 style={styles.textCentered}>Aromeo</h4>
                            {
                                schedules!=null?
                                    schedules.map(function(schedule, index){
                                        return (
                                            <MenuItem value={index} primaryText={schedule.schedule_name} />
                                        )
                                    }):null
                            }
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
        aromeos: state.control.aromeoStatus,
        toggleId: state.admin.toggleId
    }),
    {
        getAllBlends, getAllSchedules, getAllAromeoStatus
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