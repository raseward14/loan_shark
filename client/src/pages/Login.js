import Form from "../components/Form/index";
import Login from "../components/Login/index";

function init() {
  return <Login />;
}

export default init;

// // Login Form
// const loginFormHandler = async (event) => {
//   event.preventDefault();
//   // Collect values from the login form
//   const userName = document.querySelector('#name-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();
//   if (userName && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ user_name: userName, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };
// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// // Sign Up Form
// const signupFormHandler = async (event) => {
//   event.preventDefault();
//   const userName = document.querySelector('#name-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();
//   if (userName && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ user_name: userName, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };
// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);
