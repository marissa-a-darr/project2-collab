
// NEED TO MAKE JS FOR NEW PAYMENT



// const newPaymentFormHandler = async (event) => {
//   event.preventDefault();

//   const firstname = document.querySelector('.firstName-register').value.trim();
//   const lastname = document.querySelector('.lastName-register').value.trim();
//   const email = document.querySelector('.email-register').value.trim();
//   const password = document.querySelector('.password-register').value.trim();
//   if (firstname && lastname && email && password) {
//     const response = await fetch(`/users/register`, {
//       method: 'POST',
//       body: JSON.stringify({ firstname, lastname, email, password }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       console.log('success')
//       document.location.replace('/payments');
//     } else {
//       alert('Failed to create user');
//     }
//   }
// };


// let btn = document.querySelector('.submit-btn');
// btn.addEventListener('click', signupFormHandler)
