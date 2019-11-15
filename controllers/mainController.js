proposalApp.controller('mainController', ['$scope', '$location', function($scope, $location) {

    $scope.newProposal = function() {
        $location.path('/subscriber');
    }

    $scope.newPolicy = function() {
        $location.path('/confirmProposal');
    }

    $scope.oldPolicies = function() {
        $location.path('/oldPolicies');
    }
}])