
        // Log Out button
        document.getElementById('btn-logout').addEventListener('click', function() {
            if (confirm('Are you sure you want to log out?')) {
                console.log('Logging out...');
                // Add your logout logic here
                window.location.href = 'index.html';
            }
        });

       

        // Add Money functionality
        document.getElementById('btn-add-money').addEventListener('click', function(event){
            event.preventDefault();

            // const addMoney = document.getElementById('add-money-input').value;
            const addMoney = getInputFieldValueByID('add-money-input');
            // const pinAddMoney = document.getElementById('pin-addmoney').value;
            const pinAddMoney = getInputFieldValueByID('pin-addmoney');

            if(isNaN(addMoney) || addMoney <= 0){
                alert("Please enter a valid amount to Add Money");
                return;
            }

            if(pinAddMoney === 1234){
                // getting current balance
                const currentBalance = getTextElementValueByID('account-balance')

                const newBalance = currentBalance + addMoney;
                document.getElementById('account-balance').innerText = newBalance;


                const p = document.createElement('p');
                p.innerText = `Added Money: ${addMoney}Tk `;
                document.getElementById('transactionList').appendChild(p);
            }
            else{
                alert("Invalid Pin for Adding Money");
            }
        });

        // Cash Out functionality
        document.getElementById('btn-cash-out').addEventListener('click', function(event){
            event.preventDefault();

            const cashOutMoney = getInputFieldValueByID('cash-out-input');
            const pinCashOut = getInputFieldValueByID('pin-cashout');

            if(isNaN(cashOutMoney) || cashOutMoney <= 0){
                alert("Please enter a valid amount to Cash Out");
                return;
            }

            if(pinCashOut === 1234){
                // getting current balance
                const currentBalance = getTextElementValueByID('account-balance');

                if(cashOutMoney > currentBalance){
                    alert("Insufficient Balance");
                    return;
                }

                const newBalance = currentBalance - cashOutMoney;
                document.getElementById('account-balance').innerText = newBalance;

                const p = document.createElement('p');
                p.innerText = `Cashed Out: ${cashOutMoney}Tk `;
                document.getElementById('transactionList').appendChild(p);
            }
            else{
                alert("Invalid Pin for Cash Out");
            }
        });