(function () {
   'use strict';

   angular.module('shared').filter('pagination', pagination);

   pagination.$inject = [];

   function pagination() {
      return function (input, start) {
         start = +start;
         return input.slice(start);
      };
   }

}());