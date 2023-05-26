
function validateform() {
  var fname = document.getElementById("name1").value;
   var mname = document.getElementById("name2").value;
    var lname = document.getElementById("name3").value;
  var email = document.getElementById("email").value;
  var fphone = document.getElementById("phone").value;
  var fdob = document.getElementById("dob").value;
  var faddress = document.getElementById("address").value;
  var fcountry = document.getElementById("country").value;
  var fcity = document.getElementById("city").value;
  var fstate = document.getElementById("state").value;
  var fzip = document.getElementById("zip").value;
  var fuser = document.getElementById("username").value;
  var fpassword = document.getElementById("password").value;
  var fcpassword = document.getElementById("cpass").value;

  var nameRegex = /^[A-Z][A-Za-z]{1,}[a-z]$/;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneRegex = /^\d{10}$/;
  var zipRegex = /^\d{6}$/;
  var usernameRegex = /^[a-zA-Z0-9_]+$/;

  if (!fname.match(nameRegex)) {
   alert("invalid first name")
    return false;
  }
    if (nameRegex.test(mname) || mname === "") {
      alert("invalid middle name");
      return false;
    }
      if (!lname.match(nameRegex) || mname==".") {
        alert("invalid last name");
        return false;
      }
  if (!email.match(emailRegex)) {
   alert("invalid email")
    return false;
  }
 
  if (fdob === "") {
    alert("Please select a date of birth.");
    return false;
  }

  if (faddress === "") {
    alert("Please enter your address.");
    return false;
  }
  if (fcountry === "") {
    alert("Please enter your country.");
    return false;
  }
  
 if (!fphone.match(phoneRegex)) {
   alert("invalid Phone number")
   return false;
 }
  if (fcity === "") {
    alert("Please enter your city.");
    return false;
  }

  if (fstate === "") {
    alert("Please enter your state.");
    return false;
  }

  if (!fzip.match(zipRegex)) {
    alert("Please enter a valid 5-digit zip code.");
    return false;
  }

  if (!fuser.match(usernameRegex)) {
    alert(
      "Please enter a valid username. (Only letters, numbers, and underscores are allowed)"
    );
    return false;
  }

  if (fpassword.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (fcpassword !== confirm_password) {
    alert("Passwords do not match.");
    return false;
  }
}
    function updatePhoneCode() {
      var countrySelect = document.getElementById("country");
      var phoneCodeInput = document.getElementById("phoneCode");

      // Define the phone codes for each country
      var phoneCodes = {
        India: "+91",
        UK: "+44",
        Australia: "+61",
        // Add more country codes here
      };

      // Get the selected country value
      var selectedCountry = countrySelect.value;

      // Set the corresponding phone code
      phoneCodeInput.value = phoneCodes[selectedCountry];
    }