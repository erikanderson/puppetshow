var app = angular.module('puppetshow');

app.service('nodeService', function($http, $q){

  this.getFacts = function(node){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://10.211.55.39:8080/pdb/query/v4/nodes/' + node + '/facts',
    }).then(function(res){
        console.log('res.data: ', res.data);
        deferred.resolve(res.data);
    })
    return deferred.promise;
  }

  this.getReport = function(hash){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://10.211.55.39:8080/pdb/query/v4/reports/' + hash + '/events',
    }).then(function(res){
        console.log('res: ', res);
        console.log('res.data: ', res.data);
        deferred.resolve(res.data);
    })
    return deferred.promise;
  }

})
