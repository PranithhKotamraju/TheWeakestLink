$(document).ready(function() {
  $('audio#pop')[0].play()
  let playername=window.localStorage.getItem("UserName");
  let Amount=window.localStorage.getItem("Amount");
  $("span").text(playername);
  $("a").text(Amount+"$");
});
