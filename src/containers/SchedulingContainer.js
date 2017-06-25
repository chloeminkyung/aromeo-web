import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Glyphicon, Button} from 'react-bootstrap';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardMedia} from 'material-ui/Card';

import {Config} from '../config'

class SchedulingContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Scheduling Container</h1>
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