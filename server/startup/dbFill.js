/**
 * Created by neviem on 10.1.2016.
 */

(function () {

    Meteor.startup(function () {
        addCigModes();
        addCigLocations();
        addCigStatusses();

        function addCigLocations () {
            //* location:
            if (!CigLocation.find().count()) {
                var locations = [
                    'home',
                    'work',
                    'rest/pub',
                    'event'
                ];

                locations.forEach(function (location) {
                    CigLocation.insert({value: location});
                })
            }
        }

        function addCigModes () {

            if (!CigMode.find().count()) {
                var modes = [
                    'alcohol',
                    'coffee',
                    'feelGood',
                    'feelBad',
                    'timeKill',
                    'addict'
                ];

                modes.forEach(function (mode) {
                    CigMode.insert({value: mode});
                });
            }
        }

        function addCigStatusses () {

            if (!CigStatus.find().count()) {

                var statuses = [
                    'finished',
                    'unfinished',
                    'wished'
                ];

                statuses.forEach(function (status) {
                    CigStatus.insert({value: status});
                });
            }
        }

    })

})();
