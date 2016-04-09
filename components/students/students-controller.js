(function () {
   'use strict';

   angular.module('students').controller('StudentsController', StudentsController);

   // para usar una fábrica siemplemente la inyectamos
   StudentsController.$inject = ['studentsFactory'];

   function StudentsController(studentsFactory) {

      var self = this;

      //self.students = studentsFactory.getStudents();
      studentsFactory.getStudents().then(function (result) {
          return result.data;
      }).then(function (students) {
         self.students = students;
      });
      
      self.deleteStudent = deleteStudent;
      
      function deleteStudent(student) {
         var index = self.students.indexOf(student);
         self.students.splice(index, 1);
      }



   }

}());