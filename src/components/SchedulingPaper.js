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


class SchedulePaper extends React.PureComponent {
    render() {
        const {schedule} = this.props;
        return (
            <Card style={styles.cardContainer}>
                <CardHeader
                    title={schedule.title}
                    subtitle={schedule.description}
                />
                <CardText style={styles.cardText}>
                    <p>{<Sun />} <b>AM</b>: {schedule.timeline.AM}</p>
                    <p>{<Cloud />} <b>PM</b>: {schedule.timeline.PM}</p>
                    <p>{<Moon />} <b>Night</b>: {schedule.timeline.Night}</p>
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
    render() {
        const {blend} = this.props;
        return (
            <Card style={styles.cardContainer}>
                <CardHeader
                    title={blend.title}
                    subtitle={blend.description}
                />
                <CardText style={styles.cardText}>
                    {
                        blend.oils.map(function(oil){
                            return <p>{oil.oilName + " " + oil.ratio}</p>
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
module.exports.BlendPaper = BlendPaper;

class CreateButtonPaper extends  React.PureComponent {
    render() {
        const {title, onClickHandler} = this.props;
        return (
            <Col md={3}>
                <div style={{height: 270, paddingTop:'33%', paddingLeft: '25%'}}>
                    <IconButton style={{height: 40, width: 40, marginLeft: 40}} iconStyle={{height: 40, width: 40}}>
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