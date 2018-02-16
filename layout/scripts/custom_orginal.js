jQuery(document).ready(function ($) {


    $('#flexmenu').slicknav({
        label: '',
        prependTo: '#flexmenubox'
    });
    $('#lyssarealspeakercont').on('click', function (event) {
        if (!$(this).attr('data-toggled') || $(this).attr('data-toggled') == 'off') {
            /* currently it's not been toggled, or it's been toggled to the 'off' state,
            so now toggle to the 'on' state: */
            $(this).attr('data-toggled', 'on');
            $('#ReadspeakerBox').show();
        }
        else if ($(this).attr('data-toggled') == 'on') {
            /* currently it has been toggled, and toggled to the 'on' state,
            so now turn off: */
            $(this).attr('data-toggled', 'off');
            $('#ReadspeakerBox').hide();
        }
        event.preventDefault();
        return false;
    });

    $('#logon img').on('click', function () {
        window.location.replace("http://www.barnensbibliotek.se");
    });


    // Cookie setting script wrapper
    var cookieScripts = function () {
        // Loading external javascript file
        $.cookiesDirective.loadScript({
            appendTo: 'eantics'
        });
    };


    /* Call cookiesDirective, overriding any default params
    
    *** These are the defaults ***
    explicitConsent: true,
    position: 'top',
    duration: 10,
    limit: 0,
    message: null,				
    cookieScripts: null,
    privacyPolicyUri: 'privacy.html',
    scriptWrapper: function(){},	
    fontFamily: 'helvetica',
    fontColor: '#FFFFFF',
    fontSize: '13px',
    backgroundColor: '#000000',
    backgroundOpacity: '80',
    linkColor: '#CA0000'
            
    */

    $.cookiesDirective({
        privacyPolicyUri: 'http://www.barnensbibliotek.se/Hem/OmBarnensbibliotek/Vad%C3%A4rkakor%28cookies%29/tabid/1227/Default.aspx',
        explicitConsent: false,
        position: 'bottom',
        scriptWrapper: cookieScripts,
        backgroundColor: '#E69417',
        linkColor: '#ffffff'
    });


});