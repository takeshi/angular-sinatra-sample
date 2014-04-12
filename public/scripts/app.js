'use strict';

angular.module('first', 
  ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date','ngGrid'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'first/home',
        controller: 'TestCtrl'})
      .otherwise({redirectTo: '/'});
  }]);
