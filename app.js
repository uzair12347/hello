// document.getElementById("registrationForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Form submit hone se rokne ke liye

//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;

//     if (password !== confirmPassword) {
//         event.preventDefault();
//         alert("Passwords match! You are registered.");
//         // Yahan aap user ko register karne ke code likh sakte hain
//     } else {
//         alert("Confirm Password does not match.");
//     }
// });

// function registerUser(email, password) {

//     let user1 = localStorage.setItem('uzair1', 'uzair123' )
//     let users = localStorage.getItem('user', 'value');
    
//     // Check if user with the same email already exists
//     let userExists = users.some(user => user.email === email);
    
//     if (user1) {
//         alert('This email is already registered.');
//     } else {
//         // Add new user
//         users.push({ email, password });
//         localStorage.setItem('users', JSON.stringify(users));
//         alert('Registration successful!');
//     }
// }

// registerUser()

// function loginUser(email, password) {
//     let users = JSON.parse(localStorage.getItem('users','value')) || [];
    
    // Check if credentials match any user
//     let validUser = users.some(user => user.email === email && user.password === password);
    
//     if (validUser) {
//         alert('Login successful!');
//     } else {
//         alert('This credential does not match.');
//     }
// }

// loginUser();

document.getElementById("submit").addEventListener("click", function() {
    // Loading spinner dikhaye
    document.getElementById("loadingSpinner").style.display = "block";

})

    // 3 seconds ka delay
//     setTimeout(function() {
//         // Dusre page par redirect
//         window.location.href = "dashboard.html";
//     }, 3000); // 3000 milliseconds = 3 seconds
// });
