function match() {
    var pass1= document.getElementById("pass1").value;
    var pass2= document.getElementById("pass2").value;
    if(pass1 != pass2)
    {
        alert("password didnt match.");  
        return false;
    }
    else if(pass1==pass2)
    {
        alert("password matched");
        return true;
    }
}
