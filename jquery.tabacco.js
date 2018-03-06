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
        var conf = {};
        $.fn.tabacco.settings = {
            $tabs: $(".tabacco-tabs li a"),
            $panels: $(".tabacco-panel")
        }
        $.extend(conf, this.tabacco.settings, options);
        function stripPrefix(a) {
            return a.slice(1, a.length);
        }
        function tabHandler(elem) {
            var targetNo = elem[0].tabIndex;
            var elemSel = conf.$panels.selector;
            var stripdSelector = stripPrefix(elemSel);
            var $showPanel = $("#" + stripdSelector + "-" + targetNo);
            conf.$panels.hide().removeClass("active");
            conf.$tabs.removeClass("active");
            elem.addClass("active");
            $showPanel.toggleClass("active").show();
        }
        function setBindingIds(elem, index, type) {
            if (type === true) {
                elem.attr("id", stripPrefix(conf.$tabs.selector) + "-" + index);
            } else {
                elem.attr("id", stripPrefix(conf.$panels.selector) + "-" + index);
            }
            elem.attr("tabindex", index);
        }
        conf.$tabs.each(function setTabs(index) {
            var isTab = true;
            setBindingIds($(this), index, isTab);
        });
        conf.$panels.each(function setPanels(index) {
            var isTab = false;
            setBindingIds($(this), index, isTab);
            if(index !== 0) {
                $(this).hide();
            }
        });
        conf.$tabs.click(function(e) {
            e.preventDefault();
            tabHandler($(this));
        });
        return this;
    };
})(jQuery);