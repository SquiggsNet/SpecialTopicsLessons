(function(){

    var app = angular.module('myApp',[]);

    app.controller('studentController', function($scope, $http){

        $scope.students = [];
        $scope.errorMessage = "";
        $scope.JSONView = false;

        function Student(number, firstName, lastName)
        {
            this.sNumber = number;
            this.fName = firstName;
            this.lName = lastName;
        }

        $http.get("package.json")
            .then(function(response){
                $scope.students = response.data.students;
        },
        function(){
            $scope.errorMessage = "Unable to retrieve data"
        });

        $scope.addStudent = function () {
            if($scope.sNumber.length && $scope.fName.length && $scope.lName.length){

                studentObj = new Student($scope.sNumber, $scope.fName, $scope.lName);

                if($scope.students.length){
                    for(i=0;i<$scope.students.length;i++){
                        if(studentObj.sNumber==$scope.students[i].sNumber){
                            alert("this student number is already in use");
                            return;
                        }
                    }
                }

                $scope.students.push(studentObj);
                $scope.sNumber = "";
                $scope.fName = "";
                $scope.lName = "";
            }
        };

        $scope.displayJSON = function(){

            $scope.studentJSON = angular.toJson($scope.students, true);
            $scope.JSONView = true;
        }

        $scope.clearJSON = function(){
            $scope.JSONView = false;
        }

    });
    app.directive('studentReport', function(){

        return {
            template: '{{studentJSON}}'
        }
    });

})();

