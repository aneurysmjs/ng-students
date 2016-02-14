(function () {
   'use strict';

   angular.module('subjects').controller('SubjectsController', SubjectsController);

   SubjectsController.$inject = ['subjectsFactory', '$timeout'];

   function SubjectsController(subjectsFactory, $timeout) {
      var self = this;

      self.subject = {};
      self.updating = false;

      init();

      function init() {
         subjectsFactory.retrieveSubjects().then(function (response) {
            self.subjects = response;
         }, function (error) {

         });
      }

      self.createSubject = createSubject;
      self.currentSubject = currentSubject;
      self.deleteSubject = deleteSubject;
      self.calcNotes = calcNotes;

      function createSubject() {
         if (self.subject.id) {
            subjectsFactory.updateSubject(self.subject, self.subject.id).then(function (response) {
               init();
               self.notification = response.notification;
               $timeout(function () {
                  self.notification = null;
               }, 1300);
            }, errorHandler);

         } else {
            subjectsFactory.createSubject(self.subject).then(function (response) {
               init();
               self.notification = response.notification;
               $timeout(function () {
                  self.notification = null;
               }, 1300);
            }, errorHandler);
            self.updating = false;
         }
      }

      function currentSubject(subject) {
         self.subject = subject;
         self.updating = true;
      }

      function deleteSubject(student) {
         var index = self.subjects.indexOf(student);
         subjectsFactory.deleteSubject(student.id).then(function (response) {
            self.notification = response.notification;
            $timeout(function () {
               self.notification = null;
            }, 1300);
            self.subjects.splice(index, 1);
         }, errorHandler);
      }

      function calcNotes(subject) {
         subjectsFactory.calcNotes(subject).then(function (result) {
            self.subject.average = result;
         });
      }

      function errorHandler(error) {
         self.error = error;
      }

   }

}());