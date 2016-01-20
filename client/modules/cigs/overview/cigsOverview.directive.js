/**
 * Created by student on 17.12.2015.
 */

angular.module('neviem')
    .directive('cigsOverview', overviewDirective);

function overviewDirective () {
    return {
        restrict: 'E',
        templateUrl: 'client/modules/cigs/overview/cigs-overview.ng.html',
        controller: 'OverviewCtrl',
        controllerAs: 'vm'
    }
}
