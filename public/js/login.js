const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch(`/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log("success");
      document.location.replace("/payments");
      alert("Login Successful")
    } else {
      alert("Please check credentials");
    }
}
};

  
  
let btn = document.querySelector('.submit-btn');
btn.addEventListener('click', loginFormHandler)
  
  
