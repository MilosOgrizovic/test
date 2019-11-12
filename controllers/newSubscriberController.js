proposalApp.controller('newSubscriberController', ['$scope', '$location', '$q', 'userService', 'storageService', 'tabsService', 
    function($scope, $location, $q, userService, storageService, tabsService) {

    tabsService.data.index = 0;
    $scope.subscriber = {};
    $scope.mobilePatern = /(^\d{3}-\d{3}-\d{3}$)/;
    $scope.singlePhone = false;
    $scope.datePicker = {};

    $scope.init = function() {
        $scope.maritalStatuses = userService.maritalStatuses;
        $scope.countries = userService.countries;
        $scope.subscriber = storageService.loadSubscriber();
        $scope.genders = storageService.genders;

        if ($scope.subscriber !== undefined) {
            $scope.selectedCountry = $scope.countries.find(c => c.name === $scope.subscriber.country.name);
            $scope.selectedMaritalStatus = $scope.maritalStatuses.find(ms => ms.description === $scope.subscriber.maritalStatus.description);
            $scope.selectedGender = $scope.genders.find(g => g.value === $scope.subscriber.gender).value;
            $scope.subscriber.birthDate = new Date($scope.subscriber.birthDate);
        }
    }

    $scope.openCalendar = function(name) {
        $scope.datePicker[name] = true;
    }
        
    $scope.addSubscriber = (isValid) => {
        if (isValid) {
            if ($scope.subscriber.homePhone !== '' || $scope.subscriber.mobilePhone !== '') {
                $scope.subscriber.roleId = 1;
                $scope.subscriber.birthDate = new Date($scope.subscriber.birthDate);
                storageService.addSubscriber($scope.subscriber);
                storageService.setPageIndex(1);
                $location.path('/vehicle');
            } else {
                $scope.singlePhone = true;
            }
        } else {
            console.log('Forma nije validna');
        }
    }
}])