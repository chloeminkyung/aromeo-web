"use strict";
const React = require('react');

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import {Config} from '../config'

class OilCompositionBar extends React.PureComponent {

    render () {
        const {data} = this.props;
        console.warn(data)
        console.warn(Object.keys(data[0]))

        return (
            <BarChart width={200} height={200} data={data}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Legend />
                {
                    Object.keys(data[0]).map(function(key, index){
                        if(key.localeCompare('name')!=0){
                            return (
                                <Bar dataKey={key} fill={Config.oilColor[index]} />
                            )
                        }
                    })
                }
            </BarChart>
        );
    }
};
module.exports.OilCompositionBar = OilCompositionBar;