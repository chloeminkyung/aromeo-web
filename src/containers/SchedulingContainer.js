import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import {SchedulePaper, CreateButtonPaper, BlendPaper} from '../components/SchedulingPaper'
import CreateNewScheduleModal from '../components/CreateNewScheduleModal'
import CreateNewBlendModal from '../components/createNewBlendModal'
import {toggleCreateDefaultSchedule, toggleCreateBlend} from '../actions/scheduleAction'

const dummyScheduleData = [
    {
        "title": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "title": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "title": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "title": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "title": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "title": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "title": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "title": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "title": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "title": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },

];

const dummyBlendData = [
    {
        "title": 'Energize',
        "description": "it helps boost up energy",
        "oils": [
            {
                "oilName": "Lavender",
                "ratio": 3
            },
            {
                "oilName": "Lemon",
                "ratio": 3
            }
        ]
    },{
        "title": 'Sensual',
        "description": "creates romantic mood",
        "oils": [
            {
                "oilName": "YlangYlang",
                "ratio": 1
            },
            {
                "oilName": "Mandarin",
                "ratio": 4
            }
        ]
    },
];

class SchedulingContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Scheduling Container</h1>
                <Panel header={<h3>Default Schedules</h3>}>
                    <Row>
                        {
                            dummyScheduleData.map(function(schedule){
                                return <Col md={3}><SchedulePaper schedule={schedule} /></Col>
                            })
                        }
                        <CreateButtonPaper onClickHandler={this.props.toggleCreateDefaultSchedule} title={"Create New Schedule"} />
                        <CreateNewScheduleModal />
                    </Row>
                </Panel>
                <Panel header={<h3>Blends</h3>}>
                    <Row>
                        {
                            dummyBlendData.map(function(blend){
                                return <Col md={3}><BlendPaper blend={blend}/></Col>
                            })
                        }
                        <CreateButtonPaper onClickHandler={this.props.toggleCreateBlend} title={"Create New Blending"} />
                        <CreateNewBlendModal />
                    </Row>
                </Panel>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    {
        toggleCreateDefaultSchedule, toggleCreateBlend
    }
)(SchedulingContainer)


const styles = {
    textCentered: {
        textAlign: 'center'
    }
};