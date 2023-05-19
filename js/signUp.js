
  // Get the button and input elements
  var button = document.getElementById('subscribeButton');
//   var loginButton = document.getElementById('loginButton')
  // User Name Validation
  var nameInput = document.getElementById('nameValidate');
  var nameAlert = document.getElementById('nameAlert');
  // User Email Validation
  var emailInput = document.getElementById('emailInput');
  var emailAlert = document.getElementById('emailAlert');

  //membership alert
  var membershipSelect = document.getElementById('membershipSelect');
  var membershipAlert = document.getElementById('membershipAlert');

  var passwordInput = document.getElementById('passwordInput');
  var passwordAlert = document.getElementById("passwordAlert");

  var genderInput = document.getElementById('gender');
  var genderError = document.getElementById('genderError');

  var formData = {};
  var userCollection =[]

  var user = localStorage.getItem('authUser');
  var userData = JSON.parse(user);

  if(userData!== null && userData.member === 'admin'){
    button.textContent = "Create User"
    document.getElementById('textlogin').style.display = 'none'
  }else {
    button.textContent = "Subscribe"
    document.getElementById('textlogin').style.display = 'block'
  }
  // Attach a click event listener to the button
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission if validation fails
    var lettersRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the name input value is empty
    if (nameInput.value.trim() === '') {
      nameAlert.textContent = 'Please enter a value in the input field!';
      nameAlert.style.display = 'block';
    } else if (!lettersRegex.test(nameInput.value)) {
      nameAlert.textContent = 'Please enter only letters!';
      nameAlert.style.display = 'block';
    } else {
        console.log(nameInput.value)
    formData.name = nameInput.value;
      nameAlert.textContent = ''; // Clear any existing error message
      nameAlert.style.display = 'none';
    }

    // Check if the email input value is empty or not a valid email format
    if (emailInput.value.trim() === '') {
        
      emailAlert.textContent = 'Please enter a value in the input field!';
      emailAlert.style.display = 'block';
    } else if (!emailRegex.test(emailInput.value)) {
      emailAlert.textContent = 'Please enter a valid email address!';
      emailAlert.style.display = 'block';
    } else {
        formData.email = emailInput.value
      emailAlert.textContent = ''; // Clear any existing error message
      emailAlert.style.display = 'none';
    }

    if (membershipSelect.value === 'Choose Membership Option') {
      membershipAlert.textContent = 'Please choose a membership option!';
      membershipAlert.style.display = 'block';
    } else {
        formData.member = membershipSelect.value
      membershipAlert.textContent = ''; // Clear any existing error message
      membershipAlert.style.display = 'none';
    }

    // Check if an instructor is selected
    if (genderInput.value === '') {
      genderError.textContent = 'Please select a gender.';
      genderError.style.display = 'block';
    } else {
      formData.gender = genderInput.value
      genderError.textContent = '';
      genderError.style.display = 'none';
    }

    if (passwordInput.value.trim() === '' || passwordInput.value.trim().length < 6) {
        passwordAlert.textContent = 'Please input a password with at least 6 characters!';
        passwordAlert.style.display = 'block';
      } else {
        formData.password = passwordInput.value
        passwordAlert.textContent = ''; // Clear any existing error message
        passwordAlert.style.display = 'none';
        formData.password = passwordInput.value; // Store the password value
      }
    
      // Rest of the validation checks and form data storage...
    
      var localData = localStorage.getItem('allData');

      var allUser = JSON.parse(localData);

      console.log(allUser)
  
      if(allUser===null){
        userCollection.push({
          "name" : "admin",
          "email" : "admin.dobu@gmail.com",
          "member" : "admin",
          "gender" : "other",
          "password" : "admin1234@",
          
        
        })
      }else{
        allUser.forEach(element => {
          userCollection.push(element)
        });
      }
    // Perform other actions or submit the form if validation is successful
    if (nameAlert.style.display === 'none' && emailAlert.style.display === 'none' && membershipAlert.style.display === 'none' && genderError.style.display === 'none' && passwordAlert.style.display === 'none') {

      userCollection.push(formData);
if(userData !== null&&userData.member === 'admin'){
  window.location.href='/Users/thinzarwinluck/DoBu-Material-Art/training_center_sample/src/profile.html'
}
var modal = document.getElementById("staticBackdrop");
modal.classList.add("show");
modal.style.display='block'
        
    }

  

    console.log(userCollection)
    localStorage.setItem('allData',JSON.stringify(userCollection))
    console.log(localStorage.getItem('allData'))
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
    membershipSelect.value="Choose Membership Option";
    genderInput.value = "Select"
    formData = {}
   
})
var id=document.getElementById('goLogin');
id.addEventListener(('click'),function(params) {
  window.location.href="/Users/thinzarwinluck/DoBu-Material-Art/training_center_sample/src/login.html"
  
})