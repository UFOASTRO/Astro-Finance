let signUpPage = document.getElementById("signUp");
let signInPage = document.getElementById("signIn");
let userName = document.getElementById("username-signup-input").value.trim();
let signupSwitch = document.getElementById("sign-up-btn-switch");
let signInSwitch = document.getElementById("sign-in-btn-switch");
let signInUpBtn = document.getElementById("sign-in-up-btn");

//store user information
function Bank() {
  this.Users = {};
  this.currentId = 0;
}

Bank.prototype.AssignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Bank.prototype.AddUser = function (User) {
  User.id = this.AssignId();
  this.Users[User.id] = User;
};
Bank.prototype.findAccount = function (id) {
  if (this.Users[id] !== undefined) {
    return this.Users[id];
  }
  return false;
};

function User(firstName, lastName, email, password, accountNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.password = password;
  this.email = email;
  this.balance = 20000;
  this.transactions = {};
  this.transactionId = 0;
  this.accountNumber = accountNumber;
}

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// ASK CHATGPT TO FIX
User.prototype.addTransaction = function (
  name,
  event,
  amount,
  _transactionType
) {
  this.transactionId++; // Increment the transaction ID

  const transaction = {
    id: this.transactionId,
    name: name,
    amount: amount,
    event: event,
    transactionType: _transactionType,
  };

  // Store the transaction using the transactionId as the key
  this.transactions[this.transactionId] = transaction;

  return transaction;
};

// User.prototype.findtransaction = function (id) {
//   if (this.transactions[id] !== undefined) {
//     return this.transactions[id];
//   }
//   return false;
// };

function SigInSuccess() {
  let HomePage = document.getElementById("main-container");
  let LoginPage = document.getElementById("login-signup");
  load();
  setTimeout(() => {
    LoginPage.style.display = "none";
    HomePage.style.display = "block";
    CreitedPrompt();
  }, 2000);
}


// displays all information  abot a user on the home page
function showAccount(Userid) {
  const account = bankAccount.findAccount(Userid);
  if (!account) {
    window.alert("Account not found.");
    return;
  }

  let AccountBalance = document.getElementById("accBalance");
  let fullnameDisplay = document.getElementById("fullname");
  let Template = document.getElementById("name");
  let accountNumberElement = document.getElementById("accountnum");

  Template.textContent = account.firstName.toUpperCase();
  fullnameDisplay.textContent = account.fullName().toUpperCase();

  const DisplayedaccountNumber = `${account.accountNumber}`; // Use 'const' for proper scoping

  function formatAccountNumber(accountStr) {
    // Add space between each digit
    let spacedDigits = accountStr.split("").join(" ");

    // Add four spaces after every four characters
    let formatted = spacedDigits.replace(/((?:\S+\s+){4})/g, "$1    ");

    return formatted.trim(); // Trim to remove any trailing spaces
  }

  const formattedAccountNumber = formatAccountNumber(DisplayedaccountNumber);
  accountNumberElement.textContent = formattedAccountNumber; // Update the correct element

  AccountBalance.textContent = `₦${account.balance.toLocaleString()}`;



}

// Variable to store the currently logged-in user's ID
let currentUserId = null;

function displayAccount() {
  Object.keys(bankAccount.Users).forEach(function (keys) {
    const account = bankAccount.Users[keys];

    let email = document.getElementById("email-input-signIn").value.trim();
    let password = document.getElementById("password-input").value.trim();

    if (account.password === password && account.email === email) {
      currentUserId = account.id;
      showAccount(currentUserId);
      LoginSuccessAnimate();
      SigInSuccess();
      // loading()
    }
    else {
      let LoginFailure = document.getElementById("unsuccessful");
      LoginFailure.style.display = "flex";
      setTimeout(() => {
        LoginFailure.style.display = "none";
      }, 2000);
    }
  });
}
// create a new bank object 
let bankAccount = new Bank();

console.log(bankAccount);

// displays the signup page
function signUp() {
  signUpPage.style.display = "block";
  signInPage.style.display = "none";
}
// displays the signin page
function signIn() {
  signUpPage.style.display = "none";
  signInPage.style.display = "block";
}

// Validates the signup details
function validate() {
  let userNameInput = document
    .getElementById("username-signup-input")
    .value.trim();
  let passwordInput = document
    .getElementById("password-signup-input")
    .value.trim();
  let userEmail = document.getElementById("email-input").value.trim();

  // ERROR MESSAGES FOR SIGNUPAGE
  const emailInvalidSnUp = document.getElementById("email-invalid-snUp");
  const usernameInvalidSnUp = document.getElementById("username-invalid-snUp");
  const passwordInvalidSnUp = document.getElementById("password-invalid-snUp");

  // Email validation
  if (
    userEmail == "" ||
    userEmail == null ||
    !userEmail.includes("@") ||
    userEmail.length < 14 ||
    !userEmail.includes(".com")
  ) {
    emailInvalidSnUp.textContent = "Invalid email adress";
    return false;
  } else {
    emailInvalidSnUp.textContent = "";
  }

  for (const account of Object.values(bankAccount.Users)) {
    if (account.email.toLowerCase() === userEmail.toLowerCase()) {
      document.getElementById("email-invalid-snUp").textContent =
        "Email address already exists";
      return false;
    }
  }

  // username validation
  if (userNameInput == "" || userNameInput == null) {
    usernameInvalidSnUp.textContent = "Please input a valid username";
    return false;
  } else {
    usernameInvalidSnUp.textContent = "";
  }

  // Password validation
  if (passwordInput == "" || passwordInput == null) {
    passwordInvalidSnUp.textContent = "Please input a valid Password";
    return false;
  }
  if (passwordInput.length < 8) {
    passwordInvalidSnUp.textContent = "Password must be at least 8 characters long";
    return false;
  } else {
    passwordInvalidSnUp.textContent = "";
  }

  return true;
}
function generateAccountNumber() {
  let accountNumber = Math.floor(Math.random() * 100000000000) + 100000000000;
  return accountNumber;
}
// adds inputed data on the signup form to the local storage
function addData() {
  if (validate()) {
    let userNameInput = document
      .getElementById("username-signup-input")
      .value.trim();
    let passwordInput = document
      .getElementById("password-signup-input")
      .value.trim();
    let userEmail = document.getElementById("email-input").value.trim();
    let LastnameInput = document.getElementById("lastname-input").value.trim();

    let newUser = new User(
      userNameInput,
      LastnameInput,
      userEmail,
      passwordInput,
      generateAccountNumber()
    );

    bankAccount.AddUser(newUser);
    console.log(newUser);
    console.log(bankAccount);

    showAccount(newUser.id);
    signIn();
    load();
  }
}

