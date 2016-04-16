StudentsController.$inject = ['studentsFactory'];

function StudentsController(studentsFactory) {
   var self = this;

   self.curPage = 0;
   self.pageSize = 5;
   self.searchFor = '';

  init();

   function init() {
      studentsFactory.retrieveData().then(function (response) {
         console.log(' self.students');
         console.log( self.students);
         self.students = response;
      }, function (error) {

      });
   }

   self.deleteStudent = deleteStudent ;
   self.numberOfPages = numberOfPages;

   function deleteStudent(student) {
      var index = self.students.indexOf(student);
      self.students.splice(index, 1);
   }

   function numberOfPages() {
      return Math.ceil(self.students.length / self.pageSize);
   }

}

export default StudentsController;