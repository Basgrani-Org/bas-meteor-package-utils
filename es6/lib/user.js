import gravatar from '../lib/gravatar';

const User_ = ((mtr) => {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    const VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    let _defaultLanguage = 'en';

    let _defaultSrcAvatar = '';

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    class User_ {

        constructor() {

        }

        // Getters
        // ------------------------------------------------------------------------

        static get VERSION() {
            return VERSION;
        }

        static get defaultLanguage() {
            return _defaultLanguage;
        }

        static set defaultLanguage(lang) {
            _defaultLanguage = lang;
        }

        static get defaultSrcAvatar() {
            return _defaultSrcAvatar;
        }

        static set defaultSrcAvatar(avatar) {
            _defaultSrcAvatar = avatar;
        }

        // Public
        // ------------------------------------------------------------------------


        // Static
        // ------------------------------------------------------------------------

        // Get user
        static getUser(id) {
            return id ? mtr.users.findOne({_id: id}) : mtr.users.findOne({_id: User_.getCurrentId()});
        }

        // Get current ID
        static getCurrentId() {
            return mtr.userId();
        }

        // Get roles
        static getRoles(id) {
            let user = User_.getUser(id);

            return user.roles || '';
        }

        // Get label
        static getLabel(id, isEmail) {
            let user = User_.getUser(id);
            if (!user) {
                return 'none';
            }

            let label = '';

            if (user.profile && user.profile.firstName) {
                label = user.profile.firstName;
            } else if (user.username) {
                label = user.username;
            } else if (User_.getEmail(id) !== '' && isEmail) {
                label = User_.getEmail(id);
            }

            return label;
        }

        // Get email
        static getEmail(id) {
            let user = User_.getUser(id);

            let email = '';

            if (user && user.registered_emails && user.registered_emails.length) {
                email = user.registered_emails[0].address;
            } else if (user && user.emails && user.emails.length) {
                email = user.emails[0].address;
            }

            return email;
        }

        // Get avatar
        static getAvatar(id) {
            let _avatar = User_.defaultSrcAvatar;
            let user    = User_.getUser(id);

            if (user) {
                // Facebook
                if (user.profile && user.profile.facebookId) {
                    _avatar = 'https://graph.facebook.com/' + user.profile.facebookId + '/picture?type=square&height=160&width=160';
                } else {
                    // Gravatar
                    _avatar = gravatar.imageUrl(User_.getEmail(id), {secure: true, d: 'mm'});
                }
            }

            return _avatar;
        }

        // Get language
        static getLanguage(id, isDef=true) {
            let user = User_.getUser(id);

            if (user && user.profile && user.profile.language) {
                return user.profile.language;
            } else if(isDef) {
                return User_.defaultLanguage;
            } else {
                return null;
            }
        }

        // Static Private
        // ------------------------------------------------------------------------


    }

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------


    // ------------------------------------------------------------------------
    // Meteor
    // ------------------------------------------------------------------------

    // Meteor startup
    mtr.startup(function () {
        //...
    });

    return User_;

})(Meteor);

BasMTR.User = User_;
export default User_;
