(function(){

    var app = angular.module('myApp', ['ui.router']);

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

        $http.get("students.json")
            .then(function(response){
                $scope.students = response.data.students;
        },
        function(){
            $scope.errorMessage = "Unable to retrieve data"
        });

        $scope.addStudent = function () {
            // if($scope.sNumber.length && $scope.fName.length && $scope.lName.length){

                studentObj = new Student($scope.$$childHead.sNumber, $scope.$$childHead.fName, $scope.$$childHead.lName);

                if($scope.students.length){
                    for(i=0;i<$scope.students.length;i++){
                        if(studentObj.sNumber==$scope.students[i].sNumber){
                            alert("this student number is already in use");
                            return;
                        }
                    }
                }

                $scope.students.push(studentObj);
                alert("Student Registered");
                $scope.sNumber = "";
                $scope.fName = "";
                $scope.lName = "";
            // }
        };

        $scope.studentDataSource = {
            get: function(index, count, success) {

                success(students.slice(index-1, index-1 + count));
            }
        }

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

    app.config(function($stateProvider) {
        var RegisterState = {
            name: 'registerStudent',
            url: '/registerStudent',
            template: '<h2>Student Registration Form:</h2>'+
            '<form role="form" ng-submit="addStudent()">'+
            '<form role="form" ng-submit="addStudent()">'+
            '<div class="form-group">'+
            '<label for="sNumber">Student Id:'+
            '<input class="form-control" type="text" id="sNumber" placeholder="Enter Student Id" ng-model="sNumber"/>'+
            '</label>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="fName">First Name:'+
            '<input class="form-control" type="text" id="fName" placeholder="Enter First Name" ng-model="fName"/>'+
            '</label>'+
            '</div>'+

            '<div class="form-group">'+
            '<label for="lName">Last Name:'+
            '<input class="form-control" type="text" id="lName" placeholder="Enter Last Name" ng-model="lName"/>'+
            '</label>'+
            '</div>'+
            '<input class="btn btn-default" type="submit" value="Add Student"/>'+
            '</form>'
        }

        var displayState = {
            name: 'displayStudent',
            url: '/displayStudent',
            template: '<h3>Student List</h3>'+

            '<div>{{errorMessage}}</div>'+
            '<table class="table table-bordered table-striped" >'+
            '<thead>'+
            '<tr>'+
            '<th>Student Number</th>'+
            '<th>First Name</th>'+
            '<th>Last Name</th>'+
            '</tr>'+
            '</thead>'+
            '<tbody ui-scroll-viewport ng-mouseover="displayJSON()">'+
            '<tr ui-scroll="student in studentDataSource" buffer-size="10">'+
            '<td>{{student.sNumber}}</td>'+
            '<td>{{student.fName}}</td>'+
            '<td>{{student.lName}}</td>'+
            '</tr>'+
            '</tbody>'+
            '<tbody ng-mouseover="displayJSON()">'+
            '<tr ng-repeat="student in students">'+
            '<td>{{student.sNumber}}</td>'+
            '<td>{{student.fName}}</td>'+
            '<td>{{student.lName}}</td>'+
            '</tr>'+
            '</tbody>'+
            '</table>'+
            '<div ng-show="JSONView" ng-click="clearJSON()" student-report></div>'
    }

        $stateProvider.state(RegisterState);
        $stateProvider.state(displayState);
    });



})();

