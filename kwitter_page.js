const firebaseConfig = {
    apiKey: "AIzaSyCC99h5arhYNBqddaIgYfIQ1EwoUXTPJgE",
    authDomain: "covid19bot-ww9k.firebaseapp.com",
    databaseURL: "https://covid19bot-ww9k-default-rtdb.firebaseio.com",
    projectId: "covid19bot-ww9k",
    storageBucket: "covid19bot-ww9k.appspot.com",
    messagingSenderId: "666636492334",
    appId: "1:666636492334:web:81d43651dba6b92fe709bf"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("Room_Name");
  
  function send()
  {
        msg=document.getElementById("message_text_input").value;
  
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("message_text_input").innerHTML="";
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
 
        } });  }); }
  getData();
  
  function logOut()
  {
  window.location="index.html";
  
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_Name");
  
  }
  
  