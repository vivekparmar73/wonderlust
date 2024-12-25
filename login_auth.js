window.onload = function() {
    const form = document.getElementById('auth-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.onsubmit = function(event) {
        event.preventDefault(); 

        emailError.textContent = '';
        passwordError.textContent = '';

        let isValid = true;

        //values get
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Password validation
        if (password === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert('Form submitted successfully!');
        }
    }
};
