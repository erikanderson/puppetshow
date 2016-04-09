var app = angular.module('puppetshow');

app.controller('factsController', function($scope, nodeService, facts){

  $scope.facts = facts;

})
