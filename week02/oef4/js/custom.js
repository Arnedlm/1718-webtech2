const button = document.getElementById("button");
let titel = document.getElementById("titel");
let uitslag;
button.addEventListener("click", function(){
    
    let input = parseInt(document.getElementById("input").value);
    

switch(true){
    case (input < 68 && input > 50):
    uitslag = "Geslaagd op voldoende wijze";
    
    break;
    case (input >= 68 && input < 77):
    uitslag = "Geslaagd met onderscheiding";
    break;
    case (input >= 77 && input < 85):
    uitslag = "Geslaagd met grote onderscheiding";
    break;
    case (input >= 85 && input < 90):
    uitslag = "Geslaagd met grootste onderscheiding";    
    break;
    case (input >= 90):
    uitslag = "Geslaagd met grootste onderscheiding en de gelukwensen van de examencommissie";    
    break;
    default:
    uitslag = "Niet geslaagd";
    console.log(input);
    break;
}
titel.innerHTML = uitslag});