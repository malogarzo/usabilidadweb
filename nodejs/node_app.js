//05/03/2015
//NodeJs
/******************/

//Express
/******************/

//Express permite funcionalidades como, sesiones, dispone de once middleware, disponde de parsers diversos, rutas, listeners, helpers, métodos que permiten respuestas, etc.

//Para instalar Express, dentro del dir de nuestra app, a través del comando Express + nombreProyecto.

//Todas las app cuentan con su package.json que contiene todas las dependencias necesarias de la app.

//App.js
/******************/

//Posee una estructura interna bien definida:

//Lo que hace aquí es, se requiere los módulos o archivos externos para ejecutar la app que en este caso es el mismo Express.
var express = require('express');

//En route se encuentran detalladas todas las rutas disponibles.
var routes = require('./routes');

//Crea el servidor y se le asigna a la variable app.
//Se lo exporta para que esté disponible para su uso
var app = module.exports = express.createServer;

//Configuración
/******************/

//Aquí se definen los aspectos mas importantes para el funcionamiento de nuestra app. A esto se lo conoce como middleware.

//Se define el directorio donde se encuentran las vistas de la aplicación y el motor o lenguaje en el que está escrito su código.

//También se define el bodyParser y el methodOverwritte mediante app.use

//bodyParser se encarga de decodificar la información que recibimos de un socket cliente y lo expone 
//en cada una de las request mediante request.body

//methodOverwritte provee soporte para algunos métodos http.
//También se utiliza el router de Express que permite estructurar nuestro código en forma sencilla,
//y por último se define el middleware de archivos estáticos con los directorios donde se encuentran
//los archivos públicos.

app.configure(function(){
	app.set('views', __dirname + 'views');
	app.set('viewengine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverwritte());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});


//En el código definido arriba, se observa una configuración global

app.configure('personalizada', function(){

})


//Personalizada es una variable global, es decir que será pasada en el momento de ser
//ejecutado el programa.
//Aquí es donde se definen los ambientes más comunes que son el de desarrollo, que es el que está
//por default y el de producción.

//Rutas
/******************/

//Las rutas son una parte importante de nuestra aplicación.
//Si las rutas no existiesen no habría interfaz para el usuario.
//En este caso, se generó automáticamente una dirección routes y allí fueron definidas

app.get('/', routes.index);

//Una ruta se especifica del siguiente modo

/* app.VERBO(path, accion); */

//Los verbos pueden ser, GET, POST, PUT, DELETE

//path, define la dirección de acceso
//accion, define lo que se tiene que hacer


