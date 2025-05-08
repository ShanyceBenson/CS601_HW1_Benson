document.getElementById("form").addEventListener("submit", function(event){
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const emailVal = document.getElementById("email").value.trim();
    const packageSelect = document.getElementById("package");
    const sub = document.getElementById("subscribe");
    
    const fnErr = document.getElementById("ferror");
    const lnErr = document.getElementById("lerror");
    const emErr = document.getElementById("emerror");
    const pErr = document.getElementById("perror");
    const subErr = document.getElementById("suberror");
    
    const nameCheck = /^[A-Za-z]{2,}$/;
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let isValid = true;
    
    if(!nameCheck.test(firstName)) {
        fnErr.textContent = "First name must have at least 2 letters A-Z only.";
        isValid = false;
    } else {
        fnErr.textContent = "";
    }

    if(!nameCheck.test(lastName)) {
        lnErr.textContent = "Last name must have at least 2 letters A-Z only.";
        isValid = false;
    } else {
        lnErr.textContent = "";
    }

    if (emailVal !== "" && !emailCheck.test(emailVal)) {
        emErr.textContent = "Please enter a valid email address."
        isValid = false;
    } else {
        emErr.textContent = "";
    }

    if (packageSelect.value === "") {
        pErr.textContent = "Please select a Subscription Package option";
        isValid = false;
    } else {
        pErr.textContent = "";
    }

    if (!sub.checked) {
        subErr.textContent = "You must agree to subscribe.";
        isValid = false;
    } else {
        subErr.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});

