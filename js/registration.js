document.getElementById('myForm').addEventListener('submit', function (event) {
    // Reset error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Validation rules
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const firstNameMinLength = 4;
    const phoneRegex = /^[0-9]+$/;
    const passwordMinLength = 10;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;

    // Fetch form fields
    const name = document.getElementById('name').value;
    const firstName = document.getElementById('firstName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check validations
    if (!nameRegex.test(name)) {
      displayError('Name must contain only letters and be at least 3 characters long.');
    }

    if (firstName.length < firstNameMinLength) {
      displayError('First Name must be at least 4 characters long.');
    }

    if (!phoneRegex.test(phoneNumber)) {
      displayError('Phone number should not contain letters.');
    }

    if (password.length < passwordMinLength || !passwordRegex.test(password)) {
      displayError('Password must be at least 10 characters long, including at least one uppercase letter, one lowercase letter, and one number.');
    }

    if (password !== confirmPassword) {
      displayError('Passwords do not match.');
    }

    // Prevent form submission if there are errors
    if (document.getElementById('errorMessages').innerHTML !== '') {
      event.preventDefault();
    }
  });

  function displayError(message) {
    document.getElementById('errorMessages').innerHTML += `<p>${message}</p>`;
  }