var app = angular.module('puppetshow');

app.service('homeService', function($http, $q){

  this.getNodes = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://10.211.55.39:8080/pdb/query/v4/nodes',
    }).then(function(res){
        console.log('getNodes service res: ', res);
        deferred.resolve(res.data);
    })
    return deferred.promise;
  }

  this.getHealth = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://10.211.55.39:8080/pdb/query/v4/aggregate-event-counts?summarize_by=certname',
    }).then(function(res){
        console.log('getHealth service res: ', res);
        deferred.resolve(res.data);
    })
    return deferred.promise;
  }
})
