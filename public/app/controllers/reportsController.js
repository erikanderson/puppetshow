var app = angular.module('puppetshow');

app.controller('reportsController', function($scope, nodeService, reports){

  $scope.reports = reports;

})
