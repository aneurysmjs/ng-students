import angular from 'angular';

import subjectsRoutes from './subjects-routes';
import subjectsComponent from './subjects-component';
import SubjectsController from './subjects-controller';
import subjectsFactory from './subjects-factory';

let subjectsModule = angular.module('subjects', [])
   .config(subjectsRoutes)
   .component('subjects', subjectsComponent)
   .controller('SubjectsController', SubjectsController)
   .factory('subjectsFactory', subjectsFactory);

export default subjectsModule;