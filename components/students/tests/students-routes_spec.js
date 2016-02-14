describe('Testing Students Routes', function () {
   var $rootScope, $state, $httpBackend, $templateCache, state;

   beforeEach(module('ui.router'));

   beforeEach(function () {
      module('students');

      inject(function ($injector) {
         $rootScope = $injector.get('$rootScope');
         $state = $injector.get('$state');
         state = $state.get('students');
         $httpBackend = $injector.get('$httpBackend');

         $httpBackend.when('GET', 'components/students/students.html').respond('students');

         $templateCache = $injector.get('$templateCache');
         $templateCache.put('students.html', '');
      });

   });

   afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
   });

   it('should be in \'students\' state', function () {
      $state.go(state.name);
      //$rootScope.$digest();
      $httpBackend.flush();
      expect($state.current.name).toBe(state.name);
   });


});