var app = angular.module('puppetshow', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '/app/templates/home.html',
      controller: 'homeController'
    })
    .state('nodeFacts', {
      url: '/node/:id',
      templateUrl: '/app/templates/facts.html',
      controller: 'nodeController',
      resolve: {
        facts: function(nodeService, $stateParams){
          console.log('nodeService facts resolve ', $stateParams);
          return nodeService.getFacts($stateParams.id)
        }
      }
    })

  $urlRouterProvider.otherwise("/");

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
})
