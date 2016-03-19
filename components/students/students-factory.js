(function () {
   'use strict';

   // guía mejores práctivas de john papa
   // https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

   // patrones de diseño
   // https://mgechev.github.io/angularjs-in-patterns/

   // tero parvianen
   // http://teropa.info/

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