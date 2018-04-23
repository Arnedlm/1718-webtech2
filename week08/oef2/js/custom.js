let btn = document.getElementById("button");

btn.addEventListener("click", function(){
    let color = document.querySelector('input[name="color"]:checked');

    /*
    if(color){btn.className = 'btn ' + color.value;} else{btn.className = 'btn ' + 'btn-warning'; }
    */

    //literal en expression
    btn.className = `btn ${color ? color.value : btn.className = 'btn-warning'}`;
});
