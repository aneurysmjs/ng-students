import angular from 'angular';

import pagination from './filters/pagination-filter'

  let shared = angular.module('shared', [])
   .filter('pagination', pagination);

export default shared;