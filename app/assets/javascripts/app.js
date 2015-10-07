window.App = angular.module('myApp', ['ngResource', 'ui.router', 'templates']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'mainCtrl'
      });

  $urlRouterProvider.otherwise('home');
}]);