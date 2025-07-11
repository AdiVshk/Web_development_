function toggleUI(isLoggedIn) {
  document.querySelectorAll('.Auth').forEach((element) => {
    element.style.display = isLoggedIn ? 'none' : 'block';
  });

  document.getElementById('user-info').style.display = isLoggedIn
    ? 'block'
    : 'none';
}

async function SignUp() {
  await axios.post('http://localhost:4000/SignUp', {
    username: document.getElementById('user-signup').value,
    password: document.getElementById('user-signup-password').value,
    fname: document.getElementById('user-signup-fname').value,
    lname: document.getElementById('user-signup-lname').value,
  });
  document.getElementById('user-signup').value = '';
  document.getElementById('user-signup-password').value = '';
  document.getElementById('user-signup-fname').value = '';
  document.getElementById('user-signup-lname').value = '';
}

async function SignIn() {
  let response = await axios.post('http://localhost:4000/SignIn', {
    username: document.getElementById('user-signin').value,
    password: document.getElementById('user-signin-password').value,
  });

  document.getElementById('user-signin').value = '';
  document.getElementById('user-signin-password').value = '';
  // token stored in local storage
  localStorage.setItem('token', response.data.token);
  getInfo();
  toggleUI(true);
}

async function getInfo() {
  let response = await axios.get('http://localhost:4000/Me', {
    headers: {
      token: localStorage.getItem('token'),
    },
  });

  document.getElementById('User-data').innerHTML =
    'Username :' +
    response.data.username +
    'FirstName :' +
    response.data.fname +
    'LastName :' +
    response.data.lname;
}

function Logout() {
  localStorage.removeItem('token');
  document.getElementById('user-signup').value = '';
  document.getElementById('user-signup-password').value = '';
  document.getElementById('user-signup-fname').value = '';
  document.getElementById('user-signup-lname').value = '';
  document.getElementById('user-signin').value = '';
  document.getElementById('user-signin-password').value = '';

  document.getElementById('User-data').innerHTML = '';
  toggleUI(false);
}
