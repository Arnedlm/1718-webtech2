let calculate = document.getElementById("btnCalculate");

let bricksYellow = document.getElementsByClassName('brick brick-yellow');
let bricksBlack = document.getElementsByClassName('brick brick-black');
let bricksOrange = document.getElementsByClassName('brick brick-orange');
let bricksBlue = document.getElementsByClassName('brick brick-blue');

let wall1 = document.getElementById("wall-1-amountstones");
let wall2 = document.getElementById("wall-2-amountstones");
let wall3 = document.getElementById("wall-3-amountstones");
let wall4 = document.getElementById("wall-4-amountstones");

let cost1 = document.getElementById("cost-yellow");
let cost2 = document.getElementById("cost-black");
let cost3 = document.getElementById("cost-orange");
let cost4 = document.getElementById("cost-blue");
let costTotal = document.getElementById("cost-total");

let max = 0;

calculate.addEventListener("click", function(){
    countStones();
    biggestWall2();
    smallestWall2();
    calculatePrice();
});

function addStone(kleur, nummer){

    //create brick
    let brick = document.createElement('div')
    let brickClass = 'brick brick-' + kleur;
    brick.className = brickClass;
    
    //add brick to wall
    let wall = document.getElementById('wall-' + nummer);
    wall.appendChild(brick);
    
}
function deleteStone(kleur, nummer){
    let wall = document.getElementById('wall-' + nummer);
    let bricks = document.getElementsByClassName('brick brick-' + kleur);
    
    console.log(bricks.length)
    if(bricks.length != 0){
        wall.removeChild(bricks[0]);
    }
    if(bricks.length == 0){
        alert("De muur is volledig gesloopt");
    }
    
    console.log(bricks.length)
}
function countStones(){
    wall1.innerHTML = bricksYellow.length + plural(bricksYellow.length);
    wall2.innerHTML = bricksBlack.length + plural(bricksBlack.length);
    wall3.innerHTML = bricksOrange.length + plural(bricksOrange.length);
    wall4.innerHTML = bricksBlue.length + plural(bricksBlue.length);
}
function plural(n){
    if(n > 1 || n == 0){
        return " stenen";
    }
    else{
        return " steen";
    }
}
function biggestWall(){
    let biggestWall = document.getElementById("wall-biggest");

    if(bricksYellow.length > bricksBlack.length &&
    bricksYellow.length > bricksOrange.length &&
    bricksYellow.length > bricksBlue.length
    ){
        biggestWall.innerHTML = "Muur 1";
    }
    else if(bricksBlack.length > bricksYellow.length &&
    bricksBlack.length > bricksOrange.length &&
    bricksBlack.length > bricksBlue.length
    ){
        biggestWall.innerHTML = "Muur 2";
    }
    else if(bricksOrange.length > bricksYellow.length &&
    bricksOrange.length > bricksBlack.length &&
    bricksOrange.length > bricksBlue.length
    ){
        biggestWall.innerHTML = "Muur 3";
    }
    else if(bricksBlue.length > bricksYellow.length &&
    bricksBlue.length > bricksBlack.length &&
    bricksBlue.length > bricksOrange.length
    ){
        biggestWall.innerHTML = "Muur 4";
    }
}
function smallestWall(){
    let smallestWall = document.getElementById("wall-smallest");
    
        if(bricksYellow.length < bricksBlack.length &&
        bricksYellow.length < bricksOrange.length &&
        bricksYellow.length < bricksBlue.length
        ){
            smallestWall.innerHTML = "Muur 1";
        }
        else if(bricksBlack.length < bricksYellow.length &&
        bricksBlack.length < bricksOrange.length &&
        bricksBlack.length < bricksBlue.length
        ){
            smallestWall.innerHTML = "Muur 2";
        }
        else if(bricksOrange.length < bricksYellow.length &&
        bricksOrange.length < bricksBlack.length &&
        bricksOrange.length < bricksBlue.length
        ){
            smallestWall.innerHTML = "Muur 3";
        }
        else if(bricksBlue.length < bricksYellow.length &&
        bricksBlue.length < bricksBlack.length &&
        bricksBlue.length < bricksOrange.length
        ){
            smallestWall.innerHTML = "Muur 4";
        }
}
function calculatePrice(){
    let price1 = bricksYellow.length * 2.00;
    let price2 = bricksBlack.length * 7.50;
    let price3 = bricksOrange.length * 9.00;
    let price4 = bricksBlue.length * 0.30;
    let priceTotal = price1 + price2 + price3 + price4;

    cost1.innerHTML = "€ " + price1.toFixed(2);
    cost2.innerHTML = "€ " + price2.toFixed(2);
    cost3.innerHTML = "€ " + price3.toFixed(2);
    cost4.innerHTML = "€ " + price4.toFixed(2);
    costTotal.innerHTML = "€ " + priceTotal.toFixed(2);
}
function biggestWall2(){
    let biggestWall = document.getElementById("wall-biggest");

    max = 0;
    if(bricksYellow.length > max){
        max = bricksYellow.length;
    }
    if(bricksBlack.length > max){
        max = bricksBlack.length;
    }
    if(bricksOrange.length > max){
        max = bricksOrange.length;
    }
    if(bricksBlue.length > max){
        max = bricksBlue.length;
    }
    let gelijk = 0;
    biggestWall.innerHTML = "";
    if(bricksYellow.length == max){
        biggestWall.innerHTML = "Muur 1";
        gelijk++;
    }
    if(bricksBlack.length == max){
        if(biggestWall.innerHTML.length > 0){
            biggestWall.innerHTML += " - ";
            gelijk++;
        }
        biggestWall.innerHTML += "Muur 2";
    }
    if(bricksOrange.length == max){
        if(biggestWall.innerHTML.length > 0){
            biggestWall.innerHTML += " - ";
            gelijk++;
        }
        biggestWall.innerHTML += "Muur 3";
    }
    if(bricksBlue.length == max){
        if(biggestWall.innerHTML.length > 0){
            biggestWall.innerHTML += " - ";
            gelijk++
        }
        if(gelijk == 4){
            biggestWall.innerHTML = "Allemaal even groot";
        }
        else{
            biggestWall.innerHTML += "Muur 4";
        }
    }
}
function smallestWall2(){
    let smallestWall = document.getElementById("wall-smallest");

    let min = max;
    console.log(min)
    if(bricksYellow.length < min){
        min = bricksYellow.length;
    }
    if(bricksBlack.length < min){
        min = bricksBlack.length;
    }
    if(bricksOrange.length < min){
        min = bricksOrange.length;
    }
    if(bricksBlue.length < min){
        min = bricksBlue.length;
    }
    let gelijk = 0;
    smallestWall.innerHTML = "";
    if(bricksYellow.length == min){
        smallestWall.innerHTML = "Muur 1";
        gelijk++;
    }
    if(bricksBlack.length == min){
        if(smallestWall.innerHTML.length > 0){
            smallestWall.innerHTML += " - ";
            gelijk++;
        }
        smallestWall.innerHTML += "Muur 2";
    }
    if(bricksOrange.length == min){
        if(smallestWall.innerHTML.length > 0){
            smallestWall.innerHTML += " - ";
            gelijk++;
        }
        smallestWall.innerHTML += "Muur 3";
    }
    if(bricksBlue.length == min){
        if(smallestWall.innerHTML.length > 0){
            smallestWall.innerHTML += " - ";
            gelijk++;
        }
        if(gelijk == 4){
            smallestWall.innerHTML = "Allemaal even groot";
        }
        else{
            smallestWall.innerHTML += "Muur 4";
        }
    }
}