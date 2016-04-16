(function () {
   'use strict';

   angular.module('students').config(studentsRoutes);

   studentsRoutes.$inject = ['$stateProvider'];

   function studentsRoutes($stateProvider) {

      $stateProvider
         .state('students', {
            url: '/estudiantes', // definimos el nombre de la url dependiendo del estado
            controller: ['students', function (students) {
               this.students = students;
            }],
            controllerAs: 'ctrl',
            template: '<students students-list="ctrl.students"></students>', // use 'students.html' como plantilla
            resolve: {
               students: ['studentsFactory', function (studentsFactory) {
                  return studentsFactory.getStudents().then(function (result) {
                     return result.data;
                  });
               }]
            }
         });
   }

}());