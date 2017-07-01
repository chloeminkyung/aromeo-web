import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Panel} from 'react-bootstrap';
import {SchedulePaper, CreateButtonPaper, BlendPaper} from '../components/SchedulingPaper'


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
        "description": "it helps ....",
        "oils": [
            {
                "oilName": "Lavender",
                "ratio": 0.5
            },
            {
                "oilName": "Lemon",
                "ratio": 0.5
            }
        ]
    },{
        "title": 'Sensual',
        "description": "it helps ....",
        "oils": [
            {
                "oilName": "YlangYlang",
                "ratio": 0.3
            },
            {
                "oilName": "Mandarin",
                "ratio": 0.7
            }
        ]
    },
];

class SchedulingContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        // const self = this;

        // dummyBlendData.map(function(blend){
        //     self.blendRatioDataFormatter(blend.oils);
        // })

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
                        <CreateButtonPaper onClickHandler="" title={"Create New Schedule"} />
                    </Row>
                </Panel>
                <Panel header={<h3>Blends</h3>}>
                    <Row>
                        {
                            dummyBlendData.map(function(blend){
                                return <Col md={3}><BlendPaper blend={blend}/></Col>
                            })
                        }
                        <Col md={3}>
                        </Col>
                        <CreateButtonPaper onClickHandler="" title={"Create New Blend"} />
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

    }
)(SchedulingContainer)


const styles = {
    textCentered: {
        textAlign: 'center'
    }
};