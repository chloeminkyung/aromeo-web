import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {getAllBlends, getAllSchedules} from '../actions/scheduleAction'
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
        }
    }

    componentDidMount(){
        this.props.getAllBlends();
        this.props.getAllSchedules();
    }

    handleChange(event, index, value){
        this.setState({value});
    }

    render() {
        const {blends, schedules} = this.props;

        console.warn(blends);

        return (
            <div>
                <Row>
                    <h1 style={styles.textCentered}>Temporary Control Page</h1>
                    <br/>
                    <Col md={6}>
                        <Paper style={styles.paper}>
                            <h4 style={styles.textCentered}>Apply Schedule</h4>
                            <Col md={12}>
                                <SelectField
                                    value={this.state.schedule}
                                    onChange={this.handleChange}
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
                            <RaisedButton label="Apply" style={styles.button} />
                            <RaisedButton label="Reset" style={styles.button} />
                        </Paper>
                    </Col>
                    <Col md={6}>
                        <Paper style={styles.paper}>
                            <h4 style={styles.textCentered}>Start Blend Diffusion Now </h4>
                            <Col md={12}>
                                <SelectField
                                    value={this.state.blend}
                                    onChange={this.handleChange}
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

                            <RaisedButton label="Start Now" style={styles.button} />
                            <RaisedButton label="Stop" style={styles.button} />
                        </Paper>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        blends: state.schedule.blends,
        schedules: state.schedule.schedules,
    }),
    {
        getAllBlends, getAllSchedules
    }
)(TempControlContainer)

const styles = {
    textCentered: {
        textAlign: 'center'
    },
    paper: {
        height: 200,
        padding: 15
    },
    button: {
        margin: 12,
        width: '45%'
    },
    dropdown: {
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%'
    }
}