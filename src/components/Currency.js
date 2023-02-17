import React, {useContext,useState} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const [CurLabel, setLabel] = useState('Currency(£ Pound)');
    var CurSymbol = '£';
    var CurValue='cur';
    
 const setCurrency = (curr)=>{
        setLabel ("Currency("+curr+")");
        CurSymbol = curr[0];
        CurValue='cur';

        dispatch({
            type: 'CHG_CURRENCY',
            payload: CurSymbol,
        });
    };

    return(
<div >  
        <select className='alert alert-success' 
        id="inputGroupSelect04" 
        value = {CurValue}
        style = {{width: '350px'}}
        onChange={(event) => setCurrency(event.target.value)}>
                <option value ='cur' selected hidden name = 'cur'>{CurLabel}</option>
                <option value="$ Dollar" name="Dollar">$ Dollar</option>
                <option value="£ Pound" name="Pound">£ Pound</option>
                <option value="€ Euro" name="Euro">€ Euro</option>
                <option value="₹ Rupee" name="Rupee">₹ Rupee</option>
        </select>

</div>
    );
};

export default Currency;