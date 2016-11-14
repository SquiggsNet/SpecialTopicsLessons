(function(){

    var app = angular.module('myApp',[]);

    app.controller('studentController', function($scope, $http){

        $scope.students = [];
        $scope.errorMessage = "";

        $http.get("package.json")
            .then(function(response){
                $scope.students = response.data.students;
        },
        function(){
            $scope.errorMessage = "Unable to retrieve data"
        });


    });


})();

