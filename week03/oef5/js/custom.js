const secretPassword = 'maxcolombie';

let input = prompt("Geef wachtwoord");
let amountTries = 1;
/*if(input === secretPassword){
    
}*/

while(input !== secretPassword){
    amountTries++;
    input = prompt("Geef wachtwoord");
}
document.write("Welkom")
document.write(amountTries);