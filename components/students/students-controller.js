(function () {
   'use strict';

   angular.module('students').controller('StudentsController', StudentsController);

   // para usar una fábrica siemplemente la inyectamos
   StudentsController.$inject = ['studentsFactory', 'students'];

   function StudentsController(studentsFactory, students) {

      var self = this;

     self.students = students;
      
      self.deleteStudent = deleteStudent;
      
      function deleteStudent(student) {
         var index = self.students.indexOf(student);
         self.students.splice(index, 1);
      }


   }

}());