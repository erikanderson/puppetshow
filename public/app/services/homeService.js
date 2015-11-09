var app = angular.module('puppetshow');

app.service('homeService', function($http, $q){

  this.getNodes = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'http://10.211.55.39:8080/pdb/query/v4/nodes',
    }).then(function(res){
        console.log('getNodes service res: ', res);
        res['success'] = 0;
        res['failed'] = 0;
        res['skips'] = 0;
        res['noops'] = 0;
        res['total'] = 0;
        for (var i = 0; i < res.data.length; i++) {
          status = res.data[i].latest_report_status
          if (res[status]){
            console.log('res[status]:', res[status])
            res[status]++;
          } else {
            res[status] = 1;
          }
          res['total']++;
        }
        console.log('res after if: ', res);
        deferred.resolve(res);
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
        delete res.data[0]['summarize_by'];
        deferred.resolve(res.data);
    })
    return deferred.promise;
  }
})
