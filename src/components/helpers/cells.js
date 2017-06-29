"use strict";

const ExampleImage = require('./ExampleImage');
const { Cell } = require('fixed-data-table-2');
const React = require('react');
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import OilStatus from '../oilStatus'

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
                {data[rowIndex][columnKey].toString()}
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
        const {data, rowIndex, columnKey, isManageMode, ...props} = this.props;
        const isOn = data[rowIndex][columnKey];
        return (
            isManageMode?
                <Cell {...props}>
                    <Toggle
                        label={isOn? "On": "Off"}
                        defaultToggled={isOn}
                        style={{width: '33%', paddingLeft: '33%'}}
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
                <OilStatus runningOut={rowData.running_out} ranOut={rowData.ran_out} />
            </Cell>
        );
    }
};
module.exports.OilStatusCell = OilStatusCell;

class ScheduleCell extends React.PureComponent {
    render() {
        const {data, rowIndex, columnKey, isManageMode, ...props} = this.props;
        const scheduleChoice = data[rowIndex][columnKey];
        return (
            isManageMode?
                <Cell {...props}>
                    <DropDownMenu value={1}>
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </DropDownMenu>
                </Cell>
                :
                <Cell {...props}>
                    {scheduleChoice}
                </Cell>
        );
    }
};
module.exports.ScheduleCell = ScheduleCell;
