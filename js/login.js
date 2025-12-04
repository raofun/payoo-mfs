// console.log("Login.js file is loaded");

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log("Login button clicked"); 

    const phoneNumber = document.getElementById('phn-num').value;

    console.log("Phone Number:", phoneNumber);
})