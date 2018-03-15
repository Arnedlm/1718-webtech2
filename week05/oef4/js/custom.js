let memoryBlocks = document.getElementsByClassName("memory-block");

for(i=0;i<memoryBlocks.length;i++){
    let block = memoryBlocks[i];
    block.addEventListener("click", function(){
        
        showBlock(block);
    });
}
function showBlock(block){
    console.log(block.style.opacity);
    block.style.opacity = 1;
    console.log(block.style.opacity);
    
}