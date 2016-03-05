Package.describe({
    name: 'basgrani:bas-meteor-utils',
    version: '0.1.0',
    summary: 'Utilities for Meteor',
    git: 'https://github.com/Basgrani-Org/bas-meteor-utils'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    // Use
    api.use('underscore');
    api.use('jquery');
    api.use(['templating', 'reactive-var'], ['client'], {
        weak: true
    });

    // Imply
    api.imply('nooitaf:colors@0.0.2', ['server']);

    // Export
    api.export('BasUtils');

    // Config
    api.addFiles('config.js');

    // Common
    api.addFiles('common/helps.js');
    api.addFiles('common/object.js');
    api.addFiles('common/string.js');

    // Client
    api.addFiles('client.js', ['client']);

    // Server
    api.addFiles('server.js', ['server']);

    // Main
    api.addFiles('main.js');
});