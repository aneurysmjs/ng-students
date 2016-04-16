(function () {
   'use strict';

   angular.module('students').controller('StudentsController', StudentsController);

   // para usar una fábrica siemplemente la inyectamos
   StudentsController.$inject = ['studentsFactory'];

   function StudentsController(studentsFactory) {

      var self = this;
      
      console.log('self');
      console.log(self);

     //self.students = students;
      
      self.deleteStudent = deleteStudent;
      
      function deleteStudent(student) {
         var index = self.students.indexOf(student);
         self.students.splice(index, 1);
      }


   }

}());