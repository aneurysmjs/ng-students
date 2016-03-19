(function () {
   'use strict';

   // usando el método 'controller()' creamos un controlador
   angular.module('students').controller('StudentsController', StudentsController);

   // $inject es una anotación de dependencias a la hora de minificar nuestro código
   StudentsController.$inject = [];

   function StudentsController() {

      var self = this;

      self.osito = 'bubbu';


      self.students = [
         {
            "id":1,
            "gender":"Female",
            "first_name":"Barbara",
            "last_name":"Brooks",
            "email":"bbrooks0@sitemeter.com",
            "job_title":"Staff Scientist",
            "grade":"-0.37"
         },
         {
            "id":2,
            "gender":"Male",
            "first_name":"Martha",
            "last_name":"Gómes",
            "email":"martha@gomez.com",
            "job_title":"publicista",
            "grade":"5"
         }
      ];


      self.salude = salude;
      self.enviar = enviar;

      function salude(texto) {

      }

      function enviar(firts_name, last_name) {
         console.log('me has enviado tio');
      }


   }

}());