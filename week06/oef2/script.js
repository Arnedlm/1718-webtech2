let parent = document.getElementById("recipes");


// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// get json data
getJSON('https://evelienrutsaert.github.io/recourses/recipes.json', function(error, data) {
    // show error
    if(error) {  
        // do something here
        return false;
    }

    for(let i = 0; i < data.length; i++) {
        
                // current parking object
                let recipe = data[i];
        
                // do magic here
                makeDiv(parent,recipe);
                
            }
});

function makeDiv(parent,recipe){
    //kolomstructuur
    let div = document.createElement('DIV');
    div.className = "col-4";
    parent.appendChild(div);

        //card
        let card = document.createElement('DIV');
        card.className = "card";
        div.appendChild(card);

        
            //image
            let img = document.createElement('IMG');
            img.className = "card-img-top";
            img.src = recipe.image;
            img.alt = "afbeelding recept";
            card.appendChild(img);

            //card block        
            let cardBlock = document.createElement('DIV');
            cardBlock.className = "card-block";
            card.appendChild(cardBlock);

                //card title
                let name = document.createElement('H4');
                name.className = "card-title";
                cardBlock.appendChild(name);

                let title = document.createTextNode(recipe.name);
                name.appendChild(title);

                //portions
                let portions = document.createElement('DIV');
                portions.className = "badge";
                cardBlock.appendChild(portions);

                let portionsText = document.createTextNode("Porties: " + recipe.portions);
                portions.appendChild(portionsText);;

                //card ingredients title
                let cardIngredientsTitle = document.createElement('DIV');
                cardIngredientsTitle.className = "text-bold";
                cardBlock.appendChild(cardIngredientsTitle);

                let ingredientsTitle = document.createTextNode("Ingredienten");
                cardIngredientsTitle.appendChild(ingredientsTitle);

                //card ingredients
                let cardIngredients = document.createElement('DIV');
                cardIngredients.className = "card-ingredients";
                cardBlock.appendChild(cardIngredients);

                let ingredients = document.createTextNode(recipe.ingredients);
                cardIngredients.appendChild(ingredients);

                //card text title
                let cardTextTitle = document.createElement('DIV');
                cardTextTitle.className = "text-bold";
                cardBlock.appendChild(cardTextTitle);

                let textTitle = document.createTextNode("Bereidingswijze");
                cardTextTitle.appendChild(textTitle);

                //card text
                let cardText = document.createElement('DIV');
                cardText.className = "card-text";
                cardBlock.appendChild(cardText);

                let text = document.createTextNode(recipe.directions);
                cardText.appendChild(text);

}