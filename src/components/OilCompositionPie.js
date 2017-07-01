"use strict";
const React = require('react');

import { PieChart, Pie, Cell, Label, LabelList } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';

const renderLabelContent = (props) => {
    const { name, value, percent, x, y, midAngle } = props;

    console.warn(name + " " + midAngle)
    var yy = (midAngle > 0 && midAngle <180)? y-10: y+15;

    return (
        <g transform={`translate(${x}, ${yy})`} textAnchor={ ( 0 <= midAngle && midAngle < 180 ) ? 'start' : 'end'}>
            <text x={0} y={0}>{`${name}`}</text>
        </g>
    );
};

class OilCompositionChart extends React.PureComponent {
    render() {
        return (
            <PieChart width={250} height={205}>
                <Pie data={this.props.data} cx="50%" cy="50%" outerRadius={50} innerRadius={20}
                    dataKey="value" label={renderLabelContent}>
                    {/*<Label value="test" position="outside" />*/}
                    <LabelList position="inside" label />
                </Pie>
            </PieChart>
        );
    }
};
module.exports.OilCompositionChart = OilCompositionChart;