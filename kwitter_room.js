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
const app = initializeApp(firebaseConfig);

username = localStorage.getItem("user_name").value;
document.getElementById("welcome").innerHTML = "Welcome" + username + "!!";  

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").chlid(room_name).update({purpose : "adding room name"});

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
      getData();

      function redirectToRoomName(name)
      {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";      
      }

      function logout()
      {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name")
        window.location = "index.html";
      }