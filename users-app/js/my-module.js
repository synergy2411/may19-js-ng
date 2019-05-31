(function(){
    var app = angular.module("my-module", []);

    app.directive("myDirective", function(){
        return {
            restrict : "ACE",
            template : "<h2>Hello from External Module directive</h2>"
        }
    })
})();