(function(){

    var app = angular.module('myApp',['ui.ace']);

    app.controller('customerController', function($http,$scope){

        //some data to work with
        //$scope.data = [{foo:"bar", ying:"yang"}];
        $scope.customers = [];
        $scope.errorMessage = '';

        $http.get("http://www.w3schools.com/angular/customers.php")
            .then(function(response){
                    //set our scope variable with the data
                    $scope.customers = response.data.records;
                },
                function(){
                    $scope.errorMessage = "Unable to retrieve data.";
                });

        //http://www.w3schools.com/angular/customers.php

    });



})();