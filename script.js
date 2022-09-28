const menu = document.querySelector('.mobileMenu');
const mobNav = document.querySelector('.menuList');
const icon = document.querySelector('.menumenu');
const cartDee = document.querySelector('.cartDetails');
const cartIcon = document.querySelector('.cart');
const addToCarts = document.querySelectorAll('#cartBtn');
const pickOrder = document.querySelector('.emptyCart');
const clozCart = document.querySelector('.closeCart');



menu.addEventListener('click', () => {
    mobNav.classList.toggle("active");
    //mobNav.style.display = "block"
    icon.classList.toggle("bx-x");
});

mobNav.addEventListener("click", () => {
    mobNav.classList.remove("active");
    icon.classList.remove("bx-x");
});

cartIcon.addEventListener('click', openCart); 

function openCart() {
    cartDee.classList.toggle("active");
    //addFunct()
};

clozCart.addEventListener('click', () => {
    cartDee.classList.remove("active");
});

// Add to Cart
const iCont = document.querySelector('.carted');
const cartCard = document.querySelector('.cartDetails');
const nameIt = document.querySelector('.nameItem');
const priceIt = document.querySelector('.howMuch');
// const delBttns = document.querySelectorAll('.delBtn');
const itemCont = document.querySelector('#itemContainer');



addToCarts.forEach((addToCart, i) => {
    addToCart.addEventListener('click', addFunct)
});


function addFunct(e) {
        
    const activeBtn = e.target;
    const parentElement = activeBtn.parentElement;
    const nameIt = parentElement.querySelector(".itemName").innerHTML;
    const priceIt = parentElement.querySelector(".itemPrice").innerHTML;

    addCart(nameIt, priceIt);
    handleUpdate();
    pickOrder.innerHTML = " ";
};



function addCart(nameIt, priceIt) {
    //console.log("added")
    const listDiv = document.createElement('div') ;
    listDiv.className ="newCla";

    const checkNames = document.querySelectorAll(".nameItem");
    let a = false;
    let checker = [...checkNames].find((cn) => cn.innerHTML == nameIt);
    if (checker !== undefined) {
        alert("Already Selected, Increase item on cart" );

        return;
    }

    //console.log(listDiv);
        
    const cartContent = `
        <div class="nameItem">${nameIt}</div>
        <input type="number" value="1" class="howMany" min="1">
        <div class="howMuch">${priceIt}</div>
        <button class="delBtn">Remove</button>
    `;
    listDiv.innerHTML = cartContent;
    listDiv.style.display = "flex";
        
    itemCont.append(listDiv);
    
    const delBttn = listDiv.querySelector('.delBtn');
    delBttn.addEventListener("click", removeHandler);

    const qtyChange = listDiv.querySelector(".howMany");
    qtyChange.addEventListener("change", handleUpdate);
      //handleUpdate(); 
};

// function updateQuantity(e) {
//     const qtyChange = e.target;
//     qtyChange.value = isNaN(qtyChange.value) ? 1 : qtyChange.value;
//     handleUpdate();
// }

function handleUpdate() {
    total = 0;

    const cartRows = document.querySelectorAll(".newCla");
    const cartTotal = document.querySelector("#totalPriz");

    cartRows.forEach((cartRow) => {
        const qtyDiv = cartRow.querySelector('.howMany');
        const praezDiv = cartRow.querySelector('.howMuch');

        const praez = Number(praezDiv.textContent.replace("$", ""));
        const quantity = qtyDiv.value;
        
        total = total + quantity * praez;
        cartTotal.innerHTML = `$ ${total.toFixed(2)}`
    })
}




function removeHandler(e) {

    const remuver = e.target;
    remuver.parentNode.remove();
    handleUpdate();
};




//console.log(delBtn);