(function () {
   'use strict';

   // guía mejores práctivas de john papa
   // https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

   // patrones de diseño
   // https://mgechev.github.io/angularjs-in-patterns/

   // tero parvianen
   // http://teropa.info/

   angular.module('students').factory('studentsFactory', studentsFactory);


   studentsFactory.$inject = ['$http'];

   function studentsFactory($http) {

      return {
         getStudents: function getStudents() {
            return $http.get('server/MOCK_DATA.json').then(function (response) {
               return response.data;
            });
         }

      };

   }

}());