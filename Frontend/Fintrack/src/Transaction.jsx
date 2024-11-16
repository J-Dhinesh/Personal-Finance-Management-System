import React, { useContext, useState,useEffect } from 'react';
import './Transaction.css';
import { UserContext } from './UserContext';
import axios from 'axios';
const Transaction = () => {
  
  const [transactionDetails, setTransactionDetails] = useState({
    date: '',
    goal: '',
    accountNumber: '',
    transactionId: '',
    transactionType: '',
    amount: ''
  });

  const [isFormVisible, setFormVisible] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [successMessage,setSuccessMessage]=useState('');
  const [accountTotals, setAccountTotals] = useState({});
  const [error,setError]=useState('');
  const {username}=useContext(UserContext);
  const toggleOverlay = () => {
    setFormVisible(!isFormVisible);
  };

  const calculateTotalAmounts = (transactions) => {
    const totals = {};
    transactions.forEach((transaction) => {
      const account = transaction.accountNumber;
      const amount = parseFloat(transaction.amount);
      if (totals[account]) {
        totals[account] += amount;
      } else {
        totals[account] = amount;
      }
    });
    return totals;
  };


  const handleChange=(e) => {
    const {name,value}=e.target;
    setTransactionDetails({...transactionDetails,[name]:value});
  }

  useEffect(() => {
    const fetchTransactions = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/home/transaction?username=${username}`);
            if (response.status === 200) {
                setTransactions(response.data); 
                const totals = calculateTotalAmounts(response.data);
                setAccountTotals(totals);
            } else {
                setError('No transaction found.');
            }
        } catch (error) {
            setError('Failed to fetch transactions. Please try again later.');
        }
    };

    if (username) {
        fetchTransactions(); 
    }
}, [username]);


    const updateCardAmountsInBackend = async (totals) => {
        const updatePromises = Object.entries(totals).map(([accountNumber, totalAmount]) =>
          axios.put('http://localhost:9000/home/balance/update', null, {
            params: { accountNumber, amount: totalAmount },
          })
        );
        await Promise.all(updatePromises);
      
    };
  const handleSubmit =async(e) => {
    e.preventDefault();
    try{
          const response =await axios.post('http://localhost:9000/home/transaction/add',{...transactionDetails,username:username
          });
          if(response.status==200){
            setSuccessMessage('Transaction added successfully!');
            setError('');
            setTransactionDetails({
              date: '',
              goal: '',
              accountNumber: '',
              transactionId: '',
              transactionType: '',
              amount: ''
            })
            setFormVisible(false);
            const updatedResponse=await axios.get(`http://localhost:9000/home/transaction?username=${username}`);
            setTransactions(updatedResponse.data);
            const totals = calculateTotalAmounts(updatedResponse.data);
            setAccountTotals(totals);
            updateCardAmountsInBackend(totals);
      }}

      catch(error){
        setError('Failed to add transaction . Please try again');
        setSuccessMessage('');
      
    }
  }

  return (
    <React.Fragment>
      <div className="transaction-container">
        <h1>Transaction Table</h1>
        
        {isFormVisible && (
          <div className="overlay">
            <div className="overlay-content">
              <div>
                <h2>Add Transaction</h2>
                <button onClick={toggleOverlay}>X</button>
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor='transactionDate'>Date:</label>
                <input 
                  type="date" 
                  name="date" 
                  value={transactionDetails.date}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="transactionGoal">Goal:</label>
                <input 
                  type="text" 
                  name="goal" 
                  value={transactionDetails.goal} 
                  onChange={handleChange}
                  placeholder='Enter the Goal' 
                  required
                />
                <label htmlFor="transactionAccNumber">Account Number:</label>
                <input 
                  type="text" 
                  name="accountNumber" 
                  value={transactionDetails.accountNumber}
                  onChange={handleChange}
                  placeholder='Enter Account Number'
                  required
                />
                <label htmlFor="transactionId">Transaction ID</label>
                <input 
                  type="text" 
                  name="transactionId" 
                  value={transactionDetails.transactionId}
                  onChange={handleChange}
                  placeholder='Enter Transaction ID' 
                  required
                />
                <label htmlFor="transactionType">Transaction Type</label>
                <input 
                  type="text" 
                  name="transactionType" 
                  value={transactionDetails.transactionType}
                  onChange={handleChange}
                  placeholder='Enter Transaction Type'
                  required 
                />
                <label htmlFor="transactionAmount">Amount</label>
                <input 
                  type="number" 
                  name="amount" 
                  value={transactionDetails.amount}
                  onChange={handleChange}
                  placeholder='Enter Amount (in Rupees)' 
                  required
                />
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        )}

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Goal</th>
              <th>Account Number</th>
              <th>Transaction ID</th>
              <th>Type of Transaction</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.goal}</td>
                  <td>{transaction.accountNumber}</td>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.transactionType}</td>
                  <td className={`${transaction.amount<0?'money-spent':'money-received'} `}>{transaction.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                  <p>No transactions added</p>
              </tr>
            )}
          </tbody>
        </table>

        <button onClick={toggleOverlay} className='control-btn'>
          {isFormVisible ? 'Cancel' : 'Add Transaction'}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Transaction;