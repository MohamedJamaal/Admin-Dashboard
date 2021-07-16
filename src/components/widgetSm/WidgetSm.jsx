import React from 'react'
import "./WidgetSm.css"
import newUser from "./photos/img-2.jpg"
import { Visibility } from '@material-ui/icons'


export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={newUser} alt="profilePhoto" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={newUser} alt="profilePhoto" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={newUser} alt="profilePhoto" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={newUser} alt="profilePhoto" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={newUser} alt="profilePhoto" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
