proposalApp.controller('vehicleController', ['$scope', '$location', 'storageService', 'tabsService', 
    function($scope, $location, storageService, tabsService) {

    $scope.init = function() {
        if (storageService.checkPageIndex(1)) {
            tabsService.data.index = 1;
            $scope.vehicle = {};

            $scope.vehicles = [
                {name: 'Audi', models: ['A3', 'A4', 'A5', 'Q7']},
                {name: 'BMW', models: ['X6', 'Z8']},
                {name: 'Citroen', models: ['C1', 'C3']},
                {name: 'Renault', models: ['Clio', 'Laguna', 'Megane']},
                {name: 'Toyota', models: ['Corolla', 'Prius', 'Hilux']},
            ]

            $scope.yearPattern = /^(19|20)\d{2}$/;

            $scope.vehicle = storageService.loadVehicle();
        } else {
            $scope.previousStep();
        }
    }

    $scope.selectBrand = function() {
        if ($scope.vehicle !== undefined) {
            $scope.selectedBrand = $scope.vehicles.find(v => v.name === $scope.vehicle.brand);
        }
    }

    $scope.addVehile = (isValid) => {
        if (isValid) {
            storageService.addVehicle($scope.vehicle);
            storageService.setPageIndex(2);
            $location.path('/identification');
        } else {
            console.log('Forma nije validna');
        }
    }

    $scope.previousStep = () => {
        $location.path('/subscriber');
    }
}])