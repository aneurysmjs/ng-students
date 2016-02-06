(function () {
   'use strict';

   angular.module('subjects').config(subjectsRoutes);

   subjectsRoutes.$inject = ['$stateProvider'];

   function subjectsRoutes($stateProvider) {
      $stateProvider
         .state('subjects', {
            templateUrl: 'components/subjects/subjects.html',
            controller: 'SubjectsController',
            controllerAs: 'subjectsCtrl'
         });
   }

}());