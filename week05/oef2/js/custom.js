function Book(title,author,alreadyRead){
    this.title = title;
    this.author = author;
    this.alreadyRead = function(alreadyRead){
        if(alreadyRead == true){
            return 'Ja las reeds het boek "' + this.title + '" door ' + this.author;
        }
        else{
            return 'Je moet het boek "' + this.title + '" door ' + this.author + ' nog steeds lezen';
        }
    }
}
var potter = new Book("Harry Potter","J.K. Rowling",false);
var eyre = new Book("Jane Eyre","Charlotte Brontë",true);


console.log(potter.title);
console.log(potter.author);
console.log(potter.alreadyRead());
console.log(eyre.title);
console.log(eyre.author);
console.log(eyre.alreadyRead());