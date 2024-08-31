import { useDispatch, useSelector } from 'react-redux';
import { withdraw } from '../redux/slices/accountSlice';
import { useState, useEffect } from 'react';
import './styles.css'; 

const Withdraw = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const tabungan = useSelector((state) => state.account.tabungan); 
  const [errorMessage, setErrorMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount).replace(/,/g, '.').replace('IDR', 'Rp');
  };

  const handleWithdraw = (event) => {
    event.preventDefault();

    
    const amount = parseInt(inputValue.replace(/[^\d]/g, ''), 10);

    if (!isNaN(amount)) {
      if (amount <= tabungan) { 
        dispatch(withdraw(amount));
        setErrorMessage('');
      } else {
        setErrorMessage('Saldo Tidak Cukup untuk Melakukan Penarikan.');
      }
    } else {
      setErrorMessage('Masukkan jumlah yang valid.');
    }

    setInputValue('');
  };

  const handleInputChange = (event) => {
    const { value } = event.target;

    
    const cleanedValue = value.replace(/[^\d]/g, '');
    const formattedValue = cleanedValue ? formatCurrency(cleanedValue) : '';

    setInputValue(formattedValue);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h4>Withdraw</h4>
      <form onSubmit={handleWithdraw}>
        <input    
          type="text"
          name="withdraw"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Rp. 0"
        />
        <button type="submit">Withdraw</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Withdraw;
