var userName = document.getElementById("username");
var password = document.getElementById("password");
console.log(password.value)

function validation(){
    if(userName.vlaue == ""){
       document.getElementById('userError').innerHTML = "please fill user name";
    }
    else if(userName.value.length < 3){
        document.getElementById('userError').innerHTML = "user must enter aboue  3 character";
    }else{

    }


    if(password.vlaue == ""){
         document.getElementById('password').innerHTML = "please fill password name";
     }else if(password.vlaue.length < 5){
         document.getElementById('password').innerHTML = "password must have 5 number";
     }
    //return false;
}