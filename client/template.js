// Is Dev
if (Template) {
    var is_dev = new ReactiveVar(false);
    Meteor.call('BasMTR:is_dev', function(error, result) {
        is_dev.set(result);
    });
    Template.registerHelper('is_dev', function() {
        return is_dev.get();
    });
}

// ifCond
if (Template) {
    Template.registerHelper('ifCond', function (v1, operator, v2) {
        switch (operator) {
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
