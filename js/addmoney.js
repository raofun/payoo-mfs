document.getElementById('btn-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('add-ad-money').value;
    const pinInput = document.getElementById('input-pin').value;

    if(pinInput === "1234"){
        const balance = document.getElementById('acc-balance').innerText;

        const newBalance = parseFloat(balance)+parseFloat(addMoney);
        console.log("New Balance:", newBalance);

        document.getElementById('acc-balance').innerText = newBalance;

    }else{
        alert("Invalid Pin");
    }
})