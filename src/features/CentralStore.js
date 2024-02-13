// // Redux actions
// export const withdraw = (amount) => ({
//     type: 'WITHDRAW',
//     payload: amount
//   });
  
//   export const deposit = (amount) => ({
//     type: 'DEPOSIT',
//     payload: amount
//   });
  
//   // Redux reducers
//   const initialState = {
//     balance: 0
//   };
  
//   const balanceReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'WITHDRAW':
//         return { ...state, balance: state.balance - action.payload };
//       case 'DEPOSIT':
//         return { ...state, balance: state.balance + action.payload };
//       default:
//         return state;
//     }
//   };
  
//   // Redux store setup
//   import { createStore } from 'redux';
//   const store = createStore(balanceReducer);
  
//   // Component
//   import React from 'react';
//   import { connect } from 'react-redux';
//   import { withdraw, deposit } from './actions';
  
//   const BalanceComponent = ({ balance, withdraw, deposit }) => (
//     <div>
//       <h2>Balance: {balance}</h2>
//       <button onClick={() => withdraw(10)}>Withdraw $10</button>
//       <button onClick={() => deposit(20)}>Deposit $20</button>
//     </div>
//   );
  
//   const mapStateToProps = (state) => ({
//     balance: state.balance
//   });
  
//   export default connect(mapStateToProps, { withdraw, deposit })(BalanceComponent);
  