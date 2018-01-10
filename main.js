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
                'p-tb',
                '//tools.wikimedia.org/film/'+entityId,
                // TODO: i18n in this loader
                // msgs.portletlink,
                'CSFD Quickstatements link',
                'sbt-portletlink',
                // msgs.portlettooltip
                'Získá Quickstatements link s herci z ČSFD'
            );

        });
    })(mediaWiki, jQuery);
};