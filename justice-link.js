jQuery(document).ready ( function() {
    $('<span>&nbsp;<span><a target="_blank" href="https://or.justice.cz/ias/ui/rejstrik-$firma?nazev='+$('.wikibase-title-label').text().replace(" (Czechia)", "").replace('angličtina', '').replace(' (Czech Republic)','')+'&typHledani=STARTS_WITH&jenPlatne=PLATNE">Justice.cz link</a>').insertAfter('.wikibase-title-id');
});

