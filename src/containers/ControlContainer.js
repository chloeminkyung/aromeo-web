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
import {fakeControlData} from '../constants/dummy'

class ControlContainer extends React.Component {
    constructor(props){
        super(props);

        this._dataList = fakeControlData;
        this.state = {
            filteredDataList: this._dataList,
        };

        this._onFilterChange = this._onFilterChange.bind(this);
    }

    _onFilterChange(e) {
        if (!e.target.value) {
            this.setState({
                filteredDataList: this._dataList,
            });
        }

        var filterBy = e.target.value.toLowerCase();
        var size = this._dataList.length;
        var filteredList = [];
        for (var index = 0; index < size; index++) {
            var {roomNo} = this._dataList[index];
            if (roomNo.toLowerCase().indexOf(filterBy) !== -1) {
                filteredList.push(this._dataList[index]);
            }
        }

        this.setState({
            filteredDataList: filteredList
        });
    }


    render() {
        return (
            <div>
                <Row>
                    <FilterToolbar />
                    <DeviceControlTable filteredDataList={this.state.filteredDataList} _onFilterChange={this._onFilterChange} />
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
