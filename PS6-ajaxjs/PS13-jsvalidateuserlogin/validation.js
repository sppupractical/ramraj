function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var valid = true;
  
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      document.getElementById("passwordError").textContent = "Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }
  
    if (!/^[A-Za-z]\w{7,}$/.test(username)) {
      document.getElementById("usernameError").textContent = "Username should start with an alphabet character, can only contain alphanumeric characters and underscores, and be at least 8 characters long";
      valid = false;
    } else {
      document.getElementById("usernameError").textContent = "";
    }
  
    return valid;
  }
  