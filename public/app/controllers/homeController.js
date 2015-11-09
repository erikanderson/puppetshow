var app = angular.module('puppetshow');

app.controller('homeController', function($scope, homeService){

  $scope.getNodes = function(){
    homeService.getNodes().then(function(res){
      console.log('getNodes controller res.data: ', res);
      $scope.nodesres = res;
      $scope.nodes = res.data;
    })
  }

  $scope.getHealth = function(){
    homeService.getHealth().then(function(res){
      console.log('getHealth controller res.data: ',res);
      $scope.health = res[0];
    })
  }

  $scope.getNodes();
  $scope.getHealth();
})
