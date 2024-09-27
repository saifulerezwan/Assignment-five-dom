

document.getElementById('btn-donation').addEventListener('click', function () {
    addClass('btn-donation');
    removeClass('btn-history');
    document.getElementById('my-transection-history').classList.add('hidden');
    document.getElementById('donet-cards').classList.remove('hidden')


})



document.getElementById('btn-history').addEventListener('click', function () {
    addClass('btn-history');
    removeClass('btn-donation');
    document.getElementById('donet-cards').classList.add('hidden');
    document.getElementById('my-transection-history').classList.remove('hidden');

})



let btnNoakhali = document.getElementById('d-noakhali');

btnNoakhali.addEventListener('click', function () {
    let mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    let noakhaliDonetValue = document.getElementById('noakhali-input-value').value;
    let noakhaliBalance = document.getElementById('noakhali-balance').innerText;
    let balance = parseFloat(noakhaliBalance);
    let donetValue = parseFloat(noakhaliDonetValue);

    if(donetValue > 0 && balance < mainBalance && isNaN(noakhaliDonetValue) == false ){
        document.getElementById('noakhali-balance').innerText = balance + donetValue;
        document.getElementById('main-balance').innerText = mainBalance - donetValue;
        let myDiv = document.createElement('div');
        myDiv.innerText = `you donate ${donetValue} BDT`;
        let history = document.getElementById('my-transection-history');
        history.appendChild(myDiv)
        alert('congrats ! you donate humankind')
    }else{
        alert("please enter any number")
    }

    

})

let btnFeni = document.getElementById('d-feni');

btnFeni.addEventListener('click', function () {
    let mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    let feniDonetValue = document.getElementById('feni-input-value').value;
    let feniBalance = document.getElementById('feni-balance').innerText;
    let balance = parseFloat(feniBalance);
    let donetValue = parseFloat(feniDonetValue);

    if(donetValue > 0 && balance < mainBalance && isNaN(feniDonetValue) == false ){
        document.getElementById('feni-balance').innerText = balance + donetValue;
        document.getElementById('main-balance').innerText = mainBalance - donetValue;
        let myDiv = document.createElement('div');
        myDiv.innerText = `you donate ${donetValue} BDT`;
        let history = document.getElementById('my-transection-history');
        history.appendChild(myDiv)
        alert('congrats ! you donate humankind')
    }else{
        alert("please enter any number")
    }

   


})



function addClass(id) {
    document.getElementById(id).classList.add('bg-lime-300');

}

function removeClass(id) {
    document.getElementById(id).classList.remove('bg-lime-300')

}