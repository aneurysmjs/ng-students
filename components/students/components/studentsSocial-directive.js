(function () {
   'use strict';

   angular.module('students').directive('studentsSocial', studentsSocial);

   studentsSocial.$inject = [];

   function studentsSocial() {

      return {
         restrict: 'E',
         template: '<h1>hablamelo</h1>',
         link: link
      };

      function link(scope, element, attrs) {

         element.on('click', function (e) {

         })

      }

   }

}());