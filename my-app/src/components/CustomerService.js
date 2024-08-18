import React from 'react';

const CustomerService = () => {
  const handleCustomerService = () => {
    // Here, an API call would be made to the backend to use pywhatkit for sending a message.
    alert('Contacting Customer Service via WhatsApp');
  };

  return (
    <div>
      <h2>Customer Service</h2>
      <button onClick={handleCustomerService}>Contact via WhatsApp</button>
    </div>
  );
};

export default CustomerService;