// checks if the userdata on the local storage matches with the data inputed in the signIn form
function LoginSuccessAnimate() {
  let LoginSuccess = document.getElementById("Login-successful");
  LoginSuccess.style.display = "flex";
  setTimeout(() => {
    LoginSuccess.style.display = "none";
    // Call the transfer function with the current user ID
    transfer(currentUserId);
    // Call the deposit function with the current user ID
    deposit(currentUserId);
  }, 2000);
}

function clearForm(firstInput, secondInput) {
  firstInput.value = "";
  secondInput.value = "";
}

// Transfer

function transfer(Userid) {
  const transferForm = document.getElementById("transfer-form");

  transferForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const account = bankAccount.findAccount(Userid);
    let currentBalance = account.balance;
    let recipientInput = document.getElementById("recipient").value.trim();
    let amountTransfer = parseFloat(
      document.getElementById("amountTransfer").value.trim()
    );

    // Validate amountTransfer
    if (isNaN(amountTransfer) || amountTransfer <= 0) {
      window.alert("Please input a valid transfer amount.");
      return;
    }

    // Validate recipientInput
    if (recipientInput.length < 12) {
      window.alert("Please input a valid account number.");
      return;
    }

    // Validate sufficient balance
    if (amountTransfer > currentBalance) {
      window.alert("Insufficient balance.");
      return;
    }

    // Perform the transfer
    account.balance -= amountTransfer; // Deduct from sender

    // Update the displayed account balance
    let AccountBalance = document.getElementById("accBalance");
    AccountBalance.textContent = `₦${account.balance.toLocaleString()}`;

    // Add transaction to account's transaction history
    const transaction = account.addTransaction(
      recipientInput,
      "Transfer",
      amountTransfer,
      "debit"
    );

    // Create a new transaction item element

    const transactionList = document.querySelector(".transaction-list");
    const newTransactionItem = document.createElement("div");
    newTransactionItem.classList.add("transaction-item", "expense");
    newTransactionItem.innerHTML = `
      <div class="transaction-details">
        <span class="transaction-date">${new Date().toDateString()}</span>
      </div>
      <div class="transactionSummary">
        <span><i class="fa-solid fa-arrow-right"></i> ${transaction.event
      }</span>
      </div>
      <div class="transaction-amount">-₦${transaction.amount.toLocaleString()}</div>
    `;

    // Append the new transaction item to the transaction list
    transactionList.prepend(newTransactionItem); // Use prepend to add it at the top

    // Show success message and clear the form
    TransactionSucess();
    setTimeout(() => {
      transferTab.style.display = "none";
      clearForm(
        document.getElementById("recipient"),
        document.getElementById("amountTransfer")
      ); // Clear the form inputs
    }, 2000);
  });
}

function deposit(Userid) {
  const depositForm = document.getElementById("deposit-form");

  depositForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const account = bankAccount.findAccount(Userid);
    let NameofCreditor = document.getElementById("NameofCreditor").value;
    let DepositTab = document.getElementById("DepositTab");
    let amountDeposit = parseFloat(
      document.getElementById("amountDeposit").value
    );

    // Validate amountTransfer
    if (isNaN(amountDeposit) || amountDeposit <= 0) {
      window.alert("Please input a valid transfer amount.");
      return;
    }

    let AccountBalance = document.getElementById("accBalance");

    account.balance += amountDeposit;

    AccountBalance.textContent = `₦${account.balance.toLocaleString()}`;

    const addTransaction = account.addTransaction(
      "notavailable",
      "DEPOSIT",
      amountDeposit,
      "credit"
    );
    // add to transaction history
    const transactionHistory = document.querySelector(".transaction-list");
    const newTransactionItem = document.createElement("div");
    newTransactionItem.classList.add("transaction-item", "credit");
    newTransactionItem.innerHTML = `
               <div class="transaction-details">
                  <span class="transaction-date">${new Date().toDateString()}</span>
                </div>
                <div class="transactionSummary">
                  <span><i class="fa-solid fa-plus"></i> Deposit</span>
                </div>
                <div class="transaction-amount" style="color="green">+₦${addTransaction.amount.toLocaleString()}
                </div> 
   `;
    // add new transactionItem to TransactionHistory
    transactionHistory.prepend(newTransactionItem);
    // Show success message and clear the form
    TransactionSucess();
    setTimeout(() => {
      DepositTab.style.display = "none";
      clearForm(
        document.getElementById("amountDeposit"),
        document.getElementById("NameofCreditor")
      );
    }, 2000);
  });
}
