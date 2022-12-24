
// /*Import firebase */
// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: "AIzaSyBwNGeuFTU8GThY2hR7P3xbpErE5J39tUk",
//     authDomain: "ntptwebst6.firebaseapp.com",
//     projectId: "ntptwebst6",
//     storageBucket: "ntptwebst6.appspot.com",
//     messagingSenderId: "206898117688",
//     appId: "1:206898117688:web:0692e15acead627ef1bacd"
 
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// // Initialize Realtime Database and get a reference to the service
// const database = firebase.database();

  

// /* Tạo tài khoản sử dụng firebase*/
// function signup(){
//     event.preventDefault();
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value; 
//     var confirmpassword = document.getElementById("confirmpassword").value; 
  
//    firebase.database().ref("user").push().set({
//     "username": username,
//     "email": email,
//     "password": password,
//     "confirmpassword": confirmpassword
//    })
//    return false;
// }

/*Tạo tài khoản sử dụng localstorage */
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
    confirmpassword : confirmpassword

   }
    var key = localStorage.getItem(username);
    var data = JSON.parse(key);
    if(data == null ){
        
        if(password == confirmpassword){
            var json = JSON.stringify(user);
            localStorage.setItem(username,json);
            alert("Đăng Ký Thành Công");
            window.location.href=('dangnhap.html');
        }
        else {
            alert("Password khong khop")
        }
    }
  
   else if (username == data.username){
    alert("User da ton tai") 
   }
  
   

}

/* đăng nhập */
function login() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(data == null){
        alert("Username không tồn tại")
    }
    else if(username ==data.username && password ==data.password){
        var json = JSON.stringify(username);
        localStorage.setItem('tam',json);
        window.location.href="index.html"
    }
    else if(username !=data.username || password !=data.password){
        alert("Tên hoặc mật khẩu không chính xác")
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


/*Đặt lại mật khẩu*/
/*var newpassword = document.getElementById("newpassword").value;
firebase.database.child("user").child("password").setvalue("newpassword");*/

// hiển thị username trong trang index
