(function () {
   'use strict';

   angular.module('students').factory('studentsFactory', studentsFactory);

   studentsFactory.$inject = ['$http', '$q'];

   function studentsFactory($http, $q) {

      return {
         retrieveData: retrieveData
      };

      function retrieveData() {
         return $q(function (resolve, reject) {
            $http({
               method: 'GET',
               url: 'http://localhost:63342/ng-students/server/MOCK_DATA.json'
            }).then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });
         });
      }

   }

}());