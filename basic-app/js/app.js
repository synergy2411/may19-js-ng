(
    function () {


        var app = angular.module("myapp", []);

        app.controller("MainController", function () {
            this.greet = "Hello Angular!!";
        })
        app.controller("SecondController", ["$scope", "$log", function ($scope, $log) {
            $scope.message = "Hello JavaScript!!";
            $log.info($scope.message);
        }])

    }
)();
