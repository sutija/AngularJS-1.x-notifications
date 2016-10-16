/**
 * AngularJS Notifications service
 * 
 * @author Marko Šutija <markosutija@gmail.com>
 * 2016
 */
app.service('notificationsService',['$q',function ($q) {
    
    var defer = $q.defer();

    this.types = {
        error:'error',
        success:'success',
        info:'info'
    };

    /**
     *
     * @param {Object} message
     */
    this.notify = function (type, message) {
        var notification = {type:type, message:message};
        defer.notify(notification);
    };

    /**
     *
     * @returns {Promise}
     */
    this.watchMe = function(){
        return defer.promise;
    };

}]);