
<!--BUGS ENCOUNTERED AND FIXES IMPLEMENTED -->

<!-- ## ADD LOADING SCREEN (completed)
## ADD IF USERNAME IS LONGER THAN 7 CHARACTERS (completed)
## ADD IF USERNAME IS (completed)
## make home page and logiin page hide and show  (completed)  
## add username firstname+lastname AND DISPLAY ON THE CARD (completed)
## balacnce should also change  (completed)
## hide and show card details  (completed)
## add select transfer category to form  (completed)


## add pin validation (not implemented)
## but you need a form to choose a pin  // or you could use password saved (not implemented)
## recent transactions should be updated as well  *(completed)
## make the login form store data in objects rather than local storage so when you acess on the main page you access with the key and value (completed)
## THE USER SHOULD BE ABLE TO LOGIN .. USER DATA SHOULD BE STORED AIN A CONSTRUCTOR UPON SIGN UP  (completed)
## THE USER DATA SHOULD BE VALIDATED FOR SIGNIN , IF IT MATCHES WITH WHAT IS STORED IN A CONSTRUCTOR THEN LOGIN (completed)
## WHILE IN THE USER BALANCE AND ALL THE TRANSACTION HISTORY SHOULD BE STORED IN ONE CONSTRUCTOR (completed)
## SUBDIVIDED THE CONSTRUCTOR SHOULD CONTAIN ANOTHER CONSTRUCTOR FOR STORING THE TRANSACTIONS HISTORY
## add in validation so two users cant have the same email.
## STORE A USER WITH THIER GENERATED ACOOUNT NUMBER 

## transaction is not stored based on the current id 


SOLUTION 
----------
TRANSACTION IS STORED IN THE CURRENT ID so when you want it to display it should only display the transactions in the transaction {} object , transaction id ?

when we want to show tranasction history it should show only the transactions of the current logged in user ,
all the tranastions are stored with a transaction id inside a transactions object for each user 

1:User{
    transactions{
        1:transactionId{"transfer","-$20"}
        2:transactionId{"transfer","-$20"}
    }
}

so when we want to access a user tranasaction history to display , we need to first access the current logged in userId using (UserId)
i think it should be in the show account function (show all information about an account)
//output 1
then access the current user transactions object **transactions{}**
from there we will display the all the users transaction by id 
**transactionId** one by one 
so there should be a template for displaying each value of the tranasction id 


the tranasction history of who is logged in to show. 
so when a transaction is made it should be stored to the userid||||||


loop through each id and check if the user exsist , if it does 

 -->
# Bank App

## Overview

This Bank app provides users with basic banking functionalities such as account creation, login, deposit, and fund transfer. The app maintains user data and transaction history in memory, allowing operations like deposits, transfers, and account balance retrieval. It is built using JavaScript, HTML, and CSS.

## Features

### 1. User Signup
- Users can sign up for an account by providing their first name, last name, email, and password.
- The system automatically generates a unique account number for each user.
- Initial account balance is set to ₦20,000.
- Email validation ensures that each email is unique and properly formatted.

### 2. User Login
- Users can log in by providing their registered email and password.
- Upon successful login, the user is redirected to the account dashboard where their account information, including name, account number, and balance, is displayed.
- Failed login attempts are handled by displaying appropriate error messages.

### 3. Account Information Display
- After logging in, users can view their full name, formatted account number, and account balance.
- The app formats the account number for better readability.

### 4. Transaction History
- The app records all transactions (deposits and transfers) with details like transaction type, amount, recipient/sender, and date.
- Users can view their transaction history displayed in real-time in the app interface.


### 5. Deposit Funds
- Users can deposit money into their account.
- Deposits update the user's account balance and the transaction is added to the user's transaction history.
- A success message is displayed after a successful deposit.

### 6. Fund Transfer
- Users can transfer money to other accounts by providing a valid recipient account number and transfer amount.
- The app validates that the user has sufficient funds and that the recipient account number is valid.
- Upon successful transfer, the user’s balance is updated and a record of the transaction is stored in the transaction history.

### 7. Form Validation
- The app validates user inputs during signup and login, ensuring that valid information is provided before proceeding.
- During signup, it checks for valid email formats, unique email addresses, and a password that meets the minimum length requirement.
- During transfer, it validates recipient account numbers and transfer amounts.

### 🐛BUGS 
- **Transaction history not functioning properly when users switch account ❌**

## Functionalities

### Bank Class
The `Bank` class stores all user data and handles user operations.

- **Users**: An object to store registered users.
- **currentId**: A counter to assign unique IDs to users.
- **AssignId()**: Generates a unique ID for each user.
- **AddUser(User)**: Adds a new user to the bank system.
- **findAccount(id)**: Finds and returns a user account by their ID.

### User Class
The `User` class represents each user with personal and account details.

- **firstName**: The first name of the user.
- **lastName**: The last name of the user.
- **email**: The user's email address.
- **password**: The user's password.
- **accountNumber**: The generated account number for the user.
- **balance**: The user's account balance (initialized at ₦20,000).
- **transactions**: An object to store user transactions.
- **transactionId**: A counter for tracking each transaction.
- **fullName()**: Returns the full name of the user.
- **addTransaction(name, event, amount, transactionType)**: Records a transaction with details like event type (transfer/deposit), amount, and the type (debit/credit).


### Forms and Validations
- **Signup Form**: Displays error messages if the email format is invalid, the password is too short, or the username is empty.
- **Login Form**: Checks if the entered email and password match any registered user.
- **Transfer Form**: Validates the recipient account number, ensures sufficient funds, and records the transfer.
- **Deposit Form**: Records the deposit and updates the balance.

### DOM Manipulation Functions
- **signUp()**: Displays the signup page.
- **signIn()**: Displays the signin page.
- **validate()**: Validates signup inputs such as email, username, and password.
- **addData()**: Adds a new user to the system after validating inputs during signup.
- **showAccount(Userid)**: Displays the user's account information.
- **LoginSuccessAnimate()**: Displays success messages upon login, transfer, or deposit.
- **transfer(Userid)**: Handles the fund transfer process.
- **deposit(Userid)**: Handles the deposit process.

## How to Use

1. **Sign Up**  
   Navigate to the signup page, fill in the required details, and click the signup button. The app will validate your input, create a new account, and generate an account number.

2. **Login**  
   On the login page, enter your email and password to access your account.

3. **Deposit**  
   After logging in, navigate to the deposit tab, enter the amount you wish to deposit, and click submit. Your balance will be updated accordingly.

4. **Transfer**  
   To transfer funds, go to the transfer tab, enter the recipient’s account number and the amount, and click submit. The transfer will be processed if all validations pass.

## Future Enhancements
- Adding Transfering between accounts.
- Fixing transaction history bug.
- Loading screen.

## Technologies Used
- JavaScript (ES6)
- HTML5
- CSS3

## Setup and Installation
1. Clone the repository or download the source code.
2. Open the `index.html` file in your browser to start using the Bank app.
