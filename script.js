
// Initialize heads and tails counters
let heads = 0;
let tails = 0;

// Select elements from the HTML
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

// Event listener for the flip button
flipBtn.addEventListener('click', ()=>{
    // Generate a random number (0 for heads, 1 for tails)
    let i = Math.floor(Math.random()*2);

    // Temporarily disable the coin animation
    coin.style.animation = "none";

    if(i){
        // If i is 1, animate heads side
        setTimeout(()=> {
            coin.style.animation = "spin-heads 3s forwards";
        },100);
        heads++;
    }else{
        // If i is 0, animate tails side
        setTimeout(()=>{
            coin.style.animation = "spin-tails 3s forwards";
        },100)
        tails++;
    }
    console.log(i);

    // Update statistics and disable buttons temporarily

    setTimeout(updateStats, 3000);
    disableButton();
});

// Function to update statistics on the screen

function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads :${heads}`;
    document.querySelector("#tails-count").textContent = `Tails :${tails}`;
}

// Function to disable buttons temporarily
function disableButton(){
    flipBtn.disabled = true;
    resetBtn.disabled = true
    setTimeout(()=> {
        flipBtn.disabled = false;
        resetBtn.disabled = false;
    },3000);
}

// Event listener for the reset button

resetBtn.addEventListener("click",()=>{
    // Reset animation and counters
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
})
