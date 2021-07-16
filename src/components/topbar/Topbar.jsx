import React from 'react'
import "./Topbar.css"
import profilePhoto from "./photos/img-2.jpg"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={profilePhoto} alt="profilePhoto" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
