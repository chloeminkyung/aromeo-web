"use strict";
const React = require('react');

import { PieChart, Pie } from 'recharts';
const data01 = [
    { name: 'Group A', value: 400, v: 89 },
    { name: 'Group B', value: 300, v: 100 },
    { name: 'Group C', value: 200, v: 200 },
    { name: 'Group D', value: 200, v: 20 },
    { name: 'Group E', value: 278, v: 40 },
    { name: 'Group F', value: 189, v: 60 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];

class OilCompositionChart extends React.PureComponent {
    render() {
        return (
            <PieChart width={250} height={250}>
                <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data02} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        );
    }
};
module.exports.OilCompositionChart = OilCompositionChart;