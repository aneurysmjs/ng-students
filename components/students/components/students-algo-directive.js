(function () {
   'use strict';

   angular.module('students').directive('studentsAlgo', studentsAlgo);

   studentsAlgo.$inject = [];

   function studentsAlgo() {

      return {
         restrict: 'A',
         link: link
      };


      function link(scope, element, attrs) {


         element.on('click', function (e) {
            alert('ohhh me hicieron click');
         })

      }

   }

}());