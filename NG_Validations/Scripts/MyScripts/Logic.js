var app;
(function () {
    app = angular.module('appmodule', []);
})();


//The Directive for Custom Validation for the Attribute Directive
app.directive('requiredUniquevalue', function ($http) {
    return {
        require: 'ngModel',
        link: function (scope, element, attribute, ctrl) {
            scope.$watch(attribute.ngModel, function () {
                $http({
                    method: 'POST',
                    url: '/api/EmployeeInfoAPI/' + attribute.requiredUniquevalue,
                    data: { 'EmpNo': attribute.requiredUniquevalue }
                }).success(function (res) {
                    if (res) {
                        ctrl.$setValidity('requiredUniquevalue', false);
                    } else {
                        ctrl.$setValidity('requiredUniquevalue', true);
                    }
                }).error(function (err) {
                    ctrl.$setValidity('requiredUniquevalue', false);
                });
            });
        }
    }
});

//The COntroller
app.controller('appctrl', function ($scope) {
    $scope.Employee = {
        EmpNo: 0,
        EmpName: "",
        DeptName: "",
        Salary: "",
        Designation: "",
    };
     
});