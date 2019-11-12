proposalApp.controller('tarificationController', ['$scope', '$location', '$q', 'storageService', 'tabsService', 'userService',
    function($scope, $location, $q, storageService, tabsService, userService) {

    $scope.selectedPlan = null;
    tabsService.data.index = 3;

    $scope.init = function() {
        if (storageService.checkPageIndex(3)) {
            $scope.insurancePlans = userService.insurancePlans;
            for (let i = 0; i < $scope.insurancePlans.length; i++) {
                $scope.insurancePlans[i].isChecked = false;
            }

            $scope.insuranceItems = userService.insuranceItems;
            console.log($scope.insuranceItems);

            if (storageService.loadInsurancePlan() !== undefined) {
                $scope.selectedPlan = storageService.loadInsurancePlan();
                var p = $scope.insurancePlans.find(p => p.name === $scope.selectedPlan.name);
                p.isChecked = true;
                p.insuranceItems = $scope.selectedPlan.insuranceItems;
            }
        } else {
            $scope.previousStep();
        }
    }
    
    $scope.isItemChecked = function(plan, item) {
        return plan.insuranceItems.find(i => i.name === item.name);
    }

    $scope.checkUncheckItem = function(item) {
        var newItem = true;
        for (let i = 0; i < $scope.selectedPlan.insuranceItems.length; i++) {
            if ($scope.selectedPlan.insuranceItems[i].id === item.id) {
                $scope.selectedPlan.insuranceItems.splice(i, 1);
                newItem = false;
            }
        }

        if (newItem) {
            $scope.selectedPlan.insuranceItems.push(item);
        }
    }

    $scope.itemDisabled = function(plan, item) {
        if ($scope.selectedPlan === null) {
            return true;
        }
        return !(item.isOptional && $scope.selectedPlan.name === plan.name);
    }

    $scope.selectPlan = function(plan) {
        // de-chekiran checkbox
        if (!plan.isChecked) {
            for (let i = 0; i < $scope.insurancePlans.length; i++) {
                $scope.insurancePlans[i].isChecked = false;
            }
            $scope.selectedPlan = null;

        } else { // checkiran checkbox
            for (let i = 0; i < $scope.insurancePlans.length; i++) {
                if (plan === $scope.insurancePlans[i]) {
                    $scope.insurancePlans[i].isChecked = true;
                } else {
                    $scope.insurancePlans[i].isChecked = false;
                }
            }
            $scope.selectedPlan = plan;
        }
    }

    $scope.addInsurancePlan = function() {
        storageService.addInsurancePlan($scope.selectedPlan);
        storageService.setPageIndex(4);
        $location.path('/proposal');
    }

    $scope.previousStep = () => {
        $location.path('/identification');
    }
}])