function validateLogin() {
    // Get the form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Regular expressions for validation
    var usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    // Validate username
    if (!usernameRegex.test(username)) {
      alert('Username should contain at least one uppercase letter, one lowercase letter, one special character, one number, and have a minimum length of 8 characters.');
      return false;
    }
  
    // Validate password
    if (!passwordRegex.test(password)) {
      alert('Password should contain at least one uppercase letter, one special character, and have a minimum length of 8 characters.');
      return false;
    }
  
    // All fields are valid
    return true;
  }
  