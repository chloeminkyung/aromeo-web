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
const FakeObjectDataListStore = require('../components/helpers/FakeObjectDataListStore');
import {filterWithText} from '../actions/controlAction'

class ControlContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        const {filteredDataList,
            filterWithText} = this.props;

        return (
            <div>
                <Row>
                    <FilterToolbar />
                    <DeviceControlTable filteredDataList={filteredDataList} _onFilterChange={filterWithText} />
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        filteredDataList: state.control.filteredDataList
    }),
    {
        filterWithText
    }
)(ControlContainer)


const styles = {
    textCentered: {
        textAlign: 'center'
    }
};
