var app = angular.module('puppetshow');

app.controller('homeController', function($scope, homeService){

  $scope.getNodes = function(){
    homeService.getNodes().then(function(res){
      console.log(res);
      $scope.nodes = res;
    })
  }
  $scope.getNodes();
})
