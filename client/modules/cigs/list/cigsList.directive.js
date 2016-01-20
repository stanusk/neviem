/**
 * Created by student on 6.12.2015.
 */

angular.module('neviem')
    .directive('cigsList', CigsListDirective);

function CigsListDirective () {
    return {
        restrict: 'E',
        templateUrl: 'client/modules/cigs/list/cigs-list.ng.html',
        scope: {},
        controller: 'CigsListCtrl',
        controllerAs: 'vm'
    }
}
