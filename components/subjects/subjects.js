import angular from 'angular';

import subjectsRoutes from './subjects-routes';
import subjectsComponent from './subjects-component';
import SubjectsController from './subjects-controller';
import subjectsFactory from './subjects-factory';

import subjectsTableComponent from './components/subjectsTable/subjectsTable-component';

let subjectsModule = angular.module('subjects', [])
   .config(subjectsRoutes)
   .component('subjects', subjectsComponent)
   .component('subjectsTable', subjectsTableComponent)
   .controller('SubjectsController', SubjectsController)
   .factory('subjectsFactory', subjectsFactory);

export default subjectsModule;