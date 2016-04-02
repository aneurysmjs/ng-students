(function () {
   'use strict';

   angular.module('people').controller('PeopleController', PeopleController);

   PeopleController.$inject = ['peopleFactory'];

   function PeopleController(peopleFactory) {


      var self = this;

     console.log(' peopleFactory.getPeople()');
     peopleFactory.getPeople().then(function (response) {
        console.log('response.data');
        console.log(response.data);
        self.people = response.data;
        return response.data;
     }, function (error) {

     });



   }

}());