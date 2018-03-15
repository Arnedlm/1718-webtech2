let random = Math.floor(Math.random() * 100) + 1;

function drawMountain(length){
    document.write("/")
    for(i=0;i<=length;i++){
        document.write("'");
    }
    document.write("\\")
}
function drawFlatArea(length){
    
    for(i=0;i<=length;i++){
        document.write("_");
    }
    
}
function drawLandscap(length,type){
    switch(type){
        case type = "flat":
        for(i=0;i<=length;i++){
            document.write("_");
        }
        break;
        case type = "mountain":
        document.write("/")
        for(i=0;i<=length;i++){
            document.write("'");
        }
        document.write("\\")
        break;
    }
}
/*
let interval = setInterval(function(){
    timer += 1;
    
    let random = Math.floor(Math.random() * 100) + 1;
    
if(random %2 == 0){
    drawLandscap(random,"flat");
}
else{
    drawLandscap(random,"mountain");
}
},100000);
if(timer == 5){clearInterval(interval)}
*/
window.location.reload(false);
setInterval(function(){
    var randomTrueFalse = Math.random() <= 0.5;
    var randomBetween = Math.floor(Math.random()*4) + 1;

    if(randomTrueFalse == true){
        drawMountain(randomBetween);
    }
    else{
        drawFlatArea(randomBetween);
    }
}, 1000);