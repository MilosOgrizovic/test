proposalApp.directive('accidentsForm', function() {
    return {
        templateUrl: 'pages/accidentsForm.htm',
        scope: {
            driver: '=',
            addAccident: '&',
            removeAccident: '&'
        },
        link: function (scope) {
            scope.datePicker = {};

            for (let i = 0; i < scope.driver.accidents.length; i++) {
                scope.driver.accidents[i].happened = new Date(scope.driver.accidents[i].happened);
            }
            
            scope.openCalendar = function(accident) {
                scope.datePicker[accident.name] = true;
            }
        }
    }
});