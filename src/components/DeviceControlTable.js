"use strict";

const ExampleImage = require('./helpers/ExampleImage');
const FakeObjectDataListStore = require('./helpers/FakeObjectDataListStore');
const { IndexCell, DeviceStatusCell, OilStatusCell, ScheduleCell, TextCell } = require('./helpers/cells');
const { Table, Column, Cell } = require('fixed-data-table-2');
const React = require('react');
const Dimensions = require('react-dimensions');

require('fixed-data-table-2/dist/fixed-data-table.css')


class DeviceControlTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    setScheduleValue(event, index, value){

    }

    render() {
        var {filteredDataList, isManageMode, schedules} = this.props;
        const {height, width, containerHeight, containerWidth, ...props} = this.props;
        return (
            <div>
                <Table
                    rowHeight={50}
                    rowsCount={filteredDataList.length}
                    headerHeight={50}
                    width={containerWidth}
                    height={containerHeight}
                    {...this.props}>
                    <Column
                        columnKey="index"
                        header={<Cell>Index</Cell>}
                        cell={<IndexCell />}
                        width={100}
                        align={'center'}
                    />
                    <Column
                        columnKey="roomNo"
                        header={<Cell>Room No.</Cell>}
                        cell={<TextCell data={filteredDataList} />}
                        width={200}
                        align={'center'}
                    />
                    <Column
                        columnKey="aromeoID"
                        header={<Cell>Aromeo ID</Cell>}
                        cell={<TextCell data={filteredDataList} />}
                        width={200}
                        align={'center'}
                    />
                    <Column
                        columnKey="schedule"
                        header={<Cell>Schedule Choice</Cell>}
                        cell={<ScheduleCell schedules={schedules}
                                            onSelectHandler={this.setScheduleValue.bind(this)}
                                            data={filteredDataList} isManageMode={isManageMode}/>}
                        width={250}
                        align={'center'}
                    />
                    <Column
                        columnKey="device"
                        header={<Cell>Device Status</Cell>}
                        cell={<DeviceStatusCell data={filteredDataList} isManageMode={isManageMode}/>}
                        width={200}
                        align={'center'}
                    />
                    <Column
                        columnKey="oil"
                        header={<Cell>Detailed Oil Status</Cell>}
                        cell={<OilStatusCell data={filteredDataList} />}
                        width={300}
                        align={'center'}
                    />
                </Table>
            </div>
        );
    }
}

// See react-dimensions for the best way to configure
// https://github.com/digidem/react-dimensions
module.exports = Dimensions({
    getHeight: function(element) {
        return window.innerHeight - 200;
    },
    getWidth: function(element) {
        var widthOffset = window.innerWidth < 680 ? 0 : 170;
        return window.innerWidth - widthOffset;
    }
})(DeviceControlTable);
