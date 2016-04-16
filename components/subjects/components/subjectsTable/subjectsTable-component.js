import template from './subjectsTable.html';
import controller from './subjectsTable-controller';


let subjectsComponent = {
   template,
   controller,
   bindings: {
      currentSubject: '&',
      deleteSubject: '&',
      subjects: '='
   }
};

export default subjectsComponent;