let button = document.getElementById("button");
let text = document.getElementById("text");

function pluralizer(dier, aantal){
    let result = aantal + " " + dier + "s";
    
    return result;
}

button.addEventListener("click", function(){
    let inputText = document.getElementById("inputText").value;
    let inputNumber = document.getElementById("inputNumber").value;
    
    text.innerHTML = pluralizer(inputText,inputNumber)}, false)