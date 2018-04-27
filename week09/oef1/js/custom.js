let button = document.getElementById("button");
let text = document.getElementById("text");
let body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function(){

    localStorage.setItem('mol',text.value);
    image();
})
let mol = localStorage.getItem('mol');
image();
function image(){
    if(mol != null){
        /*button.style.display = "none";
        text.style.display = "none";
        alert(mol + " is de mol");*/
        if(mol == "Arne"){
            body.style.backgroundImage = "url('./bodybackgreen.jpg')";
            
        }
        else{
            body.style.backgroundImage = "url('./bodybackred.jpg')";
            
        }
    }
}
