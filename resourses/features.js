// Card Selector and Form Display Logic
const addMoneyCard = document.getElementById('addMoneyCard');
const cashoutCard = document.getElementById('cashoutCard');
const addMoneyForm = document.getElementById('addMoneyForm');
const cashOutForm = document.getElementById('cashOutForm');
const latestPaymentSection = document.getElementById('latestPaymentSection');
const serviceCards = document.querySelectorAll('.service-card');
const transactionsCard = document.querySelector('[data-section="transactions"]');
const transactionSection = document.getElementById('transactionSection');


// Tab switching between Add Money and Cash Out
addMoneyCard.addEventListener('click', function () {
    // Remove active from all cards
    serviceCards.forEach(card => card.classList.remove('active'));
    // Add active to this card
    addMoneyCard.classList.add('active');

    // Show Add Money form, hide others
    addMoneyForm.style.display = 'block';
    cashOutForm.style.display = 'none';
    latestPaymentSection.style.display = 'none';

});

cashoutCard.addEventListener('click', function () {
    // Remove active from all cards
    serviceCards.forEach(card => card.classList.remove('active'));
    // Add active to this card
    cashoutCard.classList.add('active');

    // Show Cash Out form, hide others
    cashOutForm.style.display = 'block';
    addMoneyForm.style.display = 'none';
    latestPaymentSection.style.display = 'none';

});

transactionsCard.addEventListener('click', function () {
    serviceCards.forEach(card => card.classList.remove('active'));

    transactionsCard.classList.add('active');

    transactionSection.style.display = 'block';
    addMoneyForm.style.display = 'none';
    cashOutForm.style.display = 'none';
    latestPaymentSection.style.display = 'none';
});