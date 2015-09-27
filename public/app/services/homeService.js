var app = angular.module('puppetshow');

app.service('homeService', function($http, $q){

  this.getNodes = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://10.211.55.35:8080/pdb/query/v4/nodes',
    }).then(function(res){
        console.log('res.data: ', res.data);
        deferred.resolve(res.data);
    })
    return deferred.promise;
  }
})
