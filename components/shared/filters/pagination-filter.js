

   pagination.$inject = [];

   function pagination() {
      return function (input, start) {
         start = +start;
         return input.slice(start);
      };
   }

   export default pagination;
