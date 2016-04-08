(function () {
   'use strict';

   angular.module('people').config(peopleRoutes);

   peopleRoutes.$inject = ['$stateProvider'];

   function peopleRoutes($stateProvider) {
      //cuando el estado sea 's
      $stateProvider
         .state('people', {
            url: '/gente', // definimos el nombre de la url dependiendo del estado
            templateUrl: 'components/people/people.html', // use 'people.html' como plantilla
            controller: 'PeopleController', // asignamos 'peopleController' a la plantilla
            controllerAs: 'peopleCtrl' // alias de nuestro controlador
         });
   }

}());