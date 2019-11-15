proposalApp.controller('oldPoliciesController', ['$scope', '$location', '$filter', 'userService', function($scope, $location, $filter, userService) {

    $scope.lastName = null;
    $scope.infos = [];
    $scope.infoVisible = false;
    
    $scope.init = function() {
        $scope.paymentModes = userService.paymentModes;

        userService.getPolicies().then(
            function(response) {
                $scope.policies = response.data;
            }, function() {
                console.log('Greska');
            }
        );
    }

    $scope.sortByColumn = function(column) {
        if ($scope.lastName === column) {
            $scope.policies = $scope.policies.reverse(); 
        } else {
            $scope.policies  = $filter('orderBy')($scope.policies, column);
            $scope.lastName = column;
        }
    }

    $scope.selectRow = function(policy) {
        userService.getPolicyDetails(policy.id).then(
            function(response) {
                $scope.infos = [];

                $scope.infos.push({label: 'Subscriber', value: response.data.subscriber})

                const paymentModeName = $scope.paymentModes.find(pm => pm.id === response.data.paymentMode).name;
                $scope.infos.push({label: 'Payment mode', value: paymentModeName})

                if (response.data.creditCardHolder) {
                    $scope.infos.push({label: 'Credit Card Holder', value: response.data.creditCardHolder})
                }

                if (response.data.creditCardName) {
                    $scope.infos.push({label: 'Credit Card Name', value: response.data.creditCardName})
                }

                if (response.data.bankAccountHolder) {
                    $scope.infos.push({label: 'Bank Account Holder', value: response.data.bankAccountHolder})
                }

                if (response.data.bankName) {
                    $scope.infos.push({label: 'Bank Name', value: response.data.bankName})
                }
                $scope.infoVisible = true;
            }, function() {
                console.log('Greska');
            }
        );
    }

    $scope.clearInfo = function() {
        $scope.infos = [];
        $scope.infoVisible = false;
    }

    $scope.home = () => {
        $location.path('/');
    }
}])