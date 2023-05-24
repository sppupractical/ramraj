function validateRegistration() {
    // Get the form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
  
    // Regular expressions for validation
    var nameRegex = /^[A-Za-z]{6,}$/;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var mobileRegex = /^\d{10}$/;
  
    // Validate first name
    if (!nameRegex.test(firstName)) {
      alert('First name should contain alphabets only and have a minimum length of 6 characters.');
      return false;
    }
  
    // Validate last name
    if (lastName.trim() === '') {
      alert('Last name should not be empty.');
      return false;
    }
  
    // Validate address
    if (address.trim() === '') {
      alert('Address should not be empty.');
      return false;
    }
  
    // Validate email
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate password
    if (password.length < 6) {
      alert('Password should have a minimum length of 6 characters.');
      return false;
    }
  
    // Validate mobile number
    if (!mobileRegex.test(mobileNumber)) {
      alert('Mobile number should contain 10 digits only.');
      return false;
    }
  
    // All fields are valid
    return true;
  }
  