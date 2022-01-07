// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQAkuGzbLxbg3KeQ1hv7P6DCfJ1Mp_wKE",
  authDomain: "project-df446.firebaseapp.com",
  databaseURL: "https://project-df446-default-rtdb.firebaseio.com/",
  projectId: "project-df446",
  storageBucket: "project-df446.appspot.com",
  messagingSenderId: "1039124245191",
  appId: "1:1039124245191:web:4c8e19088f7f91b81c2ce2"
};

// Initialize Firebase
const app = initializeApp(config);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
   msg = document.getElementById("msq").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
       });

       document.getElementById("msq").value = "";  
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
   //Start code

   //End code
   } });  }); }
   getData();

   function logout()
   {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name")
     window.location = "index.html";
   }