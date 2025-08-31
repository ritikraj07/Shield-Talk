
        // Version of the app
    const version = "V1";
    // Password strength indicator
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.password-strength-bar');
    const strengthContainer = document.querySelector('.password-strength');

    passwordInput.addEventListener('input', function() {
            const password = passwordInput.value;
    let strength = 0;

            // Check password strength
            if (password.length > 5) strength++;
            if (password.length > 7) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Update strength indicator
    strengthContainer.classList.remove('password-weak', 'password-medium', 'password-strong');
            
            if (password.length > 0) {
                if (strength < 2) {
        strengthContainer.classList.add('password-weak');
                } else if (strength < 4) {
        strengthContainer.classList.add('password-medium');
                } else {
        strengthContainer.classList.add('password-strong');
                }
            }
        });

    // Form validation
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    return;
            }

    if (!document.getElementById('terms').checked) {
        alert('You must agree to the Terms of Service and Privacy Policy');
    return;
            }

    // In a real application, this would send data to a server
    alert('Account created successfully! Redirecting...');
    window.location.href = 'mode-selection.html';
        });


    // Social login with Google
    document.getElementById('google-btm').addEventListener('click', function() {
        document.location.href = 'http://localhost:3000/V1/api/auth/google'
    });

    document.getElementById('facebook-btm').addEventListener('click', function() {
        alert('Signing up with Facebook... \n Comming Soon');
        });

    document.getElementById('linkedin-btm').addEventListener('click', function() {
        alert('Signing up with LinkedIn... \n Comming Soon');
        });


