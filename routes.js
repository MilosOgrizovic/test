proposalApp.config(function ($routeProvider) {

    $routeProvider
    .when('/', { 
        templateUrl: 'pages/main.htm', 
        controller: 'mainController'
    })
    .when('/subscriber', { 
        templateUrl: 'pages/newSubscriber.htm', 
        controller: 'newSubscriberController'
    })
    .when('/vehicle', { 
        templateUrl: 'pages/vehicle.htm', 
        controller: 'vehicleController'
    })
    .when('/identification', { 
        templateUrl: 'pages/identification.htm', 
        controller: 'identificationController'
    })
    .when('/tarification', { 
        templateUrl: 'pages/tarification.htm', 
        controller: 'tarificationController'
    })
    .when('/proposal', { 
        templateUrl: 'pages/proposal.htm', 
        controller: 'proposalController'
    })
    .when('/confirmProposal', { 
        templateUrl: 'pages/confirmProposal.htm', 
        controller: 'confirmProposalController'
    })
    .when('/policy/:id', { 
        templateUrl: 'pages/policy.htm', 
        controller: 'policyController'
    })
    .when('/oldPolicies', { 
        templateUrl: 'pages/oldPolicies.htm', 
        controller: 'oldPoliciesController'
    })
    .otherwise({
        templateUrl: 'pages/main.htm', 
        controller: 'mainController'
    });
});