(function () {
   'use strict';

   angular.module('subjects').factory('subjectsFactory', subjectsFactory);

   subjectsFactory.$inject = ['API_URL', '$http', '$q'];

   function subjectsFactory(API_URL, $http, $q) {

      return {
         createSubject: createSubject,
         retrieveSubject: retrieveSubject,
         retrieveSubjects: retrieveSubjects
      };

      function createSubject(obj) {
         return $q(function (resolve, reject) {
            $http({
               method: 'POST',
               url: API_URL + '/subjects',
               data: {
                  subject: obj
               }
            }).then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });
         });
      }

      function retrieveSubject(id) {
         return $q(function (resolve, reject) {
            $http({
               method: 'GET',
               url: API_URL + '/subjects' + id + '.json'
            }).then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });
         });
      }

      function retrieveSubjects() {
         return $q(function (resolve, reject) {
            $http({
               method: 'GET',
               url: API_URL + '/subjects.json'
            }).then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });
         });
      }

   }

}());