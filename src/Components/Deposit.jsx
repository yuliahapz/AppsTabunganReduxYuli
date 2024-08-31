import { useDispatch } from 'react-redux';
import { deposit } from '../redux/slices/accountSlice';
import { useState } from 'react';

const Deposit = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');


  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    })
      .format(amount)
      .replace(/,/g, '.')
      .replace('IDR', 'Rp');
  };

  const handleDeposit = (event) => {
    event.preventDefault();

    const amount = parseInt(inputValue.replace(/[^\d]/g, ''), 10);

    if (!isNaN(amount)) {
      dispatch(deposit(amount));
    }

    setInputValue('');
  };

  const handleInputChange = (event) => {
    const { value } = event.target;

 
    const cleanedValue = value.replace(/[^\d]/g, '');
    const formattedValue = cleanedValue ? formatCurrency(cleanedValue) : '';

    setInputValue(formattedValue);
  };

  return (
    <div>
      <h4>Deposit</h4>
      <form onSubmit={handleDeposit}>
        <input
          type='text'
          name='deposit'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Rp. 0'
        />
        <button type='submit'>Deposit</button>
      </form>
    </div>
  );
};

export default Deposit;
