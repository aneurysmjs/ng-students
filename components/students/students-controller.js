(function () {
   'use strict';

   angular.module('students').controller('StudentsController', StudentsController);

   // para usar una fábrica siemplemente la inyectamos
   StudentsController.$inject = ['studentsFactory'];

   function StudentsController(studentsFactory) {

      var self = this;

      //self.students = studentsFactory.getStudents();
      studentsFactory.getStudents().then(function (result) {
         self.students = result;
      });
      
      console.log('self.students');
      console.log(self.students);


   }

}());