
let StoredUsername = localStorage.getItem("Username");
let StoredLastname = localStorage.getItem("Lastname");
const accountnum = document.getElementById("accountnum");
let transferTab = document.getElementById("transferTab");
let DepositTab = document.getElementById("DepositTab");
let hideTabBtn = document.querySelector(".x-mark");
let HideDepositTab = document.getElementById("HideDepositTab");
let depositshowbtn = document.getElementById("depositshowbtn");
let Transfershowbtn = document.getElementById("Transfershowbtn");


// clear form 
function clearForm(Inputone, Inputtwo) {
    Inputone.textContent = "";
    Inputtwo.textContent = "";
}

//  loader
function load() {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.classList.add("loader--hidden");
    }, 2000)
}

load()

// cursor bg
const cursorBg = document.getElementById("cursorbg");
document.addEventListener("pointermove", (e) => {
    cursorBg.style.display = "block";
    cursorBg.animate(
        {
            top: e.pageY + "px",
            left: e.pageX + "px",
        },
        { duration: 10, fill: "forwards" }
    );
});


function logout() {
    let HomePage = document.getElementById("main-container");
    let LoginPage = document.getElementById("login-signup");
    let logout = document.getElementById("logout");

    logout.addEventListener("click", () => {
        HomePage.style.display = "none";
        LoginPage.style.display = "flex";
    });
}

logout()


// function hidecardDetails() {
//     let hidecardDetails = document.getElementById("hidecardDetails");
//     let showcardDetails = document.getElementById("showcardDetails");
//     hidecardDetails.textContent = "Show";
//     accountnum.textContent = " ****       ****        ****      ****";
//     let AccountBalance = document.getElementById("accBalance");
//     AccountBalance.textContent = `₦ ****`;
//     hidecardDetails.style.display = "none";
//     showcardDetails.style.display = "block";

// }
// function showCardDetails(){
//     accountnum.textContent = " ****       ****        ****      ****";
//     let AccountBalance = document.getElementById("accBalance");
//     AccountBalance.textContent = `₦ ${account.balance}`;
// }

// TRANSFER DISPLAY/ HIDE TAB
// hide and show tabs
function showTab(button, TabName) {
    button.addEventListener("click", () => {
        TabName.style.display = "block";
    });
}

function hideTab(button, TabName) {
    button.addEventListener("click", () => {
        TabName.style.display = "none";
    });
}
showTab(Transfershowbtn, transferTab);
showTab(depositshowbtn, DepositTab);

hideTab(hideTabBtn, transferTab);
hideTab(HideDepositTab, DepositTab);


function CreitedPrompt() {
    const confetti = document.getElementById("confetti")
    const credited = document.querySelector(".credited")
    setTimeout(() => {
        credited.style.display = "none";
    }, 3000)
    setTimeout(() => {
        confetti.style.display = "none";
    }, 4000)
}


// TRANSFER MONEY
function TransactionSucess() {
    let TransactionSucess = document.getElementById("Transaction-succesful");
    TransactionSucess.style.display = "flex";
    setTimeout(() => {
        TransactionSucess.style.display = "none";
    }, 2000);
}