(function () {
   'use strict';

   angular.module('students').controller('StudentsController', StudentsController);

   StudentsController.$inject = ['studentsFactory'];

   function StudentsController(studentsFactory) {
      var self = this;

      self.curPage = 0;
      self.pageSize = 5;

      self.numberOfPages = numberOfPages;

      studentsFactory.retrieveData().then(function (response) {
         self.students = response;
      }, function (error) {

      });

      self.deleteStudent = function (student) {
         var index = self.students.indexOf(student);
         self.students.splice(index, 1);
      };

      function numberOfPages() {
         return Math.ceil(self.students.length / self.pageSize);
      }

   }

}());