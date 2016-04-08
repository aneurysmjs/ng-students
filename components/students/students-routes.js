(function () {
   'use strict';

   angular.module('students').config(studentsRoutes);

   studentsRoutes.$inject = ['$stateProvider'];

   function studentsRoutes($stateProvider) {
      //cuando el estado sea 's
      $stateProvider
         .state('students', {
            url: '/estudiantes', // definimos el nombre de la url dependiendo del estado
            templateUrl: 'components/students/students.html', // use 'students.html' como plantilla
            controller: 'StudentsController', // asignamos 'StudentsController' a la plantilla
            controllerAs: 'studentsCtrl' // alias de nuestro controlador
         });
   }

}());