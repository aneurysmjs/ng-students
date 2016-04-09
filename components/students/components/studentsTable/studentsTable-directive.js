(function () {
   'use strict';

   angular.module('students').directive('studentsTable', studentsTable);

   studentsTable.$inject = ['componentRoute'];

   function studentsTable(componentRoute) {

      return {
         scope: true,
         restrict: 'E',
         templateUrl: componentRoute + 'studentsTable/studentsTable.html'
      };


   }

}());