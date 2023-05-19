
  
  window.addEventListener('load', function() {
    var user = localStorage.getItem('authUser');
  var userData = JSON.parse(user);
    document.getElementById('userName').textContent = 'User Name : ' + userData.name;
    document.getElementById('email').textContent = 'Email : ' + userData.email;
    document.getElementById('choseMember').textContent='Member : ' + userData.member;
    document.getElementById('gender').textContent='Gender : ' + userData.gender

    if(userData.member !== 'admin'){
      document.getElementById('table').style.display = 'none'
    }
    else{
      document.getElementById('table').style.display = 'block'
    }
  });

  var allUser = localStorage.getItem('allData')

  var usersData = JSON.parse(allUser)

  console.log(usersData)

  $(document).ready(function () {
    const scheduleBody = $("#registeredUser");
  
    // Generate the table rows
    $.each(usersData, function (index, rowData) {
      const row = $("<tr></tr>");
  
      // Create table cells for each row
      $.each(rowData, function (cellIndex, cellData) {
        if (cellIndex !== "password") {
        const cell = $("<td></td>").text(cellData);
        row.append(cell);
        }
      });
  
      scheduleBody.append(row);

      const myButton = $("#my-button");

        // Define the function to be called when the button is clicked
        function handleClick(event) {
          // Display alert box when the button is clicked
          window.location.href = '/Users/thinzarwinluck/DoBu-Material-Art/training_center_sample/src/signUp.html'
        }

        // Add a click event listener to the button using jQuery
        myButton.click(handleClick);
    });
  });
