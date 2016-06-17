var o = {
   a: 1,
   f: function () {}
};



function Person() {
   this.name = 'mateo';
}


var $injector = {
   $instantiate: function (Constructor) {
      return new Constructor();
   }
};

var controller = $injector.$instantiate(Person);

console.log('controller');
console.log(controller);


