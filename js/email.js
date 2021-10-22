function sendEmail() {
    var sub=document.getElementById("subject").value;
    var msg=document.getElementById("message").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username : "kabakkhan8@gmail.com",
        Password : "Dont act like smart",
        To : 'jeyaram.1701060@srec.ac.in',
        From : email,
        Subject : sub,
        Body : msg,
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}