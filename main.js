/**
 * Created by jirisedlacek on 10.01.18.
 */
/* global mediaWiki, jQuery */

var wol = window.onload;
window.onload = function () {
    if (typeof wol === 'function') wol();

    (function (mw, $) {
        var entityId = mw.config.get('wbEntityId');
        if (!entityId) {
            return;
        }

        mw.loader.using(['mediawiki.util']).then(function () {
            var portletLink = mw.util.addPortletLink(
                'csfd-tb',
                '//tools.wikimedia.org/film/'+entityId,
                'CSFD Quickstatements link',
                'csfd-link',
                'Získá Quickstatements link s herci z ČSFD'
            );

        });
    })(mediaWiki, jQuery);
};