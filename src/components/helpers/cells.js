"use strict";

const ExampleImage = require('./ExampleImage');
const { Cell } = require('fixed-data-table-2');
const React = require('react');
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import OilStatus from '../OilStatus'

class CollapseCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, collapsedRows, callback, ...props} = this.props;
        return (
            <Cell {...props}>
                <a onClick={() => callback(rowIndex)}>
                    {collapsedRows.has(rowIndex) ? '\u25BC' : '\u25BA'}
                </a>
            </Cell>
        );
    }
};
module.exports.CollapseCell = CollapseCell;

class ColoredTextCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        return (
            <Cell {...props}>
                {this.colorizeText(data.getObjectAt(rowIndex)[columnKey], rowIndex)}
            </Cell>
        );
    }

    colorizeText(str, index) {
        let val, n = 0;
        return str.split('').map((letter) => {
            val = index * 70 + n++;
            let color = 'hsl(' + val + ', 100%, 50%)';
            return <span style={{color}} key={val}>{letter}</span>;
        });
    }
};
module.exports.ColoredTextCell = ColoredTextCell;

class DateCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        return (
            <Cell {...props}>
                {data.getObjectAt(rowIndex)[columnKey].toLocaleString()}
            </Cell>
        );
    }
};
module.exports.DateCell = DateCell;

class ImageCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        return (
            <ExampleImage
                src={data.getObjectAt(rowIndex)[columnKey]}
            />
        );
    }
};
module.exports.ImageCell = ImageCell;

class LinkCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        return (
            <Cell {...props}>
                <a href="#">{data.getObjectAt(rowIndex)[columnKey]}</a>
            </Cell>
        );
    }
};
module.exports.LinkCell = LinkCell;


class TextCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        // console.warn(rowIndex + " " + columnKey + " " + data[rowIndex][columnKey]);
        return (
            <Cell {...props}>
                {data[rowIndex][columnKey]}
            </Cell>
        );
    }
};
module.exports.TextCell = TextCell;

class IndexCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        // console.warn(rowIndex + " " + columnKey + " " + data[rowIndex][columnKey]);
        return (
            <Cell {...props}>
                {rowIndex.toString()}
            </Cell>
        );
    }
};
module.exports.IndexCell = IndexCell;

class DeviceStatusCell extends React.PureComponent {
    render() {
        const {data, onSelectHandler, rowIndex, columnKey, isManageMode, ...props} = this.props;
        const isOn = data[rowIndex][columnKey];
        return (
            isManageMode?
                <Cell {...props}>
                    <Toggle
                        label={isOn? "On": "Off"}
                        defaultToggled={isOn}
                        style={{width: '33%', paddingLeft: '33%'}}
                        onToggle={(event, isInputChecked)=>onSelectHandler(rowIndex, columnKey, isInputChecked)}
                    />
                </Cell>
                :
                <Cell {...props}>
                    {isOn? "On": "Off"}
                </Cell>
        );
    }
};
module.exports.DeviceStatusCell = DeviceStatusCell;

class OilStatusCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        // console.warn(rowIndex + " " + columnKey + " " + data[rowIndex][columnKey]);
        const rowData = data[rowIndex][columnKey];
        return (
            <Cell {...props}>
                {/*<OilStatus runningOut={rowData.running_out} ranOut={rowData.ran_out} />*/}
                <OilStatus runningOut={2} ranOut={1} />
            </Cell>
        );
    }
};
module.exports.OilStatusCell = OilStatusCell;

class DiffusionStrengthCell extends React.PureComponent {
    render() {
        const powerMapper = {
            1: 'Mild',
            2: 'Normal',
            3: 'Strong'
        }
        const {data, onSelectHandler, rowIndex, columnKey, isManageMode, ...props} = this.props;
        const rowData = data[rowIndex][columnKey];
        return (
            isManageMode?
                <Cell {...props}>
                    <DropDownMenu onChange={(event, index, value)=>onSelectHandler(rowIndex, columnKey, value)}
                        style={styles.dropdown} value={rowData} primary={true}>
                        <MenuItem key={1} value={1} primaryText={powerMapper[1]} />
                        <MenuItem key={2} value={2} primaryText={powerMapper[2]} />
                        <MenuItem key={3} value={3} primaryText={powerMapper[3]} />
                    </DropDownMenu>
                </Cell>
                :
                <Cell {...props}>
                    {powerMapper[rowData]}
                </Cell>
        );
    }
};
module.exports.DiffusionStrengthCell = DiffusionStrengthCell;

class ScheduleCell extends React.PureComponent {
    render() {
        const {schedules, data, onSelectHandler, rowIndex, columnKey, isManageMode, ...props} = this.props;
        let schedule_id = data[rowIndex][columnKey];
        let schedule_name = data[rowIndex]['schedule_name'];

        let scheduleNameList = {};

        //onSelectHandler(rowIndex, value, schedule_name)
        return (
            isManageMode?
                <Cell {...props}>
                    <DropDownMenu style={styles.dropdown} value={schedule_id}
                                  onChange={(event, index, value)=>onSelectHandler(rowIndex, value, scheduleNameList[value])} >
                        <MenuItem key={0} value={-1} primaryText="Select Schedule" />
                        {
                            schedules.map(function(schedule, index){
                                scheduleNameList[schedule.schedule_id] = schedule.schedule_name;
                                return (
                                    <MenuItem key={schedule.schedule_name} value={schedule.schedule_id} primaryText={schedule.schedule_name}/>
                                )
                            })
                        }
                    </DropDownMenu>
                </Cell>
                :
                <Cell {...props}>
                    {schedule_id==-1? "Not Selected" : schedule_name}
                </Cell>
        );
    }
};
module.exports.ScheduleCell = ScheduleCell;

const styles = {
    dropdown: {
        marginTop: -15
    }
}