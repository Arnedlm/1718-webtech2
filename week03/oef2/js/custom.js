var popcorn = 7;
var burger = 3;
var donuts = 8;

let input1 = document.getElementById("result1");
let input2 = document.getElementById("result2");
let input3 = document.getElementById("result3");

input1.value = popcorn + popcorn + popcorn;
input2.value = popcorn + burger + burger;
input3.value = donuts + burger + donuts;


let correctSolution = burger + (donuts/2) * popcorn;
console.log(correctSolution);
let button = document.getElementById("check");

button.addEventListener("click", function()
{
    let userSolution = parseInt(document.getElementById("result4").value);
    
    console.log(userSolution);
    if(userSolution == correctSolution){
        window.alert("Yes!");
    }
    else{
        window.alert("No!");
    }
})


