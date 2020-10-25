var eightA =$("#eightAm");
var nineA =$("#nineAm");
var tenA =$("#tenAm");
var elevenA=$("#elevenAm");
var twelveP=$("#twelvePm");
var oneP=$("#onePm");
var twoP=$("twoPm");
var threeP=$("#threePm");
var fourP=$("#fourPm");
var fiveP=$("#fivePm");
var sixP=$("#sixPm");



$(document).ready(function(){
    timeZoneColor();
    storePage();
    
    $(".saveBtn").on("click", function(){
      userInput = $(this).siblings(".form-control").val().trim();
      // console.log(userInput);
      hourSpan = $(this).siblings(".input-group-prepend").text().trim();
      // console.log(hourSpan);
      localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
    
    $("#clearDay").on("click", function(){
      localStorage.clear();
      
    }) 
  });


  var currentHour = moment().format("h:mm:ss a");
  var interval = setInterval(function() {
    var momentNow = moment();
    $("#yymmdd").html(momentNow.format("LL"));
    
    
    $("#currentDay").html(momentNow.format('LTS'));
    
  }, 1000);
  

  function timeZoneColor() {
      
    $(".form-control").each(function () {
        var time = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        if (hour > time) {
            $(this).addClass("past");
            $(".past").attr("disabled", "disabled");
            $(".saveBtn").prop("disabled",true);
        } else if (hour < time) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
};


  function storePage() {
    var eight = JSON.parse(localStorage.getItem("08:00 AM"));


      eightA.val(eight);

      var nine = JSON.parse(localStorage.getItem("09:00 AM"));


      nineA.val(nine);
    
      var ten = JSON.parse(localStorage.getItem("10:00 AM"))

      tenA.val(ten);
      
      var eleven= JSON.parse(localStorage.getItem("11:00 AM"))

      elevenA.val(eleven);
      
      var twelve = JSON.parse(localStorage.getItem("12:00 PM"))

      twelveP.val(twelve);
      
      var one = JSON.parse(localStorage.getItem("01:00 PM"))

      oneP.val(one);
      
      var two = JSON.parse(localStorage.getItem("02:00 PM"))

      twoP.val(two);
      
      var three = JSON.parse(localStorage.getItem("03:00 PM"))

      threeP.val(three);
     
      var four = JSON.parse(localStorage.getItem("04:00 PM"))

      fourP.val(four);
      
      var five = JSON.parse(localStorage.getItem("05:00 PM"))

      fiveP.val(five);
      
      var six = JSON.parse(localStorage.getItem("06:00 PM"))

      sixP.val(six);
      
   
    } 