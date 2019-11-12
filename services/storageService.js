proposalApp.service('storageService', ['$window', function($window) {

    this.addSubscriber = (subscriber) => {
        var value = angular.toJson(subscriber);
        $window.localStorage['subscriber'] = value;
    }

    this.loadSubscriber = () => {
        var value = $window.localStorage['subscriber'];
        return angular.fromJson(value);
    }

    this.addVehicle = (vehicle) => {
        var value = angular.toJson(vehicle);
        $window.localStorage['vehicle'] = value;
    }

    this.loadVehicle = () => {
        var value = $window.localStorage['vehicle'];
        return angular.fromJson(value);
    }

    this.addDrivers = (drivers) => {
        var value = angular.toJson(drivers);
        $window.localStorage['drivers'] = value;
    }

    this.loadDrivers = () => {
        var value = $window.localStorage['drivers'];
        return angular.fromJson(value);
    }

    this.addInsurancePlan = (insurancePlan) => {
        var value = angular.toJson(insurancePlan);
        $window.localStorage['insurancePlan'] = value;
    }

    this.loadInsurancePlan = () => {
        var value = $window.localStorage['insurancePlan'];
        return angular.fromJson(value);
    }

    this.setPageIndex = (index) => {
        oldValue = this.loadPageIndex();

        if (index > oldValue) {
            $window.localStorage['pageIndex'] = index;
        }
    }

    this.loadPageIndex = () => {
        var value = $window.localStorage['pageIndex'];
        if (value === undefined) {
            return 0;
        } else {
            return value;
        }
    }

    this.checkPageIndex = (index) => {
        var storageIndex = $window.localStorage['pageIndex'];
        if (index <= storageIndex) {
            return true;
        }
        return false;
    } 

    this.clearStorage = () => {
        $window.localStorage.clear();
    }

    this.createGenders = () => {
        this.genders = [
            {
                value: true,
                name: 'Mr'
            },
            {
                value: false,
                name: 'Ms'
            }
        ]
    }
}])