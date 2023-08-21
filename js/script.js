// The products add to cart when click on
let totalPrice = 0; // declared outside for access from both function
function addToCart(productNameId, priceId){
    const productName = document.getElementById(productNameId).innerText;
    const productPrice = parseFloat(document.getElementById(priceId).innerText);
    // Product Name shows in the cart
    const cart = document.getElementById('cart');
    const cartItem = document.createElement('p');
    const countChild = cart.childElementCount;
    cartItem.innerHTML = `${countChild + 1}. ${productName}`;
    cart.appendChild(cartItem);
    // Total price field
    const totalElement = document.getElementById('total-price');
    totalPrice += productPrice;
    totalElement.innerText = totalPrice.toFixed(2);
    // enable purchase button
    const purchaseBtn = document.getElementById('purchase-btn');
    if(totalPrice > 0){
        purchaseBtn.disabled = false;
    }
    // Pay total
    const payTotalElemnt = document.getElementById('pay-total');
    payTotalElemnt.innerText = totalPrice.toFixed(2);

    // Coupon code offer (buy products above 200 tk, get 20% off using a code)
    const applyBtn = document.getElementById('apply-btn');
    if(totalPrice >= 200){
        applyBtn.disabled = false;
    }
}

// 20% discount claim
document.getElementById('apply-btn').addEventListener('click', function(){
    const applyBtn = document.getElementById('apply-btn');
    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value;
   
    // Condition check
    if(couponInputValue == 'SELL200'){
            applyBtn.classList.add('bg-purple-500');
            applyBtn.innerText = 'Applied';
            // 20% discount off
            const discount20 = 20 * (totalPrice / 100);
            const discountElemnt = document.getElementById('discount');
            discountElemnt.innerText = discount20.toFixed(2);
            // Pay total
            const payTotalElemnt = document.getElementById('pay-total');
            payTotalElemnt.innerText = (totalPrice - discount20).toFixed(2);
    }else{
        alert('Invalid coupon!');
    }

    // Empty value after click
    couponInput.value = '';
    
})

// Purchase popup
document.getElementById('purchase-btn').addEventListener('click', function(){
    const purchasePopup = document.getElementById('purchase-popup');
    purchasePopup.style.top = '50%';
    // overlay
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
})