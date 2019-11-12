proposalApp.controller('rootController', ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.$on('$routeChangeStart', function(next, current){
            switch (current.$$route.controller) {
                case 'newSubscriberController':
                case 'vehicleController':
                case 'identificationController':
                case 'tarificationController':
                case 'proposalController':
                    $rootScope.proposal = true;
                    break;
                default:
                    $rootScope.proposal = false;
                    break;
            }
        });
}])