import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css"

const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div className="sectionReport">

            <div className="ReportTitle-wrap">
                <h4>Total (บาท)</h4>
                <h3>฿{formatNumber((income - expense).toFixed(2))} </h3>
            </div>

            <div className="ReportDetail-wrap">
                <div className="income-wrap">
                    <p>รายรับ </p>
                    <p> ฿{formatNumber(income)}</p>
                </div>
                <div className="line"></div>
                <div className="expense-wrap">
                    <p>รายจ่าย</p>
                    <p> ฿{formatNumber(expense)}</p>
                </div>
            </div>


        </div>
    );
}
export default ReportComponent
