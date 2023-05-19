var loginButton = document.getElementById('loginButton');
var emailInput = document.getElementById('emailInput')
var passwordInput= document.getElementById('passwordInput');
loginButton.addEventListener('click',function(event) {
    event.preventDefault();

    var allData = localStorage.getItem('allData')

    var formData = JSON.parse(allData);

    const userData = formData.find(data=> data.email === emailInput.value);
    if(userData.password === passwordInput.value){
        window.location.href = "/Users/thinzarwinluck/DoBu-Material-Art/training_center_sample/src/profile.html";
        localStorage.setItem('authUser', JSON.stringify(userData));
        
    }
    
})