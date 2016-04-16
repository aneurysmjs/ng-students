subjectsRoutes.$inject = ['$stateProvider'];

function subjectsRoutes($stateProvider) {
   $stateProvider
      .state('subjects', {
         template: '<subjects></subjects>'
      });
}

export default subjectsRoutes;