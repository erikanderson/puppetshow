var app = angular.module('puppetshow', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '/app/templates/home.html',
      controller: 'homeController',
    })
  $urlRouterProvider.otherwise("/");

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
