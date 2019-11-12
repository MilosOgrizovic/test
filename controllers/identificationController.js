proposalApp.controller('identificationController', ['$scope', '$location', 'userService', 'storageService', 'tabsService',
    function($scope, $location, userService, storageService, tabsService) {
    
    tabsService.data.index = 2;

    $scope.init = function() {
        if (storageService.checkPageIndex(2)) {
            $scope.risks = userService.risks;
            $scope.maritalStatuses = userService.maritalStatuses;
            $scope.subscriber = storageService.loadSubscriber();
            $scope.driversList = storageService.loadDrivers();
            
            if ($scope.driversList === undefined) {
                $scope.driversList = [];
                $scope.driversVissible = false;
            } else {
                $scope.driversVissible = true;
            }
        
            $scope.driversOptions = {
                nmbOfDrivers: '1',
                driverIsSubscriber: false
            }
        } else {
            $scope.previousStep();
        }
    }

    $scope.confirmDriversOptions = function() {
        $scope.driversList = [];
        for (let i = 1; i <= $scope.driversOptions.nmbOfDrivers; i++) {
            $scope.driversList.push({
                index: i,
                driverSubscriber: (i === 1 && $scope.driversOptions.driverIsSubscriber) ? true : false,
                driverInfo: {},
                risks: [],
                accidents: []
            })
        }
        $scope.driversVissible = true;
    }

    $scope.previousStep = function() {
        $location.path('/vehicle');
    }

    $scope.changeDrivers = function() {
        $scope.driversVissible = false;
    }

    $scope.addAccident = function(driver) {
        driver.accidents.push({
            name: 'accident' +  driver.accidents.length,
            happened: new Date(),
            wasResponsible: false
        });
    }

    $scope.removeAccident = function(driver) {
        driver.accidents.splice(-1,1);
    }

    $scope.selectMaritalStatus = function(driver) {
        if (driver.maritalStatus !== undefined) {
            return $scope.maritalStatuses.find(ms => ms.description === driver.maritalStatus.description);
        }
    }

    $scope.checkIdentificationForm = function(forma) {
        if (forma.$valid) {
            storageService.addDrivers($scope.driversList);
            storageService.setPageIndex(3);
            $location.path('/tarification');
        }
    }
}])