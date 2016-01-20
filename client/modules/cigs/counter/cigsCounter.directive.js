/**
 * Created by student on 6.12.2015.
 */

angular.module('neviem')
    .directive('cigsCounter', CigsCounterDirective);

function CigsCounterDirective () {
    return {
        restrict: 'E',
        templateUrl: 'client/modules/cigs/counter/cigs-counter.ng.html',
        scope: {},
        controller: 'CigsCounterCtrl',
        controllerAs: 'vm'
    }
}
