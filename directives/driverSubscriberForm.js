proposalApp.directive('driverSubscriberForm', ['$q', 'storageService', function($q, storageService) {
    return {
        templateUrl: 'pages/driverSubscriberForm.htm',
        scope: {
            driver: '=',
            maritalStatuses: '=',
            subscriber: '=',
            identificationForm: '='
        },
        link: function (scope) {
            scope.gender = storageService.genders.find(g => g.value === scope.subscriber.gender).name;
            scope.subscriber.birthDate = new Date(scope.subscriber.birthDate);
            scope.driver.driversLicenceObtained = new Date(scope.driver.driversLicenceObtained);

            scope.datePicker = {};
            scope.openCalendar = function(name) {
                scope.datePicker[name] = true;
            }
        }
    }
}]);