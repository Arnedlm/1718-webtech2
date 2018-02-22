var input = document.getElementById("someNumber").value;
var button = document.getElementById("showResult");

function isEqual(n){
    if(n % 2 == 0){
        return "Getal is even";
    }
    else{
        return "Getal is oneven";
    }
}

var result = isEqual(input);
button.addEventListener("click", function (){document.getElementById("oddOrEven").innerHTML = result});

