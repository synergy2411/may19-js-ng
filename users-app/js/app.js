(
    // Services : Service, factory, provider, value, constant

    function () {
        var app = angular.module("usersApp", ["my-module"]);

        app.service("DataService", function ($http) {

            this.getData = function () {
                return $http.get("assets/model/user-data.json");
            }

        });

        app.factory("DataFactory", function ($http) {
            function getData() {

                return $http.get("assets/model/user-data.json");
            }
            return { getData  }
        })

        app.controller("UsersController", function ($scope, DataService, DataFactory) {
            $scope.users = [];

            DataFactory.getData()
                .then(function (response) {
                    $scope.users = response.data.userdata;
                }).catch(function () { console.log(err) });

            // DataService.getData()
            // .then(function(response){
            //     $scope.users = response.data.userdata;
            // }).catch(function(){console.log(err)});



            $scope.moreInfo = function (user) {
                alert("Mr. " + user.firstName + " is working with " + user.company + "!");
            }

            $scope.clicked = function () {
                alert("Clicked");
            }


        });

        app.controller("CommentController", function ($scope) {
            $scope.tab = 1;

            $scope.selectedTab = function (tab) {
                $scope.tab = tab;
            }

            $scope.isSelected = function (tab) {
                return $scope.tab === tab;
            }
        });

        app.controller("CommentFormController", function ($scope) {
            // $scope.stars = [1,2,3,4,5];
            // $scope.comment = {};

            // $scope.addComment = function(user){
            //     console.log($scope.comment);
            //     user.comments.push($scope.comment);
            //     $scope.comment = {};
            // }
        })

        app.filter("nationalcode", function () {
            return function (input, code) {
                switch (code) {
                    case 'AUS': return "+61 " + input;
                    case 'US': return "+1 " + input;
                    case 'UK': return "+51 " + input;
                    default: return "+91 " + input;
                }
            }
        });

        app.directive("commentForm", function () {
            return {
                restrict: 'ACE',           // E, A, C, M
                // template : '<h2>Going to show you form here...</h2>'
                templateUrl: 'views/comment-form.html',
                controller: function ($scope) {
                    $scope.stars = [1, 2, 3, 4, 5];
                    $scope.comment = {};

                    $scope.addComment = function (user) {
                        console.log($scope.comment);
                        user.comments.push($scope.comment);
                        $scope.comment = {};
                    }
                },
                scope: {
                    str: '@',
                    user: '=',
                    clicked: '&',
                    firstname: "@"
                }
            }
        })

        // var users = [{
        //     firstName: "Bill",
        //     lastName: "Gates",
        //     dob: new Date("Dec 12, 1965"),
        //     income: 50000,
        //     company: "Microsoft",
        //     isWorking: true,
        //     image: "assets/images/bill.jpg",
        //     vote: 120,
        //     contact_no : 987654321,
        //     comments: [{
        //         star: 4,
        //         body: "Great Work!",
        //         author: "test@test.com"
        //     }, {
        //         star: 3,
        //         body: "Good Work!",
        //         author: "abc@test.com"
        //     }]
        // }, {
        //     firstName: "Steve",
        //     lastName: "Jobs",
        //     dob: new Date("Jan 1, 1965"),
        //     income: 0,
        //     company: "Apple",
        //     isWorking: false,
        //     image: "assets/images/steve.png",
        //     vote: 180,
        //     contact_no : 987654321,
        //     comments: [{
        //         star: 4,
        //         body: "Great Work!",
        //         author: "test@test.com"
        //     }, {
        //         star: 3,
        //         body: "Good Work!",
        //         author: "abc@test.com"
        //     }]
        // }, {
        //     firstName: "Tim B.",
        //     lastName: "Lee",
        //     dob: new Date("Aug 3, 1965"),
        //     income: 30000,
        //     company: "World Wide Web",
        //     isWorking: true,
        //     image: "assets/images/tim.jpg",
        //     vote: 100,
        //     contact_no : 987654321,
        //     comments: [{
        //         star: 4,
        //         body: "Great Work!",
        //         author: "test@test.com"
        //     }, {
        //         star: 3,
        //         body: "Good Work!",
        //         author: "abc@test.com"
        //     }]
        // }]

    }

)();