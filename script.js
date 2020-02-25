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
    // hover effect on portfolio
    $(".img").hover(function(){
        $("img").css("background-color","white");
    })


    // This submits the contact us form//
    $("form").submit(function(event){
        var userName=$(".user").val();
        var email=$(".email").val();
        var textarea=$(".text").val();
       if(!userName || !email || !textarea){
            alert("Failed, please insert correct Name, Email and Message!")
       }else(
            alert(userName+","+" "+ "your enquiry has been submitted successfully. Thank you!")
       );
        $("form").reset();
        event.preventDefault(); 
    }); 
    
});