// Lib -> User
(function (mtr) {
    // Set start point
    if (!BasMTR.user) {
        BasMTR.user = {};
    }
    var _this = function () {
        return BasMTR.user;
    }();

    _this.default_language = 'en';

    /* --------------------------------------- */
    /* Get user
    /* --------------------------------------- */
    _this.get_user = function (id) {
        return id ? mtr.users.findOne({_id: id}) : mtr.users.findOne({_id: _this.get_current_id()});
    };

    /* --------------------------------------- */
    /* Get current ID
    /* --------------------------------------- */
    _this.get_current_id = function () {
        return mtr.userId();
    };

    /* --------------------------------------- */
    /* Get roles
    /* --------------------------------------- */
    _this.get_roles = function (id) {
        var user = _this.get_user(id);

        return user.roles || '';
    };

    /* --------------------------------------- */
    /* Get label
    /* --------------------------------------- */
    _this.get_label = function (id, isEmail) {
        var user = _this.get_user(id);
        if (!user) {
            return 'none';
        }

        var label = '';

        if (user.username) {
            label = user.username;
        } else if (user.profile && user.profile.firstName) {
            label = user.profile.firstName;
        } else if (_this.get_email(id) !== '' && isEmail) {
            label = _this.get_email(id);
        }

        return label;
    };

    /* --------------------------------------- */
    /* Get email
    /* --------------------------------------- */
    _this.get_email = function (id) {
        var user = _this.get_user(id);

        var email = '';

        if (user.registered_emails && user.registered_emails.length) {
            email = user.registered_emails[0].address;
        } else if (user.emails && user.emails.length) {
            email = user.emails[0].address;
        }

        return email;
    };

    /* --------------------------------------- */
    /* Get avatar
    /* --------------------------------------- */
    _this.get_avatar = function (id) {
        var _avatar = _this.default_src_avatar;
        var user    = _this.get_user(id);

        if (user) {
            // Facebook
            if (user.profile && user.profile.facebookId) {
                _avatar = 'https://graph.facebook.com/' + user.profile.facebookId + '/picture?type=square&height=160&width=160';
            } else {
                _avatar = BasMTR.gravatar.image_url(_this.get_email(id), {secure: true, d: 'mm'});
            }
        }

        return _avatar;
    };

    /* --------------------------------------- */
    /* Get language
    /* --------------------------------------- */
    _this.get_language = function (id) {
        var user = _this.get_user(id);

        if (user && user.profile && user.profile.language) {
            return user.profile.language;
        } else {
            return _this.default_language;
        }
    };

    // Init only one once
    _this.init = function () {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        // ...
    });

    // Init
    if (!_this.is_init) {
        _this.init();
        _this.is_init = true;
    }

}(Meteor));