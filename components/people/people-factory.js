(function () {
   'use strict';

   angular.module('people').factory('peopleFactory', peopleFactory);


   peopleFactory.$inject = ['$http'];

   function peopleFactory($http) {

      return {
         getPeople: getPeople
      };

      function getPeople() {
         //$http.get('http://localhost');
         
         
         
         return $http.get('server/people.json').then(function (response) {
            return response;
         }, function (error) {

         });

      }

   }

}());