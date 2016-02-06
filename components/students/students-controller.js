(function () {
   'use strict';

   angular.module('students').controller('StudentsController', StudentsController);

   StudentsController.$inject = ['studentsFactory'];

   function StudentsController(studentsFactory) {
      var self = this;

      studentsFactory.retrieveData().then(function (response) {
         self.students = response;
      }, function (error) {

      });

      self.deleteStudent = function (student) {
         var index = self.students.indexOf(student);
         self.students.splice(index, 1);
      };

   }

}());