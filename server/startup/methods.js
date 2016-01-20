/**
 * Created by student on 6.12.2015.
 */

(function () {
    Meteor.startup(function () {
        Meteor.methods({
            resetCigs: resetCigs,
            isTheOne: isTheOne
        });
    });

    function isTheOne () {
        var user = Meteor.user();
        var users = ['kucharik.s@gmail.com', 'kucharik@wezeo.com', "jan.stancek49@gmail.com"];

        return Meteor.user() && users.indexOf(user.services.google.email) != -1;
    }

    function resetCigs () {
        Cigs.remove({},callBack);

        function callBack(error) {
            if (error) {
                console.log(error)
            }
            else {
                addSampleCigs();
                console.log('cigs reloaded');
            }
        }
    }

    function addSampleCigs () {
        if (!Meteor.userId())
            return;

        var startupCigs = [
            {
                //timeStamp: moment("2015-12-05T22:32:21.196Z"),
                timeStamp: new Date("2015-12-05T22:32:21.196Z"),
                status: 'finished',
                location: 'home',
                mode: ['afterFood'],
                owner: Meteor.userId()
            },
            {
                //timeStamp: moment("2015-12-06T10:02:21.196Z"),
                timeStamp: new Date("2015-12-06T10:02:21.196Z"),
                status: 'wished',
                location: 'home',
                mode: ['studying', 'afterSuccess'],
                owner: Meteor.userId()
            },
            {
                timeStamp: new Date("2015-12-17T00:55:21"),
                status: 'finished',
                location: 'home',
                mode: ['studying', 'underStress'],
                owner: Meteor.userId()
            }
        ];

        for (var i = 0; i < startupCigs.length; i++) {
            console.log(startupCigs[i].timeStamp);
            Cigs.insert(startupCigs[i]);
        }
    }
})();
