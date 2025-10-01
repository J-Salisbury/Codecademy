//Global
let firstName = "Jessica"


//using a globa variable
function printName(){
    console.log(firstName);
}

printName();

// block scope - inside of a function

function storeLastName() {
    let lastName = "Salisbury";
}

//console.log(lastName); -- undefined, error

// Constant variables - variables that can't be changed

const middleName = 'Lynn';

//middleName = 'Shaq' --error: assigned to a constant variable