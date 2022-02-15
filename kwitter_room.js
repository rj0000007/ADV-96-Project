   const firebaseConfig = {
      apiKey: "AIzaSyCC99h5arhYNBqddaIgYfIQ1EwoUXTPJgE",
      authDomain: "covid19bot-ww9k.firebaseapp.com",
      databaseURL: "https://covid19bot-ww9k-default-rtdb.firebaseio.com",
      projectId: "covid19bot-ww9k",
      storageBucket: "covid19bot-ww9k.appspot.com",
      messagingSenderId: "666636492334",
      appId: "1:666636492334:web:81d43651dba6b92fe709bf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ username +"!";

function addRoom()
{
      Room_Name=document.getElementById("room_name").value;

      localStorage.setItem("Room_Name" , Room_Name);

      firebase.database().ref("/").child(Room_Name).update({
            purpose:"addingRoom_Name"
      });

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_Name - " + Room_names);

      row="<div class='room_name' id=" + Room_names + "onclick='redirect_to_room_names(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      
      });});}
getData();
function redirect_to_room_names(name){
      console.log(name);
      localStorage.setItem("Room_Name" , name);
      window.location("kwitter_name.html");
      
}

function logout()
{
      window.location="index.html";

      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_Name");
}