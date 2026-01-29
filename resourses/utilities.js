// function getInputFieldValueByID(){
//     const addMoney = document.getElementById('add-money-input').value;
// }
function getInputFieldValueByID(id){
    const inputValue = parseFloat(document.getElementById(id).value);

    return inputValue;
}

function getTextElementValueByID(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    
    return textValue;
}

