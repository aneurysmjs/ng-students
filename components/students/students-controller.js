(function () {
   'use strict';

   // usando el método 'controller()' creamos un controlador
   angular.module('students').controller('StudentsController', StudentsController);

   // $inject es una anotación de dependencias a la hora de minificar nuestro código
   StudentsController.$inject = ['studentsFactory'];

   function StudentsController(studentsFactory) {

      var self = this;

      self.nombre = 'jero';

      self.edad = 89;

      self.student = {};

      var numero = 78;



      studentsFactory.getStudents().then(function (promise) {
         self.students = promise;
      });


      self.salude = salude;
      self.enviar = enviar;

      function privada() {
         console.log(self.edad);
      }

      function salude(texto) {
         privada();
      }

      function enviar() {
         self.student.id = self.students.length;
         self.students.push(self.student);
      }


   }

}());