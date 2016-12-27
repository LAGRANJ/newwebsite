//= require jquery
//= require turbolinks
//= require materialize-sprockets
ready = function() {
    $('.slider').slider({ full_width: true,Indicators: true });
    $('#mainmenu').pushpin({
        top: 150,
        bottom: 100000,
        offset: 0
    });
    // Initialize collapse button
    $(".brand-logo, .brand-logo-left").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();
}
$(document).on('click', '.menu_with_subitems', function() {
    $('.preloader-wrapper').show();
    $.ajax({
        url: "/menu/items",
        method: 'get',
        data: { menu_id: $(this).data("menu_id") },
        dataType: "script",
        success: function(data, textStatus) { $('.preloader-wrapper').hide(); },
        error: function() {}
    });
    return false;
})
$(document).ready(ready)
$(document).on('page:load', ready)