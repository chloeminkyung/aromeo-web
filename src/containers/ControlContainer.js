import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {Row, Col, Glyphicon, Button} from 'react-bootstrap';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardMedia} from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import FilterToolbar from '../components/FilterToolbar'
import DeviceControlTable from '../components/DeviceControlTable'

class ControlContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Row>
                    <FilterToolbar />
                    <DeviceControlTable />
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    {

    }
)(ControlContainer)


const styles = {
    textCentered: {
        textAlign: 'center'
    }
};
