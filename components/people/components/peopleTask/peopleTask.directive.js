(function () {
   'use strict';

   angular.module('people').directive('peopleTask', peopleTask);

   peopleTask.$inject = [];

   function peopleTask() {

      return {
         restrict: "E",
         scope: {
            logTask: "&"
         },
         template: '<input type="text" ng-model="task">' +
                     ' {{task}}' +
                  ' <div class="btn btn-default" ng-click="logTask({task:task})">I\'m done!</div>'
      };

   }

}());