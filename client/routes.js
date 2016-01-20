/**
 * Created by student on 6.12.2015.
 */

angular.module('neviem')
    .config(config)
    .run(run);

function config ($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        })
        .state('cigarettes', {
            url: '/cigarettes',
            template: '<cigs-overview></cigs-overview>'
        })
        .state('notTheOne', {
            url: '/you-are-not-me',
            templateUrl: 'client/modules/notTheOne/not-the-one.html'
        });

    $urlRouterProvider.otherwise('/cigarettes');
}

function run ($rootScope, $state, $log) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {
        // ak som to ja, je to ok
        if (Meteor.userId()) {
            $log.info('user logged in', Meteor.userId());
            return;
        }

        // ak ide na home, je to ok
        if (toState.name == 'home') {
            $log.info('destination "home"');
            return;
        }

        // ak ide na notTheOne, je to ok
        if (toState.name == 'notTheOne') {
            $log.info('redirecting unauthorised user');
            return;
        }

        $log.info('no user logged in');
        event.preventDefault();
        $state.go('home');
    });
}
