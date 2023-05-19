
$(document).ready(function () {
  $(".link1").addClass("active");
  $(".nav-link").click(function () {
    var page = $(this).data("page");
    // Set the src attribute of the iframe to the clicked page
    $("#contentFrame").attr("src", page);
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  // const scheduleBody = $("#scheduleBody");
});

function changeContent(src) {
  document.getElementById("contentFrame").src = src;
}




