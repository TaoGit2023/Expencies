import { useState, useContext } from "react"
import {GlobalContext} from '../context/GlobalState'

export const AddTraction = ()=>{
    const {addTransaction} = useContext(GlobalContext)
    const [text, setText] = useState('');
    const [amount,setAmount] = useState(0);
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log('test')
        const newTransaction={
            id: Math.floor(Math.random()*10000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
    return(
        <div>
            <h3> Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div>
                    <input type="text"
                    value={text} 
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Enter text..."/>
                </div>
                <div>
                    <input type="number"
                    value=""
                    onChange={(e)=>setAmount(e.target.value)}
                    placeholder=" Enter amount..."      
                    />
                </div>
            </form>
            <button className="btn"> Add Transaction</button>
        </div>
    )
}