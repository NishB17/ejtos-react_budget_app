import React, {useContext,useState} from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch,budget,expenses,currency} = useContext(AppContext);
    const [action, setAction] = useState('');
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const setBudget = (budget1) => {
    if(budget1 > 20000) {
        alert("The budget cannot Exceed 20000");
        setBudget(budget)
        return;
    }
    if(budget1 < totalExpenses) {
        alert("The budget cannot be lower than spending ");
        setBudget(budget)
        return;
    }

    if(action === "SetBudget") {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget1,
        });
    } 
};

    return(
<div className='alert alert-secondary'>
    <label>Budget: {currency}</label>
    <input
        required='required'
        type='number'
        id='budget'
        value={budget}
        step = '10'
        style={{ marginLeft: '5px' , size: 10,width: '155px'}}
        onChange={(event) => {
            setBudget(event.target.value)
            setAction("SetBudget")
        }}
        >
        </input>

</div>
    );
};

export default Budget;