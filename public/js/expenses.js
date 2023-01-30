const newFormHandler = async (event) => {
    event.preventDefault();
  
    const payment_name = document.querySelector('#payment_name').value.trim();
    // const bill_type = document.querySelector('#bill_type').value.trim();
    const amount = document.querySelector('#amount').value.trim();
    const payment_date = document.querySelector('#payment_date').value.trim();
    // if (payment_name && bill_type && amount && payment_date) {
    if (payment_name && amount && payment_date) {
      const response = await fetch(`/api/payments`, {
        method: 'POST',
        // body: JSON.stringify({ payment_name, bill_type, amount, payment_date }),
        body: JSON.stringify({ payment_name, amount, payment_date }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/payments');
      } else {
        alert('Failed to create expense');
      }
    }
  };
    
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/payments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/payments');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  

  document
    .querySelector('.card')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.card')
    .addEventListener('click', delButtonHandler);
  

