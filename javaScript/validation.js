// Validate Form
       function validating() {
var reason = "";

  reason += validatefullName(fullName);
  reason += validateCompany(Company);
  reason += validateAddress1(Address1);
  reason += validateCity(City);
  reason += validateState(State);
  reason += validateZIPPostalCode(ZIP);
  reason += validatePhone(phone);
  reason += validateEmail(email);
  reason += validateGateNumber(gateNumReq);
  reason += validateGateType(gateType);

  if (reason != "") {
    alert("Some fields need to be fixed:\n\n" + reason);
    return false;
  }

  return true;
}

  function validateEmpty(fld) {
    var error = "";

    if (fld.value.length == 0) {
        fld.style.background = 'Yellow';
        error = "The required field has not been filled in.\n"
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validatefullName(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a name.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "Your name contains illegal characters. (i.e.: ?!@#$^%&) \n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateCompany(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a company name.\n\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateAddress1(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter an address.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateCity(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a city.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateState(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a state.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateZIPPostalCode(fld) {
    var error = "";
    var illegalNumbs = '^\\d{5}(-\\d{4})?$'; // allows numbers only

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a ZIP/Postal Code.\n\n";
    } else if ((fld.value.length < 5) || (fld.value.length > 6)) {
        fld.style.background = 'Yellow';
        error = "The ZIP/Postal Code is the wrong length.\n\n";
    } else if (illegalNumbs.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "Please input numerical values.\n\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validatePhone(fld) {
    var error = "";
    var illegalNumbs = '^\\d{5}(-\\d{4})?$'; // allows numbers only

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a phone number.\n";
    } else if ((fld.value.length < 2) || (fld.value.length > 11)) {
        fld.style.background = 'Yellow';
        error = "The phone number is the wrong length.\n";
    } else if (illegalNumbs.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "Please input numerical values.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateEmail(fld) {
    var error = "";
    var x = document.forms["validGate"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter an email address.\n";
    } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateGateNumber(fld) {
    var error = "";
    var illegalNumbnumbs = '^\\d{5}(-\\d{4})?$'; // allows numbers only

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter how much gates you needed.\n\n";
    } else if (illegalNumbnumbs.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "Please input numerical values.\n\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function validateGateType(fld) {
    var error = "";

    if (fld.value == "0") {
       error = "Please select a gate type. \n\n";
    } else {
       fld.style.background = 'White';
    }
    return error;
}
