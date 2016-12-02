
(function(){

    var app = angular.module('EmployeeAPIApp',['ngResource']);

    app.factory('Employees', function($resource){

        return $resource('http://localhost:3000/api/employees/:emp_no', null,
            {
                'update':{method:'PUT'}
            }
        );

    });

    app.controller('employeeAPIController', function($scope, $timeout, Employees){

        $scope.refreshTable = function(){
            Employees.query(function(data){
                $scope.employees= data;
            });
        };

        $scope.refreshTable();

        $scope.showEmployee = function(emp_no){
            Employees.get({emp_no:emp_no}, function(data){
                $scope.selectedEmployee = data;
            });
        };

        $scope.addEmployee = function(){

            var data = {first_name: $scope.submittedFirstName,
                        last_name: $scope.submittedLastName,
                        birth_date: $scope.submittedBirthDate,
                        gender: $scope.submittedGender,
                        hire_date: $scope.submittedHireDate};

            Employees.save(data)
                     .$promise
                     .then(
                         function () {
                             //success
                             $scope.refreshTable();
                             $scope.submittedFirstName = '';
                             $scope.submittedLastName = '';
                             $scope.submittedBirthDate = '';
                             $scope.submittedGender = '';
                             $scope.submittedHireDate = '';
                             $scope.message = "Employee has been registered";
                             $scope.messageClass = 'alert alert-success';
                             $timeout(removeMessage, 2000);
                         },
                         function () {
                             //error/fail
                             $scope.message = "Error unable to add employee";
                             $scope.messageClass = 'alert alert-danger';
                             $timeout(removeMessage, 2000);
                         });


        };

        $scope.updateEmployee = function(emp_no){
            var fName = document.getElementById('firstName'+emp_no).innerHTML;
            var lName = document.getElementById('lastName'+emp_no).innerHTML;
            var bDate = document.getElementById('birthDate'+emp_no).innerHTML;
            var gender = document.getElementById('gender'+emp_no).innerHTML;
            var hDate = document.getElementById('hireDate'+emp_no).innerHTML;

            var data = {first_name: fName,
                        last_name: lName,
                        birth_date: bDate,
                        gender: gender,
                        hire_date: hDate};

                        //when sent to API GET is received by API. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            Employees.update({emp_no: emp_no}, data)
                        .$promise
                        .then(
                            function () {
                                //success
                                $scope.refreshTable();
                                $scope.message = "Employee has been updated";
                                $scope.messageClass = 'alert alert-success';
                                $timeout(removeMessage, 2000);
                            },
                            function () {
                                //error/fail
                                $scope.message = "Error unable to update employee";
                                $scope.messageClass = 'alert alert-danger';
                                $timeout(removeMessage, 2000);
                            });

        };

        $scope.deleteEmployee = function(emp_no){

            Employees.remove({emp_no: emp_no})
                    .$promise
                    .then(
                        function () {
                            //success
                            $scope.refreshTable();
                            $scope.message = "Employee has been deleted";
                            $scope.messageClass = 'alert alert-success';
                            $timeout(removeMessage, 2000);
                        },
                        function () {
                            //error/fail
                            $scope.message = "Error unable to delete employee";
                            $scope.messageClass = 'alert alert-danger';
                            $timeout(removeMessage, 2000);
                        });
        };

        var removeMessage = function(){
            $scope.message = '';
        };

    });
})();