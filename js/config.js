var firebaseConfig = {
    apiKey: "AIzaSyC_4Mxemogy6_v_shznZVbYYJQqRrHbpWI",
    authDomain: "msgfromresume.firebaseapp.com",
    databaseURL: "https://msgfromresume-default-rtdb.firebaseio.com",
    projectId: "msgfromresume",
    storageBucket: "msgfromresume.appspot.com",
    messagingSenderId: "272104054105",
    appId: "1:272104054105:web:dffb1a79f8c9fb79fc4048"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function sendEmail(){
  

    var sub=document.getElementById("subject").value;
    var msg=document.getElementById("message").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var time=new Date().getTime();
    firebase.database().ref('notifications/personal/').push({
        Name:name,
        Email:email,
        Sub:sub,
        Body: msg,
        Time:time
      }).then(function(){
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://fcm.googleapis.com/fcm/send', true, null, null)
        xhr.setRequestHeader('Authorization', 'key=AAAAP1qqXVk:APA91bGEwa-gz6kKkE_2x2z4Hu23kor5FLtvHO0IR3ebUnmZQppNeAxH2pWqPk-eQWukWRujtOFRUxhBknneuc5BU2kXpr42EvUBGg6y-PI6v7_kGGsdOSsg0SWx4X0g2HRJ6zhWipqw')
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        xhr.send(JSON.stringify({ 
        "to":"/topics/all", 
         "notification" : {
         "body" : sub,
         "content_available" : true,
         "priority" : "high",
         "title":"New Message from \n"+name
         }
        }))
            alert("I Received your message I will contact you in your provided Email.")
      });
  }