proposalApp.directive('driverForm', ['storageService', function(storageService) {
    return {
        templateUrl: 'pages/driverForm.htm',
        scope: {
            driver: '=',
            maritalStatuses: '=',
            identificationForm: '=',
            selectMaritalStatus: '&'
        },
        link: function(scope) {
            scope.genders = storageService.genders;

            if (scope.driver.gender !== undefined) {
                scope.selectedGender = scope.genders.find(g => g.value === scope.driver.gender).value;
            }

            scope.driver.birthDate = new Date(scope.driver.birthDate);
            scope.driver.driversLicenceObtained = new Date(scope.driver.driversLicenceObtained);

            scope.datePicker = {};
            scope.openCalendar = function(name) {
                scope.datePicker[name] = true;
            }
        }
    }
}]);