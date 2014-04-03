/**
 * Created by kelly on 14-3-22.
 * @description javascript tools
 * @author junyug
 * @verision 1.0.0
 */
;"use strict";
define(function(require, exports, module){
    module.exports = {
        /**
         * @name htmlEncode
         * @description HTML Encode
         * @param str
         * @returns {string}
         * @author junyug
         * @verision 1.0.0
         */
        htmlEncode : function(str) {
            var div = document.createElement("div");
            var txt = document.createTextNode(str);
            div.appendChild(txt);
            return div.innerHTML;
        },

        /**
         * @name htmlDecode
         * @description HTML Decode
         * @param html
         * @returns {string}
         * @author junyug
         * @verision 1.0.0
         */
        htmlDecode : function(html) {
            var div = document.createElement("div");
            div.innerHTML = html;
            return div.innerHTML;
        },

        /**
         * @name urlDecode
         * @description Url Decode
         * @param url
         * @param iscompontent
         * @returns {string}
         * @author junyug
         * @verision 1.0.0
         */
        urlDecode : function(url, iscompontent) {
            var temp = "";
            if(arguments.length === 1) iscompontent = true;
            if(iscompontent) {
                temp = decodeURIComponent(url);
            } else {
                temp = decodeURI(url);
            }
            return temp;
        },

        /**
         * @name urlEncode
         * @description Url Endoce
         * @param url
         * @param iscompontent
         * @returns {string}
         * @author junyug
         * @verision 1.0.0
         */
        urlEncode : function(url, iscompontent) {
            var temp = "";
            if(arguments.length === 1) iscompontent = true;
            if(iscompontent) {
                temp = encodeURIComponent(url);
            } else {
                temp = encodeURI(url);
            }
            return temp;
        },

        /**
         * @name trim
         * @description remove the string leading and trailing spaces
         * @param str
         * @returns {*}
         * @author junyug
         * @verision 1.0.0
         */
        trim : function(str) {
            var reg=/^\s*(.*\S)\s*$/;
            if(str.match(reg)) str = RegExp.$1;
            return str;
        },

        /**
         * @name ltrim
         * @description remove the string leading spaces
         * @param str
         * @returns {*}
         * @author junyug
         * @verision 1.0.0
         */
        ltrim : function(str) {
            return str.replace(/^\s*/,"");
        },

        /**
         * @name rtrim
         * @description remove the string trailing spaces
         * @param str
         * @returns {*}
         * @author junyug
         */
        rtrim : function(str) {
            return str.replace(/\s*$/,"");
        },

        /**
         * @name atrim
         * @description remove the string all spaces
         * @param str
         * @returns {*}
         * @author junyug
         * @verision 1.0.0
         */
        atrim : function(str) {
            return str.replace(/\s*/gm,"");
        }
    };
});