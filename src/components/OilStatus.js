import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {Row, Col, Glyphicon, Button} from 'react-bootstrap';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

// import Circle from 'material-ui/svg-icons/image/brightness-1';
import WaterDrop from 'material-ui/svg-icons/action/opacity';

export default class OilStatus extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {runningOut, ranOut} = this.props;
        return (
            <div>
                <WaterDrop style={{color: 'red'}}/> <span style={styles.fontStyle}>{ranOut}</span>
                <WaterDrop style={{color: 'orange'}}/> <font style={styles.fontStyle}>{runningOut}</font>
            </div>
        );
    }
}

const styles = {
    fontStyle: {
        paddingBottom: 10
        // backgroundColor: 'red',
    }
}
