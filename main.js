function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 
    var user = {
        username : username,
        email : email,
        password : password,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng Ký Thành Công");
}

function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập username")
    }
    else if(username ==data.username && password ==data.password){
        alert("Dang nhap thanh cong")
        window.location.href="trangchu.html"
    }
    else{
        alert("Đăng nhập không thành công")
    }
}

