$(document).ready(function(){
    $('audio#pop')[0].play()
    $("#start").click(function(){
        window.location.href = "file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/login.html";
       console.log("play");
    });
    $("#rules").click(function(){
        window.location.href = "file:///Users/saipraneethkrishnakotamraju/Desktop/JAVASCRRIPT%20FINAL%20PROJECT/project%20final/rules.html";
        console.log("rules"); 
    });
});