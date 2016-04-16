import template from './students.html';


studentsRoutes.$inject = ['$stateProvider'];

function studentsRoutes($stateProvider) {
   $stateProvider
      .state('students', {
         template,
         controller: 'StudentsController',
         controllerAs: 'studentsCtrl'
      });
}

export default studentsRoutes;
