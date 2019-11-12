proposalApp.controller('confirmProposalController', ['$scope', '$location', 'userService', function($scope, $location, userService) {
    
    $scope.init = function() {
        userService.getProposals().then(
            function(response) {
                $scope.proposals = response.data;
                $scope.selectedProposal = null;
            }, function() {
                console.log('Greska');
            }
        );
    }

    $scope.selectProposal = function(proposal) {
        // de-chekiran checkbox
        if (!proposal.isChecked) {
            for (let i = 0; i < $scope.proposals.length; i++) {
                $scope.proposals[i].isChecked = false;
            }
            $scope.selectedProposal = null;

        } else { // checkiran checkbox
            for (let i = 0; i < $scope.proposals.length; i++) {
                if (proposal.id === $scope.proposals[i].id) {
                    $scope.proposals[i].isChecked = true;
                } else {
                    $scope.proposals[i].isChecked = false;
                }
            }
            $scope.selectedProposal = proposal;
        }
    }

    $scope.previousStep = () => {
        $location.path('/');
    }

    $scope.confirmProposal = function() {
        $location.path('/policy/' + $scope.selectedProposal.id);
    }
}])