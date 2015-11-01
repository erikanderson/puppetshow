var app = angular.module('puppetshow', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '/app/templates/home.html',
      controller: 'homeController'
    })
    .state('nodeFacts', {
      url: '/facts/:id',
      templateUrl: '/app/templates/facts.html',
      controller: 'factsController',
      resolve: {
        facts: function(nodeService, $stateParams){
          console.log('nodeService facts resolve ', $stateParams);
          return nodeService.getFacts($stateParams.id)
        }
      }
    })
    .state('nodeReport', {
      url: '/report/:id',
      templateUrl: '/app/templates/report.html',
      controller: 'reportController',
      resolve: {
        report: function(nodeService, $stateParams){
          console.log('nodeService report resolve ', $stateParams);
          return nodeService.getReport($stateParams.id)
        }
      }
    })

  $urlRouterProvider.otherwise("/");

})
