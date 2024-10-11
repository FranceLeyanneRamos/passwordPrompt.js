function askPassword() {

let correctPassword = "100405";
let password;
do {
    password = prompt("Enter your password:");
    if (password !== correctPassword) {
      alert("Incorrect, try again.");
    }
}   while (password !== correctPassword);
alert("Access granted.");
}