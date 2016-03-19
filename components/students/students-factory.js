(function () {
   'use strict';

   angular.module('students').factory('studentsFactory', studentsFactory);


   studentsFactory.$inject = [];

   function studentsFactory() {

      var students =  [
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

      return {
         name: 'fábrica',
         getStudents: getStudents

      };

      function getStudents() {
         return students;
      }

   }

}());