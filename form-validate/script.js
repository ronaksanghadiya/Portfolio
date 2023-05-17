
// fatch the class from html file
const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('E-mail');
const number = document.getElementById('number');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // alert("hello");
    validate();
});
const senddata = (count, srate,nameval) => {
    if (srate == count) {
        alert("Registration Successfull");
        swal("Succesfull", "Welcome " +nameval, "success");
        // location.href=`demo.html?username=${nameval}`
    }
}
const successMsg = (nameval) => {
    let formcontrol = document.getElementsByClassName('form-control');
    var count = formcontrol.length-1;
   
    for (var i = 0; i < formcontrol.length; i++) {
        if (formcontrol[i].className == "form-control success") {
            var srate = 0 + i;
            console.log(srate);
            senddata(count, srate,nameval);
        }
        else {
           return false;
        }

    }
}

// Create the Sucess Function


// More valid E-mail
const isemail = (emailval) => {
    var atsysmbol = emailval.indexOf("@");
    var dot = emailval.indexOf('.');

    if (atsysmbol < 1)
        return false;
    if (dot < atsysmbol + 3)
        return false;
    if (dot == emailval.length - 1)
        return false
    // if all condition is satisfied then function return true
    return true;


}
// Create the Validate Function 
const validate = () => {
    const nameval = username.value.trim();
    const emailval = email.value.trim();
    const numberval = number.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    // Validate the Name 

    if (nameval == "") {
        seterror(username, 'Username Can not be Blank');
    }
    else if (nameval.length <= 2) {
        seterror(username, 'Username Minimum 3 Character');
    }
    else {
        setsucess(username);
    }

    // Validate the E-mail

    if (emailval == "") {
        seterror(email, 'E-mail Can not be Blank');
    }
    else if (!isemail(emailval)) {
        seterror(email, 'E-mail Can not be Valid');
    }
    else {
        setsucess(email);
    }

    // Validate the Number
    if (numberval == "") {
        seterror(number, 'Number can not be Blank');
    }
    else if (numberval.length < 9 || numberval.length > 10) {
        seterror(number, 'Number Must be 10 digit');
    }
    else {
        setsucess(number);
    }

    // Validate the Password
    if (passwordval == "") {
        seterror(password, 'Password can not be Blank');
    }
    else if (passwordval.length <= 7) {
        seterror(password, 'pasword must be at last 8 character');
    }
    else {
        setsucess(password);
    }

    // Validate the Conform-password 
    if (cpasswordval == "") {
        seterror(cpassword, 'Conform Password Blank');
    }
    else if (cpasswordval != passwordval) {
        seterror(cpassword, 'Password and Conform Password is Miss Match');
    }
    else {
        setsucess(cpassword);
    }

    // Call the Success the function
    successMsg(nameval);

}

// to create seterror function 
function seterror(input, errorMsg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.classList.remove('success');
    formcontrol.classList.add('error');

    small.innerText = errorMsg;

}

// to Create setsucess function
function setsucess(input) {
    const formcontrol = input.parentElement;
    formcontrol.classList.remove('error')
    formcontrol.classList.add('success');

}