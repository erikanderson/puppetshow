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
      url: 'http://10.211.55.39:8080/pdb/query/v4/reports?query=["=", "hash", "' + hash + '"]',
    }).then(function(res){
        console.log('res: ', res);
        console.log('res.data: ', res.data);
        for (var i = 0; i < res.data[0].resource_events.data.length; i++) {
          console.log('in if: ', res.data[0].resource_events.data[i]);
          if (res.data[0].resource_events.data[i].status == 'success'){
            res.data[0].resource_events.data[i].panel_status = 'panel-success';
          }
          if (res.data[0].resource_events.data[i].status == 'fail'){
            res.data[0].resource_events.data[i].panel_status = 'panel-danger';
          }

        }
        deferred.resolve(res.data[0]);
    })
    return deferred.promise;
  }

})
