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

getJSON('https://www.booknomads.com/api/v0/isbn/9789059406148', function(error, data){

  if(error) {  
    // do something here
    return false;
  }

  let img = document.getElementById("bookImage");
  let titel = document.getElementById("bookTitle");
  let auteur = document.getElementById("bookAuthor");
  let descrip = document.getElementById("bookDescription");

  img.src = data.CoverThumb;
  titel.textContent = data.Title;
  auteur.textContent = data.Authors.Name;
  



})
  

  