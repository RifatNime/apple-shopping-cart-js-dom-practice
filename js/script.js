//Phone increase and decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
    /* const  productInput = document.getElementById('phone-number');
    const productNumber = productInput.value;
    productInput.value = parseInt(productNumber) + 1; */
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
    /* const  productInput = document.getElementById('phone-number');
    const productNumber = productInput.value;
    productInput.value = parseInt(productNumber) - 1; */
});
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false)
});
document.getElementById('airpod-plus').addEventListener('click', function(){
    updateProductNumber('case', 249, true);
});
document.getElementById('airpod-minus').addEventListener('click', function(){
    updateProductNumber('case', 249, false)
});


//not to repeat take function
function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product+"-number");//input id theke nissi
    let productNumber = productInput.value; //iput er value soman product number
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber; //setake abar soman kore dilam
    //product er total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal()
}

//value input nissi
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber; //return lagbe karon vhalue niye ase multiply korbo
}
function calculateTotal (){
    const phoneTotal = getInputValue('phone') * 1219;
    const airpodTotal = getInputValue('airpod') * 249;
    const caseTotal = getInputValue('case') * 59;
    subTotal = phoneTotal + airpodTotal + caseTotal;
    //tax nd total
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update total on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};
// remove items from cart
const removeItem = Array.from(document.getElementsByClassName("remove-item"));
for (const item of removeItem) {
  item.addEventListener("click", () => {
    const parent = item.parentNode.parentNode.parentNode.parentNode.parentNode;
    const child = item.parentNode.parentNode.parentNode.parentNode;
    parent.removeChild(child);
  });
}
const allClearButton = document.getElementById('all-clear-btn');

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click',function(){
    const code = document.getElementById('promo-input').value;

    if(code === fakeCode){
        const total = document.getElementById('total-price');
        let totalPrice= parseFloat(total.innerText);

        const discount = totalPrice * .2;

        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;//browser er inner text notun kore update korsi new discount price
        // total.value= '';
    }


    const pin = document.getElementById('promo-input').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == fakeCode){
        // console.log('yes');
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        const failError = document.getElementById('notify-fail');
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
    
    document.getElementById('promo-input').value = "";
});

// // all clear event 
// allClearButton.addEventListener('click',function (){
//     const shopItems = document.getElementsByClassName('item');
//     for(const shopItem of shopItems){
//         shopItem.style.display = 'none';
//     }
// })