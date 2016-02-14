describe('Controller: SubjectController', function () {
   // Instantiate a new version of my module before each test
   //beforeEach(module('app'));
  // beforeEach(module('subjects'));
   beforeEach(module('students'));

   var ctrl;
   // Before each unit test, instantiate a new instance
   // of the controller
   beforeEach(inject(function ($controller) {
      ctrl = $controller('StudentsController');
   }));

   it('should have students available on load', function () {
      /*expect(ctrl.students).toEqual([
         {id: 1, label: 'First', done: true},
         {id: 2, label: 'Second', done: false}
      ]);*/
   });


});