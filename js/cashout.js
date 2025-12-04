document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault();

    const cashoutAmount = document.getElementById('cashout-amount').value;
    const pinInput = document.getElementById('cashout-pin').value;

    if(pinInput === "1234"){
        const balance = document.getElementById('acc-balance').innerText;

        const newBalance = parseFloat(balance)-parseFloat(cashoutAmount);
        // console.log("New Balance:", newBalance);

        document.getElementById('acc-balance').innerText = newBalance;

    }else{
        alert("Invalid Pin");
        
    }

})