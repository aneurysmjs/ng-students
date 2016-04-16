import angular from 'angular';
import uiRouter from 'angular-ui-router';

import shared from './shared/shader-module'

import AppController from './app-controller';
import appFactory from './app-factory';

import students from './students/students';


angular.module('app', [uiRouter, students.name, shared.name])
   .constant('API_URL', 'http://172.16.129.76:3000/api/v1')
   .controller('AppController', AppController)
   .factory('appFactory', appFactory);

