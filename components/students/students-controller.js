(function () {
   'use strict';

   // usando el método 'controller()' creamos un controlador
   angular.module('students').controller('StudentsController', StudentsController);

   // $inject es una anotación de dependencias a la hora de minificar nuestro código
   StudentsController.$inject = [];

   function StudentsController() {

      var self = this;

      self.students = [
         {
            "id":1,
            "gender":"Female",
            "first_name":"Barbara",
            "last_name":"Brooks",
            "email":"bbrooks0@sitemeter.com",
            "job_title":"Staff Scientist",
            "grade":"-0.37"
         }
      ];

   }

}());