var app = angular.module('puppetshow');

app.controller('reportController', function($scope, nodeService, report){

  $scope.report = report;

  $scope.oneAtATime = true;

  // $scope.groups = [
  //   {
  //     title: 'Dynamic Group Header - 1',
  //     content: 'Dynamic Group Body - 1'
  //   },
  //   {
  //     title: 'Dynamic Group Header - 2',
  //     content: 'Dynamic Group Body - 2'
  //   }
  // ];

  // $scope.items = $scope.report.resource_events.data;

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

})
