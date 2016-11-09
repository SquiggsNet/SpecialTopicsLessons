(function() {

    var app = angular.module('labApp', []);
    app.controller('labController', function ($scope) {

        $scope.students = [];

        function Student(number, firstName, lastName)
        {
            this.number = number;
            this.firstName = firstName;
            this.lastName = lastName;

            this.printStudentDetails = function(){
                return this.number+" - "+this.firstName+" "+this.lastName;
            }
        }

        $scope.addStudent = function () {
            if($scope.sNumber.length && $scope.fName.length && $scope.lName.length){

                studentObj = new Student($scope.sNumber, $scope.fName, $scope.lName);

                if($scope.students.length){
                    for(i=0;i<$scope.students.length;i++){
                        if(studentObj.number==$scope.students[i].number){
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

    });
})();