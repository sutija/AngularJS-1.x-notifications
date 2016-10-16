/**
 * AngularJS Notifications directive
 * 
 * @author Marko Šutija <markosutija@gmail.com>
 * @requires notificationsService
 * 
 */
app.directive('notificationsViewer',
    ['notificationsService', '$timeout',
        function (notificationsService, $timeout) {
            return {
                template: '<div class="notification-container animation-item-drop-in {{notification.type}}" ng-repeat="notification in notifications track by $index"><div class="notification"><span>{{notification.message}}</span><a ng-click="closeMe(notification);">X</a></div></div>',
                link: function (scope, el, attrs) {
                    scope.notifications = [];

                    scope.closeMe = function (notification) {
                        removeNotification(notification);
                    };

                    var autoRemove = function (notification) {
                        $timeout(function () {
                            removeNotification(notification);
                        }, 4000);
                    };

                    function removeNotification(notification) {
                        var index = scope.notifications.indexOf(notification);
                        if (index >= 0) {
                            scope.notifications.splice(index, 1);
                        }
                    }

                    // Watch notifications changes
                    notificationsService.watchMe().then(
                        null,
                        null,
                        function (notification) {
                            scope.notifications.push(notification);
                            autoRemove(notification);
                        });
                }
            }
        }]);