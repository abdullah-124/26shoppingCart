function updateProduct(product, price, isIncreasing){
    const productInt = document.getElementById(product + '-number');
    let pdtNumber = parseInt(productInt.value);
    if(isIncreasing == true){
        pdtNumber = productInt.value = pdtNumber + 1;
    }
    else if(pdtNumber > 0){
        pdtNumber = productInt.value = pdtNumber - 1;
    }
    productInt.value = pdtNumber;
    const produtPrice = document.getElementById(product + '-total'); 
    produtPrice.innerText = pdtNumber * price;
    calculateTotal();
}
function getIntValue(product){
    const pdtInt = document.getElementById(product + '-number');
    const pdtNumber = parseInt(pdtInt.value);
    return pdtNumber;
}

function calculateTotal(){
    const phoneTotal = getIntValue('phone') * 1219;
    const caseTotal = getIntValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = Math.round(subTotal / 95);
    const totalPrice = subTotal + tax;
    // console.log(subTotal);
    //udate on html
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
}
//phone event handlar
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone', 970, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
   updateProduct('phone', 970 , false)
    
})
// case event handlar
document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case',5, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct('case',5, false);
})
