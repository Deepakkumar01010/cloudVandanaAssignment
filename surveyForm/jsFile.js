function showDataPopup() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('countries').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const DOB = document.getElementById('DOB').value;
    if (validateNames(firstName)) {
        alert("check your first name");
        return;
    }
    if (validateNames(lastName)) {
        alert("check your last name");
        return;
    }
    if (validateNames(profession)) {
        alert("check your profession");
        return;
    }
    if (!validateEmailAddress(email)) {
        alert("check your email address");
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert('check you phone number');
        return;
    }
    if(DOB==""){
        alert("Date of birth cannot be empty");
        return;
    }
    if(country==""){
        alert("Country cannote be empty");
    }

    document.getElementById('fill-first-name').innerHTML = firstName;
    document.getElementById('fill-last-name').innerHTML = lastName;
    document.getElementById('fill-email').innerHTML = email;
    document.getElementById('fill-phoneNumber').innerHTML = phoneNumber;
    document.getElementById('fill-DOB').innerHTML = DOB;
    document.getElementById('fill-profession').innerHTML = profession;
    document.getElementById('fill-country').innerHTML = country;
    document.getElementById('fill-gender').textContent = gender[0].value;

    document.getElementById('submit-popup').style.display = 'block';
}

document.getElementById('popup-submit').addEventListener('click', () => {
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('profession').value = "";
    document.getElementById('email').value = "";
    document.getElementById('countries').value = "";
    document.getElementById('phone-number').value = "";
    document.querySelector('#gender-male').checked=false;
    document.querySelector('#gender-female').checked=false;
    document.getElementById('DOB').value = "";

    document.getElementById('submit-popup').style.display = 'none';

})

document.getElementById('popup-close').addEventListener('click', ()=>{
    document.getElementById('submit-popup').style.display='none';
})

function validateNames(name) {
    // name=name.trim();
    for (let i = 0; i < name.length; i++) {
        if ((name.charCodeAt(i) > 65 || name.charCodeAt(i) < 90) &&
            (name.charCodeAt(i) > 97 || name.charCodeAt(i) < 122) &&
            name.charCodeAt(i) !== 32) {
            return false;
        }
    }

    return true;

}

function validateEmailAddress(emailAddress) {
    var atSymbol = emailAddress.indexOf("@");
    var dotSymbol = emailAddress.lastIndexOf(".");
    var spaceSymbol = emailAddress.indexOf(" ");

    if ((atSymbol != -1) &&
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        (dotSymbol > atSymbol + 1) &&
        (emailAddress.length > dotSymbol + 1) &&
        (spaceSymbol == -1)) {
        return true;
    }
    else {
        return false;
    }
}


function validatePhoneNumber(phoneNumber) {
    const pattern = /^[0-9]{10}$/;
    return pattern.test(phoneNumber);
}


document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    showDataPopup();

});
