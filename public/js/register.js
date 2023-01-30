//const { json } = require("body-parser");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector(".firstName-register").value.trim();
  const lastName = document.querySelector(".lastName-register").value.trim();
  const email = document.querySelector(".email-register").value.trim();
  const password = document.querySelector(".password-register").value.trim();

  // Collect values from the register form
  if (firstName && lastName && email && password) {
    try {
      const response = await fetch(`/users/register`, {
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
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
      } else {
        alert("Failed to create user");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

let btn = document.querySelector(".submit-btn");
btn.addEventListener("click", signupFormHandler);
