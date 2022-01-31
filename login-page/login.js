let forms = document.querySelectorAll(".form");
let emails = document.querySelectorAll("#email");
let passwords = document.querySelectorAll("#password");
let passwordinputs = document.querySelectorAll("#Password");
let emailAlerts = document.querySelectorAll("#email-alert");
let passwordAlerts = document.querySelectorAll("#password-alert");
let checkboxes = document.querySelectorAll("#checkbox");
let FName = document.querySelector("#FName"); // first name input
let LName = document.querySelector("#LName"); // last name input
let Fname = document.querySelector("#Fname"); // first name text that will show the input value at the moment
let Lname = document.querySelector("#Lname"); // last name text that will show the input value at the moment
let signUpBtn = document.querySelector(".signUpBtn");
let layout = document.querySelector(".layout");
let logInBtn = document.querySelector(".logInBtn");
let logInForm = document.querySelector(".logInForm");
let signUpForm = document.querySelector(".signUpForm");
let closeBtns = document.querySelectorAll(".close");

let re = /^[a-zA-Z][\w._]{2,15}$/;
let up = /\S+@\S+\.\S+/;
signUpBtn.addEventListener("click", e => {
    logInForm.style.display = "none";
    signUpForm.style.display = "block";
    layout.style.display = "block";
})

logInBtn.addEventListener("click", e => {
    signUpForm.style.display = "none";
    logInForm.style.display = "block";
    layout.style.display = "block";
})

layout.addEventListener("click", e => {
    signUpForm.style.display = "none";
    logInForm.style.display = "none";
    layout.style.display = "none";
})

// evaluateEmail => ee
let ee = false;

// evaluatePassword => ep
let ep = 0;
forms.forEach(form => {
    form.addEventListener("submit", e => {
        if(!(ee && ep === 5)) {
            e.preventDefault();
            if (!ee) {
                emails.forEach(email => {
                    form.email.classList.add("is-invalid");
                })
                emailAlerts.forEach(emailAlert => {
                    emailAlert.textContent = "Please complete your email.";
                })
            }
            if (ep !== 5) {
                passwords.forEach(password => {
                    form.password.classList.add("is-invalid");
                })
                passwordAlerts.forEach(passwordAlert => {
                    passwordAlert.textContent = "Please complete your password.";
                })
            }
        }
    })
})

forms.forEach(form => {
    emails.forEach(email => {
        form.email.addEventListener("keyup", e => {
            if(e.target.value) {
                email.textContent = e.target.value.toLowerCase();
                if (up.test(e.target.value)) {
                    ee = true;
                    e.target.classList.add("is-valid");
                    e.target.classList.remove("is-invalid");
                } else {
                    e.target.classList.add("is-invalid");
                }
            } else {
                email.innerHTML = '<i>Your Email</i>';
            }
        })
    })
})
forms.forEach(form => {
    passwords.forEach(password => {
        form.password.addEventListener("keyup", e => {
            if(e.target.value) {
                password.textContent = "*".repeat(e.target.value.length)
        
                ep = 0
                ep+= /[a-z]/.test(e.target.value) ? 1 : 0;
                ep+= /[A-Z]/.test(e.target.value) ? 1 : 0;
                ep+= /[0-9]/.test(e.target.value) ? 1 : 0;
                ep+= /[\W]/.test(e.target.value) ? 1 : 0;
                ep+= e.target.value.length >= 6 ? 1 : 0;
        
                if (ep === 5){
                    e.target.classList.add("is-valid");
                    e.target.classList.remove("is-invalid");
                } else {
                    e.target.classList.add("is-invalid");
                }
            } else {
                password.innerHTML = '<i>Your Password</i>';
            }
        })
    })
})
FName.addEventListener("keyup", e => {
    if(e.target.value) {
        Fname.textContent = e.target.value.toLowerCase();
        if (re.test(e.target.value)) {
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
        } else {
            e.target.classList.add("is-invalid");
        }
    } else {
        Fname.innerHTML = '<i>Your First Name</i>';
    }
})
LName.addEventListener("keyup", e => {
    if(e.target.value) {
        Lname.textContent = e.target.value.toLowerCase();
        if (re.test(e.target.value)) {
            e.target.classList.add("is-valid");
            e.target.classList.remove("is-invalid");
        } else {
            e.target.classList.add("is-invalid");
        }
    } else {
        Lname.innerHTML = '<i>Your Last Name</i>';
    }
})

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", e => {
        signUpForm.style.display = "none";
        logInForm.style.display = "none";
        layout.style.display = "none";
    })
})

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", e => {
        passwordinputs.forEach(passwordinput => {
            if (passwordinput.type === "password") {
                passwordinput.type = "text";
            } 
            else {
                passwordinput.type = "password";
            }
        })
    })
})