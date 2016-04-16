(function () {
   'use strict';

   angular.module('students').directive('studentsTable', studentsTable);

   studentsTable.$inject = ['componentRoute'];

   function studentsTable(componentRoute) {

      return {
         scope: {},
         controller: [function StudentsTableController() {
            var self  = this;

            console.log('self');
            console.log(self);
         }],
         controllerAs: 'ctrl',
         bindToController: {
            studentsList: '='
         },
         restrict: 'E',
         templateUrl: componentRoute + 'studentsTable/studentsTable.html',
         compile: compile

      };

      function compile(tElement, tAttrs) {
         console.log('estoy en compile');
         return {
            pre: function (scope, element, attrs) {
               console.log('estoy en pre-link');
            },
            post: function (scope, element, attrs) {
               console.log('estoy en post-link');
            }
         }
      }

      /*function link(scope) {
         console.log('scope');
         console.log(scope);

      }*/


   }

}());