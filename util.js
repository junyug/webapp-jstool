/**
 * Created by junyu.guo on 14-3-22
 * @description javascript tool's function
 * @author junyug
 * @verision 1.0.1
 */
;"use strict";
(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var util = {};
    factory(util);
    if (typeof define === "function" && define.amd) {
      define('util.js', util); // AMD
    } else {
      root.Util = util; // <script>
    }
  }
})(this, function (util) {
    /**
     * @name htmlEncode
     * @description HTML Encode
     * @param str
     * @returns {string}
     * @author junyug
     * @verision 1.0.0
     */
    util.htmlEncode = function(str) {
        var div = document.createElement("div");
        var txt = document.createTextNode(str);
        div.appendChild(txt);
        return div.innerHTML;
    };

    /**
     * @name htmlDecode
     * @description HTML Decode
     * @param html
     * @returns {string}
     * @author junyug
     * @verision 1.0.0
     */
    util.htmlDecode = function(html) {
        var div = document.createElement("div");
        div.innerHTML = html;
        return div.innerHTML;
    };

    /**
     * @name urlDecode
     * @description Url Decode
     * @param url
     * @param iscompontent
     * @returns {string}
     * @author junyug
     * @verision 1.0.0
     */
    util.urlDecode = function(url, iscompontent) {
        var temp = "";
        if(arguments.length === 1) iscompontent = true;
        if(iscompontent) {
            temp = decodeURIComponent(url);
        } else {
            temp = decodeURI(url);
        }
        return temp;
    };

    /**
     * @name urlEncode
     * @description Url Endoce
     * @param url
     * @param iscompontent
     * @returns {string}
     * @author junyug
     * @verision 1.0.0
     */
    util.urlEncode = function(url, iscompontent) {
        var temp = "";
        if(arguments.length === 1) iscompontent = true;
        if(iscompontent) {
            temp = encodeURIComponent(url);
        } else {
            temp = encodeURI(url);
        }
        return temp;
    };

    /**
     * @name trim
     * @description remove the string leading and trailing spaces
     * @param str
     * @returns {*}
     * @author junyug
     * @verision 1.0.0
     */
    util.trim = function(str) {
        var reg=/^\s*(.*\S)\s*$/;
        if(str.match(reg)) str = RegExp.$1;
        return str;
    };

    /**
     * @name ltrim
     * @description remove the string leading spaces
     * @param str
     * @returns {*}
     * @author junyug
     * @verision 1.0.0
     */
    util.ltrim = function(str) {
        return str.replace(/^\s*/,"");
    };

    /**
     * @name rtrim
     * @description remove the string trailing spaces
     * @param str
     * @returns {*}
     * @author junyug
     */
    util.rtrim = function(str) {
        return str.replace(/\s*$/,"");
    };

    /**
     * @name atrim
     * @description remove the string all spaces
     * @param str
     * @returns {*}
     * @author junyug
     * @verision 1.0.0
     */
    util.atrim = function(str) {
        return str.replace(/\s*/gm,"");
    };

    util.name = "util.js";
    util.version = "1.0.1";
    util.length = (function () {
        var length = 0;
        for (key in util) {
            if (typeof util[key] === "function") {
                length += 1;
            }
        }
        return length;
    })();
});
