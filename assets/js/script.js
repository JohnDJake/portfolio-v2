$(document).ready(function(){
    // Initialize the mobile sidenav
    $(".sidenav").sidenav();

    // Add event handler to close the mobile sidenav when one of the links is clicked
    $(".sidenav a").click(() => $(".sidenav-overlay").click());
  });