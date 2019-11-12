proposalApp.controller('policyController', ['$scope', '$location', 'userService', function($scope, $location, userService) {
    
    $scope.init = function() {
        $scope.datePicker = {};
        $scope.paymentModes = userService.paymentModes;
        $scope.creditCardTypes = userService.creditCardTypes;

        $scope.policy = {};
        $scope.policy.dateSigned = new Date();
        $scope.policy.moneyReceived = new Date();

        $scope.policy.proposalId = $location.path().split('/')[2];
        userService.getProposalAmount($scope.policy.proposalId).then(
            function(response) {
                $scope.policy.amount = response.data;
            }, function() {
                console.log('Greska');
                $location.path('/');
            }
        )
    }

    $scope.openCalendar = function(name) {
        $scope.datePicker[name] = true;
    }

    $scope.createPolicy = (isValid) => {
        if (isValid) {
            userService.savePolicy($scope.policy).then(
                function successCallback() {
                    $location.path('/');
                },
                function errorCallback() {
                    console.log("Greska");
            });
        } else {
            console.log('Forma nije validna');
        }
    }

    $scope.changeProposal = function() {
        $location.path('/confirmProposal');
    }
    
}])