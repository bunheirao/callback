function show( _ctr, _required, _controlOnly )
{
    var ctr=$( '[name=' + _ctr + ']' );
    var div=false;

    if( ctr.length == 0 ) {
        ctr= $( '#' + _ctr );
        div=true;
    }

    if( _controlOnly == undefined || !_controlOnly ) {
        ctr.parent().parent().parent().removeClass('d-none');

        if( _required ){
            ctr.parent().parent().addClass('required');
        } else {
            ctr.parent().parent().removeClass('required');
        }
    } else {
        ctr.parent().parent().removeClass('d-none');

        if( _required ){
            ctr.parent().addClass('required');
        } else {
            ctr.parent().removeClass('required');
        }
    }

    if(!div) {
        ctr.prop( 'required', _required)
    } else {
        ctr.prop( 'required', false)
    }
}

function hideAndClear( _ctr, _controlOnly )
{
    var ctr=$( '[name=' + _ctr + ']' );
    var div=false;

    if( ctr.length == 0 ) {
        ctr= $( '#' + _ctr );
        div=true;
    } else {
        // Clear regular input
        ctr.val('');        
        // Clear select2 option
        ctr.val(null).trigger('change');
        // Clear file upload
        //$('input[name=cd_journey_mosaCardDocument]').val('');
        $( '[name=__' + _ctr + ']' ).val('');
        $( '[name=__' + _ctr + ']' ).siblings('.custom-file-label').html('Select file');
        $( '[name=__' + _ctr + '_view]' ).prop('disabled', true);;         
    } 

    if( _controlOnly == undefined || !_controlOnly ) {
        ctr.parent().parent().parent().addClass('d-none');
    } else {
        ctr.parent().parent().addClass('d-none');
    }

    ctr.prop( 'required', false )

}

function initGoogleMaps(){

    // Get all maps, and initialise them
    $( ".google-map" ).each(function() {
        var id = $(this).attr('id');
        var fn = "initMap" + id;

        window[fn]();
    });

    // Get all address searches, and initialise them
    $( ".google-address-search" ).each(function() {
        var name = $(this).attr('name');
        var fn = "initAutocomplete" + name;

        window[fn]();
    });
}