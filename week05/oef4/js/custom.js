let memoryBlocks = document.getElementsByClassName("memory-block");
let found = document.getElementById("found");

var happytreefriends = ['cuddles', 'handy', 'giggles', 'lumpy', 'mime', 'monkey', 'nutty', 'pop'];

// duplicate the content of this array
var doublefriends = happytreefriends.concat(happytreefriends);

// shuffle the array
shuffle(doublefriends);
 
// initialize all blocks, put them in an array
var blocks = document.getElementsByClassName('memory-block');

// initialize url params
var urlPrefix = "./img/";
var urlSuffix = ".png";

// initialize an empty array that will contain the active blocks
var activeBlocks = [];


// loop through each block to add functionality
for(var i = 0; i < blocks.length; i++) {
  
  // combine url
  var url = urlPrefix + doublefriends[i] + urlSuffix;
  
  // add the background image to each block + add a class
  blocks[i].style.backgroundImage = 'url('+url+')';
  blocks[i].className += " " + doublefriends[i];
}
  for(i=0;i<memoryBlocks.length;i++){
    let block = memoryBlocks[i];
    block.addEventListener("click", function(){
        if(activeBlocks.length < 2){
            showBlock(block);

        }
        if(activeBlocks.length == 2){
            checkBlocks();
        }                
    });
}
function showBlock(block){
    if(activeBlocks.indexOf(block) < 0) {
        block.style.opacity = 1;
        
        activeBlocks.push(block);
      }    
}
function checkBlocks(){
    if(activeBlocks[0].className === activeBlocks[1].className){
        setTimeout(function(){
            addFound(activeBlocks[0].className);
            activeBlocks[0].className = "memory-found";
            activeBlocks[1].className = "memory-found";
            activeBlocks = [];
            
        },2000);
    }
    else{
        setTimeout(function(){uncheckBlocks()},2500);
        
    }
}
function uncheckBlocks(){
    for(i=0;i<memoryBlocks.length;i++){
        let block = memoryBlocks[i];
        block.style.opacity = 0;
    }
    activeBlocks = [];
}
function addFound(blockClass){
    let div = document.createElement("DIV");
    div.className = "small-found";
    console.log(blockClass.slice(13,20))
    div.style.backgroundImage = 'url(' + urlPrefix + blockClass.slice(13,20) + urlSuffix + ')';
    found.appendChild(div);
}
function shuffle(a) {
    var j, x, i; 
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}