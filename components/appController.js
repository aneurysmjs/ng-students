(function () {
   'use strict';

   angular.module('app').controller('AppController', AppController);

   AppController.$inject = ['appFactory'];

   function AppController(appFactory) {
      var self = this;

      appFactory.retrieveData().then(function (response) {
         self.students = response;
      }, function (error) {

      });

      self.deleteStudent = function (student) {
         var index = self.students.indexOf(student);
         self.students.splice(index, 1);
      };

   }

}());