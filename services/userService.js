proposalApp.service('userService', function($http) {

    var proposalUrl = 'http://localhost:8080/car-insurance/proposal/';
    var policyUrl = 'http://localhost:8080/car-insurance/policy/';

    this.maritalStatuses = {};
    this.countries = {};
    this.risks = {};
    this.insurancePlans = {};
    this.insuranceItems = {};
    this.paymentModes = {};
    this.creditCardTypes = {};

    this.getMaritalStatus = () => {
        return $http.get(proposalUrl + 'maritalStatuses');
    }

    this.getCountries = () => {
        return $http.get(proposalUrl + 'countries');
    }

    this.getRisks = () => {
        return $http.get(proposalUrl + 'risks');
    }

    this.getInsurancePlans = () => {
        return $http.get(proposalUrl + 'insurancePlans');
    }

    this.getInsuranceItems = () => {
        return $http.get(proposalUrl + 'insuranceItems');
    }

    this.saveProposal = (proposal) => {
        return $http.post(proposalUrl + 'proposal', proposal);
    }

    this.getProposals = () => {
        return $http.get(proposalUrl + 'proposals');
    }

    this.getPaymentModes = () => {
        return $http.get(policyUrl + 'paymentModes');
    }

    this.getCreditCardTypes = () => {
        return $http.get(policyUrl + 'creditCardTypes');
    }

    this.getProposalAmount = (id) => {
        return $http.get(policyUrl + 'proposal/amount/' + id);
    }

    this.savePolicy = (policy) => {
        return $http.post(policyUrl + 'policy', policy);
    }
})