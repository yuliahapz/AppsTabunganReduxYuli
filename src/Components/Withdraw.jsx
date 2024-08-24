import { useDispatch, useSelector } from 'react-redux';
import { withdraw } from '../redux/slices/accountSlice';
import { useState } from 'react';

const Withdraw = () => {
const dispatch = useDispatch();
const [inputValue, setInputValue] = useState('');
const balance = useSelector ((state)=> state.account.balance);
const [errorMessage, setErrorMessage] = useState ('');

const handleWithdraw = (event) => {
    event.preventDefault();

    
    const amount = parseInt(inputValue.replace(/\./g, ''), 10);

    if (!isNaN(amount)) {
        if (amount <= balance) {
    dispatch(withdraw(amount));
    setErrorMessage('');
    }
    else {
        setErrorMessage ("Saldo Tidak Cukup untuk Melakukan Penarikan.");
    }
}

    
    setInputValue('');
};

const handleInputChange = (event) => {
    const { value } = event.target;

    
    const formattedValue = value.replace(/[^0-9.]/g, '');

    setInputValue(formattedValue);
};

return (
    <div>
    <h4>Withdraw</h4>
    <form onSubmit={handleWithdraw}>
        <input 
        type='text' 
        name='withdraw' 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder='Rp. 0'
        />
        <button type='submit'>Withdraw</button>
    </form>
    {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}
    </div>
);
};

export default Withdraw;
