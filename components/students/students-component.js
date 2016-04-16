(function () {
   'use strict';

   var students = {
      controller: 'StudentsController',
      bindings: {
         studentsList: '='
      },
      templateUrl: 'components/students/students.html'

   };

   angular.module('students').component('students', students);



}());