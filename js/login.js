// console.log("Login.js file is loaded");

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    // console.log("Login button clicked"); 

    const phoneNumber = document.getElementById('phn-num').value;
    const pinNumber = document.getElementById('pin-num').value;

    console.log("Phone Number:", phoneNumber);
    console.log("Pin Number:", pinNumber);

    if(phoneNumber ==="15" && pinNumber==="1234"){
        console.log("Login Successful");
        window.location.href = "home.html";
    }else{
        alert("Invalid Phone Number or Pin");
    }
})