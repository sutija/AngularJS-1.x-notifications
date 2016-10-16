/**
 * AngularJS Notifications animations
 * 
 * @author Marko Šutija <markosutija@gmail.com>
 * 2016
 * @requires velocity.js, jquery, ngAnimate
 */
app.animation('.animation-item-drop-in', [function () {
    return {
        enter: function (element, doneFn) {
            jQuery(element)
                .velocity({
                    height: jQuery(jQuery(element).children(':first')).outerHeight(),
                    translateZ:1
                }, {duration:600,
                    complete:doneFn});

        },
        leave: function (element, doneFn) {
            jQuery(element)
                .velocity({
                    height: 0,
                    translateZ:1
                }, {duration:600,
                    complete:doneFn});
        }
    }
}]);