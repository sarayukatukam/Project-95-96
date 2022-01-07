function addUser() {
    nameofuser = document.getElementById("user_name").value;

    localStorage.setItem("user_name", nameofuser);

    window.location = "Kwitter_room.html";
}