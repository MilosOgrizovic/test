proposalApp.directive('tabs', ['$location', 'tabsService', function($location, tabsService) {
    return {
        templateUrl: 'pages/tabs.htm',
        scope: false,
        link: function(scope) {
            scope.data = tabsService.data;

            scope.home = function() {
                $location.path('/');
            }
        }
    }
}]);