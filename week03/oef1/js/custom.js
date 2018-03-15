let b = document.getElementById("b");

function divide3or5(x,y){
    for(i=x;i<=y;i++){
        if(i%3 != 0 && i%5 != 0){
        document.write(i);
        }
        if(i % 3 == 0){
            document.write("bitter");
        }
        if(i % 5 ==0){
            document.write("bal");
        }
        document.write("<br>");
    }
}
b.addEventListener("click", function(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    
    divide3or5(n1, n2);
})

