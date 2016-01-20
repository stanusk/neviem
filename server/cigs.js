Meteor.publish('cigs', function () {
    var selector = {
        $and: [
            {owner: {$exists: true}},
            {owner: this.userId}
        ]
    };

    Counts.publish(this, 'numberOfCigs', Cigs.find(selector), {noReady: true});
    return Cigs.find(selector);
});

Meteor.publish('cigLocation', function () {
    return CigLocation.find({});
});

Meteor.publish('cigMode', function () {
    return CigMode.find({});
});

Meteor.publish('cigStatus', function () {
    return CigStatus.find({});
});