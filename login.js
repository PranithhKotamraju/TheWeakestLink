$(document).ready(function(){
  $('audio#pop')[0].play()
  $("#sub1").click(function(){
    let player_name = ($("#name").val()).toUpperCase();
    let player_age = ($("#age").val()).toUpperCase();
    if(player_name===""||player_name===null){
      alert("Enter valid details");
    }else{
    localStorage.setItem("UserName",player_name);
    localStorage.setItem("UserAge",player_age);
    window.location.href = "file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/round1.html";
    }
  });
});