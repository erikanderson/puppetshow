var app = angular.module('puppetshow');

app.controller('nodeController', function($scope, nodeService, facts){

  $scope.facts = facts;
  // $scope.getFacts = function(node){
  //   nodeService.getNode(node).then(function(res){
  //     console.log(res);
  //     $scope.facts = res;
  //   })
  // }
  // $scope.getFacts();
})
