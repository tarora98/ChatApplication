import React from 'react';
import closeIcon from '../Icons/closeIcon.png';
import onlineIcon from '../Icons/onlineIcon.png';
import './InfoBar.css';
const InfoBar = ({name}) => (

    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image" />
            <h3>{name}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close Image" /></a>
        </div>
    </div>
)
export default InfoBar;