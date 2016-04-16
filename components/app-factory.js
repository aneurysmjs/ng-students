appFactory.$inject = ['$http', '$q'];

function appFactory($http, $q) {

   return {
      retrieveData: retrieveData
   };

   function retrieveData() {
      return $q(function (resolve, reject) {
         $http({
            method: 'GET',
            url: 'http://localhost:63342/ng-students/server/MOCK_DATA.json'
         }).then(function (promise) {
            resolve(promise.data);
         }, function (reason) {
            reject(reason);
         });
      });
   }

}

export default appFactory;
