$(document).ready(function(){
    $(".design").click(function(){
        $(".designp").toggle();
    });
    $(".development").click(function(){
        $(".developmentp").toggle();
    });
    $(".product").click(function(){
        $(".productp").toggle();
    });
    // hover effect on the portfolio//


    // This submits the contact us form//
    $("form").submit(function(event){
        var userName=$(".user").val();
        var email=$(".email").val();
        var textarea=$(".text").val();
       if(!userName || !email || !textarea){
            alert("Failed, please insert correct Name, Email and Message!")
       }else(
            alert(userName+","+" "+ "your message was received. Thank You!")
       );
        $("form").reset();
        event.preventDefault(); 
    }); 
    
});