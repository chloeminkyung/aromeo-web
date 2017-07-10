"use strict";
const React = require('react');

import {Row, Col, Panel} from 'react-bootstrap';
import CircleFull from 'material-ui/svg-icons/image/lens';
import CircleEmpty from 'material-ui/svg-icons/image/panorama-fish-eye';
import {Config} from '../config'

class Tally extends React.PureComponent {
    render() {

        var oilDropArray = [0,0,0,0,0];
        oilDropArray.fill(1, 0, this.props.dropCount);

        return (
            <span>
                {
                    oilDropArray.map(function(oilDrop, index){
                        if(oilDrop==0)
                            return <CircleEmpty style={styles.icon} key={index} />;
                        else
                            return <CircleFull style={styles.icon} key={index} />;
                    })
                }
            </span>
        );
    }
};

class OilCompositionTally extends React.PureComponent {
    render() {
        const {data} = this.props;
        return (
            <div>
                {
                    Object.keys(data).map(function(key){
                        return (
                            <Row key={key}>
                                <Col md={5}>
                                    {key}
                                </Col>
                                <Col md={7}>
                                    <Tally dropCount={data[key]} />
                                </Col>
                            </Row>
                        )
                    })
                }
            </div>
        );
    }
};
module.exports.OilCompositionTally = OilCompositionTally;

const styles = {
    icon: {
        height: 15,
        width: 15,
        color: Config.lightPurple
    }
}
