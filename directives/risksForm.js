proposalApp.directive('risksForm', ['userService', function(userService) {
    return {
        templateUrl: 'pages/risksForm.htm',
        scope: {
            selectedRisks: '=',
        },
        link: function (scope) {
            userService.getRisks().then(
                function(response) {
                    scope.risks = response.data;

                    if (scope.selectedRisks.length !== 0){
                        scope.risks = scope.selectedRisks;
                    } else {
                        scope.selectedRisks = scope.risks;
                    }
                }
            );
        }
    }
}]);