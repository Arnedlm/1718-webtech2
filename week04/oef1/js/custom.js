let link = document.getElementsByTagName("a");
let bold = document.getElementsByTagName("strong");
let span = document.getElementsByTagName("span");

link[0].addEventListener("mouseover", function(){
    bold[0].style.color = randomColor();
    bold[1].style.color = randomColor();

    span[0].style.color = randomColor();
    span[1].style.color = randomColor();
    link[0].style.backgroundColor = 'pink';
})
link[0].addEventListener("mouseout", function(){
    bold[0].style.color = '';
    bold[1].style.color = '';

    span[0].style.color = '';
    span[1].style.color = '';
    link[0].style.backgroundColor = '';
})

function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}