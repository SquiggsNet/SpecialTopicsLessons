(function() {

    var app = angular.module('labApp', []);
    app.controller('labController', function ($scope) {
        //define array of todo items
        $scope.students = [];

        $scope.addStudent = function () {
            if($scope.sNumber.length || $scope.sNumber.fname || $scope.lname.length){
                // studentObj = new Student({number: $scope.sNumber},{fname: $scope.fname},{lname: $scope.lname});
                $scope.students.push({snumber: $scope.sNumber,fname: $scope.fName,lname: $scope.lName});
                $scope.sNumber = "";
                $scope.fName = "";
                $scope.lName = "";
            }
        };

    });
})();