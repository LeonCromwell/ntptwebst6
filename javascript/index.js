function comment(){
    event.preventDefault();
    var comment = document.getElementById("input-comment").value;
    var p = document.createElement("p");
    var username = localStorage.getItem('tam');

    p.innerHTML = username+": "+comment;
    var div = document.getElementById("old-comment");
    div.appendChild(p);
}

function message(){
    event.preventDefault();
    var message = document.getElementById("input-message").value;
    var p = document.createElement("p");
    p.innerHTML = message;
var div = document.getElementById("sended-message");
    div.appendChild(p);
}

// function post(){
//     var div = document.createElement("div");

// }