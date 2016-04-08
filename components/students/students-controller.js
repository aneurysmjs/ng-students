(function () {
   'use strict';

   // usando el método 'controller()' creamos un controlador
   angular.module('students').controller('StudentsController', StudentsController);

   // $inject es una anotación de dependencias a la hora de minificar nuestro código
   StudentsController.$inject = ['studentsFactory', 'version'];

   function StudentsController(studentsFactory, version) {

      console.log('version');
      console.log(version);

      var self = this;

      self.version = version;

      self.osito = 'bubbu';

      self.student = {};


      //self.notes = [1,2,3,4,5,6,7,8,9,10,11,12];

      console.log('studentsFactory');
      console.log(studentsFactory);


      self.students = studentsFactory.getStudents();


      self.salude = salude;
      self.enviar = enviar;

      function salude(texto) {

      }

      function enviar() {


         self.student.id = self.students.length;

         self.students.push(self.student);
      }


   }

}());