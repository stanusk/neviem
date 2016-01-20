/**
 * Created by student on 24.12.2015.
 */

angular.module('neviem').directive('home', HomeDirective);

function HomeDirective () {
    return {
        restrict: 'E',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        templateUrl: 'client/modules/home/home.html'
    }
}
