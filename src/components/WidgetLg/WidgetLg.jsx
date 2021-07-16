import React from 'react'
import "./WidgetLg.css"
import widgetUser from "./photos/img-3.jpg"

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{ type }</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={widgetUser} alt="customerUser" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carlo</span>
                    </td>
                    <td className="widgetLgDate">5 Jul 2021</td>
                    <td className="widgetLgAmount">$ 112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={widgetUser} alt="customerUser" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carlo</span>
                    </td>
                    <td className="widgetLgDate">5 Jul 2021</td>
                    <td className="widgetLgAmount">$ 112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={widgetUser} alt="customerUser" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carlo</span>
                    </td>
                    <td className="widgetLgDate">5 Jul 2021</td>
                    <td className="widgetLgAmount">$ 112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={widgetUser} alt="customerUser" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carlo</span>
                    </td>
                    <td className="widgetLgDate">5 Jul 2021</td>
                    <td className="widgetLgAmount">$ 112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
