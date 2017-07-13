"use strict";
const React = require('react');
import {Row, Col} from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

import Moon from 'material-ui/svg-icons/image/brightness-3';
import Sun from 'material-ui/svg-icons/image/wb-sunny';
import Cloud from 'material-ui/svg-icons/image/wb-cloudy';

import {OilCompositionTally} from './OilCompositionTally'
import {idToOilNameMapper} from '../constants/mapperAndConstants'

class SchedulePaper extends React.PureComponent {
    timestampToClockTimeFormat(timestamp){
        var timeDate = new Date(timestamp);
        return timeDate.getHours() + ":" + timeDate.getMinutes();
    }

    render() {
        const self = this;
        const {schedule} = this.props;
        return (
            <Card style={styles.cardContainer}>
                <CardHeader
                    title={schedule.schedule_name}
                    subtitle={schedule.description}
                />
                <CardText style={styles.cardText}>
                    {
                        schedule.timeslots.map(function(timeslot){
                            return (
                                <Row>
                                    <Col md={5}><b>{self.timestampToClockTimeFormat(timeslot.startTime)}</b>: </Col>
                                    <Col md={7}><p> {timeslot.blend}</p></Col>
                                </Row>
                            )
                        })
                    }
                </CardText>
                <CardActions>
                    <FlatButton label="Edit" />
                    <FlatButton label="Delete" />
                </CardActions>
            </Card>
        );
    }
};
module.exports.SchedulePaper = SchedulePaper;


class BlendPaper extends React.PureComponent {
    // TODO produce a data array that has all 5/7 oils - so that the size of the paper is consistent.
    blendRatioChartTallyFormatter(oilData) {
        // var formattedData = [];
        //
        // oilData.map(function(oil, index){
        //     var obj = {};
        //     obj.name = oil.oilName;
        //     obj.dropCount = oil.ratio;
        //     formattedData.push(obj)
        // })

        var formattedData = {
            Lavender: 0,
            Peppermint: 0,
            Lemon: 0,
            YlangYlang: 0,
            Bergamot: 0,
        }

        oilData.map(function(oil){
            formattedData[idToOilNameMapper(oil.oil_product_id)] = oil.ratio;
        })

        return formattedData;
    }

    render() {
        const {blend,toggleRemoveBlend} = this.props;
        var oilArray = this.blendRatioChartTallyFormatter(blend.oils)

        return (
            <Card style={styles.cardContainer}>
                <CardHeader
                    title={blend.blend_name}
                    subtitle={blend.description}
                />
                <CardText style={styles.cardText}>
                    <OilCompositionTally data={oilArray} />
                </CardText>
                <CardActions>
                    <FlatButton label="Edit" />
                    <FlatButton label="Delete" onTouchTap={()=>toggleRemoveBlend(true, blend.blend_id)} />
                </CardActions>
            </Card>
        );
    }
};
module.exports.BlendPaper = BlendPaper;

class CreateButtonPaper extends  React.PureComponent {
    render() {
        const {title, onClickHandler} = this.props;
        return (
            <Col md={3}>
                <div style={{height: 270, paddingTop:'33%', paddingLeft: '25%'}}>
                    <IconButton onTouchTap={()=>onClickHandler(true)}
                        style={{height: 40, width: 40, marginLeft: 40}} iconStyle={{height: 40, width: 40}}>
                        <AddCircle />
                    </IconButton>
                    <p>{title}</p>
                </div>
            </Col>
        )
    }
}
module.exports.CreateButtonPaper = CreateButtonPaper;

const styles = {
    paper: {
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
    cardContainer: {
        marginBottom: 10
    }
};
