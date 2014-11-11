
var dir = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./function.js')

mymodule(dir , ext, function(err, data){
   if(err)
      return console.error('There was an error: ', err)
   data.forEach(function(file){
      console.log(file);
   })
})