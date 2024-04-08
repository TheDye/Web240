// LOCAL DATAS ASVAVSAVSs
const users = [
  { username: 'admin', password: 'buynaa0401' },
  { username: 'irmuun', password: 'oros320228b' },
  { username: 'temka', password: 'oros320228b' },
  { username: 'monhtulga', password: 'oros320228b' },
  { username: 'tselmeg', password: 'oros320228b' },
  { username: '8b', password: '8b' },
  { username: 'test', password: 'test' },
  // Add more users as needed
];

function checkLogin() {
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  // CORRECT OR NO NIGGA
  const isValidLogin = users.some(user => user.username === enteredUsername && user.password === enteredPassword);

  if (isValidLogin) {
    alert('Login successful! Redirecting to another page...');
    // MOVE TO DIFFERENT PLANET
    window.location.href = "Homepage/Home.html";
  } else {
    alert('Invalid username or password. Please try again.');
  }
}