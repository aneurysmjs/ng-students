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
         templateUrl: componentRoute + 'studentsTable/studentsTable.html'
      };


   }

}());