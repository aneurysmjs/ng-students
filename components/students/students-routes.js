(function () {
   'use strict';

   angular.module('students').config(studentsRoutes);

   studentsRoutes.$inject = ['$stateProvider'];

   function studentsRoutes($stateProvider) {
      $stateProvider
         .state('students', {
            templateUrl: 'components/students/students.html',
            controller: 'StudentsController',
            controllerAs: 'studentsCtrl'
         });
   }

}());