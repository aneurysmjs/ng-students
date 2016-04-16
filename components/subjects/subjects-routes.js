subjectsRoutes.$inject = ['$stateProvider'];

function subjectsRoutes($stateProvider) {
   $stateProvider
      .state('subjects', {
         templateUrl: 'components/subjects/subjects.html',
         controller: 'SubjectsController',
         controllerAs: 'subjectsCtrl'
      });
}

export default subjectsRoutes;