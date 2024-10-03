function checkout(){
    alert("proceed to check out");
    
}
// checkout()
let cartList = {};
// cartList = JSON.parse(localStorage.getItem('cart'))
console.log(cartList);
let cartElement = document.getElementById('cart');

if(localStorage.getItem('cart')){
    cartList = JSON.parse(localStorage.getItem('cart'));
}
else{
    cartElement.innerHTML = `
            <p class="d-flex justify-content-center mt-5 fs-1 fw-normal">Your Cart is Empty</p>
            <a href="index.html" class="text-decoration-none text-dark d-flex justify-content-center mb-5"><button type="button" class="btn btn-outline-dark ms-2"><i class="fa-solid fa-arrow-left"></i> Continue Shopping </button></a>
    `;

}

for(let id in cartList){
    let item = cartList[id];
    console.log(item);

    // item list
    let col1 = document.createElement('div');
        col1.setAttribute('class','col-lg-8 col-sm-12 mb-5');
    console.log(col1);

    let itemDiv = document.createElement('div');
        itemDiv.setAttribute('class','me-4 border rounded-2 flex-wrap');
    console.log(itemDiv);

    let h5 = document.createElement('h5');
        h5.setAttribute('class','border-bottom p-2 bg-light rounded-top');
    let h5Text = document.createTextNode('Item List')
        h5.appendChild(h5Text);
    // console.log(h5);
    console.log(itemDiv);
    

    // summary list
    let col2 = document.createElement('div');
        col2.setAttribute('class','col-lg-4 col-sm-12');
    console.log(col2);

    let summaryDiv = document.createElement('div');
        summaryDiv.setAttribute('class','summary border rounded-2')
    // console.log(summaryDiv);
    
    let h5Summary = document.createElement('h5');
        h5Summary.setAttribute('class','border-bottom p-2 bg-light rounded-top')
    console.log(h5Summary);
    
    let h5SumText = document.createTextNode('Order Summary');
        h5Summary.appendChild(h5SumText)

    

    col1.appendChild(itemDiv)
    itemDiv.appendChild(h5)
    cartElement.appendChild(col1)
    col2.appendChild(summaryDiv)
    summaryDiv.appendChild(h5Summary)
    cartElement.appendChild(col2)

    console.log(cartElement);
    
}
