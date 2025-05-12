document.getElementById("form").addEventListener("submit", function (event) {
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const packageSelect = document.getElementById("package");
  const sub = document.getElementById("subscribe").checked;

  const fnErr = document.getElementById("ferror");
  const lnErr = document.getElementById("lerror");
  const emErr = document.getElementById("emerror");
  const pErr = document.getElementById("perror");
  const subErr = document.getElementById("suberror");

  //2(a-b)Name and Email Validation
  const nameCheck = /^[A-Za-z]{2,}$/;
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  //1(c) All fields are required except email with JS validation
  //2(a-d) Implementing Client-Side Form Validation
  const validations = [
    {
      isValid: nameCheck.test(firstName),
      errSpan: fnErr,
      message: "First name must have at least 2 letters A-Z only.",
    },
    {
      isValid: nameCheck.test(lastName),
      errSpan: lnErr,
      message: "Last name must have at least 2 letters A-Z only.",
    },
    {
      isValid: emailVal === "" || emailCheck.test(emailVal),
      errSpan: emErr,
      message: "Please enter a valid email address.",
    },
    {
      isValid: packageSelect.value !== "",
      errSpan: pErr,
      message: "Please select a Subscription Package option",
    },
    {
      isValid: sub,
      errSpan: subErr,
      message: "You must agree to subscribe.",
    },
  ];

  //2(e) Use arrow functions and other high-order fuctions to proccess validations
  //3(b) any validation fail, provide appropriate feedback to the user
  validations.forEach((v) => {
    if (!v.isValid) {
      v.errSpan.textContent = v.message;
      isValid = false;
    } else {
      v.errSpan.textContent = "";
    }
  });

  //3(c) parts i and iii Summary once all validation passes
  if (!isValid) {
    //3(a) Upon submission, prevent default behavior
    event.preventDefault();
  } else {
    event.preventDefault();
    const summaryDiv = document.getElementById("summary");

    summaryDiv.innerHTML = `Thank you, ${firstName} ${lastName}, for subscribing!<br>
                                Your email <strong>${emailVal}</strong> is registered 
                                with our <strong>${packageSelect.value}</strong> package.`;

    summaryDiv.style.display = "block";
    document.getElementById("form").style.display = "none";
  }
});
