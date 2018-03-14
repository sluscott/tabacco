/*
 * jQuery Tabacco plugin 1.0
 *
 * Copyright (c) 2018 Steve Luscott (sluscott)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Mon March 05 22:00 2018
 */
(function($, undefined) {
    $.fn.tabacco = function tabRoot(options) {
        var $context = this;
        var conf = {};
        $.fn.tabacco.settings = {
            $tabs: $(".tabacco-tabs li a", this),
            $panels: $(".tabacco-panel", this)
        }
        $.extend(conf, this.tabacco.settings, options);
        function stripPrefix(a) {
            return a.slice(1, a.length);
        }
        function tabHandler($elem) {
            var str = $elem[0].id;
            var strSliceIndx = str.lastIndexOf("tab");
            var str1 = str.slice(0,strSliceIndx);
            var str2 = str.slice(strSliceIndx,str.length);
            var str3 = str2.replace("tab","panel");
            var str4 = str1 + str3;
            var $targetPanel = $("#" + str4);
            var $hidePanels = ($(conf.$panels.selector));
            $hidePanels.hide().removeClass("active");
            conf.$tabs.removeClass("active");
            $elem.addClass("active");
            $targetPanel.toggleClass("active").show();
        }
        conf.$tabs.each(function setTabs(index) {
            $(this).attr("id", stripPrefix($context.selector) + "-" + "tabacco-tab" + "-" + index);
            $(this).attr("tabindex", index);
            if(index == 0) {
                $(this).addClass("active");
            }
        });
        conf.$panels.each(function setPanels(index) {
            $(this).attr("id", stripPrefix($context.selector) + "-" + "tabacco-panel" + "-" + index);
            $(this).attr("tabindex", index);
            if(index !== 0) {
                $(this).hide();
            }
            if(index == 0) {
                $(this).addClass("active");
            }
        });
        conf.$tabs.click(function(e) {
            e.preventDefault();
            tabHandler($(this));
        });
        return this;
    };
})(jQuery);