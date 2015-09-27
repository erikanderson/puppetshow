var app = angular.module('puppetshow', ['ui.router', 'ngMaterial']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '/app/templates/home.html',
      controller: 'home',
    })
  $urlRouterProvider.otherwise("/");

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

})
