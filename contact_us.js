    //set error on window load function
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();

            // Clear previous errors
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('phoneError').textContent = '';
            document.getElementById('subjectError').textContent = '';
            document.getElementById('commentError').textContent = '';

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const comment = document.getElementById('comment').value;

            let isValid = true;

            // Validate name
            if (name === '') {
                document.getElementById('nameError').textContent = 'Please Enter your name!';
                isValid = false;
            }

            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                document.getElementById('emailError').textContent = 'Email is required.';
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Enter a valid email.';
                isValid = false;
            }

            // Validate phone
            if (phone === '') {
                document.getElementById('phoneError').textContent = 'Please Enter your Phone number!';
                isValid = false;
            }

            // Validate subject
            if (subject === '') {
                document.getElementById('subjectError').textContent = 'Please Enter your subject!';
                isValid = false;
            }

            // Validate comment
            if (comment === '') {
                document.getElementById('commentError').textContent = 'Please Enter your comment!';
                isValid = false;
            }

            // If valid, submit the form
            if (isValid) {
                alert('Form submitted successfully!');
                

            }
        });
    };
