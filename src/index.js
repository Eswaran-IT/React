import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux'; // Import Provider from react-redux
// import { CentralData } from './features'; // Import CentralData component and its associated Redux store configuration


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={CentralData.store}> {/* Wrap your App component with Provider and pass the store from CentralData */}
      <App /> 
    {/* </Provider> */}
  </React.StrictMode>
);
reportWebVitals();
