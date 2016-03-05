// Is Dev
if (Package.templating && Package['reactive-var']) {
    var is_dev = new Package['reactive-var'].ReactiveVar(false);
    Meteor.call('bas:is_dev', function(error, result) {
        is_dev.set(result);
    });
    Package.templating.Template.registerHelper('is_dev', function() {
        return is_dev.get();
    });
}
