function Recept(name, portions, ingredients){
    this.name = name;
    this.portions = portions;
    this.ingredients = ingredients;
    this.toSting
}
var chocomousse = new Recept("Chocomousse",20,["suiker","eieren","room","chocolade"]);

console.log(chocomousse.name);
console.log( "Porties: " + chocomousse.portions);
console.log("Ingrediënten: ");
for(i=0;i<chocomousse.ingredients.length;i++){
    console.log(chocomousse.ingredients[i]);
}
