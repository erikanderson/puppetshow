var app = angular.module('puppetshow');

app.controller('homeController', function($scope, homeService){

  $scope.getNodes = function(){
    homeService.getNodes().then(function(res){
      console.log('getNodes controller res.data: ', res);
      $scope.nodesres = res;
      $scope.nodes = res.data;
    })
  }

  $scope.getNodes();

})
