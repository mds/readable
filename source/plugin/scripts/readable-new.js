//
//  Readable.js
//
//  Created by Matt D. Smith on 9/17/2015.
//  Copyright (c) 2015 Matt D. Smith. All rights reserved.
//

(function($) {
    var charCountShowing = false,
        prefix = 'rdbl';

    //ensure all browsers understand new semantics
    document.createElement('mark');

    $('body')
        .append(
            '<div class="' + prefix + '-switch">' +
                '<input id="' + prefix + '-toggle" class="' + prefix + '-toggle" type="checkbox" />' +
                '<label for="' + prefix + '-toggle"></label>' +
            '</div>'
        );

    var toggler = $('.' + prefix + '-toggle'),
        allParagraphs = $('p');

    toggler.on('click', function() {
        toggleHighlight();
    });

    setTimeout(function(){
        toggler.prop('checked', true);
        charCountShowing = true;

        addMarkers();

        setTimeout(function() {
            toggleHighlight();

            toggler.prop('checked', false);
        }, 2000);
    }, 1000);

    function addMarkers(){
        allParagraphs.each(function (){
            var $this = $(this),
                ohtml = $this.html(),
                otext = $this.text();

            $this.data('ocontent', ohtml).html(function() {
                return highlight(otext);
            });
        });
    }

    function highlight(text){
        text = text || "";

        if( text.length > 76 ) {
            var a = text.substring(0, 45);
            var b = text.substring(45, 75);
            var c = text.substring(75, text.length);

            text = a + "<mark class='" + prefix + "-highlight'>" + b + "</mark>" + c;
        }

        return text;
    }

    function toggleHighlight(){
        if( charCountShowing ){
            allParagraphs.html(function(){
                return $(this).data('ocontent');
            });
        } else {
            addMarkers();
        }

        charCountShowing = !charCountShowing;
    }
}(jQuery));
