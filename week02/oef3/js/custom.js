const places = ["Brussel", "Gent", "Brugge"];

for(i = 0; i < 3; i++){
    console.log(places[i]);
}

let woord = "";
for(i = 0; i < places.length; i++){
    woord = woord + places[i];
}
console.log(woord);