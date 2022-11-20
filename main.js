/* Tạo tài khoản */
function signup(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 
    var confirmpassword = document.getElementById("confirmpassword").value; 
    var user = {
        username : username,
        email : email,
        password : password,
    }
    if(password == confirmpassword){
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng Ký Thành Công");
    }
    else{
        alert("Password không khớp")
    }
}



/* đăng nhập */
function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(username == null){
        alert("Vui lòng nhập username")
    }
    else if(username ==data.username && password ==data.password){
        
        window.location.href="trangchu.html"
    }
    else if(username !=data.username || password !=data.password){
        alert("username or password incorrect")
    }
}
/* Ẩn hiện mật khẩu */
const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function() {
eyeOpen.classList.add("hidden");
input.setAttribute("type","text");
eyeClose.classList.remove("hidden");


});
eyeClose.addEventListener("click", function() {
eyeOpen.classList.remove("hidden");
eyeClose.classList.add("hidden");
input.setAttribute("type","password");
});
const input1 = document.querySelector(".input1");
const eyeOpen1 = document.querySelector(".eye-open1");
const eyeClose1 = document.querySelector(".eye-close1");
eyeOpen1.addEventListener("click", function() {
eyeOpen1.classList.add("hidden");
input1.setAttribute("type","text");
eyeClose1.classList.remove("hidden");


});
eyeClose1.addEventListener("click", function() {
eyeOpen1.classList.remove("hidden");
eyeClose1.classList.add("hidden");
input1.setAttribute("type","password");
});
