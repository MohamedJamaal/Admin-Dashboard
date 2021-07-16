import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../WidgetLg/WidgetLg'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Acitve User" />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
