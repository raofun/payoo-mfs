document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phn-num').value;
    const pinNumber = document.getElementById('pin-num').value;
    console.log(phoneNumber,  pinNumber);

    if(phoneNumber === "5" && pinNumber === "1234"){
        console.log("Login Successful");
        window.location.href = "home.html";
    }else{
        alert("Invalid Phone Number or Pin");
    }
});