import angular from 'angular';

import studentsRoutes from './students-routes';
import StudentsController from './students-controller';
import studentsFactory from './students-factory';


let studentsModule = angular.module('students', [])
   .config(studentsRoutes)
   .controller('StudentsController', StudentsController)
   .factory('studentsFactory', studentsFactory);

export default studentsModule;



