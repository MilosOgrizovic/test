proposalApp.directive('chooseDrivers', function() {
    return {
        templateUrl: 'pages/chooseDrivers.htm',
        scope: {
            driversOptions: '=',
            confirmDriversOptions: '&',
            previousStep: '&'
        }
    }
});