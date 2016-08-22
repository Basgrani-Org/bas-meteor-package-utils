// Lib -> Object
(function (mtr) {
    // Set start point
    if(!BasMTR.object){ BasMTR.object = {}; }
    var _this = function(){return BasMTR.object;}();

    /* --------------------------------------- */
    /* Clone object
    /* --------------------------------------- */
    _this.clone_object = function(obj){
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        var temp = obj.constructor(); // give temp the original obj's constructor
        for (var key in obj) {
            temp[key] = _this.clone_object(obj[key]);
        }
        return temp;
    };

    /* --------------------------------------- */
    /* Compare object
    /* --------------------------------------- */
    _this.compare_objects = function(o1, o2){
        var k = '';
        for(k in o1) { if(o1[k] !== o2[k]) { return false; } }
        for(k in o2) { if(o1[k] !== o2[k]) { return false; } }
        return true;
    };

    /* --------------------------------------- */
    /* Item exists
    /* --------------------------------------- */
    _this.item_exists = function(haystack, needle){
        for(var i=0; i<haystack.length; i++) { if(_this.compare_objects(haystack[i], needle)) { return true; } }
        return false;
    };

    /* --------------------------------------- */
    /* Search objects
    /* --------------------------------------- */
    _this.search_objects = function(query, objects){
        var results = [];
        query = query.trim().toLowerCase();
        for(var i=0; i<objects.length; i++) {
            for(var key in objects[i]) {
                if(_this.is_string(objects[i][key])){
                    var obj = objects[i][key].toLowerCase();
                    if(obj.indexOf(query)!==-1) {
                        if(!_this.item_exists(results, objects[i])) { results.push(objects[i]); }
                    }
                }
            }
        }
        return results;
    };

    // Init only one once
    _this.init = function() {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        // ...
    });

    // Init
    if(!_this.is_init){_this.init();_this.is_init = true;}

}( Meteor ));
