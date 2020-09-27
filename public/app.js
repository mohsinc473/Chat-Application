let msgLi = document.getElementById("msgli");

let chats = firebase.database().ref("chats"); // Firebase Database Reference

let send = () => {
  let message = document.getElementById("message");

  let key = chats.push().key; // Generating Key
  let msgText = {
    li: message.value,
    key: key,
  };
  chats.child(key).set(msgText); // Sending Data to Database
  message.value = " ";
};

chats.on("child_added", (data) => {
  // Retreving Data From Database
  let li = document.createElement("li");
  li.setAttribute("class", "shown");
  liText = document.createTextNode(data.val().li);
  li.appendChild(liText);
  msgLi.appendChild(li);
});

let message = document.getElementById("message");
message.onkeypress = (e) => {
  // console.log(e)
  if (e.keyCode === 13) {
    send();
    message.value = " ";
  }
};

let users = document.getElementById("users");
let img = document.createElement("img");
// Facebook login
let loginFB = () => {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("User info: ", user);

      img.src = user.photoURL;
      users.appendChild(img);
      users.style.boxShadow = "0 0 20px #51d387";
      users.style.backgroundColor = "#f6f3eb";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorMessage);
    });
};

// Google Login

let loginGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(user);

      img.src = user.photoURL;
      users.appendChild(img);
      users.style.boxShadow = "0 0 20px #51d387";
      users.style.backgroundColor = "#f6f3eb";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(errorMessage);
    });
};
