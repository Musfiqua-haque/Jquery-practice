var mypara1 = $("<p></p>").text("This is new paragraph");

// before after append preappend

$("#p1").after(mypara1);
$("#p1").before(mypara1);

// find attribute

$("a").attr("href,http://127.0.0.1:5500/");

// adding style

$("h1").addClass("style1 style2");

// toggler

// $("button").click (function(){
//     $("h1").toggleClass("style1");
// })


// event listener

    $(".my-btn").click(function(){
        var value = this.innerHTML;
        $("h1").text(value + " is clicked");
    })

    //Login with password

    $("#loginButton").click(function(){

        var password1 = $("#pass1").val();
        var password2 = $("#pass2").val();

        if(password1 != "" & password2 != ""){

            if(password1 == password2){
                alert("Successfully LogIn")
            }
            else{
                alert("Password Mismatch")
            }
        }
        else{
            alert("Please Enter the password")
        }


    })

    // animation with jquery

    $("#btn").click(function(){
        $("#div1").toggle();
    })