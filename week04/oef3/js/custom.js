var happytreefriends = ['cuddles', 'handy', 'giggles', 'lumpy', 'mime', 'monkey', 'nutty', 'pop'];

// duplicate the content of this array
var doublefriends = happytreefriends.concat(happytreefriends);

var urlPrefix = "https://rogerthat.be/images/praktijk5/";
var urlSuffix = ".png";

blocks[i].style.backgroundImage = 'url('+url+')';
blocks[i].className += " " + doublefriends[i];

let memoryBlocks = document.getElementsByClassName("memory-block");

for(i=0;i<memoryBlocks.length;i++){
    let block = memoryBlocks[i];
    block.addEventListener("click", function(){
        
        showBlock(block);
    });
}
function showBlock(block){
    console.log(block.style.opacity);
    block.style.opacity = 0.9;
}