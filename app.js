var proposalApp = angular.module('proposalApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])

proposalApp.run(['$rootScope', '$q', 'userService', 'storageService', function($rootScope, $q, userService, storageService) {
    $rootScope.initialized = false;

    $q.all([
        userService.getMaritalStatus(),
        userService.getCountries(),
        userService.getRisks(),
        userService.getInsurancePlans(),
        userService.getInsuranceItems(),
        userService.getPaymentModes(),
        userService.getCreditCardTypes(),
        storageService.createGenders()

    ]).then(function(data) {
        userService.maritalStatuses = data[0].data;
        userService.countries = data[1].data;
        userService.risks = data[2].data;
        userService.insurancePlans = data[3].data;
        userService.insuranceItems = data[4].data;
        userService.paymentModes = data[5].data;
        userService.creditCardTypes = data[6].data;

        $rootScope.initialized = true;
    });
}])







