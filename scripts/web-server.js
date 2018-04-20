var express = require('express');
var path = require('path');
var app = express();

//Treba nam body parser da parsuje request 
var bodyParser = require('body-parser');
//izvlacimo JSON iz request body
app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json())


//__dirname je promenljiva koja pokazuje na trenutni folder
//u nasem slucaju to je scripts folder u kojem se nalazi 
//nas web-server.js
// /../ - nas locira na root direktorij naše aplikacije
var rootPath = path.normalize(__dirname+'/../');

//sada kazemo expressu da opsluzuje stranice
//static() funkcija opsluzuje stranice u datom folderu koji se prosledi kao parametar
//bez da ih procesira
app.use(express.static(rootPath+'/app'));

//dodajem liniju koja saradjuje sa HTML 5 rutiranjem da se moze
//rutirati bez #
app.get('*',function(req,res)
        {
           res.sendFile(rootPath+'/app/index.html');
        });
app.listen(8000);
console.log('Listening on port 8000...');