describe('Testing Students Routes', function () {
   var $rootScope, $state, $httpBackend, $templateCache, state = 'students';

   beforeEach(module('ui.router'));

   beforeEach(function () {
      module('students');

      inject(function ($injector) {
         $rootScope = $injector.get('$rootScope');
         $state = $injector.get('$state');
         $httpBackend = $injector.get('$httpBackend');

         $httpBackend.when('GET', 'components/students/students.html').respond('home');

         $templateCache = $injector.get('$templateCache');
         $templateCache.put('students.html', '');
      });

   });

   it('should be in \'students\' state', function () {

      console.log('$state');
      console.log($state.current);
      $state.go(state);
      //$rootScope.$digest();
      expect($state.current.name).toBe(state);
      //expect($state.current.name).toBe('students');
   });


});