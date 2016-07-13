import angular from 'angular'
angular.module('olympics',[])
  .controller('sportsController', function($http){
    // this.sports = ["Weightlifting","Cycling"];
    $http.get('/sports').then((res) =>{
      this.sports = res.data;
    });
  })
