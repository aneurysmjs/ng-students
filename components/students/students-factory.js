(function () {
   'use strict';

   // así como 'controller()' crea controladores, usamos factory()' para crear una fábrica
   angular.module('students').factory('studentsFactory', studentsFactory);

   studentsFactory.$inject = ['$q', '$http'];

   function studentsFactory($q, $http) {

      var students = [
         {
            "id":1,
            "gender":"Female",
            "first_name":"Barbara",
            "last_name":"Brooks",
            "email":"bbrooks0@sitemeter.com",
            "job_title":"Staff Scientist",
            "grade":"-0.37"
         }
      ];

      // simplemente retornamos un objeto con los métodos que vayamos a implementar
      return {
         getStudents: getStudents
      };

      function getStudents() {
        /* var deferred = $q.defer();

         deferred.resolve(students);

         return deferred.promise;*/

         return $q(function (resolve, reject) {

            $http.get('server/MOCK_DATA.json').then(function (response) {
               console.log('response');
               console.log(response);
               resolve(response.data);
            });
            //resolve(students);
         });
      }

   }

}());