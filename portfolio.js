function displayformdata(event){


    var companyname = document.getElementById("companyname").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
     
    console.log("companyname;"+companyname);
    console.log("name;"+name);
    console.log("email;"+email);
    console.log("message;"+message);

    document.getElementById('companyname').value="";
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('message').value="";
    
}