function Dog(breed,name,color,age,gender){
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.gender = gender;
    this.birthYear = function(age){
        var d = new Date().getFullYear();
        console.log(d);
        var y = d - this.age;
        console.log(y)
        return y;
    }
}

Dog.prototype.speak = function(line){
    return "De " + this.breed + " hond zegt '" + line +"'";
};

var a = new Dog("a","b","c",13,"e");
console.log(a.birthYear());
console.log(a.speak('Er klopt iemand op de deur'));