(function () {
   'use strict';

   angular.module('subjects').controller('SubjectsController', SubjectsController);

   SubjectsController.$inject = ['subjectsFactory'];

   function SubjectsController(subjectsFactory) {
      var self = this;

      self.subject = {};

      subjectsFactory.retrieveSubjects().then(function (response) {
         self.subjects = response;
      }, function (error) {

      });

      self.create = function create() {

         subjectsFactory.createSubject(self.subject).then(function (response) {

         }, function (error) {

         });
      };

      self.deleteSubject = function (student) {
         var index = self.subjects.indexOf(student);
         self.subjects.splice(index, 1);
      };

   }

}());