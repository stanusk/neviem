/**
 * Created by student on 6.12.2015.
 *
 * timeStamp: moment('6.12.2015 10:00')
 * status: 'finished' / 'unfinished' / 'wished'
 * location: 'home' / 'work' / 'rest/pub'
 * mode: ['studying', 'afterSuccess', 'pissed', 'drinking', 'coffee']
 *
 */

(function () {
    Cigs = new Mongo.Collection('cigs');

    Cigs.allow({
        insert: function (userId, cig) {
            return userId && cig.owner == userId;
        },
        update: function (userId, cig, fields, modifier) {
            return userId && cig.owner == userId;
        },
        remove: function (userId, cig) {
            return userId && cig.owner;
        }
    });

    CigStatus = new Mongo.Collection('cigStatus');

    CigStatus.allow({
        insert: function () {
            return true;
        },
        update: function () {
            return true;
        },
        remove: function () {
            return true;
        }
    });

    CigLocation = new Mongo.Collection('cigLocation');

    CigLocation.allow({
        insert: function () {
            return true;
        },
        update: function () {
            return true;
        },
        remove: function () {
            return true;
        }
    });

    CigMode = new Mongo.Collection('cigMode');

    CigMode.allow({
        insert: function () {
            return true;
        },
        update: function () {
            return true;
        },
        remove: function () {
            return true;
        }
    });

})();
