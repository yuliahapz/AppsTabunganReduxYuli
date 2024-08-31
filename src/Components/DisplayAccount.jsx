import { useSelector } from 'react-redux';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

const DisplayAccount = () => {
  const account = useSelector((state) => state.account);

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount).replace(/,/g, '.').replace('IDR', 'Rp');
};

  
  return (
    <div>
      <h1>Tabungan</h1>
      <p>Saldo: {formatCurrency(account.tabungan)}</p>
      <Deposit />
      <Withdraw />
    </div>
  );
};
export default DisplayAccount;