proposalApp.controller('proposalController', ['$scope', '$location', 'storageService', 'tabsService', 'userService',
    function($scope, $location, storageService, tabsService, userService) {

    $scope.init = function() {
        if (storageService.checkPageIndex(4)) {
            tabsService.data.index = 4;

            $scope.proposal = {
                subscriber: storageService.loadSubscriber(),
                car: storageService.loadVehicle(),
                plan: storageService.loadInsurancePlan(),
                drivers: storageService.loadDrivers(),
            }

            $scope.infos = [
                {
                    label: 'Subscriber full name',
                    value: $scope.proposal.subscriber.firstName + ' ' +  $scope.proposal.subscriber.lastName
                },
                {
                    label: 'Vehicle',
                    value: $scope.proposal.car.brand + ' ' +  $scope.proposal.car.model
                },
                {
                    label: 'Number of drivers',
                    value: $scope.proposal.drivers.length
                },
                {
                    label: 'Insurance plan',
                    value: $scope.proposal.plan.name
                }
            ]
        } else {
            $scope.previousStep();
        }
    }

    $scope.previousStep = () => {
        $location.path('/tarification');
    }

    $scope.createProposal = function() {
        userService.saveProposal($scope.proposal).then(
            function successCallback() {
                storageService.clearStorage();
                $location.path('/');
            },
            function errorCallback() {
                console.log("Greska");
        });
    }
}])