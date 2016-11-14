(function(){

    var app = angular.module('myApp',[]);

    app.controller('studentController', function($scope, $http){

        $scope.students = [];
        $scope.errorMessage = "";

        $http.get("http://www.w3schools.com/angular/customers.php")
            .then(function(response){
                $scope.students = response.data.records;
        },
        function(){
            $scope.errorMessage = "Unable to retrieve data"
        });


    });


})();

