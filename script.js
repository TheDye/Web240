// CHECK LOGIN FUNCTION
function checkLogin(event) {
  event.preventDefault();

  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  // 
  const users = [
    { username: 'test', password: 'test' },
  ];

  // CHECK IF LOGIN IS VALID
  const isValidLogin = users.some(user => user.username === enteredUsername && user.password === enteredPassword);

  if (isValidLogin) {
    alert('Login successful! Redirecting to another page...');
    window.location.href = "Homepage/Home.html";
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

// ADD EVENT LISTENER
document.getElementById('loginForm').addEventListener('submit', checkLogin);