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
