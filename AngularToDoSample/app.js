(function() {
    var app = angular.module('todoApp', []);
    app.controller('todoController', function ($scope) {
            //define array of todo items
            $scope.todos = [
                {text: "Clean House", done: false},
                {text: "Pet Dog", done: true},
                {text: "Walk Cat", done: false}
            ];

            $scope.addNewItem = function () {
                if($scope.newItem.length){
                    $scope.todos.push({text: $scope.newItem});
                    $scope.newItem = "";
                }
            };

            $scope.archiveTodos = function () {
                angular.forEach($scope.todos, function(todo){

                    var tempArray = $scope.todos;
                    $scope.todos = [];

                    angular.forEach(tempArray, function (todo) {
                        if(!todo.done){
                            $scope.todos.push(todo);
                        }
                    });
                });
            };

        });
    app.directive('myTodoReport', function(){
       return {
           template: 'Todo Count: {{todos.length}}'
       }
    });
})();



