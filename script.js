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
    $(".img").mouseenter(function(){
        $(".img,.img2,.img3,.img4,.img5,.img6,.img7,.img8").css('background','white').fadeTo("slow" ,"0.4")
    });
    $(".img").mouseleave(function(){
        $(".img,.img2,.img3,.img4,.img5,.img6,.img7,.img8").css('background','white').fadeTo("fast" ,"1")
    });


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
        
        event.preventDefault(); 
    }); 
    
});