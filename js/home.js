document.getElementById('btn-show-cashout').addEventListener('click',function(){
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('addmoney-form').classList.add('hidden');
    document.getElementById('random-card').classList.add('hidden');
})

document.getElementById('btn-show-addmoney').addEventListener('click',function(){
    document.getElementById('addmoney-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('random-card').classList.add('hidden');
})