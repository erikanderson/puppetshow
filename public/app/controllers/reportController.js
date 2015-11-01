var app = angular.module('puppetshow');

app.controller('reportController', function($scope, nodeService, report){

  $scope.report = report;

})
