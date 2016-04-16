(function () {
   'use strict';

   var studentsTable = {
      transclude: true,
      controller: [function StudentsTableController() {
         var self  = this;
         console.log('self');
         console.log(self);
      }],
      bindings: {
         studentsList: '='
      },
      templateUrl: 'components/students/components/studentsTable/studentsTable.html'

   };

   angular.module('students').component('studentsTable', studentsTable);



}());