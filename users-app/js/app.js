(
function(){
var app = angular.module("usersApp", []);

app.controller("UsersController" , function($scope){
    $scope.users = users;

    $scope.moreInfo = function(user){
        alert("Mr. " + user.firstName + " is working with " + user.company + "!");
    }
});

app.controller("CommentController", function($scope){
    $scope.tab = 1;

    $scope.selectedTab = function(tab){
        $scope.tab = tab;
    }

    $scope.isSelected = function(tab){
        return $scope.tab === tab;
    }
});

app.controller("CommentFormController", function($scope){
    $scope.stars = [1,2,3,4,5];
    $scope.comment = {};
    
    $scope.addComment = function(){
        console.log($scope.comment);
        $scope.comment = {};
    }
})

app.directive("commentForm", function(){
    return {
        restrict : 'ACE',           // E, A, C, M
        // template : '<h2>Going to show you form here...</h2>'
        templateUrl : 'views/comment-form.html'
    }
})

var users = [{
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 12, 1965"),
    income  : 50000,
    company : "Microsoft",
    isWorking : true,
    image : "assets/images/bill.jpg",
    vote : 120,
    comments : [{
        star : 4,
        body : "Great Work!",
        author : "test@test.com"
    },{
        star : 3,
        body : "Good Work!",
        author : "abc@test.com"
    }]
},{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Jan 1, 1965"),
    income  : 0,
    company : "Apple",
    isWorking : false,
    image : "assets/images/steve.png",
    vote : 180,
    comments : [{
        star : 4,
        body : "Great Work!",
        author : "test@test.com"
    },{
        star : 3,
        body : "Good Work!",
        author : "abc@test.com"
    }]
},{
    firstName : "Tim B.",
    lastName : "Lee",
    dob : new Date("Aug 3, 1965"),
    income  : 30000,
    company : "World Wide Web",
    isWorking : true,
    image : "assets/images/tim.jpg",
    vote : 100,
    comments : [{
        star : 4,
        body : "Great Work!",
        author : "test@test.com"
    },{
        star : 3,
        body : "Good Work!",
        author : "abc@test.com"
    }]
}]

}

)();