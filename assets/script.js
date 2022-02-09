
console.log('JavaScript code has loaded!')


let yourName = "Joram Obbus" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let overallTotal = gb + cc + sugar

function updateTotal(displayQuantity){
    console.log('cookie')
let total = document.querySelector('#qty-total')
total.textContent = overallTotal
}

function updateQuantity(displayQuantity){
    let gb = document.querySelector('#qty-gb');
    gb.textContent = displayQuantity
}
function updateQuantity2(displayQuantity){
    let cc = document.querySelector('#qty-cc');
    cc.textContent = displayQuantity
}

function updateQuantity3(displayQuantity){
    let sugar = document.querySelector('#qty-sugar');
    sugar.textContent = displayQuantity
}

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`


// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    gb++; 
    overallTotal++;
    updateQuantity(`${gb}`);
    updateTotal()
});

gbMinusBtn.addEventListener('click',function(e){
    if (gb > 0 ){
        gb--;
        overallTotal--;
        updateQuantity(`${gb}`);
        updateTotal()
    }

})


ccPlusBtn.addEventListener('click', function(e) {
    cc++;
    overallTotal++;
    updateQuantity2(`${cc}`);
    updateTotal()
});

ccMinusBtn.addEventListener('click',function(e){
    if (cc > 0 ){
        cc--;
        overallTotal--;
        updateQuantity2(`${cc}`);
        updateTotal()
    }

})

sugarPlusBtn.addEventListener('click', function(e) {
    sugar++;
    overallTotal++;
    updateQuantity3(`${sugar}`);
    updateTotal()
});

sugarMinusBtn.addEventListener('click',function(e){
    if (sugar > 0 ){
        sugar--;
        overallTotal--;
        updateQuantity3(`${sugar}`);
        updateTotal()
    }

})





// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons