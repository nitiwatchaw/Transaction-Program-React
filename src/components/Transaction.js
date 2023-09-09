
import './Transaction.css'
import Item from './Item';



const Transaction = (props) => {

    const { initDataProp } = props
    const datalist = initDataProp.map((e, index) => {
        return <Item key={index} {...e} /> // =>  title={e.title} amount={e.amount}
    });

 
    return (
            <ul className="item-list">
                {datalist}
            </ul>
    )
}
export default Transaction