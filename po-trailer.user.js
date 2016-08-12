// ==UserScript==
// @name         Find trailer on PO
// @namespace    http://prijevodi-online.org/
// @version      0.3
// @description  Get link for searching youtube trailer for prijevodi-online
// @require      http://code.jquery.com/jquery-1.11.1.min.js
// @author       MilanRS
// @license      GNU GPL v3.0 http://www.gnu.org/licenses/gpl-3.0.txt
// @updateURL    https://github.com/MilanRS/po-find-movie-trailer/raw/master/po-trailer.user.js
// @match        http://www.prijevodi-online.org/smf/index.php?topic=*
// @match        http://www.prijevodi-online.org/smf/index.php/topic,*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        var headlineSection = $('#forumposts').find('.keyinfo').first();
        var isFirstPost = $(headlineSection).find('.smalltext').first().text().indexOf('#') == -1;
        if (isFirstPost) {
            var movie_name = $('#forumposts').find('.keyinfo').first().find('h5').text().trim();
            var movie_name2 = movie_name.split(' ').join('+');
            var links = '<p style="padding: 10px; line-height: 20px; width: 50%; font-weight: bold;">' +
                            '<a target="_blanc" href="https://www.google.ba/search?q=' + movie_name2 + '+trailer">Pronađi trailer za ' + movie_name + ' na Googleu</a><br/>' +
                            '<a target="_blanc" href="https://www.youtube.com/results?search_query=' + movie_name + '%20trailer">Pronađi trailer za ' + movie_name + ' na Youtubeu</a>' +
                         '</p>';
            $('.moderatorbar').first().prepend(links);
        }
    });
})();