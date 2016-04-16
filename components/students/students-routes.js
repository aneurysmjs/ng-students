import template from './students.html';

console.log('template');
console.log(template);

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
