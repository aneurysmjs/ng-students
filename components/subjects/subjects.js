import angular from 'angular';

import subjectsRoutes from './subjects-routes';
import SubjectsController from './subjects-controller';
import subjectsFactory from './subjects-factory';

let subjectsModule = angular.module('subjects', [])
   .config(subjectsRoutes)
   .controller('SubjectsController', SubjectsController)
   .factory('subjectsFactory', subjectsFactory);

export default subjectsModule;