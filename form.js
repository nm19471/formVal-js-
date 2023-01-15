validate=()=>{
    let user=document.getElementById("user").value;
    if(user==""){
        document.getElementById("username").innerHTML="** Please Fill Username"
        return false;
    }
    if(user.length<2 || user.length>20){
        document.getElementById("username").innerHTML="** Username should be between 2-20 characters"
        return false;
    }
    if(!isNaN(user)){
        document.getElementById("username").innerHTML="** Please give english characters (eg: abc,cde)"
        return false;
    }

    let pass=document.getElementById("pass").value;
    if(pass==""){
        document.getElementById("password").innerHTML="*Please Fill Password"
        return false;
    }
    if(pass.length<5 || pass.length>10){
        document.getElementById("password").innerHTML="*Password should be in range 5-10"
        return false;
    }
    

    let conpass=document.getElementById("conpass").value;
    if(conpass==""){
        document.getElementById("confirm").innerHTML="**Please fill Password"
        return false;
    }
    if(conpass!=pass){
        document.getElementById("confirm").innerHTML="**Password not Matching"
        return false;
    }
    
    let mob=document.getElementById("mobile").value;
    if(mob==""){
        document.getElementById("mobilenum").innerHTML="**Please fill Mobile Number"
        return false;
    }
    if(isNaN(mob)){
        document.getElementById("mobilenum").innerHTML="**Please fill Valid mobile number"
        return false;
    }
    if(mob.length!=10){
        document.getElementById("mobilenum").innerHTML="**Mobile number must be of 10digits"
        return false;
    }
    let mail=document.getElementById("email").value;
    if(mail==""){
        document.getElementById("emailid").innerHTML="**Please fill Email ID"
        return false;
    }
    if(mail.indexOf('@')==0){
        document.getElementById("emailid").innerHTML="**Please fill  Valid Email ID"
        return false;
    }
    let cnt=0;  // to check for @ present in email or not
    for(let x of mail){
        if(x=='@'){
            break;
        }
        else{
            cnt++;
        }
    }
    if(cnt==mail.length){
        document.getElementById("emailid").innerHTML="**Please fill  Valid Email ID"
        return false;
    }
    if(mail.charAt(mail.length-4)!='.' && mail.charAt(mail.length-3)!='.'){
        document.getElementById("emailid").innerHTML="**Please fill  Valid Email ID"
        return false;
    }
}