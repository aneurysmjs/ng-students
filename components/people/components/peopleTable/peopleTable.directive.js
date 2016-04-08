(function () {
   'use strict';

   angular.module('people').directive('peopleTable', peopleTable);

   peopleTable.$inject = [];

   function peopleTable() {

      return {
         scope: true,
         restrict: 'E',
         templateUrl: 'components/people/components/peopleTable/peopleTable.html'
      };

   }

}());