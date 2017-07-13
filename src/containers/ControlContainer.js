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
import {filterWithText, getAromeoStatus, updateAromeoStatusValue, updateAromeoScheduleValue} from '../actions/controlAction'
import {getAllSchedules} from '../actions/scheduleAction'

class ControlContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: props.isOpen,
            tempHotelId: 1,
        };
    }

    componentDidMount(){
        this.props.getAromeoStatus(this.state.tempHotelId);
        this.props.getAllSchedules();
    }

    render() {
        const {aromeoStatus, schedules, filteredDataList, isManageMode,
            filterWithText, updateAromeoStatusValue, updateAromeoScheduleValue} = this.props;

        console.warn(filteredDataList)

        return (
            <div>
                <Row>
                    <FilterToolbar />
                    {
                        filteredDataList!=null?
                            <DeviceControlTable filteredDataList={filteredDataList} filterWithText={filterWithText} isManageMode={isManageMode} schedules={schedules}
                                                updateAromeoStatusValue={updateAromeoStatusValue} updateAromeoScheduleValue={updateAromeoScheduleValue} />
                            :<p>Fetching...</p>
                    }
                </Row>
            </div>
        );
    }
}

export default connect(
    state => ({
        schedules: state.schedule.schedules,
        aromeoStatus: state.control.aromeoStatus,
        filteredDataList: state.control.filteredDataList,
        isManageMode: state.control.isManageMode,
    }),
    {
        filterWithText, getAromeoStatus, updateAromeoStatusValue, updateAromeoScheduleValue,
        getAllSchedules
    }
)(ControlContainer)

const styles = {
    textCentered: {
        textAlign: 'center'
    }
};
