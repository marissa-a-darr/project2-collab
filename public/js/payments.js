const newPaymentForm = async (event) => {
    event.preventDefault();
  
    const paymentName = document.querySelector('#paymentName').value.trim();
    const dueDate = document.querySelector('#dueDate').value.trim();
    const amountLabel = document.querySelector('#amountLabel').value.trim();
    const billType = document.querySelector('#billType').value.trim();
  
    if (paymentName && dueDate && amountLabel && billType) {
      const response = await fetch(`/payments/create_payment`, {
        method: 'POST',
        body: JSON.stringify({ paymentName, dueDate, amountLabel, billType }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/payments');
        alert('Payment added successfully!')
      } else {
        alert('Failed to create payment');
      }
    }
  };

  document
  .querySelector('#paymentBtn')
  .addEventListener('submit', newPaymentForm);
  