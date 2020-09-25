let msgLi = document.getElementById("msgli");

let send = () => {
    let message = document.getElementById("message");
    
    let li = document.createElement('li')
    li.setAttribute("id","shown")
    liText = document.createTextNode(message.value);

    li.appendChild(liText);
    msgLi.appendChild(li);

    message.value = " ";
}