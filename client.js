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

// ifCond
if (Package.templating) {
    Package.templating.Template.registerHelper('ifCond', function (v1, operator, v2) {
        switch (operator) {
            case '==':
                return (v1 == v2);
            case '===':
                return (v1 === v2);
            case '<':
                return (v1 < v2);
            case '<=':
                return (v1 <= v2);
            case '>':
                return (v1 > v2);
            case '>=':
                return (v1 >= v2);
            case '&&':
                return (v1 && v2);
            case '||':
                return (v1 || v2);
            default:
                return null;
        }
    });
}
