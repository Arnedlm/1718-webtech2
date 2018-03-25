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

getJSON('https://www.booknomads.com/api/v0/isbn/9789000035526', function(error, data){

  if(error) {  
    // do something here
    return false;
  }

  for(let i = 0; i < data.length; i++) {
    
            // current parking object
            let isbn = data[i];
    
            // do magic here
            
            
        }



})
  

  