
import './Formcomponent.css'
import { useState, useEffect } from 'react'
const FormComponent = (props) => {


    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [formVaild, setFormValid] = useState(false)

    const inputTitle = (e) => {
        setTitle(e.target.value)
    }

    const inputAmount = (e) => {
        setAmount(e.target.value)
    }

    const saveItem = (e) => {
        e.preventDefault()
        const itemData = {
            title: title,       //titleแรกคือ ตัวแปรใหม่ที่จะบ่งบอกค่า => title ตัวที่2
            amount: Number(amount)  //Number() => การให้ค่าแสดงเป็น type number
        }

        props.onAddItem(itemData)

        setTitle("")
        setAmount("")
    }


    // เปลี่ยนแปลงค่า state , check state 
    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== ""
        setFormValid(checkData)
    }, [title, amount])

    return (
        <form action="" onSubmit={saveItem}>
            <div className="form-control">
                <div className="wraper">
                    <label className='nameList'>Name list    </label>
                    <input type="text" placeholder="fill the name of transaction" onChange={inputTitle} value={title} maxLength="18" />
                </div>
                <div className="wraper">
                    <label className='amount'>Amount money  </label>
                    <input type="number" placeholder="0" onChange={inputAmount} value={amount} />
                </div>
            </div>

            <button type='submit' disabled={!formVaild}>Add transaction</button>

        </form>
    )
}
export default FormComponent