(function () {
   'use strict';
   // 'app' módulo raíz de la aplicación aqui van a ir todas las dependencias y módulos que hagan parte
   // 'ui.router' es el módulo que tenemos que inyectar para poder crear nuestras rutas
   // 'students' es el módulo de estudiantes que también hay que inyectar para poder usarlo


   angular.module('app', ['ui.router', 'students']);

}());