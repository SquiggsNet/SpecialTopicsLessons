/**
 * Created by inet2005 on 11/1/16.
 */
(function(){
    var app = angular.module('myApp',[]);

    app.controller('customerController', function($http,$scope){

        $scope.usernames = [];
        $scope.errormessage = "";

        $http.get("http://www.w3schools.com/angular/customers.php").then(function(response){
                $scope.usernames = response.data.records;
            },
            function(){
                $scope.errormessage = "unable to retrieve data.";
            });

    });
})();