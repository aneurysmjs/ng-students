(function () {
   'use strict';

   angular.module('subjects').factory('subjectsFactory', subjectsFactory);

   subjectsFactory.$inject = ['API_URL', '$http', '$q'];

   function subjectsFactory(API_URL, $http, $q) {

      return {
         createSubject: createSubject,
         retrieveSubject: retrieveSubject,
         retrieveSubjects: retrieveSubjects,
         updateSubject: updateSubject,
         deleteSubject: deleteSubject,
         calcNotes: calcNotes
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

      function updateSubject(obj, id) {
         return $q(function (resolve, reject) {
            $http({
               method: 'PUT',
               url: API_URL + '/subjects/' + id + '.json',
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

      function deleteSubject(id) {
         return $q(function (resolve, reject) {
            $http({
               method: 'DELETE',
               url: API_URL + '/subjects/' + id + '.json'
            }).then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            });
         });
      }

      function calcNotes(subject) {
         return $q(function (resolve, reject) {
            var exam1 = parseFloat(subject.exam_1) || 0,
                exam2 = parseFloat(subject.exam_2) || 0,
                exam3 = parseFloat(subject.exam_3) || 0;

            var result = ((exam1 + exam2 + exam3) / 3);

            console.log('result');
            console.log(result);

            resolve(result);
         });

      }

   }

}());