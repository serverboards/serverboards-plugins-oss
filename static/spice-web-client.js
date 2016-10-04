/* Modernizr 2.6.0 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-canvas-websockets-touch-webgl-shiv-cssclasses-teststyles-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}var d="2.6.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},q.webgl=function(){return!!a.WebGLRenderingContext},q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a};for(var E in q)y(q,E)&&(v=E.toLowerCase(),e[v]=q[E](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

//detect websockets binary support
//see https://github.com/Modernizr/Modernizr/issues/370
Modernizr.addTest('websocketsbinary', function() {
	var protocol = 'https:'==location.protocol?'wss':'ws',
		protoBin;

	if("WebSocket" in window) {
		if( protoBin = "binaryType" in WebSocket.prototype ) return protoBin;
		try {
			return !!(new WebSocket(protocol+'://.').binaryType);
		} catch (e){}
	}

	return false;
});
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);/**
 * jGestures: a jQuery plugin for gesture events 
 * Copyright 2010, Neue Digitale / Razorfish GmbH

 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 * 
 * This is still a beta version, bugfixes and improvements appreciated.
 * @copyright Neue Digitale / Razorfish GmbH 
 * @author martin.krause@neue-digitale.de
 * @version 0.87
 * 
 * @requires 
 * jQuery JavaScript Library v1.4.2 - http://jquery.com/
 * 	Copyright 2010, John Resig
 * 	Dual licensed under the MIT or GPL Version 2 licenses.
 * 	http://jquery.org/license
 */
(function(b){b.jGestures={};b.jGestures.defaults={};b.jGestures.defaults.thresholdPinchopen=0.05;b.jGestures.defaults.thresholdPinchmove=0.05;b.jGestures.defaults.thresholdPinch=0.05;b.jGestures.defaults.thresholdPinchclose=0.05;b.jGestures.defaults.thresholdRotatecw=5;b.jGestures.defaults.thresholdRotateccw=5;b.jGestures.defaults.thresholdMove=20;b.jGestures.defaults.thresholdSwipe=100;b.jGestures.data={};b.jGestures.data.capableDevicesInUserAgentString=["iPad","iPhone","iPod","Mobile Safari"];b.jGestures.data.hasGestures=(function(){var j;for(j=0;j<b.jGestures.data.capableDevicesInUserAgentString.length;j++){if(navigator.userAgent.indexOf(b.jGestures.data.capableDevicesInUserAgentString[j])!==-1){return true}}return false})();b.hasGestures=b.jGestures.data.hasGestures;b.jGestures.events={touchstart:"jGestures.touchstart",touchendStart:"jGestures.touchend;start",touchendProcessed:"jGestures.touchend;processed",gesturestart:"jGestures.gesturestart",gestureendStart:"jGestures.gestureend;start",gestureendProcessed:"jGestures.gestureend;processed"};jQuery.each({orientationchange_orientationchange01:"orientationchange",gestureend_pinchopen01:"pinchopen",gestureend_pinchclose01:"pinchclose",gestureend_rotatecw01:"rotatecw",gestureend_rotateccw01:"rotateccw",gesturechange_pinch01:"pinch",gesturechange_rotate01:"rotate",touchstart_swipe13:"swipemove",touchstart_swipe01:"swipeone",touchstart_swipe02:"swipetwo",touchstart_swipe03:"swipethree",touchstart_swipe04:"swipefour",touchstart_swipe05:"swipeup",touchstart_swipe06:"swiperightup",touchstart_swipe07:"swiperight",touchstart_swipe08:"swiperightdown",touchstart_swipe09:"swipedown",touchstart_swipe10:"swipeleftdown",touchstart_swipe11:"swipeleft",touchstart_swipe12:"swipeleftup",touchstart_tap01:"tapone",touchstart_tap02:"taptwo",touchstart_tap03:"tapthree",touchstart_tap04:"tapfour"},function(k,j){jQuery.event.special[j]={setup:function(){var q=k.split("_");var n=q[0];var l=q[1].slice(0,q[1].length-2);var o=jQuery(this);if(!o.data("ojQueryGestures")||!o.data("ojQueryGestures")[n]){var p=o.data("ojQueryGestures")||{};var m={};m[n]=true;b.extend(true,p,m);o.data("ojQueryGestures",p);if(b.hasGestures){switch(l){case"orientationchange":o.get(0).addEventListener("orientationchange",a,false);break;case"tap":case"swipe":case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":o.get(0).addEventListener("touchstart",g,false);break;case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":o.get(0).addEventListener("gesturestart",d,false);o.get(0).addEventListener("gestureend",h,false);break;case"pinch":case"rotate":o.get(0).addEventListener("gesturestart",d,false);o.get(0).addEventListener("gesturechange",e,false);break}}else{switch(l){case"tap":case"swipe":o.bind("mousedown",g);break;case"orientationchange":case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":case"pinch":case"rotate":break}}}return false},add:function(m){var l=jQuery(this);var n=l.data("ojQueryGestures");n[m.type]={originalType:m.type};return false},remove:function(m){var l=jQuery(this);var n=l.data("ojQueryGestures");n[m.type]=false;l.data("ojQueryGestures",n);return false},teardown:function(){var q=k.split("_");var n=q[0];var l=q[1].slice(0,q[1].length-2);var o=jQuery(this);if(!o.data("ojQueryGestures")||!o.data("ojQueryGestures")[n]){var p=o.data("ojQueryGestures")||{};var m={};m[n]=false;b.extend(true,p,m);o.data("ojQueryGestures",p);if(b.hasGestures){switch(l){case"orientationchange":o.get(0).removeEventListener("orientationchange",a,false);break;case"tap":case"swipe":case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":case"swipeleftup":o.get(0).removeEventListener("touchstart",g,false);o.get(0).removeEventListener("touchmove",f,false);o.get(0).removeEventListener("touchend",i,false);break;case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":o.get(0).removeEventListener("gesturestart",d,false);o.get(0).removeEventListener("gestureend",h,false);break;case"pinch":case"rotate":o.get(0).removeEventListener("gesturestart",d,false);o.get(0).removeEventListener("gesturechange",e,false);break}}else{switch(l){case"tap":case"swipe":o.unbind("mousedown",g);o.unbind("mousemove",f);o.unbind("mouseup",i);break;case"orientationchange":case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":case"pinch":case"rotate":break}}}return false}}});function c(j){j.startMove=(j.startMove)?j.startMove:{startX:null,startY:null,timestamp:null};var k=new Date().getTime();if(j.touches){var m=[{lastX:j.deltaX,lastY:j.deltaY,moved:null,startX:j.screenX-j.startMove.screenX,startY:j.screenY-j.startMove.screenY}];var l={vector:j.vector,orientation:window.orientation||null,lastX:((m[0].lastX>0)?+1:((m[0].lastX<0)?-1:0)),lastY:((m[0].lastY>0)?+1:((m[0].lastY<0)?-1:0)),startX:((m[0].startX>0)?+1:((m[0].startX<0)?-1:0)),startY:((m[0].startY>0)?+1:((m[0].startY<0)?-1:0))};m[0].moved=Math.sqrt(Math.pow(Math.abs(m[0].startX),2)+Math.pow(Math.abs(m[0].startY),2))}return{type:j.type||null,originalEvent:j.event||null,delta:m||null,direction:l||{orientation:window.orientation||null,vector:j.vector||null},duration:(j.startMove.timestamp)?k-j.timestamp:null,rotation:j.rotation||null,scale:j.scale||null,description:j.description||[j.type,":",j.touches,":",((m[0].lastX!=0)?((m[0].lastX>0)?"right":"left"):"steady"),":",((m[0].lastY!=0)?((m[0].lastY>0)?"down":"up"):"steady")].join("")}}function a(k){var j=["landscape:clockwise:","portrait:default:","landscape:counterclockwise:","portrait:upsidedown:"];b(window).triggerHandler("orientationchange",{direction:{orientation:window.orientation},description:["orientationchange:",j[((window.orientation/90)+1)],window.orientation].join("")})}function g(k){var j=jQuery(k.currentTarget);j.triggerHandler(b.jGestures.events.touchstart,k);if(b.hasGestures){k.currentTarget.addEventListener("touchmove",f,false);k.currentTarget.addEventListener("touchend",i,false)}else{j.bind("mousemove",f);j.bind("mouseup",i)}var m=j.data("ojQueryGestures");var l=(k.touches)?k.touches[0]:k;var n={};n.oLastSwipemove={screenX:l.screenX,screenY:l.screenY,timestamp:new Date().getTime()};n.oStartTouch={screenX:l.screenX,screenY:l.screenY,timestamp:new Date().getTime()};j.data("ojQueryGestures",b.extend(true,m,n))}function f(s){var u=jQuery(s.currentTarget);var r=u.data("ojQueryGestures");var p=!!s.touches;var k=(p)?s.changedTouches[0].screenX:s.screenX;var j=(p)?s.changedTouches[0].screenY:s.screenY;var q=r.oLastSwipemove;var n=k-q.screenX;var m=j-q.screenY;if(!!r.oLastSwipemove){var t=c({type:"swipemove",touches:(p)?s.touches.length:"1",screenY:j,screenX:k,deltaY:m,deltaX:n,startMove:q,event:s,timestamp:q.timestamp});u.triggerHandler(t.type,t)}var l={};var o=(s.touches)?s.touches[0]:s;l.oLastSwipemove={screenX:o.screenX,screenY:o.screenY,timestamp:new Date().getTime()};u.data("ojQueryGestures",b.extend(true,r,l))}function i(q){var u=jQuery(q.currentTarget);var w=!!q.changedTouches;var t=(w)?q.changedTouches.length:"1";var o=(w)?q.changedTouches[0].screenX:q.screenX;var n=(w)?q.changedTouches[0].screenY:q.screenY;u.triggerHandler(b.jGestures.events.touchendStart,q);if(b.hasGestures){q.currentTarget.removeEventListener("touchmove",f,false);q.currentTarget.removeEventListener("touchend",i,false)}else{u.unbind("mousemove",f);u.unbind("mouseup",i)}var l=u.data("ojQueryGestures");var x=(Math.abs(l.oStartTouch.screenX-o)>b.jGestures.defaults.thresholdMove||Math.abs(l.oStartTouch.screenY-n)>b.jGestures.defaults.thresholdMove)?true:false;var A=(Math.abs(l.oStartTouch.screenX-o)>b.jGestures.defaults.thresholdSwipe||Math.abs(l.oStartTouch.screenY-n)>b.jGestures.defaults.thresholdSwipe)?true:false;var z;for(z in l){var s=l.oStartTouch;var m={};var o=(w)?q.changedTouches[0].screenX:q.screenX;var n=(w)?q.changedTouches[0].screenY:q.screenY;var k=o-s.screenX;var j=n-s.screenY;var p=c({type:"swipe",touches:t,screenY:n,screenX:o,deltaY:j,deltaX:k,startMove:s,event:q,timestamp:s.timestamp});var v=["zero","one","two","three","four"];var r=false;switch(z){case"swipeone":if(w===false&&t==1&&x===false){break}if(w===false||(t==1&&x===true&&A===true)){r=true;p.type=["swipe",v[t]].join("");u.triggerHandler(p.type,p)}break;case"swipetwo":if((w&&t==2&&x===true&&A===true)){r=true;p.type=["swipe",v[t]].join("");u.triggerHandler(p.type,p)}break;case"swipethree":if((w&&t==3&&x===true&&A===true)){r=true;p.type=["swipe",v[t]].join("");u.triggerHandler(p.type,p)}break;case"swipefour":if((w&&t==4&&x===true&&A===true)){r=true;p.type=["swipe",v[t]].join("");u.triggerHandler(p.type,p)}break;case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":case"swipeleftup":if(w&&x===true&&A===true){r=true;p.type=["swipe",((p.delta[0].lastX!=0)?((p.delta[0].lastX>0)?"right":"left"):""),((p.delta[0].lastY!=0)?((p.delta[0].lastY>0)?"down":"up"):"")].join("");u.triggerHandler(p.type,p)}break;case"tapone":case"taptwo":case"tapthree":case"tapfour":if((x!==true&&r!==true)&&(v[t]==z.slice(3))){p.description=["tap",v[t]].join("");p.type=["tap",v[t]].join("");u.triggerHandler(p.type,p)}break}var y={};u.data("ojQueryGestures",b.extend(true,l,y));u.data("ojQueryGestures",b.extend(true,l,y))}u.triggerHandler(b.jGestures.events.touchendProcessed,q)}function d(k){var j=jQuery(k.currentTarget);j.triggerHandler(b.jGestures.events.gesturestart,k);var l=j.data("ojQueryGestures");var m={};m.oStartTouch={timestamp:new Date().getTime()};j.data("ojQueryGestures",b.extend(true,l,m))}function e(k){var j=jQuery(k.currentTarget);var o,l,q,n;var p=j.data("ojQueryGestures");var m;for(m in p){switch(m){case"pinch":o=k.scale;if(((o<1)&&(o%1)<(1-b.jGestures.defaults.thresholdPinchclose))||((o>1)&&(o%1)>(b.jGestures.defaults.thresholdPinchopen))){l=(o<1)?-1:+1;n=c({type:"pinch",scale:o,touches:null,startMove:p.oStartTouch,event:k,timestamp:p.oStartTouch.timestamp,vector:l,description:["pinch:",l,":",((o<1)?"close":"open")].join("")});j.triggerHandler(n.type,n)}break;case"rotate":o=k.rotation;if(((o<1)&&(-1*(o)>b.jGestures.defaults.thresholdRotateccw))||((o>1)&&(o>b.jGestures.defaults.thresholdRotatecw))){l=(o<1)?-1:+1;n=c({type:"rotate",rotation:o,touches:null,startMove:p.oStartTouch,event:k,timestamp:p.oStartTouch.timestamp,vector:l,description:["rotate:",l,":",((o<1)?"counterclockwise":"clockwise")].join("")});j.triggerHandler(n.type,n)}break}}}function h(k){var j=jQuery(k.currentTarget);j.triggerHandler(b.jGestures.events.gestureendStart,k);var m;var n=j.data("ojQueryGestures");var l;for(l in n){switch(l){case"pinchclose":m=k.scale;if((m<1)&&(m%1)<(1-b.jGestures.defaults.thresholdPinchclose)){j.triggerHandler("pinchclose",c({type:"pinchclose",scale:m,vector:-1,touches:null,startMove:n.oStartTouch,event:k,timestamp:n.oStartTouch.timestamp,description:"pinch:-1:close"}))}break;case"pinchopen":m=k.scale;if((m>1)&&(m%1)>(b.jGestures.defaults.thresholdPinchopen)){j.triggerHandler("pinchopen",c({type:"pinchopen",scale:m,vector:+1,touches:null,startMove:n.oStartTouch,event:k,timestamp:n.oStartTouch.timestamp,description:"pinch:+1:open"}))}break;case"rotatecw":m=k.rotation;if((m>1)&&(m>b.jGestures.defaults.thresholdRotatecw)){j.triggerHandler("rotatecw",c({type:"rotatecw",rotation:m,vector:+1,touches:null,startMove:n.oStartTouch,event:k,timestamp:n.oStartTouch.timestamp,description:"rotate:+1:clockwise"}))}break;case"rotateccw":m=k.rotation;if((m<1)&&(-1*(m)>b.jGestures.defaults.thresholdRotateccw)){j.triggerHandler("rotateccw",c({type:"rotateccw",rotation:m,vector:-1,touches:null,startMove:n.oStartTouch,event:k,timestamp:n.oStartTouch.timestamp,description:"rotate:-1:counterclockwise"}))}break}}j.triggerHandler(b.jGestures.events.gestureendProcessed,k)}})(jQuery);/*
 * Pixastic Lib - Core Functions - v0.1.3
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

var Pixastic = (function() {


	function addEvent(el, event, handler) {
		if (el.addEventListener)
			el.addEventListener(event, handler, false); 
		else if (el.attachEvent)
			el.attachEvent("on" + event, handler); 
	}

	function onready(handler) {
		var handlerDone = false;
		var execHandler = function() {
			if (!handlerDone) {
				handlerDone = true;
				handler();
			}
		}
		document.write("<"+"script defer src=\"//:\" id=\"__onload_ie_pixastic__\"></"+"script>");
		var script = document.getElementById("__onload_ie_pixastic__");
		script.onreadystatechange = function() {
			if (script.readyState == "complete") {
				script.parentNode.removeChild(script);
				execHandler();
			}
		}
		if (document.addEventListener)
			document.addEventListener("DOMContentLoaded", execHandler, false); 
		addEvent(window, "load", execHandler);
	}

	function init() {
		var imgEls = getElementsByClass("pixastic", null, "img");
		var canvasEls = getElementsByClass("pixastic", null, "canvas");
		var elements = imgEls.concat(canvasEls);
		for (var i=0;i<elements.length;i++) {
			(function() {

			var el = elements[i];
			var actions = [];
			var classes = el.className.split(" ");
			for (var c=0;c<classes.length;c++) {
				var cls = classes[c];
				if (cls.substring(0,9) == "pixastic-") {
					var actionName = cls.substring(9);
					if (actionName != "")
						actions.push(actionName);
				}
			}
			if (actions.length) {
				if (el.tagName.toLowerCase() == "img") {
					var dataImg = new Image();
					dataImg.src = el.src;
					if (dataImg.complete) {
						for (var a=0;a<actions.length;a++) {
							var res = Pixastic.applyAction(el, el, actions[a], null);
							if (res) 
								el = res;
						}
					} else {
						dataImg.onload = function() {
							for (var a=0;a<actions.length;a++) {
								var res = Pixastic.applyAction(el, el, actions[a], null)
								if (res) 
									el = res;
							}
						}
					}
				} else {
					setTimeout(function() {
						for (var a=0;a<actions.length;a++) {
							var res = Pixastic.applyAction(
								el, el, actions[a], null
							);
							if (res) 
								el = res;
						}
					},1);
				}
			}

			})();
		}
	}

	if (typeof pixastic_parseonload != "undefined" && pixastic_parseonload)
		onready(init);

	// getElementsByClass by Dustin Diaz, http://www.dustindiaz.com/getelementsbyclass/
	function getElementsByClass(searchClass,node,tag) {
	        var classElements = new Array();
	        if ( node == null )
	                node = document;
	        if ( tag == null )
	                tag = '*';

	        var els = node.getElementsByTagName(tag);
	        var elsLen = els.length;
	        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	        for (i = 0, j = 0; i < elsLen; i++) {
	                if ( pattern.test(els[i].className) ) {
	                        classElements[j] = els[i];
	                        j++;
	                }
	        }
	        return classElements;
	}

	var debugElement;

	function writeDebug(text, level) {
		if (!Pixastic.debug) return;
		try {
			switch (level) {
				case "warn" : 
					console.warn("Pixastic:", text);
					break;
				case "error" :
					console.error("Pixastic:", text);
					break;
				default:
					console.log("Pixastic:", text);
			}
		} catch(e) {
		}
		if (!debugElement) {
			
		}
	}

	// canvas capability checks

	var hasCanvas = (function() {
		var c = document.createElement("canvas");
		var val = false;
		try {
			val = !!((typeof c.getContext == "function") && c.getContext("2d"));
		} catch(e) {}
		return function() {
			return val;
		}
	})();

	var hasCanvasImageData = (function() {
		var c = document.createElement("canvas");
		var val = false;
		var ctx;
		try {
			if (typeof c.getContext == "function" && (ctx = c.getContext("2d"))) {
				val = (typeof ctx.getImageData == "function");
			}
		} catch(e) {}
		return function() {
			return val;
		}
	})();

	var hasGlobalAlpha = (function() {
		var hasAlpha = false;
		var red = document.createElement("canvas");
		if (hasCanvas() && hasCanvasImageData()) {
			red.width = red.height = 1;
			var redctx = red.getContext("2d");
			redctx.fillStyle = "rgb(255,0,0)";
			redctx.fillRect(0,0,1,1);
	
			var blue = document.createElement("canvas");
			blue.width = blue.height = 1;
			var bluectx = blue.getContext("2d");
			bluectx.fillStyle = "rgb(0,0,255)";
			bluectx.fillRect(0,0,1,1);
	
			redctx.globalAlpha = 0.5;
			redctx.drawImage(blue, 0, 0);
			var reddata = redctx.getImageData(0,0,1,1).data;
	
			hasAlpha = (reddata[2] != 255);
		}
		return function() {
			return hasAlpha;
		}
	})();


	// return public interface

	return {

		parseOnLoad : false,

		debug : false,
		
		applyAction : function(img, dataImg, actionName, options) {

			options = options || {};

			var imageIsCanvas = (img.tagName.toLowerCase() == "canvas");
			if (imageIsCanvas && Pixastic.Client.isIE()) {
				if (Pixastic.debug) writeDebug("Tried to process a canvas element but browser is IE.");
				return false;
			}

			var canvas, ctx;
			var hasOutputCanvas = false;
			if (Pixastic.Client.hasCanvas()) {
				hasOutputCanvas = !!options.resultCanvas;
				canvas = options.resultCanvas || document.createElement("canvas");
				ctx = canvas.getContext("2d");
			}

			var w = img.offsetWidth;
			var h = img.offsetHeight;

			if (imageIsCanvas) {
				w = img.width;
				h = img.height;
			}

			// offsetWidth/Height might be 0 if the image is not in the document
			if (w == 0 || h == 0) {
				if (img.parentNode == null) {
					// add the image to the doc (way out left), read its dimensions and remove it again
					var oldpos = img.style.position;
					var oldleft = img.style.left;
					img.style.position = "absolute";
					img.style.left = "-9999px";
					document.body.appendChild(img);
					w = img.offsetWidth;
					h = img.offsetHeight;
					document.body.removeChild(img);
					img.style.position = oldpos;
					img.style.left = oldleft;
				} else {
					if (Pixastic.debug) writeDebug("Image has 0 width and/or height.");
					return;
				}
			}

			if (actionName.indexOf("(") > -1) {
				var tmp = actionName;
				actionName = tmp.substr(0, tmp.indexOf("("));
				var arg = tmp.match(/\((.*?)\)/);
				if (arg[1]) {
					arg = arg[1].split(";");
					for (var a=0;a<arg.length;a++) {
						thisArg = arg[a].split("=");
						if (thisArg.length == 2) {
							if (thisArg[0] == "rect") {
								var rectVal = thisArg[1].split(",");
								options[thisArg[0]] = {
									left : parseInt(rectVal[0],10)||0,
									top : parseInt(rectVal[1],10)||0,
									width : parseInt(rectVal[2],10)||0,
									height : parseInt(rectVal[3],10)||0
								}
							} else {
								options[thisArg[0]] = thisArg[1];
							}
						}
					}
				}
			}

			if (!options.rect) {
				options.rect = {
					left : 0, top : 0, width : w, height : h
				};
			} else {
				options.rect.left = Math.round(options.rect.left);
				options.rect.top = Math.round(options.rect.top);
				options.rect.width = Math.round(options.rect.width);
				options.rect.height = Math.round(options.rect.height);
			}

			var validAction = false;
			if (Pixastic.Actions[actionName] && typeof Pixastic.Actions[actionName].process == "function") {
				validAction = true;
			}
			if (!validAction) {
				if (Pixastic.debug) writeDebug("Invalid action \"" + actionName + "\". Maybe file not included?");
				return false;
			}
			if (!Pixastic.Actions[actionName].checkSupport()) {
				if (Pixastic.debug) writeDebug("Action \"" + actionName + "\" not supported by this browser.");
				return false;
			}

			if (Pixastic.Client.hasCanvas()) {
				if (canvas !== img) {
					canvas.width = w;
					canvas.height = h;
				}
				if (!hasOutputCanvas) {
					canvas.style.width = w+"px";
					canvas.style.height = h+"px";
				}
				ctx.drawImage(dataImg,0,0,w,h);

				if (!img.__pixastic_org_image) {
					canvas.__pixastic_org_image = img;
					canvas.__pixastic_org_width = w;
					canvas.__pixastic_org_height = h;
				} else {
					canvas.__pixastic_org_image = img.__pixastic_org_image;
					canvas.__pixastic_org_width = img.__pixastic_org_width;
					canvas.__pixastic_org_height = img.__pixastic_org_height;
				}

			} else if (Pixastic.Client.isIE() && typeof img.__pixastic_org_style == "undefined") {
				img.__pixastic_org_style = img.style.cssText;
			}

			var params = {
				image : img,
				canvas : canvas,
				width : w,
				height : h,
				useData : true,
				options : options
			}

			// Ok, let's do it!

			var res = Pixastic.Actions[actionName].process(params);

			if (!res) {
				return false;
			}

			if (Pixastic.Client.hasCanvas()) {
				if (params.useData) {
					if (Pixastic.Client.hasCanvasImageData()) {
						canvas.getContext("2d").putImageData(params.canvasData, options.rect.left, options.rect.top);

						// Opera doesn't seem to update the canvas until we draw something on it, lets draw a 0x0 rectangle.
						// Is this still so?
						canvas.getContext("2d").fillRect(0,0,0,0);
					}
				}

				if (!options.leaveDOM) {
					// copy properties and stuff from the source image
					canvas.title = img.title;
					canvas.imgsrc = img.imgsrc;
					if (!imageIsCanvas) canvas.alt  = img.alt;
					if (!imageIsCanvas) canvas.imgsrc = img.src;
					canvas.className = img.className;
					canvas.style.cssText = img.style.cssText;
					canvas.name = img.name;
					canvas.tabIndex = img.tabIndex;
					canvas.id = img.id;
					if (img.parentNode && img.parentNode.replaceChild) {
						img.parentNode.replaceChild(canvas, img);
					}
				}

				options.resultCanvas = canvas;

				return canvas;
			}

			return img;
		},

		prepareData : function(params, getCopy) {
			var ctx = params.canvas.getContext("2d");
			var rect = params.options.rect;
			var dataDesc = ctx.getImageData(rect.left, rect.top, rect.width, rect.height);
			var data = dataDesc.data;
			if (!getCopy) params.canvasData = dataDesc;
			return data;
		},

		// load the image file
		process : function(img, actionName, options, callback) {
			if (img.tagName.toLowerCase() == "img") {
				var dataImg = new Image();
				dataImg.src = img.src;
				if (dataImg.complete) {
					var res = Pixastic.applyAction(img, dataImg, actionName, options);
					if (callback) callback(res);
					return res;
				} else {
					dataImg.onload = function() {
						var res = Pixastic.applyAction(img, dataImg, actionName, options)
						if (callback) callback(res);
					}
				}
			}
			if (img.tagName.toLowerCase() == "canvas") {
				var res = Pixastic.applyAction(img, img, actionName, options);
				if (callback) callback(res);
				return res;
			}
		},

		revert : function(img) {
			if (Pixastic.Client.hasCanvas()) {
				if (img.tagName.toLowerCase() == "canvas" && img.__pixastic_org_image) {
					img.width = img.__pixastic_org_width;
					img.height = img.__pixastic_org_height;
					img.getContext("2d").drawImage(img.__pixastic_org_image, 0, 0);

					if (img.parentNode && img.parentNode.replaceChild) {
						img.parentNode.replaceChild(img.__pixastic_org_image, img);
					}

					return img;
				}
			} else if (Pixastic.Client.isIE()) {
 				if (typeof img.__pixastic_org_style != "undefined")
					img.style.cssText = img.__pixastic_org_style;
			}
		},

		Client : {
			hasCanvas : hasCanvas,
			hasCanvasImageData : hasCanvasImageData,
			hasGlobalAlpha : hasGlobalAlpha,
			isIE : function() {
				return !!document.all && !!window.attachEvent && !window.opera;
			}
		},

		Actions : {}
	}


})();
/*
 * Pixastic Lib - jQuery plugin
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

if (typeof jQuery != "undefined" && jQuery && jQuery.fn) {
	jQuery.fn.pixastic = function(action, options) {
		var newElements = [];
		this.each(
			function () {
				if (this.tagName.toLowerCase() == "img" && !this.complete) {
					return;
				}
				var res = Pixastic.process(this, action, options);
				if (res) {
					newElements.push(res);
				}
			}
		);
		if (newElements.length > 0)
			return jQuery(newElements);
		else
			return this;
	};

};
/*
 * Pixastic Lib - Blend - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.blend = {

	process : function(params) {
		var amount = parseFloat(params.options.amount);
		var mode = (params.options.mode || "normal").toLowerCase();
		var image = params.options.image;

		amount = Math.max(0,Math.min(1,amount));

		if (!image) return false;

		if (Pixastic.Client.hasCanvasImageData()) {

			var rect = params.options.rect;
			var data = Pixastic.prepareData(params);
			var w = rect.width;
			var h = rect.height;

			params.useData = false;

			var otherCanvas = document.createElement("canvas");
			otherCanvas.width = params.canvas.width;
			otherCanvas.height = params.canvas.height;
			var otherCtx = otherCanvas.getContext("2d");
			otherCtx.drawImage(image,0,0);

			var params2 = {canvas:otherCanvas,options:params.options};
			var data2 = Pixastic.prepareData(params2);
			var dataDesc2 = params2.canvasData;

			var p = w*h;
			var pix = p*4;
			var pix1, pix2;
			var r1, g1, b1;
			var r2, g2, b2;
			var r3, g3, b3;
			var r4, g4, b4;

			var dataChanged = false;

			switch (mode) {
				case "normal" : 
					//while (p--) {
					//	data2[pix-=4] = data2[pix];
					//	data2[pix1=pix+1] = data2[pix1];
					//	data2[pix2=pix+2] = data2[pix2];
					//}
					break;

				case "multiply" : 
					while (p--) {
						data2[pix-=4] = data[pix] * data2[pix] / 255;
						data2[pix1=pix+1] = data[pix1] * data2[pix1] / 255;
						data2[pix2=pix+2] = data[pix2] * data2[pix2] / 255;
					}
					dataChanged = true;
					break;

				case "lighten" : 
					while (p--) {
						if ((r1 = data[pix-=4]) > data2[pix])
							data2[pix] = r1;
						if ((g1 = data[pix1=pix+1]) > data2[pix1])
							data2[pix1] = g1;
						if ((b1 = data[pix2=pix+2]) > data2[pix2])
							data2[pix2] = b1;
					}
					dataChanged = true;
					break;

				case "darken" : 
					while (p--) {
						if ((r1 = data[pix-=4]) < data2[pix])
							data2[pix] = r1;
						if ((g1 = data[pix1=pix+1]) < data2[pix1])
							data2[pix1] = g1;
						if ((b1 = data[pix2=pix+2]) < data2[pix2])
							data2[pix2] = b1;

					}
					dataChanged = true;
					break;

				case "darkercolor" : 
					while (p--) {
						if (((r1 = data[pix-=4])*0.3+(g1 = data[pix1=pix+1])*0.59+(b1 = data[pix2=pix+2])*0.11) <= (data2[pix]*0.3+data2[pix1]*0.59+data2[pix2]*0.11)) {
							data2[pix] = r1;
							data2[pix1] = g1;
							data2[pix2] = b1;
						}
					}
					dataChanged = true;
					break;

				case "lightercolor" : 
					while (p--) {
						if (((r1 = data[pix-=4])*0.3+(g1 = data[pix1=pix+1])*0.59+(b1 = data[pix2=pix+2])*0.11) > (data2[pix]*0.3+data2[pix1]*0.59+data2[pix2]*0.11)) {
							data2[pix] = r1;
							data2[pix1] = g1;
							data2[pix2] = b1;
						}
					}
					dataChanged = true;
					break;

				case "lineardodge" : 
					/*
					otherCtx.globalCompositeOperation = "source-over";
					otherCtx.drawImage(params.canvas, 0, 0);
					otherCtx.globalCompositeOperation = "lighter";
					otherCtx.drawImage(image, 0, 0);
					*/

					while (p--) {
						if ((r3 = data[pix-=4] + data2[pix]) > 255)
							data2[pix] = 255;
						else
							data2[pix] = r3;
						if ((g3 = data[pix1=pix+1] + data2[pix1]) > 255)
							data2[pix1] = 255;
						else
							data2[pix1] = g3;
						if ((b3 = data[pix2=pix+2] + data2[pix2]) > 255)
							data2[pix2] = 255;
						else
							data2[pix2] = b3;
					}
					dataChanged = true;

					break;

				case "linearburn" : 
					while (p--) {
						if ((r3 = data[pix-=4] + data2[pix]) < 255)
							data2[pix] = 0;
						else
							data2[pix] = (r3 - 255);
						if ((g3 = data[pix1=pix+1] + data2[pix1]) < 255)
							data2[pix1] = 0;
						else
							data2[pix1] = (g3 - 255);
						if ((b3 = data[pix2=pix+2] + data2[pix2]) < 255)
							data2[pix2] = 0;
						else
							data2[pix2] = (b3 - 255);
					}
					dataChanged = true;
					break;

				case "difference" : 
					while (p--) {
						if ((r3 = data[pix-=4] - data2[pix]) < 0)
							data2[pix] = -r3;
						else
							data2[pix] = r3;
						if ((g3 = data[pix1=pix+1] - data2[pix1]) < 0)
							data2[pix1] = -g3;
						else
							data2[pix1] = g3;
						if ((b3 = data[pix2=pix+2] - data2[pix2]) < 0)
							data2[pix2] = -b3;
						else
							data2[pix2] = b3;
					}
					dataChanged = true;
					break;

				case "screen" : 
					while (p--) {
						data2[pix-=4] = (255 - ( ((255-data2[pix])*(255-data[pix])) >> 8));
						data2[pix1=pix+1] = (255 - ( ((255-data2[pix1])*(255-data[pix1])) >> 8));
						data2[pix2=pix+2] = (255 - ( ((255-data2[pix2])*(255-data[pix2])) >> 8));
					}
					dataChanged = true;
					break;

				case "exclusion" : 
					var div_2_255 = 2 / 255;
					while (p--) {
						data2[pix-=4] = (r1 = data[pix]) - (r1 * div_2_255 - 1) * data2[pix];
						data2[pix1=pix+1] = (g1 = data[pix1]) - (g1 * div_2_255 - 1) * data2[pix1];
						data2[pix2=pix+2] = (b1 = data[pix2]) - (b1 * div_2_255 - 1) * data2[pix2];
					}
					dataChanged = true;
					break;

				case "overlay" : 
					var div_2_255 = 2 / 255;
					while (p--) {
						if ((r1 = data[pix-=4]) < 128)
							data2[pix] = data2[pix]*r1*div_2_255;
						else
							data2[pix] = 255 - (255-data2[pix])*(255-r1)*div_2_255;

						if ((g1 = data[pix1=pix+1]) < 128)
							data2[pix1] = data2[pix1]*g1*div_2_255;
						else
							data2[pix1] = 255 - (255-data2[pix1])*(255-g1)*div_2_255;

						if ((b1 = data[pix2=pix+2]) < 128)
							data2[pix2] = data2[pix2]*b1*div_2_255;
						else
							data2[pix2] = 255 - (255-data2[pix2])*(255-b1)*div_2_255;

					}
					dataChanged = true;
					break;

				case "softlight" : 
					var div_2_255 = 2 / 255;
					while (p--) {
						if ((r1 = data[pix-=4]) < 128)
							data2[pix] = ((data2[pix]>>1) + 64) * r1 * div_2_255;
						else
							data2[pix] = 255 - (191 - (data2[pix]>>1)) * (255-r1) * div_2_255;

						if ((g1 = data[pix1=pix+1]) < 128)
							data2[pix1] = ((data2[pix1]>>1)+64) * g1 * div_2_255;
						else
							data2[pix1] = 255 - (191 - (data2[pix1]>>1)) * (255-g1) * div_2_255;

						if ((b1 = data[pix2=pix+2]) < 128)
							data2[pix2] = ((data2[pix2]>>1)+64) * b1 * div_2_255;
						else
							data2[pix2] = 255 - (191 - (data2[pix2]>>1)) * (255-b1) * div_2_255;

					}
					dataChanged = true;
					break;

				case "hardlight" : 
					var div_2_255 = 2 / 255;
					while (p--) {
						if ((r2 = data2[pix-=4]) < 128)
							data2[pix] = data[pix] * r2 * div_2_255;
						else
							data2[pix] = 255 - (255-data[pix]) * (255-r2) * div_2_255;

						if ((g2 = data2[pix1=pix+1]) < 128)
							data2[pix1] = data[pix1] * g2 * div_2_255;
						else
							data2[pix1] = 255 - (255-data[pix1]) * (255-g2) * div_2_255;

						if ((b2 = data2[pix2=pix+2]) < 128)
							data2[pix2] = data[pix2] * b2 * div_2_255;
						else
							data2[pix2] = 255 - (255-data[pix2]) * (255-b2) * div_2_255;

					}
					dataChanged = true;
					break;

				case "colordodge" : 
					while (p--) {
						if ((r3 = (data[pix-=4]<<8)/(255-(r2 = data2[pix]))) > 255 || r2 == 255)
							data2[pix] = 255;
						else
							data2[pix] = r3;

						if ((g3 = (data[pix1=pix+1]<<8)/(255-(g2 = data2[pix1]))) > 255 || g2 == 255)
							data2[pix1] = 255;
						else
							data2[pix1] = g3;

						if ((b3 = (data[pix2=pix+2]<<8)/(255-(b2 = data2[pix2]))) > 255 || b2 == 255)
							data2[pix2] = 255;
						else
							data2[pix2] = b3;
					}
					dataChanged = true;
					break;

				case "colorburn" : 
					while (p--) {
						if ((r3 = 255-((255-data[pix-=4])<<8)/data2[pix]) < 0 || data2[pix] == 0)
							data2[pix] = 0;
						else
							data2[pix] = r3;

						if ((g3 = 255-((255-data[pix1=pix+1])<<8)/data2[pix1]) < 0 || data2[pix1] == 0)
							data2[pix1] = 0;
						else
							data2[pix1] = g3;

						if ((b3 = 255-((255-data[pix2=pix+2])<<8)/data2[pix2]) < 0 || data2[pix2] == 0)
							data2[pix2] = 0;
						else
							data2[pix2] = b3;
					}
					dataChanged = true;
					break;

				case "linearlight" : 
					while (p--) {
						if ( ((r3 = 2*(r2=data2[pix-=4])+data[pix]-256) < 0) || (r2 < 128 && r3 < 0)) {
							data2[pix] = 0
						} else {
							if (r3 > 255)
								data2[pix] = 255;
							else
								data2[pix] = r3;
						}
						if ( ((g3 = 2*(g2=data2[pix1=pix+1])+data[pix1]-256) < 0) || (g2 < 128 && g3 < 0)) {
							data2[pix1] = 0
						} else {
							if (g3 > 255)
								data2[pix1] = 255;
							else
								data2[pix1] = g3;
						}
						if ( ((b3 = 2*(b2=data2[pix2=pix+2])+data[pix2]-256) < 0) || (b2 < 128 && b3 < 0)) {
							data2[pix2] = 0
						} else {
							if (b3 > 255)
								data2[pix2] = 255;
							else
								data2[pix2] = b3;
						}
					}
					dataChanged = true;
					break;

				case "vividlight" : 
					while (p--) {
						if ((r2=data2[pix-=4]) < 128) {
							if (r2) {
								if ((r3 = 255 - ((255-data[pix])<<8) / (2*r2)) < 0) 
									data2[pix] = 0;
								else
									data2[pix] = r3
							} else {
								data2[pix] = 0;
							}
						} else if ((r3 = (r4=2*r2-256)) < 255) {
							if ((r3 = (data[pix]<<8)/(255-r4)) > 255) 
								data2[pix] = 255;
							else
								data2[pix] = r3;
						} else {
							if (r3 < 0) 
								data2[pix] = 0;
							else
								data2[pix] = r3
						}

						if ((g2=data2[pix1=pix+1]) < 128) {
							if (g2) {
								if ((g3 = 255 - ((255-data[pix1])<<8) / (2*g2)) < 0) 
									data2[pix1] = 0;
								else
									data2[pix1] = g3;
							} else {
								data2[pix1] = 0;
							}
						} else if ((g3 = (g4=2*g2-256)) < 255) {
							if ((g3 = (data[pix1]<<8)/(255-g4)) > 255)
								data2[pix1] = 255;
							else
								data2[pix1] = g3;
						} else {
							if (g3 < 0) 
								data2[pix1] = 0;
							else
								data2[pix1] = g3;
						}

						if ((b2=data2[pix2=pix+2]) < 128) {
							if (b2) {
								if ((b3 = 255 - ((255-data[pix2])<<8) / (2*b2)) < 0) 
									data2[pix2] = 0;
								else
									data2[pix2] = b3;
							} else {
								data2[pix2] = 0;
							}
						} else if ((b3 = (b4=2*b2-256)) < 255) {
							if ((b3 = (data[pix2]<<8)/(255-b4)) > 255) 
								data2[pix2] = 255;
							else
								data2[pix2] = b3;
						} else {
							if (b3 < 0) 
								data2[pix2] = 0;
							else
								data2[pix2] = b3;
						}
					}
					dataChanged = true;
					break;

				case "pinlight" : 
					while (p--) {
						if ((r2=data2[pix-=4]) < 128)
							if ((r1=data[pix]) < (r4=2*r2))
								data2[pix] = r1;
							else
								data2[pix] = r4;
						else
							if ((r1=data[pix]) > (r4=2*r2-256))
								data2[pix] = r1;
							else
								data2[pix] = r4;

						if ((g2=data2[pix1=pix+1]) < 128)
							if ((g1=data[pix1]) < (g4=2*g2))
								data2[pix1] = g1;
							else
								data2[pix1] = g4;
						else
							if ((g1=data[pix1]) > (g4=2*g2-256))
								data2[pix1] = g1;
							else
								data2[pix1] = g4;

						if ((r2=data2[pix2=pix+2]) < 128)
							if ((r1=data[pix2]) < (r4=2*r2))
								data2[pix2] = r1;
							else
								data2[pix2] = r4;
						else
							if ((r1=data[pix2]) > (r4=2*r2-256))
								data2[pix2] = r1;
							else
								data2[pix2] = r4;
					}
					dataChanged = true;
					break;

				case "hardmix" : 
					while (p--) {
						if ((r2 = data2[pix-=4]) < 128)
							if (255 - ((255-data[pix])<<8)/(2*r2) < 128 || r2 == 0)
								data2[pix] = 0;
							else
								data2[pix] = 255;
						else if ((r4=2*r2-256) < 255 && (data[pix]<<8)/(255-r4) < 128)
							data2[pix] = 0;
						else
							data2[pix] = 255;

						if ((g2 = data2[pix1=pix+1]) < 128)
							if (255 - ((255-data[pix1])<<8)/(2*g2) < 128 || g2 == 0)
								data2[pix1] = 0;
							else
								data2[pix1] = 255;
						else if ((g4=2*g2-256) < 255 && (data[pix1]<<8)/(255-g4) < 128)
							data2[pix1] = 0;
						else
							data2[pix1] = 255;

						if ((b2 = data2[pix2=pix+2]) < 128)
							if (255 - ((255-data[pix2])<<8)/(2*b2) < 128 || b2 == 0)
								data2[pix2] = 0;
							else
								data2[pix2] = 255;
						else if ((b4=2*b2-256) < 255 && (data[pix2]<<8)/(255-b4) < 128)
							data2[pix2] = 0;
						else
							data2[pix2] = 255;
					}
					dataChanged = true;
					break;
			}

			if (dataChanged) 
				otherCtx.putImageData(dataDesc2,0,0);

			if (amount != 1 && !Pixastic.Client.hasGlobalAlpha()) {
				var p = w*h;
				var amount2 = amount;
				var amount1 = 1 - amount;
				while (p--) {
					var pix = p*4;
					var r = (data[pix] * amount1 + data2[pix] * amount2)>>0;
					var g = (data[pix+1] * amount1 + data2[pix+1] * amount2)>>0;
					var b = (data[pix+2] * amount1 + data2[pix+2] * amount2)>>0;

					data[pix] = r;
					data[pix+1] = g;
					data[pix+2] = b;
				}
				params.useData = true;
			} else {
				var ctx = params.canvas.getContext("2d");
				ctx.save();
				ctx.globalAlpha = amount;
				ctx.drawImage(
					otherCanvas,
					0,0,rect.width,rect.height,
					rect.left,rect.top,rect.width,rect.height
				);
				ctx.globalAlpha = 1;
				ctx.restore();
			}

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}/*
 * Pixastic Lib - Blur filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.blur = {
	process : function(params) {

		if (typeof params.options.fixMargin == "undefined")
			params.options.fixMargin = true;

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var dataCopy = Pixastic.prepareData(params, true)

			/*
			var kernel = [
				[0.5, 	1, 	0.5],
				[1, 	2, 	1],
				[0.5, 	1, 	0.5]
			];
			*/

			var kernel = [
				[0, 	1, 	0],
				[1, 	2, 	1],
				[0, 	1, 	0]
			];

			var weight = 0;
			for (var i=0;i<3;i++) {
				for (var j=0;j<3;j++) {
					weight += kernel[i][j];
				}
			}

			weight = 1 / (weight*2);

			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;

				var prevY = (y == 1) ? 0 : y-2;
				var nextY = (y == h) ? y - 1 : y;

				var offsetYPrev = prevY*w*4;
				var offsetYNext = nextY*w*4;

				var x = w;
				do {
					var offset = offsetY + (x*4-4);

					var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
					var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;
	
					data[offset] = (
						/*
						dataCopy[offsetPrev - 4]
						+ dataCopy[offsetPrev+4] 
						+ dataCopy[offsetNext - 4]
						+ dataCopy[offsetNext+4]
						+ 
						*/
						(dataCopy[offsetPrev]
						+ dataCopy[offset-4]
						+ dataCopy[offset+4]
						+ dataCopy[offsetNext])		* 2
						+ dataCopy[offset] 		* 4
						) * weight;

					data[offset+1] = (
						/*
						dataCopy[offsetPrev - 3]
						+ dataCopy[offsetPrev+5] 
						+ dataCopy[offsetNext - 3] 
						+ dataCopy[offsetNext+5]
						+ 
						*/
						(dataCopy[offsetPrev+1]
						+ dataCopy[offset-3]
						+ dataCopy[offset+5]
						+ dataCopy[offsetNext+1])	* 2
						+ dataCopy[offset+1] 		* 4
						) * weight;

					data[offset+2] = (
						/*
						dataCopy[offsetPrev - 2] 
						+ dataCopy[offsetPrev+6] 
						+ dataCopy[offsetNext - 2] 
						+ dataCopy[offsetNext+6]
						+ 
						*/
						(dataCopy[offsetPrev+2]
						+ dataCopy[offset-2]
						+ dataCopy[offset+6]
						+ dataCopy[offsetNext+2])	* 2
						+ dataCopy[offset+2] 		* 4
						) * weight;

				} while (--x);
			} while (--y);

			return true;

		} else if (Pixastic.Client.isIE()) {
			params.image.style.filter += " progid:DXImageTransform.Microsoft.Blur(pixelradius=1.5)";

			if (params.options.fixMargin) {
				params.image.style.marginLeft = (parseInt(params.image.style.marginLeft,10)||0) - 2 + "px";
				params.image.style.marginTop = (parseInt(params.image.style.marginTop,10)||0) - 2 + "px";
			}

			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData() || Pixastic.Client.isIE());
	}
}/*
 * Pixastic Lib - Blur Fast - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.blurfast = {
	process : function(params) {

		var amount = parseFloat(params.options.amount)||0;
		var clear = !!(params.options.clear && params.options.clear != "false");

		amount = Math.max(0,Math.min(5,amount));

		if (Pixastic.Client.hasCanvas()) {
			var rect = params.options.rect;

			var ctx = params.canvas.getContext("2d");
			ctx.save();
			ctx.beginPath();
			ctx.rect(rect.left, rect.top, rect.width, rect.height);
			ctx.clip();

			var scale = 2;
			var smallWidth = Math.round(params.width / scale);
			var smallHeight = Math.round(params.height / scale);

			var copy = document.createElement("canvas");
			copy.width = smallWidth;
			copy.height = smallHeight;

			var clear = false;
			var steps = Math.round(amount * 20);

			var copyCtx = copy.getContext("2d");
			for (var i=0;i<steps;i++) {
				var scaledWidth = Math.max(1,Math.round(smallWidth - i));
				var scaledHeight = Math.max(1,Math.round(smallHeight - i));
	
				copyCtx.clearRect(0,0,smallWidth,smallHeight);
	
				copyCtx.drawImage(
					params.canvas,
					0,0,params.width,params.height,
					0,0,scaledWidth,scaledHeight
				);
	
				if (clear)
					ctx.clearRect(rect.left,rect.top,rect.width,rect.height);
	
				ctx.drawImage(
					copy,
					0,0,scaledWidth,scaledHeight,
					0,0,params.width,params.height
				);
			}

			ctx.restore();

			params.useData = false;
			return true;
		} else if (Pixastic.Client.isIE()) {
			var radius = 10 * amount;
			params.image.style.filter += " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + radius + ")";

			if (params.options.fixMargin || 1) {
				params.image.style.marginLeft = (parseInt(params.image.style.marginLeft,10)||0) - Math.round(radius) + "px";
				params.image.style.marginTop = (parseInt(params.image.style.marginTop,10)||0) - Math.round(radius) + "px";
			}

			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvas() || Pixastic.Client.isIE());
	}
}
/*
 * Pixastic Lib - Brightness/Contrast filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.brightness = {

	process : function(params) {

		var brightness = parseInt(params.options.brightness,10) || 0;
		var contrast = parseFloat(params.options.contrast)||0;
		var legacy = !!(params.options.legacy && params.options.legacy != "false");

		if (legacy) {
			brightness = Math.min(150,Math.max(-150,brightness));
		} else {
			var brightMul = 1 + Math.min(150,Math.max(-150,brightness)) / 150;
		}
		contrast = Math.max(0,contrast+1);

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var p = w*h;
			var pix = p*4, pix1, pix2;

			var mul, add;
			if (contrast != 1) {
				if (legacy) {
					mul = contrast;
					add = (brightness - 128) * contrast + 128;
				} else {
					mul = brightMul * contrast;
					add = - contrast * 128 + 128;
				}
			} else {  // this if-then is not necessary anymore, is it?
				if (legacy) {
					mul = 1;
					add = brightness;
				} else {
					mul = brightMul;
					add = 0;
				}
			}
			var r, g, b;
			while (p--) {
				if ((r = data[pix-=4] * mul + add) > 255 )
					data[pix] = 255;
				else if (r < 0)
					data[pix] = 0;
				else
 					data[pix] = r;

				if ((g = data[pix1=pix+1] * mul + add) > 255 ) 
					data[pix1] = 255;
				else if (g < 0)
					data[pix1] = 0;
				else
					data[pix1] = g;

				if ((b = data[pix2=pix+2] * mul + add) > 255 ) 
					data[pix2] = 255;
				else if (b < 0)
					data[pix2] = 0;
				else
					data[pix2] = b;
			}
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}

/*
 * Pixastic Lib - Color adjust filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.coloradjust = {

	process : function(params) {
		var red = parseFloat(params.options.red) || 0;
		var green = parseFloat(params.options.green) || 0;
		var blue = parseFloat(params.options.blue) || 0;

		red = Math.round(red*255);
		green = Math.round(green*255);
		blue = Math.round(blue*255);

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var rect = params.options.rect;

			var p = rect.width*rect.height;
			var pix = p*4, pix1, pix2;

			var r, g, b;
			while (p--) {
				pix -= 4;

				if (red) {
					if ((r = data[pix] + red) < 0 ) 
						data[pix] = 0;
					else if (r > 255 ) 
						data[pix] = 255;
					else
						data[pix] = r;
				}

				if (green) {
					if ((g = data[pix1=pix+1] + green) < 0 ) 
						data[pix1] = 0;
					else if (g > 255 ) 
						data[pix1] = 255;
					else
						data[pix1] = g;
				}

				if (blue) {
					if ((b = data[pix2=pix+2] + blue) < 0 ) 
						data[pix2] = 0;
					else if (b > 255 ) 
						data[pix2] = 255;
					else
						data[pix2] = b;
				}
			}
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData());
	}
}
/*
 * Pixastic Lib - Histogram - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */


Pixastic.Actions.colorhistogram = {

	array256 : function(default_value) {
		arr = [];
		for (var i=0; i<256; i++) { arr[i] = default_value; }
		return arr
	},
 
	process : function(params) {
		var values = [];
		if (typeof params.options.returnValue != "object") {
			params.options.returnValue = {rvals:[], gvals:[], bvals:[]};
		}
		var paint = !!(params.options.paint);

		var returnValue = params.options.returnValue;
		if (typeof returnValue.values != "array") {
			returnValue.rvals = [];
			returnValue.gvals = [];
			returnValue.bvals = [];
		}
 
		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			params.useData = false;
 
			var rvals = this.array256(0);
			var gvals = this.array256(0);
			var bvals = this.array256(0);
 
			var rect = params.options.rect;

			var p = rect.width*rect.height;
			var pix = p*4;
			while (p--) {
				rvals[data[pix-=4]]++;
				gvals[data[pix+1]]++;
				bvals[data[pix+2]]++;
			}
 
			returnValue.rvals = rvals;
			returnValue.gvals = gvals;
			returnValue.bvals = bvals;

			if (paint) {
				var ctx = params.canvas.getContext("2d");
				var vals = [rvals, gvals, bvals];
				for (var v=0;v<3;v++) {
					var yoff = (v+1) * params.height / 3;
					var maxValue = 0;
					for (var i=0;i<256;i++) {
						if (vals[v][i] > maxValue)
							maxValue = vals[v][i];
					}
					var heightScale = params.height / 3 / maxValue;
					var widthScale = params.width / 256;
					if (v==0) ctx.fillStyle = "rgba(255,0,0,0.5)";
					else if (v==1) ctx.fillStyle = "rgba(0,255,0,0.5)";
					else if (v==2) ctx.fillStyle = "rgba(0,0,255,0.5)";
					for (var i=0;i<256;i++) {
						ctx.fillRect(
							i * widthScale, params.height - heightScale * vals[v][i] - params.height + yoff,
							widthScale, vals[v][i] * heightScale
						);
					}
				}
			}
			return true;
		}
	},

	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}/*
 * Pixastic Lib - Crop - v0.1.1
 * Copyright (c) 2008-2009 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.crop = {
	process : function(params) {
		if (Pixastic.Client.hasCanvas()) {
			var rect = params.options.rect;

			var width = rect.width;
			var height = rect.height;
			var top = rect.top;
			var left = rect.left;

			if (typeof params.options.left != "undefined")
				left = parseInt(params.options.left,10);
			if (typeof params.options.top != "undefined")
				top = parseInt(params.options.top,10);
			if (typeof params.options.height != "undefined")
				width = parseInt(params.options.width,10);
			if (typeof params.options.height != "undefined")
				height = parseInt(params.options.height,10);

			if (left < 0) left = 0;
			if (left > params.width-1) left = params.width-1;

			if (top < 0) top = 0;
			if (top > params.height-1) top = params.height-1;

			if (width < 1) width = 1;
			if (left + width > params.width)
				width = params.width - left;

			if (height < 1) height = 1;
			if (top + height > params.height)
				height = params.height - top;

			var copy = document.createElement("canvas");
			copy.width = params.width;
			copy.height = params.height;
			copy.getContext("2d").drawImage(params.canvas,0,0);

			params.canvas.width = width;
			params.canvas.height = height;
			params.canvas.getContext("2d").clearRect(0,0,width,height);

			params.canvas.getContext("2d").drawImage(copy,
				left,top,width,height,
				0,0,width,height
			);

			params.useData = false;
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvas();
	}
}


/*
 * Pixastic Lib - Desaturation filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.desaturate = {

	process : function(params) {
		var useAverage = !!(params.options.average && params.options.average != "false");

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var p = w*h;
			var pix = p*4, pix1, pix2;

			if (useAverage) {
				while (p--) 
					data[pix-=4] = data[pix1=pix+1] = data[pix2=pix+2] = (data[pix]+data[pix1]+data[pix2])/3
			} else {
				while (p--)
					data[pix-=4] = data[pix1=pix+1] = data[pix2=pix+2] = (data[pix]*0.3 + data[pix1]*0.59 + data[pix2]*0.11);
			}
			return true;
		} else if (Pixastic.Client.isIE()) {
			params.image.style.filter += " gray";
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData() || Pixastic.Client.isIE());
	}
}/*
 * Pixastic Lib - Edge detection filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.edges = {
	process : function(params) {

		var mono = !!(params.options.mono && params.options.mono != "false");
		var invert = !!(params.options.invert && params.options.invert != "false");

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var dataCopy = Pixastic.prepareData(params, true)

			var c = -1/8;
			var kernel = [
				[c, 	c, 	c],
				[c, 	1, 	c],
				[c, 	c, 	c]
			];

			weight = 1/c;

			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;

				var nextY = (y == h) ? y - 1 : y;
				var prevY = (y == 1) ? 0 : y-2;

				var offsetYPrev = prevY*w*4;
				var offsetYNext = nextY*w*4;

				var x = w;
				do {
					var offset = offsetY + (x*4-4);

					var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
					var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;
	
					var r = ((dataCopy[offsetPrev-4]
						+ dataCopy[offsetPrev]
						+ dataCopy[offsetPrev+4]
						+ dataCopy[offset-4]
						+ dataCopy[offset+4]
						+ dataCopy[offsetNext-4]
						+ dataCopy[offsetNext]
						+ dataCopy[offsetNext+4]) * c
						+ dataCopy[offset]
						) 
						* weight;
	
					var g = ((dataCopy[offsetPrev-3]
						+ dataCopy[offsetPrev+1]
						+ dataCopy[offsetPrev+5]
						+ dataCopy[offset-3]
						+ dataCopy[offset+5]
						+ dataCopy[offsetNext-3]
						+ dataCopy[offsetNext+1]
						+ dataCopy[offsetNext+5]) * c
						+ dataCopy[offset+1])
						* weight;
	
					var b = ((dataCopy[offsetPrev-2]
						+ dataCopy[offsetPrev+2]
						+ dataCopy[offsetPrev+6]
						+ dataCopy[offset-2]
						+ dataCopy[offset+6]
						+ dataCopy[offsetNext-2]
						+ dataCopy[offsetNext+2]
						+ dataCopy[offsetNext+6]) * c
						+ dataCopy[offset+2])
						* weight;

					if (mono) {
						var brightness = (r*0.3 + g*0.59 + b*0.11)||0;
						if (invert) brightness = 255 - brightness;
						if (brightness < 0 ) brightness = 0;
						if (brightness > 255 ) brightness = 255;
						r = g = b = brightness;
					} else {
						if (invert) {
							r = 255 - r;
							g = 255 - g;
							b = 255 - b;
						}
						if (r < 0 ) r = 0;
						if (g < 0 ) g = 0;
						if (b < 0 ) b = 0;
						if (r > 255 ) r = 255;
						if (g > 255 ) g = 255;
						if (b > 255 ) b = 255;
					}

					data[offset] = r;
					data[offset+1] = g;
					data[offset+2] = b;

				} while (--x);
			} while (--y);

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}/*
 * Pixastic Lib - Edge detection 2 - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 * 
 * Contribution by Oliver Hunt (http://nerget.com/, http://nerget.com/canvas/edgeDetection.js). Thanks Oliver!
 *
 */

Pixastic.Actions.edges2 = {
	process : function(params) {

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var dataCopy = Pixastic.prepareData(params, true)

			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var w4 = w * 4;
			var pixel = w4 + 4; // Start at (1,1)
			var hm1 = h - 1;
			var wm1 = w - 1;
			for (var y = 1; y < hm1; ++y) {
				// Prepare initial cached values for current row
				var centerRow = pixel - 4;
				var priorRow = centerRow - w4;
				var nextRow = centerRow + w4;
				
				var r1 = - dataCopy[priorRow]   - dataCopy[centerRow]   - dataCopy[nextRow];
				var g1 = - dataCopy[++priorRow] - dataCopy[++centerRow] - dataCopy[++nextRow];
				var b1 = - dataCopy[++priorRow] - dataCopy[++centerRow] - dataCopy[++nextRow];
				
				var rp = dataCopy[priorRow += 2];
				var gp = dataCopy[++priorRow];
				var bp = dataCopy[++priorRow];
				
				var rc = dataCopy[centerRow += 2];
				var gc = dataCopy[++centerRow];
				var bc = dataCopy[++centerRow];
				
				var rn = dataCopy[nextRow += 2];
				var gn = dataCopy[++nextRow];
				var bn = dataCopy[++nextRow];
				
				var r2 = - rp - rc - rn;
				var g2 = - gp - gc - gn;
				var b2 = - bp - bc - bn;
				
				// Main convolution loop
				for (var x = 1; x < wm1; ++x) {
					centerRow = pixel + 4;
					priorRow = centerRow - w4;
					nextRow = centerRow + w4;
					
					var r = 127 + r1 - rp - (rc * -8) - rn;
					var g = 127 + g1 - gp - (gc * -8) - gn;
					var b = 127 + b1 - bp - (bc * -8) - bn;
					
					r1 = r2;
					g1 = g2;
					b1 = b2;
					
					rp = dataCopy[  priorRow];
					gp = dataCopy[++priorRow];
					bp = dataCopy[++priorRow];
					
					rc = dataCopy[  centerRow];
					gc = dataCopy[++centerRow];
					bc = dataCopy[++centerRow];
					
					rn = dataCopy[  nextRow];
					gn = dataCopy[++nextRow];
					bn = dataCopy[++nextRow];
					
					r += (r2 = - rp - rc - rn);
					g += (g2 = - gp - gc - gn);
					b += (b2 = - bp - bc - bn);

					if (r > 255) r = 255;
					if (g > 255) g = 255;
					if (b > 255) b = 255;
					if (r < 0) r = 0;
					if (g < 0) g = 0;
					if (b < 0) b = 0;

					data[pixel] = r;
					data[++pixel] = g;
					data[++pixel] = b;
					//data[++pixel] = 255; // alpha

					pixel+=2;
				}
				pixel += 8;
			}
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}/*
 * Pixastic Lib - Emboss filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.emboss = {
	process : function(params) {

		var strength = parseFloat(params.options.strength)||1;
		var greyLevel = typeof params.options.greyLevel != "undefined" ? parseInt(params.options.greyLevel) : 180;
		var direction = params.options.direction||"topleft";
		var blend = !!(params.options.blend && params.options.blend != "false");

		var dirY = 0;
		var dirX = 0;

		switch (direction) {
			case "topleft":			// top left
				dirY = -1;
				dirX = -1;
				break;
			case "top":			// top
				dirY = -1;
				dirX = 0;
				break;
			case "topright":			// top right
				dirY = -1;
				dirX = 1;
				break;
			case "right":			// right
				dirY = 0;
				dirX = 1;
				break;
			case "bottomright":			// bottom right
				dirY = 1;
				dirX = 1;
				break;
			case "bottom":			// bottom
				dirY = 1;
				dirX = 0;
				break;
			case "bottomleft":			// bottom left
				dirY = 1;
				dirX = -1;
				break;
			case "left":			// left
				dirY = 0;
				dirX = -1;
				break;
		}

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var dataCopy = Pixastic.prepareData(params, true)

			var invertAlpha = !!params.options.invertAlpha;
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;

				var otherY = dirY;
				if (y + otherY < 1) otherY = 0;
				if (y + otherY > h) otherY = 0;

				var offsetYOther = (y-1+otherY)*w*4;

				var x = w;
				do {
						var offset = offsetY + (x-1)*4;

						var otherX = dirX;
						if (x + otherX < 1) otherX = 0;
						if (x + otherX > w) otherX = 0;

						var offsetOther = offsetYOther + (x-1+otherX)*4;

						var dR = dataCopy[offset] - dataCopy[offsetOther];
						var dG = dataCopy[offset+1] - dataCopy[offsetOther+1];
						var dB = dataCopy[offset+2] - dataCopy[offsetOther+2];

						var dif = dR;
						var absDif = dif > 0 ? dif : -dif;

						var absG = dG > 0 ? dG : -dG;
						var absB = dB > 0 ? dB : -dB;

						if (absG > absDif) {
							dif = dG;
						}
						if (absB > absDif) {
							dif = dB;
						}

						dif *= strength;

						if (blend) {
							var r = data[offset] + dif;
							var g = data[offset+1] + dif;
							var b = data[offset+2] + dif;

							data[offset] = (r > 255) ? 255 : (r < 0 ? 0 : r);
							data[offset+1] = (g > 255) ? 255 : (g < 0 ? 0 : g);
							data[offset+2] = (b > 255) ? 255 : (b < 0 ? 0 : b);
						} else {
							var grey = greyLevel - dif;
							if (grey < 0) {
								grey = 0;
							} else if (grey > 255) {
								grey = 255;
							}

							data[offset] = data[offset+1] = data[offset+2] = grey;
						}

				} while (--x);
			} while (--y);
			return true;

		} else if (Pixastic.Client.isIE()) {
			params.image.style.filter += " progid:DXImageTransform.Microsoft.emboss()";
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData() || Pixastic.Client.isIE());
	}

}
/*
 * Pixastic Lib - Flip - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.flip = {
	process : function(params) {
		var rect = params.options.rect;
		var copyCanvas = document.createElement("canvas");
		copyCanvas.width = rect.width;
		copyCanvas.height = rect.height;
		copyCanvas.getContext("2d").drawImage(params.image, rect.left, rect.top, rect.width, rect.height, 0, 0, rect.width, rect.height);

		var ctx = params.canvas.getContext("2d");
		ctx.clearRect(rect.left, rect.top, rect.width, rect.height);

		if (params.options.axis == "horizontal") {
			ctx.scale(-1,1);
			ctx.drawImage(copyCanvas, -rect.left-rect.width, rect.top, rect.width, rect.height)
		} else {
			ctx.scale(1,-1);
			ctx.drawImage(copyCanvas, rect.left, -rect.top-rect.height, rect.width, rect.height)
		}

		params.useData = false;

		return true;		
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvas();
	}
}

/*
 * Pixastic Lib - Horizontal flip - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.fliph = {
	process : function(params) {
		if (Pixastic.Client.hasCanvas()) {
			var rect = params.options.rect;
			var copyCanvas = document.createElement("canvas");
			copyCanvas.width = rect.width;
			copyCanvas.height = rect.height;
			copyCanvas.getContext("2d").drawImage(params.image, rect.left, rect.top, rect.width, rect.height, 0, 0, rect.width, rect.height);

			var ctx = params.canvas.getContext("2d");
			ctx.clearRect(rect.left, rect.top, rect.width, rect.height);
			ctx.scale(-1,1);
			ctx.drawImage(copyCanvas, -rect.left-rect.width, rect.top, rect.width, rect.height)
			params.useData = false;

			return true;		

		} else if (Pixastic.Client.isIE()) {
			params.image.style.filter += " fliph";
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvas() || Pixastic.Client.isIE());
	}
}

/*
 * Pixastic Lib - Vertical flip - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.flipv = {
	process : function(params) {
		if (Pixastic.Client.hasCanvas()) {
			var rect = params.options.rect;
			var copyCanvas = document.createElement("canvas");
			copyCanvas.width = rect.width;
			copyCanvas.height = rect.height;
			copyCanvas.getContext("2d").drawImage(params.image, rect.left, rect.top, rect.width, rect.height, 0, 0, rect.width, rect.height);

			var ctx = params.canvas.getContext("2d");
			ctx.clearRect(rect.left, rect.top, rect.width, rect.height);
			ctx.scale(1,-1);
			ctx.drawImage(copyCanvas, rect.left, -rect.top-rect.height, rect.width, rect.height)
			params.useData = false;

			return true;		

		} else if (Pixastic.Client.isIE()) {
			params.image.style.filter += " flipv";
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvas() || Pixastic.Client.isIE());
	}
}

/*
 * Pixastic Lib - Glow - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */


Pixastic.Actions.glow = {
	process : function(params) {

		var amount = (parseFloat(params.options.amount)||0);
		var blurAmount = parseFloat(params.options.radius)||0;

		amount = Math.min(1,Math.max(0,amount));
		blurAmount = Math.min(5,Math.max(0,blurAmount));

		if (Pixastic.Client.hasCanvasImageData()) {
			var rect = params.options.rect;

			var blurCanvas = document.createElement("canvas");
			blurCanvas.width = params.width;
			blurCanvas.height = params.height;
			var blurCtx = blurCanvas.getContext("2d");
			blurCtx.drawImage(params.canvas,0,0);

			var scale = 2;
			var smallWidth = Math.round(params.width / scale);
			var smallHeight = Math.round(params.height / scale);

			var copy = document.createElement("canvas");
			copy.width = smallWidth;
			copy.height = smallHeight;

			var clear = true;
			var steps = Math.round(blurAmount * 20);

			var copyCtx = copy.getContext("2d");
			for (var i=0;i<steps;i++) {
				var scaledWidth = Math.max(1,Math.round(smallWidth - i));
				var scaledHeight = Math.max(1,Math.round(smallHeight - i));
	
				copyCtx.clearRect(0,0,smallWidth,smallHeight);
	
				copyCtx.drawImage(
					blurCanvas,
					0,0,params.width,params.height,
					0,0,scaledWidth,scaledHeight
				);
	
				blurCtx.clearRect(0,0,params.width,params.height);
	
				blurCtx.drawImage(
					copy,
					0,0,scaledWidth,scaledHeight,
					0,0,params.width,params.height
				);
			}

			var data = Pixastic.prepareData(params);
			var blurData = Pixastic.prepareData({canvas:blurCanvas,options:params.options});

			var p = rect.width * rect.height;

			var pix = p*4, pix1 = pix + 1, pix2 = pix + 2, pix3 = pix + 3;
			while (p--) {
				if ((data[pix-=4] += amount * blurData[pix]) > 255) data[pix] = 255;
				if ((data[pix1-=4] += amount * blurData[pix1]) > 255) data[pix1] = 255;
				if ((data[pix2-=4] += amount * blurData[pix2]) > 255) data[pix2] = 255;
			}

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}



/*
 * Pixastic Lib - Histogram - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.histogram = {
	process : function(params) {

		var average = !!(params.options.average && params.options.average != "false");
		var paint = !!(params.options.paint && params.options.paint != "false");
		var color = params.options.color || "rgba(255,255,255,0.5)";
		var values = [];
		if (typeof params.options.returnValue != "object") {
			params.options.returnValue = {values:[]};
		}
		var returnValue = params.options.returnValue;
		if (typeof returnValue.values != "array") {
			returnValue.values = [];
		}
		values = returnValue.values;

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			params.useData = false;

			for (var i=0;i<256;i++) {
				values[i] = 0;
			}

			var rect = params.options.rect;
			var p = rect.width * rect.height;

			var pix = p*4, pix1 = pix + 1, pix2 = pix + 2, pix3 = pix + 3;
			var round = Math.round;

			if (average) {
				while (p--) {
					values[ round((data[pix-=4]+data[pix+1]+data[pix+2])/3) ]++;
				}
			} else {
				while (p--) {
					values[ round(data[pix-=4]*0.3 + data[pix+1]*0.59 + data[pix+2]*0.11) ]++;
				}
			}

			if (paint) {
				var maxValue = 0;
				for (var i=0;i<256;i++) {
					if (values[i] > maxValue) {
						maxValue = values[i];
					}
				}
				var heightScale = params.height / maxValue;
				var widthScale = params.width / 256;
				var ctx = params.canvas.getContext("2d");
				ctx.fillStyle = color;
				for (var i=0;i<256;i++) {
					ctx.fillRect(
						i * widthScale, params.height - heightScale * values[i],
						widthScale, values[i] * heightScale
					);
				}
			}

			returnValue.values = values;

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}
/*
 * Pixastic Lib - HSL Adjust  - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.hsl = {
	process : function(params) {

		var hue = parseInt(params.options.hue,10)||0;
		var saturation = (parseInt(params.options.saturation,10)||0) / 100;
		var lightness = (parseInt(params.options.lightness,10)||0) / 100;


		// this seems to give the same result as Photoshop
		if (saturation < 0) {
			var satMul = 1+saturation;
		} else {
			var satMul = 1+saturation*2;
		}

		hue = (hue%360) / 360;
		var hue6 = hue * 6;

		var rgbDiv = 1 / 255;

		var light255 = lightness * 255;
		var lightp1 = 1 + lightness;
		var lightm1 = 1 - lightness;
		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);

			var rect = params.options.rect;

			var p = rect.width * rect.height;

			var pix = p*4, pix1 = pix + 1, pix2 = pix + 2, pix3 = pix + 3;

			while (p--) {

				var r = data[pix-=4];
				var g = data[pix1=pix+1];
				var b = data[pix2=pix+2];

				if (hue != 0 || saturation != 0) {
					// ok, here comes rgb to hsl + adjust + hsl to rgb, all in one jumbled mess. 
					// It's not so pretty, but it's been optimized to get somewhat decent performance.
					// The transforms were originally adapted from the ones found in Graphics Gems, but have been heavily modified.
					var vs = r;
					if (g > vs) vs = g;
					if (b > vs) vs = b;
					var ms = r;
					if (g < ms) ms = g;
					if (b < ms) ms = b;
					var vm = (vs-ms);
					var l = (ms+vs)/510;
					if (l > 0) {
						if (vm > 0) {
							if (l <= 0.5) {
								var s = vm / (vs+ms) * satMul;
								if (s > 1) s = 1;
								var v = (l * (1+s));
							} else {
								var s = vm / (510-vs-ms) * satMul;
								if (s > 1) s = 1;
								var v = (l+s - l*s);
							}
							if (r == vs) {
								if (g == ms)
									var h = 5 + ((vs-b)/vm) + hue6;
								else
									var h = 1 - ((vs-g)/vm) + hue6;
							} else if (g == vs) {
								if (b == ms)
									var h = 1 + ((vs-r)/vm) + hue6;
								else
									var h = 3 - ((vs-b)/vm) + hue6;
							} else {
								if (r == ms)
									var h = 3 + ((vs-g)/vm) + hue6;
								else
									var h = 5 - ((vs-r)/vm) + hue6;
							}
							if (h < 0) h+=6;
							if (h >= 6) h-=6;
							var m = (l+l-v);
							var sextant = h>>0;
							if (sextant == 0) {
								r = v*255; g = (m+((v-m)*(h-sextant)))*255; b = m*255;
							} else if (sextant == 1) {
								r = (v-((v-m)*(h-sextant)))*255; g = v*255; b = m*255;
							} else if (sextant == 2) {
								r = m*255; g = v*255; b = (m+((v-m)*(h-sextant)))*255;
							} else if (sextant == 3) {
								r = m*255; g = (v-((v-m)*(h-sextant)))*255; b = v*255;
							} else if (sextant == 4) {
								r = (m+((v-m)*(h-sextant)))*255; g = m*255; b = v*255;
							} else if (sextant == 5) {
								r = v*255; g = m*255; b = (v-((v-m)*(h-sextant)))*255;
							}
						}
					}
				}

				if (lightness < 0) {
					r *= lightp1;
					g *= lightp1;
					b *= lightp1;
				} else if (lightness > 0) {
					r = r * lightm1 + light255;
					g = g * lightm1 + light255;
					b = b * lightm1 + light255;
				}

				if (r < 0) 
					data[pix] = 0
				else if (r > 255)
					data[pix] = 255
				else
					data[pix] = r;

				if (g < 0) 
					data[pix1] = 0
				else if (g > 255)
					data[pix1] = 255
				else
					data[pix1] = g;

				if (b < 0) 
					data[pix2] = 0
				else if (b > 255)
					data[pix2] = 255
				else
					data[pix2] = b;

			}

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}

}
/*
 * Pixastic Lib - Invert filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.invert = {
	process : function(params) {
		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);

			var invertAlpha = !!params.options.invertAlpha;
			var rect = params.options.rect;

			var p = rect.width * rect.height;

			var pix = p*4, pix1 = pix + 1, pix2 = pix + 2, pix3 = pix + 3;

			while (p--) {
				data[pix-=4] = 255 - data[pix];
				data[pix1-=4] = 255 - data[pix1];
				data[pix2-=4] = 255 - data[pix2];
				if (invertAlpha)
					data[pix3-=4] = 255 - data[pix3];
			}

			return true;
		} else if (Pixastic.Client.isIE()) {
			params.image.style.filter += " invert";
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData() || Pixastic.Client.isIE());
	}
}
/*
 * Pixastic Lib - Laplace filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.laplace = {
	process : function(params) {

		var strength = 1.0;
		var invert = !!(params.options.invert && params.options.invert != "false");
		var contrast = parseFloat(params.options.edgeStrength)||0;

		var greyLevel = parseInt(params.options.greyLevel)||0;

		contrast = -contrast;

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var dataCopy = Pixastic.prepareData(params, true)

			var kernel = [
				[-1, 	-1, 	-1],
				[-1, 	8, 	-1],
				[-1, 	-1, 	-1]
			];

			var weight = 1/8;

			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;

				var nextY = (y == h) ? y - 1 : y;
				var prevY = (y == 1) ? 0 : y-2;

				var offsetYPrev = prevY*w*4;
				var offsetYNext = nextY*w*4;

				var x = w;
				do {
					var offset = offsetY + (x*4-4);

					var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
					var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;
	
					var r = ((-dataCopy[offsetPrev-4]
						- dataCopy[offsetPrev]
						- dataCopy[offsetPrev+4]
						- dataCopy[offset-4]
						- dataCopy[offset+4]
						- dataCopy[offsetNext-4]
						- dataCopy[offsetNext]
						- dataCopy[offsetNext+4])
						+ dataCopy[offset] * 8) 
						* weight;
	
					var g = ((-dataCopy[offsetPrev-3]
						- dataCopy[offsetPrev+1]
						- dataCopy[offsetPrev+5]
						- dataCopy[offset-3]
						- dataCopy[offset+5]
						- dataCopy[offsetNext-3]
						- dataCopy[offsetNext+1]
						- dataCopy[offsetNext+5])
						+ dataCopy[offset+1] * 8)
						* weight;
	
					var b = ((-dataCopy[offsetPrev-2]
						- dataCopy[offsetPrev+2]
						- dataCopy[offsetPrev+6]
						- dataCopy[offset-2]
						- dataCopy[offset+6]
						- dataCopy[offsetNext-2]
						- dataCopy[offsetNext+2]
						- dataCopy[offsetNext+6])
						+ dataCopy[offset+2] * 8)
						* weight;

					var brightness = ((r + g + b)/3) + greyLevel;

					if (contrast != 0) {
						if (brightness > 127) {
							brightness += ((brightness + 1) - 128) * contrast;
						} else if (brightness < 127) {
							brightness -= (brightness + 1) * contrast;
						}
					}
					if (invert) {
						brightness = 255 - brightness;
					}
					if (brightness < 0 ) brightness = 0;
					if (brightness > 255 ) brightness = 255;

					data[offset] = data[offset+1] = data[offset+2] = brightness;

				} while (--x);
			} while (--y);

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}

/*
 * Pixastic Lib - Lighten filter - v0.1.1
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.lighten = {

	process : function(params) {
		var amount = parseFloat(params.options.amount) || 0;
		amount = Math.max(-1, Math.min(1, amount));

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var rect = params.options.rect;

			var p = rect.width * rect.height;

			var pix = p*4, pix1 = pix + 1, pix2 = pix + 2;
			var mul = amount + 1;

			while (p--) {
				if ((data[pix-=4] = data[pix] * mul) > 255)
					data[pix] = 255;

				if ((data[pix1-=4] = data[pix1] * mul) > 255)
					data[pix1] = 255;

				if ((data[pix2-=4] = data[pix2] * mul) > 255)
					data[pix2] = 255;

			}

			return true;

		} else if (Pixastic.Client.isIE()) {
			var img = params.image;
			if (amount < 0) {
				img.style.filter += " light()";
				img.filters[img.filters.length-1].addAmbient(
					255,255,255,
					100 * -amount
				);
			} else if (amount > 0) {
				img.style.filter += " light()";
				img.filters[img.filters.length-1].addAmbient(
					255,255,255,
					100
				);
				img.filters[img.filters.length-1].addAmbient(
					255,255,255,
					100 * amount
				);
			}
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData() || Pixastic.Client.isIE());
	}
}
/*
 * Pixastic Lib - Mosaic filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.mosaic = {

	process : function(params) {
		var blockSize = Math.max(1,parseInt(params.options.blockSize,10));

		if (Pixastic.Client.hasCanvasImageData()) {
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;
			var w4 = w*4;
			var y = h;

			var ctx = params.canvas.getContext("2d");

			var pixel = document.createElement("canvas");
			pixel.width = pixel.height = 1;
			var pixelCtx = pixel.getContext("2d");

			var copy = document.createElement("canvas");
			copy.width = w;
			copy.height = h;
			var copyCtx = copy.getContext("2d");
			copyCtx.drawImage(params.canvas,rect.left,rect.top,w,h, 0,0,w,h);

			for (var y=0;y<h;y+=blockSize) {
				for (var x=0;x<w;x+=blockSize) {
					var blockSizeX = blockSize;
					var blockSizeY = blockSize;
		
					if (blockSizeX + x > w)
						blockSizeX = w - x;
					if (blockSizeY + y > h)
						blockSizeY = h - y;

					pixelCtx.drawImage(copy, x, y, blockSizeX, blockSizeY, 0, 0, 1, 1);
					var data = pixelCtx.getImageData(0,0,1,1).data;
					ctx.fillStyle = "rgb(" + data[0] + "," + data[1] + "," + data[2] + ")";
					ctx.fillRect(rect.left + x, rect.top + y, blockSize, blockSize);
				}
			}
			params.useData = false;

			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData());
	}
}/*
 * Pixastic Lib - Noise filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.noise = {

	process : function(params) {
		var amount = 0;
		var strength = 0;
		var mono = false;

		if (typeof params.options.amount != "undefined")
			amount = parseFloat(params.options.amount)||0;
		if (typeof params.options.strength != "undefined")
			strength = parseFloat(params.options.strength)||0;
		if (typeof params.options.mono != "undefined")
			mono = !!(params.options.mono && params.options.mono != "false");

		amount = Math.max(0,Math.min(1,amount));
		strength = Math.max(0,Math.min(1,strength));

		var noise = 128 * strength;
		var noise2 = noise / 2;

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;
			var w4 = w*4;
			var y = h;
			var random = Math.random;

			do {
				var offsetY = (y-1)*w4;
				var x = w;
				do {
					var offset = offsetY + (x-1)*4;
					if (random() < amount) {
						if (mono) {
							var pixelNoise = - noise2 + random() * noise;
							var r = data[offset] + pixelNoise;
							var g = data[offset+1] + pixelNoise;
							var b = data[offset+2] + pixelNoise;
						} else {
							var r = data[offset] - noise2 + (random() * noise);
							var g = data[offset+1] - noise2 + (random() * noise);
							var b = data[offset+2] - noise2 + (random() * noise);
						}

						if (r < 0 ) r = 0;
						if (g < 0 ) g = 0;
						if (b < 0 ) b = 0;
						if (r > 255 ) r = 255;
						if (g > 255 ) g = 255;
						if (b > 255 ) b = 255;

						data[offset] = r;
						data[offset+1] = g;
						data[offset+2] = b;
					}
				} while (--x);
			} while (--y);
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}

/*
 * Pixastic Lib - Posterize effect - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.posterize = {

	process : function(params) {

		
		var numLevels = 256;
		if (typeof params.options.levels != "undefined")
			numLevels = parseInt(params.options.levels,10)||1;

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);

			numLevels = Math.max(2,Math.min(256,numLevels));
	
			var numAreas = 256 / numLevels;
			var numValues = 256 / (numLevels-1);

			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;
			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;
				var x = w;
				do {
					var offset = offsetY + (x-1)*4;

					var r = numValues * ((data[offset] / numAreas)>>0);
					var g = numValues * ((data[offset+1] / numAreas)>>0);
					var b = numValues * ((data[offset+2] / numAreas)>>0);

					if (r > 255) r = 255;
					if (g > 255) g = 255;
					if (b > 255) b = 255;

					data[offset] = r;
					data[offset+1] = g;
					data[offset+2] = b;

				} while (--x);
			} while (--y);
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}


/*
 * Pixastic Lib - Pointillize filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.pointillize = {

	process : function(params) {
		var radius = Math.max(1,parseInt(params.options.radius,10));
		var density = Math.min(5,Math.max(0,parseFloat(params.options.density)||0));
		var noise = Math.max(0,parseFloat(params.options.noise)||0);
		var transparent = !!(params.options.transparent && params.options.transparent != "false");

		if (Pixastic.Client.hasCanvasImageData()) {
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;
			var w4 = w*4;
			var y = h;

			var ctx = params.canvas.getContext("2d");
			var canvasWidth = params.canvas.width;
			var canvasHeight = params.canvas.height;

			var pixel = document.createElement("canvas");
			pixel.width = pixel.height = 1;
			var pixelCtx = pixel.getContext("2d");

			var copy = document.createElement("canvas");
			copy.width = w;
			copy.height = h;
			var copyCtx = copy.getContext("2d");
			copyCtx.drawImage(params.canvas,rect.left,rect.top,w,h, 0,0,w,h);

			var diameter = radius * 2;

			if (transparent)
				ctx.clearRect(rect.left, rect.top, rect.width, rect.height);

			var noiseRadius = radius * noise;

			var dist = 1 / density;

			for (var y=0;y<h+radius;y+=diameter*dist) {
				for (var x=0;x<w+radius;x+=diameter*dist) {
					rndX = noise ? (x+((Math.random()*2-1) * noiseRadius))>>0 : x;
					rndY = noise ? (y+((Math.random()*2-1) * noiseRadius))>>0 : y;

					var pixX = rndX - radius;
					var pixY = rndY - radius;
					if (pixX < 0) pixX = 0;
					if (pixY < 0) pixY = 0;

					var cx = rndX + rect.left;
					var cy = rndY + rect.top;
					if (cx < 0) cx = 0;
					if (cx > canvasWidth) cx = canvasWidth;
					if (cy < 0) cy = 0;
					if (cy > canvasHeight) cy = canvasHeight;

					var diameterX = diameter;
					var diameterY = diameter;

					if (diameterX + pixX > w)
						diameterX = w - pixX;
					if (diameterY + pixY > h)
						diameterY = h - pixY;
					if (diameterX < 1) diameterX = 1;
					if (diameterY < 1) diameterY = 1;

					pixelCtx.drawImage(copy, pixX, pixY, diameterX, diameterY, 0, 0, 1, 1);
					var data = pixelCtx.getImageData(0,0,1,1).data;

					ctx.fillStyle = "rgb(" + data[0] + "," + data[1] + "," + data[2] + ")";
					ctx.beginPath();
					ctx.arc(cx, cy, radius, 0, Math.PI*2, true);
					ctx.closePath();
					ctx.fill();
				}
			}

			params.useData = false;

			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData());
	}
}/*
 * Pixastic Lib - Remove noise - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.removenoise = {
	process : function(params) {

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);

			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;

				var nextY = (y == h) ? y - 1 : y;
				var prevY = (y == 1) ? 0 : y-2;

				var offsetYPrev = prevY*w*4;
				var offsetYNext = nextY*w*4;

				var x = w;
				do {
					var offset = offsetY + (x*4-4);

					var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
					var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;

					var minR, maxR, minG, maxG, minB, maxB;

					minR = maxR = data[offsetPrev];
					var r1 = data[offset-4], r2 = data[offset+4], r3 = data[offsetNext];
					if (r1 < minR) minR = r1;
					if (r2 < minR) minR = r2;
					if (r3 < minR) minR = r3;
					if (r1 > maxR) maxR = r1;
					if (r2 > maxR) maxR = r2;
					if (r3 > maxR) maxR = r3;

					minG = maxG = data[offsetPrev+1];
					var g1 = data[offset-3], g2 = data[offset+5], g3 = data[offsetNext+1];
					if (g1 < minG) minG = g1;
					if (g2 < minG) minG = g2;
					if (g3 < minG) minG = g3;
					if (g1 > maxG) maxG = g1;
					if (g2 > maxG) maxG = g2;
					if (g3 > maxG) maxG = g3;

					minB = maxB = data[offsetPrev+2];
					var b1 = data[offset-2], b2 = data[offset+6], b3 = data[offsetNext+2];
					if (b1 < minB) minB = b1;
					if (b2 < minB) minB = b2;
					if (b3 < minB) minB = b3;
					if (b1 > maxB) maxB = b1;
					if (b2 > maxB) maxB = b2;
					if (b3 > maxB) maxB = b3;

					if (data[offset] > maxR) {
						data[offset] = maxR;
					} else if (data[offset] < minR) {
						data[offset] = minR;
					}
					if (data[offset+1] > maxG) {
						data[offset+1] = maxG;
					} else if (data[offset+1] < minG) {
						data[offset+1] = minG;
					}
					if (data[offset+2] > maxB) {
						data[offset+2] = maxB;
					} else if (data[offset+2] < minB) {
						data[offset+2] = minB;
					}

				} while (--x);
			} while (--y);

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}/*
 * Pixastic Lib - Resize - v0.1.0
 * Copyright (c) 2009 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.resize = {
	process : function(params) {
		if (Pixastic.Client.hasCanvas()) {
			var width = parseInt(params.options.width,10);
			var height = parseInt(params.options.height,10);
			var canvas = params.canvas;

			if (width < 1) width = 1;
			if (width < 2) width = 2;

			var copy = document.createElement("canvas");
			copy.width = width;
			copy.height = height;

			copy.getContext("2d").drawImage(canvas,0,0,width,height);
			canvas.width = width;
			canvas.height = height;

			canvas.getContext("2d").drawImage(copy,0,0);

			params.useData = false;
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvas();
	}
}


/*
 * Pixastic Lib - Rotate - v0.1.0
 * Copyright (c) 2009 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.rotate = {
	process : function(params) {
		if (Pixastic.Client.hasCanvas()) {
			var canvas = params.canvas;

			var width = params.width;
			var height = params.height;

			var copy = document.createElement("canvas");
			copy.width = width;
			copy.height = height;
			copy.getContext("2d").drawImage(canvas,0,0,width,height);

			var angle = -parseFloat(params.options.angle) * Math.PI / 180;

			var dimAngle = angle;
			if (dimAngle > Math.PI*0.5)
				dimAngle = Math.PI - dimAngle;
			if (dimAngle < -Math.PI*0.5)
				dimAngle = -Math.PI - dimAngle;

			var diag = Math.sqrt(width*width + height*height);

			var diagAngle1 = Math.abs(dimAngle) - Math.abs(Math.atan2(height, width));
			var diagAngle2 = Math.abs(dimAngle) + Math.abs(Math.atan2(height, width));

			var newWidth = Math.abs(Math.cos(diagAngle1) * diag);
			var newHeight = Math.abs(Math.sin(diagAngle2) * diag);

			canvas.width = newWidth;
			canvas.height = newHeight;

			var ctx = canvas.getContext("2d");
			ctx.translate(newWidth/2, newHeight/2);
			ctx.rotate(angle);
			ctx.drawImage(copy,-width/2,-height/2);

			params.useData = false;
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvas();
	}
}


/*
 * Pixastic Lib - Sepia filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.sepia = {

	process : function(params) {
		var mode = (parseInt(params.options.mode,10)||0);
		if (mode < 0) mode = 0;
		if (mode > 1) mode = 1;

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;
			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;
				var x = w;
				do {
					var offset = offsetY + (x-1)*4;

					if (mode) {
						// a bit faster, but not as good
						var d = data[offset] * 0.299 + data[offset+1] * 0.587 + data[offset+2] * 0.114;
						var r = (d + 39);
						var g = (d + 14);
						var b = (d - 36);
					} else {
						// Microsoft
						var or = data[offset];
						var og = data[offset+1];
						var ob = data[offset+2];
	
						var r = (or * 0.393 + og * 0.769 + ob * 0.189);
						var g = (or * 0.349 + og * 0.686 + ob * 0.168);
						var b = (or * 0.272 + og * 0.534 + ob * 0.131);
					}

					if (r < 0) r = 0; if (r > 255) r = 255;
					if (g < 0) g = 0; if (g > 255) g = 255;
					if (b < 0) b = 0; if (b > 255) b = 255;

					data[offset] = r;
					data[offset+1] = g;
					data[offset+2] = b;

				} while (--x);
			} while (--y);
			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}/*
 * Pixastic Lib - Sharpen filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.sharpen = {
	process : function(params) {

		var strength = 0;
		if (typeof params.options.amount != "undefined")
			strength = parseFloat(params.options.amount)||0;

		if (strength < 0) strength = 0;
		if (strength > 1) strength = 1;

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var dataCopy = Pixastic.prepareData(params, true)

			var mul = 15;
			var mulOther = 1 + 3*strength;

			var kernel = [
				[0, 	-mulOther, 	0],
				[-mulOther, 	mul, 	-mulOther],
				[0, 	-mulOther, 	0]
			];

			var weight = 0;
			for (var i=0;i<3;i++) {
				for (var j=0;j<3;j++) {
					weight += kernel[i][j];
				}
			}

			weight = 1 / weight;

			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;

			mul *= weight;
			mulOther *= weight;

			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;

				var nextY = (y == h) ? y - 1 : y;
				var prevY = (y == 1) ? 0 : y-2;

				var offsetYPrev = prevY*w4;
				var offsetYNext = nextY*w4;

				var x = w;
				do {
					var offset = offsetY + (x*4-4);

					var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
					var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;

					var r = ((
						- dataCopy[offsetPrev]
						- dataCopy[offset-4]
						- dataCopy[offset+4]
						- dataCopy[offsetNext])		* mulOther
						+ dataCopy[offset] 	* mul
						);

					var g = ((
						- dataCopy[offsetPrev+1]
						- dataCopy[offset-3]
						- dataCopy[offset+5]
						- dataCopy[offsetNext+1])	* mulOther
						+ dataCopy[offset+1] 	* mul
						);

					var b = ((
						- dataCopy[offsetPrev+2]
						- dataCopy[offset-2]
						- dataCopy[offset+6]
						- dataCopy[offsetNext+2])	* mulOther
						+ dataCopy[offset+2] 	* mul
						);


					if (r < 0 ) r = 0;
					if (g < 0 ) g = 0;
					if (b < 0 ) b = 0;
					if (r > 255 ) r = 255;
					if (g > 255 ) g = 255;
					if (b > 255 ) b = 255;

					data[offset] = r;
					data[offset+1] = g;
					data[offset+2] = b;

				} while (--x);
			} while (--y);

			return true;

		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}
/*
 * Pixastic Lib - Solarize filter - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */

Pixastic.Actions.solarize = {

	process : function(params) {
		var useAverage = !!(params.options.average && params.options.average != "false");

		if (Pixastic.Client.hasCanvasImageData()) {
			var data = Pixastic.prepareData(params);
			var rect = params.options.rect;
			var w = rect.width;
			var h = rect.height;
			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;
				var x = w;
				do {
					var offset = offsetY + (x-1)*4;

					var r = data[offset];
					var g = data[offset+1];
					var b = data[offset+2];

					if (r > 127) r = 255 - r;
					if (g > 127) g = 255 - g;
					if (b > 127) b = 255 - b;

					data[offset] = r;
					data[offset+1] = g;
					data[offset+2] = b;

				} while (--x);
			} while (--y);
			return true;
		}
	},
	checkSupport : function() {
		return (Pixastic.Client.hasCanvasImageData());
	}
}/*
 * Pixastic Lib - USM - v0.1.0
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * License: [http://www.pixastic.com/lib/license.txt]
 */


Pixastic.Actions.unsharpmask = {
	process : function(params) {

		var amount = (parseFloat(params.options.amount)||0);
		var blurAmount = parseFloat(params.options.radius)||0;
		var threshold = parseFloat(params.options.threshold)||0;

		amount = Math.min(500,Math.max(0,amount)) / 2;
		blurAmount = Math.min(5,Math.max(0,blurAmount)) / 10;
		threshold = Math.min(255,Math.max(0,threshold));

		threshold--;
		var thresholdNeg = -threshold;

		amount *= 0.016;
		amount++;

		if (Pixastic.Client.hasCanvasImageData()) {
			var rect = params.options.rect;

			var blurCanvas = document.createElement("canvas");
			blurCanvas.width = params.width;
			blurCanvas.height = params.height;
			var blurCtx = blurCanvas.getContext("2d");
			blurCtx.drawImage(params.canvas,0,0);

			var scale = 2;
			var smallWidth = Math.round(params.width / scale);
			var smallHeight = Math.round(params.height / scale);

			var copy = document.createElement("canvas");
			copy.width = smallWidth;
			copy.height = smallHeight;

			var steps = Math.round(blurAmount * 20);

			var copyCtx = copy.getContext("2d");
			for (var i=0;i<steps;i++) {
				var scaledWidth = Math.max(1,Math.round(smallWidth - i));
				var scaledHeight = Math.max(1,Math.round(smallHeight - i));

				copyCtx.clearRect(0,0,smallWidth,smallHeight);

				copyCtx.drawImage(
					blurCanvas,
					0,0,params.width,params.height,
					0,0,scaledWidth,scaledHeight
				);
	
				blurCtx.clearRect(0,0,params.width,params.height);
	
				blurCtx.drawImage(
					copy,
					0,0,scaledWidth,scaledHeight,
					0,0,params.width,params.height
				);
			}

			var data = Pixastic.prepareData(params);
			var blurData = Pixastic.prepareData({canvas:blurCanvas,options:params.options});
			var w = rect.width;
			var h = rect.height;
			var w4 = w*4;
			var y = h;
			do {
				var offsetY = (y-1)*w4;
				var x = w;
				do {
					var offset = offsetY + (x*4-4);

					var difR = data[offset] - blurData[offset];
					if (difR > threshold || difR < thresholdNeg) {
						var blurR = blurData[offset];
						blurR = amount * difR + blurR;
						data[offset] = blurR > 255 ? 255 : (blurR < 0 ? 0 : blurR);
					}

					var difG = data[offset+1] - blurData[offset+1];
					if (difG > threshold || difG < thresholdNeg) {
						var blurG = blurData[offset+1];
						blurG = amount * difG + blurG;
						data[offset+1] = blurG > 255 ? 255 : (blurG < 0 ? 0 : blurG);
					}

					var difB = data[offset+2] - blurData[offset+2];
					if (difB > threshold || difB < thresholdNeg) {
						var blurB = blurData[offset+2];
						blurB = amount * difB + blurB;
						data[offset+2] = blurB > 255 ? 255 : (blurB < 0 ? 0 : blurB);
					}

				} while (--x);
			} while (--y);

			return true;
		}
	},
	checkSupport : function() {
		return Pixastic.Client.hasCanvasImageData();
	}
}



/*
 * Modified from:
 * http://lxr.mozilla.org/mozilla/source/extensions/xml-rpc/src/nsXmlRpcClient.js#956
 */

/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Mozilla XML-RPC Client component.
 *
 * The Initial Developer of the Original Code is
 * Digital Creations 2, Inc.
 * Portions created by the Initial Developer are Copyright (C) 2000
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Martijn Pieters <mj@digicool.com> (original author)
 *   Samuel Sieb <samuel@sieb.net>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

/*jslint white: false, bitwise: false, plusplus: false */
/*global console */

var Base64 = {

/* Convert data (an array of integers) to a Base64 string. */
toBase64Table : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
base64Pad     : '=',

encode: function (data) {
    "use strict";
    var result = '',
        chrTable = Base64.toBase64Table.split(''),
        pad = Base64.base64Pad,
        length = data.length,
        i;
    // Convert every three bytes to 4 ascii characters.
    for (i = 0; i < (length - 2); i += 3) {
        result += chrTable[data[i] >> 2];
        result += chrTable[((data[i] & 0x03) << 4) + (data[i+1] >> 4)];
        result += chrTable[((data[i+1] & 0x0f) << 2) + (data[i+2] >> 6)];
        result += chrTable[data[i+2] & 0x3f];
    }

    // Convert the remaining 1 or 2 bytes, pad out to 4 characters.
    if (length%3) {
        i = length - (length%3);
        result += chrTable[data[i] >> 2];
        if ((length%3) === 2) {
            result += chrTable[((data[i] & 0x03) << 4) + (data[i+1] >> 4)];
            result += chrTable[(data[i+1] & 0x0f) << 2];
            result += pad;
        } else {
            result += chrTable[(data[i] & 0x03) << 4];
            result += pad + pad;
        }
    }

    return result;
},

/* Convert Base64 data to a string */
toBinaryTable : [
    -1,-1,-1,-1, -1,-1,-1,-1, -1,-1,-1,-1, -1,-1,-1,-1,
    -1,-1,-1,-1, -1,-1,-1,-1, -1,-1,-1,-1, -1,-1,-1,-1,
    -1,-1,-1,-1, -1,-1,-1,-1, -1,-1,-1,62, -1,-1,-1,63,
    52,53,54,55, 56,57,58,59, 60,61,-1,-1, -1, 0,-1,-1,
    -1, 0, 1, 2,  3, 4, 5, 6,  7, 8, 9,10, 11,12,13,14,
    15,16,17,18, 19,20,21,22, 23,24,25,-1, -1,-1,-1,-1,
    -1,26,27,28, 29,30,31,32, 33,34,35,36, 37,38,39,40,
    41,42,43,44, 45,46,47,48, 49,50,51,-1, -1,-1,-1,-1
],

decode: function (data, offset) {
    "use strict";
    offset = typeof(offset) !== 'undefined' ? offset : 0;
    var binTable = Base64.toBinaryTable,
        pad = Base64.base64Pad,
        result, result_length, idx, i, c, padding,
        leftbits = 0, // number of bits decoded, but yet to be appended
        leftdata = 0, // bits decoded, but yet to be appended
        data_length = data.indexOf('=') - offset;

    if (data_length < 0) { data_length = data.length - offset; }

    /* Every four characters is 3 resulting numbers */
    result_length = (data_length >> 2) * 3 + Math.floor((data_length%4)/1.5);
    result = new Array(result_length);

    // Convert one by one.
    for (idx = 0, i = offset; i < data.length; i++) {
        c = binTable[data.charCodeAt(i) & 0x7f];
        padding = (data.charAt(i) === pad);
        // Skip illegal characters and whitespace
        if (c === -1) {
            console.error("Illegal character code " + data.charCodeAt(i) + " at position " + i);
            continue;
        }
        
        // Collect data into leftdata, update bitcount
        leftdata = (leftdata << 6) | c;
        leftbits += 6;

        // If we have 8 or more bits, append 8 bits to the result
        if (leftbits >= 8) {
            leftbits -= 8;
            // Append if not padding.
            if (!padding) {
                result[idx++] = (leftdata >> leftbits) & 0xff;
            }
            leftdata &= (1 << leftbits) - 1;
        }
    }

    // If there are any bits left, the base64 string was corrupted
    if (leftbits) {
        throw {name: 'Base64-Error', 
               message: 'Corrupted base64 string'};
    }

    return result;
},

    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
    encodeStr : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

// public method for decoding
    decodeStr : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

// private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}; /* End of Base64 namespace */
/*
	JavaScript BigInteger library version 0.9
	http://silentmatt.com/biginteger/

	Copyright (c) 2009 Matthew Crumley <email@matthewcrumley.com>
	Copyright (c) 2010,2011 by John Tobey <John.Tobey@gmail.com>
	Licensed under the MIT license.

	Support for arbitrary internal representation base was added by
	Vitaly Magerya.
*/

/*
	File: biginteger.js

	Exports:

		<BigInteger>
*/

/*
	Class: BigInteger
	An arbitrarily-large integer.

	<BigInteger> objects should be considered immutable. None of the "built-in"
	methods modify *this* or their arguments. All properties should be
	considered private.

	All the methods of <BigInteger> instances can be called "statically". The
	static versions are convenient if you don't already have a <BigInteger>
	object.

	As an example, these calls are equivalent.

	> BigInteger(4).multiply(5); // returns BigInteger(20);
	> BigInteger.multiply(4, 5); // returns BigInteger(20);

	> var a = 42;
	> var a = BigInteger.toJSValue("0b101010"); // Not completely useless...
*/

// IE doesn't support Array.prototype.map
if (!Array.prototype.map) {
	Array.prototype.map = function(fun /*, thisp*/) {
		var len = this.length >>> 0;
		if (typeof fun !== "function") {
			throw new TypeError();
		}

		var res = new Array(len);
		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in this) {
				res[i] = fun.call(thisp, this[i], i, this);
			}
		}

		return res;
	};
}

/*
	Constructor: BigInteger()
	Convert a value to a <BigInteger>.

	Although <BigInteger()> is the constructor for <BigInteger> objects, it is
	best not to call it as a constructor. If *n* is a <BigInteger> object, it is
	simply returned as-is. Otherwise, <BigInteger()> is equivalent to <parse>
	without a radix argument.

	> var n0 = BigInteger();      // Same as <BigInteger.ZERO>
	> var n1 = BigInteger("123"); // Create a new <BigInteger> with value 123
	> var n2 = BigInteger(123);   // Create a new <BigInteger> with value 123
	> var n3 = BigInteger(n2);    // Return n2, unchanged

	The constructor form only takes an array and a sign. *n* must be an
	array of numbers in little-endian order, where each digit is between 0
	and BigInteger.base.  The second parameter sets the sign: -1 for
	negative, +1 for positive, or 0 for zero. The array is *not copied and
	may be modified*. If the array contains only zeros, the sign parameter
	is ignored and is forced to zero.

	> new BigInteger([5], -1): create a new BigInteger with value -5

	Parameters:

		n - Value to convert to a <BigInteger>.

	Returns:

		A <BigInteger> value.

	See Also:

		<parse>, <BigInteger>
*/
function BigInteger(n, s) {
	if (!(this instanceof BigInteger)) {
		if (n instanceof BigInteger) {
			return n;
		}
		else if (typeof n === "undefined") {
			return BigInteger.ZERO;
		}
		return BigInteger.parse(n);
	}

	n = n || [];  // Provide the nullary constructor for subclasses.
	while (n.length && !n[n.length - 1]) {
		--n.length;
	}
	this._d = n;
	this._s = n.length ? (s || 1) : 0;
}

// Base-10 speedup hacks in parse, toString, exp10 and log functions
// require base to be a power of 10. 10^7 is the largest such power
// that won't cause a precision loss when digits are multiplied.
BigInteger.base = 10000000;
BigInteger.base_log10 = 7;

BigInteger.init = function() {

// Constant: ZERO
// <BigInteger> 0.
BigInteger.ZERO = new BigInteger([], 0);

// Constant: ONE
// <BigInteger> 1.
BigInteger.ONE = new BigInteger([1], 1);

// Constant: M_ONE
// <BigInteger> -1.
BigInteger.M_ONE = new BigInteger(BigInteger.ONE._d, -1);

// Constant: _0
// Shortcut for <ZERO>.
BigInteger._0 = BigInteger.ZERO;

// Constant: _1
// Shortcut for <ONE>.
BigInteger._1 = BigInteger.ONE;

/*
	Constant: small
	Array of <BigIntegers> from 0 to 36.

	These are used internally for parsing, but useful when you need a "small"
	<BigInteger>.

	See Also:

		<ZERO>, <ONE>, <_0>, <_1>
*/
BigInteger.small = [
	BigInteger.ZERO,
	BigInteger.ONE,
	/* Assuming BigInteger.base > 36 */
	new BigInteger( [2], 1),
	new BigInteger( [3], 1),
	new BigInteger( [4], 1),
	new BigInteger( [5], 1),
	new BigInteger( [6], 1),
	new BigInteger( [7], 1),
	new BigInteger( [8], 1),
	new BigInteger( [9], 1),
	new BigInteger([10], 1),
	new BigInteger([11], 1),
	new BigInteger([12], 1),
	new BigInteger([13], 1),
	new BigInteger([14], 1),
	new BigInteger([15], 1),
	new BigInteger([16], 1),
	new BigInteger([17], 1),
	new BigInteger([18], 1),
	new BigInteger([19], 1),
	new BigInteger([20], 1),
	new BigInteger([21], 1),
	new BigInteger([22], 1),
	new BigInteger([23], 1),
	new BigInteger([24], 1),
	new BigInteger([25], 1),
	new BigInteger([26], 1),
	new BigInteger([27], 1),
	new BigInteger([28], 1),
	new BigInteger([29], 1),
	new BigInteger([30], 1),
	new BigInteger([31], 1),
	new BigInteger([32], 1),
	new BigInteger([33], 1),
	new BigInteger([34], 1),
	new BigInteger([35], 1),
	new BigInteger([36], 1)
];
}
BigInteger.init();

// Used for parsing/radix conversion
BigInteger.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/*
	Method: toString
	Convert a <BigInteger> to a string.

	When *base* is greater than 10, letters are upper case.

	Parameters:

		base - Optional base to represent the number in (default is base 10).
		       Must be between 2 and 36 inclusive, or an Error will be thrown.

	Returns:

		The string representation of the <BigInteger>.
*/
BigInteger.prototype.toString = function(base) {
	base = +base || 10;
	if (base < 2 || base > 36) {
		throw new Error("illegal radix " + base + ".");
	}
	if (this._s === 0) {
		return "0";
	}
	if (base === 10) {
		var str = this._s < 0 ? "-" : "";
		str += this._d[this._d.length - 1].toString();
		for (var i = this._d.length - 2; i >= 0; i--) {
			var group = this._d[i].toString();
			while (group.length < BigInteger.base_log10) group = '0' + group;
			str += group;
		}
		return str;
	}
	else {
		var numerals = BigInteger.digits;
		base = BigInteger.small[base];
		var sign = this._s;

		var n = this.abs();
		var digits = [];
		var digit;

		while (n._s !== 0) {
			var divmod = n.divRem(base);
			n = divmod[0];
			digit = divmod[1];
			// TODO: This could be changed to unshift instead of reversing at the end.
			// Benchmark both to compare speeds.
			digits.push(numerals[digit.valueOf()]);
		}
		return (sign < 0 ? "-" : "") + digits.reverse().join("");
	}
};

// Verify strings for parsing
BigInteger.radixRegex = [
	/^$/,
	/^$/,
	/^[01]*$/,
	/^[012]*$/,
	/^[0-3]*$/,
	/^[0-4]*$/,
	/^[0-5]*$/,
	/^[0-6]*$/,
	/^[0-7]*$/,
	/^[0-8]*$/,
	/^[0-9]*$/,
	/^[0-9aA]*$/,
	/^[0-9abAB]*$/,
	/^[0-9abcABC]*$/,
	/^[0-9a-dA-D]*$/,
	/^[0-9a-eA-E]*$/,
	/^[0-9a-fA-F]*$/,
	/^[0-9a-gA-G]*$/,
	/^[0-9a-hA-H]*$/,
	/^[0-9a-iA-I]*$/,
	/^[0-9a-jA-J]*$/,
	/^[0-9a-kA-K]*$/,
	/^[0-9a-lA-L]*$/,
	/^[0-9a-mA-M]*$/,
	/^[0-9a-nA-N]*$/,
	/^[0-9a-oA-O]*$/,
	/^[0-9a-pA-P]*$/,
	/^[0-9a-qA-Q]*$/,
	/^[0-9a-rA-R]*$/,
	/^[0-9a-sA-S]*$/,
	/^[0-9a-tA-T]*$/,
	/^[0-9a-uA-U]*$/,
	/^[0-9a-vA-V]*$/,
	/^[0-9a-wA-W]*$/,
	/^[0-9a-xA-X]*$/,
	/^[0-9a-yA-Y]*$/,
	/^[0-9a-zA-Z]*$/
];

/*
	Function: parse
	Parse a string into a <BigInteger>.

	*base* is optional but, if provided, must be from 2 to 36 inclusive. If
	*base* is not provided, it will be guessed based on the leading characters
	of *s* as follows:

	- "0x" or "0X": *base* = 16
	- "0c" or "0C": *base* = 8
	- "0b" or "0B": *base* = 2
	- else: *base* = 10

	If no base is provided, or *base* is 10, the number can be in exponential
	form. For example, these are all valid:

	> BigInteger.parse("1e9");              // Same as "1000000000"
	> BigInteger.parse("1.234*10^3");       // Same as 1234
	> BigInteger.parse("56789 * 10 ** -2"); // Same as 567

	If any characters fall outside the range defined by the radix, an exception
	will be thrown.

	Parameters:

		s - The string to parse.
		base - Optional radix (default is to guess based on *s*).

	Returns:

		a <BigInteger> instance.
*/
BigInteger.parse = function(s, base) {
	// Expands a number in exponential form to decimal form.
	// expandExponential("-13.441*10^5") === "1344100";
	// expandExponential("1.12300e-1") === "0.112300";
	// expandExponential(1000000000000000000000000000000) === "1000000000000000000000000000000";
	function expandExponential(str) {
		str = str.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e");

		return str.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function(x, s, n, f, c) {
			c = +c;
			var l = c < 0;
			var i = n.length + c;
			x = (l ? n : f).length;
			c = ((c = Math.abs(c)) >= x ? c - x + l : 0);
			var z = (new Array(c + 1)).join("0");
			var r = n + f;
			return (s || "") + (l ? r = z + r : r += z).substr(0, i += l ? z.length : 0) + (i < r.length ? "." + r.substr(i) : "");
		});
	}

	s = s.toString();
	if (typeof base === "undefined" || +base === 10) {
		s = expandExponential(s);
	}

	var parts = /^([+\-]?)(0[xXcCbB])?([0-9A-Za-z]*)(?:\.\d*)?$/.exec(s);
	if (parts) {
		var sign = parts[1] || "+";
		var baseSection = parts[2] || "";
		var digits = parts[3] || "";

		if (typeof base === "undefined") {
			// Guess base
			if (baseSection === "0x" || baseSection === "0X") { // Hex
				base = 16;
			}
			else if (baseSection === "0c" || baseSection === "0C") { // Octal
				base = 8;
			}
			else if (baseSection === "0b" || baseSection === "0B") { // Binary
				base = 2;
			}
			else {
				base = 10;
			}
		}
		else if (base < 2 || base > 36) {
			throw new Error("Illegal radix " + base + ".");
		}

		base = +base;

		// Check for digits outside the range
		if (!(BigInteger.radixRegex[base].test(digits))) {
			throw new Error("Bad digit for radix " + base);
		}

		// Strip leading zeros, and convert to array
		digits = digits.replace(/^0+/, "").split("");
		if (digits.length === 0) {
			return BigInteger.ZERO;
		}

		// Get the sign (we know it's not zero)
		sign = (sign === "-") ? -1 : 1;

		// Optimize 10
		if (base == 10) {
			var d = [];
			while (digits.length >= BigInteger.base_log10) {
				d.push(parseInt(digits.splice(-BigInteger.base_log10).join(''), 10));
			}
			d.push(parseInt(digits.join(''), 10));
			return new BigInteger(d, sign);
		}

		// Optimize base
		if (base === BigInteger.base) {
			return new BigInteger(digits.map(Number).reverse(), sign);
		}

		// Do the conversion
		var d = BigInteger.ZERO;
		base = BigInteger.small[base];
		var small = BigInteger.small;
		for (var i = 0; i < digits.length; i++) {
			d = d.multiply(base).add(small[parseInt(digits[i], 36)]);
		}
		return new BigInteger(d._d, sign);
	}
	else {
		throw new Error("Invalid BigInteger format: " + s);
	}
};

/*
	Function: add
	Add two <BigIntegers>.

	Parameters:

		n - The number to add to *this*. Will be converted to a <BigInteger>.

	Returns:

		The numbers added together.

	See Also:

		<subtract>, <multiply>, <quotient>, <next>
*/
BigInteger.prototype.add = function(n) {
	if (this._s === 0) {
		return BigInteger(n);
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return this;
	}
	if (this._s !== n._s) {
		n = n.negate();
		return this.subtract(n);
	}

	var a = this._d;
	var b = n._d;
	var al = a.length;
	var bl = b.length;
	var sum = new Array(Math.max(al, bl) + 1);
	var size = Math.min(al, bl);
	var carry = 0;
	var digit;

	for (var i = 0; i < size; i++) {
		digit = a[i] + b[i] + carry;
		sum[i] = digit % BigInteger.base;
		carry = (digit / BigInteger.base) | 0;
	}
	if (bl > al) {
		a = b;
		al = bl;
	}
	for (i = size; carry && i < al; i++) {
		digit = a[i] + carry;
		sum[i] = digit % BigInteger.base;
		carry = (digit / BigInteger.base) | 0;
	}
	if (carry) {
		sum[i] = carry;
	}

	for ( ; i < al; i++) {
		sum[i] = a[i];
	}

	return new BigInteger(sum, this._s);
};

/*
	Function: negate
	Get the additive inverse of a <BigInteger>.

	Returns:

		A <BigInteger> with the same magnatude, but with the opposite sign.

	See Also:

		<abs>
*/
BigInteger.prototype.negate = function() {
	return new BigInteger(this._d, -this._s);
};

/*
	Function: abs
	Get the absolute value of a <BigInteger>.

	Returns:

		A <BigInteger> with the same magnatude, but always positive (or zero).

	See Also:

		<negate>
*/
BigInteger.prototype.abs = function() {
	return (this._s < 0) ? this.negate() : this;
};

/*
	Function: subtract
	Subtract two <BigIntegers>.

	Parameters:

		n - The number to subtract from *this*. Will be converted to a <BigInteger>.

	Returns:

		The *n* subtracted from *this*.

	See Also:

		<add>, <multiply>, <quotient>, <prev>
*/
BigInteger.prototype.subtract = function(n) {
	if (this._s === 0) {
		return BigInteger(n).negate();
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return this;
	}
	if (this._s !== n._s) {
		n = n.negate();
		return this.add(n);
	}

	var m = this;
	var t;
	// negative - negative => -|a| - -|b| => -|a| + |b| => |b| - |a|
	if (this._s < 0) {
		t = m;
		m = new BigInteger(n._d, 1);
		n = new BigInteger(t._d, 1);
	}

	// Both are positive => a - b
	var sign = m.compareAbs(n);
	if (sign === 0) {
		return BigInteger.ZERO;
	}
	else if (sign < 0) {
		// swap m and n
		t = n;
		n = m;
		m = t;
	}

	// a > b
	var a = m._d;
	var b = n._d;
	var al = a.length;
	var bl = b.length;
	var diff = new Array(al); // al >= bl since a > b
	var borrow = 0;
	var i;
	var digit;

	for (i = 0; i < bl; i++) {
		digit = a[i] - borrow - b[i];
		if (digit < 0) {
			digit += BigInteger.base;
			borrow = 1;
		}
		else {
			borrow = 0;
		}
		diff[i] = digit;
	}
	for (i = bl; i < al; i++) {
		digit = a[i] - borrow;
		if (digit < 0) {
			digit += BigInteger.base;
		}
		else {
			diff[i++] = digit;
			break;
		}
		diff[i] = digit;
	}
	for ( ; i < al; i++) {
		diff[i] = a[i];
	}

	return new BigInteger(diff, sign);
};

(function() {
	function addOne(n, sign) {
		var a = n._d;
		var sum = a.slice();
		var carry = true;
		var i = 0;

		while (true) {
			var digit = (a[i] || 0) + 1;
			sum[i] = digit % BigInteger.base;
			if (digit <= BigInteger.base - 1) {
				break;
			}
			++i;
		}

		return new BigInteger(sum, sign);
	}

	function subtractOne(n, sign) {
		var a = n._d;
		var sum = a.slice();
		var borrow = true;
		var i = 0;

		while (true) {
			var digit = (a[i] || 0) - 1;
			if (digit < 0) {
				sum[i] = digit + BigInteger.base;
			}
			else {
				sum[i] = digit;
				break;
			}
			++i;
		}

		return new BigInteger(sum, sign);
	}

	/*
		Function: next
		Get the next <BigInteger> (add one).

		Returns:

			*this* + 1.

		See Also:

			<add>, <prev>
	*/
	BigInteger.prototype.next = function() {
		switch (this._s) {
		case 0:
			return BigInteger.ONE;
		case -1:
			return subtractOne(this, -1);
		// case 1:
		default:
			return addOne(this, 1);
		}
	};

	/*
		Function: prev
		Get the previous <BigInteger> (subtract one).

		Returns:

			*this* - 1.

		See Also:

			<next>, <subtract>
	*/
	BigInteger.prototype.prev = function() {
		switch (this._s) {
		case 0:
			return BigInteger.M_ONE;
		case -1:
			return addOne(this, -1);
		// case 1:
		default:
			return subtractOne(this, 1);
		}
	};
})();

/*
	Function: compareAbs
	Compare the absolute value of two <BigIntegers>.

	Calling <compareAbs> is faster than calling <abs> twice, then <compare>.

	Parameters:

		n - The number to compare to *this*. Will be converted to a <BigInteger>.

	Returns:

		-1, 0, or +1 if *|this|* is less than, equal to, or greater than *|n|*.

	See Also:

		<compare>, <abs>
*/
BigInteger.prototype.compareAbs = function(n) {
	if (this === n) {
		return 0;
	}

	if (!(n instanceof BigInteger)) {
		if (!isFinite(n)) {
			return(isNaN(n) ? n : -1);
		}
		n = BigInteger(n);
	}

	if (this._s === 0) {
		return (n._s !== 0) ? -1 : 0;
	}
	if (n._s === 0) {
		return 1;
	}

	var l = this._d.length;
	var nl = n._d.length;
	if (l < nl) {
		return -1;
	}
	else if (l > nl) {
		return 1;
	}

	var a = this._d;
	var b = n._d;
	for (var i = l-1; i >= 0; i--) {
		if (a[i] !== b[i]) {
			return a[i] < b[i] ? -1 : 1;
		}
	}

	return 0;
};

/*
	Function: compare
	Compare two <BigIntegers>.

	Parameters:

		n - The number to compare to *this*. Will be converted to a <BigInteger>.

	Returns:

		-1, 0, or +1 if *this* is less than, equal to, or greater than *n*.

	See Also:

		<compareAbs>, <isPositive>, <isNegative>, <isUnit>
*/
BigInteger.prototype.compare = function(n) {
	if (this === n) {
		return 0;
	}

	n = BigInteger(n);

	if (this._s === 0) {
		return -n._s;
	}

	if (this._s === n._s) { // both positive or both negative
		var cmp = this.compareAbs(n);
		return cmp * this._s;
	}
	else {
		return this._s;
	}
};

/*
	Function: isUnit
	Return true iff *this* is either 1 or -1.

	Returns:

		true if *this* compares equal to <BigInteger.ONE> or <BigInteger.M_ONE>.

	See Also:

		<isZero>, <isNegative>, <isPositive>, <compareAbs>, <compare>,
		<BigInteger.ONE>, <BigInteger.M_ONE>
*/
BigInteger.prototype.isUnit = function() {
	return this === BigInteger.ONE ||
		this === BigInteger.M_ONE ||
		(this._d.length === 1 && this._d[0] === 1);
};

/*
	Function: multiply
	Multiply two <BigIntegers>.

	Parameters:

		n - The number to multiply *this* by. Will be converted to a
		<BigInteger>.

	Returns:

		The numbers multiplied together.

	See Also:

		<add>, <subtract>, <quotient>, <square>
*/
BigInteger.prototype.multiply = function(n) {
	// TODO: Consider adding Karatsuba multiplication for large numbers
	if (this._s === 0) {
		return BigInteger.ZERO;
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return BigInteger.ZERO;
	}
	if (this.isUnit()) {
		if (this._s < 0) {
			return n.negate();
		}
		return n;
	}
	if (n.isUnit()) {
		if (n._s < 0) {
			return this.negate();
		}
		return this;
	}
	if (this === n) {
		return this.square();
	}

	var r = (this._d.length >= n._d.length);
	var a = (r ? this : n)._d; // a will be longer than b
	var b = (r ? n : this)._d;
	var al = a.length;
	var bl = b.length;

	var pl = al + bl;
	var partial = new Array(pl);
	var i;
	for (i = 0; i < pl; i++) {
		partial[i] = 0;
	}

	for (i = 0; i < bl; i++) {
		var carry = 0;
		var bi = b[i];
		var jlimit = al + i;
		var digit;
		for (var j = i; j < jlimit; j++) {
			digit = partial[j] + bi * a[j - i] + carry;
			carry = (digit / BigInteger.base) | 0;
			partial[j] = (digit % BigInteger.base) | 0;
		}
		if (carry) {
			digit = partial[j] + carry;
			carry = (digit / BigInteger.base) | 0;
			partial[j] = digit % BigInteger.base;
		}
	}
	return new BigInteger(partial, this._s * n._s);
};

// Multiply a BigInteger by a single-digit native number
// Assumes that this and n are >= 0
// This is not really intended to be used outside the library itself
BigInteger.prototype.multiplySingleDigit = function(n) {
	if (n === 0 || this._s === 0) {
		return BigInteger.ZERO;
	}
	if (n === 1) {
		return this;
	}

	var digit;
	if (this._d.length === 1) {
		digit = this._d[0] * n;
		if (digit >= BigInteger.base) {
			return new BigInteger([(digit % BigInteger.base)|0,
					(digit / BigInteger.base)|0], 1);
		}
		return new BigInteger([digit], 1);
	}

	if (n === 2) {
		return this.add(this);
	}
	if (this.isUnit()) {
		return new BigInteger([n], 1);
	}

	var a = this._d;
	var al = a.length;

	var pl = al + 1;
	var partial = new Array(pl);
	for (var i = 0; i < pl; i++) {
		partial[i] = 0;
	}

	var carry = 0;
	for (var j = 0; j < al; j++) {
		digit = n * a[j] + carry;
		carry = (digit / BigInteger.base) | 0;
		partial[j] = (digit % BigInteger.base) | 0;
	}
	if (carry) {
		digit = carry;
		carry = (digit / BigInteger.base) | 0;
		partial[j] = digit % BigInteger.base;
	}

	return new BigInteger(partial, 1);
};

/*
	Function: square
	Multiply a <BigInteger> by itself.

	This is slightly faster than regular multiplication, since it removes the
	duplicated multiplcations.

	Returns:

		> this.multiply(this)

	See Also:
		<multiply>
*/
BigInteger.prototype.square = function() {
	// Normally, squaring a 10-digit number would take 100 multiplications.
	// Of these 10 are unique diagonals, of the remaining 90 (100-10), 45 are repeated.
	// This procedure saves (N*(N-1))/2 multiplications, (e.g., 45 of 100 multiplies).
	// Based on code by Gary Darby, Intellitech Systems Inc., www.DelphiForFun.org

	if (this._s === 0) {
		return BigInteger.ZERO;
	}
	if (this.isUnit()) {
		return BigInteger.ONE;
	}

	var digits = this._d;
	var length = digits.length;
	var imult1 = new Array(length + length + 1);
	var product, carry, k;
	var i;

	// Calculate diagonal
	for (i = 0; i < length; i++) {
		k = i * 2;
		product = digits[i] * digits[i];
		carry = (product / BigInteger.base) | 0;
		imult1[k] = product % BigInteger.base;
		imult1[k + 1] = carry;
	}

	// Calculate repeating part
	for (i = 0; i < length; i++) {
		carry = 0;
		k = i * 2 + 1;
		for (var j = i + 1; j < length; j++, k++) {
			product = digits[j] * digits[i] * 2 + imult1[k] + carry;
			carry = (product / BigInteger.base) | 0;
			imult1[k] = product % BigInteger.base;
		}
		k = length + i;
		var digit = carry + imult1[k];
		carry = (digit / BigInteger.base) | 0;
		imult1[k] = digit % BigInteger.base;
		imult1[k + 1] += carry;
	}

	return new BigInteger(imult1, 1);
};

/*
	Function: quotient
	Divide two <BigIntegers> and truncate towards zero.

	<quotient> throws an exception if *n* is zero.

	Parameters:

		n - The number to divide *this* by. Will be converted to a <BigInteger>.

	Returns:

		The *this* / *n*, truncated to an integer.

	See Also:

		<add>, <subtract>, <multiply>, <divRem>, <remainder>
*/
BigInteger.prototype.quotient = function(n) {
	return this.divRem(n)[0];
};

/*
	Function: divide
	Deprecated synonym for <quotient>.
*/
BigInteger.prototype.divide = BigInteger.prototype.quotient;

/*
	Function: remainder
	Calculate the remainder of two <BigIntegers>.

	<remainder> throws an exception if *n* is zero.

	Parameters:

		n - The remainder after *this* is divided *this* by *n*. Will be
		    converted to a <BigInteger>.

	Returns:

		*this* % *n*.

	See Also:

		<divRem>, <quotient>
*/
BigInteger.prototype.remainder = function(n) {
	return this.divRem(n)[1];
};

/*
	Function: divRem
	Calculate the integer quotient and remainder of two <BigIntegers>.

	<divRem> throws an exception if *n* is zero.

	Parameters:

		n - The number to divide *this* by. Will be converted to a <BigInteger>.

	Returns:

		A two-element array containing the quotient and the remainder.

		> a.divRem(b)

		is exactly equivalent to

		> [a.quotient(b), a.remainder(b)]

		except it is faster, because they are calculated at the same time.

	See Also:

		<quotient>, <remainder>
*/
BigInteger.prototype.divRem = function(n) {
	n = BigInteger(n);
	if (n._s === 0) {
		throw new Error("Divide by zero");
	}
	if (this._s === 0) {
		return [BigInteger.ZERO, BigInteger.ZERO];
	}
	if (n._d.length === 1) {
		return this.divRemSmall(n._s * n._d[0]);
	}

	// Test for easy cases -- |n1| <= |n2|
	switch (this.compareAbs(n)) {
	case 0: // n1 == n2
		return [this._s === n._s ? BigInteger.ONE : BigInteger.M_ONE, BigInteger.ZERO];
	case -1: // |n1| < |n2|
		return [BigInteger.ZERO, this];
	}

	var sign = this._s * n._s;
	var a = n.abs();
	var b_digits = this._d.slice();
	var digits = n._d.length;
	var max = b_digits.length;
	var quot = [];
	var guess;

	var part = new BigInteger([], 1);
	part._s = 1;

	while (b_digits.length) {
		part._d.unshift(b_digits.pop());
		part = new BigInteger(part._d, 1);

		if (part.compareAbs(n) < 0) {
			quot.push(0);
			continue;
		}
		if (part._s === 0) {
			guess = 0;
		}
		else {
			var xlen = part._d.length, ylen = a._d.length;
			var highx = part._d[xlen-1]*BigInteger.base + part._d[xlen-2];
			var highy = a._d[ylen-1]*BigInteger.base + a._d[ylen-2];
			if (part._d.length > a._d.length) {
				// The length of part._d can either match a._d length,
				// or exceed it by one.
				highx = (highx+1)*BigInteger.base;
			}
			guess = Math.ceil(highx/highy);
		}
		do {
			var check = a.multiplySingleDigit(guess);
			if (check.compareAbs(part) <= 0) {
				break;
			}
			guess--;
		} while (guess);

		quot.push(guess);
		if (!guess) {
			continue;
		}
		var diff = part.subtract(check);
		part._d = diff._d.slice();
	}

	return [new BigInteger(quot.reverse(), sign),
		   new BigInteger(part._d, this._s)];
};

// Throws an exception if n is outside of (-BigInteger.base, -1] or
// [1, BigInteger.base).  It's not necessary to call this, since the
// other division functions will call it if they are able to.
BigInteger.prototype.divRemSmall = function(n) {
	var r;
	n = +n;
	if (n === 0) {
		throw new Error("Divide by zero");
	}

	var n_s = n < 0 ? -1 : 1;
	var sign = this._s * n_s;
	n = Math.abs(n);

	if (n < 1 || n >= BigInteger.base) {
		throw new Error("Argument out of range");
	}

	if (this._s === 0) {
		return [BigInteger.ZERO, BigInteger.ZERO];
	}

	if (n === 1 || n === -1) {
		return [(sign === 1) ? this.abs() : new BigInteger(this._d, sign), BigInteger.ZERO];
	}

	// 2 <= n < BigInteger.base

	// divide a single digit by a single digit
	if (this._d.length === 1) {
		var q = new BigInteger([(this._d[0] / n) | 0], 1);
		r = new BigInteger([(this._d[0] % n) | 0], 1);
		if (sign < 0) {
			q = q.negate();
		}
		if (this._s < 0) {
			r = r.negate();
		}
		return [q, r];
	}

	var digits = this._d.slice();
	var quot = new Array(digits.length);
	var part = 0;
	var diff = 0;
	var i = 0;
	var guess;

	while (digits.length) {
		part = part * BigInteger.base + digits[digits.length - 1];
		if (part < n) {
			quot[i++] = 0;
			digits.pop();
			diff = BigInteger.base * diff + part;
			continue;
		}
		if (part === 0) {
			guess = 0;
		}
		else {
			guess = (part / n) | 0;
		}

		var check = n * guess;
		diff = part - check;
		quot[i++] = guess;
		if (!guess) {
			digits.pop();
			continue;
		}

		digits.pop();
		part = diff;
	}

	r = new BigInteger([diff], 1);
	if (this._s < 0) {
		r = r.negate();
	}
	return [new BigInteger(quot.reverse(), sign), r];
};

/*
	Function: isEven
	Return true iff *this* is divisible by two.

	Note that <BigInteger.ZERO> is even.

	Returns:

		true if *this* is even, false otherwise.

	See Also:

		<isOdd>
*/
BigInteger.prototype.isEven = function() {
	var digits = this._d;
	return this._s === 0 || digits.length === 0 || (digits[0] % 2) === 0;
};

/*
	Function: isOdd
	Return true iff *this* is not divisible by two.

	Returns:

		true if *this* is odd, false otherwise.

	See Also:

		<isEven>
*/
BigInteger.prototype.isOdd = function() {
	return !this.isEven();
};

/*
	Function: sign
	Get the sign of a <BigInteger>.

	Returns:

		* -1 if *this* < 0
		* 0 if *this* == 0
		* +1 if *this* > 0

	See Also:

		<isZero>, <isPositive>, <isNegative>, <compare>, <BigInteger.ZERO>
*/
BigInteger.prototype.sign = function() {
	return this._s;
};

/*
	Function: isPositive
	Return true iff *this* > 0.

	Returns:

		true if *this*.compare(<BigInteger.ZERO>) == 1.

	See Also:

		<sign>, <isZero>, <isNegative>, <isUnit>, <compare>, <BigInteger.ZERO>
*/
BigInteger.prototype.isPositive = function() {
	return this._s > 0;
};

/*
	Function: isNegative
	Return true iff *this* < 0.

	Returns:

		true if *this*.compare(<BigInteger.ZERO>) == -1.

	See Also:

		<sign>, <isPositive>, <isZero>, <isUnit>, <compare>, <BigInteger.ZERO>
*/
BigInteger.prototype.isNegative = function() {
	return this._s < 0;
};

/*
	Function: isZero
	Return true iff *this* == 0.

	Returns:

		true if *this*.compare(<BigInteger.ZERO>) == 0.

	See Also:

		<sign>, <isPositive>, <isNegative>, <isUnit>, <BigInteger.ZERO>
*/
BigInteger.prototype.isZero = function() {
	return this._s === 0;
};

/*
	Function: exp10
	Multiply a <BigInteger> by a power of 10.

	This is equivalent to, but faster than

	> if (n >= 0) {
	>     return this.multiply(BigInteger("1e" + n));
	> }
	> else { // n <= 0
	>     return this.quotient(BigInteger("1e" + -n));
	> }

	Parameters:

		n - The power of 10 to multiply *this* by. *n* is converted to a
		javascipt number and must be no greater than <BigInteger.MAX_EXP>
		(0x7FFFFFFF), or an exception will be thrown.

	Returns:

		*this* * (10 ** *n*), truncated to an integer if necessary.

	See Also:

		<pow>, <multiply>
*/
BigInteger.prototype.exp10 = function(n) {
	n = +n;
	if (n === 0) {
		return this;
	}
	if (Math.abs(n) > Number(BigInteger.MAX_EXP)) {
		throw new Error("exponent too large in BigInteger.exp10");
	}
	if (n > 0) {
		var k = new BigInteger(this._d.slice(), this._s);

		for (; n >= BigInteger.base_log10; n -= BigInteger.base_log10) {
			k._d.unshift(0);
		}
		if (n == 0)
			return k;
		k._s = 1;
		k = k.multiplySingleDigit(Math.pow(10, n));
		return (this._s < 0 ? k.negate() : k);
	} else if (-n >= this._d.length*BigInteger.base_log10) {
		return BigInteger.ZERO;
	} else {
		var k = new BigInteger(this._d.slice(), this._s);

		for (n = -n; n >= BigInteger.base_log10; n -= BigInteger.base_log10) {
			k._d.shift();
		}
		return (n == 0) ? k : k.divRemSmall(Math.pow(10, n))[0];
	}
};

/*
	Function: pow
	Raise a <BigInteger> to a power.

	In this implementation, 0**0 is 1.

	Parameters:

		n - The exponent to raise *this* by. *n* must be no greater than
		<BigInteger.MAX_EXP> (0x7FFFFFFF), or an exception will be thrown.

	Returns:

		*this* raised to the *nth* power.

	See Also:

		<modPow>
*/
BigInteger.prototype.pow = function(n) {
	if (this.isUnit()) {
		if (this._s > 0) {
			return this;
		}
		else {
			return BigInteger(n).isOdd() ? this : this.negate();
		}
	}

	n = BigInteger(n);
	if (n._s === 0) {
		return BigInteger.ONE;
	}
	else if (n._s < 0) {
		if (this._s === 0) {
			throw new Error("Divide by zero");
		}
		else {
			return BigInteger.ZERO;
		}
	}
	if (this._s === 0) {
		return BigInteger.ZERO;
	}
	if (n.isUnit()) {
		return this;
	}

	if (n.compareAbs(BigInteger.MAX_EXP) > 0) {
		throw new Error("exponent too large in BigInteger.pow");
	}
	var x = this;
	var aux = BigInteger.ONE;
	var two = BigInteger.small[2];

	while (n.isPositive()) {
		if (n.isOdd()) {
			aux = aux.multiply(x);
			if (n.isUnit()) {
				return aux;
			}
		}
		x = x.square();
		n = n.quotient(two);
	}

	return aux;
};

/*
	Function: modPow
	Raise a <BigInteger> to a power (mod m).

	Because it is reduced by a modulus, <modPow> is not limited by
	<BigInteger.MAX_EXP> like <pow>.

	Parameters:

		exponent - The exponent to raise *this* by. Must be positive.
		modulus - The modulus.

	Returns:

		*this* ^ *exponent* (mod *modulus*).

	See Also:

		<pow>, <mod>
*/
BigInteger.prototype.modPow = function(exponent, modulus) {
	var result = BigInteger.ONE;
	var base = this;

	while (exponent.isPositive()) {
		if (exponent.isOdd()) {
			result = result.multiply(base).remainder(modulus);
		}

		exponent = exponent.quotient(BigInteger.small[2]);
		if (exponent.isPositive()) {
			base = base.square().remainder(modulus);
		}
	}

	return result;
};

/*
	Function: log
	Get the natural logarithm of a <BigInteger> as a native JavaScript number.

	This is equivalent to

	> Math.log(this.toJSValue())

	but handles values outside of the native number range.

	Returns:

		log( *this* )

	See Also:

		<toJSValue>
*/
BigInteger.prototype.log = function() {
	switch (this._s) {
	case 0:	 return -Infinity;
	case -1: return NaN;
	default: // Fall through.
	}

	var l = this._d.length;

	if (l*BigInteger.base_log10 < 30) {
		return Math.log(this.valueOf());
	}

	var N = Math.ceil(30/BigInteger.base_log10);
	var firstNdigits = this._d.slice(l - N);
	return Math.log((new BigInteger(firstNdigits, 1)).valueOf()) + (l - N) * Math.log(BigInteger.base);
};

/*
	Function: valueOf
	Convert a <BigInteger> to a native JavaScript integer.

	This is called automatically by JavaScipt to convert a <BigInteger> to a
	native value.

	Returns:

		> parseInt(this.toString(), 10)

	See Also:

		<toString>, <toJSValue>
*/
BigInteger.prototype.valueOf = function() {
	return parseInt(this.toString(), 10);
};

/*
	Function: toJSValue
	Convert a <BigInteger> to a native JavaScript integer.

	This is the same as valueOf, but more explicitly named.

	Returns:

		> parseInt(this.toString(), 10)

	See Also:

		<toString>, <valueOf>
*/
BigInteger.prototype.toJSValue = function() {
	return parseInt(this.toString(), 10);
};

// Constant: MAX_EXP
// The largest exponent allowed in <pow> and <exp10> (0x7FFFFFFF or 2147483647).
BigInteger.MAX_EXP = BigInteger(0x7FFFFFFF);

(function() {
	function makeUnary(fn) {
		return function(a) {
			return fn.call(BigInteger(a));
		};
	}

	function makeBinary(fn) {
		return function(a, b) {
			return fn.call(BigInteger(a), BigInteger(b));
		};
	}

	function makeTrinary(fn) {
		return function(a, b, c) {
			return fn.call(BigInteger(a), BigInteger(b), BigInteger(c));
		};
	}

	(function() {
		var i, fn;
		var unary = "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(",");
		var binary = "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(",");
		var trinary = ["modPow"];

		for (i = 0; i < unary.length; i++) {
			fn = unary[i];
			BigInteger[fn] = makeUnary(BigInteger.prototype[fn]);
		}

		for (i = 0; i < binary.length; i++) {
			fn = binary[i];
			BigInteger[fn] = makeBinary(BigInteger.prototype[fn]);
		}

		for (i = 0; i < trinary.length; i++) {
			fn = trinary[i];
			BigInteger[fn] = makeTrinary(BigInteger.prototype[fn]);
		}

		BigInteger.exp10 = function(x, n) {
			return BigInteger(x).exp10(n);
		};
	})();
})();

if (typeof exports !== 'undefined') {
	exports.BigInteger = BigInteger;
}
var VirtualJoystick	= function(opts)
{
	opts			= opts			|| {};
	this._container		= opts.container	|| document.body;
	this._stickEl		= opts.stickElement	|| this._buildJoystickStick();
	this._baseEl		= opts.baseElement	|| this._buildJoystickBase();
	this._mouseLeft = opts.mouseLeft || this._buildJoystickButton();
	this._mouseSupport	= 'mouseSupport' in opts? opts.mouseSupport	: false;
	this._range		= opts.range		|| 60;
	
	this._timer = null;
	
	this._callback	= 'callback' in opts? opts.callback	: false;
	this._callbackcontext = 'callbackcontext' in opts? opts.callbackcontext: this;
	this._callbackButton = 'callbackbutton' in opts? opts.callbackbutton : false;
	this._referenceItem = opts.referenceItem;

	this._container.style.position	= "relative";

	this._container.appendChild(this._baseEl);
	this._container.appendChild(this._mouseLeft);
	
	this._baseEl.style.position	= "absolute"
	this._baseEl.style.display	= "block";
	
	this._mouseLeft.style.position	= "absolute"
	this._mouseLeft.style.display	= "block";
		
	//calculate positions
	var jcnt = $(this._referenceItem);
	var baseTop = jcnt.height()-jcnt.offset().top-130;
	var baseLeft = 20;
	var baseRight = 20;
	this._baseEl.style.top = baseTop+'px';
	this._baseEl.style.left = baseLeft+'px';
	
	this._container.appendChild(this._stickEl);
	this._stickEl.style.position	= "absolute"
	this._stickEl.style.display	= "none";
	
	this._mouseLeft.style.top = baseTop+20+'px';
	this._mouseLeft.style.right = baseRight+'px';
	
	this._pressed	= false;
	this._baseX	= 0;
	this._baseY	= 0;
	this._stickX	= 0;
	this._stickY	= 0;

	__bind		= function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
	this._$onTouchStart	= __bind(this._onTouchStart	, this);
	this._$onTouchEnd	= __bind(this._onTouchEnd	, this);
	this._$onTouchMove	= __bind(this._onTouchMove	, this);
	this._$onTouchStartButton = __bind(this._onTouchStartButton, this);
	this._$onTouchEndButton = __bind(this._onTouchEndButton, this);
	this._baseEl.addEventListener( 'touchstart'	, this._$onTouchStart	, false );
	this._mouseLeft.addEventListener( 'touchstart'	, this._$onTouchStartButton	, false );
	this._mouseLeft.addEventListener( 'touchend'	, this._$onTouchEndButton	, false );
	this._container.addEventListener( 'touchend'	, this._$onTouchEnd	, false );
	this._container.addEventListener( 'touchmove'	, this._$onTouchMove	, false );
	if( this._mouseSupport ){
		this._$onMouseDown	= __bind(this._onMouseDown	, this);
		this._$onMouseUp	= __bind(this._onMouseUp	, this);
		this._$onMouseMove	= __bind(this._onMouseMove	, this);
		this._$onMouseDownButton = __bind(this._onMouseDownButton, this);
		this._$onMouseUpButton = __bind(this._onMouseUpButton, this);
		this._baseEl.addEventListener( 'mousedown'	, this._$onMouseDown	, false );
		this._container.addEventListener( 'mouseup'	, this._$onMouseUp	, false );
		this._mouseLeft.addEventListener( 'mousedown'	, this._$onTouchStartButton	, false );
		this._mouseLeft.addEventListener( 'mouseup'	, this._$onTouchEndButton	, false );
		this._container.addEventListener( 'mousemove'	, this._$onMouseMove	, false );
	}
}

VirtualJoystick.prototype.destroy	= function()
{
	this._container.removeChild(this._baseEl);
	this._container.removeChild(this._stickEl);
	
	this._mouseLeft.removeEventListener( 'touchstart'	, this._$onTouchStartButton	, false );
	this._mouseLeft.removeEventListener( 'touchend'		, this._$onTouchEndButton	, false );
	this._container.removeChild(this._mouseLeft);

	this._container.removeEventListener( 'touchstart'	, this._$onTouchStart	, false );
	this._container.removeEventListener( 'touchend'		, this._$onTouchEnd	, false );
	this._container.removeEventListener( 'touchmove'	, this._$onTouchMove	, false );
	if( this._mouseSupport ){
		this._container.removeEventListener( 'mouseup'		, this._$onMouseUp	, false );
		this._container.removeEventListener( 'mousedown'	, this._$onMouseDown	, false );
		this._container.removeEventListener( 'mousemove'	, this._$onMouseMove	, false );
	}
}

/**
 * @returns {Boolean} true if touchscreen is currently available, false otherwise
*/
VirtualJoystick.touchScreenAvailable	= function()
{
	return 'createTouch' in document ? true : false;
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

VirtualJoystick.prototype.deltaX	= function(){ return this._stickX - this._baseX;	}
VirtualJoystick.prototype.deltaY	= function(){ return this._stickY - this._baseY;	}

VirtualJoystick.prototype.up	= function(){
	if( this._pressed === false )	return false;
	var deltaX	= this.deltaX();
	var deltaY	= this.deltaY();
	if( deltaY >= 0 )	return false;
	if( Math.abs(deltaY) < this._range && Math.abs(deltaY) < Math.abs(deltaX) ){
		return false;
	}
	return true;
}
VirtualJoystick.prototype.down	= function(){
	if( this._pressed === false )	return false;
	var deltaX	= this.deltaX();
	var deltaY	= this.deltaY();
	if( deltaY <= 0 )	return false;
	if( Math.abs(deltaY) < this._range && Math.abs(deltaY) < Math.abs(deltaX) ){
		return false;
	}
	return true;	
}
VirtualJoystick.prototype.right	= function(){
	if( this._pressed === false )	return false;
	var deltaX	= this.deltaX();
	var deltaY	= this.deltaY();
	if( deltaX <= 0 )	return false;
	if( Math.abs(deltaX) < this._range && Math.abs(deltaY) > Math.abs(deltaX) ){
		return false;
	}
	return true;	
}
VirtualJoystick.prototype.left	= function(){
	if( this._pressed === false )	return false;
	var deltaX	= this.deltaX();
	var deltaY	= this.deltaY();
	if( deltaX >= 0 )	return false;
	if( Math.abs(deltaX) < this._range && Math.abs(deltaY) > Math.abs(deltaX) ){
		return false;
	}
	return true;	
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

VirtualJoystick.prototype._onUp	= function()
{
	this._pressed	= false; 
	this._stickEl.style.display	= "none";
	//this._baseEl.style.display	= "none";
	
	this._baseX	= this._baseY	= 0;
	this._stickX	= this._stickY	= 0;
	this._eraseInterval();
}

VirtualJoystick.prototype._onDown	= function(x, y)
{
	this._pressed	= true; 
	this._stickX	= x;
	this._stickY	= y;

	this._stickEl.style.display	= "";
	this._stickEl.style.left	= (this._stickX - this._stickEl.width /2)+"px";
	this._stickEl.style.top		= (this._stickY - this._stickEl.height/2)+"px";
	this._startInterval();

}

VirtualJoystick.prototype._onMove	= function(x, y)
{
	if( this._pressed === true ){
		this._stickX	= x;
		this._stickY	= y;
		this._stickEl.style.left	= (x - this._stickEl.width /2)+"px";
		this._stickEl.style.top		= (y - this._stickEl.height/2)+"px";
		this._startInterval();
	}
}

VirtualJoystick.prototype._startInterval = function(x, y) {
	this._eraseInterval();
	var centerXBase = $(this._baseEl).offset().left + ($(this._baseEl).width()/2);
	var centerXStick = $(this._stickEl).offset().left + ($(this._stickEl).width()/2);
	this.offsetX = parseInt((centerXStick - centerXBase) / 5);
	
	//////
	
	var centerYBase = $(this._baseEl).offset().top + ($(this._baseEl).height()/2);
	var centerYStick = $(this._stickEl).offset().top + ($(this._stickEl).height()/2);
	
	this.offsetY = parseInt((centerYStick - centerYBase) / 5);
	
	if(this.offsetX > 15) {
		this.offsetX = 15;
	}
	
	if(this.offsetY > 15) {
		this.offsetY = 15;
	}
	//calculate movements from offsets
	
	var self = this;
	this._timer = setInterval(function() {
		if(self._callback) {
			self._callback.call(self._callbackcontext, [self.offsetX, self.offsetY]);
		}
	}, 10);
	
}

VirtualJoystick.prototype._eraseInterval = function() {
	if(this._timer) {
		clearTimeout(this._timer);
		this._timer = null;
	}
}

//////////////////////////////////////////////////////////////////////////////////
//		bind touch events (and mouse events for debug)			//
//////////////////////////////////////////////////////////////////////////////////

VirtualJoystick.prototype._onMouseUp	= function(event)
{
	return this._onUp();
}

VirtualJoystick.prototype._onMouseDown	= function(event)
{
	var x	= event.pageX;
	var y	= event.pageY;
	return this._onDown(x, y);
}

VirtualJoystick.prototype._onMouseMove	= function(event)
{
	var x	= event.pageX;
	var y	= event.pageY;
	return this._onMove(x, y);
}

VirtualJoystick.prototype._onTouchStart	= function(event)
{
	if( event.touches.length != 1 )	return;

	event.preventDefault();

	var x	= event.touches[ 0 ].pageX;
	var y	= event.touches[ 0 ].pageY;
	return this._onDown(x, y)
}

VirtualJoystick.prototype._onTouchEnd	= function(event)
{
//??????
// no preventDefault to get click event on ios
event.preventDefault();

	return this._onUp()
}

VirtualJoystick.prototype._onTouchMove	= function(event)
{
	if(event.touches && event.touches.length != 1 )	return;

	event.preventDefault();

	var x	= event.touches[ 0 ].pageX;
	var y	= event.touches[ 0 ].pageY;
	return this._onMove(x, y)
}

VirtualJoystick.prototype._onTouchStartButton	= function(event)
{
	if( event.touches && event.touches.length != 1 )	return;

	event.preventDefault();
	this._callbackButton.call(this._callbackcontext, ['down']);
}

VirtualJoystick.prototype._onTouchEndButton	= function(event)
{
//??????
// no preventDefault to get click event on ios
event.preventDefault();
	this._callbackButton.call(this._callbackcontext, ['up']);
}
//////////////////////////////////////////////////////////////////////////////////
//		build default stickEl and baseEl				//
//////////////////////////////////////////////////////////////////////////////////

VirtualJoystick.prototype._buildJoystickBase	= function()
{
	var canvas	= document.createElement( 'canvas' );
	canvas.style.zIndex = 2;
	canvas.width	= 126;
	canvas.height	= 126;
	
	var ctx		= canvas.getContext('2d');
	ctx.beginPath(); 
	ctx.strokeStyle = "cyan"; 
	ctx.lineWidth	= 6; 
	ctx.arc( canvas.width/2, canvas.width/2, 40, 0, Math.PI*2, true); 
	ctx.stroke();	

	ctx.beginPath(); 
	ctx.strokeStyle	= "cyan"; 
	ctx.lineWidth	= 2; 
	ctx.arc( canvas.width/2, canvas.width/2, 60, 0, Math.PI*2, true); 
	ctx.stroke();
	
	return canvas;
}

VirtualJoystick.prototype._buildJoystickStick	= function()
{
	var canvas	= document.createElement( 'canvas' );
	canvas.style.zIndex = 2;
	canvas.width	= 86;
	canvas.height	= 86;
	var ctx		= canvas.getContext('2d');
	ctx.beginPath(); 
	ctx.strokeStyle	= "cyan"; 
	ctx.lineWidth	= 6; 
	ctx.arc( canvas.width/2, canvas.width/2, 40, 0, Math.PI*2, true); 
	ctx.stroke();
	return canvas;
}

VirtualJoystick.prototype._buildJoystickButton	= function()
{
	var canvas	= document.createElement( 'canvas' );
	canvas.style.zIndex = 2;
	canvas.width	= 86;
	canvas.height	= 86;
	var ctx		= canvas.getContext('2d');
	ctx.beginPath(); 
	ctx.strokeStyle	= "green"; 
	ctx.lineWidth	= 6; 
	ctx.arc( canvas.width/2, canvas.width/2, 40, 0, Math.PI*2, true); 
	ctx.stroke();
	return canvas;
}
/*
Copyright (c) 2009 James Padolsey.  All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

   1. Redistributions of source code must retain the above copyright
	  notice, this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright
	  notice, this list of conditions and the following disclaimer in the
	  documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY James Padolsey ``AS IS'' AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL James Padolsey OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
SUCH DAMAGE.

The views and conclusions contained in the software and documentation are
those of the authors and should not be interpreted as representing official
policies, either expressed or implied, of James Padolsey.

 AUTHOR James Padolsey (http://james.padolsey.com)
 VERSION 1.03.0
 UPDATED 29-10-2011
 CONTRIBUTORS
	David Waller
    Benjamin Drucker

*/

var prettyPrint = (function(){
	
	/* These "util" functions are not part of the core
	   functionality but are  all necessary - mostly DOM helpers */
	
	var util = {
		
		el: function(type, attrs) {
			
			/* Create new element */
			var el = document.createElement(type), attr;
			
			/*Copy to single object */
			attrs = util.merge({}, attrs);
			
			/* Add attributes to el */
			if (attrs && attrs.style) {
				var styles = attrs.style;
				util.applyCSS( el, attrs.style );
				delete attrs.style;
			}
			for (attr in attrs) {
				if (attrs.hasOwnProperty(attr)) {
					el[attr] = attrs[attr];
				}
			}
			
			return el;
		
		},
		
		applyCSS: function(el, styles) {
			/* Applies CSS to a single element */
			for (var prop in styles) {
				if (styles.hasOwnProperty(prop)) {
					try{
						/* Yes, IE6 SUCKS! */
						el.style[prop] = styles[prop];
					}catch(e){}
				}
			}
		},
		
		txt: function(t) {
			/* Create text node */
			return document.createTextNode(t);
		},
		
		row: function(cells, type, cellType) {
			
			/* Creates new <tr> */
			cellType = cellType || 'td';
			
			/* colSpan is calculated by length of null items in array */
			var colSpan = util.count(cells, null) + 1,
				tr = util.el('tr'), td,
				attrs = {
					style: util.getStyles(cellType, type),
					colSpan: colSpan,
					onmouseover: function() {
						var tds = this.parentNode.childNodes;
						util.forEach(tds, function(cell){
							if (cell.nodeName.toLowerCase() !== 'td') { return; }
							util.applyCSS(cell, util.getStyles('td_hover', type));
						});
					},
					onmouseout: function() {
						var tds = this.parentNode.childNodes;
						util.forEach(tds, function(cell){
							if (cell.nodeName.toLowerCase() !== 'td') { return; }
							util.applyCSS(cell, util.getStyles('td', type));
						});
					}
				};
				
			util.forEach(cells, function(cell){
				
				if (cell === null) { return; }
				/* Default cell type is <td> */
				td = util.el(cellType, attrs);
				
				if (cell.nodeType) {
					/* IsDomElement */
					td.appendChild(cell);
				} else {
					/* IsString */
					td.innerHTML = util.shorten(cell.toString());
				}
				
				tr.appendChild(td);
			});
			
			return tr;
		},
		
		hRow: function(cells, type){
			/* Return new <th> */
			return util.row(cells, type, 'th');
		},
		
		table: function(headings, type){
			
			headings = headings || [];
			
			/* Creates new table: */
			var attrs = {
					thead: {
						style:util.getStyles('thead',type)
					},
					tbody: {
						style:util.getStyles('tbody',type)
					},
					table: {
						style:util.getStyles('table',type)
					}
				},
				tbl = util.el('table', attrs.table),
				thead = util.el('thead', attrs.thead),
				tbody = util.el('tbody', attrs.tbody);
				
			if (headings.length) {
				tbl.appendChild(thead);
				thead.appendChild( util.hRow(headings, type) );
			}
			tbl.appendChild(tbody);
			
			return {
				/* Facade for dealing with table/tbody
				   Actual table node is this.node: */
				node: tbl,
				tbody: tbody,
				thead: thead,
				appendChild: function(node) {
					this.tbody.appendChild(node);
				},
				addRow: function(cells, _type, cellType){
					this.appendChild(util.row.call(util, cells, (_type || type), cellType));
					return this;
				}
			};
		},
		
		shorten: function(str) {
			var max = 40;
			str = str.replace(/^\s\s*|\s\s*$|\n/g,'');
			return str.length > max ? (str.substring(0, max-1) + '...') : str;
		},
		
		htmlentities: function(str) {
			return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		},
		
		merge: function(target, source) {
			
			/* Merges two (or more) objects,
			   giving the last one precedence */
			
			if ( typeof target !== 'object' ) {
				target = {};
			}
			
			for (var property in source) {
				
				if ( source.hasOwnProperty(property) ) {
					
					var sourceProperty = source[ property ];
					
					if ( typeof sourceProperty === 'object' ) {
						target[ property ] = util.merge( target[ property ], sourceProperty );
						continue;
					}
					
					target[ property ] = sourceProperty;
					
				}
				
			}
			
			for (var a = 2, l = arguments.length; a < l; a++) {
				util.merge(target, arguments[a]);
			}
			
			return target;
		},
		
		count: function(arr, item) {
			var count = 0;
			for (var i = 0, l = arr.length; i< l; i++) {
				if (arr[i] === item) {
					count++;
				}
			}
			return count;
		},
		
		thead: function(tbl) {
			return tbl.getElementsByTagName('thead')[0];
		},
		
		forEach: function(arr, max, fn) {
			
			if (!fn) {
				fn = max;
			}

			/* Helper: iteration */
			var len = arr.length,
				index = -1;
			
			while (++index < len) {
				if(fn( arr[index], index, arr ) === false) {
					break;
				}
			}
			
			return true;
		},
		
		type: function(v){
			try {
				/* Returns type, e.g. "string", "number", "array" etc.
				   Note, this is only used for precise typing. */
				if (v === null) { return 'null'; }
				if (v === undefined) { return 'undefined'; }
				var oType = Object.prototype.toString.call(v).match(/\s(.+?)\]/)[1].toLowerCase();
				if (v.nodeType) {
					if (v.nodeType === 1) {
						return 'domelement';
					}
					return 'domnode';
				}
				if (/^(string|number|array|regexp|function|date|boolean)$/.test(oType)) {
					return oType;
				}
				if (typeof v === 'object') {
					return v.jquery && typeof v.jquery === 'string' ? 'jquery' : 'object';
				}
				if (v === window || v === document) {
					return 'object';
				}
				return 'default';
			} catch(e) {
				return 'default';
			}
		},
		
		within: function(ref) {
			/* Check existence of a val within an object
			   RETURNS KEY */
			return {
				is: function(o) {
					for (var i in ref) {
						if (ref[i] === o) {
							return i;
						}
					}
					return '';
				}
			};
		},
		
		common: {
			circRef: function(obj, key, settings) {
				return util.expander(
					'[POINTS BACK TO <strong>' + (key) + '</strong>]',
					'Click to show this item anyway',
					function() {
						this.parentNode.appendChild( prettyPrintThis(obj,{maxDepth:1}) );
					}
				);
			},
			depthReached: function(obj, settings) {
				return util.expander(
					'[DEPTH REACHED]',
					'Click to show this item anyway',
					function() {
						try {
							this.parentNode.appendChild( prettyPrintThis(obj,{maxDepth:1}) );
						} catch(e) {
							this.parentNode.appendChild(
								util.table(['ERROR OCCURED DURING OBJECT RETRIEVAL'],'error').addRow([e.message]).node   
							);
						}
					}
				);
			}
		},
		
		getStyles: function(el, type) {
			type = prettyPrintThis.settings.styles[type] || {};
			return util.merge(
				{}, prettyPrintThis.settings.styles['default'][el], type[el]
			);
		},
		
		expander: function(text, title, clickFn) {
			return util.el('a', {
				innerHTML:  util.shorten(text) + ' <b style="visibility:hidden;">[+]</b>',
				title: title,
				onmouseover: function() {
					this.getElementsByTagName('b')[0].style.visibility = 'visible';
				},
				onmouseout: function() {
					this.getElementsByTagName('b')[0].style.visibility = 'hidden';
				},
				onclick: function() {
					this.style.display = 'none';
					clickFn.call(this);
					return false;
				},
				style: {
					cursor: 'pointer'
				}
			});
		},
		
		stringify: function(obj) {
			
			/* Bit of an ugly duckling!
			   - This fn returns an ATTEMPT at converting an object/array/anyType
				 into a string, kinda like a JSON-deParser
			   - This is used for when |settings.expanded === false| */
			
			var type = util.type(obj),
				str, first = true;
			if ( type === 'array' ) {
				str = '[';
				util.forEach(obj, function(item,i){
					str += (i===0?'':', ') + util.stringify(item);
				});
				return str + ']';
			}
			if (typeof obj === 'object') {
				str = '{';
				for (var i in obj){
					if (obj.hasOwnProperty(i)) {
						str += (first?'':', ') + i + ':' + util.stringify(obj[i]);
						first = false;
					}
				}
				return str + '}';
			}
			if (type === 'regexp') {
				return '/' + obj.source + '/';
			}
			if (type === 'string') {
				return '"' + obj.replace(/"/g,'\\"') + '"';
			}
			return obj.toString();
		},
		
		headerGradient: (function(){
			
			var canvas = document.createElement('canvas');
			if (!canvas.getContext) { return ''; }
			var cx = canvas.getContext('2d');
			canvas.height = 30;
			canvas.width = 1;
			
			var linearGrad = cx.createLinearGradient(0,0,0,30);
			linearGrad.addColorStop(0,'rgba(0,0,0,0)');
			linearGrad.addColorStop(1,'rgba(0,0,0,0.25)');
			
			cx.fillStyle = linearGrad;
			cx.fillRect(0,0,1,30);
			
			var dataURL = canvas.toDataURL && canvas.toDataURL();
			return 'url(' + (dataURL || '') + ')';
		
		})()
		
	};
	
	// Main..
	var prettyPrintThis = function(obj, options) {
		
		 /*
		 *	  obj :: Object to be printed					
		 *  options :: Options (merged with config)
		 */
		
		options = options || {};
		
		var settings = util.merge( {}, prettyPrintThis.config, options ),
			container = util.el('div'),
			config = prettyPrintThis.config,
			currentDepth = 0,
			stack = {},
			hasRunOnce = false;
		
		/* Expose per-call settings.
		   Note: "config" is overwritten (where necessary) by options/"settings"
		   So, if you need to access/change *DEFAULT* settings then go via ".config" */
		prettyPrintThis.settings = settings;
		
		var typeDealer = {
			string : function(item){
				return util.txt('"' + util.shorten(item.replace(/"/g,'\\"')) + '"');
			},
			number : function(item) {
				return util.txt(item);
			},
			regexp : function(item) {
				
				var miniTable = util.table(['RegExp',null], 'regexp');
				var flags = util.table();
				var span = util.expander(
					'/' + item.source + '/',
					'Click to show more',
					function() {
						this.parentNode.appendChild(miniTable.node);
					}
				);
				
				flags
					.addRow(['g', item.global])
					.addRow(['i', item.ignoreCase])
					.addRow(['m', item.multiline]);
				
				miniTable
					.addRow(['source', '/' + item.source + '/'])
					.addRow(['flags', flags.node])
					.addRow(['lastIndex', item.lastIndex]);
					
				return settings.expanded ? miniTable.node : span;
			},
			domelement : function(element, depth) {
				
				var miniTable = util.table(['DOMElement',null], 'domelement'),
					props = ['id', 'className', 'innerHTML', 'src', 'href'], elname = element.nodeName || '';
				
				miniTable.addRow(['tag', '&lt;' + elname.toLowerCase() + '&gt;']);
					
				util.forEach(props, function(prop){
					if ( element[prop] ) {
						miniTable.addRow([ prop, util.htmlentities(element[prop]) ]);
					}
				});
				
				return settings.expanded ? miniTable.node : util.expander(
					'DOMElement (' + elname.toLowerCase() + ')',
					'Click to show more',
					function() {
						this.parentNode.appendChild(miniTable.node);
					}
				);
			},
			domnode : function(node){
				
				/* Deals with all DOMNodes that aren't elements (nodeType !== 1) */
				var miniTable = util.table(['DOMNode',null], 'domelement'),
					data =  util.htmlentities( (node.data || 'UNDEFINED').replace(/\n/g,'\\n') );
				miniTable
					.addRow(['nodeType', node.nodeType + ' (' + node.nodeName + ')'])
					.addRow(['data', data]);
				
				return settings.expanded ? miniTable.node : util.expander(
					'DOMNode',
					'Click to show more',
					function() {
						this.parentNode.appendChild(miniTable.node);
					}
				);
			},
			jquery : function(obj, depth, key) {
				return typeDealer['array'](obj, depth, key, true);
			},
			object : function(obj, depth, key) {
				
				/* Checking depth + circular refs */
				/* Note, check for circular refs before depth; just makes more sense */
				var stackKey = util.within(stack).is(obj);
				if ( stackKey ) {
					return util.common.circRef(obj, stackKey, settings);
				}
				stack[key||'TOP'] = obj;
				if (depth === settings.maxDepth) {
					return util.common.depthReached(obj, settings);
				}
				
				var table = util.table(['Object', null],'object'),
					isEmpty = true;
				
				for (var i in obj) {
					if (!obj.hasOwnProperty || obj.hasOwnProperty(i)) {
						var item = obj[i],
							type = util.type(item);
						isEmpty = false;
						try {
							table.addRow([i, typeDealer[ type ](item, depth+1, i)], type);
						} catch(e) {
							/* Security errors are thrown on certain Window/DOM properties */
							if (window.console && window.console.log) {
								console.log(e.message);
							}
						}
					}
				}
				
				if (isEmpty) {
					table.addRow(['<small>[empty]</small>']);
				} else {
					table.thead.appendChild(
						util.hRow(['key','value'], 'colHeader')
					);
				}
				
				var ret = (settings.expanded || hasRunOnce) ? table.node : util.expander(
					util.stringify(obj),
					'Click to show more',
					function() {
						this.parentNode.appendChild(table.node);
					}
				);
				
				hasRunOnce = true;
				
				return ret;
				
			},
			array : function(arr, depth, key, jquery) {
				
				/* Checking depth + circular refs */
				/* Note, check for circular refs before depth; just makes more sense */
				var stackKey = util.within(stack).is(arr);
				if ( stackKey ) {
					return util.common.circRef(arr, stackKey);
				}
				stack[key||'TOP'] = arr;
				if (depth === settings.maxDepth) {
					return util.common.depthReached(arr);
				}
				
				/* Accepts a table and modifies it */
				var me = jquery ? 'jQuery' : 'Array', table = util.table([me + '(' + arr.length + ')', null], jquery ? 'jquery' : me.toLowerCase()),
					isEmpty = true,
                    count = 0;
				
				if (jquery){
					table.addRow(['selector',arr.selector]);
				}

				util.forEach(arr, function(item,i){
                    if (settings.maxArray >= 0 && ++count > settings.maxArray) {
                        table.addRow([
                            i + '..' + (arr.length-1),
                            typeDealer[ util.type(item) ]('...', depth+1, i)
                        ]);
                        return false;
                    }
					isEmpty = false;
					table.addRow([i, typeDealer[ util.type(item) ](item, depth+1, i)]);
				});

				if (!jquery){
					if (isEmpty) {
						table.addRow(['<small>[empty]</small>']);
					} else {
						table.thead.appendChild( util.hRow(['index','value'], 'colHeader') );
					}
				}
				
				return settings.expanded ? table.node : util.expander(
					util.stringify(arr),
					'Click to show more',
					function() {
						this.parentNode.appendChild(table.node);
					}
				);
				
			},
			'function' : function(fn, depth, key) {
				
				/* Checking JUST circular refs */
				var stackKey = util.within(stack).is(fn);
				if ( stackKey ) { return util.common.circRef(fn, stackKey); }
				stack[key||'TOP'] = fn;
				
				var miniTable = util.table(['Function',null], 'function'),
					argsTable = util.table(['Arguments']),
					args = fn.toString().match(/\((.+?)\)/),
					body = fn.toString().match(/\(.*?\)\s+?\{?([\S\s]+)/)[1].replace(/\}?$/,'');
					
				miniTable
					.addRow(['arguments', args ? args[1].replace(/[^\w_,\s]/g,'') : '<small>[none/native]</small>'])
					.addRow(['body', body]);
					
				return settings.expanded ? miniTable.node : util.expander(
					'function(){...}',
					'Click to see more about this function.',
					function(){
						this.parentNode.appendChild(miniTable.node);
					}
				);
			},
			'date' : function(date) {
				
				var miniTable = util.table(['Date',null], 'date'),
					sDate = date.toString().split(/\s/);
				
				/* TODO: Make this work well in IE! */
				miniTable
					.addRow(['Time', sDate[4]])
					.addRow(['Date', sDate.slice(0,4).join('-')]);
					
				return settings.expanded ? miniTable.node : util.expander(
					'Date (timestamp): ' + (+date),
					'Click to see a little more info about this date',
					function() {
						this.parentNode.appendChild(miniTable.node);
					}
				);
				
			},
			'boolean' : function(bool) {
				return util.txt( bool.toString().toUpperCase() );
			},
			'undefined' : function() {
				return util.txt('UNDEFINED');
			},
			'null' : function() {
				return util.txt('NULL');
			},
			'default' : function() {
				/* When a type cannot be found */
				return util.txt('prettyPrint: TypeNotFound Error');
			}
		};
		
		container.appendChild( typeDealer[ (settings.forceObject) ? 'object' : util.type(obj) ](obj, currentDepth) );
		
		return container;
		
	};
	
	/* Configuration */
	
	/* All items can be overwridden by passing an
	   "options" object when calling prettyPrint */
	prettyPrintThis.config = {
		
		/* Try setting this to false to save space */
		expanded: true,
		
		forceObject: false,
		maxDepth: 3,
		maxArray: -1,  // default is unlimited
		styles: {
			array: {
				th: {
					backgroundColor: '#6DBD2A',
					color: 'white'
				}
			},
			'function': {
				th: {
					backgroundColor: '#D82525'
				}
			},
			regexp: {
				th: {
					backgroundColor: '#E2F3FB',
					color: '#000'
				}
			},
			object: {
				th: {
					backgroundColor: '#1F96CF'
				}
			},
			jquery : {
				th: {
					backgroundColor: '#FBF315'
				}
			},
			error: {
				th: {
					backgroundColor: 'red',
					color: 'yellow'
				}
			},
			domelement: {
				th: {
					backgroundColor: '#F3801E'
				}
			},
			date: {
				th: {
					backgroundColor: '#A725D8'
				}
			},
			colHeader: {
				th: {
					backgroundColor: '#EEE',
					color: '#000',
					textTransform: 'uppercase'
				}
			},
			'default': {
				table: {
					borderCollapse: 'collapse',
					width: '100%'
				},
				td: {
					padding: '5px',
					fontSize: '12px',
					backgroundColor: '#FFF',
					color: '#222',
					border: '1px solid #000',
					verticalAlign: 'top',
					fontFamily: '"Consolas","Lucida Console",Courier,mono',
					whiteSpace: 'nowrap'
				},
				td_hover: {
					/* Styles defined here will apply to all tr:hover > td,
						- Be aware that "inheritable" properties (e.g. fontWeight) WILL BE INHERITED */
				},
				th: {
					padding: '5px',
					fontSize: '12px',
					backgroundColor: '#222',
					color: '#EEE',
					textAlign: 'left',
					border: '1px solid #000',
					verticalAlign: 'top',
					fontFamily: '"Consolas","Lucida Console",Courier,mono',
					backgroundImage: util.headerGradient,
					backgroundRepeat: 'repeat-x'
				}
			}
		}
	};
	
	return prettyPrintThis;
	
})();
// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Basic JavaScript BN library - subset useful for RSA encryption.

// Bits per digit
var dbits;

// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary&0xffffff)==0xefcafe);

// (public) Constructor
function encryptionBigInteger(a,b,c) {
  if(a != null)
    if("number" == typeof a) this.fromNumber(a,b,c);
    else if(b == null && "string" != typeof a) this.fromString(a,256);
    else this.fromString(a,b);
}

// return new, unset encryptionBigInteger
function nbi() { return new encryptionBigInteger(null); }

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.

// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(i,x,w,j,c,n) {
  while(--n >= 0) {
    var v = x*this[i++]+w[j]+c;
    c = Math.floor(v/0x4000000);
    w[j++] = v&0x3ffffff;
  }
  return c;
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(i,x,w,j,c,n) {
  var xl = x&0x7fff, xh = x>>15;
  while(--n >= 0) {
    var l = this[i]&0x7fff;
    var h = this[i++]>>15;
    var m = xh*l+h*xl;
    l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
    c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
    w[j++] = l&0x3fffffff;
  }
  return c;
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(i,x,w,j,c,n) {
  var xl = x&0x3fff, xh = x>>14;
  while(--n >= 0) {
    var l = this[i]&0x3fff;
    var h = this[i++]>>14;
    var m = xh*l+h*xl;
    l = xl*l+((m&0x3fff)<<14)+w[j]+c;
    c = (l>>28)+(m>>14)+xh*h;
    w[j++] = l&0xfffffff;
  }
  return c;
}
if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
  encryptionBigInteger.prototype.am = am2;
  dbits = 30;
}
else if(j_lm && (navigator.appName != "Netscape")) {
  encryptionBigInteger.prototype.am = am1;
  dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
  encryptionBigInteger.prototype.am = am3;
  dbits = 28;
}

encryptionBigInteger.prototype.DB = dbits;
encryptionBigInteger.prototype.DM = ((1<<dbits)-1);
encryptionBigInteger.prototype.DV = (1<<dbits);

var BI_FP = 52;
encryptionBigInteger.prototype.FV = Math.pow(2,BI_FP);
encryptionBigInteger.prototype.F1 = BI_FP-dbits;
encryptionBigInteger.prototype.F2 = 2*dbits-BI_FP;

// Digit conversions
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr,vv;
rr = "0".charCodeAt(0);
for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

function int2char(n) { return BI_RM.charAt(n); }
function intAt(s,i) {
  var c = BI_RC[s.charCodeAt(i)];
  return (c==null)?-1:c;
}

// (protected) copy this to r
function bnpCopyTo(r) {
  for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
  r.t = this.t;
  r.s = this.s;
}

// (protected) set from integer value x, -DV <= x < DV
function bnpFromInt(x) {
  this.t = 1;
  this.s = (x<0)?-1:0;
  if(x > 0) this[0] = x;
  else if(x < -1) this[0] = x+DV;
  else this.t = 0;
}

// return bigint initialized to value
function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

// (protected) set from string and radix
function bnpFromString(s,b) {
  var k;
  if(b == 16) k = 4;
  else if(b == 8) k = 3;
  else if(b == 256) k = 8; // byte array
  else if(b == 2) k = 1;
  else if(b == 32) k = 5;
  else if(b == 4) k = 2;
  else { this.fromRadix(s,b); return; }
  this.t = 0;
  this.s = 0;
  var i = s.length, mi = false, sh = 0;
  while(--i >= 0) {
    var x = (k==8)?s[i]&0xff:intAt(s,i);
    if(x < 0) {
      if(s.charAt(i) == "-") mi = true;
      continue;
    }
    mi = false;
    if(sh == 0)
      this[this.t++] = x;
    else if(sh+k > this.DB) {
      this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
      this[this.t++] = (x>>(this.DB-sh));
    }
    else
      this[this.t-1] |= x<<sh;
    sh += k;
    if(sh >= this.DB) sh -= this.DB;
  }
  if(k == 8 && (s[0]&0x80) != 0) {
    this.s = -1;
    if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
  }
  this.clamp();
  if(mi) encryptionBigInteger.ZERO.subTo(this,this);
}

// (protected) clamp off excess high words
function bnpClamp() {
  var c = this.s&this.DM;
  while(this.t > 0 && this[this.t-1] == c) --this.t;
}

// (public) return string representation in given radix
function bnToString(b) {
  if(this.s < 0) return "-"+this.negate().toString(b);
  var k;
  if(b == 16) k = 4;
  else if(b == 8) k = 3;
  else if(b == 2) k = 1;
  else if(b == 32) k = 5;
  else if(b == 4) k = 2;
  else return this.toRadix(b);
  var km = (1<<k)-1, d, m = false, r = "", i = this.t;
  var p = this.DB-(i*this.DB)%k;
  if(i-- > 0) {
    if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
    while(i >= 0) {
      if(p < k) {
        d = (this[i]&((1<<p)-1))<<(k-p);
        d |= this[--i]>>(p+=this.DB-k);
      }
      else {
        d = (this[i]>>(p-=k))&km;
        if(p <= 0) { p += this.DB; --i; }
      }
      if(d > 0) m = true;
      if(m) r += int2char(d);
    }
  }
  return m?r:"0";
}

// (public) -this
function bnNegate() { var r = nbi(); encryptionBigInteger.ZERO.subTo(this,r); return r; }

// (public) |this|
function bnAbs() { return (this.s<0)?this.negate():this; }

// (public) return + if this > a, - if this < a, 0 if equal
function bnCompareTo(a) {
  var r = this.s-a.s;
  if(r != 0) return r;
  var i = this.t;
  r = i-a.t;
  if(r != 0) return (this.s<0)?-r:r;
  while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
  return 0;
}

// returns bit length of the integer x
function nbits(x) {
  var r = 1, t;
  if((t=x>>>16) != 0) { x = t; r += 16; }
  if((t=x>>8) != 0) { x = t; r += 8; }
  if((t=x>>4) != 0) { x = t; r += 4; }
  if((t=x>>2) != 0) { x = t; r += 2; }
  if((t=x>>1) != 0) { x = t; r += 1; }
  return r;
}

// (public) return the number of bits in "this"
function bnBitLength() {
  if(this.t <= 0) return 0;
  return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
}

// (protected) r = this << n*DB
function bnpDLShiftTo(n,r) {
  var i;
  for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
  for(i = n-1; i >= 0; --i) r[i] = 0;
  r.t = this.t+n;
  r.s = this.s;
}

// (protected) r = this >> n*DB
function bnpDRShiftTo(n,r) {
  for(var i = n; i < this.t; ++i) r[i-n] = this[i];
  r.t = Math.max(this.t-n,0);
  r.s = this.s;
}

// (protected) r = this << n
function bnpLShiftTo(n,r) {
  var bs = n%this.DB;
  var cbs = this.DB-bs;
  var bm = (1<<cbs)-1;
  var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
  for(i = this.t-1; i >= 0; --i) {
    r[i+ds+1] = (this[i]>>cbs)|c;
    c = (this[i]&bm)<<bs;
  }
  for(i = ds-1; i >= 0; --i) r[i] = 0;
  r[ds] = c;
  r.t = this.t+ds+1;
  r.s = this.s;
  r.clamp();
}

// (protected) r = this >> n
function bnpRShiftTo(n,r) {
  r.s = this.s;
  var ds = Math.floor(n/this.DB);
  if(ds >= this.t) { r.t = 0; return; }
  var bs = n%this.DB;
  var cbs = this.DB-bs;
  var bm = (1<<bs)-1;
  r[0] = this[ds]>>bs;
  for(var i = ds+1; i < this.t; ++i) {
    r[i-ds-1] |= (this[i]&bm)<<cbs;
    r[i-ds] = this[i]>>bs;
  }
  if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
  r.t = this.t-ds;
  r.clamp();
}

// (protected) r = this - a
function bnpSubTo(a,r) {
  var i = 0, c = 0, m = Math.min(a.t,this.t);
  while(i < m) {
    c += this[i]-a[i];
    r[i++] = c&this.DM;
    c >>= this.DB;
  }
  if(a.t < this.t) {
    c -= a.s;
    while(i < this.t) {
      c += this[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c += this.s;
  }
  else {
    c += this.s;
    while(i < a.t) {
      c -= a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c -= a.s;
  }
  r.s = (c<0)?-1:0;
  if(c < -1) r[i++] = this.DV+c;
  else if(c > 0) r[i++] = c;
  r.t = i;
  r.clamp();
}

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function bnpMultiplyTo(a,r) {
  var x = this.abs(), y = a.abs();
  var i = x.t;
  r.t = i+y.t;
  while(--i >= 0) r[i] = 0;
  for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
  r.s = 0;
  r.clamp();
  if(this.s != a.s) encryptionBigInteger.ZERO.subTo(r,r);
}

// (protected) r = this^2, r != this (HAC 14.16)
function bnpSquareTo(r) {
  var x = this.abs();
  var i = r.t = 2*x.t;
  while(--i >= 0) r[i] = 0;
  for(i = 0; i < x.t-1; ++i) {
    var c = x.am(i,x[i],r,2*i,0,1);
    if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
      r[i+x.t] -= x.DV;
      r[i+x.t+1] = 1;
    }
  }
  if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
  r.s = 0;
  r.clamp();
}

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function bnpDivRemTo(m,q,r) {
  var pm = m.abs();
  if(pm.t <= 0) return;
  var pt = this.abs();
  if(pt.t < pm.t) {
    if(q != null) q.fromInt(0);
    if(r != null) this.copyTo(r);
    return;
  }
  if(r == null) r = nbi();
  var y = nbi(), ts = this.s, ms = m.s;
  var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
  if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
  else { pm.copyTo(y); pt.copyTo(r); }
  var ys = y.t;
  var y0 = y[ys-1];
  if(y0 == 0) return;
  var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
  var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
  var i = r.t, j = i-ys, t = (q==null)?nbi():q;
  y.dlShiftTo(j,t);
  if(r.compareTo(t) >= 0) {
    r[r.t++] = 1;
    r.subTo(t,r);
  }
  encryptionBigInteger.ONE.dlShiftTo(ys,t);
  t.subTo(y,y);	// "negative" y so we can replace sub with am later
  while(y.t < ys) y[y.t++] = 0;
  while(--j >= 0) {
    // Estimate quotient digit
    var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
    if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
      y.dlShiftTo(j,t);
      r.subTo(t,r);
      while(r[i] < --qd) r.subTo(t,r);
    }
  }
  if(q != null) {
    r.drShiftTo(ys,q);
    if(ts != ms) encryptionBigInteger.ZERO.subTo(q,q);
  }
  r.t = ys;
  r.clamp();
  if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
  if(ts < 0) encryptionBigInteger.ZERO.subTo(r,r);
}

// (public) this mod a
function bnMod(a) {
  var r = nbi();
  this.abs().divRemTo(a,null,r);
  if(this.s < 0 && r.compareTo(encryptionBigInteger.ZERO) > 0) a.subTo(r,r);
  return r;
}

// Modular reduction using "classic" algorithm
function Classic(m) { this.m = m; }
function cConvert(x) {
  if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
  else return x;
}
function cRevert(x) { return x; }
function cReduce(x) { x.divRemTo(this.m,null,x); }
function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function bnpInvDigit() {
  if(this.t < 1) return 0;
  var x = this[0];
  if((x&1) == 0) return 0;
  var y = x&3;		// y == 1/x mod 2^2
  y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
  y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
  y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
  // last step - calculate inverse mod DV directly;
  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
  y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
  // we really want the negative inverse, and -DV < y < DV
  return (y>0)?this.DV-y:-y;
}

// Montgomery reduction
function Montgomery(m) {
  this.m = m;
  this.mp = m.invDigit();
  this.mpl = this.mp&0x7fff;
  this.mph = this.mp>>15;
  this.um = (1<<(m.DB-15))-1;
  this.mt2 = 2*m.t;
}

// xR mod m
function montConvert(x) {
  var r = nbi();
  x.abs().dlShiftTo(this.m.t,r);
  r.divRemTo(this.m,null,r);
  if(x.s < 0 && r.compareTo(encryptionBigInteger.ZERO) > 0) this.m.subTo(r,r);
  return r;
}

// x/R mod m
function montRevert(x) {
  var r = nbi();
  x.copyTo(r);
  this.reduce(r);
  return r;
}

// x = x/R mod m (HAC 14.32)
function montReduce(x) {
  while(x.t <= this.mt2)	// pad x so am has enough room later
    x[x.t++] = 0;
  for(var i = 0; i < this.m.t; ++i) {
    // faster way of calculating u0 = x[i]*mp mod DV
    var j = x[i]&0x7fff;
    var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
    // use am to combine the multiply-shift-add into one call
    j = i+this.m.t;
    x[j] += this.m.am(0,u0,x,i,0,this.m.t);
    // propagate carry
    while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
  }
  x.clamp();
  x.drShiftTo(this.m.t,x);
  if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

// r = "x^2/R mod m"; x != r
function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

// r = "xy/R mod m"; x,y != r
function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

// (protected) true iff this is even
function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function bnpExp(e,z) {
  if(e > 0xffffffff || e < 1) return encryptionBigInteger.ONE;
  var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
  g.copyTo(r);
  while(--i >= 0) {
    z.sqrTo(r,r2);
    if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
    else { var t = r; r = r2; r2 = t; }
  }
  return z.revert(r);
}

// (public) this^e % m, 0 <= e < 2^32
function bnModPowInt(e,m) {
  var z;
  if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
  return this.exp(e,z);
}

// protected
encryptionBigInteger.prototype.copyTo = bnpCopyTo;
encryptionBigInteger.prototype.fromInt = bnpFromInt;
encryptionBigInteger.prototype.fromString = bnpFromString;
encryptionBigInteger.prototype.clamp = bnpClamp;
encryptionBigInteger.prototype.dlShiftTo = bnpDLShiftTo;
encryptionBigInteger.prototype.drShiftTo = bnpDRShiftTo;
encryptionBigInteger.prototype.lShiftTo = bnpLShiftTo;
encryptionBigInteger.prototype.rShiftTo = bnpRShiftTo;
encryptionBigInteger.prototype.subTo = bnpSubTo;
encryptionBigInteger.prototype.multiplyTo = bnpMultiplyTo;
encryptionBigInteger.prototype.squareTo = bnpSquareTo;
encryptionBigInteger.prototype.divRemTo = bnpDivRemTo;
encryptionBigInteger.prototype.invDigit = bnpInvDigit;
encryptionBigInteger.prototype.isEven = bnpIsEven;
encryptionBigInteger.prototype.exp = bnpExp;

// public
encryptionBigInteger.prototype.toString = bnToString;
encryptionBigInteger.prototype.negate = bnNegate;
encryptionBigInteger.prototype.abs = bnAbs;
encryptionBigInteger.prototype.compareTo = bnCompareTo;
encryptionBigInteger.prototype.bitLength = bnBitLength;
encryptionBigInteger.prototype.mod = bnMod;
encryptionBigInteger.prototype.modPowInt = bnModPowInt;

// "constants"
encryptionBigInteger.ZERO = nbv(0);
encryptionBigInteger.ONE = nbv(1);
// Copyright (c) 2005-2009  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.

// Extended JavaScript BN functions, required for RSA private ops.

// Version 1.1: new encryptionBigInteger("0", 10) returns "proper" zero
// Version 1.2: square() API, isProbablePrime fix

// (public)
function bnClone() { var r = nbi(); this.copyTo(r); return r; }

// (public) return value as integer
function bnIntValue() {
  if(this.s < 0) {
    if(this.t == 1) return this[0]-this.DV;
    else if(this.t == 0) return -1;
  }
  else if(this.t == 1) return this[0];
  else if(this.t == 0) return 0;
  // assumes 16 < DB < 32
  return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
}

// (public) return value as byte
function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

// (public) return value as short (assumes DB>=16)
function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

// (protected) return x s.t. r^x < DV
function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

// (public) 0 if this == 0, 1 if this > 0
function bnSigNum() {
  if(this.s < 0) return -1;
  else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
  else return 1;
}

// (protected) convert to radix string
function bnpToRadix(b) {
  if(b == null) b = 10;
  if(this.signum() == 0 || b < 2 || b > 36) return "0";
  var cs = this.chunkSize(b);
  var a = Math.pow(b,cs);
  var d = nbv(a), y = nbi(), z = nbi(), r = "";
  this.divRemTo(d,y,z);
  while(y.signum() > 0) {
    r = (a+z.intValue()).toString(b).substr(1) + r;
    y.divRemTo(d,y,z);
  }
  return z.intValue().toString(b) + r;
}

// (protected) convert from radix string
function bnpFromRadix(s,b) {
  this.fromInt(0);
  if(b == null) b = 10;
  var cs = this.chunkSize(b);
  var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
  for(var i = 0; i < s.length; ++i) {
    var x = intAt(s,i);
    if(x < 0) {
      if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
      continue;
    }
    w = b*w+x;
    if(++j >= cs) {
      this.dMultiply(d);
      this.dAddOffset(w,0);
      j = 0;
      w = 0;
    }
  }
  if(j > 0) {
    this.dMultiply(Math.pow(b,j));
    this.dAddOffset(w,0);
  }
  if(mi) encryptionBigInteger.ZERO.subTo(this,this);
}

// (protected) alternate constructor
function bnpFromNumber(a,b,c) {
  if("number" == typeof b) {
    // new encryptionBigInteger(int,int,RNG)
    if(a < 2) this.fromInt(1);
    else {
      this.fromNumber(a,c);
      if(!this.testBit(a-1))	// force MSB set
        this.bitwiseTo(encryptionBigInteger.ONE.shiftLeft(a-1),op_or,this);
      if(this.isEven()) this.dAddOffset(1,0); // force odd
      while(!this.isProbablePrime(b)) {
        this.dAddOffset(2,0);
        if(this.bitLength() > a) this.subTo(encryptionBigInteger.ONE.shiftLeft(a-1),this);
      }
    }
  }
  else {
    // new encryptionBigInteger(int,RNG)
    var x = new Array(), t = a&7;
    x.length = (a>>3)+1;
    b.nextBytes(x);
    if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
    this.fromString(x,256);
  }
}

// (public) convert to bigendian byte array
function bnToByteArray() {
  var i = this.t, r = new Array();
  r[0] = this.s;
  var p = this.DB-(i*this.DB)%8, d, k = 0;
  if(i-- > 0) {
    if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
      r[k++] = d|(this.s<<(this.DB-p));
    while(i >= 0) {
      if(p < 8) {
        d = (this[i]&((1<<p)-1))<<(8-p);
        d |= this[--i]>>(p+=this.DB-8);
      }
      else {
        d = (this[i]>>(p-=8))&0xff;
        if(p <= 0) { p += this.DB; --i; }
      }
      if((d&0x80) != 0) d |= -256;
      if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
      if(k > 0 || d != this.s) r[k++] = d;
    }
  }
  return r;
}

function bnEquals(a) { return(this.compareTo(a)==0); }
function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

// (protected) r = this op a (bitwise)
function bnpBitwiseTo(a,op,r) {
  var i, f, m = Math.min(a.t,this.t);
  for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
  if(a.t < this.t) {
    f = a.s&this.DM;
    for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
    r.t = this.t;
  }
  else {
    f = this.s&this.DM;
    for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
    r.t = a.t;
  }
  r.s = op(this.s,a.s);
  r.clamp();
}

// (public) this & a
function op_and(x,y) { return x&y; }
function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

// (public) this | a
function op_or(x,y) { return x|y; }
function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

// (public) this ^ a
function op_xor(x,y) { return x^y; }
function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

// (public) this & ~a
function op_andnot(x,y) { return x&~y; }
function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

// (public) ~this
function bnNot() {
  var r = nbi();
  for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
  r.t = this.t;
  r.s = ~this.s;
  return r;
}

// (public) this << n
function bnShiftLeft(n) {
  var r = nbi();
  if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
  return r;
}

// (public) this >> n
function bnShiftRight(n) {
  var r = nbi();
  if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
  return r;
}

// return index of lowest 1-bit in x, x < 2^31
function lbit(x) {
  if(x == 0) return -1;
  var r = 0;
  if((x&0xffff) == 0) { x >>= 16; r += 16; }
  if((x&0xff) == 0) { x >>= 8; r += 8; }
  if((x&0xf) == 0) { x >>= 4; r += 4; }
  if((x&3) == 0) { x >>= 2; r += 2; }
  if((x&1) == 0) ++r;
  return r;
}

// (public) returns index of lowest 1-bit (or -1 if none)
function bnGetLowestSetBit() {
  for(var i = 0; i < this.t; ++i)
    if(this[i] != 0) return i*this.DB+lbit(this[i]);
  if(this.s < 0) return this.t*this.DB;
  return -1;
}

// return number of 1 bits in x
function cbit(x) {
  var r = 0;
  while(x != 0) { x &= x-1; ++r; }
  return r;
}

// (public) return number of set bits
function bnBitCount() {
  var r = 0, x = this.s&this.DM;
  for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
  return r;
}

// (public) true iff nth bit is set
function bnTestBit(n) {
  var j = Math.floor(n/this.DB);
  if(j >= this.t) return(this.s!=0);
  return((this[j]&(1<<(n%this.DB)))!=0);
}

// (protected) this op (1<<n)
function bnpChangeBit(n,op) {
  var r = encryptionBigInteger.ONE.shiftLeft(n);
  this.bitwiseTo(r,op,r);
  return r;
}

// (public) this | (1<<n)
function bnSetBit(n) { return this.changeBit(n,op_or); }

// (public) this & ~(1<<n)
function bnClearBit(n) { return this.changeBit(n,op_andnot); }

// (public) this ^ (1<<n)
function bnFlipBit(n) { return this.changeBit(n,op_xor); }

// (protected) r = this + a
function bnpAddTo(a,r) {
  var i = 0, c = 0, m = Math.min(a.t,this.t);
  while(i < m) {
    c += this[i]+a[i];
    r[i++] = c&this.DM;
    c >>= this.DB;
  }
  if(a.t < this.t) {
    c += a.s;
    while(i < this.t) {
      c += this[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c += this.s;
  }
  else {
    c += this.s;
    while(i < a.t) {
      c += a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    c += a.s;
  }
  r.s = (c<0)?-1:0;
  if(c > 0) r[i++] = c;
  else if(c < -1) r[i++] = this.DV+c;
  r.t = i;
  r.clamp();
}

// (public) this + a
function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

// (public) this - a
function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

// (public) this * a
function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

// (public) this^2
function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

// (public) this / a
function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

// (public) this % a
function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

// (public) [this/a,this%a]
function bnDivideAndRemainder(a) {
  var q = nbi(), r = nbi();
  this.divRemTo(a,q,r);
  return new Array(q,r);
}

// (protected) this *= n, this >= 0, 1 < n < DV
function bnpDMultiply(n) {
  this[this.t] = this.am(0,n-1,this,0,0,this.t);
  ++this.t;
  this.clamp();
}

// (protected) this += n << w words, this >= 0
function bnpDAddOffset(n,w) {
  if(n == 0) return;
  while(this.t <= w) this[this.t++] = 0;
  this[w] += n;
  while(this[w] >= this.DV) {
    this[w] -= this.DV;
    if(++w >= this.t) this[this.t++] = 0;
    ++this[w];
  }
}

// A "null" reducer
function NullExp() {}
function nNop(x) { return x; }
function nMulTo(x,y,r) { x.multiplyTo(y,r); }
function nSqrTo(x,r) { x.squareTo(r); }

NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

// (public) this^e
function bnPow(e) { return this.exp(e,new NullExp()); }

// (protected) r = lower n words of "this * a", a.t <= n
// "this" should be the larger one if appropriate.
function bnpMultiplyLowerTo(a,n,r) {
  var i = Math.min(this.t+a.t,n);
  r.s = 0; // assumes a,this >= 0
  r.t = i;
  while(i > 0) r[--i] = 0;
  var j;
  for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
  for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
  r.clamp();
}

// (protected) r = "this * a" without lower n words, n > 0
// "this" should be the larger one if appropriate.
function bnpMultiplyUpperTo(a,n,r) {
  --n;
  var i = r.t = this.t+a.t-n;
  r.s = 0; // assumes a,this >= 0
  while(--i >= 0) r[i] = 0;
  for(i = Math.max(n-this.t,0); i < a.t; ++i)
    r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
  r.clamp();
  r.drShiftTo(1,r);
}

// Barrett modular reduction
function Barrett(m) {
  // setup Barrett
  this.r2 = nbi();
  this.q3 = nbi();
  encryptionBigInteger.ONE.dlShiftTo(2*m.t,this.r2);
  this.mu = this.r2.divide(m);
  this.m = m;
}

function barrettConvert(x) {
  if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
  else if(x.compareTo(this.m) < 0) return x;
  else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
}

function barrettRevert(x) { return x; }

// x = x mod m (HAC 14.42)
function barrettReduce(x) {
  x.drShiftTo(this.m.t-1,this.r2);
  if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
  this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
  this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
  while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
  x.subTo(this.r2,x);
  while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
}

// r = x^2 mod m; x != r
function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

// r = x*y mod m; x,y != r
function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

// (public) this^e % m (HAC 14.85)
function bnModPow(e,m) {
  var i = e.bitLength(), k, r = nbv(1), z;
  if(i <= 0) return r;
  else if(i < 18) k = 1;
  else if(i < 48) k = 3;
  else if(i < 144) k = 4;
  else if(i < 768) k = 5;
  else k = 6;
  if(i < 8)
    z = new Classic(m);
  else if(m.isEven())
    z = new Barrett(m);
  else
    z = new Montgomery(m);

  // precomputation
  var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
  g[1] = z.convert(this);
  if(k > 1) {
    var g2 = nbi();
    z.sqrTo(g[1],g2);
    while(n <= km) {
      g[n] = nbi();
      z.mulTo(g2,g[n-2],g[n]);
      n += 2;
    }
  }

  var j = e.t-1, w, is1 = true, r2 = nbi(), t;
  i = nbits(e[j])-1;
  while(j >= 0) {
    if(i >= k1) w = (e[j]>>(i-k1))&km;
    else {
      w = (e[j]&((1<<(i+1))-1))<<(k1-i);
      if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
    }

    n = k;
    while((w&1) == 0) { w >>= 1; --n; }
    if((i -= n) < 0) { i += this.DB; --j; }
    if(is1) {	// ret == 1, don't bother squaring or multiplying it
      g[w].copyTo(r);
      is1 = false;
    }
    else {
      while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
      if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
      z.mulTo(r2,g[w],r);
    }

    while(j >= 0 && (e[j]&(1<<i)) == 0) {
      z.sqrTo(r,r2); t = r; r = r2; r2 = t;
      if(--i < 0) { i = this.DB-1; --j; }
    }
  }
  return z.revert(r);
}

// (public) gcd(this,a) (HAC 14.54)
function bnGCD(a) {
  var x = (this.s<0)?this.negate():this.clone();
  var y = (a.s<0)?a.negate():a.clone();
  if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
  var i = x.getLowestSetBit(), g = y.getLowestSetBit();
  if(g < 0) return x;
  if(i < g) g = i;
  if(g > 0) {
    x.rShiftTo(g,x);
    y.rShiftTo(g,y);
  }
  while(x.signum() > 0) {
    if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
    if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
    if(x.compareTo(y) >= 0) {
      x.subTo(y,x);
      x.rShiftTo(1,x);
    }
    else {
      y.subTo(x,y);
      y.rShiftTo(1,y);
    }
  }
  if(g > 0) y.lShiftTo(g,y);
  return y;
}

// (protected) this % n, n < 2^26
function bnpModInt(n) {
  if(n <= 0) return 0;
  var d = this.DV%n, r = (this.s<0)?n-1:0;
  if(this.t > 0)
    if(d == 0) r = this[0]%n;
    else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
  return r;
}

// (public) 1/this % m (HAC 14.61)
function bnModInverse(m) {
  var ac = m.isEven();
  if((this.isEven() && ac) || m.signum() == 0) return encryptionBigInteger.ZERO;
  var u = m.clone(), v = this.clone();
  var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
  while(u.signum() != 0) {
    while(u.isEven()) {
      u.rShiftTo(1,u);
      if(ac) {
        if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
        a.rShiftTo(1,a);
      }
      else if(!b.isEven()) b.subTo(m,b);
      b.rShiftTo(1,b);
    }
    while(v.isEven()) {
      v.rShiftTo(1,v);
      if(ac) {
        if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
        c.rShiftTo(1,c);
      }
      else if(!d.isEven()) d.subTo(m,d);
      d.rShiftTo(1,d);
    }
    if(u.compareTo(v) >= 0) {
      u.subTo(v,u);
      if(ac) a.subTo(c,a);
      b.subTo(d,b);
    }
    else {
      v.subTo(u,v);
      if(ac) c.subTo(a,c);
      d.subTo(b,d);
    }
  }
  if(v.compareTo(encryptionBigInteger.ONE) != 0) return encryptionBigInteger.ZERO;
  if(d.compareTo(m) >= 0) return d.subtract(m);
  if(d.signum() < 0) d.addTo(m,d); else return d;
  if(d.signum() < 0) return d.add(m); else return d;
}

var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
var lplim = (1<<26)/lowprimes[lowprimes.length-1];

// (public) test primality with certainty >= 1-.5^t
function bnIsProbablePrime(t) {
  var i, x = this.abs();
  if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
    for(i = 0; i < lowprimes.length; ++i)
      if(x[0] == lowprimes[i]) return true;
    return false;
  }
  if(x.isEven()) return false;
  i = 1;
  while(i < lowprimes.length) {
    var m = lowprimes[i], j = i+1;
    while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
    m = x.modInt(m);
    while(i < j) if(m%lowprimes[i++] == 0) return false;
  }
  return x.millerRabin(t);
}

// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
function bnpMillerRabin(t) {
  var n1 = this.subtract(encryptionBigInteger.ONE);
  var k = n1.getLowestSetBit();
  if(k <= 0) return false;
  var r = n1.shiftRight(k);
  t = (t+1)>>1;
  if(t > lowprimes.length) t = lowprimes.length;
  var a = nbi();
  for(var i = 0; i < t; ++i) {
    //Pick bases at random, instead of starting at 2
    a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
    var y = a.modPow(r,this);
    if(y.compareTo(encryptionBigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
      var j = 1;
      while(j++ < k && y.compareTo(n1) != 0) {
        y = y.modPowInt(2,this);
        if(y.compareTo(encryptionBigInteger.ONE) == 0) return false;
      }
      if(y.compareTo(n1) != 0) return false;
    }
  }
  return true;
}

// protected
encryptionBigInteger.prototype.chunkSize = bnpChunkSize;
encryptionBigInteger.prototype.toRadix = bnpToRadix;
encryptionBigInteger.prototype.fromRadix = bnpFromRadix;
encryptionBigInteger.prototype.fromNumber = bnpFromNumber;
encryptionBigInteger.prototype.bitwiseTo = bnpBitwiseTo;
encryptionBigInteger.prototype.changeBit = bnpChangeBit;
encryptionBigInteger.prototype.addTo = bnpAddTo;
encryptionBigInteger.prototype.dMultiply = bnpDMultiply;
encryptionBigInteger.prototype.dAddOffset = bnpDAddOffset;
encryptionBigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
encryptionBigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
encryptionBigInteger.prototype.modInt = bnpModInt;
encryptionBigInteger.prototype.millerRabin = bnpMillerRabin;

// public
encryptionBigInteger.prototype.clone = bnClone;
encryptionBigInteger.prototype.intValue = bnIntValue;
encryptionBigInteger.prototype.byteValue = bnByteValue;
encryptionBigInteger.prototype.shortValue = bnShortValue;
encryptionBigInteger.prototype.signum = bnSigNum;
encryptionBigInteger.prototype.toByteArray = bnToByteArray;
encryptionBigInteger.prototype.equals = bnEquals;
encryptionBigInteger.prototype.min = bnMin;
encryptionBigInteger.prototype.max = bnMax;
encryptionBigInteger.prototype.and = bnAnd;
encryptionBigInteger.prototype.or = bnOr;
encryptionBigInteger.prototype.xor = bnXor;
encryptionBigInteger.prototype.andNot = bnAndNot;
encryptionBigInteger.prototype.not = bnNot;
encryptionBigInteger.prototype.shiftLeft = bnShiftLeft;
encryptionBigInteger.prototype.shiftRight = bnShiftRight;
encryptionBigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
encryptionBigInteger.prototype.bitCount = bnBitCount;
encryptionBigInteger.prototype.testBit = bnTestBit;
encryptionBigInteger.prototype.setBit = bnSetBit;
encryptionBigInteger.prototype.clearBit = bnClearBit;
encryptionBigInteger.prototype.flipBit = bnFlipBit;
encryptionBigInteger.prototype.add = bnAdd;
encryptionBigInteger.prototype.subtract = bnSubtract;
encryptionBigInteger.prototype.multiply = bnMultiply;
encryptionBigInteger.prototype.divide = bnDivide;
encryptionBigInteger.prototype.remainder = bnRemainder;
encryptionBigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
encryptionBigInteger.prototype.modPow = bnModPow;
encryptionBigInteger.prototype.modInverse = bnModInverse;
encryptionBigInteger.prototype.pow = bnPow;
encryptionBigInteger.prototype.gcd = bnGCD;
encryptionBigInteger.prototype.isProbablePrime = bnIsProbablePrime;

// JSBN-specific extension
encryptionBigInteger.prototype.square = bnSquare;

// encryptionBigInteger interfaces not implemented in jsbn:

// encryptionBigInteger(int signum, byte[] magnitude)
// double doubleValue()
// float floatValue()
// int hashCode()
// long longValue()
// static encryptionBigInteger valueOf(long val)
// prng4.js - uses Arcfour as a PRNG

function Arcfour() {
  this.i = 0;
  this.j = 0;
  this.S = new Array();
}

// Initialize arcfour context from key, an array of ints, each from [0..255]
function ARC4init(key) {
  var i, j, t;
  for(i = 0; i < 256; ++i)
    this.S[i] = i;
  j = 0;
  for(i = 0; i < 256; ++i) {
    j = (j + this.S[i] + key[i % key.length]) & 255;
    t = this.S[i];
    this.S[i] = this.S[j];
    this.S[j] = t;
  }
  this.i = 0;
  this.j = 0;
}

function ARC4next() {
  var t;
  this.i = (this.i + 1) & 255;
  this.j = (this.j + this.S[this.i]) & 255;
  t = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t;
  return this.S[(t + this.S[this.i]) & 255];
}

Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;

// Plug in your RNG constructor here
function prng_newstate() {
  return new Arcfour();
}

// Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()
var rng_psize = 256;
// Random number generator - requires a PRNG backend, e.g. prng4.js

// For best results, put code like
// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
// in your main HTML document.

var rng_state;
var rng_pool;
var rng_pptr;

// Mix in a 32-bit integer into the pool
function rng_seed_int(x) {
  rng_pool[rng_pptr++] ^= x & 255;
  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
  if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
}

// Mix in the current time (w/milliseconds) into the pool
function rng_seed_time() {
  rng_seed_int(new Date().getTime());
}

// Initialize the pool with junk if needed.
if(rng_pool == null) {
  rng_pool = new Array();
  rng_pptr = 0;
  var t;
  if(navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
    // Extract entropy (256 bits) from NS4 RNG if available
    var z = window.crypto.random(32);
    for(t = 0; t < z.length; ++t)
      rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
  }  
  while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
    t = Math.floor(65536 * Math.random());
    rng_pool[rng_pptr++] = t >>> 8;
    rng_pool[rng_pptr++] = t & 255;
  }
  rng_pptr = 0;
  rng_seed_time();
  //rng_seed_int(window.screenX);
  //rng_seed_int(window.screenY);
}

function rng_get_byte() {
  if(rng_state == null) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);
    for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
      rng_pool[rng_pptr] = 0;
    rng_pptr = 0;
    //rng_pool = null;
  }
  // TODO: allow reseeding after first request
  return rng_state.next();
}

function rng_get_bytes(ba) {
  var i;
  for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
}

function SecureRandom() {}

SecureRandom.prototype.nextBytes = rng_get_bytes;
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  SHA-1 implementation in JavaScript (c) Chris Veness 2002-2009                                 */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

function sha1Hash(msg)
{
    // constants [�4.2.1]
    var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];


    // PREPROCESSING 
 
    msg += String.fromCharCode(0x80); // add trailing '1' bit (+ 0's padding) to string [�5.1.1]

    // convert string msg into 512-bit/16-integer blocks arrays of ints [�5.2.1]
    var l = msg.length/4 + 2;  // length (in 32-bit integers) of msg + �1� + appended length
    var N = Math.ceil(l/16);   // number of 16-integer-blocks required to hold 'l' ints
    var M = new Array(N);
    for (var i=0; i<N; i++) {
        M[i] = new Array(16);
        for (var j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
            M[i][j] = (msg.charCodeAt(i*64+j*4)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16) | 
                      (msg.charCodeAt(i*64+j*4+2)<<8) | (msg.charCodeAt(i*64+j*4+3));
        }
    }
    // add length (in bits) into final pair of 32-bit integers (big-endian) [5.1.1]
    // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
    // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
    M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32); M[N-1][14] = Math.floor(M[N-1][14])
    M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;

    // set initial hash value [�5.3.1]
    var H0 = 0x67452301;
    var H1 = 0xefcdab89;
    var H2 = 0x98badcfe;
    var H3 = 0x10325476;
    var H4 = 0xc3d2e1f0;

    // HASH COMPUTATION [�6.1.2]

    var W = new Array(80); var a, b, c, d, e;
    for (var i=0; i<N; i++) {

        // 1 - prepare message schedule 'W'
        for (var t=0;  t<16; t++) W[t] = M[i][t];
        for (var t=16; t<80; t++) W[t] = ROTL(W[t-3] ^ W[t-8] ^ W[t-14] ^ W[t-16], 1);

        // 2 - initialise five working variables a, b, c, d, e with previous hash value
        a = H0; b = H1; c = H2; d = H3; e = H4;

        // 3 - main loop
        for (var t=0; t<80; t++) {
            var s = Math.floor(t/20); // seq for blocks of 'f' functions and 'K' constants
            var T = (ROTL(a,5) + f(s,b,c,d) + e + K[s] + W[t]) & 0xffffffff;
            e = d;
            d = c;
            c = ROTL(b, 30);
            b = a;
            a = T;
        }

        // 4 - compute the new intermediate hash value
        H0 = (H0+a) & 0xffffffff;  // note 'addition modulo 2^32'
        H1 = (H1+b) & 0xffffffff; 
        H2 = (H2+c) & 0xffffffff; 
        H3 = (H3+d) & 0xffffffff; 
        H4 = (H4+e) & 0xffffffff;
    }

    return H0.toHexStr() + H1.toHexStr() + H2.toHexStr() + H3.toHexStr() + H4.toHexStr();
}

//
// function 'f' [�4.1.1]
//
function f(s, x, y, z) 
{
    switch (s) {
    case 0: return (x & y) ^ (~x & z);           // Ch()
    case 1: return x ^ y ^ z;                    // Parity()
    case 2: return (x & y) ^ (x & z) ^ (y & z);  // Maj()
    case 3: return x ^ y ^ z;                    // Parity()
    }
}

//
// rotate left (circular left shift) value x by n positions [�3.2.5]
//
function ROTL(x, n)
{
    return (x<<n) | (x>>>(32-n));
}

//
// extend Number class with a tailored hex-string method 
//   (note toString(16) is implementation-dependant, and 
//   in IE returns signed numbers when used on full words)
//
Number.prototype.toHexStr = function()
{
    var s="", v;
    for (var i=7; i>=0; i--) { v = (this>>>(i*4)) & 0xf; s += v.toString(16); }
    return s;
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
rng = new SecureRandom();

function pack(source)

{

   var temp = "";

   for (var i = 0; i < source.length; i+=2)

   {

      temp+= String.fromCharCode(parseInt(source.substring(i, i + 2), 16));

   }

   return temp;

}
function char2hex(source)

{

   var hex = "";

   for (var i = 0; i < source.length; i+=1)

   {

      temp = source[i].toString(16);

      switch (temp.length)

      {

         case 1:

            temp = "0" + temp;

            break;

         case 0:

           temp = "00";

      }

      hex+= temp;

   }

   return hex;

}



function xor(a, b)

{

   length = Math.min(a.length, b.length);

   temp = "";

   for (var i = 0; i < length; i++)

   {

      temp+= String.fromCharCode(a.charCodeAt(i) ^ b.charCodeAt(i));

   }

   length = Math.max(a.length, b.length) - length;

   for (var i = 0; i < length; i++)

   {

      temp+= "\x00";

   }

   return temp;

}



function mgf1(mgfSeed, maskLen)

{

   t = "";

   hLen = 20;

   count = Math.ceil(maskLen / hLen);

   for (var i = 0; i < count; i++)

   {

      c = String.fromCharCode((i >> 24) & 0xFF, (i >> 16) & 0xFF, (i >> 8) & 0xFF, i & 0xFF);

      t+= pack(sha1Hash(mgfSeed + c));

   }



   return t.substring(0, maskLen);

}
function rsa_oaep_encrypt(message, n, e) {

        // precomputed values
        var k = 128; // length of n in bytes
        var hLen = 20;
        var mLen = message.length;
        var lHash = '\xda\x39\xa3\xee\x5e\x6b\x4b\x0d\x32\x55\xbf\xef\x95\x60\x18\x90\xaf\xd8\x07\x09'; // pack(sha1Hash(""))
        var temp = k - mLen - 2 * hLen - 2;

        for (var i = 0; i < temp; i++) {
            lHash += '\x00';
        }

        var db = lHash + '\x01' + message;

        var seed = '';
        for (var i = 0; i < hLen + 4; i += 4) {
            temp = new Array(4);
            rng.nextBytes(temp);
            seed += String.fromCharCode(temp[0], temp[1], temp[2], temp[3]);
        }
        seed = seed.substring(4 - seed.length % 4);

        var dbMask = mgf1(seed, k - hLen - 1);
        var maskedDB = xor(db, dbMask);
        var seedMask = mgf1(maskedDB, hLen);
        var maskedSeed = xor(seed, seedMask);
        var em = "\x00" + maskedSeed + maskedDB;

        m = new Array();
        for (i = 0; i < em.length; i++) {
            m[i] = em.charCodeAt(i);
        }
        m = new encryptionBigInteger(m, 256);
        c = m.modPowInt(e, n); // doPublic
        c = c.toString(16);

        if (c.length & 1)
            c = "0" + c;

        return c;
    }


function RSA_public_encrypt(password, pub_key) {

        var keyInChar = new Uint8Array(pub_key);
        var rawPubKey = new Array(129); // 00xxx

        for (var i = 0; i < 129; i++)
            rawPubKey[i] = keyInChar[28 + i];

        var n = new encryptionBigInteger(rawPubKey);
        var e = new encryptionBigInteger('010001', 16);

        var hexRsa = rsa_oaep_encrypt(password + String.fromCharCode(0), n, e);
        return hexRsa;
    }
var SWCanvas = function(canvas) {
    this.arr = new ArrayBuffer(canvas.width*canvas.height*4);
    this.arr32 = new Uint32Array(this.arr);
    this.arr8 = new Uint8ClampedArray(this.arr);
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
};

SWCanvas.prototype.putImageData = function(imgData, x, y) {
    var srcArr = imgData.data.buffer;
    var w = imgData.width;
    var pos = imgData.height;
    var tmp;
    var canvasWidth = this.width;
    var tmpArr;
    while(pos--) {
        tmp = (y+pos)*canvasWidth+x;
        tmpArr = new Uint32Array(srcArr, w*pos*4, w);
        this.arr32.set(tmpArr, tmp);
    }
};

SWCanvas.prototype.getImageData = function(x, y, width, height) {
    var result = new Uint32Array(width*height);
    var arr = this.arr32;
    var pos=height;
    var tmp;
    var canvasWidth = this.width;
    while(pos--) {
        tmp = (y+pos)*canvasWidth+x;
        var line = arr.subarray(tmp,tmp+width);
        result.set(line, width*pos);
    }
    return new ImageData(new Uint8ClampedArray(result.buffer), width, height);
};

SWCanvas.prototype.fillRect = function(r, g, b, x, y, width, height) {
    var line = new Uint32Array(width);
    var color32 = 4278190080 | r  | g << 8 | b << 16;
    var canvasWidth = this.width;
    var w = width;
    while(w--) {
        line[w] = color32;
    }
    var tmp;
    while(height--) {
        tmp = (y+height)*canvasWidth+x;
        this.arr32.set(line, tmp);
    }
}

//copy from canvas to arr
SWCanvas.prototype.flushBack = function() {
    var arr8 = this.canvas.getContext('2d').getImageData(0, 0, this.width, this.height).data;
    this.arr8.set(arr8);
};

//copy from arr to canvas
SWCanvas.prototype.flush = function() {
    var imgData = new ImageData(this.arr8, this.width, this.height);
    this.canvas.getContext('2d').putImageData(imgData,0, 0);
};// Source: https://github.com/ded/bowser

/**
 * README!!!!
 * To solve the error "MISMATCHED ANONYMOUS DEFINE() MODULES ..." (http://requirejs.org/docs/errors.html)
 * It happens when requirejs is defined globally and this script is added
 * in the old fashioned way, i.e. with <script src="..."></script>
 * -> comment just the follow line if it happens!!
 *  else if (typeof define == 'function') define(definition)
 */

!function (name, definition) {
	if (typeof module != 'undefined' && module.exports) module.exports['browser'] = definition()
	/*
	 * problems including this library as classig <script src="..."> in a require
	 * environment, so commenting out the following line (as stated above) while
	 * we prepare a better fix involving requirejs shim.
	 * @kampde, 2014-10-02
	 */
	//else if (typeof define == 'function') define(definition)
	else this[name] = definition()
}('bowser', function () {
	/**
	 * See useragents.js for examples of navigator.userAgent
	 */

	var t = true

	function detect(ua) {

		function getFirstMatch(regex) {
			var match = ua.match(regex);
			return (match && match.length > 1 && match[1]) || '';
		}

		var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
			, likeAndroid = /like android/i.test(ua)
			, android = !likeAndroid && /android/i.test(ua)
			, versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
			, tablet = /tablet/i.test(ua)
			, mobile = !tablet && /[^-]mobi/i.test(ua)
			, result

		if (/opera|opr/i.test(ua)) {
			result = {
				name: 'Opera'
				, opera: t
				, version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
			}
		}
		else if (/windows phone/i.test(ua)) {
			result = {
				name: 'Windows Phone'
				, windowsphone: t
				, msie: t
				, version: getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
			}
		}
		else if (/msie|trident/i.test(ua)) {
			result = {
				name: 'Internet Explorer'
				, msie: t
				, version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
			}
		}
		else if (/chrome|crios|crmo/i.test(ua)) {
			result = {
				name: 'Chrome'
				, chrome: t
				, version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
			}
		}
		else if (iosdevice) {
			result = {
				name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
			}
			// WTF: version is not part of user agent in web apps
			if (versionIdentifier) {
				result.version = versionIdentifier
			}
		}
		else if (/sailfish/i.test(ua)) {
			result = {
				name: 'Sailfish'
				, sailfish: t
				, version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
			}
		}
		else if (/seamonkey\//i.test(ua)) {
			result = {
				name: 'SeaMonkey'
				, seamonkey: t
				, version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
			}
		}
		else if (/firefox|iceweasel/i.test(ua)) {
			result = {
				name: 'Firefox'
				, firefox: t
				, version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
			}
			if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
				result.firefoxos = t
			}
		}
		else if (/silk/i.test(ua)) {
			result =  {
				name: 'Amazon Silk'
				, silk: t
				, version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
			}
		}
		else if (android) {
			result = {
				name: 'Android'
				, version: versionIdentifier
			}
		}
		else if (/phantom/i.test(ua)) {
			result = {
				name: 'PhantomJS'
				, phantom: t
				, version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
			}
		}
		else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
			result = {
				name: 'BlackBerry'
				, blackberry: t
				, version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
			}
		}
		else if (/(web|hpw)os/i.test(ua)) {
			result = {
				name: 'WebOS'
				, webos: t
				, version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
			};
			/touchpad\//i.test(ua) && (result.touchpad = t)
		}
		else if (/bada/i.test(ua)) {
			result = {
				name: 'Bada'
				, bada: t
				, version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
			};
		}
		else if (/tizen/i.test(ua)) {
			result = {
				name: 'Tizen'
				, tizen: t
				, version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
			};
		}
		else if (/safari/i.test(ua)) {
			result = {
				name: 'Safari'
				, safari: t
				, version: versionIdentifier
			}
		}
		else result = {}

		// set webkit or gecko flag for browsers based on these engines
		if (/(apple)?webkit/i.test(ua)) {
			result.name = result.name || "Webkit"
			result.webkit = t
			if (!result.version && versionIdentifier) {
				result.version = versionIdentifier
			}
		} else if (!result.opera && /gecko\//i.test(ua)) {
			result.name = result.name || "Gecko"
			result.gecko = t
			result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
		}

		// set OS flags for platforms that have multiple browsers
		if (android || result.silk) {
			result.android = t
		} else if (iosdevice) {
			result[iosdevice] = t
			result.ios = t
		}

		// OS version extraction
		var osVersion = '';
		if (iosdevice) {
			osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
			osVersion = osVersion.replace(/[_\s]/g, '.');
		} else if (android) {
			osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
		} else if (result.windowsphone) {
			osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
		} else if (result.webos) {
			osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
		} else if (result.blackberry) {
			osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
		} else if (result.bada) {
			osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
		} else if (result.tizen) {
			osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
		}
		if (osVersion) {
			result.osversion = osVersion;
		}

		// device type extraction
		var osMajorVersion = osVersion.split('.')[0];
		if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
			result.tablet = t
		} else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
			result.mobile = t
		}

		// Graded Browser Support
		// http://developer.yahoo.com/yui/articles/gbs
		if ((result.msie && result.version >= 9) ||
			(result.chrome && result.version >= 20) ||
			(result.firefox && result.version >= 10.0) ||
			(result.safari && result.version >= 5) ||
			(result.opera && result.version >= 10.0) ||
			(result.ios && result.osversion && result.osversion.split(".")[0] >= 6)
			) {
			result.a = t;
		}
		else if ((result.msie && result.version < 9) ||
			(result.chrome && result.version < 20) ||
			(result.firefox && result.version < 10.0) ||
			(result.safari && result.version < 5) ||
			(result.opera && result.version < 10.0) ||
			(result.ios && result.osversion && result.osversion.split(".")[0] < 6)
			) {
			result.c = t
		} else result.x = t

		return result
	}

	var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')


	/*
	 * Set our detect method to the main bowser object so we can
	 * reuse it to test other user agents.
	 * This is needed to implement future tests.
	 */
	bowser._detect = detect;

	/**
	 * README: all_compiled uses window["bowser]
	 */
	if (!window['bowser']) {
		window['bowser'] = bowser;
	}
	
	return bowser
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

//If we are in NODE
if (typeof module !== "undefined" && module.exports) {

	jQuery = $ = {
		isArray: function (obj) {
			return Object.prototype.toString.apply(obj) === "[object Array]"
		},
		isPlainObject: function( obj ) {
			var key;

			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}

			return key === undefined || core_hasOwn.call( obj, key );
		},
		extend: function() {
			var options, name, src, copy, copyIsArray, clone,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length,
				deep = false;

			// Handle a deep copy situation
			if ( typeof target === "boolean" ) {
				deep = target;
				target = arguments[1] || {};
				// skip the boolean and the target
				i = 2;
			}

			// extend jQuery itself if only one argument is passed
			if ( length === i ) {
				target = this;
				--i;
			}

			for ( ; i < length; i++ ) {
				// Only deal with non-null/undefined values
				if ( (options = arguments[ i ]) != null ) {
					// Extend the base object
					for ( name in options ) {
						src = target[ name ];
						copy = options[ name ];

						// Prevent never-ending loop
						if ( target === copy ) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if ( deep && copy && ( this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)) ) ) {
							if ( copyIsArray ) {
								copyIsArray = false;
								clone = src && this.isArray(src) ? src : [];

							} else {
								clone = src && this.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[ name ] = this.extend( deep, clone, copy );

						// Don't bring in undefined values
						} else if ( copy !== undefined ) {
							target[ name ] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		}
	};
}

$.extend({
	spcExtend: function(obj) {
		var f = function(c) {
			if(typeof this['init'] !== 'undefined') {
				this.init(c || {});
			}
		};
		f.prototype.superInit = obj.init;
		var args = [];
		args.push(f.prototype);
		var length = arguments.length;
		for(var i =0; i<length;i++) {
			args.push(arguments[i]);
		}

		$.extend.apply($, args);
		return f;
	}
});

$.extend(String.prototype, {
	lpad: function(padString, length) {
		var str = this;
		while (str.length < length)
		   str = padString + str;
		return str;
	},

	rpad: function(padString, length) {
		var str = this;
		while (str.length < length)
		   str = str + padString;
		return str;
	}
});

wdi = {};

wdi.DomainObject = {};

wdi.RawMessage = $.spcExtend(wdi.DomainObject, {
	status: null,
	data: null,

	init: function(c) {
		this.status = c.status;
		this.data = c.data;
	}
});

wdi.RawSpiceMessage = $.spcExtend(wdi.DomainObject, {
	header: null,
	body: null,
	channel: null,

	set: function(header, body, channel) {
		this.header = header;
		this.body = body;
		this.channel = channel;
	}
});

wdi.SpiceMessage = $.spcExtend(wdi.DomainObject, {
	messageType: null,
	args: null,
	channel: null,

	init: function(c) {
		this.channel = c.channel;
		this.messageType = c.messageType;
		this.args = c.args;
	}
});

wdi.EventObject = $.spcExtend(wdi.DomainObject, {
	events: null,

	init: function() {
		this.eyeEvents = {};
	},

	getListenersLength: function(eventName) {
		if (this.eyeEvents[eventName] == undefined) {
			this.eyeEvents[eventName] = [];
		}

		return this.eyeEvents[eventName].length;
	},

	addListener: function(eventName, fn, scope) {
		scope = scope || this;

		if (this.eyeEvents[eventName] == undefined) {
			this.eyeEvents[eventName] = [];
		}

		this.eyeEvents[eventName].push({
			fn: fn,
			scope: scope
		});
	},

	removeEvent: function(eventName) {
		this.eyeEvents[eventName] = undefined;
	},

	clearEvents: function() {
		this.eyeEvents = {};
	},

	fire: function(eventName, params) {
		var listeners = this.eyeEvents[eventName];
		if(listeners) {
			var size = listeners.length;
			while(size--) {
				listeners[size].fn.call(listeners[size].scope, params);
			}
		}
	}
});

wdi.CHANNEL_STATUS = {
	disconnected:-1,
	idle:0,
	establishing:1,
	established:2
};

wdi.Debug = {
	debug: false,

	/* these logging functions accept multiple parameters, and will be passed
	 * directly to console.{log,info,warn,error}(), so we can have better
	 * messages.
	 *
	 * Call them with multiple params instead of concatenating:
	 * YES: wdi.Debug.log("something happened: ", whatever);
	 * NO : wdi.Debug.log("something happened: " + whatever);
	 */

	log: function(variable_list_of_args /* , ... */) {
		if (this.debug) {
			console.log.apply(console, Array.prototype.slice.call(arguments));
		}
	},

	warn: function(variable_list_of_args /* , ... */) {
		console.warn.apply(console, Array.prototype.slice.call(arguments));
	},

	info: function(variable_list_of_args /* , ... */) {
		if (this.debug) {
			console.info.apply(console, Array.prototype.slice.call(arguments));
		}
	},

	error: function(variable_list_of_args /* , ... */) {
		console.error.apply(console, Array.prototype.slice.call(arguments));
	}
};

wdi.Utils = {
    generateWebSocketUrl: function(protocol, host, port, destHost, destPort, type, destInfoToken) {
        /**
         * Generates websockify URL.
         * If destHost and destPort are available, they are used to form explicit URL with host and port.
         * If not, an URL with destInfoToken is generated, host and port are resolved by backend service.
         */
        if ( ! destHost || ! destPort ) {
            url = protocol + '://' + host + ':' + port + '/websockify/destInfoToken/' + destInfoToken + '/type/' + type;
        } else {
            url = protocol + '://' + host + ':' + port + '/websockify/host/' + destHost + '/port/' + destPort + '/type/' + type;
        }
        return url;
    }
};

wdi.postMessageW3CCompilant = typeof window !== "undefined" && window['bowser'] && !(window['bowser']['msie'] && window['bowser']['version'] >= 10);

wdi.Exception = $.spcExtend(wdi.DomainObject, {
	errorCode: null,
	message: null,

	init: function(c) {
		this.message = c.message || '';
		this.errorCode = c.errorCode || 0;
	}
});

try {
	new ImageData(1,1);
} catch(e) {
	if (typeof window !== 'undefined') {//Just in case it is nodejs
		window.ImageData = function(arr, width, height) {
			var canvas = document.createElement('canvas');
			var context = canvas.getContext('2d');
			var imgData = context.createImageData(width, height);
			imgData.data.set(arr);
			return imgData;
		}
	}
}

wdi.bppMask = [];
wdi.bppMask[1] = [128, 64, 32, 16, 8, 4, 2, 1];
wdi.bppMask[4] = [240, 15];
wdi.bppMask[8] = [255];

wdi.SeamlessIntegration = true;
wdi.Debug.debug = false;
wdi.exceptionHandling = true;
wdi.IntegrationBenchmarkEnabled = false; // MS Excel loading time benchmark
wdi.useWorkers = true;
wdi.logOperations = false;
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.Flipper = {

	flip: function(sourceImg) {
		return this._handMadeFlip(sourceImg);
	},

	_handMadeFlip: function(sourceImg) {
		var newCanvas =  document.createElement('canvas');
		newCanvas.width = sourceImg.width;
		newCanvas.height = sourceImg.height;
		var ctx = newCanvas.getContext('2d');
		ctx.save();
		// Multiply the y value by -1 to flip vertically
		ctx.scale(1, -1);
		// Start at (0, -height), which is now the bottom-left corner
		ctx.drawImage(sourceImg, 0, -sourceImg.height);
		ctx.restore();
		return newCanvas;
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.CollisionDetector = {
	thereIsBoxCollision: function(baseBox, queueBox) {
		if(baseBox.bottom < queueBox.top) return false;
		if(baseBox.top > queueBox.bottom) return false;
		if(baseBox.right < queueBox.left) return false;
		return baseBox.left < queueBox.right;
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.GlobalPool = {
    pools: {},
    retained: null,
    init: function() {
        this.retained = {};
        var self = this;
        this.pools['ViewQueue'] = new wdi.GenericObjectPool([function() {
            //factory
            return new wdi.ViewQueue();
        }, function(obj, index) {
            //reset
            obj.poolIndex = index; //update index at pool
            obj.setData([]); //reset the object
        }]);

        this.pools['RawSpiceMessage'] = new wdi.GenericObjectPool([function() {
            //factory
            return new wdi.RawSpiceMessage();
        }, function(obj, index) {
            //reset
            obj.poolIndex = index; //update index at pool
            obj.set(null, null, null); //reset the object
        }]);

		this.retained['Image'] = [];
        this.pools['Image'] = new wdi.GenericObjectPool([function() {
            //factory
            return new Image();
        }, function(obj, index) {
            //reset
            obj.poolIndex = index;
            obj.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';//Blank image 1x1 pixel (avoids console error GET null image)
            obj.onload = null;
			obj.keepAlive = false;
			self.retained['Image'][index] = obj;
        }]);


        this.retained['Canvas'] = [];
        this.pools['Canvas'] = new wdi.GenericObjectPool([function() {
            //factory
            return self.createCanvas();
        }, function(obj, index) {
            //reset
            obj.keepAlive = false;
            //obj.getContext('2d').clearRect(0, 0, obj.width, obj.height);
            obj.poolIndex = index;
            self.retained['Canvas'][index] = obj;
        }]);
    },

    createCanvas: function() {
    	return $('<canvas/>')[0];
    },

    create: function(objectType) {
        return this.pools[objectType].create();
    },

    discard: function(objectType, obj) {
        //check if its an autorelease pool
        if(this.retained.hasOwnProperty(objectType)) {
            delete this.retained[objectType][obj.poolIndex];
        }
        return this.pools[objectType].discard(obj.poolIndex);
    },

    cleanPool: function(objectType) {

        if(this.retained.hasOwnProperty(objectType)) {
             var pool = this.pools[objectType];

             for(var i in this.retained[objectType]) {
                 if(pool.discard(this.retained[objectType][i].poolIndex)) {
                     delete this.retained[objectType][i];
                 }
             }
        } else {
            wdi.Debug.error("GlobalPool: cleanPool called with invalid objectType: ",objectType);
        }
    }
}
/*
Generic Object Pooling from:
https://github.com/miohtama/objectpool.js/
MIT License

Copyright (C) 2013 Mikko Ohtamaa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Version: 65c7399c30a3f6f3593bb4bfca3d9cde65675b84 (git commit)
 */


wdi.GenericObjectPool = $.spcExtend(wdi.EventObject.prototype, {

    /** How fast we grow */
    expandFactor : 0.2,

    /** Minimum number of items we grow */
    expandMinUnits : 16,

    elems : null,

    /** List of discarded element indexes in our this.elems pool */
    freeElems : null,

    allocator: null,
    resetor: null,

    /**
     * Generic object pool for Javascript.
     *
     * @param {Function} allocator return new empty elements
     *
     * @param {Function} resetor resetor(obj, index) is called on all new elements when they are (re)allocated from pool.
     *                   This is mostly useful for making object to track its own pool index.
     */
    init : function(params) {
        var allocator = params[0];
        var resetor = params[1];
        // Start with one element
        this.allocator = allocator;
        this.resetor = resetor;
        // Set initial state of 1 object
        this.elems = [this.allocator()];
        this.freeElems = [0];
    },

    /**
     * @return {[type]} [description]
     */
    create : function() {

        if(!this.freeElems.length) {
            this.expand();
        }

        // See if we have any allocated elements to reuse
        var index = this.freeElems.pop();
        var elem = this.elems[index];
        this.resetor(elem, index);
        return elem;

    },

    /**
     * How many allocated units we have
     *
     * @type {Number}
     */
    length : function() {
        return this.elems.length - this.freeElems.length;
    },

    /**
     * Make pool bigger by the default growth parameters.
     *
     */
    expand : function() {

        var oldSize = this.elems.length;

        var growth = Math.ceil(this.elems.length * this.expandFactor);

        if(growth < this.expandMinUnits) {
            growth = this.expandMinUnits;
        }

        this.elems.length = this.elems.length + growth;

        for(var i=oldSize; i<this.elems.length; i++) {
            this.elems[i] = this.allocator();
            this.freeElems.push(i);
        }
    },

    /**
     * Deallocate object at index n
     *
     * @param  {Number} n
     * @return {Object} discarded object
     */
    discard : function(n) {

        // Cannot double deallocate
        if(this.freeElems.indexOf(n) >= 0) {
            throw "GeneircObjectPool: Double-free for element index: "+n;
        }

        if(this.elems[n].keepAlive) {
            return false;
        }

        this.freeElems.push(n);
        return true;
    },

    /**
     * Return object at pool index n
     */
    get : function(n) {
        return this.elems[n];
    }
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.AsyncConsumer = $.spcExtend(wdi.EventObject.prototype, {
	worker: null,
	task: null,
	packetWorkerIdentifier: null,
	imageProperties: null,

	init: function(c) {
		this.superInit();
		this.worker = c.AsyncWorker || new wdi.AsyncWorker({script:'application/WorkerProcess.js'});
		this.packetWorkerIdentifier = c.packetWorkerIdentifier || new wdi.PacketWorkerIdentifier();
	},

	consume: function(task) {
		this.task = task; //store current task
		var message = task.message;
		var imageProperties;

		//check if the packet is a type of packet that should be intercepted
		//this doesn't mean it contains a compressed image, it means that it COULD
		var intercept = this.packetWorkerIdentifier.shouldUseWorker(message);

		if(intercept == wdi.PacketWorkerIdentifier.processingType.DECOMPRESS) {
			//get image properties to check if there is really a compressed image
			imageProperties = this.packetWorkerIdentifier.getImageProperties(message);
			this.imageProperties = imageProperties;
			//compressed images are quic and lz
			if(imageProperties && (imageProperties.descriptor.type !=  wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_RGB &&
				imageProperties.descriptor.type != wdi.SpiceImageType.SPICE_IMAGE_TYPE_QUIC)) {

				intercept = 0;
			} else if(!imageProperties) {
				intercept = 0;
			}
		}

		//the packet is not going to be intercepted by the worker thread.
		//mark as procssed.
		if(intercept === 0) {
			this.taskDone();
			return;
		}

		var data;
		var descriptor;
		var opaque;
		var brush;
		var ret;
		var arr;
		var u8;

		if(intercept == wdi.PacketWorkerIdentifier.processingType.DECOMPRESS) {
			data = imageProperties.data;
			descriptor = imageProperties.descriptor;
			opaque = imageProperties.opaque;
			brush = imageProperties.brush;

			if(descriptor.type === wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_RGB) {
				var header = null;

				if(!brush) { //brushes are still js arrays
					var headerData = data.subarray(0,32).toJSArray();
					data = data.subarray(32); //skip the header
					header = wdi.LZSS.demarshall_rgb(headerData);
				} else {
					header = wdi.LZSS.demarshall_rgb(data);
				}



				arr = new ArrayBuffer(data.length+16);
				u8 = new Uint8Array(arr);

				u8[0] = 1; //LZ_RGB
				u8[1] = opaque;
				u8[2] = header.type;
				u8[3] = header.top_down; //RESERVED

				var number = header.width * header.height * 4;

				for (var i = 0;i < 4;i++) {//iterations because of javascript number size
					u8[4+i] = number & (255);//Get only the last byte
					number = number >> 8;//Remove the last byte
				}
				var view = new DataView(arr);
				view.setUint32(8, header.width);
				view.setUint32(12, header.height);
				u8.set(data, 16);

				//intercept
				//var encoded = encodeURIComponent(Base64.encode(u8.toJSArray()));
				//$.post('record.php','data='+encoded+'&name=lz_rgba_'+encoded.length+'_'+descriptor.width+'x'+descriptor.height);

				this.worker.run(arr, this._workerCompleted, {type: 'lz',top_down: header.top_down, opaque: opaque}, this);
			} else if(descriptor.type === wdi.SpiceImageType.SPICE_IMAGE_TYPE_QUIC) {
				var adata = new ArrayBuffer(data.length+4);
				var view = new Uint8Array(adata);
				view.set(data, 4);
				view[1] = opaque?1:0;
				view[0] = 0; //quic

				//intercept
				/*
				var jsarray = new Uint8Array(adata);
				var encoded = encodeURIComponent(Base64.encode(jsarray.toJSArray()));
				var dateat = Date.now() /1000;
				$.post('record.php','data='+encoded+'&name=quic_'+encoded.length+'_'+descriptor.width+'x'+descriptor.height);
				*/

				this.worker.run(adata, this._workerCompleted, {type: 'quic'}, this);
			}
		} else if(intercept == wdi.PacketWorkerIdentifier.processingType.PROCESSVIDEO) {
			data = this.packetWorkerIdentifier.getVideoData(message);
			arr = new ArrayBuffer(data.length+4);
			u8 = new Uint8Array(arr);

			u8[0] = 2; //2 means bytestouri
			u8[1] = 0;
			u8[2] = 0;
			u8[3] = 0; //reserved

			u8.set(data, 4);
			this.worker.run(arr, function(buf, params) {
				message.args.data = buf;
				this.taskDone();
			}, null, this);
		}
	},

	//executed from webworker when processing is finished
	_workerCompleted: function(buf, options) {
		if(!buf) {
			this.taskDone();
			return;
		}
		var descriptor = this.imageProperties.descriptor;
		var u8 = new Uint8ClampedArray(buf);
		var source_img = new ImageData(u8, descriptor.width, descriptor.height);

		//it is strange, but we can't use pooling on the getimagefromdata
		//the second argument (optional) tell getimagefromdata to avoid pooling
		var myImage = source_img;


		if(options.type === 'lz') {
			var top_down = options.top_down;
			var opaque = options.opaque;
			if(!top_down && !opaque) {
				myImage = wdi.graphics.getImageFromData(source_img, true);
				myImage = wdi.RasterOperation.flip(myImage);
			}
		}

		descriptor.originalType = descriptor.type;
		descriptor.type = wdi.SpiceImageType.SPICE_IMAGE_TYPE_CANVAS;

		//replace data
		if(this.task.message.messageType === wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_FILL) {
			this.task.message.args.brush.pattern.imageData = myImage;
			this.task.message.args.brush.pattern.image.type = wdi.SpiceImageType.SPICE_IMAGE_TYPE_CANVAS;
		} else {
			this.task.message.args.image.data = myImage;
		}
		this.taskDone();
	},
	
	taskDone: function() {
		this.task.state = 1;
		this.fire('done', this);
	},

	dispose: function () {
		this.worker.dispose();
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.AsyncWorker = $.spcExtend(wdi.EventObject.prototype, {
	worker: null,
	fn: null,
	scope: null,
    params: null,
    
	init: function(c) {
		this.superInit();
		this.worker = new Worker(c.script);
		var self = this;
		this.worker.addEventListener("message", function (oEvent) {
			self.fn.call(self.scope, oEvent.data, self.params);
		});
	},

	run: function(data, fn, params, scope) {
		this.fn = fn;
		this.scope = scope;
        this.params = params;

		if (wdi.postMessageW3CCompilant) {
			this.worker.postMessage(data, [data]);
		} else {
			this.worker.postMessage(data);
		}
	},

	dispose: function () {
		this.worker.terminate();
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

/*
 * Check if a packet should be intercepted in packetpreprocess to be executed
 * in parallel.
 */

wdi.PacketWorkerIdentifier = $.spcExtend(wdi.EventObject.prototype, {
    init: function(c) {
        //default empty constructor
    }, 
    
    shouldUseWorker: function(message) {
		switch (message.messageType) {
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_COPY:
				return wdi.PacketWorkerIdentifier.processingType.DECOMPRESS;
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_FILL:
				var brush = message.args.brush;
				if(brush.type === wdi.SpiceBrushType.SPICE_BRUSH_TYPE_PATTERN) {
					return wdi.PacketWorkerIdentifier.processingType.DECOMPRESS;
				}
				break;
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND:
				return wdi.PacketWorkerIdentifier.processingType.DECOMPRESS;
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLEND:
				return wdi.PacketWorkerIdentifier.processingType.DECOMPRESS;
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TRANSPARENT:
				return wdi.PacketWorkerIdentifier.processingType.DECOMPRESS;
			//case wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DATA:
			//	return wdi.PacketWorkerIdentifier.processingType.PROCESSVIDEO;
		}

        return 0;
    },
    
    getImageProperties: function(message) {
        var props = {
            data: null,
            descriptor: null,
            opaque: true,
            brush: null
        };
        
		//coupling here, to be cleaned when doing real code
		switch (message.messageType) {
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_COPY:
				props.descriptor = message.args.image.imageDescriptor;
				props.data = message.args.image.data;
				break;
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_FILL:
				props.brush = message.args.brush;
				if(props.brush.type === wdi.SpiceBrushType.SPICE_BRUSH_TYPE_PATTERN) {
					props.descriptor = props.brush.pattern.image;
					props.data = props.brush.pattern.imageData;
				} else {
                    return false;
                }
				break;
			case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND:
            case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLEND:
            case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TRANSPARENT:
				props.data = message.args.image.data;
				props.descriptor = message.args.image.imageDescriptor;
				props.opaque = false;
				break;
            default:
                wdi.Debug.log("PacketWorkerIdentifier: Unknown Packet in getImageProperties");
                return false;
		}
        
        return props;
    },

    getVideoData: function(message) {
        if(message.messageType !== wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DATA) {
            wdi.Debug.log('PacketWOrkerIdentifier: Invalid packet in getVideoData');
            return false;
        }

        return message.args.data;
    }
});

wdi.PacketWorkerIdentifier.processingType = {};
wdi.PacketWorkerIdentifier.processingType.DECOMPRESS = 1;
wdi.PacketWorkerIdentifier.processingType.PROCESSVIDEO = 2;
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.SpiceObject = {

    properties: {},

    //Methods to demarshall
    bytesToString: function (bytes, nbytes) {
        var result = '';
        var numBytes = nbytes || bytes.length;

        for (var i = 0; i < numBytes; i++) {
            result += String.fromCharCode(bytes.shift());
        }

        return result;
    },

    bytesToURI: function (data) {
        var blob = new Blob([data], {type: "image/jpeg"});
        return URL.createObjectURL(blob);
    },

    bytesToStringBE: function (bytes, nbytes) {
        var result = '';
        var numBytes = nbytes || bytes.length;

        for (var i = numBytes; i >= 0; i--) {
            result += String.fromCharCode(bytes[i]);
        }

        return result;
    },

    bytesToInt8: function (bytes) {
        return bytes.shift();
    },

    bytesToInt8NoAllocate: function (bytes) {
        var data = bytes.getByte(0);
        bytes.eatBytes(1);
        return data;
    },

    bytesToInt16: function (bytes) {
        var low = bytes.shift();
        var high = bytes.shift();

        return high * Math.pow(16, 2) + low;
    },

    bytesToInt16BE: function (bytes) {
        var high = bytes.shift();
        var low = bytes.shift();

        return high * Math.pow(16, 2) + low;
    },

    bytesToInt32: function (bytes) {
        var low = wdi.SpiceObject.bytesToInt16(bytes);
        var high = wdi.SpiceObject.bytesToInt16(bytes);

        return high * Math.pow(16, 4) + low;
    },

    bytesToInt16NoAllocate: function (bytes) {
        var low = bytes.getByte(0);
        var high = bytes.getByte(1);
        bytes.eatBytes(2);
        return high * Math.pow(16, 2) + low;
    },

    bytesToInt32NoAllocate: function (bytes) {
        var low = wdi.SpiceObject.bytesToInt16NoAllocate(bytes);
        var high = wdi.SpiceObject.bytesToInt16NoAllocate(bytes);
        return high * Math.pow(16, 4) + low;
    },

    bytesToInt32BE: function (bytes) {
        var high = wdi.SpiceObject.bytesToInt16BE(bytes);
        var low = wdi.SpiceObject.bytesToInt16BE(bytes);

        return high * Math.pow(16, 4) + low;
    },

    bytesToInt64: function (bytes) {
        var low = wdi.SpiceObject.bytesToInt32(bytes).toString(2).lpad('0', 32);
        var high = wdi.SpiceObject.bytesToInt32(bytes).toString(2).lpad('0', 32);

        return BigInteger.parse(high + low, 2);
    },

    bytesToInt64NoAllocate: function (bytes) {
        var low = wdi.SpiceObject.bytesToInt32NoAllocate(bytes).toString(2).lpad('0', 32);
        var high = wdi.SpiceObject.bytesToInt32NoAllocate(bytes).toString(2).lpad('0', 32);

        return BigInteger.parse(high + low, 2);
    },

    bytesToInt64BE: function (bytes) {
        var high = wdi.SpiceObject.bytesToInt32BE(bytes).toString(2).lpad('0', 32);
        var low = wdi.SpiceObject.bytesToInt32BE(bytes).toString(2).lpad('0', 32);

        return BigInteger.parse(high + low, 2);
    },

    bytesToArray: function (arr, blockSize, nblocks, endian) {
        var length = arr.length;
        var numBlocks = nblocks || length;
        var endianness = endian || 'LE';
        var numbers = [];
        var f = null;

        switch (blockSize) {
            case 8:
                f = wdi.SpiceObject.bytesToInt8;
                break;
            case 16:
                endianness == 'LE' ? f = wdi.SpiceObject.bytesToInt16 : f = wdi.SpiceObject.bytesToInt16BE;
                break;
            case 32:
                endianness == 'LE' ? f = wdi.SpiceObject.bytesToInt32 : f = wdi.SpiceObject.bytesToInt32BE;
                break;
            case 64:
                endianness == 'LE' ? f = wdi.SpiceObject.bytesToInt64 : f = wdi.SpiceObject.bytesToInt64BE;
                break;
            default:
                throw new Exception("Not supported number of bits", 1);
                return false;
        }

        for (var i = 0; i < numBlocks; i++) {
            numbers = numbers.concat(f(arr));
        }

        return numbers;
    },

    int32ToDouble: function (number) {
        var sInt = wdi.SpiceObject.unsignedToSigned(number >> 4);
        var decimals = (number & 0x0f) / 0x0f;
        var result = decimals + sInt;

        return result;
    },

    unsignedToSigned: function (number, stride) {
        //TODO: ugly?
        var maxBit = Math.pow(2, stride) - 1;
        if (number & Math.pow(2, stride - 1)) {
            number = -1 * (maxBit - number);
        }
        return number;
    },

    //Methods to marshall
    arrayToBytes: function (arr, blockSize, nblocks) {
        var length = arr.length;
        var numBlocks = nblocks || length;
        var f = null;
        var rawData = [];

        switch (blockSize) {
            case 8:
                f = wdi.SpiceObject.numberTo8;
                break;
            case 16:
                f = wdi.SpiceObject.numberTo16;
                break;
            case 32:
                f = wdi.SpiceObject.numberTo32;
                break;
            case 64:
                f = wdi.SpiceObject.numberTo64;
                break;
            default:
                throw new Exception("Not supported number of bits", 1);
                return false;
        }

        for (var i = 0; i < numBlocks; i++) {
            if (i <= length) {
                rawData = rawData.concat(f(arr[i]));
            } else {
                rawData.push(0x00);
            }
        }

        return rawData;
    },

    stringToBytes: function (string) {
        var length = string.length;
        var rawData = [];

        for (var i = 0; i < length; i++) {
            rawData.push(string.charCodeAt(i));
        }

        return rawData;
    },

    stringHexToBytes: function (string) {
        var length = string.length;
        var rawData = [];

        for (var i = 0; i < length; i += 2) {
            rawData.push(parseInt(string[i] + string[i + 1], 16));
        }

        return rawData;
    },

    stringBinaryToBytes: function (string, blocksize) {
        string = string.lpad('0', blocksize);
        var rawData = [];

        for (var i = blocksize; i >= 8; i -= 8) {
            rawData = rawData.concat(parseInt(string.substr(i - 8, 8), 2));
        }

        return rawData;
    },

    stringToBytesPadding: function (string, size) {
        var rawData = [];
        var strsize = string.length;

        for (var i = 0; i < size; i++) {
            if (size > strsize - 1) {
                rawData.push(0x00);
            } else {
                rawData.push(string.charCodeAt(i));
            }
        }

        return rawData;
    },

    numberTo64: function (biginteger) {
        var tmp = this.numberTo32((biginteger & 0xffffffffffffffff) >> 32);
        var tmp2 = this.numberTo32(biginteger & 0x00000000ffffffff);
        var rawData = tmp2.concat(tmp);
        return rawData;
    },

    numberTo32: function (number) {
        var rawData = new Array(3);

        for (var i = 0; i < 4; i++) {//iterations because of javascript number size
            rawData[i] = number & (255);//Get only the last byte
            number = number >> 8;//Remove the last byte
        }

        return rawData;
    },

    numberTo16: function (number) {
        var rawData = new Array(1);

        for (var i = 0; i < 2; i++) {
            rawData[i] = number & (255);
            number = number >> 8;
        }

        return rawData;
    },

    numberTo8: function (number) {
        return [number & (255)];
    },

    getMessageProperties: function () {
        return this.properties;
    },

    getMessageProperty: function (propName, defaultValue) {
        if (this.properties.hasOwnProperty(propName)) {
            return this.properties[propName];
        } else {
            return defaultValue;
        }
    }
};

wdi.SpiceDataHeader = $.spcExtend(wdi.SpiceObject, {
    objectSize:6,

    init: function(c) {
        c?this.setContent(c):false;
    },

    setContent: function(c) {
        //this.serial = c.serial;
        this.type = c.type;
        this.size = c.size;
        //this.sub_list = c.sub_list;
    },

    marshall: function() {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            //this.numberTo64(this.serial),
            this.numberTo16(this.type),
            this.numberTo32(this.size)
            //sthis.numberTo32(this.sub_list)W
        );
        return this.rawData;
    },

    demarshall: function(queue) {
        //this.serial = this.bytesToInt64(queue.shift(8));
        this.type = this.bytesToInt16NoAllocate(queue);
        this.size = this.bytesToInt32NoAllocate(queue);
        //this.sub_list = this.bytesToInt32(queue.shift(4));

        return this;
    }
});

wdi.SpiceLinkAuthMechanism = $.spcExtend(wdi.SpiceObject, {
    objectSize:4,

    init: function(c) {
        c?this.setContent(c):false;
    },

    setContent: function(c) {
        this.auth_mechanism = c.auth_mechanism;
    },

    marshall: function() {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.auth_mechanism)
        );
        return this.rawData;
    },

    demarshall: function(queue) {
        this.expectedSize = arguments[1] || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode:3});
        this.auth_mechanism = this.bytesToInt32NoAllocate(queue);
        'customDemarshall' in this?this.customDemarshall(queue):false;

        return this;
    }
});

wdi.SpiceLinkReply = $.spcExtend(wdi.SpiceObject, {
    objectSize:178,

    init: function(c) {
        c?this.setContent(c):false;
    },

    setContent: function(c) {
        this.error = c.error;
        this.pub_key = c.pub_key;
        this.num_common_caps = c.num_common_caps;
        this.num_channel_caps = c.num_channel_caps;
        this.caps_offset = c.caps_offset;
    },

    marshall: function() {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.error),
            this.arrayToBytes(this.pub_key, 8),
            this.numberTo32(this.num_common_caps),
            this.numberTo32(this.num_channel_caps),
            this.numberTo32(this.caps_offset)
        );
        return this.rawData;
    },

    demarshall: function(queue) {
        this.expectedSize = arguments[1] || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode:3});
        this.error = this.bytesToInt32NoAllocate(queue);
        this.pub_key = this.bytesToArray(queue.shift(this.expectedSize), 8);
        this.num_common_caps = this.bytesToInt32NoAllocate(queue);
        this.num_channel_caps = this.bytesToInt32NoAllocate(queue);
        this.caps_offset = this.bytesToInt32NoAllocate(queue);
        'customDemarshall' in this?this.customDemarshall(queue):false;

        return this;
    }
});

wdi.SpiceLinkEncryptedTicket = $.spcExtend(wdi.SpiceObject, {
    objectSize:128,

    init: function(c) {
        c?this.setContent(c):false;
    },

    setContent: function(c) {
        this.encrypted_data = c.encrypted_data;
    },

    marshall: function() {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.stringToBytes(this.encrypted_data, 8)
        );
        return this.rawData;
    },

    demarshall: function(queue) {
        this.expectedSize = arguments[1] || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode:3});
        this.encrypted_data = this.bytesToArray(queue.shift(this.expectedSize), 8);
        'customDemarshall' in this?this.customDemarshall(queue):false;

        return this;
    }
});

wdi.SpiceLinkMess = $.spcExtend(wdi.SpiceObject, {
    objectSize:18,

    init: function(c) {
        c?this.setContent(c):false;
    },

    setContent: function(c) {
        this.connection_id = c.connection_id;
        this.channel_type = c.channel_type;
        this.channel_id = c.channel_id;
        this.num_common_caps = c.num_common_caps;
        this.num_channel_caps = c.num_channel_caps;
        this.caps_offset = c.caps_offset;
        this.common_caps = c.common_caps;
        this.channel_caps = c.channel_caps;
    },

    marshall: function() {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.connection_id),
            this.numberTo8(this.channel_type),
            this.numberTo8(this.channel_id),
            this.numberTo32(this.num_common_caps),
            this.numberTo32(this.num_channel_caps),
            this.numberTo32(this.caps_offset)
        );
        if(this.num_common_caps > 0) {
            this.rawData = this.rawData.concat(this.numberTo32(this.common_caps));
        }
        if(this.num_channel_caps > 0) {
            this.rawData = this.rawData.concat(this.numberTo32(this.channel_caps));
        }
        return this.rawData;
    },

    demarshall: function(queue) {
        this.expectedSize = arguments[1] || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode:3});
        this.connection_id = this.bytesToInt32NoAllocate(queue);
        this.channel_type = this.bytesToInt8NoAllocate(queue);
        this.channel_id = this.bytesToInt8NoAllocate(queue);
        this.num_common_caps = this.bytesToInt32NoAllocate(queue);
        this.num_channel_caps = this.bytesToInt32NoAllocate(queue);
        this.caps_offset = this.bytesToInt32NoAllocate(queue);
        'customDemarshall' in this?this.customDemarshall(queue):false;

        return this;
    }
});

wdi.SpiceLinkHeader = $.spcExtend(wdi.SpiceObject, {
    objectSize:16,

    init: function(c) {
        c?this.setContent(c):false;
    },

    setContent: function(c) {
        this.magic = c.magic;
        this.major_version = c.major_version;
        this.minor_version = c.minor_version;
        this.size = c.size;
    },

    marshall: function() {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.magic),
            this.numberTo32(this.major_version),
            this.numberTo32(this.minor_version),
            this.numberTo32(this.size)
        );
        return this.rawData;
    },

    demarshall: function(queue) {
        this.expectedSize = arguments[1] || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode:3});
        this.magic = this.bytesToInt32NoAllocate(queue);
        this.major_version = this.bytesToInt32NoAllocate(queue);
        this.minor_version = this.bytesToInt32NoAllocate(queue);
        this.size = this.bytesToInt32NoAllocate(queue);
        'customDemarshall' in this?this.customDemarshall(queue):false;

        return this;
    }
});

wdi.RedMigrateData = $.spcExtend(wdi.SpiceObject, {
    objectSize: 0,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.vector = c.vector;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.arrayToBytes(this.vector, 8)
        );

        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.vector = this.bytesToArray(queue.shift(this.expectedSize), 8);
        

        return this;
    }
});

wdi.RedMainInit = $.spcExtend(wdi.SpiceObject, {
    objectSize: 32,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.session_id = c.session_id;
        this.display_channels_hint = c.display_channels_hint;
        this.supported_mouse_modes = c.supported_mouse_modes;
        this.current_mouse_mode = c.current_mouse_mode;
        this.agent_connected = c.agent_connected;
        this.agent_tokens = c.agent_tokens;
        this.multi_media_time = c.multi_media_time;
        this.ram_hint = c.ram_hint;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.session_id),
            this.numberTo32(this.display_channels_hint),
            this.numberTo32(this.supported_mouse_modes),
            this.numberTo32(this.current_mouse_mode),
            this.numberTo32(this.agent_connected),
            this.numberTo32(this.agent_tokens),
            this.numberTo32(this.multi_media_time),
            this.numberTo32(this.ram_hint)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.session_id = this.bytesToInt32NoAllocate(queue);
        this.display_channels_hint = this.bytesToInt32NoAllocate(queue);
        this.supported_mouse_modes = this.bytesToInt32NoAllocate(queue);
        this.current_mouse_mode = this.bytesToInt32NoAllocate(queue);
        this.agent_connected = this.bytesToInt32NoAllocate(queue);
        this.agent_tokens = this.bytesToInt32NoAllocate(queue);
        this.multi_media_time = this.bytesToInt32NoAllocate(queue);
        this.ram_hint = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceMsgMainAgentConnected = $.spcExtend(wdi.SpiceObject, {
    objectSize: 0,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        

        return this;
    }
});

wdi.SpiceChannelsList = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.num_of_channels = c.num_of_channels;
        this.channels = c.channels;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.num_of_channels),
            this.arrayToBytes(this.channels, 16)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.num_of_channels = this.bytesToInt32NoAllocate(queue);
        this.channels = this.bytesToArray(queue.shift(this.expectedSize), 16);
        

        return this;
    }
});

wdi.RedSetAck = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.generation = c.generation;
        this.window = c.window;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.generation),
            this.numberTo32(this.window)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.generation = this.bytesToInt32NoAllocate(queue);
        this.window = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

//Exactly the same as RedPong
wdi.RedPing = $.spcExtend(wdi.SpiceObject, {
    objectSize: 12,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.id = c.id;
        this.time = c.time;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.id),
            this.numberTo64(this.time)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.id = this.bytesToInt32NoAllocate(queue);
        this.time = this.bytesToInt64NoAllocate(queue);

        if (this.expectedSize > 12) {
            queue.shift(this.expectedSize - 12);
        }


        return this;
    }
});

wdi.RedMigrate = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.flags = c.flags;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.flags)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.flags = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.RedWaitForChannel = $.spcExtend(wdi.SpiceObject, {
    objectSize: 10,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.type = c.type;
        this.id = c.id;
        this.serial = c.serial;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo8(this.type),
            this.numberTo8(this.id),
            this.numberTo64(this.serial)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.type = this.bytesToInt8NoAllocate(queue);
        this.id = this.bytesToInt8NoAllocate(queue);
        this.serial = this.bytesToInt64NoAllocate(queue);
        

        return this;
    }
});

wdi.RedWaitForChannels = $.spcExtend(wdi.SpiceObject, {
    objectSize: 1,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.wait_count = c.wait_count;
        this.wait_list = c.wait_list;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo8(this.wait_count),
            this.arrayToBytes(this.wait_list, 8)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.wait_count = this.bytesToInt8NoAllocate(queue);
        this.wait_list = this.bytesToArray(queue.shift(this.expectedSize), 8);
        

        return this;
    }
});

wdi.RedDisconnect = $.spcExtend(wdi.SpiceObject, {
    objectSize: 12,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.time_stamp = c.time_stamp;
        this.reason = c.reason;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo64(this.time_stamp),
            this.numberTo32(this.reason)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.time_stamp = this.bytesToInt64NoAllocate(queue);
        this.reason = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.RedMigrationBegin = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.port = c.port;
        this.sport = c.sport;
        this.host_name = c.host_name;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo16(this.port),
            this.numberTo16(this.sport),
            this.arrayToBytes(this.host_name, 8)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.port = this.bytesToInt16NoAllocate(queue);
        this.sport = this.bytesToInt16NoAllocate(queue);
        this.host_name = this.bytesToArray(queue.shift(this.expectedSize), 8);
        

        return this;
    }
});

wdi.RedNotify = $.spcExtend(wdi.SpiceObject, {
    objectSize: 25,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.time_stamp = c.time_stamp;
        this.severity = c.severity;
        this.visibility = c.visibility;
        this.what = c.what;
        this.message_len = c.message_len;
        this.message = c.message;
        this.zero = c.zero;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo64(this.time_stamp),
            this.numberTo32(this.severity),
            this.numberTo32(this.visibility),
            this.numberTo32(this.what),
            this.numberTo32(this.message_len),
            this.arrayToBytes(this.message, 8),
            this.numberTo8(this.zero)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.time_stamp = this.bytesToInt64NoAllocate(queue);
        this.severity = this.bytesToInt32NoAllocate(queue);
        this.visibility = this.bytesToInt32NoAllocate(queue);
        this.what = this.bytesToInt32NoAllocate(queue);
        this.message_len = this.bytesToInt32NoAllocate(queue);
        this.message = this.bytesToString(queue.shift(this.message_len));
        this.zero = this.bytesToInt8NoAllocate(queue);
        

        return this;
    }
});

wdi.RedMode = $.spcExtend(wdi.SpiceObject, {
    objectSize: 12,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.width = c.width;
        this.height = c.height;
        this.depth = c.depth;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.width),
            this.numberTo32(this.height),
            this.numberTo32(this.depth)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.width = this.bytesToInt32NoAllocate(queue);
        this.height = this.bytesToInt32NoAllocate(queue);
        this.depth = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceCDisplayInit = $.spcExtend(wdi.SpiceObject, {
    objectSize: 14,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.pixmap_cache_id = c.pixmap_cache_id;
        this.pixmap_cache_size = c.pixmap_cache_size;
        this.glz_dictionary_id = c.glz_dictionary_id;
        this.glz_dictionary_window_size = c.glz_dictionary_window_size;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo8(this.pixmap_cache_id),
            this.numberTo32(this.pixmap_cache_size),
            this.numberTo32(0),
            this.numberTo8(this.glz_dictionary_id),
            this.numberTo32(this.glz_dictionary_window_size)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.pixmap_cache_id = this.bytesToInt8NoAllocate(queue);
        this.pixmap_cache_size = this.bytesToInt64NoAllocate(queue);
        this.glz_dictionary_id = this.bytesToInt8NoAllocate(queue);
        this.glz_dictionary_window_size = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceSurfaceDestroy = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.surface_id = c.surface_id;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.surface_id)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.surface_id = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceSurface = $.spcExtend(wdi.SpiceObject, {
    objectSize: 20,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.surface_id = c.surface_id;
        this.width = c.width;
        this.height = c.height;
        this.format = c.format;
        this.flags = c.flags;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.surface_id),
            this.numberTo32(this.width),
            this.numberTo32(this.height),
            this.numberTo32(this.format),
            this.numberTo32(this.flags)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.surface_id = this.bytesToInt32NoAllocate(queue);
        this.width = this.bytesToInt32NoAllocate(queue);
        this.height = this.bytesToInt32NoAllocate(queue);
        this.format = this.bytesToInt32NoAllocate(queue);
        this.flags = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpicePath = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,


    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        var num = this.num_segments = this.bytesToInt32NoAllocate(queue);
        this.segments = [];

        for (var i= 0; i < num;i++) {
            this.segments[i] = new wdi.SpicePathSeg().demarshall(queue);
        }

        return this;
    }
});

wdi.SpicePathSeg = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,


    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.flags = this.bytesToInt8NoAllocate(queue);
        var count = this.count = this.bytesToInt32NoAllocate(queue);
        this.points = [];
        for(var i=0;i<count;i++) {
            this.points[i] = new wdi.SpicePointFix().demarshall(queue);
        }

        return this;
    }
});

wdi.SpicePoint = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.x = c.x;
        this.y = c.y;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.x),
            this.numberTo32(this.y)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.x = this.unsignedToSigned(this.bytesToInt32(queue.shift(4)), 32);
        this.y = this.unsignedToSigned(this.bytesToInt32(queue.shift(4)), 32);
        

        return this;
    }
});

wdi.SpicePoint16 = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.x = c.x;
        this.y = c.y;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo16(this.x),
            this.numberTo16(this.y)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.x = this.bytesToInt16NoAllocate(queue);
        this.y = this.bytesToInt16NoAllocate(queue);
        

        return this;
    }
});

wdi.SpicePointFix = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.x = c.hasOwnProperty('x') ? c.x : 0;
        this.y = c.hasOwnProperty('y') ? c.y : 0;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.x),
            this.numberTo32(this.y)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.x = this.int32ToDouble(this.bytesToInt32(queue.shift(4)), 32);
        this.y = this.int32ToDouble(this.bytesToInt32(queue.shift(4)), 32);
        

        return this;
    }
});

wdi.SpiceRect = $.spcExtend(wdi.SpiceObject, {
    objectSize: 16,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.top = c.top;
        this.left = c.left;
        this.bottom = c.bottom;
        this.right = c.right;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.top),
            this.numberTo32(this.left),
            this.numberTo32(this.bottom),
            this.numberTo32(this.right)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        //if (queue.getLength() < this.objectSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.top = this.bytesToInt32NoAllocate(queue);
        this.left = this.bytesToInt32NoAllocate(queue);
        this.bottom = this.bytesToInt32NoAllocate(queue);
        this.right = this.bytesToInt32NoAllocate(queue);

        return this;
    }
});

wdi.SpiceClipRects = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.num_rects = c.num_rects;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.num_rects)
        );
        for (var i = 0; i < this.num_rects; i++) {
            this.rawData = this.rawData.concat(this.rects[i].marshall());
        }

        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.num_rects = this.bytesToInt32NoAllocate(queue);

        if (this.num_rects > 0) {
            this.rects = [];
            for (var i = 0; i < this.num_rects; i++) {
                this.rects[i] = new wdi.SpiceRect().demarshall(queue);
            }
        }

        return this;
    }
});


wdi.SpiceClip = $.spcExtend(wdi.SpiceObject, {
    objectSize: 1,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.type = c.type;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo8(this.type)
        );
        if (this.type == wdi.SpiceClipType.SPICE_CLIP_TYPE_RECTS) {
            this.rawData = this.rawData.concat(
                this.rects.marshall()
            );
        }
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.type = this.bytesToInt8NoAllocate(queue);

        if (this.type == wdi.SpiceClipType.SPICE_CLIP_TYPE_RECTS) {
            this.rects = new wdi.SpiceClipRects().demarshall(queue);
        }
        return this;
    }
});

wdi.SpiceDisplayBase = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.surface_id = c.surface_id;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.surface_id),
            this.box.marshall(),
            this.clip.marshall()
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.surface_id = this.bytesToInt32NoAllocate(queue);
        this.box = new wdi.SpiceRect().demarshall(queue);
        this.clip = new wdi.SpiceClip().demarshall(queue);
        return this;
    }
});

wdi.SpiceQMask = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.numberTo8(this.flags),
            this.pos.marshall(),
            this.numberTo32(this.offset)
        );
        if (this.offset) {
            rawData = rawData.concat(
                this.image.marshall()
            );
        }
        return rawData;
    },

    demarshall: function (queue, expSize) {
        //in the timeline, demarshalling spiceqmask takes lot of time
        //and mask is not used anywhere in the code, its still unsupported
        //so we leave it commented until we realize whats a mask and why it takes sooooo long
        //to demarshall
        //to prevent the packet to not be contiguous, remove the bytes and leave
        queue.eatBytes(13); //the normal qmask size
        /*
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.flags = this.bytesToInt8NoAllocate(queue);
        this.pos = new wdi.SpicePoint().demarshall(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        if (this.offset) {
            wdi.Debug.log('THERE IS A MASK IMAGE');
            var qdata = new wdi.ViewQueue();
            qdata.setData(queue.getDataOffset(this.offset));
            this.image = new wdi.SpiceImage().demarshall(qdata);
        }
        return this;
        */
    }
});

wdi.SpiceImageDescriptor = $.spcExtend(wdi.SpiceObject, {
    objectSize: 18,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.numberTo64(this.id),
            this.numberTo8(this.type),
            this.numberTo8(this.flags),
            this.numberTo32(this.width),
            this.numberTo32(this.height)
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        var id = this.bytesToInt32NoAllocate(queue);
        this.id = id.toString(16)+this.bytesToInt32NoAllocate(queue).toString(16);
        this.type = this.bytesToInt8NoAllocate(queue);
        this.flags = this.bytesToInt8NoAllocate(queue);
        this.width = this.bytesToInt32NoAllocate(queue);
        this.height = this.bytesToInt32NoAllocate(queue);
        this.offset = queue.getPosition();
        

        return this;
    }
});

wdi.SpiceImage = $.spcExtend(wdi.SpiceObject, {
    objectSize: 1,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.imageDescriptor.marshall(),
            this.data
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.imageDescriptor = new wdi.SpiceImageDescriptor().demarshall(queue);
        this.data = queue.getRawData();
        return this;
    }
});

wdi.SpiceDrawCopy = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    properties: {
        'overWriteScreenArea': true
    },

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.offset = c.offset;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.base.marshall(),
            this.numberTo32(this.offset),
            this.src_area.marshall(),
            this.numberTo16(this.rop_descriptor),
            this.numberTo8(this.scale_mode),
            this.mask.marshall(),
            this.image.marshall()
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        //this.src_bitmap = new wdi.SpiceImageDescriptor().demarshall(queue);
        this.src_area = new wdi.SpiceRect().demarshall(queue);
        this.rop_descriptor = this.bytesToInt16NoAllocate(queue);
        this.scale_mode = this.bytesToInt8NoAllocate(queue);
        this.mask = new wdi.SpiceQMask().demarshall(queue);


        //if offset equals to "at", then there is no need to adapt the queue!
        //this gives 10ms instead of 30ms in lot of situations
        if (queue.getPosition() == this.offset) {
            this.image = new wdi.SpiceImage().demarshall(queue);
        } else {
            var qdata = new wdi.ViewQueue();
            qdata.setData(queue.getDataOffset(this.offset));
            this.image = new wdi.SpiceImage().demarshall(qdata);
        }

        return this;
    }
});

wdi.drawBlend = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.base = c.base;
        this.alpha_flags = c.alpha_flags;
        this.alpha = c.alpha;
        this.offset = c.offset;
        this.src_area = c.src_area;
    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.base.marshall(),
            this.numberTo32(this.offset),
            this.src_area.marshall(),
            this.numberTo16(this.rop_descriptor),
            this.numberTo8(this.flags),
            this.mask.marshall(),
            this.image.marshall()
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        this.src_area = new wdi.SpiceRect().demarshall(queue);
        this.rop_descriptor = this.bytesToInt16NoAllocate(queue);
        this.flags = this.bytesToInt8NoAllocate(queue);
        this.mask = new wdi.SpiceQMask().demarshall(queue);

        this.image = new wdi.SpiceImage().demarshall(queue);
        return this;
    }
});

wdi.drawAlphaBlend = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.base = c.base;
        this.alpha_flags = c.alpha_flags;
        this.alpha = c.alpha;
        this.offset = c.offset;
        this.src_area = c.src_area;
    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.alpha_flags = this.bytesToInt8NoAllocate(queue);
        this.alpha = this.bytesToInt8NoAllocate(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        this.src_area = new wdi.SpiceRect().demarshall(queue);

        this.image = new wdi.SpiceImage().demarshall(queue);
        return this;
    }
});

wdi.drawTransparent = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        this.src_area = new wdi.SpiceRect().demarshall(queue);
        this.transparent_color = new wdi.SpiceColor().demarshall(queue);
        this.transparent_true_color = new wdi.SpiceColor().demarshall(queue);
        this.image = new wdi.SpiceImage().demarshall(queue);
        return this;
    }
});

wdi.SpiceCopyBits = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.offset = c.offset;
    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.base.marshall(),
            this.src_position.marshall()
        );
        return rawData;

    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.src_position = new wdi.SpicePoint().demarshall(queue);
        return this;
    }
});

wdi.SpiceImageLZRGB = $.spcExtend(wdi.SpiceObject, {
    objectSize: 32,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.length = this.bytesToInt32BE(queue.shift(4));
        this.magic = this.bytesToStringBE(queue.shift(4));
        this.version = this.bytesToInt32BE(queue.shift(4));
        this.type = this.bytesToInt32BE(queue.shift(4));
        this.width = this.bytesToInt32BE(queue.shift(4));
        this.height = this.bytesToInt32BE(queue.shift(4));
        this.stride = this.bytesToInt32BE(queue.shift(4));
        this.top_down = this.bytesToInt32BE(queue.shift(4));

        this.data = queue.shift(this.length);

        return this;
    }
});

wdi.SpiceMouseModeRequest = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.request_mode = c.request_mode;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.request_mode)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.request_mode = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceMouseMode = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.supported_modes = c.supported_modes;
        this.current_mode = c.current_mode;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.supported_modes),
            this.numberTo32(this.current_mode)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) return;
        this.supported_modes = this.bytesToInt16NoAllocate(queue);
        this.current_mode = this.bytesToInt16NoAllocate(queue);
        

        return this;
    }
});

wdi.RedcMousePress = $.spcExtend(wdi.SpiceObject, {
    objectSize: 3,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.button_id = c.button_id;
        this.buttons_state = c.buttons_state;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo8(this.button_id),
            this.numberTo16(this.buttons_state)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.button_id = this.bytesToInt8NoAllocate(queue);
        this.buttons_state = this.bytesToInt16NoAllocate(queue);
        

        return this;
    }
});

wdi.RedcMousePosition = $.spcExtend(wdi.SpiceObject, {
    objectSize: 11,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.x = c.x;
        this.y = c.y;
        this.buttons_state = c.buttons_state;
        this.display_id = c.display_id;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.x),
            this.numberTo32(this.y),
            this.numberTo16(this.buttons_state),
            this.numberTo8(this.display_id)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.x = this.bytesToInt32NoAllocate(queue);
        this.y = this.bytesToInt32NoAllocate(queue);
        this.buttons_state = this.bytesToInt16NoAllocate(queue);
        this.display_id = this.bytesToInt8NoAllocate(queue);
        

        return this;
    }
});

wdi.RedcMouseMotion = $.spcExtend(wdi.SpiceObject, {
    objectSize: 10,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.x = c.x;
        this.y = c.y;
        this.buttons_state = c.buttons_state;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.x),
            this.numberTo32(this.y),
            this.numberTo16(this.buttons_state)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.x = this.bytesToInt32NoAllocate(queue);
        this.y = this.bytesToInt32NoAllocate(queue);
        this.buttons_state = this.bytesToInt16NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceBrush = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.type = c.type;
        this.color = c.color;
    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.type = this.bytesToInt8NoAllocate(queue);

        if (this.type == wdi.SpiceBrushType.SPICE_BRUSH_TYPE_PATTERN) {
            this.pattern = new wdi.SpicePattern().demarshall(queue);
        } else if (this.type == wdi.SpiceBrushType.SPICE_BRUSH_TYPE_SOLID) {
            this.color = new wdi.SpiceColor().demarshall(queue);
        }

        return this;
    }
});

wdi.SpiceColor = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        return [this.r, this.g, this.b];
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.data = this.bytesToInt32(queue.shift(4)) & 0xffffff; //make sure 24 bits, this is RGB888

        this.r = (this.data >> 16);
        this.g = ((this.data >> 8) & 0xff);
        this.b = (this.data & 0xff);

        this.html_color = "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";

        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);

        if(r.length < 2) {
            r = '0'+r;
        }

        if(g.length < 2) {
            g = '0'+g;
        }

        if(b.length < 2) {
            b = '0'+b;
        }

        this.simple_html_color = '#'+r+g+b;
        return this;
    }
});

wdi.RgbaColor = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.data = this.bytesToInt32(queue.shift(4)) & 0xffffffff; //make sure 32 bits, this is ARGB8888

        this.a = this.data >>> 24;
        this.r = (this.data >>> 16) & 0xff;
        this.g = (this.data >>> 8) & 0xff;
        this.b = this.data & 0xff;

        this.html_color = "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";

        return this;
    }
});

wdi.SpicePattern = $.spcExtend(wdi.SpiceObject, {
    objectSize: 12,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.offset = this.bytesToInt32NoAllocate(queue);
        this.point = new wdi.SpicePoint().demarshall(queue);
        var qdata = new wdi.ViewQueue();
        qdata.setData(queue.getDataOffset(this.offset));
        this.image = new wdi.SpiceImage().demarshall(qdata);

        return this;
    }
});

wdi.SpiceDrawFill = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    properties: {
        'overWriteScreenArea': true
    },

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.offset = c.offset;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.offset)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.brush = new wdi.SpiceBrush().demarshall(queue);
        this.rop_descriptor = this.bytesToInt16NoAllocate(queue);
        this.mask = new wdi.SpiceQMask().demarshall(queue);

        if (this.brush.type == wdi.SpiceBrushType.SPICE_BRUSH_TYPE_PATTERN) {
            this.brush.pattern.image = new wdi.SpiceImageDescriptor().demarshall(queue);
            this.brush.pattern.imageData = queue.getData();
        }
        return this;
    }
});

wdi.SpiceDrawRop3 = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,


    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.base.marshall(),
            this.numberTo32(this.offset),
            this.src_area.marshall(),
            this.brush.marshall(),
            this.numberTo8(this.rop_descriptor),
            this.numberTo8(this.scale_mode),
            this.mask.marshall(),
            this.src_image.marshall()
        );
        if (this.brush.type == wdi.SpiceBrushType.SPICE_BRUSH_TYPE_PATTERN) {
            rawData = rawData.concat(
                this.brush.pattern.image.marshall(),
                this.brush.pattern.imageData
            );
        }
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        this.src_area = new wdi.SpiceRect().demarshall(queue);
        this.brush = new wdi.SpiceBrush().demarshall(queue);
        this.rop_descriptor = this.bytesToInt8NoAllocate(queue);
        this.scale_mode = this.bytesToInt8NoAllocate(queue);
        this.mask = new wdi.SpiceQMask().demarshall(queue);
        this.src_image = new wdi.SpiceImage().demarshall(queue);

        if (this.brush.type == wdi.SpiceBrushType.SPICE_BRUSH_TYPE_PATTERN) {
            this.brush.pattern.image = new wdi.SpiceImageDescriptor().demarshall(queue);
            this.brush.pattern.imageData = queue.getData();
        }
        return this;
    }
});

wdi.SpiceDrawBlackness = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.offset = c.offset;
    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.base.marshall(),
            this.mask.marshall()
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.mask = new wdi.SpiceQMask().demarshall(queue);
        return this;
    }
});

wdi.SpiceDrawWhiteness = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.offset = c.offset;
    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.base.marshall(),
            this.mask.marshall()
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.mask = new wdi.SpiceQMask().demarshall(queue);
        return this;
    }
});

wdi.SpiceScanCode = $.spcExtend(wdi.SpiceObject, {
    objectSize: 1,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (scanCode) {
        this.code = scanCode || 0;
        this.zero = 0;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.arrayToBytes(this.code, 8),
            this.numberTo8(this.zero)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        return this;
    },

    getCode: function () {
        return this.code;
    }
});

wdi.RedCursorInit = $.spcExtend(wdi.SpiceObject, {
    objectSize: 9,


    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.position = new wdi.SpicePoint16().demarshall(queue);
        this.trail_length = this.bytesToInt16NoAllocate(queue);
        this.trail_frequency = this.bytesToInt16NoAllocate(queue);
        this.visible = this.bytesToInt8NoAllocate(queue);
        this.cursor = new wdi.RedCursor().demarshall(queue);
        

        return this;
    }
});

wdi.RedCursor = $.spcExtend(wdi.SpiceObject, {
    objectSize: 2,


    marshall: function () {
		this.rawData = [];
		this.rawData = this.rawData.concat(
			this.numberTo16(this.flags)
		);
		if(!(this.flags & 1)){
			this.rawData = this.rawData.concat(
				this.header.marshall(),
				this.data
			);
		}
		return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.flags = this.bytesToInt16NoAllocate(queue);

        this.header = null;
        this.data = null;

        if (!(this.flags & 1)) {
            this.header = new wdi.RedCursorHeader().demarshall(queue);
            this.data = queue.getData();
        }

        return this;
    }
});

wdi.RedCursorHeader = $.spcExtend(wdi.SpiceObject, {
    objectSize: 17,


    marshall: function () {
		this.rawData = [];
		this.rawData = this.rawData.concat(
			this.numberTo64(this.unique),
			this.numberTo8(this.type),
			this.numberTo16(this.width),
			this.numberTo16(this.height),
			this.numberTo16(this.hot_spot_x),
			this.numberTo16(this.hot_spot_y)
		);
		return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.unique = this.bytesToInt64NoAllocate(queue);
        this.type = this.bytesToInt8NoAllocate(queue);
        this.width = this.bytesToInt16NoAllocate(queue);
        this.height = this.bytesToInt16NoAllocate(queue);
        this.hot_spot_x = this.bytesToInt16NoAllocate(queue);
        this.hot_spot_y = this.bytesToInt16NoAllocate(queue);
        

        return this;
    }
});

wdi.RedCursorSet = $.spcExtend(wdi.SpiceObject, {
    objectSize: 5,

    marshall: function () {
		this.rawData = [];
		this.rawData = this.rawData.concat(
			this.position.marshall(),
			this.numberTo8(this.visible),
			this.cursor.marshall()
		);
		return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.position = new wdi.SpicePoint16().demarshall(queue);
        this.visible = this.bytesToInt8NoAllocate(queue);
        this.cursor = new wdi.RedCursor().demarshall(queue);

        return this;
    }
});

wdi.RasterGlyph = $.spcExtend(wdi.SpiceObject, {
    objectSize: 20,
    
    marshall: function () {
    },

    demarshall: function (queue, flags, numGlyphs) {
        var bpp = flags == 1 ? 1 : flags * 2;
        var result = [];

        for (var i = 0; i < numGlyphs; i++) {
            result[i] = {};
            result[i].render_pos = new wdi.SpicePoint().demarshall(queue);
            result[i].glyph_origin = new wdi.SpicePoint().demarshall(queue);
            result[i].width = this.bytesToInt16NoAllocate(queue);
            result[i].height = this.bytesToInt16NoAllocate(queue);
            result[i].data = queue.shift(result[i].height * Math.ceil(result[i].width * bpp / 8));
        }
        return result;
    }
});

wdi.GlyphString = $.spcExtend(wdi.SpiceObject, {
    objectSize: 3,

    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.len = this.bytesToInt16NoAllocate(queue);
        this.flags = this.bytesToInt8NoAllocate(queue);
        this.raster_glyph = new wdi.RasterGlyph().demarshall(queue, this.flags, this.len);
        

        return this;
    }
});

wdi.SpiceDrawText = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        this.back_area = new wdi.SpiceRect().demarshall(queue);
        this.fore_brush = new wdi.SpiceBrush().demarshall(queue);
        this.back_brush = new wdi.SpiceBrush().demarshall(queue);
        this.fore_mode = this.bytesToInt16NoAllocate(queue);
        this.back_mode = this.bytesToInt16NoAllocate(queue);
        this.glyph_string = new wdi.GlyphString().demarshall(queue);
        return this;
    }
});

wdi.SpiceLineAttr = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,
    

    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.flags = this.bytesToInt8NoAllocate(queue);
        if (this.flags) {
            this.style_nseg = this.bytesToInt8NoAllocate(queue);
            this.style = this.int32ToDouble(this.bytesToInt32(queue.shift(4)));
        }

        return this;
    }
});

wdi.SpiceStroke = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.offset = this.bytesToInt32NoAllocate(queue);
        this.attr = new wdi.SpiceLineAttr().demarshall(queue);
        this.brush = new wdi.SpiceBrush().demarshall(queue);
        this.fore_mode = this.bytesToInt16NoAllocate(queue);
        this.back_mode = this.bytesToInt16NoAllocate(queue);
        this.path = new wdi.SpicePath().demarshall(queue);
        return this;
    }
});


wdi.SpiceDrawInvers = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.base.marshall(),
            this.mask.marshall()
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.base = new wdi.SpiceDisplayBase().demarshall(queue);
        this.mask = new wdi.SpiceQMask().demarshall(queue);
        return this;
    }
});

wdi.SpiceStreamCreate = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData.concat(
            this.numberTo32(this.surface_id),
            this.numberTo32(this.id),
            this.numberTo8(this.flags),
            this.numberTo8(this.codec),
            this.numberTo64(this.stamp),
            this.numberTo32(this.stream_width),
            this.numberTo32(this.stream_height),
            this.numberTo32(this.src_width),
            this.numberTo32(this.src_height),
            this.rect.marshall(),
            this.clip.marshall()
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.surface_id = this.bytesToInt32NoAllocate(queue);
        this.id = this.bytesToInt32NoAllocate(queue);
        this.flags = this.bytesToInt8NoAllocate(queue);
        this.codec = this.bytesToInt8NoAllocate(queue);
        this.stamp = this.bytesToInt64NoAllocate(queue);
        this.stream_width = this.bytesToInt32NoAllocate(queue);
        this.stream_height = this.bytesToInt32NoAllocate(queue);
        this.src_width = this.bytesToInt32NoAllocate(queue);
        this.src_height = this.bytesToInt32NoAllocate(queue);
        this.rect = new wdi.SpiceRect().demarshall(queue);
        this.clip = new wdi.SpiceClip().demarshall(queue);
        return this;
    }
});

wdi.SpiceStreamDestroy = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.numberTo32(this.surface_id),
            this.numberTo32(this.id)
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.surface_id = this.bytesToInt32NoAllocate(queue);
        this.id = this.bytesToInt32NoAllocate(queue);
        return this;
    }
});

wdi.SpiceStreamData = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.numberTo32(this.id),
            this.numberTo32(this.multi_media_type),
            this.numberTo32(this.data_size),
            this.data
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.id = this.bytesToInt32NoAllocate(queue);
        this.multi_media_type = this.bytesToInt32NoAllocate(queue);
        this.data_size = this.bytesToInt32NoAllocate(queue);
        this.data = queue.getRawData();
        return this;
    }
});

wdi.SpiceStreamClip = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        rawData = rawData.concat(
            this.numberTo32(this.id),
            this.clip.marshall()
        );
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.id = this.bytesToInt32NoAllocate(queue);
        this.clip = new wdi.SpiceClip().demarshall(queue);
        return this;
    }
});

wdi.SpiceResourceList = $.spcExtend(wdi.SpiceObject, {
    objectSize: 2,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {

    },

    marshall: function () {
        var rawData = [];
        for (var i = 0; i < this.num_items; i++) {
            rawData = rawData.concat(
                this.numberTo8(this.items[i].type),
                this.numberTo64(this.items[i].id)
            );
        }
        return rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: 'Not enough queue to read', errorCode: 3});
        this.num_items = this.bytesToInt16NoAllocate(queue);
        this.items = [];
        for (var i = 0; i < this.num_items; i++) {
            this.items[i] = {
                type: this.bytesToInt8(queue.shift(1)),
                id: this.bytesToInt64(queue.shift(8))
            };
        }
        return this;
    }
});

wdi.SpiceMsgMainAgentTokens = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.num_tokens = c.num_tokens;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.num_tokens)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.num_tokens = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceMsgMainAgentDisconnected = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.error = c.error;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.error)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.error = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.SpiceMsgMainAgentData = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.agentMessage = c.agentMessage;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.agentMessage.marshall()
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        this.agentMessage = new wdi.VDAgentMessage().demarshall(queue);
        

        return this;
    }
});

wdi.VDIChunkHeader = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.port = c.port;
        this.size = c.size;
        this.packet = c.packet;
    },

    marshall: function () {
        this.rawData = [];
        var data = this.packet.marshall();
        this.rawData = this.rawData.concat(
            this.numberTo32(this.port),
            this.numberTo32(data.length),
            data
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        

        return this;
    }
});

wdi.VDAgentMessage = $.spcExtend(wdi.SpiceObject, {
    objectSize: 20,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.protocol = c.protocol;
        this.type = c.type;
        this.opaque = c.opaque;
        this.size = c.size;
        this.data = c.data;
    },

    marshall: function () {
        this.rawData = [];
        var data = this.data.marshall();
        this.rawData = this.rawData.concat(
            this.numberTo32(this.protocol),
            this.numberTo32(this.type),
            this.numberTo64(this.opaque),
            this.numberTo32(data.length),
            data
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.protocol = this.bytesToInt32NoAllocate(queue);
        this.type = this.bytesToInt32NoAllocate(queue);
        this.opaque = this.bytesToInt64NoAllocate(queue);
        this.size = this.bytesToInt32NoAllocate(queue);

        if (this.type == wdi.AgentMessageTypes.VD_AGENT_GET_WINDOWS_LIST) {
            var str = this.bytesToString(queue.shift(queue.length));
            if (str == "change") {
                this.window_list = str;
            } else {
                this.window_list = jQuery.parseJSON(str);
            }
        } else if(this.type == wdi.AgentMessageTypes.VD_AGENT_ANNOUNCE_CAPABILITIES) {
            this.caps = new wdi.VDAgentAnnounceCapabilities().demarshall(queue);
        } else if(this.type == wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD_GRAB) {
            if(queue.getLength() == 0) {
                this.clipboardType = wdi.ClipBoardTypes.VD_AGENT_CLIPBOARD_NONE;
            } else {
                this.clipboardType = this.bytesToInt32NoAllocate(queue);
            }

        } else if(this.type == wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD) {
            this.clipboardType = this.bytesToInt32NoAllocate(queue);
            this.clipboardData = this.bytesToString(queue.shift(queue.length));
        }

        

        return this;
    }
});

wdi.VDAgentHwndWindow = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.hwnd = c.hwnd;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.hwnd)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        

        return this;
    }
});

wdi.VDAgentMoveWindow = $.spcExtend(wdi.SpiceObject, {
    objectSize: 12,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.hwnd = c.hwnd;
        this.x = c.x;
        this.y = c.y;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.hwnd),
            this.numberTo32(this.x),
            this.numberTo32(this.y)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        

        return this;
    }
});

wdi.VDAgentResizeWindow = $.spcExtend(wdi.SpiceObject, {
    objectSize: 12,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.hwnd = c.hwnd;
        this.width = c.width;
        this.height = c.height;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.hwnd),
            this.numberTo32(this.width),
            this.numberTo32(this.height)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        

        return this;
    }
});

wdi.VDAgentMonitorsConfig = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.num_of_monitors = c.num_of_monitors;
        this.flags = c.flags;
        this.data = c.data;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.num_of_monitors),
            this.numberTo32(this.flags),
            this.data.marshall()
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        

        return this;
    }
});

wdi.VDAgentMonConfig = $.spcExtend(wdi.SpiceObject, {
    objectSize: 20,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.height = c.height;
        this.width = c.width;
        this.depth = c.depth;
        this.x = c.x;
        this.y = c.y;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.height),
            this.numberTo32(this.width),
            this.numberTo32(this.depth),
            this.numberTo32(this.x),
            this.numberTo32(this.y)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        

        return this;
    }
});

wdi.VDAgentAnnounceCapabilities = $.spcExtend(wdi.SpiceObject, {
    objectSize: 8,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.request = c.request;
        this.caps = c.caps;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.request),
            this.numberTo32(this.caps)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.request = this.bytesToInt32NoAllocate(queue);
        this.caps = this.bytesToInt32NoAllocate(queue);

        

        return this;
    }
});

wdi.VDAgentExecuteCommand = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.size = c.size;
        this.data = c.data;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.size),
            this.stringToBytes(this.data)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        

        return this;
    }
});

wdi.VDAgentClipboardRequest = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.type = c.type;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.type)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.type = this.bytesToInt32NoAllocate(queue);

        

        return this;
    }
});

wdi.VDAgentClipboardGrab = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.types = c.types;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.types)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.types = this.bytesToInt32NoAllocate(queue);

        

        return this;
    }
});

wdi.VDAgentClipboard = $.spcExtend(wdi.SpiceObject, {
    objectSize: 6,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.type = c.type;
        this.data = c.data;
    },

    marshall: function () {
        this.rawData = [];
        this.rawData = this.rawData.concat(
            this.numberTo32(this.type),
            this.stringToBytes(this.data)
        );
        return this.rawData;
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.type = this.bytesToInt32NoAllocate(queue);
        this.data = queue.getData();

        

        return this;
    }
});

wdi.PlaybackMode = $.spcExtend(wdi.SpiceObject, {
    objectSize: 6,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.multimedia_time = c.multimedia_time;
        this.audio_data_mode = c.audio_data_mode;
        this.data = c.data;
    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.multimedia_time = this.bytesToInt32NoAllocate(queue);
        this.audio_data_mode = this.bytesToInt16NoAllocate(queue);
        this.data = queue.getData();
        

        return this;
    }
});

wdi.PlaybackStart = $.spcExtend(wdi.SpiceObject, {
    objectSize: 14,
    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.channels = c.channels;
        this.format = c.format;
        this.frequency = c.frequency;
        this.time = c.time;
    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.channels = this.bytesToInt32NoAllocate(queue);
        this.format = this.bytesToInt16NoAllocate(queue);
        this.frequency = this.bytesToInt32NoAllocate(queue);
        this.time = this.bytesToInt32NoAllocate(queue);
        

        return this;
    }
});

wdi.PlaybackData = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.multimedia_time = c.multimedia_time;
        this.data = c.data;
    },



    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.multimedia_time = this.bytesToInt32NoAllocate(queue);
        this.data = queue.getData();
        

        return this;
    }
});

wdi.MainMultiMediaTime = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.multimedia_time = c.multimedia_time;
    },

    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.multimedia_time = this.bytesToInt32NoAllocate(queue);
        
        return this;
    }
});

wdi.PlaybackStop = $.spcExtend(wdi.SpiceObject, {
    objectSize: 0,




    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        return this;
    }
});

wdi.MainMChannelsList = $.spcExtend(wdi.SpiceObject, {
    objectSize: 4,

    init: function (c) {
        c ? this.setContent(c) : false;
    },

    setContent: function (c) {
        this.num_of_channels = c.num_of_channels;
    },

    marshall: function () {
    },

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});

        this.num_of_channels = this.bytesToInt32NoAllocate(queue);
        this.channels = [];
        var type = null;
        var id = null;
        for(var i = 0;i<this.num_of_channels;i++) {
            type = this.bytesToInt8NoAllocate(queue);
            id = this.bytesToInt8NoAllocate(queue);
            this.channels.push(type);
        }

        
        return this;
    }
});

wdi.SpiceDisplayInvalidAllPalettes = $.spcExtend(wdi.SpiceObject, {
    objectSize: 0,

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        
        return this;
    }
});

wdi.SpiceDisplayMark = $.spcExtend(wdi.SpiceObject, {
    objectSize: 0,

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        
        return this;
    }
});

wdi.SpiceDisplayReset = $.spcExtend(wdi.SpiceObject, {
    objectSize: 0,

    demarshall: function (queue, expSize) {
        this.expectedSize = expSize || this.objectSize;
        if (queue.getLength() < this.expectedSize) throw new wdi.Exception({message: "Not enough queue to read", errorCode: 3});
        
        return this;
    }
});

/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.SpicePubkeyType = {
	SPICE_PUBKEY_TYPE_INVALID:0,
	SPICE_PUBKEY_TYPE_RSA:1,
	SPICE_PUBKEY_TYPE_RSA2:2,
	SPICE_PUBKEY_TYPE_DSA:3,
	SPICE_PUBKEY_TYPE_DSA1:4,
	SPICE_PUBKEY_TYPE_DSA2:5,
	SPICE_PUBKEY_TYPE_DSA3:6,
	SPICE_PUBKEY_TYPE_DSA4:7,
	SPICE_PUBKEY_TYPE_DH:8,
	SPICE_PUBKEY_TYPE_EC:9,
	SPICE_PUBKEY_TYPE_ENUM_END:10
}

wdi.SpiceWarnCode = {
	SPICE_WARN_GENERAL:0,
	SPICE_WARN_CODE_ENUM_END:1
}

wdi.SpiceLineFlags = {
	SPICE_LINE_FLAGS_START_WITH_GAP:4,
	SPICE_LINE_FLAGS_STYLED:8,
	SPICE_LINE_FLAGS_MASK:12
}

wdi.SpiceNotifyVisibility = {
	SPICE_NOTIFY_VISIBILITY_LOW:0,
	SPICE_NOTIFY_VISIBILITY_MEDIUM:1,
	SPICE_NOTIFY_VISIBILITY_HIGH:2,
	SPICE_NOTIFY_VISIBILITY_ENUM_END:3
}

wdi.SpiceVars = {
	SPICE_MSGC_ACK_SYNC:1,
	SPICE_MSGC_ACK:2,
	SPICE_MSGC_PONG:3,
	SPICE_MSGC_MIGRATE_FLUSH_MARK:4,
	SPICE_MSGC_MIGRATE_DATA:5,
	SPICE_MSGC_DISCONNECTING:6,
	SPICE_MSGC_DISPLAY_INIT:101,
	SPICE_MSGC_END_DISPLAY:102,
	SPICE_CHANNEL_MAIN:1,
	SPICE_CHANNEL_DISPLAY:2,
	SPICE_CHANNEL_INPUTS:3,
	SPICE_CHANNEL_CURSOR:4,
	SPICE_CHANNEL_PLAYBACK:5,
	SPICE_CHANNEL_RECORD:6,
	SPICE_CHANNEL_TUNNEL:7,
	SPICE_CHANNEL_SMARTCARD:8,
	SPICE_CHANNEL_USBREDIR:9,
	SPICE_END_CHANNEL:10,
	SPICE_MSG_MIGRATE:1,
	SPICE_MSG_MIGRATE_DATA:2,
	SPICE_MSG_SET_ACK:3,
	SPICE_MSG_PING:4,
	SPICE_MSG_WAIT_FOR_CHANNELS:5,
	SPICE_MSG_DISCONNECTING:6,
	SPICE_MSG_NOTIFY:7,
	SPICE_MSG_LIST:8,
	SPICE_MSGC_MAIN_CLIENT_INFO:101,
	SPICE_MSGC_MAIN_MIGRATE_CONNECTED:102,
	SPICE_MSGC_MAIN_MIGRATE_CONNECT_ERROR:103,
	SPICE_MSGC_MAIN_ATTACH_CHANNELS:104,
	SPICE_MSGC_MAIN_MOUSE_MODE_REQUEST:105,
	SPICE_MSGC_MAIN_AGENT_START:106,
	SPICE_MSGC_MAIN_AGENT_DATA:107,
	SPICE_MSGC_MAIN_AGENT_TOKEN:108,
	SPICE_MSGC_MAIN_MIGRATE_END:109,
	SPICE_MSGC_END_MAIN:110,
	SPICE_MSG_DISPLAY_MODE:101,
	SPICE_MSG_DISPLAY_MARK:102,
	SPICE_MSG_DISPLAY_RESET:103,
	SPICE_MSG_DISPLAY_COPY_BITS:104,
	SPICE_MSG_DISPLAY_INVAL_LIST:105,
	SPICE_MSG_DISPLAY_INVAL_ALL_PIXMAPS:106,
	SPICE_MSG_DISPLAY_INVAL_PALETTE:107,
	SPICE_MSG_DISPLAY_INVAL_ALL_PALETTES:108,
	SPICE_MSG_DISPLAY_STREAM_CREATE:122,
	SPICE_MSG_DISPLAY_STREAM_DATA:123,
	SPICE_MSG_DISPLAY_STREAM_CLIP:124,
	SPICE_MSG_DISPLAY_STREAM_DESTROY:125,
	SPICE_MSG_DISPLAY_STREAM_DESTROY_ALL:126,
	SPICE_MSG_DISPLAY_DRAW_FILL:302,
	SPICE_MSG_DISPLAY_DRAW_OPAQUE:303,
	SPICE_MSG_DISPLAY_DRAW_COPY:304,
	SPICE_MSG_DISPLAY_DRAW_BLEND:305,
	SPICE_MSG_DISPLAY_DRAW_BLACKNESS:306,
	SPICE_MSG_DISPLAY_DRAW_WHITENESS:307,
	SPICE_MSG_DISPLAY_DRAW_INVERS:308,
	SPICE_MSG_DISPLAY_DRAW_ROP3:309,
	SPICE_MSG_DISPLAY_DRAW_STROKE:310,
	SPICE_MSG_DISPLAY_DRAW_TEXT:311,
	SPICE_MSG_DISPLAY_DRAW_TRANSPARENT:312,
	SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND:313,
	SPICE_MSG_DISPLAY_SURFACE_CREATE:314,
	SPICE_MSG_DISPLAY_SURFACE_DESTROY:315,
	SPICE_MSG_END_DISPLAY:316,
	SPICE_MSG_INPUTS_INIT:101,
	SPICE_MSG_INPUTS_KEY_MODIFIERS:102,
	SPICE_MSG_INPUTS_MOUSE_MOTION_ACK:111,
	SPICE_MSG_END_INPUTS:112,
	SPICE_MSGC_INPUTS_KEY_DOWN:101,
	SPICE_MSGC_INPUTS_KEY_UP:102,
	SPICE_MSGC_INPUTS_KEY_MODIFIERS:103,
	SPICE_MSGC_INPUTS_MOUSE_MOTION:111,
	SPICE_MSGC_INPUTS_MOUSE_POSITION:112,
	SPICE_MSGC_INPUTS_MOUSE_PRESS:113,
	SPICE_MSGC_INPUTS_MOUSE_RELEASE:114,
	SPICE_MSGC_END_INPUTS:115,
	SPICE_MSG_CURSOR_INIT:101,
	SPICE_MSG_CURSOR_RESET:102,
	SPICE_MSG_CURSOR_SET:103,
	SPICE_MSG_CURSOR_MOVE:104,
	SPICE_MSG_CURSOR_HIDE:105,
	SPICE_MSG_CURSOR_TRAIL:106,
	SPICE_MSG_CURSOR_INVAL_ONE:107,
	SPICE_MSG_CURSOR_INVAL_ALL:108,
	SPICE_MSG_END_CURSOR:109,
	SPICE_MSG_RECORD_START:101,
	SPICE_MSG_RECORD_STOP:102,
	SPICE_MSG_RECORD_VOLUME:103,
	SPICE_MSG_RECORD_MUTE:104,
	SPICE_MSG_END_RECORD:105,
	SPICE_MSGC_SMARTCARD_DATA:101,
	SPICE_MSGC_END_SMARTCARD:102,
	SPICE_MSGC_SPICEVMC_DATA:101,
	SPICE_MSGC_END_SPICEVMC:102,
	SPICE_MSG_MAIN_MIGRATE_BEGIN:101,
	SPICE_MSG_MAIN_MIGRATE_CANCEL:102,
	SPICE_MSG_MAIN_INIT:103,
	SPICE_MSG_MAIN_CHANNELS_LIST:104,
	SPICE_MSG_MAIN_MOUSE_MODE:105,
	SPICE_MSG_MAIN_MULTI_MEDIA_TIME:106,
	SPICE_MSG_MAIN_AGENT_CONNECTED:107,
	SPICE_MSG_MAIN_AGENT_DISCONNECTED:108,
	SPICE_MSG_MAIN_AGENT_DATA:109,
	SPICE_MSG_MAIN_AGENT_TOKEN:110,
	SPICE_MSG_MAIN_MIGRATE_SWITCH_HOST:111,
	SPICE_MSG_MAIN_MIGRATE_END:112,
	SPICE_MSG_END_MAIN:113,
	SPICE_MSG_PLAYBACK_DATA:101,
	SPICE_MSG_PLAYBACK_MODE:102,
	SPICE_MSG_PLAYBACK_START:103,
	SPICE_MSG_PLAYBACK_STOP:104,
	SPICE_MSG_PLAYBACK_VOLUME:105,
	SPICE_MSG_PLAYBACK_MUTE:106,
	SPICE_MSG_END_PLAYBACK:107,
	SPICE_MSGC_RECORD_DATA:101,
	SPICE_MSGC_RECORD_MODE:102,
	SPICE_MSGC_RECORD_START_MARK:103,
	SPICE_MSGC_END_RECORD:104,
	SPICE_MSG_TUNNEL_INIT:101,
	SPICE_MSG_TUNNEL_SERVICE_IP_MAP:102,
	SPICE_MSG_TUNNEL_SOCKET_OPEN:103,
	SPICE_MSG_TUNNEL_SOCKET_FIN:104,
	SPICE_MSG_TUNNEL_SOCKET_CLOSE:105,
	SPICE_MSG_TUNNEL_SOCKET_DATA:106,
	SPICE_MSG_TUNNEL_SOCKET_CLOSED_ACK:107,
	SPICE_MSG_TUNNEL_SOCKET_TOKEN:108,
	SPICE_MSG_END_TUNNEL:109,
	SPICE_MSGC_TUNNEL_SERVICE_ADD:101,
	SPICE_MSGC_TUNNEL_SERVICE_REMOVE:102,
	SPICE_MSGC_TUNNEL_SOCKET_OPEN_ACK:103,
	SPICE_MSGC_TUNNEL_SOCKET_OPEN_NACK:104,
	SPICE_MSGC_TUNNEL_SOCKET_FIN:105,
	SPICE_MSGC_TUNNEL_SOCKET_CLOSED:106,
	SPICE_MSGC_TUNNEL_SOCKET_CLOSED_ACK:107,
	SPICE_MSGC_TUNNEL_SOCKET_DATA:108,
	SPICE_MSGC_TUNNEL_SOCKET_TOKEN:109,
	SPICE_MSGC_END_TUNNEL:110,
	SPICE_MSG_SMARTCARD_DATA:101,
	SPICE_MSG_END_SMARTCARD:102,
	SPICE_MSG_SPICEVMC_DATA:101,
	SPICE_MSG_END_SPICEVMC:102,
	SPICE_COMMON_CAP_PROTOCOL_AUTH_SELECTION:0,
	SPICE_COMMON_CAP_AUTH_SPICE:1,
	SPICE_COMMON_CAP_AUTH_SASL:2,
	SPICE_COMMON_CAP_MINI_HEADER:3,
	SPICE_PLAYBACK_CAP_CELT_0_5_1:0,
	SPICE_PLAYBACK_CAP_VOLUME:1,
	SPICE_RECORD_CAP_CELT_0_5_1:0,
	SPICE_RECORD_CAP_VOLUME:1,
	SPICE_MAIN_CAP_SEMI_SEAMLESS_MIGRATE:0
}

wdi.SpiceTunnelServiceType = {
	SPICE_TUNNEL_SERVICE_TYPE_INVALID:0,
	SPICE_TUNNEL_SERVICE_TYPE_GENERIC:1,
	SPICE_TUNNEL_SERVICE_TYPE_IPP:2,
	SPICE_TUNNEL_SERVICE_TYPE_ENUM_END:3
}

wdi.SpiceJpegAlphaFlags = {
	SPICE_JPEG_ALPHA_FLAGS_TOP_DOWN:1,
	SPICE_JPEG_ALPHA_FLAGS_MASK:1
}

wdi.SpiceMaskFlags = {
	SPICE_MASK_FLAGS_INVERS:1,
	SPICE_MASK_FLAGS_MASK:1
}

wdi.SpiceCursorType = {
	SPICE_CURSOR_TYPE_ALPHA:0,
	SPICE_CURSOR_TYPE_MONO:1,
	SPICE_CURSOR_TYPE_COLOR4:2,
	SPICE_CURSOR_TYPE_COLOR8:3,
	SPICE_CURSOR_TYPE_COLOR16:4,
	SPICE_CURSOR_TYPE_COLOR24:5,
	SPICE_CURSOR_TYPE_COLOR32:6,
	SPICE_CURSOR_TYPE_ENUM_END:7,
	SPICE_CURSOR_TYPE_URL:8
}

wdi.SpiceImageFlags = {
	SPICE_IMAGE_FLAGS_CACHE_ME:1,
	SPICE_IMAGE_FLAGS_HIGH_BITS_SET:2,
	SPICE_IMAGE_FLAGS_CACHE_REPLACE_ME:4,
	SPICE_IMAGE_FLAGS_MASK:7
}

wdi.SpiceAudioDataMode = {
	SPICE_AUDIO_DATA_MODE_INVALID:0,
	SPICE_AUDIO_DATA_MODE_RAW:1,
	SPICE_AUDIO_DATA_MODE_CELT_0_5_1:2,
	SPICE_AUDIO_DATA_MODE_ENUM_END:3
}

wdi.SpiceAudioFmt = {
	SPICE_AUDIO_FMT_INVALID:0,
	SPICE_AUDIO_FMT_S16:1,
	SPICE_AUDIO_FMT_ENUM_END:2
}

wdi.SpiceBitmapFmt = {
	SPICE_BITMAP_FMT_INVALID:0,
	SPICE_BITMAP_FMT_1BIT_LE:1,
	SPICE_BITMAP_FMT_1BIT_BE:2,
	SPICE_BITMAP_FMT_4BIT_LE:3,
	SPICE_BITMAP_FMT_4BIT_BE:4,
	SPICE_BITMAP_FMT_8BIT:5,
	SPICE_BITMAP_FMT_16BIT:6,
	SPICE_BITMAP_FMT_24BIT:7,
	SPICE_BITMAP_FMT_32BIT:8,
	SPICE_BITMAP_FMT_RGBA:9,
	SPICE_BITMAP_FMT_ENUM_END:10
}

wdi.SpiceStreamFlags = {
	SPICE_STREAM_FLAGS_TOP_DOWN:1,
	SPICE_STREAM_FLAGS_MASK:1
}

wdi.SpiceTunnelIpType = {
	SPICE_TUNNEL_IP_TYPE_INVALID:0,
	SPICE_TUNNEL_IP_TYPE_IPv4:1,
	SPICE_TUNNEL_IP_TYPE_ENUM_END:2
}

wdi.SpiceBitmapFlags = {
	SPICE_BITMAP_FLAGS_PAL_CACHE_ME:1,
	SPICE_BITMAP_FLAGS_PAL_FROM_CACHE:2,
	SPICE_BITMAP_FLAGS_TOP_DOWN:4,
	SPICE_BITMAP_FLAGS_MASK:7
}

wdi.SpiceStringFlags = {
	SPICE_STRING_FLAGS_RASTER_A1:1,
	SPICE_STRING_FLAGS_RASTER_A4:2,
	SPICE_STRING_FLAGS_RASTER_A8:4,
	SPICE_STRING_FLAGS_RASTER_TOP_DOWN:8,
	SPICE_STRING_FLAGS_MASK:15
}

wdi.SpiceSurfaceFmt = {
	SPICE_SURFACE_FMT_INVALID:0,
	SPICE_SURFACE_FMT_1_A:1,
	SPICE_SURFACE_FMT_8_A:8,
	SPICE_SURFACE_FMT_16_555:16,
	SPICE_SURFACE_FMT_32_xRGB:32,
	SPICE_SURFACE_FMT_16_565:80,
	SPICE_SURFACE_FMT_32_ARGB:96,
	SPICE_SURFACE_FMT_ENUM_END:97
}

wdi.SpiceCursorFlags = {
	SPICE_CURSOR_FLAGS_NONE:1,
	SPICE_CURSOR_FLAGS_CACHE_ME:2,
	SPICE_CURSOR_FLAGS_FROM_CACHE:4,
	SPICE_CURSOR_FLAGS_MASK:7
}

wdi.SpiceLinkErr = {
	SPICE_LINK_ERR_OK:0,
	SPICE_LINK_ERR_ERROR:1,
	SPICE_LINK_ERR_INVALID_MAGIC:2,
	SPICE_LINK_ERR_INVALID_DATA:3,
	SPICE_LINK_ERR_VERSION_MISMATCH:4,
	SPICE_LINK_ERR_NEED_SECURED:5,
	SPICE_LINK_ERR_NEED_UNSECURED:6,
	SPICE_LINK_ERR_PERMISSION_DENIED:7,
	SPICE_LINK_ERR_BAD_CONNECTION_ID:8,
	SPICE_LINK_ERR_CHANNEL_NOT_AVAILABLE:9,
	SPICE_LINK_ERR_ENUM_END:10
}

wdi.SpiceNotifySeverity = {
	SPICE_NOTIFY_SEVERITY_INFO:0,
	SPICE_NOTIFY_SEVERITY_WARN:1,
	SPICE_NOTIFY_SEVERITY_ERROR:2,
	SPICE_NOTIFY_SEVERITY_ENUM_END:3
}

wdi.SpiceBrushType = {
	SPICE_BRUSH_TYPE_NONE:0,
	SPICE_BRUSH_TYPE_SOLID:1,
	SPICE_BRUSH_TYPE_PATTERN:2,
	SPICE_BRUSH_TYPE_ENUM_END:3
}

wdi.SpiceAlphaFlags = {
	SPICE_ALPHA_FLAGS_DEST_HAS_ALPHA:1,
	SPICE_ALPHA_FLAGS_SRC_SURFACE_HAS_ALPHA:2,
	SPICE_ALPHA_FLAGS_MASK:3
}

wdi.SpiceSurfaceFlags = {
	SPICE_SURFACE_FLAGS_PRIMARY:1,
	SPICE_SURFACE_FLAGS_MASK:1
}

wdi.QuicImageType = {
    QUIC_IMAGE_TYPE_INVALID: 0,
    QUIC_IMAGE_TYPE_GRAY: 1,
    QUIC_IMAGE_TYPE_RGB16: 2,
    QUIC_IMAGE_TYPE_RGB24: 3,
    QUIC_IMAGE_TYPE_RGB32: 4,
    QUIC_IMAGE_TYPE_RGBA: 5
}

wdi.SpiceImageType = {
	SPICE_IMAGE_TYPE_BITMAP:0,
	SPICE_IMAGE_TYPE_QUIC:1,
	SPICE_IMAGE_TYPE_RESERVED:2,
	SPICE_IMAGE_TYPE_LZ_PLT:100,
	SPICE_IMAGE_TYPE_LZ_RGB:101,
	SPICE_IMAGE_TYPE_GLZ_RGB:102,
	SPICE_IMAGE_TYPE_FROM_CACHE:103,
	SPICE_IMAGE_TYPE_SURFACE:104,
	SPICE_IMAGE_TYPE_JPEG:105,
	SPICE_IMAGE_TYPE_FROM_CACHE_LOSSLESS:106,
	SPICE_IMAGE_TYPE_ZLIB_GLZ_RGB:107,
	SPICE_IMAGE_TYPE_JPEG_ALPHA:108,
	SPICE_IMAGE_TYPE_CANVAS:109,
	SPICE_IMAGE_TYPE_PNG:110,
	SPICE_IMAGE_TYPE_ENUM_END:111
}

wdi.SpiceImageScaleMode = {
	SPICE_IMAGE_SCALE_MODE_INTERPOLATE:0,
	SPICE_IMAGE_SCALE_MODE_NEAREST:1,
	SPICE_IMAGE_SCALE_MODE_ENUM_END:2
}

wdi.SpiceResourceType = {
	SPICE_RES_TYPE_INVALID:0,
	SPICE_RES_TYPE_PIXMAP:1,
	SPICE_RESOURCE_TYPE_ENUM_END:2
}

wdi.SpicePathFlags = {
	SPICE_PATH_BEGIN:1,
	SPICE_PATH_END:2,
	SPICE_PATH_CLOSE:8,
	SPICE_PATH_BEZIER:16,
	SPICE_PATH_FLAGS_MASK:27
}

wdi.SpiceVideoCodecType = {
	SPICE_VIDEO_CODEC_TYPE_MJPEG:1,
	SPICE_VIDEO_CODEC_TYPE_ENUM_END:2
}

wdi.SpiceRopd = {
	SPICE_ROPD_INVERS_SRC:1,
	SPICE_ROPD_INVERS_BRUSH:2,
	SPICE_ROPD_INVERS_DEST:4,
	SPICE_ROPD_OP_PUT:8,
	SPICE_ROPD_OP_OR:16,
	SPICE_ROPD_OP_AND:32,
	SPICE_ROPD_OP_XOR:64,
	SPICE_ROPD_OP_BLACKNESS:128,
	SPICE_ROPD_OP_WHITENESS:256,
	SPICE_ROPD_OP_INVERS:512,
	SPICE_ROPD_INVERS_RES:1024,
	SPICE_ROPD_MASK:2047
}

wdi.SpiceMigrateFlags = {
	SPICE_MIGRATE_NEED_FLUSH:1,
	SPICE_MIGRATE_NEED_DATA_TRANSFER:2,
	SPICE_MIGRATE_FLAGS_MASK:3
}

wdi.SpiceKeyboardModifierFlags = {
	SPICE_KEYBOARD_MODIFIER_FLAGS_SCROLL_LOCK:1,
	SPICE_KEYBOARD_MODIFIER_FLAGS_NUM_LOCK:2,
	SPICE_KEYBOARD_MODIFIER_FLAGS_CAPS_LOCK:4,
	SPICE_KEYBOARD_MODIFIER_FLAGS_MASK:7
}

wdi.SpiceInfoCode = {
	SPICE_INFO_GENERAL:0,
	SPICE_INFO_CODE_ENUM_END:1
}

wdi.SpiceMouseButton = {
	SPICE_MOUSE_BUTTON_INVALID:0,
	SPICE_MOUSE_BUTTON_LEFT:1,
	SPICE_MOUSE_BUTTON_MIDDLE:2,
	SPICE_MOUSE_BUTTON_RIGHT:3,
	SPICE_MOUSE_BUTTON_UP:4,
	SPICE_MOUSE_BUTTON_DOWN:5,
	SPICE_MOUSE_BUTTON_ENUM_END:6
}

wdi.SpiceClipType = {
	SPICE_CLIP_TYPE_NONE:0,
	SPICE_CLIP_TYPE_RECTS:1,
	SPICE_CLIP_TYPE_ENUM_END:2
}

wdi.SpiceMouseButtonMask = {
	SPICE_MOUSE_BUTTON_MASK_LEFT:1,
	SPICE_MOUSE_BUTTON_MASK_MIDDLE:2,
	SPICE_MOUSE_BUTTON_MASK_RIGHT:4,
	SPICE_MOUSE_BUTTON_MASK_MASK:7
}

wdi.SpiceMouseModeTypes = {
	SPICE_MOUSE_MODE_SERVER:1,
	SPICE_MOUSE_MODE_CLIENT:2,
	SPICE_MOUSE_MODE_MASK:3
}

wdi.AgentCaps = {
	VD_AGENT_CAP_MOUSE_STATE: 0,
	VD_AGENT_CAP_MONITORS_CONFIG: 1,
	VD_AGENT_CAP_REPLY: 2,
	VD_AGENT_CAP_CLIPBOARD: 3,
	VD_AGENT_CAP_DISPLAY_CONFIG: 4,
    VD_AGENT_CAP_CLIPBOARD_BY_DEMAND: 5,
    VD_AGENT_CAP_CLIPBOARD_SELECTION : 6
};

wdi.AgentMessageTypes =  {
    VD_AGENT_MOUSE_STATE:1,
    VD_AGENT_MONITORS_CONFIG: 2,
    VD_AGENT_REPLY: 3,
    VD_AGENT_CLIPBOARD: 4,
    VD_AGENT_DISPLAY_CONFIG: 5,
    VD_AGENT_ANNOUNCE_CAPABILITIES: 6,
    VD_AGENT_CLIPBOARD_GRAB: 7,
    VD_AGENT_CLIPBOARD_REQUEST: 8,
    VD_AGENT_CLIPBOARD_RELEASE: 9,

    VD_AGENT_GET_WINDOWS_LIST: 10,
   	VD_AGENT_CLOSE_WINDOW: 11,
   	VD_AGENT_MOVE_WINDOW: 12,
   	VD_AGENT_RESIZE_WINDOW: 13,
   	VD_AGENT_MINIMIZE_WINDOW: 14,
   	VD_AGENT_RESTORE_WINDOW: 15,
   	VD_AGENT_MAXIMIZE_WINDOW: 16,
   	VD_AGENT_FOCUS_WINDOW: 17,
   	VD_AGENT_EXECUTE_COMMAND: 18
};

wdi.ClipBoardTypes = {
    VD_AGENT_CLIPBOARD_NONE: 0,
    VD_AGENT_CLIPBOARD_UTF8_TEXT: 1,
    VD_AGENT_CLIPBOARD_IMAGE_PNG: 2,  /* All clients with image support should support this one */
    VD_AGENT_CLIPBOARD_IMAGE_BMP: 3,  /* optional */
    VD_AGENT_CLIPBOARD_IMAGE_TIFF: 4, /* optional */
    VD_AGENT_CLIPBOARD_IMAGE_JPG: 5  /* optional */
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.GraphicDebug = $.spcExtend(wdi.DomainObject, {
	debugMode: null,
	spiceGraphicMessageTypes: [],
	cloneSpiceMessage: null,
	clientGui: null,
	tmpCanvas: null,
	tmpContext: null,
	originalCanvas: null,
	spiceMessageData: null,
	endCanvas: null,
	currentOperation: null,

	init: function(c) {
		this.debugMode = c.debugMode;
		if (this.debugMode) {
			this._generateArray();
			this._showDebug();
		} else {
			this._hideDebug();
		}
	},

	_generateArray: function() {
		var self = this;
		$.each(wdi.SpiceVars, function(key, value) {
			if (key.search("SPICE_MSG_DISPLAY_") != -1) {
				self.spiceGraphicMessageTypes[value] = key;
			}
		});
	},

	_showDebug: function() {
		$('#canvasSpace').show();
		$('#graphicDebug').show();
	},

	_hideDebug: function() {
		$('#canvasSpace').hide();
		$('#graphicDebug').hide();
	},

    printDebugMessageOnFilter: function(spiceMessage, clientGui) {
        if(spiceMessage.channel === wdi.SpiceVars.SPICE_CHANNEL_DISPLAY && this.debugMode && ($('#logActive').prop('checked'))) {
            var surface_id = null;
			this.clientGui = clientGui;
			this.cloneSpiceMessage = $.extend(true, {}, spiceMessage);
			if(this.cloneSpiceMessage.args.base && this.cloneSpiceMessage.args.base.surface_id !== null) {
				surface_id = this.cloneSpiceMessage.args.base.surface_id;
				var box = wdi.graphics.getBoxFromSrcArea(this.cloneSpiceMessage.args.base.box);
				var spiceMessageDiv = $('<div/>')
					.append(prettyPrint(this.cloneSpiceMessage))
					.hide();

				this.originalCanvas =  this._copyCanvasFromSurfaceId(surface_id);
				this.spiceMessageData = spiceMessage.args.originalData;
				this.currentOperation = this.spiceGraphicMessageTypes[this.cloneSpiceMessage.messageType];

				$('#debugInfo')
					.append($('<br/>'))
					.append($('<hr/>'))
					.append(this._copyAndHighlightCanvas(surface_id, box))
					.append($('<br/>'))
					.append($('<div/>')
						.append(this.currentOperation + ' (Click to hide/show)')
						.css('cursor', 'pointer')
						.css('color', 'blue')
						.css('text-decoration', 'underline')
						.click(function() {
							spiceMessageDiv.toggle();
						})
					).append(spiceMessageDiv);

				if (this.cloneSpiceMessage.args.hasOwnProperty('image')) {
					this._printImage(spiceMessageDiv);
				}
			}
		}
	},

	_printImage: function(spiceMessageDiv) {
		wdi.graphics.getImageFromSpice(this.cloneSpiceMessage.args.image.imageDescriptor, this.cloneSpiceMessage.args.image.data, this.clientGui, function(srcImg) {
			if(srcImg) {
				spiceMessageDiv.append(
					$('<div/>').css('font-size', '12px')
						.append('Image inside spiceMessage:')
						.append($('<br/>'))
						.css('border', '1px solid black')
						.append(srcImg)
				);
			}
		}, this);
	},

	printDebugMessageOnNotifyEnd: function(spiceMessage, clientGui) {
		this.clientGui = clientGui;
		if(spiceMessage.channel === wdi.SpiceVars.SPICE_CHANNEL_DISPLAY && this.debugMode && ($('#logActive').prop('checked'))) {
			var surface_id = null;
			if(spiceMessage.args.base && spiceMessage.args.base.surface_id !== null) {
				var self = this;
				var createTestClickCallback = function (currentSpiceMessage, originalCanvas, endCanvas, currentOperation) {
					return function () {
						self.createImageTest(currentSpiceMessage, originalCanvas, endCanvas, currentOperation);
					};
				};
				var createReplayClickCallback = function (currentSpiceMessage, originalCanvas, endCanvas, currentOperation) {
					return function () {
						self.createReplay(currentSpiceMessage, originalCanvas, endCanvas, currentOperation);
					};
				};
				surface_id = spiceMessage.args.base.surface_id;
				var box = wdi.graphics.getBoxFromSrcArea(spiceMessage.args.base.box);
				var currentCanvas = this._copyCanvasFromSurfaceId(surface_id);
				$('#debugInfo')
					.append($('<br/>'))
					.append($('<div/>')
						.append($('<button>Create test</button>')
							.css('cursor', 'pointer')
							.click(createTestClickCallback(this.spiceMessageData, this.originalCanvas, currentCanvas, this.currentOperation))
						)
						.append($('<button>Create replay window</button>')
							.css('cursor', 'pointer')
							.click(createReplayClickCallback(this.spiceMessageData, this.originalCanvas, currentCanvas, this.currentOperation))
						)
					).append($('<br/>'))
					.append(this._copyAndHighlightCanvas(surface_id, box));
			}
		}
	},

	createImageTest: function (spiceMessage, originalCanvas, endCanvas, currentOperation) {
		var name = prompt('Name of the test', currentOperation);
		var data1 = originalCanvas.toDataURL('image/png');
		var data2 = endCanvas.toDataURL('image/png');
		var dataObj = {
			origin: data1,
			expected: data2,
			object: spiceMessage,
			name: name
		};
		var data = JSON.stringify(dataObj);
		var fileName = name.replace(/\s/g, '_');

		$.post('graphictestgenerator.php','data=' + data + '&name=' + fileName).done(function (data,status,xhr) {
			alert('Test created');
		}).fail(function(jqXHR, textStatus, errorThrown) {
			alert('Test creation failed.\n\nGot response: ' + jqXHR.status + ' '
				+ jqXHR.statusText + '\n\n' + jqXHR.responseText);
		});

	},

	createReplay: function (spiceMessage, originalCanvas) {
		var data1 = originalCanvas.toDataURL('image/png');
		var dataObj = {
			origin: data1,
			object: spiceMessage,
			width: originalCanvas.width,
			height: originalCanvas.height
		};
		var data = JSON.stringify(dataObj);

		$.post('graphictestgenerator.php','data=' + data + '&replay=true').done(function (data,status,xhr) {
			window.open('replay.html', 'replay');
		}).fail(function(jqXHR, textStatus, errorThrown) {
			alert('Replay failed.\n\nGot response: ' + jqXHR.status + ' '
				+ jqXHR.statusText + '\n\n' + jqXHR.responseText);
		});
	},

	_copyCanvasFromSurfaceId: function (surface_id) {
		var context = this.clientGui.getContext(surface_id);
		this.tmpCanvas = context.canvas;
		var myCanvas = document.createElement('canvas');
		myCanvas.width = this.tmpCanvas.width;
		myCanvas.height = this.tmpCanvas.height;
		myCanvas.getContext('2d').drawImage(this.tmpCanvas, 0, 0);

		return myCanvas;
	},

	_copyAndHighlightCanvas: function(surface_id, box) {
		var myCanvas = this._copyCanvasFromSurfaceId(surface_id);

		context = myCanvas.getContext('2d');

		context.fillStyle = "rgba(255,0,0,0.3)";
		context.fillRect(box.x, box.y, box.width, box.height);
		return myCanvas;
	}


});
wdi.LZSS = {
	LZ_IMAGE_TYPE_INVALID: 0,
	LZ_IMAGE_TYPE_PLT1_LE: 1,
	LZ_IMAGE_TYPE_PLT1_BE: 2,
	LZ_IMAGE_TYPE_PLT4_LE: 3,
	LZ_IMAGE_TYPE_PLT4_BE: 4,
	LZ_IMAGE_TYPE_PLT8: 5,
	LZ_IMAGE_TYPE_RGB16: 6,
	LZ_IMAGE_TYPE_RGB24: 7,
	LZ_IMAGE_TYPE_RGB32: 8,
	LZ_IMAGE_TYPE_RGBA: 9,
	LZ_IMAGE_TYPE_XXXA: 10,
	LZPALETTE_FLAG_PAL_CACHE_ME: 1,
	LZPALETTE_FLAG_PAL_FROM_CACHE: 2,
	LZPALETTE_FLAG_TOP_DOWN: 4,
	PLT_PIXELS_PER_BYTE: [0, 8, 8, 2, 2, 1],
	PLT1_MASK: [1, 2, 4, 8, 16, 32, 64, 128],

	copy_pixel: function(op, color, out_buf) {
		out_buf[(op) + 0] = color.r;
		out_buf[(op) + 1] = color.g;
		out_buf[(op) + 2] = color.b;
	},
		
	lz_rgb32_decompress_rgb: function(arr) {
		//TODO: global alpha and uncouple code
		var encoder = 0;
		var op = 0;
		var ctrl;
		var in_buf = new Uint8Array(arr);
		var format = in_buf[encoder++];
		var opaque = in_buf[encoder++];
		var type = in_buf[encoder++];
		encoder++; //padding
		
		var low = in_buf[encoder+1]*Math.pow(16, 2)+in_buf[encoder];
		encoder += 2;
		var high = in_buf[encoder+1]*Math.pow(16, 2)+in_buf[encoder];
		encoder += 2;
		var len = high*Math.pow(16, 4)+low;

		var buf = new ArrayBuffer(len);
		var buf8 = new Uint8Array(buf);
		var data = new Uint32Array(buf);
		var out_buf_len = len/4;
		
		var code, ref, len, ofs, ref_4, b_4, b;
 
		for (ctrl = in_buf[encoder++]; op < out_buf_len; ctrl = in_buf[encoder++])
		{
			ref = op;
			len = ctrl >> 5;
			ofs = ((ctrl & 31) << 8);

			if (ctrl > 31) { //>=32
				len--;
	
				if (len === 6) {
					do {
						code = in_buf[encoder++];
						len += code;
					} while (code === 255);
				}
				code = in_buf[encoder++];
				ofs += code;
	
	
				if (code === 255) {
					if ((ofs - code) === (31 << 8)) {
						ofs = in_buf[encoder++] << 8;
						ofs += in_buf[encoder++];
						ofs += 8191;
					}
				}
				len += 1;
				ofs += 1;
				ref -= ofs;
				
				if (ref === (op - 1)) {//plt4/1 what?
					b = ref;
					b_4 = b*4;
					for (; len; --len) {
						data[op] =
							(255   << 24) |    // alpha
							(buf8[(b_4)+2] << 16) |    // blue
							(buf8[(b_4)+1] <<  8) |    // green
							 buf8[(b_4)];            // red
						
						op++;
					}
				} else {

					for (; len; --len) {
						//COPY_REF_PIXEL
						ref_4 = ref*4;

						data[op] =
							(255   << 24) |    // alpha
							(buf8[(ref_4)+2] << 16) |    // blue
							(buf8[(ref_4)+1] <<  8) |    // green
							 buf8[(ref_4)];            // red
						
						op++;ref++;
					}
				}
			} else {
				//COPY_COMP_PIXEL
				ctrl++;

				data[op] =
					(255   << 24) |    // alpha
					(in_buf[encoder] << 16) |    // blue
					(in_buf[encoder + 1] <<  8) |    // green
					 in_buf[encoder + 2];            // red
					 
				encoder += 3;
				
				op++;
				
	
				for (--ctrl; ctrl; ctrl--) {
					//COPY_COMP_PIXEL

					data[op] =
						(255   << 24) |    // alpha
						(in_buf[encoder] << 16) |    // blue
						(in_buf[encoder + 1] <<  8) |    // green
						 in_buf[encoder + 2];            // red
					encoder += 3;
					
					op++;
				}
			}
		}
	
		if (type === this.LZ_IMAGE_TYPE_RGBA && !opaque) {
	
			op = 0;
			ctrl = null;
			encoder--;
			for (ctrl = in_buf[encoder++]; op < out_buf_len; ctrl = in_buf[encoder++])
			{
				var ref = op;
				var len = ctrl >> 5;
				var ofs = ((ctrl & 31) << 8);
				var op_4 = op*4;

				if (ctrl >= 32) {

					var code;
					len--;

					if (len === 7 - 1) {
						do {
							code = in_buf[encoder++];
							len += code;
						} while (code === 255);
					}
					code = in_buf[encoder++];
					ofs += code;


					if (code === 255) {
						if ((ofs - code) === (31 << 8)) {
							ofs = in_buf[encoder++] << 8;
							ofs += in_buf[encoder++];
							ofs += 8191;
						}
					}
					len += 3;

					ofs += 1;

					ref -= ofs;
					if (ref === (op - 1)) {//plt4/1 what?
						var b = ref;

						for (; len; --len) {
							op_4 = op*4;
							//COPY_PIXEL
							buf8[(op_4) + 3] = buf8[(b*4)+3];

							op++;
						}
					} else {

						for (; len; --len) {
							//COPY_REF_PIXEL
							op_4 = op*4;
							buf8[(op_4) + 3] = buf8[(ref*4)+3];

							op++;ref++;
						}
					}
				} else {
					//COPY_COMP_PIXEL
					ctrl++;
					buf8[(op_4) + 3] = in_buf[encoder++];
					op++;


					for (--ctrl; ctrl; ctrl--) {
						//COPY_COMP_PIXEL
						op_4 = op*4; // faster?
						buf8[(op_4) + 3] = in_buf[encoder++];
						op++;
					}
				}
			}	
		}
		return buf;
	},
		
	lz_rgb32_decompress: function(in_buf, at, out_buf, type, default_alpha, palette, opaque) {
		//TODO: global alpha and uncouple code
		var encoder = at;
		var op = 0;
		var ctrl;
		var out_buf_len = out_buf.length/4;
		var is_rgba = type === this.LZ_IMAGE_TYPE_RGBA?true:false;
 
		for (ctrl = in_buf[encoder++]; op < out_buf_len; ctrl = in_buf[encoder++])
		{
			var ref = op;
			var len = ctrl >> 5;
			var ofs = ((ctrl & 31) << 8);
			var op_4 = op*4;

			if (ctrl >= 32) {
	
				var code;
				len--;
	
				if (len === 7 - 1) {
					do {
						code = in_buf[encoder++];
						len += code;
					} while (code === 255);
				}
				code = in_buf[encoder++];
				ofs += code;
	
	
				if (code === 255) {
					if ((ofs - code) === (31 << 8)) {
						ofs = in_buf[encoder++] << 8;
						ofs += in_buf[encoder++];
						ofs += 8191;
					}
				}
				len += 1;
				if (is_rgba || palette)
					len += 2;

				ofs += 1;
				//CAST_PLT_DISTANCE ofs and len
				if (type === this.LZ_IMAGE_TYPE_PLT4_LE || type === this.LZ_IMAGE_TYPE_PLT4_BE) {
					ofs = ofs*2;
					len = len*2;
				} else if (type === this.LZ_IMAGE_TYPE_PLT1_BE || type === this.LZ_IMAGE_TYPE_PLT1_LE) {
					ofs = ofs*8;
					len = len*8;
				}

				ref -= ofs;
				if (ref === (op - 1)) {//plt4/1 what?
					var b = ref;

					for (; len; --len) {
						op_4 = op*4;
						//COPY_PIXEL
						if (is_rgba)
						{
							if(opaque) {
								out_buf[(op_4) + 3] = 255;
							} else {
								out_buf[(op_4) + 3] = out_buf[(b*4)+3];
							}
						}
						else
						{
							for (var i = 0; i < 4; i++)
								out_buf[(op_4) + i] = out_buf[(b*4)+i];
						}
						op++;
					}
				} else {

					for (; len; --len) {
						//COPY_REF_PIXEL
						op_4 = op*4;
						if (is_rgba)
						{
							if(opaque) {
								out_buf[(op_4) + 3] = 255;
							} else {
								out_buf[(op_4) + 3] = out_buf[(ref*4)+3];
							}
							
						}
						else
						{
							for (i = 0; i < 4; i++)
								out_buf[(op_4) + i] = out_buf[(ref*4)+i];
						}
						op++;ref++;
					}
				}
			} else {
				//COPY_COMP_PIXEL
				ctrl++;

				if (is_rgba) {
					if(opaque) {
						out_buf[(op_4) + 3] = 255;encoder++;
					} else {
						out_buf[(op_4) + 3] = in_buf[encoder++];
					}
				} else if (palette) {
					if (type === this.LZ_IMAGE_TYPE_PLT1_LE) {
						var oct = in_buf[encoder++];
						var foreColor = palette[1];
						var backColor = palette[0];

						for (var i = 0; i < 8; i++) {
							if (oct & this.PLT1_MASK[i]) {
								this.copy_pixel(op_4, foreColor, out_buf);
							} else {
								this.copy_pixel(op_4, backColor, out_buf);
							}
							if (default_alpha)
								out_buf[(op_4) + 3] = 255;
							if (i < 7)
								op++;op_4 = op*4;
						}
					} else if (type === this.LZ_IMAGE_TYPE_PLT1_BE) {
						var oct = in_buf[encoder++];
						var foreColor = palette[1];
						var backColor = palette[0];

						for (var i = 7; i >= 0; i--) {
							if (oct & this.PLT1_MASK[i]) {
								this.copy_pixel(op_4, foreColor, out_buf);
							} else {
								this.copy_pixel(op_4, backColor, out_buf);
							}
							if (default_alpha)
								out_buf[(op_4) + 3] = 255;
							if (i > 0)
								op++;op_4 = op*4;
						}
					} else if (type === this.LZ_IMAGE_TYPE_PLT4_LE) {
						var oct = in_buf[encoder++];
						var spiceColor = palette[(oct & 0x0f)];
						this.copy_pixel(op_4, spiceColor, out_buf);
						if (default_alpha)
							out_buf[(op_4) + 3] = 255;
						op++;
						op_4 = op*4;

						var spiceColor = palette[((oct >>> 4) & 0x0f)];
						this.copy_pixel(op_4, spiceColor, out_buf);
						if (default_alpha)
							out_buf[(op_4) + 3] = 255;
					} else if (type === this.LZ_IMAGE_TYPE_PLT4_BE) {
						var oct = in_buf[encoder++];
						var bits1 = ((oct >>> 4) & 0x0f);
						var bits2 = oct & 0x0f;
						var spiceColor = palette[bits1];
						this.copy_pixel(op_4, spiceColor, out_buf);
						if (default_alpha)
							out_buf[(op_4) + 3] = 255;
						op++;
						op_4 = op*4;

						var spiceColor = palette[bits2];
						this.copy_pixel(op_4, spiceColor, out_buf);
						if (default_alpha)
							out_buf[(op_4) + 3] = 255;
					} else if (type === this.LZ_IMAGE_TYPE_PLT8) {
						var posPal = in_buf[encoder++];
						var spiceColor = palette[posPal];
						this.copy_pixel(op_4, spiceColor, out_buf);
						if (default_alpha)
							out_buf[(op_4) + 3] = 255;
					}
				} else {
					out_buf[(op_4) + 0] = in_buf[encoder + 2];
					out_buf[(op_4) + 1] = in_buf[encoder + 1];
					out_buf[(op_4) + 2] = in_buf[encoder + 0];
					if (default_alpha)
						out_buf[(op_4) + 3] = 255;
					encoder += 3;
				}
				op++;
				
	
				for (--ctrl; ctrl; ctrl--) {
					//COPY_COMP_PIXEL
					op_4 = op*4; // faster?
					if (is_rgba) {
						if(opaque) {
							out_buf[(op_4) + 3] = 255;
						} else {
							out_buf[(op_4) + 3] = in_buf[encoder++];
						}
					} else if (palette) {
						if (type === this.LZ_IMAGE_TYPE_PLT1_LE) {
							var oct = in_buf[encoder++];
							var foreColor = palette[1];
							var backColor = palette[0];

							for (var i = 0; i < 8; i++) {
								if (oct & this.PLT1_MASK[i]) {
									this.copy_pixel(op_4, foreColor, out_buf);
								} else {
									this.copy_pixel(op_4, backColor, out_buf);
								}
								if (default_alpha)
									out_buf[(op_4) + 3] = 255;
								if (i < 7)
									op++;op_4 = op*4;
							}
						} else if (type === this.LZ_IMAGE_TYPE_PLT1_BE) {
							var oct = in_buf[encoder++];
							var foreColor = palette[1];
							var backColor = palette[0];

							for (var i = 7; i >=0; i--) {
								if (oct & this.PLT1_MASK[i]) {
									this.copy_pixel(op_4, foreColor, out_buf);
								} else {
									this.copy_pixel(op_4, backColor, out_buf);
								}
								if (default_alpha)
									out_buf[(op_4) + 3] = 255;
								if (i > 0)
									op++;op_4 = op*4;
							}
						} else if (type === this.LZ_IMAGE_TYPE_PLT4_LE) {
							var oct = in_buf[encoder++];
							var spiceColor = palette[(oct & 0x0f)];
							this.copy_pixel(op_4, spiceColor, out_buf);
							if (default_alpha)
								out_buf[(op_4) + 3] = 255;
							op++;
							op_4 = op*4;
							var spiceColor = palette[((oct >>> 4) & 0x0f)];
							this.copy_pixel(op_4, spiceColor, out_buf);
							if (default_alpha)
								out_buf[(op_4) + 3] = 255;
						} else if (type === this.LZ_IMAGE_TYPE_PLT4_BE) {
							var oct = in_buf[encoder++];
							var spiceColor = palette[((oct >>> 4) & 0x0f)];
							this.copy_pixel(op_4, spiceColor, out_buf);
							if (default_alpha)
								out_buf[(op_4) + 3] = 255;
							op++;
							op_4 = op*4;

							var spiceColor = palette[(oct & 0x0f)];
							this.copy_pixel(op_4, spiceColor, out_buf);
							if (default_alpha)
								out_buf[(op_4) + 3] = 255;
						} else if (type === this.LZ_IMAGE_TYPE_PLT8) {
							var posPal = in_buf[encoder++];
							var spiceColor = palette[posPal];
							this.copy_pixel(op_4, spiceColor, out_buf);
							if (default_alpha)
								out_buf[(op_4) + 3] = 255;
						}
					} else {
						out_buf[(op_4) + 0] = in_buf[encoder + 2];
						out_buf[(op_4) + 1] = in_buf[encoder + 1];
						out_buf[(op_4) + 2] = in_buf[encoder + 0];
						if (default_alpha)
							out_buf[(op_4) + 3] = 255;
						encoder += 3;
					}
					op++;
				}
			}
		}
		return encoder - 1;
	},

	convert_spice_lz_to_web: function(context, data, imageDescriptor, opaque) { //TODO: refactor this shit code
		// var aux = data.toJSArray();
		var format = imageDescriptor.type;
        data = data.toJSArray(); //this old functions has no support for typed arrays...
		if (format === wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_PLT) {
			var flags = wdi.SpiceObject.bytesToInt8(data.splice(0, 1));
			if (flags === this.LZPALETTE_FLAG_PAL_FROM_CACHE) {
				var header = data.splice(0, 12);
				var length = wdi.SpiceObject.bytesToInt32(header.splice(0, 4));
                var palette_id = wdi.SpiceObject.bytesToInt64(header.splice(0, 8));

                header = data;

                var magic = wdi.SpiceObject.bytesToStringBE(header.splice(0, 4));
                var version = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
                var type = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
                var width = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
                var height = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
                var stride = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
                var top_down = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));

			} else if (flags === this.LZPALETTE_FLAG_PAL_CACHE_ME) {
				var imageHeaders = imageDescriptor.offset + 1; //+1 because of the Flags byte
				var currentHeaders = 36;
				var header = data.splice(0, currentHeaders);
				var length = wdi.SpiceObject.bytesToInt32(header.splice(0, 4));
				var palette_offset = wdi.SpiceObject.bytesToInt32(header.splice(0, 4));
				var spliceInit = palette_offset-imageHeaders-currentHeaders;
				//LZ Compression headers with its magic
				var magic = wdi.SpiceObject.bytesToStringBE(header.splice(0, 4));
				var version = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
				var type = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
				var width = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
				var height = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
				var stride = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));
				var top_down = wdi.SpiceObject.bytesToInt32BE(header.splice(0,4));

				var palette_id = wdi.SpiceObject.bytesToInt64(data.splice(spliceInit, 8));

				var num_palettes = wdi.SpiceObject.bytesToInt16(data.splice(spliceInit, 2));
				var palette = [];
				
				for (var i = 0; i < num_palettes; i++) {
					var queue = new wdi.Queue();
					queue.setData(data.splice(spliceInit, 4));
					palette.push(new wdi.SpiceColor().demarshall(queue));
				}
				wdi.ImageCache.addPalette(palette_id, palette);
			} else {
				wdi.Debug.error('Unimplemented lz palette top down');
			}
			var palette = wdi.ImageCache.getPalette(palette_id);
		}

		if (type !== this.LZ_IMAGE_TYPE_RGB32 && type !== this.LZ_IMAGE_TYPE_RGBA &&
			type !== this.LZ_IMAGE_TYPE_RGB24 && type !== this.LZ_IMAGE_TYPE_PLT8 &&
			type !== this.LZ_IMAGE_TYPE_PLT1_LE && type !== this.LZ_IMAGE_TYPE_PLT1_BE && 
			type !== this.LZ_IMAGE_TYPE_PLT4_LE && type !== this.LZ_IMAGE_TYPE_PLT4_BE) {
			return false;
		}

		if (palette) {
			var ret = context.createImageData(stride*this.PLT_PIXELS_PER_BYTE[type], height);
			// if (type === this.LZ_IMAGE_TYPE_PLT1_BE) {
				// this.lz_rgb32_plt1_be_decompress(data, ret.data, palette);
			// } else {
				this.lz_rgb32_decompress(data, 0, ret.data, type, type !== this.LZ_IMAGE_TYPE_RGBA, palette);
			// }

			var tmpCanvas = wdi.graphics.getNewTmpCanvas(width, height);
			tmpCanvas.getContext('2d').putImageData(ret, 0, 0, 0, 0, width, height);
			ret = tmpCanvas;
		} else {
			var arr = new ArrayBuffer(data.length+8);
			var u8 = new Uint8Array(arr);
			u8[0] = 1;
			u8[1] = opaque;
			u8[2] = type;
			u8[3] = 0;
			
			var number = ret.data.length;
		
			for (var i = 0;i < 4;i++) {//iterations because of javascript number size 
				u8[4+i] = number & (255);//Get only the last byte
				number = number >> 8;//Remove the last byte
			}
		
			u8.set(data, 8);
			var result = new Uint8ClampedArray(this.lz_rgb32_decompress_rgb(arr));
			ret = new ImageData(result, width, height);
			ret = wdi.graphics.getImageFromData(ret);
		}

		if(!top_down) {
			//TODO: PERFORMANCE:
			ret = wdi.RasterOperation.flip(ret);
		}



		return ret;
	},
    
    demarshall_rgb: function(data) {
        var header = data.splice(0, 32);
        return {
            length: wdi.SpiceObject.bytesToInt32(header.splice(0,4)),
            magic: wdi.SpiceObject.bytesToStringBE(header.splice(0,4)),
            version: wdi.SpiceObject.bytesToInt32BE(header.splice(0,4)),
            type: wdi.SpiceObject.bytesToInt32BE(header.splice(0,4)),
            width: wdi.SpiceObject.bytesToInt32BE(header.splice(0,4)),
            height: wdi.SpiceObject.bytesToInt32BE(header.splice(0,4)),
            stride: wdi.SpiceObject.bytesToInt32BE(header.splice(0,4)),
            top_down: wdi.SpiceObject.bytesToInt32BE(header.splice(0,4))
        }
    },

    lz_rgb32_plt1_be_decompress: function(in_buf, out_buf, palette) {
		var encoder = 0;
		var op = 0;
		var ctrl;
		var out_buf_len = out_buf.length/4;
		var ref, len, ofs, next, ref_4, oct, foreColor, backColor, i;
		var type = this.LZ_IMAGE_TYPE_PLT1_BE;

		var pix_per_byte = this.PLT_PIXELS_PER_BYTE[type];

		var pre_255_24 = 255 << 24;
		var pre_31_8_plus255 = (31 << 8) + 255; //8191 === 13 bits to 1

		for (ctrl = in_buf[encoder++]; op < out_buf_len; ctrl = in_buf[encoder++]) {
			ref = op;
			len = ctrl >> 5;
			ofs = ((ctrl & 31) << 8);

			if (ctrl > 31) {

				if (len === 7) {
					do {
						next = in_buf[encoder++];
						len += next;
					} while (next === 255);
				}

				ofs += in_buf[encoder++];

				if (ofs  === pre_31_8_plus255) {
					ofs += in_buf[encoder++] << 8 + in_buf[encoder++];
				}

				//CAST_PLT_DISTANCE ofs and len
				len = (len + 2) * pix_per_byte;

				ref -= (ofs + 1) * pix_per_byte;
				if (ref === (op - 1)) {
					ref_4 = ref * 4;
					while (len-- !== 0) {
						//COPY_PIXEL
						op_4 = op * 4;

						out_buf[op_4] = out_buf[ref_4];
						out_buf[op_4 + 1] = out_buf[ref_4 + 1];
						out_buf[op_4 + 2] = out_buf[ref_4 + 2];
						out_buf[op_4 + 3] = out_buf[ref_4 + 3];

						op++;
					}
				} else {
					while (len-- !== 0) {
						//COPY_REF_PIXEL
						op_4 = op * 4;
						ref_4 = ref * 4;

						out_buf[op_4] = out_buf[ref_4];
						out_buf[op_4 + 1] = out_buf[ref_4 + 1];
						out_buf[op_4 + 2] = out_buf[ref_4 + 2];
						out_buf[op_4 + 3] = out_buf[ref_4 + 3];

						op++;ref++;
					}
				}
			} else {
				//COPY_COMP_PIXEL
				while (ctrl-- !== -1) {
					//COPY_COMP_PIXEL
					op_4 = op * 4; // faster?

					oct = in_buf[encoder++];
					foreColor = palette[1];
					backColor = palette[0];

					for (i = 7; i >=0; i--) {
						op_4 = op * 4;

						if (oct & this.PLT1_MASK[i]) {
							out_buf[op_4 + 0] = foreColor.r;
							out_buf[op_4 + 1] = foreColor.g;
							out_buf[op_4 + 2] = foreColor.b;
						} else {
							out_buf[op_4 + 0] = backColor.r;
							out_buf[op_4 + 1] = backColor.g;
							out_buf[op_4 + 2] = backColor.b;
						}
						out_buf[(op_4) + 3] = 255;

						op++;
					}
				}
			}
		}
	}
};
wdi.BMP2 = $.spcExtend(wdi.SpiceObject, {
	objectSize: 0,
	mapper: [0, 1, 1, 4, 4, 8, 16, 24, 32, 32],

	init: function(imageData) {
		var type = this.bytesToInt8(imageData);
		var flags = this.bytesToInt8(imageData); // bit 1 => normal, bit 2 => palette cache (...)
		var width = this.bytesToInt32(imageData); // width in pixels
		var height = this.bytesToInt32(imageData); // height in pixels
		var stride = this.bytesToInt32(imageData); // width in bytes including padding
		var len;
		var bpp = this.mapper[type];
		var i;


		var paletteSize = 0, unique, paletteData, numEnts = 0;
		if (bpp <= 8 && bpp > 0) {
			var palette = [];
			if (flags & 1) {
				var paletteOffset = this.bytesToInt32(imageData); // From the begininig of the spice packet?
				len = imageData.length;
				paletteSize = 4*Math.pow(2,bpp);
				var paletteDataSize = paletteSize + 8 + 2; //palette + unique(64b) + numEnts (16b)
				len -= paletteDataSize;
				paletteData = imageData.splice(len, paletteDataSize);
				unique = this.bytesToInt64(paletteData);
				numEnts = this.bytesToInt16(paletteData);
				var queue;

				for (i = 0; i < numEnts*4; i+=4) {
					queue = new wdi.Queue();
					queue.setData(paletteData.slice(i, i+4));
					palette.push(new wdi.SpiceColor().demarshall(queue));
				}
				wdi.ImageCache.addPalette(unique, palette);
			} else {
				//get palette from cache
				unique = this.bytesToInt64(imageData);
				len = imageData.length;
				palette = wdi.ImageCache.getPalette(unique);
				var spiceColors;
				paletteData = [];
				numEnts = palette.length;
				for (i =0; i < numEnts; i++ ) {
					spiceColors = palette[i].marshall();
					spiceColors.push(0);
					paletteData = paletteData.concat(spiceColors);
				}

			}
			// imageData = paletteData.concat(imageData);

		} else {
			// Removing 4 bytes from the image data to fix index out of range error.
			var unknown = this.bytesToInt32(imageData);
		}

		this.setContent({
			imageSize: len,
			width: width,
			height: height,
			bpp: bpp,
			imageData: imageData,
			paletteSize: numEnts * 4,
			palette: palette,
			stride: stride,
			type: type
		});
	},
	
	setContent: function(c) {
		this.imageSize = c.imageSize;
		this.width = c.width;
		this.height = c.height;
		this.bpp = c.bpp;
		this.imageData = c.imageData;
		this.palette = c.palette;
		this.offset = c.paletteSize + 0x36; //0x36 === Current harcoded header size (BMP + DIB)
		this.size = this.offset + this.imageSize;
		this.stride = c.stride;
		this.type = c.type;
	},
	
	marshall: function(context) {
		var type = this.type;
		var palette = this.palette;
        var width = this.width;
        var height = this.height;
		var stride = this.stride;
		var data = this.imageData;
		var size = data.length;

		var pixelsStride = stride * 8/this.bpp;
		var bytesStride = pixelsStride * 4;
		var buf = new ArrayBuffer(bytesStride * height);
		var buf8 = new Uint8ClampedArray(buf);
		var buf32 = new Uint32Array(buf);
		var topdown = false;

		var oct, i, pos, buffPos, spiceColor;
		var b;
		if (palette) {
			buffPos = 0
			if (type === wdi.SpiceBitmapFmt.SPICE_BITMAP_FMT_1BIT_BE) {
				spiceColor = palette[1];
				var foreColor = spiceColor.r << 24 | spiceColor.g << 16 | spiceColor.b << 8 | 255;

				spiceColor = palette[0];
				var backColor = spiceColor.r << 24 | spiceColor.g << 16 | spiceColor.b << 8 | 255;

				var PLT1_MASK = [1, 2, 4, 8, 16, 32, 64, 128];

				for (pos = 0; pos < size; pos++) {
					oct = data[pos];

					for (i = 7; i >= 0; i--) {
						if (oct & PLT1_MASK[i]) {
							buf32[buffPos++] = foreColor;
						} else {
							buf32[buffPos++] = backColor;
						}
					}
				}
			} else if (type === wdi.SpiceBitmapFmt.SPICE_BITMAP_FMT_4BIT_BE) {
				for (pos = 0; pos < size; pos++) {
					oct = data[pos];
					spiceColor = palette[oct >>> 4];
					buf32[buffPos++] = spiceColor.r << 24 | spiceColor.g << 16 | spiceColor.b << 8 | 255;
					spiceColor = palette[oct & 0x0f];
					buf32[buffPos++] = spiceColor.r << 24 | spiceColor.g << 16 | spiceColor.b << 8 | 255;
				}
			}

		} else {
			if (type === wdi.SpiceBitmapFmt.SPICE_BITMAP_FMT_32BIT) {
				for (pos = 0; pos < size; pos += 4) {
					b = data[pos];
					data[pos] = data[pos + 2];
					data[pos + 2] = b;
					data[pos + 3] = 255;
				}

			} else if (type === wdi.SpiceBitmapFmt.SPICE_BITMAP_FMT_RGBA) {
				topdown = true;
				for (pos = 0; pos < size; pos+=4) {
					b = data[pos];
					data[pos] = data[pos+2];
					data[pos+2] = b;
				}
			} else if (type === wdi.SpiceBitmapFmt.SPICE_BITMAP_FMT_24BIT) {
				for (pos = 0; pos < size; pos+=3) {
					b = data[pos];
					data[pos] = data[pos+2];
					data[pos+2] = b;
				}
			}
			buf8 = new Uint8ClampedArray(data);
		}

		var ret = new ImageData(buf8, pixelsStride, height);

		var tmpCanvas = wdi.graphics.getNewTmpCanvas(width, height);
		tmpCanvas.getContext('2d').putImageData(ret, 0, 0, 0, 0, width, height);
		ret = tmpCanvas;

		if(!topdown) {
			ret = wdi.RasterOperation.flip(ret);
		}

		return ret;

	}
});
"use strict";
/*
   Copyright (C) 2012 by Jeremy P. White <jwhite@codeweavers.com>

   This file is part of spice-html5.

   spice-html5 is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   spice-html5 is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public License
   along with spice-html5.  If not, see <http://www.gnu.org/licenses/>.
*/

/*----------------------------------------------------------------------------
**  crc logic from rfc2083 ported to Javascript
**--------------------------------------------------------------------------*/

var rfc2083_crc_table = Array(256);
var rfc2083_crc_table_computed = 0;
/* Make the table for a fast CRC. */
function rfc2083_make_crc_table()
{
    var c;
    var n, k;
    for (n = 0; n < 256; n++)
    {
        c = n;
        for (k = 0; k < 8; k++)
        {
            if (c & 1)
                c = ((0xedb88320 ^ (c >>> 1)) >>> 0) & 0xffffffff;
            else
                c = c >>> 1;
        }
        rfc2083_crc_table[n] = c;
    }

    rfc2083_crc_table_computed = 1;
}

/* Update a running CRC with the bytes buf[0..len-1]--the CRC
     should be initialized to all 1's, and the transmitted value
     is the 1's complement of the final running CRC (see the
     crc() routine below)). */

function rfc2083_update_crc(crc, u8buf, at, len)
{
    var c = crc;
    var n;

    if (!rfc2083_crc_table_computed)
        rfc2083_make_crc_table();

    for (n = 0; n < len; n++)
    {
        c = rfc2083_crc_table[(c ^ u8buf[at + n]) & 0xff] ^ (c >>> 8);
    }

    return c;
}

function rfc2083_crc(u8buf, at, len)
{
    return rfc2083_update_crc(0xffffffff, u8buf, at, len) ^ 0xffffffff;
}

function crc32(mb, at, len)
{
    var u8 = new Uint8Array(mb);
    return rfc2083_crc(u8, at, len);
}

function PngIHDR(width, height)
{
    this.width = width;
    this.height = height;
    this.depth = 8;
    this.type = 6;
    this.compression = 0;
    this.filter = 0;
    this.interlace = 0;
}

PngIHDR.prototype =
{
    to_buffer: function(a, at)
    {
        at = at || 0;
        var orig = at;
        var dv = new SpiceDataView(a);
        dv.setUint32(at, this.buffer_size() - 12); at += 4;
        dv.setUint8(at, 'I'.charCodeAt(0)); at++;
        dv.setUint8(at, 'H'.charCodeAt(0)); at++;
        dv.setUint8(at, 'D'.charCodeAt(0)); at++;
        dv.setUint8(at, 'R'.charCodeAt(0)); at++;
        dv.setUint32(at, this.width); at += 4;
        dv.setUint32(at, this.height); at += 4;
        dv.setUint8(at, this.depth); at++;
        dv.setUint8(at, this.type); at++;
        dv.setUint8(at, this.compression); at++;
        dv.setUint8(at, this.filter); at++;
        dv.setUint8(at, this.interlace); at++;
        dv.setUint32(at, crc32(a, orig + 4, this.buffer_size() - 8)); at += 4;
        return at;
    },
    buffer_size: function()
    {
        return 12 + 13;
    }
}


function adler()
{
    this.s1 = 1;
    this.s2 = 0;
}

adler.prototype.update = function(b)
{
    this.s1 += b;
    this.s1 %= 65521;
    this.s2 += this.s1;
    this.s2 %= 65521;
}

function PngIDAT(width, height, bytes)
{
    if (bytes.byteLength > 65535)
    {
        throw new Error("Cannot handle more than 64K");
    }
    this.data = bytes;
    this.width = width;
    this.height = height;
}

PngIDAT.prototype =
{
    to_buffer: function(a, at)
    {
        at = at || 0;
        var orig = at;
        var x, y, i, j;
        var dv = new SpiceDataView(a);
        var zsum = new adler();
        dv.setUint32(at, this.buffer_size() - 12); at += 4;
        dv.setUint8(at, 'I'.charCodeAt(0)); at++;
        dv.setUint8(at, 'D'.charCodeAt(0)); at++;
        dv.setUint8(at, 'A'.charCodeAt(0)); at++;
        dv.setUint8(at, 'T'.charCodeAt(0)); at++;

        /* zlib header.  */
        dv.setUint8(at, 0x78); at++;
        dv.setUint8(at, 0x01); at++;

        /* Deflate header.  Specifies uncompressed, final bit */
        dv.setUint8(at, 0x80); at++;
        dv.setUint16(at, this.data.byteLength + this.height); at += 2;
        dv.setUint16(at, ~(this.data.byteLength + this.height)); at += 2;
        var u8 = new Uint8Array(this.data);
        for (i = 0, y = 0; y < this.height; y++)
        {
            /* Filter type 0 - uncompressed */
            dv.setUint8(at, 0); at++;
            zsum.update(0);
            for (x = 0; x < this.width && i < this.data.byteLength; x++)
            {
                zsum.update(u8[i]);
                dv.setUint8(at, u8[i++]); at++;
                zsum.update(u8[i]);
                dv.setUint8(at, u8[i++]); at++;
                zsum.update(u8[i]);
                dv.setUint8(at, u8[i++]); at++;
                zsum.update(u8[i]);
                dv.setUint8(at, u8[i++]); at++;
            }
        }

        /* zlib checksum.   */
        dv.setUint16(at, zsum.s2); at+=2;
        dv.setUint16(at, zsum.s1); at+=2;

        /* FIXME - something is not quite right with the zlib code;
                   you get an error from libpng if you open the image in
                   gimp.  But it works, so it's good enough for now... */

        dv.setUint32(at, crc32(a, orig + 4, this.buffer_size() - 8)); at += 4;
        return at;
    },
    buffer_size: function()
    {
        return 12 + this.data.byteLength + this.height + 4 + 2 + 1 + 2 + 2;
    }
}


function PngIEND()
{
}

PngIEND.prototype =
{
    to_buffer: function(a, at)
    {
        at = at || 0;
        var orig = at;
        var i;
        var dv = new SpiceDataView(a);
        dv.setUint32(at, this.buffer_size() - 12); at += 4;
        dv.setUint8(at, 'I'.charCodeAt(0)); at++;
        dv.setUint8(at, 'E'.charCodeAt(0)); at++;
        dv.setUint8(at, 'N'.charCodeAt(0)); at++;
        dv.setUint8(at, 'D'.charCodeAt(0)); at++;
        dv.setUint32(at, crc32(a, orig + 4, this.buffer_size() - 8)); at += 4;
        return at;
    },
    buffer_size: function()
    {
        return 12;
    }
}


function create_rgba_png(width, height, bytes)
{
    var i;
    var ihdr = new PngIHDR(width, height);
    var idat = new PngIDAT(width, height, bytes);
    var iend = new PngIEND;

    var mb = new ArrayBuffer(ihdr.buffer_size() + idat.buffer_size() + iend.buffer_size());
    var at = ihdr.to_buffer(mb);
    at = idat.to_buffer(mb, at);
    at = iend.to_buffer(mb, at);

    var u8 = new Uint8Array(mb);
    var str = "";
    for (i = 0; i < at; i++)
    {
        str += "%";
        if (u8[i] < 16)
            str += "0";
        str += u8[i].toString(16);
    }


    return "%89PNG%0D%0A%1A%0A" + str;
}
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.RunQueue = $.spcExtend(wdi.DomainObject, {
	tasks: null,
	isRunning: false,
	
	init: function() {
		this.tasks = [];
	},
	
	getTasksLength: function() {
		return this.tasks.length;
	},
	
	add: function(fn, scope, endCallback, params) {
		this.tasks.push({
			fn: fn,
			scope: scope,
            fnFinish: endCallback,
            params: params
		});
		
		return this;
	},
	
	clear: function() {
		this.tasks = [];
		
		return this;
	},
	
	_process: function() {
		wdi.ExecutionControl.sync = true;
		var proxy, self = this;
		this.isRunning = true;
		var task = this.tasks.shift();
		
		if (!task) {
			this.isRunning = false;
			return;
		}
		
		proxy = {
			end: function() {
                if(task.fnFinish) {
                    task.fnFinish.call(task.scope);
                }
				self._process();
			}
		};

		try {
			task.fn.call(task.scope, proxy, task.params);
		} catch(e) {
			wdi.Debug.error(e.message);
			proxy.end();
		}
		
		return this;
	},

	process: function() {
		if (!this.isRunning) {
			this._process();
		} else {
			return;
		}
	}
});

//wdi.ExecutionControl = $.spcExtend(wdi.DomainObject, {
//	currentProxy: null,
//	sync: true,
//	runQ: null,
//	init: function(c) {
//		this.runQ = c.runQ || new wdi.RunQueue(); 
//	}
//});

//TODO: make an instance of it on each channel
wdi.ExecutionControl = {
	currentProxy: null,
	sync: true,
	runQ: new wdi.RunQueue()
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */


if (typeof CanvasPixelArray != 'undefined' && !CanvasPixelArray.prototype.set) {
	CanvasPixelArray.prototype.set = function(u8) {
		var length = u8.length;
		for (var i=0; i<length; i++) {
			this[i] = u8[i];
		}
	};
}

wdi.graphics = {
	tmpCanvas: document.createElement('canvas'),
	imageLoader: new Image(),

	getRect: function(box, image) {
		//if the subpart is the whole image, return image
		if (box.x === 0 && box.y === 0 && box.width === image.width && box.height === image.height) {
			return image;
		}

		var cnv = this.getImageFromData(image);
		//get a subpart of the image

		//first, create a canvas to hold the new image
		var tmp_canvas = wdi.graphics.getNewTmpCanvas(box.width, box.height);
		var tmp_context = tmp_canvas.getContext('2d');

		tmp_context.drawImage(cnv, box.x, box.y, box.width, box.height, 0, 0, box.width, box.height);
		return tmp_canvas;
	},

	//TODO: why this is not argb?
	argbToImageData: function(bytes, width, height) {
		var length = bytes.length;
		var canvas = wdi.graphics.getTmpCanvas(width, height);
		var context = canvas.getContext('2d');
		var imageData = context.createImageData(width, height);

		for (var i = 0; i < length; i += 4) {
			imageData.data[i] = bytes[i]; //r
			imageData.data[i + 1] = bytes[i + 1]; //g
			imageData.data[i + 2] = bytes[i + 2]; //b
			imageData.data[i + 3] = bytes[i + 3]; //a
		}

		return imageData;
	},

	align: function(a, size) {
		return (((a) + ((size) - 1)) & ~((size) - 1));
	},

	monoMask: [1, 2, 4, 8, 16, 32, 64, 128],

	monoToImageData: function(bytes, width, height) {
		var stride = this.align(width, 8) >>> 3;
		var length = bytes.length;
		var half = length / 2;

		var canvas = wdi.graphics.getTmpCanvas(width, height);
		var context = canvas.getContext('2d');

		var result = context.createImageData(width, height);

		var andMask = [];
		var xorMask = [];

		for (var i = 0; i < length; i++) {
			var currentByte = bytes[i];
			var bitsLeft = 8;

			if (i >= half) {
				while (bitsLeft--) {
					var bit = (currentByte & this.monoMask[bitsLeft]) && true;
					andMask.push(bit);
				}
			} else if (i < half) {
				while (bitsLeft--) {
					var bit = (currentByte & this.monoMask[bitsLeft]) && true;
					xorMask.push(bit);
				}
			}
		}

		var pos = 0;
		half = xorMask.length;

		for (i = 0; i < half; i++) {
			pos = i * 4;
			if (!andMask[i] && !xorMask[i]) {
				result.data[pos] = 0;
				result.data[pos + 1] = 0;
				result.data[pos + 2] = 0;
				result.data[pos + 3] = 255;
			} else if (!andMask[i] && xorMask[i]) {
				result.data[pos] = 255;
				result.data[pos + 1] = 255;
				result.data[pos + 2] = 255;
				result.data[pos + 3] = 0;
			} else if (andMask[i] && !xorMask[i]) {
				result.data[pos] = 255;
				result.data[pos + 1] = 255;
				result.data[pos + 2] = 255;
				result.data[pos + 3] = 255;
			} else if (andMask[i] && xorMask[i]) {
				result.data[pos] = 0;
				result.data[pos + 1] = 0;
				result.data[pos + 2] = 0;
				result.data[pos + 3] = 255;
			}
		}
		return result;
	},

	drawJpeg: function (imageDescriptor, jpegData, callback, previousScope) {
		return this.drawBrowserImage(imageDescriptor, jpegData, callback, previousScope, 'jpeg', false);
	},

    drawBrowserImage: function (imageDescriptor, jpegData, callback, previousScope, type, alreadyEncoded) {
        var tmpstr;
        var img = wdi.GlobalPool.create('Image');
		var url;
        img.onload = function() {
			URL.revokeObjectURL(url)
			try {
				if (imageDescriptor.flags & wdi.SpiceImageFlags.SPICE_IMAGE_FLAGS_CACHE_ME) {
					var myImage = wdi.graphics.getTmpCanvas(this.width, this.height);
					var tmp_context = myImage.getContext('2d');
					tmp_context.drawImage(this, 0, 0);
					wdi.ImageCache.addImage(imageDescriptor, myImage);
				}

                callback.call(previousScope, this);
            } catch (e) {
                wdi.Debug.error(e.message);
            } finally {
                wdi.ExecutionControl.currentProxy.end();
            }
        };

        img.onerror = function() {
			URL.revokeObjectURL(url)
            wdi.Debug.error('failed to load JPEG image');
            wdi.ExecutionControl.currentProxy.end();
        };

		if(!alreadyEncoded) {
			url = wdi.SpiceObject.bytesToURI(jpegData);
			img.src = url;
		} else {
			tmpstr = jpegData;
			img.src = tmpstr;
		}
    },

	getImageFromSpice: function (imageDescriptor, imageData, clientGui, callback, previousScope, options) {
		var myImage;
		var source_img = null;
		var opaque;
		var brush;
		var raw;

		if (options) {
			opaque = options['opaque'];
			brush = options['brush'];
			raw = options['raw'];
		} else {
			opaque = false;
			raw = false;
			brush = false;
		}




		switch (imageDescriptor.type) {
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_RGB:
				source_img = this.processLz(imageDescriptor, imageData, brush, opaque, clientGui);
				break;

			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_PLT:
				wdi.Debug.log('lz plt decode');
				source_img = wdi.LZSS.convert_spice_lz_to_web(clientGui.getContext(0), imageData, imageDescriptor, opaque);
				break;

			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_QUIC:
				source_img = this.processQuic(imageDescriptor, imageData, brush, opaque, clientGui);
				break;

            case wdi.SpiceImageType.SPICE_IMAGE_TYPE_JPEG:
				wdi.Debug.log('JPEG decode');
				wdi.ExecutionControl.sync = false;
                this.drawJpeg(imageDescriptor, imageData.subarray(4), callback, previousScope);
                return;

            case wdi.SpiceImageType.SPICE_IMAGE_TYPE_JPEG_ALPHA:
                wdi.Debug.log('JPEG Alpha decode');
                wdi.ExecutionControl.sync = false;
                var jpeg_data = imageData.subarray(9);
                this.drawJpeg(imageDescriptor, jpeg_data, callback, previousScope);

                // TODO: extract alpha mask and apply

                return;

            case wdi.SpiceImageType.SPICE_IMAGE_TYPE_BITMAP:
				wdi.Debug.log('BMP');

				if (imageData.toJSArray) {
					imageData = imageData.toJSArray();
				}

				//Spice BMP Headers
				source_img = new wdi.BMP2(imageData).marshall(clientGui.getContext(0));
				break;
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_FROM_CACHE_LOSSLESS:
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_FROM_CACHE:
                wdi.ExecutionControl.sync = false;
				wdi.ImageCache.getImageFrom(imageDescriptor, function(img) {
                    callback.call(previousScope, img);
                    wdi.ExecutionControl.currentProxy.end();
                });
				return;
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_SURFACE:
				var origin_surface_id = wdi.SpiceObject.bytesToInt32(imageData.toJSArray());
				var context = clientGui.getContext(origin_surface_id);
				source_img = context.canvas;
				break;
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_CANVAS:
				source_img = imageData;
				break;
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_PNG:
				wdi.ExecutionControl.sync = false;
				imageData = wdi.SpiceObject.bytesToString(imageData.toJSArray());
				this.drawBrowserImage(imageDescriptor, imageData, callback, previousScope, "png", true);
				return;
			default:
				wdi.Debug.log('Unknown image type: ' + imageDescriptor.type);
				wdi.ExecutionControl.currentProxy.end();
				return;
		}
		myImage = null;
		if (imageDescriptor.flags & wdi.SpiceImageFlags.SPICE_IMAGE_FLAGS_CACHE_ME) {
			wdi.ImageCache.addImage(imageDescriptor, source_img);
		}

		if(source_img.getContext || raw) {
			myImage = source_img;
		} else {
			myImage = this.getImageFromData(source_img);
		}

		if (imageDescriptor.flags & wdi.SpiceImageFlags.SPICE_IMAGE_FLAGS_CACHE_ME) {
			wdi.ImageCache.addImage(imageDescriptor, myImage);
		}

		if (wdi.ExecutionControl.sync) callback.call(previousScope, myImage);
	},

	processUncompress: function (imageDescriptor, imageData, brush, opaque, clientGui, callback) {
		var scope = this;
		var imageUncompressor = wdi.ImageUncompressor.getSyncInstance();

		imageUncompressor.process(
			imageDescriptor, imageData, brush, opaque, clientGui, callback, scope
		);
	},

	processQuic: function(imageDescriptor, imageData, brush, opaque, clientGui) {
		var source_img;

		var callback = function(data) {
			var u8 = new Uint8ClampedArray(data);
			source_img = new ImageData(u8, imageDescriptor.width, imageDescriptor.height);
		};

		this.processUncompress(imageDescriptor, imageData, brush, opaque, clientGui, callback);

		return source_img;
	},

	processLz: function(imageDescriptor, imageData, brush, opaque, clientGui) {
		var source_img;
		var self = this;
		function callback(data) {
			var imageUncompressor = wdi.ImageUncompressor.getSyncInstance();
			var extractedData = imageUncompressor.extractLzHeader(imageData, brush);

			var u8 = new Uint8ClampedArray(data);
			source_img = new ImageData(u8, imageDescriptor.width, imageDescriptor.height);

			if (!extractedData.header.top_down && !opaque) {
				source_img = this.imageFlip(source_img);
			}
		};


		this.processUncompress(imageDescriptor, imageData, brush, opaque, clientGui, callback);
		return source_img;
	},

	imageFlip: function (source_img) {
		return wdi.RasterOperation.flip(this.getImageFromData(source_img));
	},

	//given an imagedata it returns a canvas
	getImageFromData: function(data, notUsePool) {
		if(data.getContext || data instanceof Image) {
			return data;
		}
		var sourceCanvas;
		if (!notUsePool) {
			sourceCanvas = this.getNewTmpCanvas(data.width, data.height);
		} else {
			sourceCanvas = $('<canvas/>').attr({
				'width': data.width,
				'height': data.height
			})[0]; //this.getNewTmpCanvas(data.width, data.height);
		}

		var srcCtx = sourceCanvas.getContext('2d');
		srcCtx.putImageData(data, 0, 0);
		return sourceCanvas;
	},

	//given a canvas it returns a ImageData
	getDataFromImage: function(canvas) {
		return canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
	},


	getBoxFromSrcArea: function(src_area) {
		var box = {
			width: src_area.right - src_area.left,
			height: src_area.bottom - src_area.top,
			x: src_area.left,
			y: src_area.top
		};
		return box;
	},

	setBrush: function(clientGui, context, brush, box, ropd) {
		var pattern, imageDescriptor, type, imageData;
		if (brush.type === wdi.SpiceBrushType.SPICE_BRUSH_TYPE_PATTERN) {
			imageDescriptor = brush.pattern.image;
			this.getImageFromSpice(imageDescriptor, brush.pattern.imageData, clientGui, function(sourceImg) {
				pattern = context.createPattern(sourceImg, "repeat");


				if (ropd === wdi.SpiceRopd.SPICE_ROPD_OP_PUT) { //no rop, direct draw
					context.fillStyle = pattern;
					context.fillRect(box.x, box.y, box.width, box.height);
				} else {
					//Creating brushImg to raster
					var tmp_canvas = wdi.graphics.getTmpCanvas(box.width, box.height);
					var tmp_context = tmp_canvas.getContext('2d');
					tmp_context.fillStyle = pattern;
					tmp_context.fillRect(0, 0, box.width, box.height);
					var dest = wdi.graphics.getRect(box, context.canvas);
					imageData = wdi.RasterOperation.process(ropd, tmp_canvas, dest);
					//draw to screen, imageData is a canvas
					context.drawImage(imageData, box.x, box.y, box.width, box.height);
				}
			}, this, {
				'opaque': true
			});

		} else if (brush.type === wdi.SpiceBrushType.SPICE_BRUSH_TYPE_SOLID) {
			if (ropd === wdi.SpiceRopd.SPICE_ROPD_OP_PUT) { //no rop, direct draw
                if(context.fillStyle != brush.color.simple_html_color) {
                    context.fillStyle = brush.color.simple_html_color;
                }
				context.fillRect(box.x, box.y, box.width, box.height);

			} else { //if we need rop, we need intermediate canvas...
				//Creating brushImg to raster
				var tmp_canvas = wdi.graphics.getTmpCanvas(box.width, box.height);
				var tmp_context = tmp_canvas.getContext('2d');
				tmp_context.fillStyle = brush.color.html_color;
				tmp_context.fillRect(0, 0, box.width, box.height);
				var dest = wdi.graphics.getRect(box, context.canvas);
				imageData = wdi.RasterOperation.process(ropd, tmp_canvas, dest);

				//draw to screen, imageData is a canvas
				context.drawImage(imageData, box.x, box.y, box.width, box.height);
			}
		}
	},

    imageIsEntireColor: function(r,g,b, size, data) {
        var pos = 0;
        var equal;

        do {
            equal = data[pos] === r && data[pos+1] === g && data[pos+2] === b;
            pos+= 4;
        } while(pos != size && equal);

        return equal;
    },

	drawBackText: function(clientGui, context, text) {
		var back_brush = text.back_brush;
		var back_mode = text.back_mode;

		var box = wdi.graphics.getBoxFromSrcArea(text.base.box);

		this.setBrush(clientGui, context, back_brush, box, back_mode);
	},

	drawString: function(context, string, bpp, fore_brush, clip_type, display) {
		var color = fore_brush.color;
		var length = string.len;

		var render_pos, glyph_origin;
		var width;
		var height;
		var data;
		var lines;
		var imgData;
		var factor;
		var x;
		var y;
		var i;
		var buf, buf8, rawData;
		var bytesLeft;
		var bytesTotal;
		var subData;

		var rasterArray = string.raster_glyph;
		var currentRaster;

		var rawLine;
		var bitsLeft;
		var byteCounter;
		var alpha;
		var index;

		var box;


		if (bpp === 1) {
			factor = 255;
		} else if (bpp === 4) {
			factor = 17;
		} else {
			factor = 1;
		}

		for (i = 0; i < length; i++) {

			currentRaster = rasterArray[i];
			//Loop for each Glyph
			render_pos = currentRaster.render_pos;
			glyph_origin = currentRaster.glyph_origin;
			width = currentRaster.width;
			height = currentRaster.height;
			data = currentRaster.data;

			lines = height;

			buf = new ArrayBuffer(width * height * 4);
			buf8 = new Uint8ClampedArray(buf);
			rawData = new Uint32Array(buf);

			x = 0;
			y = 0;

			while (lines--) { //glyphline, not text line
				//Loop for each line
				bytesLeft = Math.ceil(width * bpp / 8);
				bytesTotal = bytesLeft;
				subData = [];

				while (bytesTotal--) {
					subData.push(data.pop());
				}

				while (bytesLeft--) {
					rawLine = subData.pop();
					bitsLeft = 8;
					byteCounter = 0;

					while (bitsLeft) {
						alpha = wdi.bppMask[bpp][byteCounter] & rawLine;
						if (bpp === 1 && alpha) {
							alpha = 1;
						} else if (bpp === 4 && alpha && alpha > 15) {
							alpha = alpha >> 4;
						}
						if (alpha) {
							index = (y * width + x);
							rawData[index] = factor * alpha << 24 | // alpha
							color.b << 16 | // blue
							color.g << 8 | // green
							color.r; // red
						}
						bitsLeft -= bpp;
						x++;
						byteCounter++;
					}
				}
				y++;
				x = 0;
			}

			box = {
				'x': render_pos.x + glyph_origin.x,
				'y': render_pos.y + glyph_origin.y - 1,
				'width': width,
				'height': height
			};

			imgData = new ImageData(buf8, width, height);
			var tmpCanvas = wdi.graphics.getImageFromData(imgData);
			display.drawClip(tmpCanvas, box, context);
			wdi.GlobalPool.discard('Canvas', tmpCanvas);

		}
	},

	getImgDataPosition: function(x, y, width) {
		var index = (y * width + x) * 4;
		return index;
	},

	//returns the shared canvas
	getTmpCanvas: function(width, height) {
		var canvas = this.tmpCanvas;
		canvas.width = width;
		canvas.height = height;
		return canvas;
	},

	//return always a new canvas
	getNewTmpCanvas: function(width, height) {
		//pool!
		var sourceCanvas = wdi.GlobalPool.create('Canvas');
		sourceCanvas.width = width;
		sourceCanvas.height = height;
		return sourceCanvas;
	}
}

wdi.Rop3 = {
	0x01: function(pat, src, dest) {
		return~ (pat | src | dest)
	},
	0x02: function(pat, src, dest) {
		return~ (pat | src) & dest
	},
	0x04: function(pat, src, dest) {
		return~ (pat | dest) & src
	},
	0x06: function(pat, src, dest) {
		return~ (~(src ^ dest) | pat)
	},
	0x07: function(pat, src, dest) {
		return~ ((src & dest) | pat)
	},
	0x08: function(pat, src, dest) {
		return~ pat & dest & src
	},
	0x09: function(pat, src, dest) {
		return~ ((src ^ dest) | pat)
	},
	0x0b: function(pat, src, dest) {
		return~ ((~dest & src) | pat)
	},
	0x0d: function(pat, src, dest) {
		return~ ((~src & dest) | pat)
	},
	0x0e: function(pat, src, dest) {
		return~ (~(src | dest) | pat)
	},
	0x10: function(pat, src, dest) {
		return~ (src | dest) & pat
	},
	0x12: function(pat, src, dest) {
		return~ (~(pat ^ dest) | src)
	},
	0x13: function(pat, src, dest) {
		return~ ((pat & dest) | src)
	},
	0x14: function(pat, src, dest) {
		return~ (~(pat ^ src) | dest)
	},
	0x15: function(pat, src, dest) {
		return~ ((pat & src) | dest)
	},
	0x16: function(pat, src, dest) {
		return (~(pat & src) & dest) ^ src ^ pat
	},
	0x17: function(pat, src, dest) {
		return~ (((src ^ dest) & (src ^ pat)) ^ src)
	},
	0x18: function(pat, src, dest) {
		return (src ^ pat) & (pat ^ dest)
	},
	0x19: function(pat, src, dest) {
		return~ ((~(pat & src) & dest) ^ src)
	},
	0x1a: function(pat, src, dest) {
		return ((pat & src) | dest) ^ pat
	},
	0x1b: function(pat, src, dest) {
		return~ (((pat ^ src) & dest) ^ src)
	},
	0x1c: function(pat, src, dest) {
		return ((pat & dest) | src) ^ pat
	},
	0x1d: function(pat, src, dest) {
		return~ (((pat ^ dest) & src) ^ dest)
	},
	0x1e: function(pat, src, dest) {
		return (dest | src) ^ pat
	},
	0x1f: function(pat, src, dest) {
		return~ ((src | dest) & pat)
	},
	0x20: function(pat, src, dest) {
		return~ src & pat & dest
	},
	0x21: function(pat, src, dest) {
		return~ ((pat ^ dest) | src)
	},
	0x23: function(pat, src, dest) {
		return~ ((~dest & pat) | src)
	},
	0x24: function(pat, src, dest) {
		return (src ^ pat) & (dest ^ src)
	},
	0x25: function(pat, src, dest) {
		return~ ((~(src & pat) & dest) ^ pat)
	},
	0x26: function(pat, src, dest) {
		return ((src & pat) | dest) ^ src
	},
	0x27: function(pat, src, dest) {
		return (~(src ^ pat) | dest) ^ src
	},
	0x28: function(pat, src, dest) {
		return (pat ^ src) & dest
	},
	0x29: function(pat, src, dest) {
		return~ (((src & pat) | dest) ^ src ^ pat)
	},
	0x2a: function(pat, src, dest) {
		return~ (src & pat) & dest
	},
	0x2b: function(pat, src, dest) {
		return~ (((pat ^ dest) & (src ^ pat)) ^ src)
	},
	0x2c: function(pat, src, dest) {
		return ((src | dest) & pat) ^ src
	},
	0x2d: function(pat, src, dest) {
		return (~dest | src) ^ pat
	},
	0x2e: function(pat, src, dest) {
		return ((pat ^ dest) | src) ^ pat
	},
	0x2f: function(pat, src, dest) {
		return~ ((~dest | src) & pat)
	},
	0x31: function(pat, src, dest) {
		return~ ((~pat & dest) | src)
	},
	0x32: function(pat, src, dest) {
		return (src | pat | dest) ^ src
	},
	0x34: function(pat, src, dest) {
		return ((src & dest) | pat) ^ src
	},
	0x35: function(pat, src, dest) {
		return (~(src ^ dest) | pat) ^ src
	},
	0x36: function(pat, src, dest) {
		return (pat | dest) ^ src
	},
	0x37: function(pat, src, dest) {
		return~ ((pat | dest) & src)
	},
	0x38: function(pat, src, dest) {
		return ((pat | dest) & src) ^ pat
	},
	0x39: function(pat, src, dest) {
		return (~dest | pat) ^ src
	},
	0x3a: function(pat, src, dest) {
		return ((src ^ dest) | pat) ^ src
	},
	0x3b: function(pat, src, dest) {
		return~ ((~dest | pat) & src)
	},
	0x3d: function(pat, src, dest) {
		return (~(src | dest) | pat) ^ src
	},
	0x3e: function(pat, src, dest) {
		return ((~src & dest) | pat) ^ src
	},
	0x40: function(pat, src, dest) {
		return~ dest & src & pat
	},
	0x41: function(pat, src, dest) {
		return~ ((src ^ pat) | dest)
	},
	0x42: function(pat, src, dest) {
		return (src ^ dest) & (pat ^ dest)
	},
	0x43: function(pat, src, dest) {
		return~ ((~(src & dest) & pat) ^ src)
	},
	0x45: function(pat, src, dest) {
		return~ ((~src & pat) | dest)
	},
	0x46: function(pat, src, dest) {
		return ((dest & pat) | src) ^ dest
	},
	0x47: function(pat, src, dest) {
		return~ (((pat ^ dest) & src) ^ pat)
	},
	0x48: function(pat, src, dest) {
		return (pat ^ dest) & src
	},
	0x49: function(pat, src, dest) {
		return~ (((dest & pat) | src) ^ dest ^ pat)
	},
	0x4a: function(pat, src, dest) {
		return ((dest | src) & pat) ^ dest
	},
	0x4b: function(pat, src, dest) {
		return (~src | dest) ^ pat
	},
	0x4c: function(pat, src, dest) {
		return~ (pat & dest) & src
	},
	0x4d: function(pat, src, dest) {
		return~ (((src ^ dest) | (src ^ pat)) ^ src)
	},
	0x4e: function(pat, src, dest) {
		return ((pat ^ src) | dest) ^ pat
	},
	0x4f: function(pat, src, dest) {
		return~ ((~src | dest) & pat)
	},
	0x51: function(pat, src, dest) {
		return~ ((~pat & src) | dest)
	},
	0x52: function(pat, src, dest) {
		return ((dest & src) | pat) ^ dest
	},
	0x53: function(pat, src, dest) {
		return~ (((src ^ dest) & pat) ^ src)
	},
	0x54: function(pat, src, dest) {
		return~ (~(src | pat) | dest)
	},
	0x56: function(pat, src, dest) {
		return (src | pat) ^ dest
	},
	0x57: function(pat, src, dest) {
		return~ ((src | pat) & dest)
	},
	0x58: function(pat, src, dest) {
		return ((pat | src) & dest) ^ pat
	},
	0x59: function(pat, src, dest) {
		return (~src | pat) ^ dest
	},
	0x5b: function(pat, src, dest) {
		return (~(dest | src) | pat) ^ dest
	},
	0x5c: function(pat, src, dest) {
		return ((dest ^ src) | pat) ^ dest
	},
	0x5d: function(pat, src, dest) {
		return~ ((~src | pat) & dest)
	},
	0x5e: function(pat, src, dest) {
		return ((~dest & src) | pat) ^ dest
	},
	0x60: function(pat, src, dest) {
		return (src ^ dest) & pat
	},
	0x61: function(pat, src, dest) {
		return~ (((src & dest) | pat) ^ src ^ dest)
	},
	0x62: function(pat, src, dest) {
		return ((dest | pat) & src) ^ dest
	},
	0x63: function(pat, src, dest) {
		return (~pat | dest) ^ src
	},
	0x64: function(pat, src, dest) {
		return ((src | pat) & dest) ^ src
	},
	0x65: function(pat, src, dest) {
		return (~pat | src) ^ dest
	},
	0x67: function(pat, src, dest) {
		return (~(src | pat) | dest) ^ src
	},
	0x68: function(pat, src, dest) {
		return~ ((~(src | dest) | pat) ^ src ^ dest)
	},
	0x69: function(pat, src, dest) {
		return~ (src ^ dest ^ pat)
	},
	0x6a: function(pat, src, dest) {
		return (src & pat) ^ dest
	},
	0x6b: function(pat, src, dest) {
		return~ (((src | pat) & dest) ^ src ^ pat)
	},
	0x6c: function(pat, src, dest) {
		return (pat & dest) ^ src
	},
	0x6d: function(pat, src, dest) {
		return~ (((dest | pat) & src) ^ dest ^ pat)
	},
	0x6e: function(pat, src, dest) {
		return ((~src | pat) & dest) ^ src
	},
	0x6f: function(pat, src, dest) {
		return~ (~(src ^ dest) & pat)
	},
	0x70: function(pat, src, dest) {
		return~ (src & dest) & pat
	},
	0x71: function(pat, src, dest) {
		return~ (((dest ^ pat) & (src ^ dest)) ^ src)
	},
	0x72: function(pat, src, dest) {
		return ((src ^ pat) | dest) ^ src
	},
	0x73: function(pat, src, dest) {
		return~ ((~pat | dest) & src)
	},
	0x74: function(pat, src, dest) {
		return ((dest ^ pat) | src) ^ dest
	},
	0x75: function(pat, src, dest) {
		return~ ((~pat | src) & dest)
	},
	0x76: function(pat, src, dest) {
		return ((~src & pat) | dest) ^ src
	},
	0x78: function(pat, src, dest) {
		return (src & dest) ^ pat
	},
	0x79: function(pat, src, dest) {
		return~ (((src | dest) & pat) ^ src ^ dest)
	},
	0x7a: function(pat, src, dest) {
		return ((~dest | src) & pat) ^ dest
	},
	0x7b: function(pat, src, dest) {
		return~ (~(pat ^ dest) & src)
	},
	0x7c: function(pat, src, dest) {
		return ((~src | dest) & pat) ^ src
	},
	0x7d: function(pat, src, dest) {
		return~ (~(src ^ pat) & dest)
	},
	0x7e: function(pat, src, dest) {
		return (src ^ dest) | (pat ^ src)
	},
	0x7f: function(pat, src, dest) {
		return~ (src & pat & dest)
	},
	0x80: function(pat, src, dest) {
		return src & pat & dest
	},
	0x81: function(pat, src, dest) {
		return~ ((src ^ dest) | (pat ^ src))
	},
	0x82: function(pat, src, dest) {
		return~ (src ^ pat) & dest
	},
	0x83: function(pat, src, dest) {
		return~ (((~src | dest) & pat) ^ src)
	},
	0x84: function(pat, src, dest) {
		return~ (pat ^ dest) & src
	},
	0x85: function(pat, src, dest) {
		return~ (((~pat | src) & dest) ^ pat)
	},
	0x86: function(pat, src, dest) {
		return ((src | dest) & pat) ^ src ^ dest
	},
	0x87: function(pat, src, dest) {
		return~ ((src & dest) ^ pat)
	},
	0x89: function(pat, src, dest) {
		return~ (((~src & pat) | dest) ^ src)
	},
	0x8a: function(pat, src, dest) {
		return (~pat | src) & dest
	},
	0x8b: function(pat, src, dest) {
		return~ (((dest ^ pat) | src) ^ dest)
	},
	0x8c: function(pat, src, dest) {
		return (~pat | dest) & src
	},
	0x8d: function(pat, src, dest) {
		return~ (((src ^ pat) | dest) ^ src)
	},
	0x8e: function(pat, src, dest) {
		return ((dest ^ pat) & (dest ^ src)) ^ src
	},
	0x8f: function(pat, src, dest) {
		return~ (~(src & dest) & pat)
	},
	0x90: function(pat, src, dest) {
		return~ (src ^ dest) & pat
	},
	0x91: function(pat, src, dest) {
		return~ (((~src | pat) & dest) ^ src)
	},
	0x92: function(pat, src, dest) {
		return ((pat | dest) & src) ^ pat ^ dest
	},
	0x93: function(pat, src, dest) {
		return~ ((dest & pat) ^ src)
	},
	0x94: function(pat, src, dest) {
		return ((src | pat) & dest) ^ src ^ pat
	},
	0x95: function(pat, src, dest) {
		return~ ((src & pat) ^ dest)
	},
	0x96: function(pat, src, dest) {
		return src ^ pat ^ dest
	},
	0x97: function(pat, src, dest) {
		return (~(src | pat) | dest) ^ src ^ pat
	},
	0x98: function(pat, src, dest) {
		return~ ((~(src | pat) | dest) ^ src)
	},
	0x9a: function(pat, src, dest) {
		return (~src & pat) ^ dest
	},
	0x9b: function(pat, src, dest) {
		return~ (((src | pat) & dest) ^ src)
	},
	0x9c: function(pat, src, dest) {
		return (~dest & pat) ^ src
	},
	0x9d: function(pat, src, dest) {
		return~ (((dest | pat) & src) ^ dest)
	},
	0x9e: function(pat, src, dest) {
		return ((src & dest) | pat) ^ src ^ dest
	},
	0x9f: function(pat, src, dest) {
		return~ ((src ^ dest) & pat)
	},
	0xa1: function(pat, src, dest) {
		return~ (((~pat & src) | dest) ^ pat)
	},
	0xa2: function(pat, src, dest) {
		return (~src | pat) & dest
	},
	0xa3: function(pat, src, dest) {
		return~ (((dest ^ src) | pat) ^ dest)
	},
	0xa4: function(pat, src, dest) {
		return~ ((~(pat | src) | dest) ^ pat)
	},
	0xa6: function(pat, src, dest) {
		return (~pat & src) ^ dest
	},
	0xa7: function(pat, src, dest) {
		return~ (((pat | src) & dest) ^ pat)
	},
	0xa8: function(pat, src, dest) {
		return (src | pat) & dest
	},
	0xa9: function(pat, src, dest) {
		return~ ((src | pat) ^ dest)
	},
	0xab: function(pat, src, dest) {
		return~ (src | pat) | dest
	},
	0xac: function(pat, src, dest) {
		return ((src ^ dest) & pat) ^ src
	},
	0xad: function(pat, src, dest) {
		return~ (((dest & src) | pat) ^ dest)
	},
	0xae: function(pat, src, dest) {
		return (~pat & src) | dest
	},
	0xb0: function(pat, src, dest) {
		return (~src | dest) & pat
	},
	0xb1: function(pat, src, dest) {
		return~ (((pat ^ src) | dest) ^ pat)
	},
	0xb2: function(pat, src, dest) {
		return ((src ^ dest) | (pat ^ src)) ^ src
	},
	0xb3: function(pat, src, dest) {
		return~ (~(pat & dest) & src)
	},
	0xb4: function(pat, src, dest) {
		return (~dest & src) ^ pat
	},
	0xb5: function(pat, src, dest) {
		return~ (((dest | src) & pat) ^ dest)
	},
	0xb6: function(pat, src, dest) {
		return ((pat & dest) | src) ^ pat ^ dest
	},
	0xb7: function(pat, src, dest) {
		return~ ((pat ^ dest) & src)
	},
	0xb8: function(pat, src, dest) {
		return ((dest ^ pat) & src) ^ pat
	},
	0xb9: function(pat, src, dest) {
		return~ (((dest & pat) | src) ^ dest)
	},
	0xba: function(pat, src, dest) {
		return (~src & pat) | dest
	},
	0xbc: function(pat, src, dest) {
		return (~(src & dest) & pat) ^ src
	},
	0xbd: function(pat, src, dest) {
		return~ ((dest ^ pat) & (dest ^ src))
	},
	0xbe: function(pat, src, dest) {
		return (src ^ pat) | dest
	},
	0xbf: function(pat, src, dest) {
		return~ (src & pat) | dest
	},
	0xc1: function(pat, src, dest) {
		return~ (((~src & dest) | pat) ^ src)
	},
	0xc2: function(pat, src, dest) {
		return~ ((~(src | dest) | pat) ^ src)
	},
	0xc4: function(pat, src, dest) {
		return (~dest | pat) & src
	},
	0xc5: function(pat, src, dest) {
		return~ (((src ^ dest) | pat) ^ src)
	},
	0xc6: function(pat, src, dest) {
		return (~pat & dest) ^ src
	},
	0xc7: function(pat, src, dest) {
		return~ (((pat | dest) & src) ^ pat)
	},
	0xc8: function(pat, src, dest) {
		return (pat | dest) & src
	},
	0xc9: function(pat, src, dest) {
		return~ ((dest | pat) ^ src)
	},
	0xca: function(pat, src, dest) {
		return ((dest ^ src) & pat) ^ dest
	},
	0xcb: function(pat, src, dest) {
		return~ (((src & dest) | pat) ^ src)
	},
	0xcd: function(pat, src, dest) {
		return~ (pat | dest) | src
	},
	0xce: function(pat, src, dest) {
		return (~pat & dest) | src
	},
	0xd0: function(pat, src, dest) {
		return (~dest | src) & pat
	},
	0xd1: function(pat, src, dest) {
		return~ (((pat ^ dest) | src) ^ pat)
	},
	0xd2: function(pat, src, dest) {
		return (~src & dest) ^ pat
	},
	0xd3: function(pat, src, dest) {
		return~ (((src | dest) & pat) ^ src)
	},
	0xd4: function(pat, src, dest) {
		return ((dest ^ pat) & (pat ^ src)) ^ src
	},
	0xd5: function(pat, src, dest) {
		return~ (~(src & pat) & dest)
	},
	0xd6: function(pat, src, dest) {
		return ((src & pat) | dest) ^ src ^ pat
	},
	0xd7: function(pat, src, dest) {
		return~ ((src ^ pat) & dest)
	},
	0xd8: function(pat, src, dest) {
		return ((pat ^ src) & dest) ^ pat
	},
	0xd9: function(pat, src, dest) {
		return~ (((src & pat) | dest) ^ src)
	},
	0xda: function(pat, src, dest) {
		return (~(dest & src) & pat) ^ dest
	},
	0xdb: function(pat, src, dest) {
		return~ ((src ^ dest) & (pat ^ src))
	},
	0xdc: function(pat, src, dest) {
		return (~dest & pat) | src
	},
	0xde: function(pat, src, dest) {
		return (pat ^ dest) | src
	},
	0xdf: function(pat, src, dest) {
		return~ (pat & dest) | src
	},
	0xe0: function(pat, src, dest) {
		return (src | dest) & pat
	},
	0xe1: function(pat, src, dest) {
		return~ ((src | dest) ^ pat)
	},
	0xe2: function(pat, src, dest) {
		return ((dest ^ pat) & src) ^ dest
	},
	0xe3: function(pat, src, dest) {
		return~ (((pat & dest) | src) ^ pat)
	},
	0xe4: function(pat, src, dest) {
		return ((src ^ pat) & dest) ^ src
	},
	0xe5: function(pat, src, dest) {
		return~ (((pat & src) | dest) ^ pat)
	},
	0xe6: function(pat, src, dest) {
		return (~(src & pat) & dest) ^ src
	},
	0xe7: function(pat, src, dest) {
		return~ ((dest ^ pat) & (pat ^ src))
	},
	0xe8: function(pat, src, dest) {
		return ((src ^ dest) & (pat ^ src)) ^ src
	},
	0xe9: function(pat, src, dest) {
		return~ ((~(src & dest) & pat) ^ src ^ dest)
	},
	0xea: function(pat, src, dest) {
		return (src & pat) | dest
	},
	0xeb: function(pat, src, dest) {
		return~ (src ^ pat) | dest
	},
	0xec: function(pat, src, dest) {
		return (pat & dest) | src
	},
	0xed: function(pat, src, dest) {
		return~ (pat ^ dest) | src
	},
	0xef: function(pat, src, dest) {
		return~ pat | dest | src
	},
	0xf1: function(pat, src, dest) {
		return~ (src | dest) | pat
	},
	0xf2: function(pat, src, dest) {
		return (~src & dest) | pat
	},
	0xf4: function(pat, src, dest) {
		return (~dest & src) | pat
	},
	0xf6: function(pat, src, dest) {
		return (src ^ dest) | pat
	},
	0xf7: function(pat, src, dest) {
		return~ (src & dest) | pat
	},
	0xf8: function(pat, src, dest) {
		return (src & dest) | pat
	},
	0xf9: function(pat, src, dest) {
		return~ (src ^ dest) | pat
	},
	0xfb: function(pat, src, dest) {
		return~ src | pat | dest
	},
	0xfd: function(pat, src, dest) {
		return~ dest | src | pat
	},
	0xfe: function(pat, src, dest) {
		return src | pat | dest
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

Uint8Array.prototype.toJSArray = function() {
    if(this.length == 1) {
        return [this[0]];
    }

    var len = this.length;
    var arr = new Array(len);

    for(var i=0;i<len;i++) {
        arr[i] = this[i];
    }
    return arr;
}

wdi.FixedQueue = $.spcExtend(wdi.DomainObject, {
	q: null,
	size: 1024*1024*10,
    grow: 1024*1024*10,
	woffset: 0,
    roffset: 0,

	init: function(c) {
		this.q = new Uint8Array(this.size);
	},

    setData: function(q) {
        this.woffset = q.length;
        this.roffset = 0;
        this.q.set(q);
    },

	shift: function(elements) {
        if(this.roffset + elements > this.woffset) {
            throw "Not enough queue to read";
        }
        var toreturn = this.q.subarray(this.roffset, this.roffset + elements);
        this.roffset = this.roffset + elements;
        if(this.woffset == this.roffset) {
            this.woffset = 0;
            this.roffset = 0;
        }
		return toreturn;
	},

	push: function(collection) {
        if(this.woffset + collection.byteLength > this.size) {
            //we need to make the queue bigger...
            var oldq = this.q;
            this.size += this.grow;
            this.q = new Uint8Array(this.size);
            this.q.set(oldq);
        }
        this.q.set(collection, this.woffset);
        this.woffset += collection.byteLength;
	},

	getLength: function() {
		return this.woffset-this.roffset;
	}
});


wdi.Queue = $.spcExtend(wdi.DomainObject, {
	q: null,
    raw: false,
	
	init: function(c) {
        if(c.raw) {
            this.raw = c.raw;
        }
		this.q = new Uint8Array(0);
	},
	
	getData: function() {
		return this.toJSArray(this.q);
	},
	
	setData: function(q) {
        this.q = new Uint8Array(q.length);
		this.q.set(q);
	},
	
	shift: function() {
		var elements = arguments[0] || this.getLength();

		if (elements === this.q.length) {
			var toreturn = this.q;
			this.q = new Uint8Array(0);
		} else {
			var toreturn = this.q.subarray(0, elements);
			this.q = this.q.subarray(elements);
		}

        return this.toJSArray(toreturn)
	},
	
	peek: function(begin, end) {
        var tmp = null;
        if(begin == 0 && !end) {
            tmp = this.q; //read the entire queue
        } else {
            tmp = this.q.subarray(begin, end);
        }
		return this.toJSArray(tmp);
	},
	
	push: function(collection) {
		if (typeof collection == 'string') {
            var len = collection.length;
            var newq = new Uint8Array(this.q.length+len);
            newq.set(this.q);
            for(var i=0;i<len;i++) {
                newq[i+this.q.length] = collection[i];
            }
            this.q = newq;
		} else {
			if(this.getLength() === 0) {
				this.q = new Uint8Array(collection.length);
                this.q.set(collection);
			} else {
                var newq = new Uint8Array(collection.length+this.q.length);
                newq.set(this.q);
                newq.set(collection, this.q.length);
				this.q = newq;
			}
		}
	},
	
	getLength: function() {
		return this.q.length;
	},

    toJSArray: function(data) {
        if(this.raw) {
            return data;
        }

        return data.toJSArray();
    }
});

wdi.ViewQueue = $.spcExtend(wdi.DomainObject, {
	q: null,
	at: null,
	
	init: function() {
		this.q = new Uint8Array();
		this.at = 0;
	},
	
	getData: function() {
		return this.toJSArray(this.q.subarray(this.at));
	},

    getDataOffset: function(pos) {
   		return this.toJSArray(this.q.subarray(pos));
   	},

    getRawData: function() {
   		return this.q.subarray(this.at);
   	},

    getRawDataOffset: function(pos) {
        return this.q.subarray(pos);
    },
	
	setData: function(q) {
		this.q = new Uint8Array(q.length);
        this.q.set(q);
		this.at = 0;
	},
	
	shift: function(length) {
		var elements = length || this.getLength();
		if(elements > this.getLength()) {
			elements = this.getLength();
		}
		var ret = this.q.subarray(0+this.at, elements+this.at);
		this.at += elements;
		return this.toJSArray(ret);
	},

    eatBytes: function(bytes) {
        this.at += bytes;
    },

    getByte: function(pos) {
        return this.q[pos+this.at];
    },
	
	peek: function(begin, end) {
        var tmp = null;
        if(begin == 0 && !end) {
            tmp = this.q; //read the entire queue
        } else {
            if(end) {
                end += this.at;
            }
            tmp = this.q.subarray(begin+this.at, end);
        }
		return this.toJSArray(tmp);
	},
	
    push: function(collection) {
   		if (typeof collection == 'string') {
               var len = collection.length;
               var newq = new Uint8Array(this.q.length+len);
               newq.set(this.q);
               for(var i=0;i<len;i++) {
                   newq[i+this.q.length] = collection[i];
               }
               this.q = newq;
   		} else {
   			if(this.getLength() === 0) {
   				this.q = new Uint8Array(collection.length);
                   this.q.set(collection);
   			} else {
               var newq = new Uint8Array(collection.length+this.q.length);
               newq.set(this.q);
               newq.set(collection, this.q.length);
   				this.q = newq;
   			}
   		}
   	},
	
	getLength: function() {
		return this.q.length-this.at;
	},

	getPosition: function() {
		return this.at;
	},
    toJSArray: function(data) {
        if(data.length == 1) {
            return [data[0]];
        }
        return data.toJSArray();
    }
});

/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.ImageUncompressor = $.spcExtend(wdi.EventObject.prototype, {
	init: function (c) {
		this.syncAsyncHandler = c.syncAsyncHandler || new wdi.SyncAsyncHandler({
			isAsync: c.isAsync
		});
	},

	lzHeaderSize: 32,

	extractLzHeader: function (imageData, brush) {
		var headerData, header;
		if (!brush) { //brushes are still js arrays
			if (Object.prototype.toString.call(imageData) === "[object Array]") {
				headerData = imageData.slice(0, this.lzHeaderSize);
				imageData = imageData.slice(this.lzHeaderSize); //skip the header
			} else {
				headerData = imageData.subarray(0, this.lzHeaderSize).toJSArray();
				imageData = imageData.subarray(this.lzHeaderSize); //skip the header
			}
			header = wdi.LZSS.demarshall_rgb(headerData);
		} else {
			header = wdi.LZSS.demarshall_rgb(imageData);
		}

		return {
			header: header,
			imageData: imageData
		};
	},

	processLz: function (imageData, brush, opaque, clientGui, callback, scope) {
		var extractedData, u8, buffer, number, context;

		extractedData = this.extractLzHeader(imageData, brush);
		imageData = extractedData.imageData;
		number = extractedData.header.width * extractedData.header.height * 4;

		buffer = new ArrayBuffer(imageData.length + 16);
		u8 = new Uint8Array(buffer);

		u8[0] = 1; //LZ_RGB
		u8[1] = opaque;
		u8[2] = extractedData.header.type;
		u8[3] = extractedData.header.top_down; //padding

		for (var i = 0; i < 4; i++) { //iterations because of javascript number size
			u8[4 + i] = number & (255); //Get only the last byte
			number = number >> 8; //Remove the last byte
		}

		var view = new DataView(buffer);
		view.setUint32(8, extractedData.header.width);
		view.setUint32(12, extractedData.header.height);

		u8.set(imageData, 16);

		this.syncAsyncHandler.dispatch(buffer, callback, scope);
	},

	processQuic: function (imageData, opaque, clientGui, callback, scope) {
		wdi.Debug.log('Quic decode');
		buffer = new ArrayBuffer(imageData.length + 4);
		view = new Uint8Array(buffer);

		view.set(imageData, 4);
		view[3] = opaque ? 1 : 0;
		view[0] = 0; //quic

		this.syncAsyncHandler.dispatch(buffer, callback, scope);
	},

	process: function (imageDescriptor, imageData, brush, opaque, clientGui, callback, scope) {
		switch(imageDescriptor.type) {
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_QUIC:
				this.processQuic(imageData, opaque, clientGui, callback, scope);
				break;
			case wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_RGB:
				this.processLz(imageData, brush, opaque, clientGui, callback, scope);
				break;
		}
	},

	dispose: function () {
		this.syncAsyncHandler.dispose();
	}
});

var syncInstance;
var asyncInstance;

wdi.ImageUncompressor.getSyncInstance = function () {
	if (!syncInstance) {
		syncInstance = new wdi.ImageUncompressor({
			isAsync: false
		});
	}

	return syncInstance;
};

wdi.ImageUncompressor.getAsyncInstance = function () {
	if (!asyncInstance) {
		asyncInstance = new wdi.ImageUncompressor({
			isAsync: true
		});
	}

	return asyncInstance;
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.SyncAsyncHandler = $.spcExtend(wdi.EventObject.prototype, {
	init: function (c) {
		this.isAsync = !!c.isAsync;
		if (this.isAsync) {
			this.asyncWorker = c.asyncWorker || new wdi.AsyncWorker({script:'application/WorkerProcess.js'});
		}
	},

	isAsync: null,

	dispatch: function(buffer, callback, scope) {
		if (this.isAsync) {
			this.asyncWorker.run(buffer, callback, scope);
		} else {
			var result = window['workerDispatch'](buffer, this.isAsync);
			callback.call(scope, result);
		}
	},

	dispose: function () {
		if (this.isAsync) {
			this.asyncWorker.dispose();
		}
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.IntegrationBenchmark = {
    benchmarking: false,
	startTime: 0,
    timeoutInterval: 3000,  // in ms, amount of time after it will be considered that
                            // we have received all packets and can stop counting
    timeOutId: undefined,

    busConnection: undefined,

    setEndTime: function() {
        var self = this;
        this.timeOutId = setTimeout(function() {
            // if 3000 ms have passed since the last packet we assume we have processed them all and can launch MS Word
            self.timeOutId = undefined;
            self.benchmarking = false;
            var now = new Date().getTime();
            var elapsed = now - self.startTime - self.timeoutInterval;
            self.onEndBenchmarkCallback(elapsed);
            var message = {
                "type": wdi.BUS_TYPES.killApplicationDoNotUseInProductionEver,
                "application": "EXCEL.EXE"
            };
            self.busConnection.send(message);
        }, this.timeoutInterval);
    },

    setStartTime: function() {
        if (this.timeOutId !== undefined) {
            clearTimeout(this.timeOutId);
        }
    },

    launchApp: function(busConnection, onEndBenchmarkCallback) {
        this.busConnection = busConnection;
        wdi.IntegrationBenchmark.benchmarking = true;
        wdi.IntegrationBenchmark.setStartTime();
        this.onEndBenchmarkCallback = onEndBenchmarkCallback;
        this.startTime = new Date().getTime();
        var message = {
            "type": wdi.BUS_TYPES.launchApplication,
            "file": "c:\\Users\\eyeos\\Desktop\\test.xlsx"
        };
        this.busConnection.send(message);
    }
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.StuckKeysHandler = $.spcExtend(wdi.EventObject.prototype, {
	ctrlTimeoutId: null,
	altTimeoutId: null,
	shiftTimeoutId: null,
	shiftKeyPressed: false,
	ctrlKeyPressed: false,
	altKeyPressed: false,

	handleStuckKeys: function (jqueryEvent) {
		if (jqueryEvent) {
			switch (jqueryEvent.keyCode) {
				case 16:
					this._handleKey('shiftTimeoutId', jqueryEvent.type, 16);
					break;
				case 17:
					this._handleKey('ctrlTimeoutId', jqueryEvent.type, 17);
					break;
				case 18:
					this._handleKey('altTimeoutId', jqueryEvent.type, 18);
					break;
			}
		}
	},

	releaseAllKeys: function releaseAllKeys () {
		var e;
		var i;
		for (i = 0; i < 300; i++) {
			this.releaseKeyPressed(i);
		}
	},

	_handleKey: function (variable, type, keyCode) {
		if (type === 'keydown') {
			this[variable] = this._configureTimeout(keyCode);
		} else if (type === 'keyup') {
			clearTimeout(this[variable]);
		}
	},

	_configureTimeout: function (keyCode) {
		var self = this;
		return setTimeout(function keyPressedTimeout () {
			// added the 'window' for the jQuery call for testing.
			self.releaseKeyPressed(keyCode);
		}, wdi.StuckKeysHandler.defaultTimeout);
	},

	releaseKeyPressed: function (keyCode) {
		var e = window.jQuery.Event("keyup");
		e["which"] = keyCode;
		e["keyCode"] = keyCode;
		e["charCode"] = 0;
		e["generated"] = true;
		this.fire('inputStuck', ['keyup', [e]]);
	},

	checkSpecialKey: function (event, keyCode) {
		switch (keyCode) {
			case 16:
				this.shiftKeyPressed = event === 'keydown';
				break;
			case 17:
				this.ctrlKeyPressed = event === 'keydown';
				break;
			case 18:
				this.altKeyPressed = event === 'keydown';
				break;
		}
	},

	releaseSpecialKeysPressed: function () {
		if (this.shiftKeyPressed) {
			this.releaseKeyPressed(16);
			this.shiftKeyPressed = false;
		}
		if (this.ctrlKeyPressed) {
			this.releaseKeyPressed(17);
			this.ctrlKeyPressed = false;
		}
		if (this.altKeyPressed) {
			this.releaseKeyPressed(18);
			this.altKeyPressed = false;
		}
	}


});

wdi.StuckKeysHandler.defaultTimeout = 2000;
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */


wdi.TimeLapseDetector = $.spcExtend(wdi.EventObject.prototype, {
	lastTime: null,

	init: function timeLapseDetector_Init (c) {
		this.superInit();
	},

	startTimer: function timeLapseDetector_startTimer () {
		var self = this;
		this.lastTime = Date.now();

		window.setInterval(
			function timeLapseDetectorInterval () {
				var now = Date.now();
				// this.constructor == access to the class itself, so you
				// can access to static properties without writing/knowing
				// the class name
				var elapsed = now - self.lastTime;
				if (elapsed >= self.constructor.maxIntervalAllowed) {
					self.fire('timeLapseDetected', elapsed);
				}
				self.lastTime = now;
			},
			wdi.TimeLapseDetector.defaultInterval
		);
	},

	getLastTime: function timeLapseDetector_getLastTime () {
		return this.lastTime;
	},

	setLastTime: function timeLapseDetector_setLastTime (lastTime) {
		this.lastTime = lastTime;
		return this;
	}
});

wdi.TimeLapseDetector.defaultInterval = 5000;
wdi.TimeLapseDetector.maxIntervalAllowed = wdi.TimeLapseDetector.defaultInterval * 3;
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.DisplayRouter = $.spcExtend(wdi.EventObject.prototype, {

	init: function(c) {
		this.clientGui = c.clientGui;
		this.rasterEngine = c.rasterEngine || new wdi.RasterEngine({clientGui: this.clientGui});
		if(c.routeList) {
			this.routeList = c.routeList;
		} else {
			this._initRoutes();
		}

	},

	_initRoutes: function() {
		this.routeList = {};
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_SURFACE_CREATE] = this.rasterEngine.drawCanvas;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_SURFACE_DESTROY] = this.rasterEngine.removeCanvas;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_COPY] = this.rasterEngine.drawImage;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_FILL] = this.rasterEngine.drawFill;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND] = this.rasterEngine.drawAlphaBlend;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_WHITENESS] = this.rasterEngine.drawWhiteness;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLACKNESS] = this.rasterEngine.drawBlackness;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TRANSPARENT] = this.rasterEngine.drawTransparent;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_COPY_BITS] = this.rasterEngine.drawCopyBits;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TEXT] = this.rasterEngine.drawText;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_STROKE] = this.rasterEngine.drawStroke;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ROP3] = this.rasterEngine.drawRop3;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_INVERS] = this.rasterEngine.drawInvers;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_CREATE] = this.rasterEngine.handleStreamCreate;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DESTROY] = this.rasterEngine.handleStreamDestroy;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DATA] = this.rasterEngine.handleStreamData;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_CLIP] = this.rasterEngine.handleStreamClip;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLEND] = this.rasterEngine.drawBlend;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_LIST] = this.rasterEngine.invalList;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_ALL_PALETTES] = this.rasterEngine.invalPalettes;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_MARK] = false;
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_RESET] = false;
	},

	processPacket: function(spiceMessage) {
		//filter out empty messages
		if(!spiceMessage) {
			wdi.Debug.log('DisplayProcess processPacket: Skipping empty message...');
			return;
		}

		var route = this.routeList[spiceMessage.messageType];
		if (route) {
			route.call(this.rasterEngine, spiceMessage);
		}
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.RasterEngine = $.spcExtend(wdi.EventObject.prototype, {
	init: function(c) {
		this.clientGui = c.clientGui;
	},

	drawCanvas: function(spiceMessage) {
		return this.clientGui.drawCanvas(spiceMessage);
	},

	removeCanvas: function(spiceMessage) {
		return this.clientGui.removeCanvas(spiceMessage);
	},

	invalList: function(spiceMessage) {
		var items = spiceMessage.args.items;
		var item = null;
		for(var i in items) {
			item = items[i];
			wdi.ImageCache.delImage(item.id);
		}
	},

	handleStreamCreate: function(spiceMessage) {
		var stream = spiceMessage.args;
		stream.computedBox = wdi.graphics.getBoxFromSrcArea(stream.rect);
		wdi.Stream.addStream(spiceMessage.args.id, stream);
	},

	handleStreamData: function(spiceMessage) {
		var imageData = spiceMessage.args.data; //jpeg string encoded
		var stream = wdi.Stream.getStream(spiceMessage.args.id); //recover the stream
		var context = this.clientGui.getContext(stream.surface_id);
		var img = wdi.GlobalPool.create('Image'); //auto-release pool
		wdi.ExecutionControl.sync = true;
		var url;
		img.onload = function() {
			URL.revokeObjectURL(url);
			var box = stream.computedBox;
			// we only rotate the stream if spice tells us so through the TOP_DOWN flag mask
			if (!stream.flags & wdi.SpiceStreamFlags.SPICE_STREAM_FLAGS_TOP_DOWN) {
				var offsetX = box.x + (this.width/2);
				var offsetY = box.y + (this.height/2);
				context.save();
				context.translate(offsetX, offsetY);
				context.rotate(Math.PI);
				context.scale(-1,1);
				context.drawImage(this, box.x-offsetX, box.y-offsetY, box.width, box.height);
				context.restore();
			} else {
				context.drawImage(this, box.x, box.y, box.width, box.height);
			}
		};

		img.onerror = function() {
			URL.revokeObjectURL(url)
		};

		url = wdi.SpiceObject.bytesToURI(imageData);
		img.src = url;
	},

	handleStreamClip: function(spiceMessage) {
		wdi.Stream.clip(spiceMessage.args.id, spiceMessage.args.clip)
	},

	handleStreamDestroy: function(spiceMessage) {
		wdi.Stream.deleteStream(spiceMessage.args.id);
	},

	drawRop3: function(spiceMessage) {
		var box = wdi.graphics.getBoxFromSrcArea(spiceMessage.args.base.box);
		var context = this.clientGui.getContext(spiceMessage.args.base.surface_id);
		var destImg = context.getImageData(box.x, box.y, box.width, box.height);
		var clientGui = this.clientGui;

		var brush = spiceMessage.args.brush;
		var rop = spiceMessage.args.rop_descriptor;

		var srcArea = wdi.graphics.getBoxFromSrcArea(spiceMessage.args.src_area);
		wdi.graphics.getImageFromSpice(spiceMessage.args.src_image.imageDescriptor, spiceMessage.args.src_image.data, this.clientGui, function (sourceCanvas) {
			if (sourceCanvas) {
				//Get source image data (image coming from the packet)
				var sourceContext = sourceCanvas.getContext('2d');
				var srcImg = sourceContext.getImageData(srcArea.x, srcArea.y, srcArea.width, srcArea.height);
				var srcImgData = srcImg.data; //this

				//Get pattern image data
				//brush
				var tmpcanvas = wdi.graphics.getNewTmpCanvas(box.width, box.height);
				var tmpcontext = tmpcanvas.getContext('2d');
				var brushBox = {
					width: box.width,
					height: box.height,
					x: 0,
					y: 0
				};
				wdi.graphics.setBrush(clientGui, tmpcontext, brush, brushBox, wdi.SpiceRopd.SPICE_ROPD_OP_PUT);//Without alpha?
				var pattern = tmpcontext.getImageData(0, 0, box.width, box.height);
				var patImgData = pattern.data; //this

				//Get dest image data
				var destImgData = destImg.data;

				//Get result image data
				tmpcanvas = wdi.graphics.getNewTmpCanvas(box.width, box.height);
				tmpcontext = tmpcanvas.getContext('2d');
				var result = tmpcontext.createImageData(box.width, box.height);
				var resultData = result.data;

				if ((srcImg.width != pattern.width || srcImg.width != destImg.width) || (srcImg.height != pattern.height || srcImg.height != destImg.height)) {
					//TODO: resize
				}

				//Do the Ternary Raster Operation
				var length = destImgData.length;//Could be anyone
				var func = wdi.Rop3[rop];
				for (var i = 0;i<length;i+=4) {
					resultData[i] = func(patImgData[i], srcImgData[i], destImgData[i]) & 255;
					resultData[i+1] = func(patImgData[i+1], srcImgData[i+1], destImgData[i+1]) & 255;
					resultData[i+2] = func(patImgData[i+2], srcImgData[i+2], destImgData[i+2]) & 255;
					resultData[i+3] = 255;
				}

				tmpcontext.putImageData(result, 0, 0);

				this.drawClip(tmpcanvas, box, context);
			} else {
				wdi.Debug.log('Unable to get image!');
			}
		}, this);
	},

	drawInvers: function(spiceMessage) {
		var drawBase = spiceMessage.args.base;
		var box = wdi.graphics.getBoxFromSrcArea(drawBase.box);

		var surface_id = drawBase.surface_id;

		var context = this.clientGui.getContext(surface_id);

		var destImg = wdi.graphics.getRect(box, context.canvas);
		var imageData = wdi.RasterOperation.process(wdi.SpiceRopd.SPICE_ROPD_OP_INVERS, null, destImg);//this operation modifies destination

		context.drawImage(imageData, box.x, box.y, box.width, box.height);
	},

	drawStroke: function(spiceMessage) {
		var stroke = spiceMessage.args,
			context = this.clientGui.getContext(spiceMessage.args.base.surface_id),
			color = stroke.brush.color.html_color,
			lineWidth = 1,
			pointsLength,
			firstPoint,
			i,
			j,
			length = stroke.path.num_segments,
			seg;

		if (stroke.attr.flags & wdi.SpiceLineFlags.SPICE_LINE_FLAGS_STYLED) {
			wdi.Debug.log('SPICE_LINE_FLAGS_STYLED');
		}

		for (var i = 0;i < length; i++) {
			seg = stroke.path.segments[i];

			if (seg.flags & wdi.SpicePathFlags.SPICE_PATH_BEGIN) {
				context.beginPath();
				context.moveTo(seg.points[0].x, seg.points[0].y);
				context.strokeStyle = color;
				context.lineWidth = lineWidth;
			}
			if (seg.flags & wdi.SpicePathFlags.SPICE_PATH_BEZIER) {
				pointsLength = seg.points.length;
				if (pointsLength % 3 == 0) {
					for (j = 0; j < pointsLength; j += 3) {
						context.bezierCurveTo(
							seg.points[j].x, seg.points[j].y,
							seg.points[j+1].x, seg.points[j+1].y,
							seg.points[j+2].x, seg.points[j+2].y
						);
					}
				}
			} else {
				pointsLength = seg.points.length;

				for (j = 0; j < pointsLength; j++) {
					if (j == 0) firstPoint = seg.points[j];
					context.lineTo(seg.points[j].x + (lineWidth / 2), seg.points[j].y + (lineWidth / 2));
				}
			}
			if (seg.flags & wdi.SpicePathFlags.SPICE_PATH_END) {
				if (seg.flags & wdi.SpicePathFlags.SPICE_PATH_CLOSE) {
					context.lineTo(firstPoint.x + (lineWidth / 2), firstPoint.y + (lineWidth / 2));
				}
				context.stroke();
				context.closePath();
			}
		}
	},

	drawImage: function(spiceMessage) {
		var args = spiceMessage.args;
		var drawBase = args.base;
		var surface_id = drawBase.surface_id;
		var rop = args.rop_descriptor;

		var scale = args.scale_mode;


		//calculate src_area box
		var box_origin = wdi.graphics.getBoxFromSrcArea(args.src_area);

		var box_dest = wdi.graphics.getBoxFromSrcArea(drawBase.box);

		//depending on the rop, we can avoid to get destImg
		if (rop === wdi.SpiceRopd.SPICE_ROPD_OP_PUT) {
			var destImg = null;
		} else {
			//get the destination image, there is a ROP
			var destImg = wdi.graphics.getRect(box_dest, this.clientGui.getCanvas(surface_id));
		}

		if (window.vdiLoadTest && window.firstImage === undefined) {
			window.firstImage = true;
		}

		//get the image in imagedata format
		wdi.graphics.getImageFromSpice(args.image.imageDescriptor, args.image.data, this.clientGui, function(srcImg) {
			//we have image?
			if(srcImg) {
				if (window.firstImage) {
					var data;
					if(srcImg.getContext) {
						data = srcImg.getContext('2d').getImageData(0, 0, srcImg.width, srcImg.height).data.buffer.slice(0)
					} else {
						data = srcImg.data.buffer.slice(0);
					}
					window.firstImageData = data;
					window.firstImage = false;
				}

				//adapt to src_area
				srcImg = wdi.graphics.getRect(box_origin, srcImg);
				if(box_origin.width !== box_dest.width && box_origin.height !== box_dest.height) {
					srcImg = wdi.graphics.getImageFromData(srcImg);
					var newSrcImg = wdi.graphics.getNewTmpCanvas(box_dest.width, box_dest.height);
					var tmpcontext = newSrcImg.getContext('2d');
					tmpcontext.drawImage(srcImg, 0, 0, box_origin.width, box_origin.height, 0, 0, box_dest.width, box_dest.height);
					srcImg = newSrcImg;
				}

				//rop
				srcImg = wdi.RasterOperation.process(rop, srcImg, destImg);

				var context = this.clientGui.getContext(surface_id);

				//TODO: swcanvas do not support clipping
				if(args.base.clip.type === wdi.SpiceClipType.SPICE_CLIP_TYPE_RECTS) {
					srcImg = wdi.graphics.getImageFromData(srcImg);
				}

				if(srcImg instanceof ImageData) {
					context.putImageData(srcImg, box_dest.x, box_dest.y, 0, 0, box_dest.width, box_dest.height);
				} else {
					context.drawImage(srcImg, box_dest.x, box_dest.y, box_dest.width, box_dest.height);
				}

			} else {
				//failed to get image, cache error?
				wdi.Debug.log('Unable to get image!');
			}
		}, this, {'opaque':true, 'brush': args.brush, 'raw': false});
	},

	drawClip: function(srcImg, box, context) {
		context.drawImage(srcImg, box.x, box.y, box.width, box.height);
	},

	drawFill: function(spiceMessage) {
		var args = spiceMessage.args;
		var context = this.clientGui.getContext(args.base.surface_id);
		var box = wdi.graphics.getBoxFromSrcArea(args.base.box);
		var brush = args.brush;
		var ropd = args.rop_descriptor;

		wdi.graphics.setBrush(this.clientGui, context, brush, box, ropd);
	},

	drawCopyBits: function(spiceMessage) {
		var drawBase = spiceMessage.args.base;
		var surface_id = drawBase.surface_id;
		var src_position = spiceMessage.args.src_position;
		var context = this.clientGui.getContext(surface_id);
		var box = drawBase.box;

		var width = box.right - box.left;
		var height = box.bottom - box.top;

		context.drawImage(context.canvas, src_position.x, src_position.y, width,
			height, drawBase.box.left, drawBase.box.top, width, height);
	},

	drawBlend: function(spiceMessage) {
		//TODO: alpha_flags
		//TODO: resize
		var descriptor = spiceMessage.args.image.imageDescriptor;
		var drawBase = spiceMessage.args.base;
		var imgData = spiceMessage.args.image.data;
		var surface_id = spiceMessage.args.base.surface_id;
		var rop_desc = spiceMessage.args.rop_descriptor;
		var flags = spiceMessage.args.flags;

		wdi.graphics.getImageFromSpice(descriptor, imgData, this.clientGui, function(srcImg) {
			if (!srcImg) {
				wdi.Debug.log('There is no image on Blend');
				return;
			}

			//get box from src area
			var box = wdi.graphics.getBoxFromSrcArea(spiceMessage.args.src_area);

			//adapt to src_area
			srcImg = wdi.graphics.getRect(box, srcImg);

			//destination box
			var dest_box = wdi.graphics.getBoxFromSrcArea(drawBase.box);
			var destImg = wdi.graphics.getRect(dest_box, this.clientGui.getCanvas(surface_id));

			var result = wdi.RasterOperation.process(rop_desc, srcImg, destImg);

			this.clientGui.getCanvas(surface_id).getContext('2d').drawImage(result, dest_box.x, dest_box.y, dest_box.width, dest_box.height);
		}, this);
	},

	drawAlphaBlend: function(spiceMessage) {

		//TODO: alpha_flags
		//TODO: resize

		var descriptor = spiceMessage.args.image.imageDescriptor;
		var drawBase = spiceMessage.args.base;
		var imgData = spiceMessage.args.image.data;
		var surface_id = spiceMessage.args.base.surface_id;
		var flags = spiceMessage.args.alpha_flags;
		var alpha = spiceMessage.args.alpha;

		wdi.graphics.getImageFromSpice(descriptor, imgData, this.clientGui, function(srcImg) {
			if (!srcImg) {
				wdi.Debug.log('There is no image on drawAlphaBlend');
			}

			var box = wdi.graphics.getBoxFromSrcArea(spiceMessage.args.src_area);

			//adapt to src_area
			srcImg = wdi.graphics.getRect(box, srcImg);


			//destination box
			var box_dest = wdi.graphics.getBoxFromSrcArea(drawBase.box);
			var destImg = wdi.graphics.getRect(box_dest, this.clientGui.getCanvas(surface_id));

			if(box.width !== box_dest.width && box.height !== box_dest.height) {
				var tmpcanvas = wdi.graphics.getNewTmpCanvas(box_dest.width, box_dest.height);
				var tmpcontext = tmpcanvas.getContext('2d');
				tmpcontext.drawImage(srcImg, 0, 0, box.width, box.height, 0, 0, box_dest.width, box_dest.height);
				srcImg = tmpcanvas;
			}

			var src = wdi.graphics.getDataFromImage(srcImg).data;
			var dst = wdi.graphics.getDataFromImage(destImg).data;

			var length = src.length-1;

			//create a new imagedata to store result
			var imageResult = wdi.graphics.getNewTmpCanvas(box_dest.width, box_dest.height);
			var context = imageResult.getContext('2d');

			var resultImageData = context.createImageData(box_dest.width, box_dest.height);
			var result = resultImageData.data;

			var rS, rD;
			var gS, gD;
			var bS, bD;
			var aS;

			for (var px=0;px<length;px+=4) {
				rS = src[px];
				gS = src[px+1];
				bS = src[px+2];

				if(flags || alpha === 255) {
					aS = src[px+3];
				} else {
					aS = alpha;
				}

				rD = dst[px];
				gD = dst[px+1];
				bD = dst[px+2];

				if(aS > 30 && alpha === 255) {
					//formula from reactos, this is premultiplied alpha values
					result[px] = ((rD * (255 - aS)) / 255 + rS) & 0xff;
					result[px+1] = ((gD * (255 - aS)) / 255 + gS) & 0xff;
					result[px+2] = ((bD * (255 - aS)) / 255 + bS) & 0xff;
				} else {
					//homemade blend function, this is the typical blend function simplified
					result[px] = (( (rS*aS)+(rD*(255-aS)) ) / 255) & 0xff;
					result[px+1] = (( (gS*aS)+(gD*(255-aS)) ) / 255) & 0xff;
					result[px+2] = (( (bS*aS)+(bD*(255-aS)) ) / 255) & 0xff;
				}

				result[px+3] = 255;
			}
			imageResult.getContext('2d').putImageData(resultImageData, 0, 0);

			this.drawClip(imageResult, box_dest, this.clientGui.getContext(surface_id));
		}, this);
	},

	drawWhiteness: function(spiceMessage) {
		//TODO: mask
		var base = spiceMessage.args.base;
		var context = this.clientGui.getContext(base.surface_id);
		var box = wdi.graphics.getBoxFromSrcArea(base.box);
		context.fillStyle = "white";
		context.fillRect(box.x, box.y, box.width, box.height);
	},

	drawBlackness: function(spiceMessage) {
		//TODO: mask
		var base = spiceMessage.args.base;
		var context = this.clientGui.getContext(base.surface_id);
		var box = wdi.graphics.getBoxFromSrcArea(base.box);
		context.fillStyle = "black";
		context.fillRect(box.x, box.y, box.width, box.height);
	},

	drawTransparent: function(spiceMessage) {
		var drawBase = spiceMessage.args.base;
		var surface_id = drawBase.surface_id;

		//calculate src_area box
		var box = wdi.graphics.getBoxFromSrcArea(spiceMessage.args.src_area);
		var dest_box = wdi.graphics.getBoxFromSrcArea(drawBase.box);

		//get destination iamge, in imagedata format because is what we need
		var destImg = this.clientGui.getContext(surface_id).getImageData(dest_box.x, dest_box.y,
			dest_box.width, dest_box.height);

		wdi.graphics.getImageFromSpice(spiceMessage.args.image.imageDescriptor, spiceMessage.args.image.data, this.clientGui, function(srcImg) {
			if(srcImg) {
				//adapt to src_area
				srcImg = wdi.graphics.getRect(box, srcImg);

				var source = wdi.graphics.getDataFromImage(srcImg).data;
				var dest = destImg.data;

				var length = source.length-1;
				var resultImageData = this.clientGui.getContext(surface_id).createImageData(dest_box.width, dest_box.height);

				var color = spiceMessage.args.transparent_true_color;
				while(length>0) {
					resultImageData.data[length] = 255; //alpha
					if(source[length-1] === color.b && source[length-2] === color.g
						&& source[length-3] === color.r) {
						resultImageData.data[length-1] = dest[length-1]; //b
						resultImageData.data[length-2] = dest[length-2]; //g
						resultImageData.data[length-3] = dest[length-3]; //r
					} else {
						resultImageData.data[length-1] = source[length-1]; //b
						resultImageData.data[length-2] = source[length-2]; //g
						resultImageData.data[length-3] = source[length-3]; //r
					}

					length-=4;
				}
				var resultImage = wdi.graphics.getImageFromData(resultImageData);
				this.drawClip(resultImage, dest_box, this.clientGui.getContext(surface_id));
			} else {
				//failed to get image, cache error?
				wdi.Debug.log('Unable to get image!');
			}
		}, this);
	},

	drawText: function(spiceMessage) {
		var context = this.clientGui.getContext(spiceMessage.args.base.surface_id);
		var bbox = spiceMessage.args.base.box;
		var clip = spiceMessage.args.base.clip;
		var text = spiceMessage.args;
		var string = text.glyph_string;
		var bpp = string.flags === 1 ? 1 : string.flags * 2;

		if (text.back_mode !== 0) {
			wdi.graphics.drawBackText(this.clientGui, context, text);
		}

		wdi.graphics.drawString(context, string, bpp, text.fore_brush, clip.type, this);
	},

	/**
	 * Clears all color palettes
	 * @param spiceMessage
	 * @param app
	 */
	invalPalettes: function(spiceMessage) {
		wdi.ImageCache.clearPalettes();
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.DataLogger = {
	testStartTime: 0,
	testStopTime: 0,
	networkStart:0,
	networkTotalTime: 0,
    data: {},
	routeList: {},
	imageTypes: {},
	startTimes: [],
	init: function() {
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_SURFACE_CREATE] = 'drawCanvas';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_SURFACE_DESTROY] = 'removeCanvas';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_COPY] = 'drawImage';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_FILL] = 'drawFill';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND] = 'drawAlphaBlend';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_WHITENESS] = 'drawWhiteness';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLACKNESS] = 'drawBlackness';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TRANSPARENT] = 'drawTransparent';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_COPY_BITS] = 'drawCopyBits';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TEXT] = 'drawText';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_STROKE] = 'drawStroke';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ROP3] = 'drawRop3';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_INVERS] = 'drawInvers';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_CREATE] = 'handleStreamCreate';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DESTROY] = 'handleStreamDestroy';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DATA] = 'handleStreamData';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_CLIP] = 'handleStreamClip';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLEND] = 'drawBlend';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_LIST] = 'invalList';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_ALL_PALETTES] = 'invalPalettes';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_MARK] = 'displayMark';
		this.routeList[wdi.SpiceVars.SPICE_MSG_DISPLAY_RESET] = 'displayReset';

		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_BITMAP] = 'bitmap';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_QUIC] = 'quic';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_RESERVED] = 'reserved';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_PNG] = 'png';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_PLT] = 'lz_plt';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_LZ_RGB] = 'lz_rgb';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_GLZ_RGB] = 'glz_rgb';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_FROM_CACHE] = 'cache';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_SURFACE] = 'surface';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_JPEG] = 'jpeg';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_FROM_CACHE_LOSSLESS] = 'cache_lossless';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_ZLIB_GLZ_RGB] = 'zlib_glz_rgb';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_JPEG_ALPHA] = 'jpeg_alpha';
		this.imageTypes[wdi.SpiceImageType.SPICE_IMAGE_TYPE_CANVAS] = 'canvas';
	},

	setStartTime: function (time) {
		this.startTimes.push(time);
	},

	getSpiceMessageType: function (spiceMessage, prepend, append) {
		var type = this.routeList[spiceMessage.messageType];

		if (type === 'drawImage') {
			type += '_' + this.imageTypes[spiceMessage.args.image.imageDescriptor.type];
		}

		return (prepend || '') + type + (append || '');
	},

	setNetworkTimeStart: function (time) {
		this.networkStart = this.networkStart || time || Date.now();
	},

	logNetworkTime: function () {
		if (this.networkStart) {
			this.networkTotalTime += Date.now() - this.networkStart;
			this.networkStart = 0;
		}
	},

	startTestSession: function () {
		this.clear();
		wdi.logOperations = true;
		this.testStartTime = Date.now();
	},

	stopTestSession: function () {
		this.testStopTime = Date.now();
		wdi.logOperations = false;
	},

	log: function(spiceMessage, start, customType, useTimeQueue, prepend, append) {
		var end = Date.now();
		var type;
		if(customType) {
			type = customType;
		} else {
			type = this.getSpiceMessageType(spiceMessage, prepend, append);
		}

        if(!this.data.hasOwnProperty(type)) {
            this.data[type] = [];
        }

		if (useTimeQueue) {
			start = this.startTimes.shift();
		}

        this.data[type].push({start: start, end: end});
    },

    clear: function() {
		this.data = {};
		this.testStartTime = 0;
		this.testStopTime = 0;
		this.networkTotalTime = 0;
		this.networkStart = 0;
    },

    getData: function() {
        return this.data;
    },

	getStats: function() {
		var networkTime = this.networkTotalTime;
		var numOperations = 0;
		var totalTimeSpent = networkTime;
		var totalTime = this.testStopTime - this.testStartTime;

		var dataSource = this.data;
		var partialTimes = {};
		var result = "";
		var data;

		for(var i in this.data) {
			if(this.data.hasOwnProperty(i)) {
				data = dataSource[i];
				numOperations += data.length;
				partialTimes[i] = 0;
				for(var x = 0;x< data.length;x++) {
					partialTimes[i] += data[x].end - data[x].start;
				}
				totalTimeSpent += partialTimes[i];
			}
		}

		result += "Total operations by number:\n";

		var partial = 0;
		for(var i in dataSource) {
			if(dataSource.hasOwnProperty(i)) {
				partial = (dataSource[i].length / numOperations) * 100;
				result += i+': '+(~~partial)+"% (" + dataSource[i].length + ")\n";
			}
		}

		result += "Total numOperations: " + numOperations + "\n";
		result += "---------------------------------\n";
		result += "\n";

		result += "Total Operations by time:\n";

		for(i in partialTimes) {
			if(partialTimes.hasOwnProperty(i)) {
				partial = (partialTimes[i] / totalTime) * 100;
				result += i+': '+(~~partial)+"% ("+partialTimes[i]+"ms)\n";
			}
		}

		var idleTime = totalTime - totalTimeSpent;
		partial = (idleTime / totalTime) * 100;
		result += "Idle: "+(~~partial)+"% ("+idleTime+"ms)\n";
		partial = (networkTime / totalTime) * 100;
		result += "Network: " + (~~partial) + "% (" + networkTime + "ms)\n";

		result += 'Total time: ' + totalTime + 'ms \n';

		return "BEGIN OF PERFORMANCE STATS\n" + result + "\nEND OF PERFORMANCE STATS\n";
	}
};

wdi.DataLogger.init();
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.socketStatus = {
	'idle':0,
	'prepared':1,
	'connected':2,
	'disconnected':3,
	'failed':4
};
//Works only with arrays of bytes (this means each value is a number in 0 to 255)
wdi.Socket = $.spcExtend(wdi.EventObject.prototype, {
	websocket: null,
	status: wdi.socketStatus.idle,
	binary: false,
	
	connect: function(uri) {
		var self = this;
		var protocol = 'base64'; //default protocol
		
		if(Modernizr['websocketsbinary']) {
			protocol = 'binary';
			this.binary = true;
		}

		this.websocket = new WebSocket(uri, protocol);
		
		wdi.Debug.log("Socket: using protocol: "+protocol);
		
		if(this.binary) {
			this.websocket.binaryType = 'arraybuffer';
		}
		
		this.status = wdi.socketStatus.prepared;
		this.websocket.onopen = function() {
			self.status = wdi.socketStatus.connected;
			self.fire('open');
		};
		this.websocket.onmessage = function(e) {
			self.fire('message', e.data);
		};
		this.websocket.onclose = function(e) {
			self.status = wdi.socketStatus.disconnected;
			console.warn('Spice Web Client: ', e.code, e.reason);
			self.disconnect();
			self.fire('error', e);
		};
		this.websocket.onerror = function(e) {
			self.status = wdi.socketStatus.failed;
			self.fire('error', e);
		};
	},

	setOnMessageCallback: function(callback) {
		this.websocket.onmessage = callback;
	},
	
	send: function(message) {
		try {
			this.websocket.send(this.encode_message(message));
		} catch (err) {
			this.status = wdi.socketStatus.failed;
			this.fire('error', err);
		}
	},
	
	disconnect: function() {
		if (this.websocket) {
			this.websocket.onopen = function() {};
			this.websocket.onmessage = function() {};
			this.websocket.onclose = function() {};
			this.websocket.onerror = function() {};
			this.websocket.close();
			this.websocket = null;
		}
	},
	
	setStatus: function(status) {
		this.status = status;
		this.fire('status', status);
	},
	
	getStatus: function() {
		return this.status;
	},
	
	encode_message: function(mess) {
		if(!this.binary) {
			var arr = Base64.encode(mess);
			return arr;
		} 
		
		var len = mess.length;
		
		var buffer = new ArrayBuffer(len);
		var u8 = new Uint8Array(buffer);
		
		u8.set(mess);
	
		return u8;
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.ClusterNodeChooser = $.spcExtend(wdi.EventObject.prototype, {
	init: function (c) {
	},

	setNodeList: function (nodeList) {
		this._nodeList = this._shuffle(nodeList);
		this._nodeListLength = this._nodeList.length;
		this._currentIndex = 0;
	},

	getAnother: function () {
		var toReturn = this._nodeList[this._currentIndex++ % this._nodeListLength];
		return toReturn;
	},

	// recipe from: http://stackoverflow.com/a/6274398
	_shuffle: function (list) {
		var counter = list.length,
			temp,
			index;
		while (counter > 0) {
			index = Math.floor(Math.random() * counter);
			counter--;
			temp = list[counter];
			list[counter] = list[index];
			list[index] = temp;
		}
		return list;
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.SocketQueue = $.spcExtend(wdi.EventObject.prototype, {
	rQ: null,
	sQ: null,
	socket: null,
	
	init: function(c) {
		this.superInit();
		this.socket = c.socket || new wdi.Socket();
		this.rQ = c.rQ || new wdi.FixedQueue();
		this.sQ = c.sQ || new wdi.Queue();
		this.setup();
	},
	
	setup: function() {
		this.socket.addListener('open', function() {
			this.fire('open');
		}, this);
		this.socket.addListener('message', function(data) {
			this.rQ.push(new Uint8Array(data));
			this.fire('message');
		}, this);
		this.socket.addListener('close', function(e) {
			this.fire('close', e);
		}, this);
		this.socket.addListener('error', function(e) {
			this.fire('error', e);
		}, this);
	},
	
	getStatus: function() {
		return this.socket.getStatus();
	},
	
	connect: function(uri) {
		this.socket.connect(uri);
	},
	
	disconnect: function() {
		this.socket.disconnect();
	},
	
	send: function(data, shouldFlush) {
		//check for shouldFlush parameter, by default is true
		if (shouldFlush === undefined) {
			var flush = true;
		} else {
			var flush = shouldFlush;
		}

		//performance: avoid passing through the queue if there is no queue and
		//we have flush!
		if(this.sQ.getLength() == 0 && flush) {
			this.socket.send(data);
			return;
		}

		//normal operation, append to buffer and send if flush
		this.sQ.push(data);
		if (flush) this.flush();
	},
	
	flush: function() {
		var data = this.sQ.shift();
		this.socket.send(data);
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.PacketController = $.spcExtend(wdi.EventObject.prototype, {
	sizeDefiner: null,
	packetExtractor: null,
	
	init: function(c) {
		this.superInit();
		this.sizeDefiner = c.sizeDefiner;
		this.packetExtractor = c.packetExtractor;
	},

	getNextPacket: function(data) {
		var self = this;
		if (wdi.logOperations) {
			wdi.DataLogger.setNetworkTimeStart();
		}
		var size = this.sizeDefiner.getSize(data);
		this.packetExtractor.getBytes(size, function(bytes) {
			var status = this.sizeDefiner.getStatus();

			this.execute(new wdi.RawMessage({status: status, data: bytes}));

			self.getNextPacket(bytes);


		}, this);
	},

	execute: function(message) {
		try {
			this.fire('chunkComplete', message);
		} catch (e) {
			console.error('PacketTroller: ', e);
		}
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.PacketExtractor = $.spcExtend(wdi.EventObject.prototype, {
	socketQ: null,
	numBytes: null,
	callback: null,
	scope: null,

	init: function(c) {
		this.superInit();
		this.socketQ = c.socketQ;
		this.setListener();
	},

	setListener: function() {
		this.socketQ.addListener('message', function() {
			if (wdi.logOperations) {
				wdi.DataLogger.setNetworkTimeStart();
			}
			this.getBytes(this.numBytes, this.callback, this.scope);
		}, this);
	},

	getBytes: function(numBytes, callback, scope) {
		var retLength = this.socketQ.rQ.getLength();
		this.numBytes = numBytes;
		this.callback = callback;
		this.scope = scope;
		
		if (numBytes !== null && retLength >= numBytes) {
			var ret;
			if (numBytes) {
				ret = this.socketQ.rQ.shift(numBytes);
			} else {
				ret = new Uint8Array(0);
			}
			this.numBytes = null;
			this.callback = null;
			this.scope = null;
			callback.call(scope, ret);
		} else {
			if (wdi.logOperations) {
				wdi.DataLogger.logNetworkTime();
			}
		}
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.PacketReassembler = $.spcExtend(wdi.EventObject.prototype, {
	packetController: null,
	currentHeader: null,
	statusToString: null,
	sizeDefinerConstant: null,

	init: function(c) {
		this.superInit();
		this.packetController = c.packetController;
		this.sizeDefinerConstant = wdi.SizeDefiner.prototype;
		this.statusToString = [];
		this.statusToString[this.sizeDefinerConstant.STATUS_REPLY_BODY] = 'reply';
		this.statusToString[this.sizeDefinerConstant.STATUS_ERROR_CODE] = 'errorCode';
		this.statusToString[this.sizeDefinerConstant.STATUS_BODY] = 'spicePacket';
		this.setListeners();

	},

	start: function () {
		this.packetController.getNextPacket();
	},

	setListeners: function() {
		this.packetController.addListener('chunkComplete', function(e) {
			var rawMessage = e;
			var status = rawMessage.status;
			switch(status) {
				case this.sizeDefinerConstant.STATUS_HEADER:
				case this.sizeDefinerConstant.STATUS_REPLY:
					this.currentHeader = rawMessage;
					break;
				case this.sizeDefinerConstant.STATUS_REPLY_BODY:
				case this.sizeDefinerConstant.STATUS_BODY:
					var tmpBuff = new Uint8Array(rawMessage.data.length + this.currentHeader.data.length);
					tmpBuff.set(this.currentHeader.data);
					tmpBuff.set(rawMessage.data, this.currentHeader.data.length);
					rawMessage.data = tmpBuff;
					rawMessage.status = this.statusToString[status];
					this.fire('packetComplete', rawMessage);
					break;
				default:
					rawMessage.status = this.statusToString[status];
					this.fire('packetComplete', rawMessage);
					break;
			}
		}, this);
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.ReassemblerFactory = {
	getPacketReassembler: function(socketQ) {
		var pE = this.getPacketExtractor(socketQ);
		var sD = this.getSizeDefiner();
		var pC = this.getPacketController(pE, sD);
		return new wdi.PacketReassembler({packetController: pC});
	},

	getPacketExtractor: function(socketQ) {
		return new wdi.PacketExtractor({socketQ: socketQ});
	},

	getSizeDefiner: function() {
		return new wdi.SizeDefiner();
	},

	getPacketController: function(packetExtractor, sizeDefiner) {
		return new wdi.PacketController({packetExtractor: packetExtractor, sizeDefiner: sizeDefiner});
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.SizeDefiner = $.spcExtend(wdi.DomainObject, {
	ERROR_CODE_SIZE: 4,
	status: null,
	STATUS_READY: 0,
	STATUS_REPLY: 1,
	STATUS_REPLY_BODY: 2,
	STATUS_ERROR_CODE: 3,
	STATUS_MESSAGE: 4,
	STATUS_HEADER: 5,
	STATUS_BODY: 6,
	isHeader: false,

	init: function(c) {
		this.status = this.STATUS_READY;
	},

	getSize: function(arr) {
		if (this.STATUS_READY === this.status) {
			this.status++;
			return wdi.SpiceLinkHeader.prototype.objectSize;
		} else if (this.STATUS_REPLY === this.status) {
			this.status++;
			return this.getReplyBodySize(arr);
		} else if (this.STATUS_REPLY_BODY === this.status) {
			this.status++;
			return this.ERROR_CODE_SIZE;
		} else if (this.STATUS_ERROR_CODE === this.status) {
			this.status++;
			this.isHeader = true;
			return 6; //wdi.SpiceDataHeader.prototype.objectSize access here is slow
		} else {
			if (this.isHeader) {
				this.isHeader = false;
				return this.getBodySizeFromArrayHeader(arr);
			} else {
				this.isHeader = true;
				return 6;//wdi.SpiceDataHeader.prototype.objectSize; access here is slow
			}
		}
	},

	getReplyBodySize: function (arr) {
		var queue = wdi.GlobalPool.create('ViewQueue');
		queue.setData(arr);
		var header = new wdi.SpiceLinkHeader().demarshall(queue);
		wdi.GlobalPool.discard('ViewQueue', queue);
		return header.size;
	},

	getBodySizeFromArrayHeader: function (arr) {
		var queue = wdi.GlobalPool.create('ViewQueue');
		queue.setData(arr);
		var header = new wdi.SpiceDataHeader().demarshall(queue);
		wdi.GlobalPool.discard('ViewQueue', queue);
		return header.size;
	},

	getStatus: function() {
		if (this.status === this.STATUS_MESSAGE && this.isHeader) {
			return this.STATUS_HEADER;
		} else if (this.status === this.STATUS_MESSAGE && !this.isHeader) {
			return this.STATUS_BODY;
		} else {
			return this.status;
		}
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.PacketLinkFactory = {
	extract: function(header, queue) {
		switch (header.type) {
			case wdi.SpiceVars.SPICE_MSG_SET_ACK:
				return new wdi.RedSetAck().demarshall(queue);
			case wdi.SpiceVars.SPICE_MSG_PING:
				return new wdi.RedPing().demarshall(queue, header.size);
			case wdi.SpiceVars.SPICE_MSG_MIGRATE:
				return new wdi.RedMigrate().demarshall(queue);
			case wdi.SpiceVars.SPICE_MSG_MIGRATE_DATA:
				return new wdi.RedMigrateData().demarshall(queue, header.size);
			case wdi.SpiceVars.SPICE_MSG_WAIT_FOR_CHANNELS:
				return new wdi.RedWaitForChannels().demarshall(queue);
			case wdi.SpiceVars.SPICE_MSG_DISCONNECTING:
				return new wdi.RedDisconnect().demarshall(queue);
			case wdi.SpiceVars.SPICE_MSG_NOTIFY:
				var packet = new wdi.RedNotify().demarshall(queue);
				return packet;
			case wdi.SpiceVars.SPICE_MSG_MAIN_MOUSE_MODE:
				return new wdi.SpiceMouseMode().demarshall(queue);
		}
	}
};

wdi.PacketLinkProcess = {
	process: function(header, packet, channel) {
		switch(header.type) {
			case wdi.SpiceVars.SPICE_MSG_SET_ACK:
				var body = wdi.SpiceObject.numberTo32(packet.generation);
				channel.setAckWindow(packet.window)
				channel.sendObject(body, wdi.SpiceVars.SPICE_MSGC_ACK_SYNC);
				break;
			case wdi.SpiceVars.SPICE_MSG_PING:
				var body = new wdi.RedPing({id: packet.id, time: packet.time}).marshall();
				channel.sendObject(body, wdi.SpiceVars.SPICE_MSGC_PONG);
				break;
			case wdi.SpiceVars.SPICE_MSG_MAIN_MOUSE_MODE:
				channel.fire('mouseMode', packet.current_mode);
				break;
			case wdi.SpiceVars.SPICE_MSG_NOTIFY:
				channel.fire('notify');
				break;
		}
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */
//Must fire event types: connectionId and message

wdi.SpiceChannel = $.spcExtend(wdi.EventObject.prototype, {
	counter: 0,
	ackWindow: 0,
	connectionId: 0,
	socketQ: null,
	packetReassembler: null,
	channel: 1,
	proxy: null,
	token: null,
	
	init: function(c) {
		this.superInit();
		this.socketQ = c.socketQ || new wdi.SocketQueue();
		this.packetReassembler = c.packetReassembler || wdi.ReassemblerFactory.getPacketReassembler(this.socketQ);
		this.setListeners();
		this.ackWindow = 0;
	},

	setListeners: function() {
		var date;
		this.packetReassembler.addListener('packetComplete', function(e) {
			var rawMessage = e;
			if (rawMessage.status === 'spicePacket') {
				if (wdi.logOperations) {
					wdi.DataLogger.logNetworkTime();
					date = Date.now();
				}
				var rsm = this.getRawSpiceMessage(rawMessage.data);
				if (rsm) {
					if (wdi.logOperations && rsm.channel === wdi.SpiceVars.SPICE_CHANNEL_DISPLAY) {
						wdi.DataLogger.setStartTime(date);
					}
					this.fire('message', rsm);
				}
			} else if (rawMessage.status === 'reply') {
				var packet = this.getRedLinkReplyBytes(rawMessage.data);
				this.send(packet);
			} else if (rawMessage.status === 'errorCode') {
				var packet = this.getErrorCodeBytes(rawMessage.data);
				if (packet) {
					this.send(packet);
				}
				this.fire('channelConnected');
			}
		}, this);
		
		this.socketQ.addListener('open', function() {
			var packet = this.getRedLinkMessBytes();
			this.send(packet);
			this.proxy ? this.proxy.end() : false;
		}, this);

		this.socketQ.addListener('close', function(e) {
			if (this.channel === 1) {
				this.fire('error', e);
			}
			this.socketQ.disconnect();
		}, this);

		this.socketQ.addListener('error', function() {
			this.fire('error', 3);
			this.socketQ.disconnect();
//			throw new wdi.Exception({message:"Socket error", errorCode: 2});
		}, this);
	},

	connect: function(connectionInfo, channel, connectionId, proxy) {
		var url = wdi.Utils.generateWebSocketUrl(connectionInfo.protocol, connectionInfo.host, connectionInfo.port, connectionInfo.vmHost, connectionInfo.vmPort, 'spice', connectionInfo.vmInfoToken);
		this.channel = channel;
		this.connectionId = connectionId || 0;
		this.socketQ.connect(url);
		this.proxy = proxy;
		this.token = connectionInfo.token;
		this.packetReassembler.start();
	},

	disconnect: function () {
		this.socketQ.disconnect();
	},

	send: function(data, flush) {
		this.socketQ.send(data, flush);
	},

	sendObject: function(data, type, flush) {
		var packet = new wdi.SpiceDataHeader({
			type:type, 
			size:data.length
		}).marshall();
		
		packet = packet.concat(data);
		
		this.send(packet, flush);
	},
	
	setAckWindow: function(window) {
		this.ackWindow = window;
		this.counter = 0;
	},

	getRawSpiceMessage: function (rawData) {
		var headerQueue = wdi.GlobalPool.create('ViewQueue');
		var body = wdi.GlobalPool.create('ViewQueue');

		var header = new Uint8Array(rawData, 0, wdi.SpiceDataHeader.prototype.objectSize);
		headerQueue.setData(header);
		var headerObj = new wdi.SpiceDataHeader().demarshall(headerQueue);
		wdi.GlobalPool.discard('ViewQueue', headerQueue);
		var rawBody = rawData.subarray(wdi.SpiceDataHeader.prototype.objectSize);
		body.setData(rawBody);

		this.counter++;

		if(this.ackWindow && this.counter === this.ackWindow) {
			this.counter = 0;
			var ack = new wdi.SpiceDataHeader({
				type: wdi.SpiceVars.SPICE_MSGC_ACK,
				size:0
			}).marshall();
			this.send(ack);
		}

		var packet = wdi.PacketLinkFactory.extract(headerObj, body) || false;
		if (packet) {
			wdi.PacketLinkProcess.process(headerObj, packet, this);
			wdi.GlobalPool.discard('ViewQueue', body);
			return false;
		} else {
			var rawSpiceMessage = wdi.GlobalPool.create('RawSpiceMessage');
			rawSpiceMessage.set(headerObj, body, this.channel);
			return rawSpiceMessage;
		}
	},


	//This functions are to avoid hardcoded values on logic
	getRedLinkReplyBytes: function(data) {
		if (this.token) {
			var newq = new wdi.ViewQueue();
			newq.setData(data);
			newq.eatBytes(wdi.SpiceLinkHeader.prototype.objectSize)
			var myBody = new wdi.SpiceLinkReply().demarshall(newq);

			//Returnnig void bytes or encrypted ticket
			var key = wdi.SpiceObject.stringHexToBytes(RSA_public_encrypt(this.token, myBody.pub_key));
			return key;
		} else {
			return wdi.SpiceObject.stringToBytesPadding('', 128);
		}
	},

	getRedLinkMessBytes: function() {
		var header = new wdi.SpiceLinkHeader({magic:1363428690, major_version:2, minor_version:2, size:22}).marshall();
		var body = new wdi.SpiceLinkMess({
			connection_id:this.connectionId, 
			channel_type:this.channel, 
			caps_offset:18,
			num_common_caps: 1,
			common_caps: (1 << wdi.SpiceVars.SPICE_COMMON_CAP_MINI_HEADER)
		}).marshall();
		return header.concat(body);
	},

	getErrorCodeBytes: function (data) {
		var errorQ = wdi.GlobalPool.create('ViewQueue');
		errorQ.setData(data);
		var errorCode = wdi.SpiceObject.bytesToInt32NoAllocate(errorQ);
		wdi.GlobalPool.discard('ViewQueue', errorQ);
		if (errorCode === 0) {
			if (this.channel === wdi.SpiceVars.SPICE_CHANNEL_DISPLAY) {
				var redDisplayInit = new wdi.SpiceDataHeader({type: wdi.SpiceVars.SPICE_MSGC_DISPLAY_INIT, size: 14}).marshall();
				//TODO: ultrahardcoded value here, move to configuration

				//DUE To high level storage the memory specified for cache
				//is 2-3 times bigger than expected.
				var cache_size = 0*1024*1024;

				var body = new wdi.SpiceCDisplayInit({
					pixmap_cache_id:1,
					pixmap_cache_size: cache_size,
					glz_dictionary_id: 0,
					glz_dictionary_window_size: 1
				}).marshall();

				return redDisplayInit.concat(body);
			} else if(this.channel == wdi.SpiceVars.SPICE_CHANNEL_MAIN) {
				return new wdi.SpiceDataHeader({type: wdi.SpiceVars.SPICE_MSGC_MAIN_ATTACH_CHANNELS, size: 0}).marshall();
			}
		} else {
			throw new wdi.Exception({message: "Server refused client", errorCode: 2});
		}
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.BusConnection = $.spcExtend(wdi.EventObject.prototype, {
	ws: null,
	subscriptions: [],
	_busUser: null,
	_busPass: null,
	fileServerBaseUrl: null,
	queue: '',
	binary: false,

	init: function(c) {
		this.superInit();
		this.ws = c.websocket || new wdi.WebSocketWrapper();
		this.clusterNodeChooser = c.clusterNodeChooser || new wdi.ClusterNodeChooser();
		this.binary = c.binary || false;
	},

	connect: function(c) {
		if (!c['useBus']) {
			wdi.Debug.warn("Not using the bus");
			return;
		}
        this._vdiBusToken = c['vdiBusToken'];
		if (!c['busHostList']) {
			wdi.Debug.warn("Deprecated: using old busHost & busPort params");
			c['busHostList'] = [{
				host: c['busHost'],
				port: c['busPort']
			}];
		}
		this.clusterNodeChooser.setNodeList(c['busHostList']);
		if (Modernizr['websocketsbinary']) {
			this.binary = true;
		}
		this._busUser = c['busUser'];
		this._busPass = c['busPass'];
		this._websockifyProtocol = c['protocol'];
		this._websockifyHost = c['host'];
		this._websockifyPort = c['port'];
		this.fileServerBaseUrl = c['busFileServerBaseUrl'];
		this.subscriptions = c['busSubscriptions'];

		this._connectToNextHost();
	},

	_connectToNextHost: function () {
		var busData = this.clusterNodeChooser.getAnother();

		// c['protocol'] is the protocol we use to connect to websockify
		// ie: ws, wss, https, ...
		var url = wdi.Utils.generateWebSocketUrl(
			this._websockifyProtocol,
			this._websockifyHost,
			this._websockifyPort,
			busData.host,
			busData.port,
			'raw',
            this._vdiBusToken
		);
		var websocketProtocol = 'base64';
		if (this.binary) {
			websocketProtocol = 'binary';
		}
		this.ws.connect(url, websocketProtocol);

		wdi.Debug.log("BusConnection: using protocol: " + websocketProtocol);

		if (this.binary) {
			this.ws.setBinaryType('arraybuffer');
		}
		this.setListeners();
	},

	disconnect: function() {
		this.ws.close();
	},

	setListeners: function() {
		var self = this;
		this.ws.onOpen(function(e) {
			self._send("CONNECT\nlogin:" + self._busUser + "\npasscode:" + self._busPass + "\n\n\x00");
		});

		this.ws.onMessage(function(e) {
			var message;
			var result;
			if (!self.binary) {
				message = Base64.decodeStr(e.data);
			} else {
				message = String.fromCharCode.apply(null, new Uint8Array(e.data));
				// Fix accented chars
				// [ http://stackoverflow.com/questions/5396560/how-do-i-convert-special-utf-8-chars-to-their-iso-8859-1-equivalent-using-javasc ]
				message = decodeURIComponent(escape(message));
			}
			var subChunks = message.split("\0");
			if (subChunks.length == 1) {
				// there is no \0 in the full message, add it to the queue
				self.queue += subChunks[0];
			} else {
				// at least one \0, process all but the last subchunk (that has no \0)
				for (var i = 0; i < subChunks.length - 1; i++) {
					message = self.queue + subChunks[i];
					result = self.parseMessage(message);
					self.fire('busMessage', result);
					self.queue = '';
				}
				// last chunk is now the queue
				self.queue = subChunks[subChunks.length - 1];
			}
		});

		this.ws.onClose(function(e) {
			wdi.Debug.log('BusConnection CLOSED! connecting again in 1 second');
			self.fire('error', e);
		});

		this.ws.onError(function(e) {
			wdi.Debug.error('BusConnection ERROR:',  e);
		});
	},

	parseMessage: function(message) {
		try {
			var arr = message.split("\n\n");
			var header = arr[0].trim();
			var body = arr[1].replace(/\x00/, '').trim();
			if (body.length != 0) {
				// there is content, so convert to object
				body = JSON.parse(body);
			} else {
				body = null;
			}
			arr = header.split("\n");
			var verb = arr.shift();
			header = "{";
			var len = arr.length;
			for (var i = 0;i < len;i++) {
				var headerName = arr[i].split(':')[0];
				header += '"' + headerName + '":"' + arr[i].replace(headerName + ':', '') + '"';
				if (i != len-1) {
					header += ",";
				}
			}
			header += "}";

			return {'verb':verb, 'header':JSON.parse(header), 'body':body};
		} catch (e) {
			wdi.Debug.error("Error parsing Bus Info: ", e);
			return {"verb":"ERROR"};
		}
	},

	setSubscriptions: function() {
		var len = this.subscriptions.length;
		for (var i = 0; i < len;i++) {
			this.subscribe(this.subscriptions[i]);
		}
	},

	send: function(message) {
		var destination = this.subscriptions[0];
		this._send("SEND\ndestination:" + destination + "\ncontent-type:text/plain\n\n" + JSON.stringify(message) + "\x00");
	},

	subscribe: function(destination) {
		//header browser: true for queue's to multiple subscribers
		this._send("SUBSCRIBE\ndestination:" + destination + "\n\n\x00");
	},

	_send: function(message) {
		if (!this.binary) {
			this.ws.send(Base64.encodeStr(message));
		} else {
			this.ws.send(message);
		}
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.WebSocketWrapper = $.spcExtend({}, {
	ws: {},
	onopen: null,
	onmessage: null,
	onclose: null,
	onerror: null,

	init: function() {

	},

	connect: function(url, protocol) {
		this.ws = new WebSocket(url, protocol);
	},

	onOpen: function(callback) {
		this.ws.onopen = callback;
	},

	onMessage: function(callback) {
		this.ws.onmessage = callback;
	},

	onClose: function(callback) {
		this.ws.onclose = callback;
	},

	onError: function(callback) {
		this.ws.onerror = callback;
	},

	setBinaryType: function(type) {
		this.ws.binaryType = type;
	},

	close: function() {
		if (!this.ws || !this.ws.close) {
			return;
		}

		this.ws.close();
		this.ws.onopen = function () {};
		this.ws.onmessage = function () {};
		this.ws.onclose = function () {};
		this.ws.onerror = function () {};
		this.onopen = function() {};
		this.onmessage = function() {};
		this.onclose = function() {};
		this.onerror = function() {};

	},

	send: function(message) {
		this.ws.send(message);
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.ConnectionControl = $.spcExtend(wdi.EventObject.prototype, {
	socket: null,
	pendingTimeToConnectionLost: null,
	previousTimeOut: null,

	init: function(c) {
		this.superInit();
		this.socket = c.socket || new wdi.Socket();
	},

	connect: function(c) {
		var url = wdi.Utils.generateWebSocketUrl(c.protocol, c.host, c.port, null, null,'raw', c.heartbeatToken);
		this.socket.connect(url);
		this.pendingTimeToConnectionLost = c.heartbeatTimeout;
		wdi.Debug.log('ConnectionControl: connected');
		this.setListeners();
	},

	disconnect: function() {
		if(this.previousTimeOut){
			clearTimeout(this.previousTimeOut);
		}
		this.socket.disconnect();
	},

	setListeners: function() {
		var self = this;
		this.socket.setOnMessageCallback(function(e) {
			wdi.Debug.log('ConectionControl: beat');
			clearTimeout(self.previousTimeOut);
			self.previousTimeOut = setTimeout(function() {
				wdi.Debug.log('ConnectionControl: firing connectionLost event');
				self.fire('connectionLost', e);
			}, self.pendingTimeToConnectionLost);
		});
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.Agent = $.spcExtend(wdi.EventObject.prototype, {
	clientTokens:null,
    serverTokens: 10,
    app: null,
    clipboardContent: null,
    clipboardGrabbed: false,
    clipboardRequestReceived: false,
    clipboardPending: false, // to keep clipboard data until spice sends us its request (clipboardRequestReceived)
    clipboardEnabled: true,
	windows: null,

	init: function(c) {
		this.superInit();
		this.app = c.app;
	},

	sendInitMessage: function() {
		var packet = new wdi.SpiceMessage({
			messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_START,
			channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
			args: new wdi.SpiceMsgMainAgentTokens({
				num_tokens: this.serverTokens
			})
		});
		this.app.spiceConnection.send(packet);

        var mycaps = (1 << wdi.AgentCaps.VD_AGENT_CAP_MONITORS_CONFIG);
        if (this.clipboardEnabled) {
            mycaps = mycaps | (1 << wdi.AgentCaps.VD_AGENT_CAP_CLIPBOARD_BY_DEMAND);
        }

        packet = new wdi.SpiceMessage({
            messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_DATA,
            channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
            args: new wdi.VDAgentMessage({
                protocol: 1, //agent protocol version, should be unhardcoded
                type: wdi.AgentMessageTypes.VD_AGENT_ANNOUNCE_CAPABILITIES,
                opaque: 0,
                data: new wdi.VDAgentAnnounceCapabilities({
                    request: 0,
                    caps: mycaps
                })
            })
        });
      	this.sendAgentPacket(packet);

//		//tokens allocation
//		packet = new wdi.SpiceMessage({
//			messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_TOKEN,
//			channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
//			args: new wdi.SpiceMsgMainAgentTokens({
//				num_tokens: 4294967295 // FF FF FF FF
//			})
//		});
//		app.spiceConnection.send(packet);
	},

	setResolution: function(width, height) {
		//TODO move this to a setting
		if(width < 800) {
			width = 800;
		}

		if(height < 600) {
			height = 600;
		}

		//adapt resolution, TODO: this needs to be refractored
		var packet = new wdi.SpiceMessage({
			messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_DATA,
			channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
			args: new wdi.VDAgentMessage({
				protocol: 1, //agent protocol version, should be unhardcoded
				type: wdi.AgentMessageTypes.VD_AGENT_MONITORS_CONFIG,
				opaque: 0,
				data: new wdi.VDAgentMonitorsConfig({
					num_of_monitors: 1,
					flags: 0,
					data: new wdi.VDAgentMonConfig({
						width: width,
						height: height,
						depth: 32,
						x: 0,
						y: 0
					})
				})
			})
		});
		this.sendAgentPacket(packet);
	},

	setClientTokens: function(tokens) {
		this.clientTokens = tokens;
	},

	sendAgentPacket: function(packet) {
		this.clientTokens--;
		this.app.spiceConnection.send(packet);
	},

    onAgentData: function(packet) {
        this.serverTokens--; //we have just received a server package, we decrement the tokens
        if (this.serverTokens == 0) { // we send 10 more tokens to server
            packet = new wdi.SpiceMessage({
                messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_TOKEN,
                channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
                args: new wdi.SpiceMsgMainAgentTokens({
                    num_tokens: 10
                })
            });
            this.app.spiceConnection.send(packet);
            this.serverTokens = 10;
        }

        if(packet.type == wdi.AgentMessageTypes.VD_AGENT_ANNOUNCE_CAPABILITIES) {
            //??
        } else if(packet.type == wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD_GRAB) {
            if(packet.clipboardType == wdi.ClipBoardTypes.VD_AGENT_CLIPBOARD_UTF8_TEXT) {
                var packet = new wdi.SpiceMessage({
                    messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_DATA,
                    channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
                    args: new wdi.VDAgentMessage({
                        protocol: 1, //agent protocol version, should be unhardcoded
                        type: wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD_REQUEST,
                        opaque: 0,
                        data: new wdi.VDAgentClipboardRequest({
                            type: wdi.ClipBoardTypes.VD_AGENT_CLIPBOARD_UTF8_TEXT
                        })
                    })
                });
              	this.sendAgentPacket(packet);
            }
        } else if(packet.type == wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD) {
            this.fire('clipBoardData', packet.clipboardData);
        } else if (packet.type == wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD_REQUEST) {
            this.clipboardRequestReceived = true;
            if (this.clipboardPending) {
                this.clipboardPending = false;
                this.sendPaste();
            }
        } else if (packet.type == wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD_RELEASE) {
            //debugger;// we've never seen this packet... if we receive it sometime, please warn somebody!!
            this.clipboardGrabbed = false;
            this.clipboardRequestReceived = false;
        } else if (packet.type == wdi.AgentMessageTypes.VD_AGENT_REPLY) {

        } else {
            console.log('agent ?',packet.type);
        }
    },

    setClipboard: function(text) {
        if (text != this.clipboardContent) {
            this.clipboardContent = text;
            this.sendGrab();
            this.sendPaste();
        }
        this.app.sendShortcut(wdi.keyShortcutsHandled.CTRLV);
    },

    sendGrab: function() {
        if (!this.clipboardGrabbed) {
            var packet = new wdi.SpiceMessage({
                messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_DATA,
                channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
                args: new wdi.VDAgentMessage({
                    protocol: 1, //agent protocol version, should be unhardcoded
                    type: wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD_GRAB,
                    opaque: 0,
                    data: new wdi.VDAgentClipboardGrab({
                        types: [wdi.ClipBoardTypes.VD_AGENT_CLIPBOARD_UTF8_TEXT]
                    })
                })
            });
            this.sendAgentPacket(packet);
        }
    },

    /**
     * Sends the text received from browser to spice
     *
     * @param clipboardContent
     */
    sendPaste: function() {
        if (this.clipboardRequestReceived) {
            var packet = new wdi.SpiceMessage({
                messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_AGENT_DATA,
                channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
                args: new wdi.VDAgentMessage({
                    protocol: 1, //agent protocol version, should be unhardcoded
                    type: wdi.AgentMessageTypes.VD_AGENT_CLIPBOARD,
                    opaque: 0,
                    data: new wdi.VDAgentClipboard({
                        type: wdi.ClipBoardTypes.VD_AGENT_CLIPBOARD_UTF8_TEXT,
                        data: this.clipboardContent
                    })
                })
            });
            this.clipboardRequestReceived = false;
            this.sendAgentPacket(packet);
        } else {
            // we still haven't received the request event from server, we keep the clipboard data until then
            this.clipboardPending = true;
        }
    },

    disableClipboard: function () {
        this.clipboardEnabled = false;
    }
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.SpiceConnection = $.spcExtend(wdi.EventObject.prototype, {
	channels:null,
	connectionId: null,
	connectionInfo: null,
	runQ: null,
	token: null,
	connectionControl: null,
	
	init: function(c) {
		this.superInit();
		this.channels = {};
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN] = c.mainChannel || new wdi.SpiceChannel();
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_DISPLAY] = c.displayChannel || new wdi.SpiceChannel();
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_INPUTS] = c.inputsChannel || new wdi.SpiceChannel();
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_CURSOR] = c.cursorChannel || new wdi.SpiceChannel();
        this.channels[wdi.SpiceVars.SPICE_CHANNEL_PLAYBACK] = c.playbackChannel || new wdi.SpiceChannel();
		this.runQ = c.runQ || new wdi.RunQueue();
		this.connectionControl = c.connectionControl || new wdi.ConnectionControl();
		this.setup();
	},
	
	connect: function(connectionInfo) {
		this.connectionInfo = connectionInfo;
		if (connectionInfo.connectionControl) {
			this.connectionControl.connect(connectionInfo);
		}
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN].connect(this.connectionInfo, wdi.SpiceVars.SPICE_CHANNEL_MAIN);
	},
	
	disconnect: function() {
		for (var i in this.channels) {
			this.channels[i].disconnect();
			this.channels[i] = null;
			delete(this.channels[i]);
		}
		this.connectionControl.disconnect();
	},
	
	send: function(spcMessage) {
		var data = spcMessage.args.marshall();
		if(this.channels[spcMessage.channel]) {
			this.channels[spcMessage.channel].sendObject(
				data,
				spcMessage.messageType
			);
		} else {
			console.error("channel not available", spcMessage.channel);
		}
	},
	
	//set events to all channels
	setup: function() {
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN].addListener('connectionId', this.onConnectionId, this);
        this.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN].addListener('channelListAvailable', this.onChannelList, this);
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN].addListener('mouseMode', this.onMouseMode, this);
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN].addListener('initAgent', this.onInitAgent, this);
		this.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN].addListener('notify', this.onNotify, this);
		this.connectionControl.addListener('connectionLost', this.onDisconnect, this);

		this._setConnectedListeners();
        
        var f = null;
        if(wdi.exceptionHandling) {
            f = this.onChannelMessageExceptionHandled;
        } else {
            f = this.processChannelMessage;
        }
        
		for(var i in this.channels) {
			if(this.channels.hasOwnProperty(i)) {
				this.channels[i].addListener('message', f, this);
				this.channels[i].addListener('status', this.onStatus, this);
				this.channels[i].addListener('error', this.onDisconnect, this);
			}
		}
	},

	_setConnectedListeners: function() {
		this._setConnectedListener(wdi.SpiceVars.SPICE_CHANNEL_MAIN);
		this._setConnectedListener(wdi.SpiceVars.SPICE_CHANNEL_DISPLAY);
		this._setConnectedListener(wdi.SpiceVars.SPICE_CHANNEL_INPUTS);
		this._setConnectedListener(wdi.SpiceVars.SPICE_CHANNEL_CURSOR);
		this._setConnectedListener(wdi.SpiceVars.SPICE_CHANNEL_PLAYBACK);
	},


	_setConnectedListener: function(channel) {
		this.channels[channel].addListener('channelConnected', function () {
			this.fire('channelConnected', channel);
		}, this);
	},
		
	onDisconnect: function(params) {
		this.fire("error", params);
	},
	
	//events
	onConnectionId: function(params) {
		this.connectionId = params;
	},

    onChannelList: function(params) {
        this.connectChannels(params);
    },

    connectChannels: function(channels) {
        for(var i in this.channels) {
            i = parseInt(i, 10);
            if(i != wdi.SpiceVars.SPICE_CHANNEL_MAIN && channels.indexOf(i) != -1) {
                this.runQ.add(function(proxy, params) {
                    this.channels[params].connect(this.connectionInfo, params, this.connectionId, proxy);
                }, this, false, i);
            }
        }
        this.runQ.process();
    },
	
	onInitAgent: function(params) {
		var tokens = params;
		this.fire('initAgent', tokens);
	},
	
	onMouseMode: function(params) {
		var mode = params;
		this.fire('mouseMode', mode);
	},
	
	onNotify: function(params) {
		this.fire('notify');
	},
	
	onStatus: function(params) {
		/*var status = params[1];
		var channel = params[2];
		if (status == wdi.CHANNEL_STATUS.idle) {
			var self = this;
			this.channels[channel].timer = setTimeout(function() {
				self.channels[channel].connect(self.host, self.port, channel, self.connectionId);
			}, 800);
		} else if (status == wdi.CHANNEL_STATUS.establishing) {
			clearTimeout(this.channels[channel].timer);
		}*/
	},

            
    onChannelMessageExceptionHandled: function(params) {
        try {
            return this.processChannelMessage(params);
        } catch(e) {
            wdi.Debug.error('SpiceConnection: Packet decodification error', e);
        }	        
    },
    
    processChannelMessage: function(params) {
        var packet = wdi.PacketFactory.extract(params); //returns domain object

        //return ViewQueue to the pool, object is already decoded
        wdi.GlobalPool.discard('ViewQueue', params.body);
        wdi.GlobalPool.discard('RawSpiceMessage', params);

        if(packet) {
            this.fire('message', packet);
        } else {
            wdi.Debug.log('Unknown packet '+params.channel+' '+params.header.type);
            wdi.Debug.log(params);
        }                    
    }
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.

You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see
<http://www.gnu.org/licenses/agpl-3.0.txt>.

See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org

The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.

In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice.
 */

wdi.SPICE_INPUT_MOTION_ACK_BUNCH = 8;

wdi.ClientGui = $.spcExtend(wdi.EventObject.prototype, {
	width: null,
	height: null,
	canvas: null,
	ack_wait: 0,
	mouse_mode: 0,
	mouse_status: 0,
	eventLayer: null,
	counter: 0,
	mainCanvas: 0,
	firstTime: true,
	clientOffsetX: 0,
	clientOffsetY: 0,
	magnifier: null,
	magnifierBackground: null,
	firstMove: true,
	isMagnified: true,
	isMouseDown: false,
	soundStarted: false,
	canvasMarginY: 0,
	canvasMarginX: 0,
	stuckKeysHandler: null,

	subCanvas: {},
	inputManager: null,
	clipboardEnabled: true,
	layer: null,

	init: function(c) {
		this.canvas = {};
		this.contexts = {};
		this.superInit();
		this.magnifier = window.$('<canvas/>').attr({
			'width': 150,
			'height': 150
		}).css({
				'position': 'absolute',
				'left': '0px',
				'top': '0px'
		});
		this.stuckKeysHandler = c.stuckKeysHandler || new wdi.StuckKeysHandler();
		this.stuckKeysHandler.addListener('inputStuck', this._sendInput.bind(this), this);

		//load magnifier background
		//this.magnifierBackground = window.$('<img/>');
		//this.magnifierBackground.attr('src', 'resources/magnifier.png');
		this.initSound();
		this.inputManager = c.inputManager || new wdi.InputManager({ stuckKeysHandler: this.stuckKeysHandler, window: $(window)});
		this.inputManager.setCurrentWindow(window);
	},

	setLayer: function(layer) {
		this.layer = layer;
	},

	disableClipboard: function () {
		this.clipboardEnabled = false;
	},

	_sendInput: function (params) {
		var data = params;
		var type = data[0];
		var event = data[1];
		this.fire('input', [type, event]);
	},

	releaseAllKeys: function() {
		this.stuckKeysHandler.releaseAllKeys();
	},

	getContext: function(surface_id) {
		return this.contexts[surface_id];
	},

	getCanvas: function(surface_id) {
		return this.canvas[surface_id];
	},

	checkFeatures: function() {
		if (!Modernizr.canvas || !Modernizr.websockets) {
			alert('Your Browser is not compatible with WDI. Visit ... for a list of compatible browsers');
			return false;
		}
		return true;
	},

	deleteSubCanvas: function(window) {
		var obj = this.subCanvas[window['hwnd']];
		this.subCanvas[window['hwnd']] = null;
		return obj;
	},

	moveSubCanvas: function(window) {
		var obj = this.subCanvas[window['hwnd']];
		obj['info'] = window;
		this._fillSubCanvasFromWindow(window);
		return obj;
	},

	resizeSubCanvas: function(window) {
		var obj = this.subCanvas[window['hwnd']];
		$([obj["canvas"], obj["eventLayer"]]).attr({
			'width': window['width'],
			'height': window['height']
		});
		obj['info'] = window;
		this._fillSubCanvasFromWindow(window);
		return obj;
	},

	_fillSubCanvasFromWindow: function(window) {
		var top = parseInt(window.top, 10);
		var left = parseInt(window.left, 10);
		var width = parseInt(window.width, 10);
		var height = parseInt(window.height, 10);
		this.fillSubCanvas({
			top: top,
			left: left,
			right: left + width,
			bottom: top + height
		});
	},

	createNewSubCanvas: function(window) {
		var evtlayer = this.createEventLayer(window['hwnd'] + '_event', window['width'], window['height']);
		this.subCanvas[window['hwnd']] = {
			'canvas': $('<canvas/>').attr({
				width: window['width'],
				height: window['height']
			}).css({
					display: window['iconic'] ? 'none' : 'block'
				})[0],
			'eventLayer': evtlayer,
			'info': window,
			'position': 0
		};
		//we have the main area drawn?
		if (this.canvas[this.mainCanvas]) {
			this._fillSubCanvasFromWindow(window);
		}
		return [this.subCanvas[window['hwnd']]];
	},

	fillSubCanvas: function(filterPosition) {
		var canvas = this.canvas[this.mainCanvas];
		var info = null;
		for (var i in this.subCanvas) {
			if (this.subCanvas[i] != null && this.subCanvas[i] !== undefined && this.subCanvas.hasOwnProperty(i)) {
				info = this.subCanvas[i]['info'];
				if(filterPosition!= null || filterPosition != undefined) {
					var top = parseInt(info['top'], 10);
					var left = parseInt(info['left'], 10);
					var width = parseInt(info['width'], 10);
					var height = parseInt(info['height'], 10);
					var position = {
						top: top,
						left: left,
						right: left + width,
						bottom: top + height
					};
					if (wdi.CollisionDetector.thereIsBoxCollision(position, filterPosition)) {
						this._doDrawSubCanvas(canvas, this.subCanvas[i], info);
					}
				} else {
					this._doDrawSubCanvas(canvas, this.subCanvas[i], info);
				}
			}
		}
	},

	_doDrawSubCanvas: function(canvas, subCanvas, info) {
		if(this.canvas[this.mainCanvas] == null || this.canvas[this.mainCanvas] == undefined) {
			return;
		}
		var destCtx = null;
		if (info['iconic'] === 0) {
			var destCanvas = subCanvas['canvas'];
			destCtx = destCanvas.getContext("2d");

			var x = 0;
			var y = 0;
			var width = +info.width;
			var height = +info.height;
			var left = +info['left'];
			var top = +info['top'];

			if (left < 0) {
				width = width + left;
				x = -left;
				left = 0;
			}

			if (top < 0) {
				height = height + top;
				y = -top;
				top = 0;
			}

			try {
				// if width or height are less than 1 or a float
				// drawImage fails in firefox (ERROR: IndexSizeError)
				width = Math.max(1, Math.floor(width));
				height = Math.max(1, Math.floor(height));
				if (width > canvas.width) width = canvas.width;
				if (height > canvas.height) height = canvas.height;
				destCtx.drawImage(canvas, left, top, width, height, x, y, width, height);
			} catch (err) {
				console.log(err)
			}

		}
	},

	removeCanvas: function(spiceMessage) {
		var surface = spiceMessage.args;
		if (surface.surface_id === this.mainCanvas) {
			$(this.eventLayer).remove();
			this.eventLayer = null;
		}

		this.canvas[surface.surface_id].keepAlive = false;
		delete this.canvas[surface.surface_id];
		delete this.contexts[surface.surface_id];
	},

	drawCanvas: function(spiceMessage) {
		var surface = spiceMessage.args;
		var cnv = wdi.GlobalPool.create('Canvas');
		cnv.keepAlive = true; //prevent this canvas to return to the pool by packetfilter

		cnv.id = 'canvas_' + surface.surface_id;
		cnv.width = surface.width;
		cnv.height = surface.height;
		cnv.style.position = 'absolute';
		cnv.style.top = this.canvasMarginY + 'px';
		cnv.style.left = this.canvasMarginX + 'px';

		this.canvas[surface.surface_id] = cnv;
		this.contexts[surface.surface_id] = cnv.getContext('2d');

		if (surface.flags && !wdi.SeamlessIntegration) {
			this.mainCanvas = surface.surface_id;

			this.eventLayer = this.createEventLayer('eventLayer', surface.width, surface.height);

			var evLayer = $(this.eventLayer).css({
				position: 'absolute',
				top: this.canvasMarginY + 'px',
				left: this.canvasMarginX + 'px'
			})[0];

			if(this.layer) {
				this.layer.appendChild(cnv);
				this.layer.appendChild(evLayer);
			} else {
				document.body.appendChild(cnv);
				document.body.appendChild(evLayer);
			}

			this.enableKeyboard();
		}

		//this goes here?
		if (this.firstTime && this.clipboardEnabled) {
			var self = this;
			$(document).bind('paste', function(event) {
				self.fire('paste', event.originalEvent.clipboardData.getData('text/plain'));
			});
			this.firstTime = false;
		}


		//notify about resolution
		if (surface.flags) {
			this.fire('resolution', [this.canvas[surface.surface_id].width, this.canvas[surface.surface_id].height]);
		}
	},

	disableKeyboard: function() {
		var documentDOM = window.$(window.document);
		documentDOM.unbind('keydown', this.handleKey);
		documentDOM.unbind('keyup', this.handleKey);
		documentDOM.unbind('keypress', this.handleKey);
		this.inputManager && this.inputManager.disable();
	},

	enableKeyboard: function() {
		var self = this,
			documentDOM = window.$(window.document);
		documentDOM['keydown']([self], this.handleKey);
		documentDOM['keypress']([self], this.handleKey);
		documentDOM['keyup']([self], this.handleKey);
		this.inputManager.enable();
	},

	setCanvasMargin: function(canvasMargin) {
		this.canvasMarginX = canvasMargin.x;
		this.canvasMarginY = canvasMargin.y;
	},

	createEventLayer: function(event_id, width, height) {
		var self = this;

		var eventLayer = $('<canvas/>').css({
			cursor: 'default',
			position: 'absolute'
		}).attr({
				id: event_id,
				width: width,
				height: height
			});

		if (window['bowser']['firefox']) {
			eventLayer.attr('contentEditable', true);
		}

		eventLayer.bind('touchstart', function(event) {
			event.preventDefault();
			var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
			var x = touch.pageX;
			var y = touch.pageY;
			self.generateEvent.call(self, 'mousemove', [x + self.clientOffsetX, y + self.clientOffsetY, self.mouse_status]);
			if (event.originalEvent.touches.length === 1) {
				self.enabledTouchMove = true;
				self.launchRightClick.call(self, x, y);
			} else if (event.originalEvent.touches.length === 2) {
				self.touchX = x;
				self.touchY = y;
				self.enabledTouchMove = false;
			} else if (event.originalEvent.touches.length === 3) {
				self.touchY3 = y;
				self.enabledTouchMove = false;
			}

		});

		eventLayer.bind('touchmove', function(event) {
			var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
			var x = touch.pageX;
			var y = touch.pageY;
			//TODO: ignore first move
			if (event.originalEvent.touches.length === 1 && self.enabledTouchMove) {
				self.isMagnified = true; //magnified!
				clearInterval(self.rightClickTimer); //cancel, this is not a right click

				if (!self.isMouseDown) {
					clearInterval(self.mouseDownTimer); //cancel, not enough time to send mousedown
					self.launchMouseDown(); //fire again
				}


				self.generateEvent.call(self, 'mousemove', [x + self.clientOffsetX, y + self.clientOffsetY - 80, self.mouse_status]);
				var pos = $(this).offset();
				var myX = x - pos.left;
				var myY = y - pos.top;

				//draw magnifier
				if (self.firstMove) {
					$('body').append(self.magnifier);//TODO: append to body?
					self.firstMove = false;
				}

				var posX = myX - 75;
				var posY = myY - 160;

				self.magnifier.css({
					'left': posX,
					'top': posY
				});

				//fill magnifier
				var ctx = self.magnifier[0].getContext('2d');
				ctx.clearRect(0, 0, 150, 150);
				ctx.save();
				ctx.beginPath();
				ctx.arc(75, 75, 75, 0, 2 * Math.PI, false);
				ctx.clip();
				ctx.drawImage(
					self.getCanvas(0),
					myX - 50, //-50 because we are going to get
					myY - 50 - 80, //100 px and we want the finder to be the center
					//-80 becasue the magnifier is 160px up (160/2)
					//we need to clean all this after the demo
					//is working
					100,
					100,
					0,
					0,
					150,
					150
				);
//				//draw the background
				ctx.drawImage(self.magnifierBackground[0], 0, 0);
				ctx.restore();
				//empty magnifier
			} else if (event.originalEvent.touches.length === 2) {
				var delta = self.touchY - y;
				if (Math.abs(delta) > 10) {
					var button = delta > 0 ? 4 : 3;
					self.touchX = x;
					self.touchY = y;
					self.generateEvent.call(self, 'mousedown', button);
					self.generateEvent.call(self, 'mouseup', button);
				}
			} else if (event.originalEvent.touches.length === 3) {
				var delta = self.touchY3 - y;
				if (delta > 100) {
					document.getElementById('hiddeninput').select();
				}
			}
			event.preventDefault();
		});

		eventLayer.bind('touchend', function(event) {
			if (self.enabledTouchMove) {
				var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
				var x = touch.pageX;
				var y = touch.pageY;
				if (!self.isMouseDown) {
					self.generateEvent.call(self, 'mousedown', 0);
				}
				self.isMouseDown = false;
				self.generateEvent.call(self, 'mouseup', 0);
				var pos = $(this).offset();

				self.enabledTouchMove = false;
				self.firstMove = true;
				if (self.isMagnified) {
					self.magnifier.remove();
				}
				self.isMagnified = false;
			}
			clearInterval(self.rightClickTimer); //cancel, this is not a right click
			clearInterval(self.mouseDownTimer);  //cancel
		});

		//if (!Modernizr.touch) {
			eventLayer['mouseup'](function(event) {
				var button = event.button;

				self.generateEvent.call(self, 'mouseup', button);
				self.mouse_status = 0;
				event.preventDefault();
			});

			eventLayer['mousedown'](function(event) {
				var button = event.button;

				self.generateEvent.call(self, 'mousedown', button);
				self.mouse_status = 1;
				event.preventDefault();
			});

			eventLayer['mousemove'](function(event) {
				var x = event.pageX;
				var y = event.pageY;
				self.generateEvent.call(self, 'mousemove', [x + self.clientOffsetX, y + self.clientOffsetY, self.mouse_status]);
				event.preventDefault();
			});

			eventLayer.bind('contextmenu', function(event) {
				event.preventDefault();
				return false;
			});
		//}

		var mouseEventPause = false;

		eventLayer.bind('mousewheel', function(event, delta) {
			var button = delta > 0 ? 3 : 4;

			self.generateEvent.call(self, 'mousedown', button);
			self.generateEvent.call(self, 'mouseup', button);

			return false;
		});


		wdi.VirtualMouse.setEventLayer(eventLayer[0], 0, 0, width, height, 1);
		return eventLayer[0];
	},

	launchRightClick: function(x, y) {
		var self = this;
		this.rightClickTimer = setTimeout(function() {
			self.generateEvent.call(self, 'mousedown', 2);
			self.generateEvent.call(self, 'mouseup', 2);
			self.enabledTouchMove = false;
		}, 400);
	},

	launchMouseDown: function(x, y) {
		var self = this;
		this.mouseDownTimer = setTimeout(function() {
			self.isMouseDown = true;
			self.generateEvent.call(self, 'mousedown', 0);
		}, 1500);
	},

	showError: function(message) {
		wdi.Debug.warn(message);
		$('<div/>', {
			id: 'error'
		}).html(message).css({
				'background-color': '#ff4141'
			}).appendTo('body');

		setTimeout("$('#error').remove()", 2000);
	},

	generateEvent: function(event, params) {
		if (event === 'mousemove' || event === 'joystick') {
			if (this.ack_wait < wdi.SPICE_INPUT_MOTION_ACK_BUNCH) {
				this.ack_wait++;
				this.fire('input', [event, params]);
			}
		} else {
			if (event.indexOf('key') > -1) { // it's a keyEvent
				this.stuckKeysHandler.checkSpecialKey(event, params[0]['keyCode']);
				var val = this.inputManager.getValue();
				if (val) {
					params = this.inputManager.manageChar(val, params);
				}
			}
			this.fire('input', [event, params]);
		}
	},

	motion_ack: function() {
		this.ack_wait = 0;
	},

	setMouseMode: function(mode) {
		this.mouse_mode = mode;
	},

	handleKey: function(e) {
		e.data[0].generateEvent.call(e.data[0], e.type, [e]);

		if (wdi.Keymap.isInKeymap(e.keyCode) && e.type !== "keypress") {
			e.preventDefault();
		}
		//e.data[0].stuckKeysHandler.handleStuckKeys(e);
	},

	setClientOffset: function(x, y) {
		this.clientOffsetX = x;
		this.clientOffsetY = y;
	},

	setClipBoardData: function(data) {
		//we have received new clipboard data
		//show to the user
		//TODO: create a new dialog with buttons to copy the data directly
		//from the textbox
		prompt("New clipboard data available, press ctrl+c to copy it", data);
	},

	initSound: function() {
		var self = this;
//		if (!Modernizr.touch) {
			this.soundStarted = true;
			window.setTimeout(function() {
				self.fire('startAudio');
			}, 100);
/*		} else {
			var $button = $('<button>Start</button>', {id: "startAudio"}).css({
				padding: "10px 25px",
				fontSize: "25px",
				fontFamily: "Verdana",
				cursor: "pointer",
				margin: "0 auto"
			}).click(function() {
					self.soundStarted = true;
					self.fire('startAudio');
					$('#soundButtonContainer').remove();
				});

			var $messageContainer = $('<div id="messageContainer"><p>Click to start using your virtual session:</p></div>').css({
				color: "white",
				textAlign: "center",
				fontSize: "25px",
				fontFamily: "Verdana",
				marginTop: "75px"
			});

			var $container = $('<div></div>', {id: "soundButtonContainer"});

			$button.appendTo($messageContainer);
			$messageContainer.appendTo($container);
			$container.appendTo('body');

			$container.css({
				position: 'absolute',
				zIndex: 999999999,
				top: 0,
				left: 0,
				width: "100%",
				height: document.height,
				backgroundColor: "black"
			});
		}*/
	}

});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.PacketProcess = $.spcExtend(wdi.DomainObject, {
	processors: {},
	
	init: function(c) {
		this.processors[wdi.SpiceVars.SPICE_CHANNEL_MAIN] = c.mainProcess || new wdi.MainProcess({
			app: c.app
		});
		this.processors[wdi.SpiceVars.SPICE_CHANNEL_DISPLAY] = c.displayProcess || new wdi.DisplayPreProcess({
			clientGui: c.clientGui
		});
		this.processors[wdi.SpiceVars.SPICE_CHANNEL_INPUTS] = c.inputsProcess || new wdi.InputProcess({
			clientGui: c.clientGui,
			spiceConnection: c.spiceConnection
		});
		this.processors[wdi.SpiceVars.SPICE_CHANNEL_CURSOR] = c.cursorProcess || new wdi.CursorProcess();
        this.processors[wdi.SpiceVars.SPICE_CHANNEL_PLAYBACK] = c.playbackProcess || new wdi.PlaybackProcess({
			app: c.app
		});
	},
            
    process: function(spiceMessage) {
        if(wdi.exceptionHandling) {
            return this.processExceptionHandled(spiceMessage);
        } else {
            return this.processPacket(spiceMessage);
        }
    },
            
    processExceptionHandled: function(spiceMessage) {
        try {
            return this.processPacket(spiceMessage);
        } catch(e) {
            wdi.Debug.error('PacketProcess: Error processing packet', e);
        }        
    },

	processPacket: function(spiceMessage) {
		if(!spiceMessage || !this.processors[spiceMessage.channel]) {
			throw "Invalid channel or null message";
		}

        this.processors[spiceMessage.channel].process(spiceMessage);
	},

	dispose: function () {
		this.processors[wdi.SpiceVars.SPICE_CHANNEL_DISPLAY].dispose();
	}
});
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.PacketFilter = {
	restoreContext: false,
	start: null,
	filter: function(spiceMessage, fn, scope, clientGui) {
		if(wdi.logOperations) {
			this.start = Date.now();
		}

		//TODO: design an architecture for loading
		//dynamic filters, instead of filtering here.
		//This should be just the entry point for filters.
		if (wdi.graphicDebug && wdi.graphicDebug.debugMode) {
			wdi.graphicDebug.printDebugMessageOnFilter(spiceMessage, clientGui);
		}
		//end of hardcoded filter

        // MS Word Benchmark startup
        if (wdi.IntegrationBenchmark && wdi.IntegrationBenchmark.benchmarking) {
            var date = new Date();
            wdi.IntegrationBenchmark.setStartTime(date.getTime());
        }

		//check clipping
		if(spiceMessage.args.base) {
			if(spiceMessage.args.base.clip.type === wdi.SpiceClipType.SPICE_CLIP_TYPE_RECTS) {
				var context = clientGui.getContext(spiceMessage.args.base.surface_id);
				context.save();
				context.beginPath();
				var rects = spiceMessage.args.base.clip.rects.rects;
				var len = rects.length;
				while(len--) {
					var box = wdi.graphics.getBoxFromSrcArea(rects[len]);
					context.rect(box.x, box.y, box.width, box.height);
				}
				context.clip();
				this.restoreContext = spiceMessage.args.base.surface_id;
			}
		}
        fn.call(scope, spiceMessage);
	},

    notifyEnd: function(spiceMessage, clientGui) {
		if(this.restoreContext !== false) {
			var context = clientGui.getContext(this.restoreContext);
			context.restore();
			this.restoreContext = false;
		}

        if(wdi.SeamlessIntegration) {
			var filterPosition = null;
			if(spiceMessage.args.base && spiceMessage.args.base.box) {
				filterPosition = spiceMessage.args.base.box;
			}
            clientGui.fillSubCanvas(filterPosition);
        }

		if (wdi.graphicDebug && wdi.graphicDebug.debugMode) {
			wdi.graphicDebug.printDebugMessageOnNotifyEnd(spiceMessage, clientGui);
		}

        // MS Word Benchmark
        if (wdi.IntegrationBenchmark && wdi.IntegrationBenchmark.benchmarking) {
            var date = new Date();
            wdi.IntegrationBenchmark.setEndTime(date.getTime());
        }

        // clear the tmpcanvas
        wdi.GlobalPool.cleanPool('Canvas');
		wdi.GlobalPool.cleanPool('Image');
		if(wdi.logOperations) {
			wdi.DataLogger.log(spiceMessage, this.start);
		}
	}



}

/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.PacketFactory = {
	extract: function(rawSpiceMessage) {
		var packet = null;
		switch (rawSpiceMessage.channel) {
			case wdi.SpiceVars.SPICE_CHANNEL_DISPLAY:
				if (wdi.graphicDebug && wdi.graphicDebug.debugMode) {
					var originalData = JSON.stringify(rawSpiceMessage);
				}
				switch (rawSpiceMessage.header.type) {
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_MODE:
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_MARK:
                        packet = new wdi.SpiceDisplayMark().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_RESET:
                        packet = new wdi.SpiceDisplayReset().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_COPY_BITS:
						packet = new wdi.SpiceCopyBits().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_LIST:
						packet = new wdi.SpiceResourceList().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_ALL_PIXMAPS:
						//TODO: remove all pixmaps
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_PALETTE:
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_INVAL_ALL_PALETTES:
                        packet =  new wdi.SpiceDisplayInvalidAllPalettes().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_CREATE:
						packet =  new wdi.SpiceStreamCreate().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DATA:
						packet =  new wdi.SpiceStreamData().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_CLIP:
						packet =  new wdi.SpiceStreamClip().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DESTROY:
						packet =  new wdi.SpiceStreamDestroy().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_STREAM_DESTROY_ALL:
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_FILL:
						packet = new wdi.SpiceDrawFill().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_OPAQUE:
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_COPY:
						// Spice Draw Copy is composed by DisplayBase (surface_id 32, SpiceRect(top 32, left 32, bottom 32, right 32), SpiceClip(type 8 if 1: SpiceClipRects(num_rects 32, vector: SpiceRect(top 32, left 32, bottom 32, right 32)))) and SpiceCopy (offset 32 if not 0: SpiceImage(SpiceImageDescriptor(id 32, type 8, flags 8, width 32, height 32), case descriptor type to parse image), SpiceRect(top 32, left 32, bottom 32, right 32), rop_descriptor 16, scale_mode 8, SpiceQMask)
						packet = new wdi.SpiceDrawCopy().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLEND:
						packet = new wdi.drawBlend().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_BLACKNESS:
						packet = new wdi.SpiceDrawBlackness().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_WHITENESS:
						packet = new wdi.SpiceDrawWhiteness().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_INVERS:
						packet = new wdi.SpiceDrawInvers().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ROP3:
						packet = new wdi.SpiceDrawRop3().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_STROKE:
						packet = new wdi.SpiceStroke().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TEXT:
						packet = new wdi.SpiceDrawText().demarshall(rawSpiceMessage.body, rawSpiceMessage.header.size);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_TRANSPARENT:
						packet = new wdi.drawTransparent().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND:
						packet = new wdi.drawAlphaBlend().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_SURFACE_CREATE:
						packet = new wdi.SpiceSurface().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_DISPLAY_SURFACE_DESTROY:
						packet = new wdi.SpiceSurfaceDestroy().demarshall(rawSpiceMessage.body);
						break;
				}
				break;
			case wdi.SpiceVars.SPICE_CHANNEL_INPUTS:
				switch (rawSpiceMessage.header.type) {
					case wdi.SpiceVars.SPICE_MSG_INPUTS_MOUSE_MOTION_ACK:
						packet = new Object(); //dummy!
						break;
				}
				break;
			case wdi.SpiceVars.SPICE_CHANNEL_MAIN:
				switch (rawSpiceMessage.header.type) {
					case wdi.SpiceVars.SPICE_MSG_MAIN_INIT:
						packet = new wdi.RedMainInit().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_MAIN_AGENT_DATA:
						packet = new wdi.VDAgentMessage().demarshall(rawSpiceMessage.body);
						break;
					case wdi.SpiceVars.SPICE_MSG_MAIN_AGENT_DISCONNECTED:
						packet = new wdi.SpiceMsgMainAgentDisconnected().demarshall(rawSpiceMessage.body);
						break;
                    case wdi.SpiceVars.SPICE_MSG_MAIN_AGENT_CONNECTED:
                        packet = new wdi.SpiceMsgMainAgentConnected().demarshall(rawSpiceMessage.body);
                        break;
                    case wdi.SpiceVars.SPICE_MSG_MAIN_MULTI_MEDIA_TIME:
                        packet = new wdi.MainMultiMediaTime().demarshall(rawSpiceMessage.body);
                        break;
                    case wdi.SpiceVars.SPICE_MSG_MAIN_CHANNELS_LIST:
                        packet = new wdi.MainMChannelsList().demarshall(rawSpiceMessage.body);
                        break;
				}
				break;
			case wdi.SpiceVars.SPICE_CHANNEL_CURSOR:
				switch (rawSpiceMessage.header.type) {
					case wdi.SpiceVars.SPICE_MSG_CURSOR_INIT:
						packet = new wdi.RedCursorInit().demarshall(rawSpiceMessage.body, rawSpiceMessage.header.size);
						break;
					case wdi.SpiceVars.SPICE_MSG_CURSOR_SET:
						packet = new wdi.RedCursorSet().demarshall(rawSpiceMessage.body, rawSpiceMessage.header.size);
						break;
				}
				break;
            case wdi.SpiceVars.SPICE_CHANNEL_PLAYBACK:
                switch(rawSpiceMessage.header.type) {
                    case wdi.SpiceVars.SPICE_MSG_PLAYBACK_MODE:
                        packet = new wdi.PlaybackMode().demarshall(rawSpiceMessage.body, rawSpiceMessage.header.size);
                        break;
                    case wdi.SpiceVars.SPICE_MSG_PLAYBACK_START:
                        packet = new wdi.PlaybackStart().demarshall(rawSpiceMessage.body, rawSpiceMessage.header.size);
                        break;
                    case wdi.SpiceVars.SPICE_MSG_PLAYBACK_STOP:
                        packet = new wdi.PlaybackStop().demarshall(rawSpiceMessage.body, rawSpiceMessage.header.size);
                        break;
                    case wdi.SpiceVars.SPICE_MSG_PLAYBACK_DATA:
                        packet = new wdi.PlaybackData().demarshall(rawSpiceMessage.body, rawSpiceMessage.header.size);
                        break;
                }
		}
		if(packet) {
			if (wdi.graphicDebug && wdi.graphicDebug.debugMode && originalData) {
				packet.originalData = originalData;
			}
			return new wdi.SpiceMessage({
				messageType: rawSpiceMessage.header.type, 
				channel: rawSpiceMessage.channel, 
				args: packet
			});
		} 
		wdi.Debug.log(rawSpiceMessage.header.type, rawSpiceMessage.header.channel);
		return false;
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

Application = $.spcExtend(wdi.DomainObject, {
    spiceConnection: null,
    clientGui: null,
    agent: null,
    externalCallback: null,
    keyboardEnabled: true,
    packetProcess: null,
    inputProcess: null,
    multimediaTime: null,
    lastMultimediaTime: null,
    busConnection: null,
    busProcess: null,
	timeLapseDetector: null,

    init: function (c) {
        wdi.GlobalPool.init();
        this.spiceConnection = c.spiceConnection || new wdi.SpiceConnection();
        this.clientGui = c.clientGui || new wdi.ClientGui();
        this.agent = c.agent || new wdi.Agent({
			app: this
		});

        this.inputProcess = c.inputProcess || new wdi.InputProcess({
			clientGui: this.clientGui,
			spiceConnection: this.spiceConnection
		});
        this.packetProcess = c.packetProcess;
        this.busConnection = c.busConnection || new wdi.BusConnection();
        this.busProcess = c.busProcess || new wdi.BusProcess({
			clientGui: this.clientGui,
			busConnection: this.busConnection
		});
		this.timeLapseDetector = c.timeLapseDetector || new wdi.TimeLapseDetector();
        this.setup();
    },

    run: function (c) {
	    if(c.hasOwnProperty('seamlessDesktopIntegration')) {
		    wdi.SeamlessIntegration = c['seamlessDesktopIntegration'];
	    }

		if (!this.packetProcess) {
			var displayProcess = false;

			if (c.useWorkers === false) {
				displayProcess = new wdi.DisplayProcess({
					clientGui: this.clientGui
				});
			}

			this.packetProcess = new wdi.PacketProcess({
				app: this,
				clientGui: this.clientGui,
				agent: this.agent,
				spiceConnection: this.spiceConnection,
	            inputsProcess: this.inputProcess,
	            displayProcess: displayProcess
	        })
		}
        if (window.vdiLoadTest) {
            this.spiceConnection.addListener('message', this.onMessage, this);
        } else {
            this.spiceConnection.addListener('message', this.packetProcess.process, this.packetProcess);
        }


        this.busConnection.connect(c);
		this.timeLapseDetector.startTimer();

        if (c['canvasMargin']) {
            this.clientGui.setCanvasMargin(c['canvasMargin']);
        }

        if (c['disableClipboard']) {
            this.agent.disableClipboard();
            this.clientGui.disableClipboard();
            this.enableCtrlV();
        }

        if(c['layer']) {
            this.clientGui.setLayer(c['layer']);
        }

        if (this.clientGui.checkFeatures()) {
            if (wdi.SeamlessIntegration) {
                this.disableKeyboard();//keyboard should start disabled is integrated
            }
            wdi.Keymap.loadKeyMap(c['layout']);
            this.setExternalCallback(c['callback'], c['context']);

            try {
                this.connect({
					host: c['host'],
					port: c['port'],
					protocol: c['protocol'],
					vmHost: c['vmHost'],
					vmPort: c['vmPort'],
                    vmInfoToken: c['vmInfoToken'],
					busHost: c['busHost'],
					token: c['token'],
					connectionControl: c['connectionControl'],
                    heartbeatToken: c['heartbeatToken'],
					heartbeatTimeout: c['heartbeatTimeout']
				});
            } catch (e) {
                this.executeExternalCallback('error', 1);
            }

            this.clientGui.setClientOffset(c['clientOffset']['x'], c['clientOffset']['y']);
        }
		if (c.hasOwnProperty('externalClipboardHandling')) {
			this.externalClipoardHandling = c['externalClipboardHandling'];
		}
    },

    end: function () {
        //TODO: end?
    },

    setup: function () {
        this.spiceConnection.addListener('mouseMode', this.onMouseMode, this);
        this.spiceConnection.addListener('initAgent', this.onInitAgent, this);
        this.spiceConnection.addListener('error', this.onDisconnect, this);
		this.spiceConnection.addListener('channelConnected', this.onChannelConnected, this);
        this.clientGui.addListener('input', this.onClientInput, this);
        this.clientGui.addListener('resolution', this.onResolution, this);
        this.clientGui.addListener('paste', this.onPaste, this);
        this.clientGui.addListener('startAudio', this.onStartAudio, this);
        this.busProcess.addListener('windowCreated', this.onWindowCreated, this);
        this.busProcess.addListener('windowClosed', this.onWindowClosed, this);
        this.busProcess.addListener('windowMoved', this.onWindowMoved, this);
        this.busProcess.addListener('windowResized', this.onWindowResized, this);
        this.busProcess.addListener('windowFocused', this.onWindowFocused, this);
        this.busProcess.addListener('windowMinimized', this.onWindowMinimized, this);
        this.busProcess.addListener('windowRestored', this.onWindowRestored, this);
        this.busProcess.addListener('windowMaximized', this.onWindowMaximized, this);
        this.busProcess.addListener('busConnected', this.onBusConnected, this);
	    this.busProcess.addListener('menuResponse', this.onMenuResponse, this);
		this.busProcess.addListener('networkDriveResponse', this.onNetworkDriveResponse, this);
		this.busProcess.addListener('wrongPathError', this.onWrongPathError, this);
		this.busProcess.addListener('applicationLaunchedSuccessfully', this.onApplicationLaunchedSuccessfully, this);
		this.agent.addListener('clipBoardData', this.onClipBoardData, this);
        this.busConnection.addListener('busMessage', this.onBusMessage, this);
        this.busConnection.addListener('error', this.onDisconnect, this);
		this.timeLapseDetector.addListener('timeLapseDetected', this.onTimeLapseDetected, this);
    },

	onChannelConnected: function(params) {
		var channel = params;
		if (channel === wdi.SpiceVars.SPICE_CHANNEL_INPUTS) {
			this.clientGui.releaseAllKeys();
		}
	},

	onNetworkDriveResponse: function(params) {
		this.executeExternalCallback('networkDriveResponse', params);
	},

    onDisconnect: function (params) {
		var error = params;
        this.executeExternalCallback('error', error);
    },

    onResolution: function (params) {
        this.executeExternalCallback('resolution', params);
    },

    onClipBoardData: function (params) {
		if (this.externalClipoardHandling) {
			this.executeExternalCallback('clipboardEvent', params);
		} else {
			this.clientGui.setClipBoardData(params);
		}
    },

    onWindowMinimized: function (params) {
        var window = params;
        var params = this.clientGui.resizeSubCanvas(window);
        this.executeExternalCallback('windowMinimized', params);
    },

    onWindowFocused: function (params) {
        this.executeExternalCallback('windowFocused', params);
    },

    onWindowRestored: function (params) {
        var window = params;
        var params = this.clientGui.resizeSubCanvas(window);
        this.executeExternalCallback('windowRestored', params);
    },

    onWindowMaximized: function (params) {
        var window = params;
        var params = this.clientGui.resizeSubCanvas(window);
        this.executeExternalCallback('windowMaximized', params);
    },

    onWindowResized: function (params) {
        var window = params;
        var params = this.clientGui.resizeSubCanvas(window);
        this.executeExternalCallback('windowResized', params);
    },

    onWindowMoved: function (params) {
        var window = params;
        var params = this.clientGui.moveSubCanvas(window);
        this.executeExternalCallback('windowMoved', params);
    },

    onWindowClosed: function (params) {
        var window = params;
        var params = this.clientGui.deleteSubCanvas(window);
        this.executeExternalCallback('windowClosed', params);
    },

    onWindowCreated: function (params) {
        var window = params;
        var params = this.clientGui.createNewSubCanvas(window);
        this.executeExternalCallback('windowCreated', params);
    },

	onMenuResponse: function(params) {
		var menuData = params;
		this.executeExternalCallback('menuResponse', menuData);
	},

    //Events
    onClientInput: function (params) {
        var data = params;
		var type = data[0];
		this.inputProcess.send(data, type);
	},

    onMessage: function (params) {
        var message = params;
        this.packetProcess.process(message);

        var self = this;

        window.checkResultsTimer && clearTimeout(window.checkResultsTimer);
        window.checkResultsTimer = window.setTimeout(function () {
            self.executeExternalCallback('checkResults');
            window.vdiLoadTest = false;
        }, 5000);

    },

    onBusConnected: function(params) {
        if (wdi.SeamlessIntegration) {
            this.busProcess.requestWindowList(); //request windows list
        }
    },

    onBusMessage: function (params) {
        var message = params;
        this.busProcess.process(message);
    },

    onInitAgent: function (params) {
        this.agent.setClientTokens(params);
        this.agent.sendInitMessage(this);
        this.executeExternalCallback('ready', params);
//		this.clientGui.releaseAllKeys();
	},

    onMouseMode: function (params) {
        this.clientGui.setMouseMode(params);
    },

    onPaste: function (params) {
        this.agent.setClipboard(params);
    },

    onStartAudio: function () {
        this.packetProcess.processors[wdi.SpiceVars.SPICE_CHANNEL_PLAYBACK].startAudio();
    },

	onTimeLapseDetected: function (params) {
		var elapsedMillis = params;
		this.executeExternalCallback('timeLapseDetected', elapsedMillis);
	},

    connect: function (connectionInfo) {
        try {
            this.spiceConnection.connect(connectionInfo);
        } catch (e) {
            this.clientGui.showError(e.message);
        }
    },

    setExternalCallback: function (fn, context) {
        this.externalCallback = [fn, context];
    },

    executeExternalCallback: function (action, params) {
        this.externalCallback[0].call(this.externalCallback[1], action, params);
    },

    sendCommand: function (action, params) {
        switch (action) {
            case "close":
                this.busProcess.closeWindow(params['hwnd']);
                break;
            case "move":
                this.busProcess.moveWindow(params['hwnd'], params['x'], params['y']);
                break;
            case "minimize":
                this.busProcess.minimizeWindow(params['hwnd']);
                break;
            case "maximize":
                this.busProcess.maximizeWindow(params['hwnd']);
                break;
            case "restore":
                this.busProcess.restoreWindow(params['hwnd']);
                break;
            case "focus":
                this.busProcess.focusWindow(params['hwnd']);
                break;
            case "resize":
                this.busProcess.resizeWindow(params['hwnd'], params['width'], params['height']);
                break;
            case "run":
                this.busProcess.executeCommand(params['cmd']);
                break;
            case "setResolution":
                this.agent.setResolution(params['width'], params['height']);
                break;
			case 'getMenu':
				this.busProcess.getMenu();
				break;
			case 'reMountNetworkDrive':
				this.busProcess.reMountNetworkDrive(params['host'], params['username'], params['password']);
				break;
		}
    },

    enableKeyboard: function () {
    	this.clientGui.enableKeyboard();
    },

    disableKeyboard: function () {
		this.clientGui.disableKeyboard();
    },

    enableCtrlV: function () {
        wdi.KeymapES.setCtrlKey(86, 0x2F);
        wdi.KeymapUS.setCtrlKey(86, 0x2F);
    },

	disconnect: function() {
		this.busConnection.disconnect();
		this.spiceConnection.disconnect();
	},

    setMultimediaTime: function (time) {
        this.multimediaTime = time;
        this.lastMultimediaTime = Date.now();
    },

    sendShortcut: function(shortcut) {
        if(shortcut == wdi.keyShortcutsHandled.CTRLV) {
            this.inputProcess.send([
                "keydown",
                [
                    {
                        'generated': true,
                        'type': "keydown",
                        'keyCode': 17,
                        'charCode': 0
                    }
                ]

            ], "keydown"); //ctrl down

            this.inputProcess.send([
                "keydown",
                [
                    {
                        'generated': true,
                        'type': "keydown",
                        'keyCode': 86,
                        'charCode': 0
                    }
                ]

            ], "keydown"); //v

            this.inputProcess.send([
                "keyup",
                [
                    {
                        'generated': true,
                        'type': "keyup",
                        'keyCode': 86,
                        'charCode': 0
                    }
                ]

            ], "keyup"); //v up

            this.inputProcess.send([
                "keyup",
                [
                    {
                        'generated': true,
                        'type': "keyup",
                        'keyCode': 17,
                        'charCode': 0
                    }
                ]

            ], "keyup"); //ctrl up
        }
    },

	dispose: function () {
		this.disableKeyboard();
		this.disconnect();
		this.packetProcess.dispose();
	},

    onWrongPathError: function (params) {
        this.executeExternalCallback('wrongPathError', params);
    },

    onApplicationLaunchedSuccessfully: function (params) {
        this.executeExternalCallback('applicationLaunchedSuccessfully', params);
    },

    getKeyboardHandler: function() {
        return this.clientGui.handleKey;
    },

    getClientGui: function() {
        return this.clientGui;
    },

    setCurrentWindow: function(wnd) {
        this.clientGui.inputManager.setCurrentWindow(wnd);
    }
});

window['Application'] = Application;
Application.prototype['run'] = Application.prototype.run;
Application.prototype['sendCommand'] = Application.prototype.sendCommand;
Application.prototype['enableKeyboard'] = Application.prototype.enableKeyboard;
Application.prototype['disableKeyboard'] = Application.prototype.disableKeyboard;
Application.prototype['dispose'] = Application.prototype.dispose;
Application.prototype['getKeyboardHandler'] = Application.prototype.getKeyboardHandler;
Application.prototype['getClientGui'] = Application.prototype.getClientGui;
Application.prototype['setCurrentWindow'] = Application.prototype.setCurrentWindow;
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.VirtualMouse = {
	eventLayers: [],
	mouseData:null,
	visible: null,
	lastLayer: null,
	hotspot: {
		x: 0,
		y: 0
	},
	lastMousePosition: {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},

	setHotspot: function(x, y) {
		this.hotspot.x = x;
		this.hotspot.y = y;
	},

	setEventLayer: function(ev, x, y, width, height, position) {
		this.eventLayers.push({
			layer: ev,
			left: x,
			top: y,
			right: x+width,
			bottom: y+height,
			position: position
		});
	},

	removeEventLayer: function(ev) {
		var len = this.eventLayers.length;
		for(var i=0;i<len;i++) {
			if(this.eventLayers[i].layer.id === ev.id) {
				this.eventLayers[ev.id] = undefined;
			}
		}
	},

	getEventLayer: function(x, y) {
		var len = this.eventLayers.length;
		var layer = null;
		for(var i=0;i<len;i++) {
			layer = this.eventLayers[i];
			if(x >= layer.left && x <= layer.right && y >= layer.top && y <= layer.bottom) {
				return layer.layer;
			}
		}
	},

	setMouse: function(mouseData, x, y) {
        //if(!Modernizr.touch) {
            var layer = null;
            var len = this.eventLayers.length;
            for(var i=0;i<len;i++) {
                layer = this.eventLayers[i];
                layer.layer.style.cursor = 'url('+mouseData+') ' + x + ' ' + y + ', default';
            }
        //}
	}
}
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.ImageCache = {
	images: {},
	cursor: {},
	palettes: {},

	getImageFrom: function(descriptor, cb) {
	//see http://jsperf.com/todataurl-vs-getimagedata-to-base64/7
		var cnv = wdi.GlobalPool.create('Canvas');
		var imgData = this.images[descriptor.id.toString()];
		cnv.width = imgData.width;
		cnv.height = imgData.height;
		cnv.getContext('2d').putImageData(imgData,0,0);
		cb(cnv);
	},

	isImageInCache: function(descriptor) {
		if(descriptor.id.toString() in this.images) {
			return true;
		}
		return false;
	},

	delImage: function(id) {
		delete this.images[id.toString()];
	},

	addImage: function(descriptor, canvas) {
		if(canvas.getContext) {
			this.images[descriptor.id.toString()] = canvas.getContext('2d').getImageData(0,0,canvas.width, canvas.height);
		} else {
			this.images[descriptor.id.toString()] = canvas;
		}

	},

	getCursorFrom: function(cursor) {
		return this.cursor[cursor.header.unique.toString()];
	},

	addCursor: function(cursor, imageData) {
		this.cursor[cursor.header.unique.toString()] = imageData;
	},

	getPalette: function(id) {
		return this.palettes[id.toString()];
	},

	addPalette: function(id, palette) {
		this.palettes[id.toString()] = palette;
	},

	clearPalettes: function() {
		this.palettes = {};
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.RasterOperation = {

	process: function(rop, sourceImg, destImg) {//sourceImg could be brush or image (both imageData)
		var result = null;
		if (rop & wdi.SpiceRopd.SPICE_ROPD_INVERS_SRC) {
			sourceImg = this.invert(sourceImg);
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_INVERS_BRUSH) {
			sourceImg = this.invert(sourceImg);
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_INVERS_DEST) {
			destImg = this.invert(destImg);
		}

		if (rop & wdi.SpiceRopd.SPICE_ROPD_OP_PUT) {
			return sourceImg;
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_OP_OR) {
			result = this.boolOp(sourceImg, destImg, 'or');
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_OP_AND) {
			result = this.boolOp(sourceImg, destImg, 'and');
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_OP_XOR) {
			result = this.boolOp(sourceImg, destImg, 'xor');
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_OP_BLACKNESS) {
			result = this.lightness(destImg, 'b');
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_OP_WHITENESS) {
			result = this.lightness(destImg);
		} else if (rop & wdi.SpiceRopd.SPICE_ROPD_OP_INVERS) {
			result = this.invert(destImg);
		}

		if (rop & wdi.SpiceRopd.SPICE_ROPD_INVERS_RES) {
			return this.invert(result);
		} else {
			return result;
		}
		
	},

	flip: function(sourceImg) {
		sourceImg = wdi.Flipper.flip(sourceImg);
		return sourceImg;
	},

	invert: function(sourceImg) {
		sourceImg = $(sourceImg).pixastic('invert')[0];

		return sourceImg;
	},
	
	lightness: function(sourceImg, ratio) {
		var ratio = ratio==='b'?-100:100;
		sourceImg = $(sourceImg).pixastic('hsl', {hue:30,saturation:20,lightness:ratio})[0];
		
		return sourceImg;
	},
	
	boolOp: function(sourceImg, destImg, op) {
		//or and and xor implemented without globalcomposition
		//because it is really buggy
		
		var source = wdi.graphics.getDataFromImage(sourceImg).data;
		var dest = wdi.graphics.getDataFromImage(destImg).data;
		
		var length = source.length-1;
		var tmp_canvas = wdi.graphics.getNewTmpCanvas(sourceImg.width, sourceImg.height);
		var tmp_context = tmp_canvas.getContext('2d');
		
		var resultImageData = tmp_context.createImageData(sourceImg.width, sourceImg.height);
		var result = resultImageData.data;
		
		if(op === 'or') {
			while(length > 0) {
				resultImageData.data[length] = 255;
				result[length-1] = source[length-1] | dest[length-1];
				result[length-2] = source[length-2] | dest[length-2];
				result[length-3] = source[length-3] | dest[length-3];
				length-=4;
			}	
		} else if(op === 'and') {
			while(length > 0) {
				resultImageData.data[length] = 255;
				result[length-1] = source[length-1] & dest[length-1];
				result[length-2] = source[length-2] & dest[length-2];
				result[length-3] = source[length-3] & dest[length-3];
				length-=4;
			}	
		} else if(op === 'xor') {
			while(length > 0) {
				resultImageData.data[length] = 255;
				result[length-1] = source[length-1] ^ dest[length-1];
				result[length-2] = source[length-2] ^ dest[length-2];
				result[length-3] = source[length-3] ^ dest[length-3];
				length-=4;
			}		
		}
		tmp_context.putImageData(resultImageData, 0, 0);
		return tmp_canvas;
	}
};
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.Stream = {
	streams: {},
	
	addStream: function(id, stream) {
		this.streams[id] = stream;
	},
	
	deleteStream: function(id) {
		this.streams[id] = undefined;
	},
	
	getStream: function(id) {
		return this.streams[id];
	},
	
	clip: function(id, clip) {
		this.streams[id].clip = clip;
	}
}
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.
 
This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.
 
You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see 
<http://www.gnu.org/licenses/agpl-3.0.txt>.
 
See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org
 
The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.
 
In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the 
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice. 
 */

wdi.InputManager = $.spcExtend(wdi.EventObject.prototype, {

	checkFocus: false,
	input: null,
	window: null,
	stuckKeysHandler: null,

	init: function (c) {
		this.superInit();
		this.input = c.input;
		this.window = c.window;
		this.stuckKeysHandler = c.stuckKeysHandler;
		this.$ = c.jQuery || $;
		if (!c.disableInput) {
			this.inputElement = this.$('<div style="position:absolute"><input type="text" id="inputmanager" style="opacity:0;color:transparent"/></div>');
		}
		this.currentWindow = null;
	},

	setCurrentWindow: function(wnd) {
		wnd = this.$(wnd);
		if(this.currentWindow) {
			this.inputElement.remove();
			//remove listeners
			this.currentWindow.unbind('blur');
		}
		this.$(wnd[0].document.body).prepend(this.inputElement);
		this.input = this.$(wnd[0].document.getElementById('inputmanager'));
		//TODO: remove events from the other window
		this.addListeners(wnd);
		this.currentWindow = wnd;
	},

	addListeners: function (wnd) {
		this._onBlur(wnd);
		this._onInput();
	},

	_onBlur: function (wnd) {
		var self = this;
		wnd.on('blur', function onBlur (e) {
			if (self.checkFocus) {
				self.input.focus();
			}
			self.stuckKeysHandler.releaseSpecialKeysPressed();
		});
	},

	_onInput: function () {
		var self = this;
		this.input.on('input', function input (e) {
			// ctrl-v issue related
			var aux = self.input.val();
			if (aux.length > 1) {
				self.reset();
			}
		});
	},

	enable: function () {
		this.checkFocus = true;
		this.input.select();
	},

	disable: function () {
		this.checkFocus = false;
		this.input.blur();
	},

	reset: function () {
		this.input.val("");
	},

	getValue: function () {
		var val = this.input.val();
		if (val) {
			this.reset();
		}
		return val;
	},

	manageChar: function (val, params) {
		var res = [Object.create(params[0])];
		res[0]['type'] = 'inputmanager';
		res[0]['charCode'] = val.charCodeAt(0);
		return res;
	}

});
wdi.BUS_TYPES = {
	file: 0,  // obsolete
	print: 1, // obsolete
	launchApplication: 2,
	windowManagement: 3,
	menu: 5,
	networkDriveManagement: 6,


	// Messages used during developing (for benchmarks and whatever).
	// you should not use them in code for production purposes.
	killApplicationDoNotUseInProductionEver: 34423423
};

wdi.BusProcess = $.spcExtend(wdi.EventObject.prototype, {
	busConnection: null,
	clientGui: null,

	init: function(c) {
		this.superInit();
		this.clientGui = c.clientGui;
		this.busConnection = c.busConnection;
	},

	process: function(message) {
		switch(message['verb']) {
			case "CONNECTED":
				this.busConnection.setSubscriptions();
				this.fire('busConnected');
				break;
			case "MESSAGE":
				this.parseMessage(message['body']);
				break;
			case "ERROR":
				console.error("Bus error");
				break;
			default:
				wdi.Debug.warn("Not implemented Stomp Verb: " + message['verb']);
		}
	},

	parseMessage: function(body) {
		switch(parseInt(body['type'])) {
			case wdi.BUS_TYPES.launchApplication:
				this.parseLaunchApplicationMessage(body);
				break;
			case wdi.BUS_TYPES.killApplicationDoNotUseInProductionEver:
				// this is a message we send to the other side of the bus
				// so do nothing.
				break;
			case wdi.BUS_TYPES.windowManagement:
				this.parseWindowManagementMessage(body);
				break;
			case wdi.BUS_TYPES.menu:
				this.handleMenuMessage(body);
				break;
			case wdi.BUS_TYPES.networkDriveManagement:
				this._handleNetworkDriveMessage(body);
				break;
			default:
				wdi.Debug.info("Bus type '" + body['type'] + "' not implemented.");
		}
	},

	_handleNetworkDriveMessage : function(message) {
		if(message.event != 'reMountNetworkDrive') {
			this.fire('networkDriveResponse', message);
		}
	},

	getMenu: function() {
		this.busConnection.send(
			{
				"type": wdi.BUS_TYPES.menu,
				"value": false,
				"event": 'request'
			}
		)
	},

	handleMenuMessage: function(message) {
		if(message.event == 'response') {
			this.fire('menuResponse', message);
		}
	},

	parseWindowManagementMessage: function(message) {
		switch (message['event']) {
			case 'windowList':
			case 'windowCreated':
			case 'windowClosed':
			case 'windowMoved':
			case 'windowResized':
			case 'windowFocused':
			case 'windowMinimized':
			case 'windowRestored':
			case 'windowMaximized':
				this.fire(message['event'], message['value']);
				break;
			default:
				wdi.Debug.info("Event '" + message['event'] + "' not implemented.")
		}
	},

	closeWindow: function(hwnd) {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'closeWindow',
					"hwnd": hwnd
				}
			)
		);
	},

	moveWindow: function(hwnd, x, y) {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'moveWindow',
					"hwnd": hwnd,
					"left": x,
					"top": y
				}
			)
		);
	},

	minimizeWindow: function(hwnd) {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'minimizeWindow',
					"hwnd": hwnd
				}
			)
		);
	},

	maximizeWindow: function(hwnd) {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'maximizeWindow',
					"hwnd": hwnd
				}
			)
		);
	},

	restoreWindow: function(hwnd) {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'restoreWindow',
					"hwnd": hwnd
				}
			)
		);
	},

	focusWindow: function(hwnd) {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'focusWindow',
					"hwnd": hwnd
				}
			)
		);
	},

	resizeWindow: function(hwnd, width, height) {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'resizeWindow',
					"hwnd": hwnd,
					"width": width,
					"height": height
				}
			)
		);
	},

	requestWindowList: function() {
		this.busConnection.send(
			this._constructWindowManagementMessage(
				{
					"event": 'getWindowList'
				}
			)
		)
	},

	executeCommand: function(cmd) {
		this.busConnection.send(
			{
				"type": wdi.BUS_TYPES.launchApplication,
				"application": cmd
			}
		)

	},

	_constructWindowManagementMessage: function(obj) {
		if (obj['event'] === undefined) {
			throw new Error("You should pass an 'event' attribute in the object");
		}
		var ret = {
			'type': wdi.BUS_TYPES.windowManagement,
			'event': obj['event'],
			'value': {}
		};
		for (var i in obj) {
			if (i != 'event' && obj.hasOwnProperty(i)) {
				ret['value'][i] = obj[i];
			}
		}
		return ret;
	},

	reMountNetworkDrive: function(host, username, password) {
		this.busConnection.send(
			{
				"type": wdi.BUS_TYPES.networkDriveManagement,
				"event": "reMountNetworkDrive",
				"host": host,
				"username": username,
				"password": password
			}
		)
	},

	parseLaunchApplicationMessage: function (message) {
		switch (message['event']) {
			case 'applicationLauncherWrongAppPathError':
				this.fire('wrongPathError', message);
				break;
			case 'applicationLaunchedSuccessfully':
				this.fire('applicationLaunchedSuccessfully', message);
				break;
			default:
				wdi.Debug.info("Event '" + message['event'] + "' not implemented.")
		}
	}
});
wdi.DisplayProcess = $.spcExtend(wdi.EventObject.prototype, {
	runQ: null,
	packetFilter: null,
	
	init: function(c) {
		this.runQ = c.runQ || wdi.ExecutionControl.runQ;
		this.packetFilter = c.packetFilter || wdi.PacketFilter;
		this.clientGui = c.clientGui;
		this.displayRouter = c.displayRouter || new wdi.DisplayRouter({clientGui:this.clientGui});
		this.started = false;
		this.waitingMessages = [];
		this.packetWorkerIdentifier = c.packetWorkerIdentifier || new wdi.PacketWorkerIdentifier();
	},

	process: function(spiceMessage) {
		//this._process(spiceMessage);
		//disable requestanimationframe equivalent for the moment
		//the remove redundant draws implementation is buggy
		//and there are considerations on how it is implemented


		var self = this;
		this.waitingMessages.push(spiceMessage);

		if(!this.started) {
			this.timer = setInterval(function() {
				self.flush();
			}, 50);
			this.started = true;
		}

	},

	flush: function() {
		if(this.waitingMessages.length === 0) {
			return;
		}

		var i = 0;
		var spiceMessage;

		//remove redundant draws
		this.removeRedundantDraws();

		var size = this.waitingMessages.length;

		while(i < size) {
			spiceMessage = this.waitingMessages[i];
			this._process(spiceMessage);
			i++;
		}

		this.waitingMessages = [];
	},

	removeRedundantDraws: function() {
		if(this.waitingMessages.length < 2) {
			return;
		}

		var size = this.waitingMessages.length;
		var message, body, imageProperties, rop, base;
		var collision_boxes = {};
		var to_delete = [];
		var deleted = false;
		var surface_id;
		var packetBox;
		var box;
		var i;
		var x;
		while(size--) {
			message = this.waitingMessages[size];
			//should remove any packet from the past overwritten by this one
			body = message.args;
			base = body.base;

			rop = body.rop_descriptor;
			deleted = false;

			//TODO TODO TODO: there is need for a special case for draw_copy_bits?!
			//we need base to have a box
			if(base) {
				surface_id = base.surface_id;
				packetBox = base.box;
				surface_id = base.surface_id;
				//check if this packet is occluded by another packet
				imageProperties = this.packetWorkerIdentifier.getImageProperties(message);
				//if there is no image properties, or there is but cache flags are 0
				if(!collision_boxes[surface_id]) {
					collision_boxes[surface_id] = [];
				}

				if((!imageProperties || (imageProperties && !(imageProperties.descriptor.flags & wdi.SpiceImageFlags.SPICE_IMAGE_FLAGS_CACHE_ME))) && surface_id === 0) {
					for(i=0; i<collision_boxes[surface_id].length; i++) {
						//check if base.box is inside one of the rectangles in collision_boxes
						box = collision_boxes[surface_id][i];
						if(box.bottom >= packetBox.bottom && box.top <= packetBox.top  && box.left <= packetBox.left
							&& box.right >= packetBox.right ) {

							deleted = true;
							to_delete.push(size);

							break;
						}
					}
				}

				//check if the message is still alive, and if it is, then put its box into collision_boxes if the message
				//will overWrite its screen area when painted
				//atm only drawcopy and drawfill have overwritescreenarea set
				if(!deleted && message.messageType === wdi.SpiceVars.SPICE_MSG_DISPLAY_COPY_BITS) {
					break;
				}

				if(!deleted && body.getMessageProperty('overWriteScreenArea', false) && base.clip.type == 0 && rop == wdi.SpiceRopd.SPICE_ROPD_OP_PUT) {
					collision_boxes[surface_id].push(base.box);
				}
			}
		}

		//itareate over messages marked for deletion and remove it from the array
		for(x = 0;x < to_delete.length;x++) {
			this.waitingMessages.splice(to_delete[x], 1);
		}
	},
		
	_process: function(spiceMessage) {
		if (wdi.logOperations) {
			wdi.DataLogger.log(spiceMessage, 0, null, true, '', '_decode');
		}
		//append the message to the runqueue
		//so the packet is not executed until the previous packets
		//finished processing
		this.runQ.add(function(proxy) {

			//pass the message through the packet filter
			//so the packet can be filtered, logged, etc
			this.packetFilter.filter(spiceMessage, function(message) {
				wdi.ExecutionControl.currentProxy = proxy;
				//process the packet
				this.displayRouter.processPacket(message);
				//post process operations
				this.postProcess();
			}, this, this.clientGui);


			//if the packet was synchronous, process next packet
			if (wdi.ExecutionControl.sync) {
				proxy.end();
			}
			//Now message could be asynchronous
		}, this, function() {
		   //this is executed when the message has finished processing
		   //we use processEnd to notify packetFilter about the ending of processing
		   //the current message
		   this.processEnd(spiceMessage, this.clientGui);

		});

		//if this is the first message in the queue, execute it
		//if not, this call will have no effect.
		this.runQ.process();

	},

	processEnd: function(spiceMessage, clientGui) {
		this.packetFilter.notifyEnd(spiceMessage, clientGui);
	},

	postProcess: function() {
		//TEST METHOD DON'T DELETE
	}
});

wdi.DisplayPreProcess = $.spcExtend(wdi.EventObject.prototype, {
	displayProcess: null,
	queued: [],
	inProcess: [],
	idleConsumers : [],
	consumers: [],

	init: function(c) {
		this.superInit();
		this.displayProcess = c.displayProcess || new wdi.DisplayProcess({
			clientGui: c.clientGui
		});
		this.clientGui = c.clientGui;

		/**

		Since javascript do not provide an API to check
		the number of cpu cores available, the best case for average computers
		and devices is 4.

		If the computer doesn't have 4 or more available cores, there is only a little
		memory waste creating the threads and a bit of cpu overheat doing context
		switching.

		There is an ongoing draft in w3c to standarize a way to detect this:

		http://www.w3.org/2012/sysapps/device-capabilities/#cpu

		**/
		if(c.numConsumers == null || c.numConsumers == undefined) c.numConsumers = 4;
		var numConsumers = c.numConsumers;

		for(var i = 0;i<numConsumers; i++) {
			var consumer = new wdi.AsyncConsumer();
			this.consumers.push(consumer);
			this.idleConsumers.push(consumer);
			consumer.addListener('done', this.onConsumerDone, this);
		}
	},
		
	onConsumerDone: function(e) {
		//we don't care about who has finished, only about the
		//state of the last item in queue
		var waitingTask = this.inProcess[0];
		var task = null;
		var i = 0;
		
		while(waitingTask && waitingTask.state === 1) {
			task = this.inProcess.shift();
			try {
				this.displayProcess.process(task.message);
			} catch(e) {
				wdi.Debug.error("DisplayPreProcess error: ", e);
			}
			waitingTask = this.inProcess[0];
			i++;
		}
	
		//put the consumer as idle
		this.idleConsumers.push(e);
		//continue processing!
		if(this.queued.length > 0) {
			this.executeConsumer();
		}
	},
	
	process: function(spiceMessage) {
		this.addTask(spiceMessage); //first of all, queue it
		//it is the only item in the list?
		//we are the only message in the queue... process?
		this.executeConsumer();
	},

	addTask: function(spiceMessage) {
		this.queued.push({
			message: spiceMessage,
			clientGui: this.clientGui
		});
	},

	getNextTask : function () {
		var task = this.queued.shift();
		while(typeof task == 'undefined' && this.queued.length != 0) {
			task = this.queued.shift();
		}

		//we found a task?
		if(typeof task == 'undefined') {
			return false;
		}

		task.state = 0;
		this.inProcess.push(task); //add the task to the inProcess list
		return task;
	},

	executeConsumer: function() {
		//check if there are idle consumers
		if(this.idleConsumers.length > 0) {
			wdi.Debug.log('DisplayPreProcess: available workers: '+this.idleConsumers.length);
			wdi.Debug.log('DisplaypreProcess: pending tasks: '+this.queued.length);
			//idle consumer found
			var consumer = this.idleConsumers.shift();
			//execute the next task in this consumer
			var task = this.getNextTask();

			if(task) {
				consumer.consume(task);
			}

		}
	},

	dispose: function () {
		this.consumers.forEach(function (consumer) {
			consumer.dispose();
		});
	}
});
wdi.InputProcess = $.spcExtend(wdi.EventObject.prototype, {
	clientGui: null,
	spiceConnection: null,
	
	init: function(c) {
		this.superInit();
		this.clientGui = c.clientGui;
		this.spiceConnection = c.spiceConnection;
	},
	
	process: function(spiceMessage) {
		switch (spiceMessage.messageType) {
			case wdi.SpiceVars.SPICE_MSG_INPUTS_MOUSE_MOTION_ACK:
				this.clientGui.motion_ack();
				break;
		}
	},
	
	send: function(data, type) {
		var packet, scanCodes, i;
		if(type == 'mousemove') {
			packet = new wdi.SpiceMessage({
				messageType: wdi.SpiceVars.SPICE_MSGC_INPUTS_MOUSE_POSITION, 
				channel: wdi.SpiceVars.SPICE_CHANNEL_INPUTS, 
				args: new wdi.RedcMousePosition({
					x:data[1][0]+wdi.VirtualMouse.hotspot.x,
					y:data[1][1]+wdi.VirtualMouse.hotspot.y,
					buttons_state:data[1][2],
					display_id:0
				})
			});
			this.spiceConnection.send(packet);
		} else if(type == 'mousedown') {
			packet = new wdi.SpiceMessage({
				messageType: wdi.SpiceVars.SPICE_MSGC_INPUTS_MOUSE_PRESS, 
				channel: wdi.SpiceVars.SPICE_CHANNEL_INPUTS, 
				args: new wdi.RedcMousePress({
					button_id:data[1]+1,
					buttons_state:1<<data[1]
				})
			});
			this.spiceConnection.send(packet);			
		} else if(type == 'mouseup') {
			packet = new wdi.SpiceMessage({
				messageType: wdi.SpiceVars.SPICE_MSGC_INPUTS_MOUSE_RELEASE, 
				channel: wdi.SpiceVars.SPICE_CHANNEL_INPUTS, 
				args: new wdi.RedcMousePress({
					button_id:data[1]+1,
					buttons_state:0
				})
			});
			this.spiceConnection.send(packet);				
		} else if (type == 'keydown' || type == 'keypress') {
			scanCodes = wdi.Keymap.getScanCodes(data[1][0]);
			for (i= 0; i<scanCodes.length;i++) {
				packet = new wdi.SpiceMessage({
					messageType: wdi.SpiceVars.SPICE_MSGC_INPUTS_KEY_DOWN,
					channel: wdi.SpiceVars.SPICE_CHANNEL_INPUTS,
					args: new wdi.SpiceScanCode(scanCodes[i])
				});
				this.spiceConnection.send(packet);
			}
		} else if (type == 'keyup') {
			scanCodes = wdi.Keymap.getScanCodes(data[1][0]);
			for (i= 0; i<scanCodes.length;i++) {
				packet = new wdi.SpiceMessage({
					messageType: wdi.SpiceVars.SPICE_MSGC_INPUTS_KEY_UP,
					channel: wdi.SpiceVars.SPICE_CHANNEL_INPUTS,
					args: new wdi.SpiceScanCode(scanCodes[i])
				});
				this.spiceConnection.send(packet);
			}
		} else if(type == 'joystick') {
			packet = new wdi.SpiceMessage({
				messageType: wdi.SpiceVars.SPICE_MSGC_INPUTS_MOUSE_MOTION, 
				channel: wdi.SpiceVars.SPICE_CHANNEL_INPUTS, 
				args: new wdi.RedcMouseMotion({
					x:data[1][0],
					y:data[1][1],
					buttons_state:0
				})
			});
			this.spiceConnection.send(packet);
		}
	}
});
wdi.CursorProcess = $.spcExtend(wdi.EventObject.prototype, {
	imageData: null,
	
	process: function(spiceMessage) {
		switch (spiceMessage.messageType) {
			case wdi.SpiceVars.SPICE_MSG_CURSOR_INIT:
			case wdi.SpiceVars.SPICE_MSG_CURSOR_SET:
				var wdiCursor = this.extractCursor(spiceMessage);
				if(wdiCursor) {
					wdi.VirtualMouse.setHotspot(0, 0);
					wdi.VirtualMouse.setMouse(wdiCursor.data, wdiCursor.header.hot_spot_x, wdiCursor.header.hot_spot_y);
				}
				break;
		}
	},

	_toUrl:function(data) {
		var imageData = $('<canvas/>').attr({
			'width': data.width,
			'height': data.height
		})[0];
		var ctx = imageData.getContext('2d');
		ctx.putImageData(data, 0, 0);
		return imageData.toDataURL("image/png");
	},
	
	extractCursor: function(spiceMessage) {
		var flags = spiceMessage.args.cursor.flags;
		var position = spiceMessage.args.position;
		var visible = spiceMessage.args.visible;
		
		//if there is no cursor, return null
		if(flags & 1) {
			return null;
		}
	
		var imageData = null;
		
		//cursor from cache?
		if(flags & wdi.SpiceCursorFlags.SPICE_CURSOR_FLAGS_FROM_CACHE) {
			imageData = wdi.ImageCache.getCursorFrom(spiceMessage.args.cursor);			
		} else {
			//cursor from packet
			//any case should return url
			switch (spiceMessage.args.cursor.header.type) {

				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_ALPHA:
					imageData = this._toUrl(wdi.graphics.argbToImageData(spiceMessage.args.cursor.data, spiceMessage.args.cursor.header.width, spiceMessage.args.cursor.header.height));
					break;
				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_MONO:
					imageData = this._toUrl(wdi.graphics.monoToImageData(spiceMessage.args.cursor.data, spiceMessage.args.cursor.header.width, spiceMessage.args.cursor.header.height));
					break;
				case 8:
					imageData = wdi.SpiceObject.bytesToString(spiceMessage.args.cursor.data);
					break;
				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_COLOR4:
				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_COLOR8:
				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_COLOR16:
				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_COLOR24:
				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_COLOR32:
				case wdi.SpiceCursorType.SPICE_CURSOR_TYPE_ENUM_END:
					break;
			}	
		}
	
		//got no cursor? error!
		if(!imageData) {
			return null;
		}
	
		//we have cursor, cache it?
		if(flags & wdi.SpiceCursorFlags.SPICE_CURSOR_FLAGS_CACHE_ME) {
			wdi.ImageCache.addCursor(spiceMessage.args.cursor, imageData);
		}
		
		return {
			data: imageData, 
			position: position, 
			visible: visible,
			header: spiceMessage.args.cursor.header
		};
	}
});
wdi.PlaybackProcess = $.spcExtend(wdi.EventObject.prototype, {
	_lastApp: null,
	started: false,
	minBuffSize: 1024*32,
	frequency: null,
	channels: null,
	audioContext: null,
	startTime: null, // controls the playback time if no delay occurs
	hasAudioSupport: true, //whether the browser supports HTML5 Web Audio API

	typedBuffer: null,
	position: null,


	init: function(c) {
		this.app = c.app;
		this.audioContext = this.getAudioContext();
		if (this.audioContext) {
			this.hasAudioSupport = true;
		} else {
			this.hasAudioSupport = false;
			wdi.Debug.warn('The client browser does not support Web Audio API');
		}
		this.startTime = 0;
		this.typedBuffer = new ArrayBuffer(1024*32);
		this.position = 0;
	},

	getAudioContext: function() {
		//standard browser object
		try {
			return new AudioContext();
		} catch(e) {

		}

		//chrome and safari
		try {
		   return new webkitAudioContext();

		} catch(e) {

		}

		return false;
	},

	process: function(spiceMessage) {

		// if (this.hasAudioSupport && !Modernizr.touch) {
		if (this.hasAudioSupport) {
			switch (spiceMessage.messageType) {
				case wdi.SpiceVars.SPICE_MSG_PLAYBACK_MODE:
					break;
				case wdi.SpiceVars.SPICE_MSG_PLAYBACK_START:
					var packet = spiceMessage.args;
					this.channels = packet.channels;
					this.frequency = packet.frequency;
					break;
				case wdi.SpiceVars.SPICE_MSG_PLAYBACK_STOP:
					this.startTime = 0;
					var packet = spiceMessage.args;
					this.flush();
					break;
				case wdi.SpiceVars.SPICE_MSG_PLAYBACK_DATA:
					// While we receive data chunks, we store them in a buffer, so than when it is full we play the sound and empty it.
					// With this we get a more fluid playback and better overall performance than if we just played the data the moment we got it
					var packet = spiceMessage.args;
					var dataTimestamp = spiceMessage.args.multimedia_time;


					var tmpview = new Uint8Array(this.typedBuffer);
					tmpview.set(packet.data, this.position);
					this.position += packet.data.length;
					this._lastApp = this.app;

					if(this.position >= this.minBuffSize) {
						// ok, the buffer is full. We send the data to be played and later we can empty it to make room for more audio
						this.flush(dataTimestamp);
					}
					break;
			}
		} else {
			//TODO:
			// If the browser doesn't support Web Audio, we could still attach a wav header to the raw PCM we receive from spice and use the more widespread supported audio tag
			// Meanwhile, we can skip all the audio packets and gain some performance at least
		}
	},

	/**
	 * Plays all the audio buffer and empties it
	 *
	 * @param app
	 * @param dataTimestamp
	 */
	flush: function(dataTimestamp) {
		if(this.position > 0) {
			if (this.started) {
				this.playSound(this.typedBuffer, dataTimestamp);
			}
			this.position = 0;
			this.typedBuffer = new ArrayBuffer(1024*32);
		}
	},

	/**
	 * Plays the raw pcm data passed as param using HTML5's Web Audio API
	 *
	 * @param buffer
	 */
	playSound: function(buffer, dataTimestamp) {
		if(this.channels == 2) {
			return this.playSoundStereo(buffer, dataTimestamp);
		}

		var audio = new Int16Array(buffer);

		var channelData = new Array(this.channels);
		for(var i = 0;i<this.channels;i++) {
			channelData[i] = new Float32Array(audio.length / 2);
		}

		var channelCounter = 0;
		for (var i = 0; i < audio.length; ) {
		  for(var c = 0; c < this.channels; c++) {
			  //because the audio data spice gives us is 16 bits signed int (32768) and we wont to get a float out of it (between -1.0' and 1.0)
			  channelData[c][channelCounter] = audio[i++] / 32768;
		  }
		  channelCounter++;
		}

		var source = this.audioContext['createBufferSource'](); // creates a sound source
		var audioBuffer = this.audioContext['createBuffer'](this.channels, channelCounter, this.frequency);
		for(var i=0;i < this.channels; i++) {
			audioBuffer['getChannelData'](i)['set'](channelData[i]);
		}

		this._play(source, audioBuffer, dataTimestamp);
	},

	/**
	 * Plays the raw pcm STEREO data passed as param using HTML5's Web Audio API
	 *
	 * @param buffer
	 */
	playSoundStereo: function(buffer, dataTimestamp) {
		// Each data packet is 16 bits, the first being left channel data and the second being right channel data (LR-LR-LR-LR...)
		var audio = new Int16Array(buffer);

		// We split the audio buffer in two channels. Float32Array is the type required by Web Audio API
		var left = new Float32Array(audio.length / 2);
		var right = new Float32Array(audio.length / 2);

		var channelCounter = 0;

		var audioContext = this.audioContext;
		var len = audio.length;

		for (var i = 0; i < len; ) {
		  //because the audio data spice gives us is 16 bits signed int (32768) and we wont to get a float out of it (between -1.0 and 1.0)
		  left[channelCounter] = audio[i++] / 32768;
		  right[channelCounter] = audio[i++] / 32768;
		  channelCounter++;
		}

		var source = audioContext['createBufferSource'](); // creates a sound source
		var audioBuffer = audioContext['createBuffer'](2, channelCounter, this.frequency);

		audioBuffer['getChannelData'](0)['set'](left);
		audioBuffer['getChannelData'](1)['set'](right);

		this._play(source, audioBuffer, dataTimestamp);
	},

	_play: function(source, audioBuffer, dataTimestamp) {
		var wait = 0;
		if (dataTimestamp) {
			var elapsedTime = Date.now() - this.app.lastMultimediaTime; // time passed since we received the last multimedia time from main channel
			var currentMultimediaTime = elapsedTime + this.app.multimediaTime; // total delay we have at the moment
			wait = dataTimestamp - currentMultimediaTime;
			if (wait < 0) {
				wait = 0;
			}
		}
		source['buffer'] = audioBuffer;
		source['connect'](this.audioContext['destination']);	   // connect the source to the context's destination (the speakers)

		//if (!Modernizr.touch) {
			source['start'](this.startTime + wait);						   // play the source now
		//} else {
		//	source.noteOn(0);
		//}

		this.startTime += audioBuffer.duration;
	},

	startAudio: function () {
		this.started = true;
		this.flush();
	}
});
wdi.MainProcess = $.spcExtend(wdi.EventObject.prototype, {
	init: function(c) {
		this.superInit();
		this.app = c.app;
		this.spiceConnection = c.app.spiceConnection;
		this.agent = c.app.agent;
	},
	
	process: function(spiceMessage) {
		var channel = this.spiceConnection.channels[wdi.SpiceVars.SPICE_CHANNEL_MAIN];

		switch(spiceMessage.messageType) {
			case wdi.SpiceVars.SPICE_MSG_MAIN_INIT:
				channel.connectionId = spiceMessage.args.session_id;
				channel.fire('connectionId', channel.connectionId);
				if(spiceMessage.args.agent_connected == 1) {
					channel.fire('initAgent', spiceMessage.args.agent_tokens);
				}
				if (spiceMessage.args.current_mouse_mode == 1) {
					channel.fire('mouseMode', spiceMessage.args.current_mouse_mode);
				}
				// the mouse mode must be change both if we have agent or not
				this.changeMouseMode();
				break;
			case wdi.SpiceVars.SPICE_MSG_MAIN_AGENT_DATA:
				var packet = spiceMessage.args;
				this.agent.onAgentData(packet);
			   	break;
			case wdi.SpiceVars.SPICE_MSG_MAIN_AGENT_CONNECTED:
				channel.fire('initAgent', spiceMessage.args.agent_tokens);
				this.changeMouseMode();
				break;
			case wdi.SpiceVars.SPICE_MSG_MAIN_MULTI_MEDIA_TIME:
				this.app.multimediaTime = spiceMessage.args.multimedia_time;
				break;
			case wdi.SpiceVars.SPICE_MSG_MAIN_CHANNELS_LIST:
				channel.fire('channelListAvailable', spiceMessage.args.channels);
				break;
		}
	},

	changeMouseMode: function() {
		var packet = new wdi.SpiceMessage({
			messageType: wdi.SpiceVars.SPICE_MSGC_MAIN_MOUSE_MODE_REQUEST,
			channel: wdi.SpiceVars.SPICE_CHANNEL_MAIN,
			args: new wdi.SpiceMouseModeRequest({
				request_mode: 2
			})
		});
		this.spiceConnection.send(packet);
	}
});
// These tables map the js keyboard keys to the spice equivalent
wdi.KeymapES = function() {

    // regular keys with associated chars. The columns  means all the event flux to activate the key (i.e. [key up, key down])
    // all the js events associated to these keys should have a charKey associated
    var charmapES = {};
    charmapES['º']   = [[0x29, 0, 0, 0], [0xA9, 0, 0, 0]];
    charmapES['ª']   = [[0x2A, 0, 0, 0], [0x29, 0, 0, 0], [0xA9, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['\\']  = [[0xE0, 0x38, 0, 0], [0x29, 0, 0, 0], [0xA9, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['1']   = [[0x2, 0, 0, 0], [0x82, 0, 0, 0]];
    charmapES['!']   = [[0x2A, 0, 0, 0], [0x2, 0, 0, 0], [0x82, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['|']   = [[0xE0, 0x38, 0, 0], [0x2, 0, 0, 0], [0x82, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['2']   = [[0x3, 0, 0, 0], [0x83, 0, 0, 0]];
    charmapES['"']   = [[0x2A, 0, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['@']   = [[0xE0, 0x38, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['3']   = [[0x4, 0, 0, 0], [0x84, 0, 0, 0]];
    charmapES['·']   = [[0x2A, 0, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['#']   = [[0xE0, 0x38, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['4']   = [[0x5, 0, 0, 0], [0x85, 0, 0, 0]];
    charmapES['$']   = [[0x2A, 0, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['~']   = [[0xE0, 0x38, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['5']   = [[0x6, 0, 0, 0], [0x86, 0, 0, 0]];
    charmapES['%']   = [[0x2A, 0, 0, 0], [0x6, 0, 0, 0], [0x86, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['6']   = [[0x7, 0, 0, 0], [0x87, 0, 0, 0]];
    charmapES['&']   = [[0x2A, 0, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['¬']   = [[0xE0, 0x38, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['7']   = [[0x8, 0, 0, 0], [0x88, 0, 0, 0]];
    charmapES['/']   = [[0x2A, 0, 0, 0], [0x8, 0, 0, 0], [0x88, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['8']   = [[0x9, 0, 0, 0], [0x89, 0, 0, 0]];
    charmapES['(']   = [[0x2A, 0, 0, 0], [0x9, 0, 0, 0], [0x89, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['9']   = [[0x0A, 0, 0, 0], [0x8A, 0, 0, 0]];
    charmapES[')']   = [[0x2A, 0, 0, 0], [0x0A, 0, 0, 0], [0x8A, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['0']   = [[0x0B, 0, 0, 0], [0x8B, 0, 0, 0]];
    charmapES['=']   = [[0x2A, 0, 0, 0], [0x0B, 0, 0, 0], [0x8B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['\'']  = [[0x0C, 0, 0, 0], [0x8C, 0, 0, 0]];
    charmapES['?']   = [[0x2A, 0, 0, 0], [0x0C, 0, 0, 0], [0x8C, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['¡']   = [[0x0D, 0, 0, 0], [0x8D, 0, 0, 0]];
    charmapES['¿']   = [[0x2A, 0, 0, 0], [0x0D, 0, 0, 0], [0x8D, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['q']   = [[0x10, 0, 0, 0], [0x90, 0, 0, 0]];
    charmapES['Q']   = [[0x2A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['w']   = [[0x11, 0, 0, 0], [0x91, 0, 0, 0]];
    charmapES['W']   = [[0x2A, 0, 0, 0], [0x11, 0, 0, 0], [0x91, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['e']   = [[0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['E']   = [[0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['€']   = [[0xE0, 0x38, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['r']   = [[0x13, 0, 0, 0], [0x93, 0, 0, 0]];
    charmapES['R']   = [[0x2A, 0, 0, 0], [0x13, 0, 0, 0], [0x93, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['t']   = [[0x14, 0, 0, 0], [0x94, 0, 0, 0]];
    charmapES['T']   = [[0x2A, 0, 0, 0], [0x14, 0, 0, 0], [0x94, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['y']   = [[0x15, 0, 0, 0], [0x95, 0, 0, 0]];
    charmapES['Y']   = [[0x2A, 0, 0, 0], [0x15, 0, 0, 0], [0x95, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['u']   = [[0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['U']   = [[0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['i']   = [[0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['I']   = [[0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['o']   = [[0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['O']   = [[0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['p']   = [[0x19, 0, 0, 0], [0x99, 0, 0, 0]];
    charmapES['P']   = [[0x2A, 0, 0, 0], [0x19, 0, 0, 0], [0x99, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['`']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x39, 0, 0, 0], [0xb9, 0, 0, 0]];
    charmapES['à']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['À']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['è']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['È']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['ì']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['Ì']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['ò']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['Ò']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['ù']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['Ù']   = [[0xAA, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['â']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['Â']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['ê']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['Ê']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['î']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['Î']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['ô']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['Ô']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['û']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['Û']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['^']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0x39, 0, 0, 0], [0xb9, 0, 0, 0]];
    charmapES['[']   = [[0xE0, 0x38, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['+']   = [[0x1B, 0, 0, 0], [0x9B, 0, 0, 0]];
    charmapES['*']   = [[0x2A, 0, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES[']']   = [[0xE0, 0x38, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['a']   = [[0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['A']   = [[0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['s']   = [[0x1F, 0, 0, 0], [0x9F, 0, 0, 0]];
    charmapES['S']   = [[0x2A, 0, 0, 0], [0x1F, 0, 0, 0], [0x9F, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['d']   = [[0x20, 0, 0, 0], [0xA0, 0, 0, 0]];
    charmapES['D']   = [[0x2A, 0, 0, 0], [0x20, 0, 0, 0], [0xA0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['f']   = [[0x21, 0, 0, 0], [0xA1, 0, 0, 0]];
    charmapES['F']   = [[0x2A, 0, 0, 0], [0x21, 0, 0, 0], [0xA1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['g']   = [[0x22, 0, 0, 0], [0xA2, 0, 0, 0]];
    charmapES['G']   = [[0x2A, 0, 0, 0], [0x22, 0, 0, 0], [0xA2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['h']   = [[0x23, 0, 0, 0], [0xA3, 0, 0, 0]];
    charmapES['H']   = [[0x2A, 0, 0, 0], [0x23, 0, 0, 0], [0xA3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['j']   = [[0x24, 0, 0, 0], [0xA4, 0, 0, 0]];
    charmapES['J']   = [[0x2A, 0, 0, 0], [0x24, 0, 0, 0], [0xA4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['k']   = [[0x25, 0, 0, 0], [0xA5, 0, 0, 0]];
    charmapES['K']   = [[0x2A, 0, 0, 0], [0x25, 0, 0, 0], [0xA5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['l']   = [[0x26, 0, 0, 0], [0xA6, 0, 0, 0]];
    charmapES['L']   = [[0x2A, 0, 0, 0], [0x26, 0, 0, 0], [0xA6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['ñ']   = [[0x27, 0, 0, 0], [0xA7, 0, 0, 0]];
    charmapES['Ñ']   = [[0x2A, 0, 0, 0], [0x27, 0, 0, 0], [0xA7, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['á']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['Á']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['é']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['É']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['í']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['Í']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['ó']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['Ó']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['ú']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['Ú']   = [[0xAA, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['ä']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['Ä']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapES['ë']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['Ë']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapES['ï']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['Ï']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapES['ö']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['Ö']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapES['ü']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['Ü']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapES['{']   = [[0xE0, 0x38, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['ç']   = [[0x2B, 0, 0, 0], [0xAB, 0, 0, 0]];
    charmapES['Ç']   = [[0x2A, 0, 0, 0], [0x2B, 0, 0, 0], [0xAB, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['}']   = [[0xE0, 0x38, 0, 0], [0x2B, 0, 0, 0], [0xAB, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapES['<']   = [[0x56, 0, 0, 0], [0xD6, 0, 0, 0]];
    charmapES['>']   = [[0x2A, 0, 0, 0], [0x56, 0, 0, 0], [0xD6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['z']   = [[0x2C, 0, 0, 0], [0xAC, 0, 0, 0]];
    charmapES['Z']   = [[0x2A, 0, 0, 0], [0x2C, 0, 0, 0], [0xAC, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['x']   = [[0x2D, 0, 0, 0], [0xAD, 0, 0, 0]];
    charmapES['X']   = [[0x2A, 0, 0, 0], [0x2D, 0, 0, 0], [0xAD, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['c']   = [[0x2E, 0, 0, 0], [0xAE, 0, 0, 0]];
    charmapES['C']   = [[0x2A, 0, 0, 0], [0x2E, 0, 0, 0], [0xAE, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['v']   = [[0x2F, 0, 0, 0], [0xAF, 0, 0, 0]];
    charmapES['V']   = [[0x2A, 0, 0, 0], [0x2F, 0, 0, 0], [0xAF, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['b']   = [[0x30, 0, 0, 0], [0xB0, 0, 0, 0]];
    charmapES['B']   = [[0x2A, 0, 0, 0], [0x30, 0, 0, 0], [0xB0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['n']   = [[0x31, 0, 0, 0], [0xB1, 0, 0, 0]];
    charmapES['N']   = [[0x2A, 0, 0, 0], [0x31, 0, 0, 0], [0xB1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['m']   = [[0x32, 0, 0, 0], [0xB2, 0, 0, 0]];
    charmapES['M']   = [[0x2A, 0, 0, 0], [0x32, 0, 0, 0], [0xB2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES[',']   = [[0x33, 0, 0, 0], [0xB3, 0, 0, 0]];
    charmapES[';']   = [[0x2A, 0, 0, 0], [0x33, 0, 0, 0], [0xB3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['.']   = [[0x34, 0, 0, 0], [0xB4, 0, 0, 0]];
    charmapES[':']   = [[0x2A, 0, 0, 0], [0x34, 0, 0, 0], [0xB4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES['-']   = [[0x35, 0, 0, 0], [0xB5, 0, 0, 0]];
    charmapES['_']   = [[0x2A, 0, 0, 0], [0x35, 0, 0, 0], [0xB5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapES[' ']   = [[0x39, 0, 0, 0], [0xb9, 0, 0, 0]];

    // keyboard keys without character associated.
    // all the js events associated to these keys should have a keyChar associated
    var keymapES = [];

    keymapES[27]                 = 0x1; // ESC
    keymapES[9]                 = 0x0F; // TAB
    //keymapES[20]                = 0x3A; // BLOQ.MAY. => see the charmap, all the capital letters and shift chars send a shift in their sequence
    keymapES[16]                = 0x2A; // LEFT SHIFT and RIGHT SHIFT
	keymapES[91]                = 0x1D; // LEFT GUI (META, COMMAND) BINDED TO CONTROL
	keymapES[17]                = 0x1D; // LEFT CONTROL and RIGHT CONTROL
    //keymapES[32]                = 0x39; // SPACE => see the charmap
    keymapES[8]                 = 0x0E; // BACKSPACE
    keymapES[13]                = 0x1C; // ENTER
    //keymapES[225]                 = 0x38; // RIGHT ALT (ALT GR) => see the charmap, all the altgr chars send a altgr in their sequence
    keymapES[18]                = 0x38; // LEFT ALT
  // keymapES[92]                = 0x5C; // RIGHT GUI (WINDOWS)
    keymapES[38]                = 0x48; // UP ARROW
    keymapES[37]                = 0x4B; // LEFT ARROW
    keymapES[40]                = 0x50; // DOWN ARROW
    keymapES[39]                = 0x4D; // RIGHT ARROW
    keymapES[45]                = 0x52; // INSERT
    keymapES[46]                = 0x53; // DELETE
    keymapES[36]                = 0x47; // HOME
    keymapES[35]                = 0x4F; // FIN
    keymapES[33]                = 0x49; // PAGE UP
    keymapES[34]                = 0x51; // PAGE UP
    keymapES[144]               = 0x45; // BLOQ.NUM.
    keymapES[145]                = 0x46; // SCROLL LOCK
    keymapES[112]                = 0x3B; // F1
    keymapES[113]                = 0x3C; // F2
    keymapES[114]                = 0x3D; // F3
    keymapES[115]                = 0x3E; // F4
    keymapES[116]                = 0x3F; // F5
    keymapES[117]                = 0x40; // F6
    keymapES[118]                = 0x41; // F7
    keymapES[119]                = 0x42; // F8
    keymapES[120]                = 0x43; // F9
    keymapES[121]                = 0x44; // F10
    keymapES[122]                = 0x57; // F11
    keymapES[123]                = 0x58; // F12

    // combination keys with ctrl
    var ctrlKeymapES = [];

    ctrlKeymapES[65]                = 0x1E; // a
    ctrlKeymapES[81]                = 0x10; // q
    ctrlKeymapES[87]                = 0x11; // w
    ctrlKeymapES[69]                = 0x12; // e
    ctrlKeymapES[82]                = 0x13; // r
    ctrlKeymapES[84]                = 0x14; // t
    ctrlKeymapES[89]                = 0x15; // y
    ctrlKeymapES[85]                = 0x16; // u
    ctrlKeymapES[73]                = 0x17; // i
    ctrlKeymapES[79]                = 0x18; // o
    ctrlKeymapES[80]                = 0x19; // p
    ctrlKeymapES[65]                = 0x1E; // a
    ctrlKeymapES[83]                = 0x1F; // s
    ctrlKeymapES[68]                = 0x20; // d
    ctrlKeymapES[70]                = 0x21; // f
    ctrlKeymapES[71]                = 0x22; // g
    ctrlKeymapES[72]                = 0x23; // h
    ctrlKeymapES[74]                = 0x24; // j
    ctrlKeymapES[75]                = 0x25; // k
    ctrlKeymapES[76]                = 0x26; // l
    ctrlKeymapES[90]                = 0x2C; // z
    ctrlKeymapES[88]                = 0x2D; // x
    ctrlKeymapES[67]                = 0x2E; // c
    //ctrlKeymapES[86]                = 0x2F; // v      to enable set disableClipboard = true in run.js
    ctrlKeymapES[66]                = 0x30; // b
    ctrlKeymapES[78]                = 0x31; // n
    ctrlKeymapES[77]                = 0x32; // m

    // reserved ctrl+? combinations we want to intercept from browser and inject manually to spice
    var reservedCtrlKeymap = [];
    reservedCtrlKeymap[86] = 0x2F;

    return {
        getKeymap: function() {
            return keymapES;
        },

        getCtrlKeymap: function() {
            return ctrlKeymapES;
        },

        getReservedCtrlKeymap: function() {
            return reservedCtrlKeymap;
        },

        getCharmap: function() {
            return charmapES;
        },

        setCtrlKey: function (key, val) {
            ctrlKeymapES[key] = val;
        }
    };
}( );
// These tables map the js keyboard keys to the spice equivalent
wdi.KeymapIT = function() {

    // regular keys with associated chars. The columns  means all the event flux to activate the key (i.e. [key up, key down])
    // all the js events associated to these keys should have a charKey associated
    var charmapIT = {};
    charmapIT['\\']   = [[0x29, 0, 0, 0], [0xA9, 0, 0, 0]];
    charmapIT['|']   = [[0x2A, 0, 0, 0], [0x29, 0, 0, 0], [0xA9, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['1']   = [[0x2, 0, 0, 0], [0x82, 0, 0, 0]];
    charmapIT['!']   = [[0x2A, 0, 0, 0], [0x2, 0, 0, 0], [0x82, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['2']   = [[0x3, 0, 0, 0], [0x83, 0, 0, 0]];
    charmapIT['"']   = [[0x2A, 0, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['3']   = [[0x4, 0, 0, 0], [0x84, 0, 0, 0]];
    charmapIT['£']   = [[0x2A, 0, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['4']   = [[0x5, 0, 0, 0], [0x85, 0, 0, 0]];
    charmapIT['$']   = [[0x2A, 0, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['5']   = [[0x6, 0, 0, 0], [0x86, 0, 0, 0]];
    charmapIT['%']   = [[0x2A, 0, 0, 0], [0x6, 0, 0, 0], [0x86, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['6']   = [[0x7, 0, 0, 0], [0x87, 0, 0, 0]];
    charmapIT['&']   = [[0x2A, 0, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['7']   = [[0x8, 0, 0, 0], [0x88, 0, 0, 0]];
    charmapIT['/']   = [[0x2A, 0, 0, 0], [0x8, 0, 0, 0], [0x88, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['8']   = [[0x9, 0, 0, 0], [0x89, 0, 0, 0]];
    charmapIT['(']   = [[0x2A, 0, 0, 0], [0x9, 0, 0, 0], [0x89, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['9']   = [[0x0A, 0, 0, 0], [0x8A, 0, 0, 0]];
    charmapIT[')']   = [[0x2A, 0, 0, 0], [0x0A, 0, 0, 0], [0x8A, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['0']   = [[0x0B, 0, 0, 0], [0x8B, 0, 0, 0]];
    charmapIT['=']   = [[0x2A, 0, 0, 0], [0x0B, 0, 0, 0], [0x8B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['\'']  = [[0x0C, 0, 0, 0], [0x8C, 0, 0, 0]];
    charmapIT['?']   = [[0x2A, 0, 0, 0], [0x0C, 0, 0, 0], [0x8C, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['`']   = [[0xE0, 0x38, 0, 0], [0x0C, 0, 0, 0], [0x8C, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['ì']   = [[0x0D, 0, 0, 0], [0x8D, 0, 0, 0]];
    charmapIT['^']   = [[0x2A, 0, 0, 0], [0x0D, 0, 0, 0], [0x8D, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['~']   = [[0xE0, 0x38, 0, 0], [0x0D, 0, 0, 0], [0x8D, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['q']   = [[0x10, 0, 0, 0], [0x90, 0, 0, 0]];
    charmapIT['Q']   = [[0x2A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['w']   = [[0x11, 0, 0, 0], [0x91, 0, 0, 0]];
    charmapIT['W']   = [[0x2A, 0, 0, 0], [0x11, 0, 0, 0], [0x91, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['e']   = [[0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapIT['E']   = [[0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['€']   = [[0xE0, 0x38, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['r']   = [[0x13, 0, 0, 0], [0x93, 0, 0, 0]];
    charmapIT['R']   = [[0x2A, 0, 0, 0], [0x13, 0, 0, 0], [0x93, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['t']   = [[0x14, 0, 0, 0], [0x94, 0, 0, 0]];
    charmapIT['T']   = [[0x2A, 0, 0, 0], [0x14, 0, 0, 0], [0x94, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['y']   = [[0x15, 0, 0, 0], [0x95, 0, 0, 0]];
    charmapIT['Y']   = [[0x2A, 0, 0, 0], [0x15, 0, 0, 0], [0x95, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['u']   = [[0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapIT['U']   = [[0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['i']   = [[0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapIT['I']   = [[0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['o']   = [[0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapIT['O']   = [[0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['p']   = [[0x19, 0, 0, 0], [0x99, 0, 0, 0]];
    charmapIT['P']   = [[0x2A, 0, 0, 0], [0x19, 0, 0, 0], [0x99, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['è']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0]];
    charmapIT['é']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['[']   = [[0xE0, 0x38, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['{']   = [[0xE0, 0x38, 0, 0], [0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['+']   = [[0x1B, 0, 0, 0], [0x9B, 0, 0, 0]];
    charmapIT['*']   = [[0x2A, 0, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT[']']   = [[0xE0, 0x38, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['}']   = [[0xE0, 0x38, 0, 0], [0x2A, 0, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xAA, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['a']   = [[0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapIT['A']   = [[0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['s']   = [[0x1F, 0, 0, 0], [0x9F, 0, 0, 0]];
    charmapIT['S']   = [[0x2A, 0, 0, 0], [0x1F, 0, 0, 0], [0x9F, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['d']   = [[0x20, 0, 0, 0], [0xA0, 0, 0, 0]];
    charmapIT['D']   = [[0x2A, 0, 0, 0], [0x20, 0, 0, 0], [0xA0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['f']   = [[0x21, 0, 0, 0], [0xA1, 0, 0, 0]];
    charmapIT['F']   = [[0x2A, 0, 0, 0], [0x21, 0, 0, 0], [0xA1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['g']   = [[0x22, 0, 0, 0], [0xA2, 0, 0, 0]];
    charmapIT['G']   = [[0x2A, 0, 0, 0], [0x22, 0, 0, 0], [0xA2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['h']   = [[0x23, 0, 0, 0], [0xA3, 0, 0, 0]];
    charmapIT['H']   = [[0x2A, 0, 0, 0], [0x23, 0, 0, 0], [0xA3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['j']   = [[0x24, 0, 0, 0], [0xA4, 0, 0, 0]];
    charmapIT['J']   = [[0x2A, 0, 0, 0], [0x24, 0, 0, 0], [0xA4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['k']   = [[0x25, 0, 0, 0], [0xA5, 0, 0, 0]];
    charmapIT['K']   = [[0x2A, 0, 0, 0], [0x25, 0, 0, 0], [0xA5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['l']   = [[0x26, 0, 0, 0], [0xA6, 0, 0, 0]];
    charmapIT['L']   = [[0x2A, 0, 0, 0], [0x26, 0, 0, 0], [0xA6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['ò']   = [[0x27, 0, 0, 0], [0xA7, 0, 0, 0]];
    charmapIT['ç']   = [[0x2A, 0, 0, 0], [0x27, 0, 0, 0], [0xA7, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['@']   = [[0xE0, 0x38, 0, 0], [0x27, 0, 0, 0], [0xA7, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['à']   = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0]];
    charmapIT['°']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['#']   = [[0xE0, 0x38, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xE0, 0xB8, 0, 0]];
    charmapIT['ù']   = [[0x2B, 0, 0, 0], [0xAB, 0, 0, 0]];
    charmapIT['§']   = [[0x2A, 0, 0, 0], [0x2B, 0, 0, 0], [0xAB, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['<']   = [[0x56, 0, 0, 0], [0xD6, 0, 0, 0]];
    charmapIT['>']   = [[0x2A, 0, 0, 0], [0x56, 0, 0, 0], [0xD6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['z']   = [[0x2C, 0, 0, 0], [0xAC, 0, 0, 0]];
    charmapIT['Z']   = [[0x2A, 0, 0, 0], [0x2C, 0, 0, 0], [0xAC, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['x']   = [[0x2D, 0, 0, 0], [0xAD, 0, 0, 0]];
    charmapIT['X']   = [[0x2A, 0, 0, 0], [0x2D, 0, 0, 0], [0xAD, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['c']   = [[0x2E, 0, 0, 0], [0xAE, 0, 0, 0]];
    charmapIT['C']   = [[0x2A, 0, 0, 0], [0x2E, 0, 0, 0], [0xAE, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['v']   = [[0x2F, 0, 0, 0], [0xAF, 0, 0, 0]];
    charmapIT['V']   = [[0x2A, 0, 0, 0], [0x2F, 0, 0, 0], [0xAF, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['b']   = [[0x30, 0, 0, 0], [0xB0, 0, 0, 0]];
    charmapIT['B']   = [[0x2A, 0, 0, 0], [0x30, 0, 0, 0], [0xB0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['n']   = [[0x31, 0, 0, 0], [0xB1, 0, 0, 0]];
    charmapIT['N']   = [[0x2A, 0, 0, 0], [0x31, 0, 0, 0], [0xB1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['m']   = [[0x32, 0, 0, 0], [0xB2, 0, 0, 0]];
    charmapIT['M']   = [[0x2A, 0, 0, 0], [0x32, 0, 0, 0], [0xB2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT[',']   = [[0x33, 0, 0, 0], [0xB3, 0, 0, 0]];
    charmapIT[';']   = [[0x2A, 0, 0, 0], [0x33, 0, 0, 0], [0xB3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['.']   = [[0x34, 0, 0, 0], [0xB4, 0, 0, 0]];
    charmapIT[':']   = [[0x2A, 0, 0, 0], [0x34, 0, 0, 0], [0xB4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT['-']   = [[0x35, 0, 0, 0], [0xB5, 0, 0, 0]];
    charmapIT['_']   = [[0x2A, 0, 0, 0], [0x35, 0, 0, 0], [0xB5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapIT[' ']   = [[0x39, 0, 0, 0], [0xb9, 0, 0, 0]];

    // keyboard keys without character associated.
    // all the js events associated to these keys should have a keyChar associated
    var keymapIT = [];

    keymapIT[27]                 = 0x1; // ESC
    keymapIT[9]                 = 0x0F; // TAB
    //keymapIT[20]                = 0x3A; // CAPS LOCK => see the charmap, all the capital letters and shift chars send a shift in their sequence
    keymapIT[16]                = 0x2A; // LEFT SHIFT and RIGHT SHIFT
    keymapIT[91]                = 0x1D; // LEFT GUI (META, COMMAND) BINDED TO CONTROL (why? 0x5B)
    keymapIT[17]                = 0x1D; // LEFT CONTROL and RIGHT CONTROL
    //keymapIT[32]                = 0x39; // SPACE => see the charmap
    keymapIT[8]                 = 0x0E; // BACKSPACE
    keymapIT[12]                = 0x4C; // KP_BEGIN (showkey -s: 0x4C, 0xCC)
    keymapIT[13]                = 0x1C; // ENTER
    //keymapIT[225]               = 0x38; // RIGHT ALT (ALT GR) => see the charmap, all the altgr chars send a altgr in their sequence
    keymapIT[18]                = 0x38; // LEFT ALT
    //keymapIT[19]                = 0x??; // PAUSE (showkey -s: 0xE1 0x1D 0x45, 0xE1 0x9D 0xC5)
    //keymapIT[92]                = 0x5C; // RIGHT GUI (WINDOWS) (I get 91 for the right too)
    keymapIT[93]                = 0x5D; // MENU
    keymapIT[38]                = 0x48; // UP ARROW
    keymapIT[37]                = 0x4B; // LEFT ARROW
    keymapIT[40]                = 0x50; // DOWN ARROW
    keymapIT[39]                = 0x4D; // RIGHT ARROW
    //keymapIT[42]                = 0x??; // PRINT (showkey -s: 0xE0 0x2A 0xE0 0x37, 0xE0 0xAA 0xE0 0xB7)
    keymapIT[45]                = 0x52; // INSERT
    keymapIT[46]                = 0x53; // DELETE
    keymapIT[36]                = 0x47; // HOME
    keymapIT[35]                = 0x4F; // END
    keymapIT[33]                = 0x49; // PAGE UP
    keymapIT[34]                = 0x51; // PAGE DOWN
    keymapIT[144]               = 0x45; // NUM LOCK
    keymapIT[145]                = 0x46; // SCROLL LOCK
    keymapIT[112]                = 0x3B; // F1
    keymapIT[113]                = 0x3C; // F2
    keymapIT[114]                = 0x3D; // F3
    keymapIT[115]                = 0x3E; // F4
    keymapIT[116]                = 0x3F; // F5
    keymapIT[117]                = 0x40; // F6
    keymapIT[118]                = 0x41; // F7
    keymapIT[119]                = 0x42; // F8
    keymapIT[120]                = 0x43; // F9
    keymapIT[121]                = 0x44; // F10
    keymapIT[122]                = 0x57; // F11
    keymapIT[123]                = 0x58; // F12

    // combination keys with ctrl
    var ctrlKeymapIT = [];

    ctrlKeymapIT[65]                = 0x1E; // a
    ctrlKeymapIT[81]                = 0x10; // q
    ctrlKeymapIT[87]                = 0x11; // w
    ctrlKeymapIT[69]                = 0x12; // e
    ctrlKeymapIT[82]                = 0x13; // r
    ctrlKeymapIT[84]                = 0x14; // t
    ctrlKeymapIT[89]                = 0x15; // y
    ctrlKeymapIT[85]                = 0x16; // u
    ctrlKeymapIT[73]                = 0x17; // i
    ctrlKeymapIT[79]                = 0x18; // o
    ctrlKeymapIT[80]                = 0x19; // p
    ctrlKeymapIT[65]                = 0x1E; // a
    ctrlKeymapIT[83]                = 0x1F; // s
    ctrlKeymapIT[68]                = 0x20; // d
    ctrlKeymapIT[70]                = 0x21; // f
    ctrlKeymapIT[71]                = 0x22; // g
    ctrlKeymapIT[72]                = 0x23; // h
    ctrlKeymapIT[74]                = 0x24; // j
    ctrlKeymapIT[75]                = 0x25; // k
    ctrlKeymapIT[76]                = 0x26; // l
    ctrlKeymapIT[90]                = 0x2C; // z
    ctrlKeymapIT[88]                = 0x2D; // x
    ctrlKeymapIT[67]                = 0x2E; // c
    //ctrlKeymapIT[86]                = 0x2F; // v      to enable set disableClipboard = true in run.js
    ctrlKeymapIT[66]                = 0x30; // b
    ctrlKeymapIT[78]                = 0x31; // n
    ctrlKeymapIT[77]                = 0x32; // m

    // reserved ctrl+? combinations we want to intercept from browser and inject manually to spice
    var reservedCtrlKeymap = [];
    reservedCtrlKeymap[86] = 0x2F;

    return {
        getKeymap: function() {
            return keymapIT;
        },

        getCtrlKeymap: function() {
            return ctrlKeymapIT;
        },

        getReservedCtrlKeymap: function() {
            return reservedCtrlKeymap;
        },

        getCharmap: function() {
            return charmapIT;
        },

        setCtrlKey: function (key, val) {
            ctrlKeymapIT[key] = val;
        }
    };
}( );
wdi.KeymapUS = function() {

    var charmapUS = [];
    charmapUS['`']   = [[0x29, 0, 0, 0], [0xA9, 0, 0, 0]];
    charmapUS['~']   = [[0x2A, 0, 0, 0], [0x29, 0, 0, 0], [0xA9, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['1']   = [[0x2, 0, 0, 0],[0x82, 0, 0, 0]];
    charmapUS['!']   = [[0x2A, 0, 0, 0], [0x2, 0, 0, 0], [0x82, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['2']   = [[0x3, 0, 0, 0], [0x83, 0, 0, 0]];
    charmapUS['@']   = [[0x2A, 0, 0, 0], [0x3, 0, 0, 0], [0x83, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['3']   = [[0x4, 0, 0, 0], [0x84, 0, 0, 0]];
    charmapUS['#']   = [[0x2A, 0, 0, 0], [0x4, 0, 0, 0], [0x84, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['4']   = [[0x5, 0, 0, 0], [0x85, 0, 0, 0]];
    charmapUS['$']   = [[0x2A, 0, 0, 0], [0x5, 0, 0, 0], [0x85, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['5']   = [[0x6, 0, 0, 0], [0x86, 0, 0, 0]];
    charmapUS['%']   = [[0x2A, 0, 0, 0], [0x6, 0, 0, 0], [0x86, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['6']   = [[0x7, 0, 0, 0], [0x87, 0, 0, 0]];
    charmapUS['^']   = [[0x2A, 0, 0, 0], [0x7, 0, 0, 0], [0x87, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['7']   = [[0x8, 0, 0, 0], [0x88, 0, 0, 0]];
    charmapUS['&']   = [[0x2A, 0, 0, 0], [0x8, 0, 0, 0], [0x88, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['8']   = [[0x9, 0, 0, 0], [0x89, 0, 0, 0]];
    charmapUS['*']   = [[0x2A, 0, 0, 0], [0x9, 0, 0, 0], [0x89, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['9']   = [[0x0A, 0, 0, 0], [0x8A, 0, 0, 0]];
    charmapUS['(']   = [[0x2A, 0, 0, 0], [0x0A, 0, 0, 0], [0x8A, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['0']   = [[0x0B, 0, 0, 0], [0x8B, 0, 0, 0]];
    charmapUS[')']   = [[0x2A, 0, 0, 0], [0x0B, 0, 0, 0], [0x8B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['-']   = [[0x0C, 0, 0, 0], [0x8C, 0, 0, 0]];
    charmapUS['_']   = [[0x2A, 0, 0, 0], [0x0C, 0, 0, 0], [0x8C, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['=']   = [[0x0D, 0, 0, 0], [0x8D, 0, 0, 0]];
    charmapUS['+']   = [[0x2A, 0, 0, 0], [0x0D, 0, 0, 0], [0x8D, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['q']   = [[0x10, 0, 0, 0], [0x90, 0, 0, 0]];
    charmapUS['Q']   = [[0x2A, 0, 0, 0], [0x10, 0, 0, 0], [0x90, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['w']   = [[0x11, 0, 0, 0], [0x91, 0, 0, 0]];
    charmapUS['W']   = [[0x2A, 0, 0, 0], [0x11, 0, 0, 0], [0x91, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['e']   = [[0x12, 0, 0, 0], [0x92, 0, 0, 0]];
    charmapUS['E']   = [[0x2A, 0, 0, 0], [0x12, 0, 0, 0], [0x92, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['r']   = [[0x13, 0, 0, 0], [0x93, 0, 0, 0]];
    charmapUS['R']   = [[0x2A, 0, 0, 0], [0x13, 0, 0, 0], [0x93, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['t']   = [[0x14, 0, 0, 0], [0x94, 0, 0, 0]];
    charmapUS['T']   = [[0x2A, 0, 0, 0], [0x14, 0, 0, 0], [0x94, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['y']   = [[0x15, 0, 0, 0], [0x95, 0, 0, 0]];
    charmapUS['Y']   = [[0x2A, 0, 0, 0], [0x15, 0, 0, 0], [0x95, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['u']   = [[0x16, 0, 0, 0], [0x96, 0, 0, 0]];
    charmapUS['U']   = [[0x2A, 0, 0, 0], [0x16, 0, 0, 0], [0x96, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['i']   = [[0x17, 0, 0, 0], [0x97, 0, 0, 0]];
    charmapUS['I']   = [[0x2A, 0, 0, 0], [0x17, 0, 0, 0], [0x97, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['o']   = [[0x18, 0, 0, 0], [0x98, 0, 0, 0]];
    charmapUS['O']   = [[0x2A, 0, 0, 0], [0x18, 0, 0, 0], [0x98, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['p']   = [[0x19, 0, 0, 0], [0x99, 0, 0, 0]];
    charmapUS['P']   = [[0x2A, 0, 0, 0], [0x19, 0, 0, 0], [0x99, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['[']   = [[0x1A, 0, 0, 0], [0x9A, 0, 0, 0]];
    charmapUS['{']   = [[0x2A, 0, 0, 0], [0x1A, 0, 0, 0], [0x9A, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS[']']   = [[0x1B, 0, 0, 0], [0x9B, 0, 0, 0]];
    charmapUS['}']   = [[0x2A, 0, 0, 0], [0x1B, 0, 0, 0], [0x9B, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['\\']   = [[0x2B, 0, 0, 0], [0xAB, 0, 0, 0]];
    charmapUS['|']   = [[0x2A, 0, 0, 0], [0x2B, 0, 0, 0], [0xAB, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['a']   = [[0x1E, 0, 0, 0], [0x9E, 0, 0, 0]];
    charmapUS['A']   = [[0x2A, 0, 0, 0], [0x1E, 0, 0, 0], [0x9E, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['s']   = [[0x1F, 0, 0, 0], [0x9F, 0, 0, 0]];
    charmapUS['S']   = [[0x2A, 0, 0, 0], [0x1F, 0, 0, 0], [0x9F, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['d']   = [[0x20, 0, 0, 0], [0xA0, 0, 0, 0]];
    charmapUS['D']   = [[0x2A, 0, 0, 0], [0x20, 0, 0, 0], [0xA0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['f']   = [[0x21, 0, 0, 0], [0xA1, 0, 0, 0]];
    charmapUS['F']   = [[0x2A, 0, 0, 0], [0x21, 0, 0, 0], [0xA1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['g']   = [[0x22, 0, 0, 0], [0xA2, 0, 0, 0]];
    charmapUS['G']   = [[0x2A, 0, 0, 0], [0x22, 0, 0, 0], [0xA2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['h']   = [[0x23, 0, 0, 0], [0xA3, 0, 0, 0]];
    charmapUS['H']   = [[0x2A, 0, 0, 0], [0x23, 0, 0, 0], [0xA3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['j']   = [[0x24, 0, 0, 0], [0xA4, 0, 0, 0]];
    charmapUS['J']   = [[0x2A, 0, 0, 0], [0x24, 0, 0, 0], [0xA4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['k']   = [[0x25, 0, 0, 0], [0xA5, 0, 0, 0]];
    charmapUS['K']   = [[0x2A, 0, 0, 0], [0x25, 0, 0, 0], [0xA5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['l']   = [[0x26, 0, 0, 0], [0xA6, 0, 0, 0]];
    charmapUS['L']   = [[0x2A, 0, 0, 0], [0x26, 0, 0, 0], [0xA6, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS[';']   = [[0x27, 0, 0, 0], [0xA7, 0, 0, 0]];
    charmapUS[':']   = [[0x2A, 0, 0, 0], [0x27, 0, 0, 0], [0xA7, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['\'']  = [[0x28, 0, 0, 0], [0xA8, 0, 0, 0]];
    charmapUS['"']   = [[0x2A, 0, 0, 0], [0x28, 0, 0, 0], [0xA8, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['z']   = [[0x2C, 0, 0, 0], [0xAC, 0, 0, 0]];
    charmapUS['Z']   = [[0x2A, 0, 0, 0], [0x2C, 0, 0, 0], [0xAC, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['x']   = [[0x2D, 0, 0, 0], [0xAD, 0, 0, 0]];
    charmapUS['X']   = [[0x2A, 0, 0, 0], [0x2D, 0, 0, 0], [0xAD, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['c']   = [[0x2E, 0, 0, 0], [0xAE, 0, 0, 0]];
    charmapUS['C']   = [[0x2A, 0, 0, 0], [0x2E, 0, 0, 0], [0xAE, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['v']   = [[0x2F, 0, 0, 0], [0xAF, 0, 0, 0]];
    charmapUS['V']   = [[0x2A, 0, 0, 0], [0x2F, 0, 0, 0], [0xAF, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['b']   = [[0x30, 0, 0, 0], [0xB0, 0, 0, 0]];
    charmapUS['B']   = [[0x2A, 0, 0, 0], [0x30, 0, 0, 0], [0xB0, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['n']   = [[0x31, 0, 0, 0], [0xB1, 0, 0, 0]];
    charmapUS['N']   = [[0x2A, 0, 0, 0], [0x31, 0, 0, 0], [0xB1, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['m']   = [[0x32, 0, 0, 0], [0xB2, 0, 0, 0]];
    charmapUS['M']   = [[0x2A, 0, 0, 0], [0x32, 0, 0, 0], [0xB2, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS[',']   = [[0x33, 0, 0, 0], [0xB3, 0, 0, 0]];
    charmapUS['<']   = [[0x2A, 0, 0, 0], [0x33, 0, 0, 0], [0xB3, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['.']   = [[0x34, 0, 0, 0], [0xB4, 0, 0, 0]];
    charmapUS['>']   = [[0x2A, 0, 0, 0], [0x34, 0, 0, 0], [0xB4, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS['/']   = [[0x35, 0, 0, 0], [0xB5, 0, 0, 0]];
    charmapUS['?']   = [[0x2A, 0, 0, 0], [0x35, 0, 0, 0], [0xB5, 0, 0, 0], [0xAA, 0, 0, 0]];
    charmapUS[' ']   = [[0x39, 0, 0, 0], [0xb9, 0, 0, 0]];

    var keymapUS = [];

    keymapUS[27]                 = 0x1; // ESC
    keymapUS[9]                 = 0x0F; // TAB
    //keymapUS[20]                = 0x3A; // // BLOQ.MAY. => see the charmap, all the capital letters and shift chars send a shift in their sequence
    keymapUS[16]                = 0x2A; // LEFT SHIFT and RIGHT SHIFT
	keymapUS[91]                = 0x1D; // LEFT GUI (META, COMMAND) BINDED TO CONTROL
	keymapUS[17]                = 0x1D; // LEFT CONTROL and RIGHT CONTROL
    keymapUS[32]                = 0x39; // SPACE
    keymapUS[8]                 = 0x0E; // BACKSPACE
    keymapUS[13]                = 0x1C; // ENTER
    //keymapUS[0]                 = 0x38; // RIGHT ALT (ALT GR)
    //keymapUS[92]                = 0x5C; // RIGHT GUI (WINDOWS)
    keymapUS[38]                = 0x48; // UP ARROW
    keymapUS[37]                = 0x4B; // LEFT ARROW
    keymapUS[40]                = 0x50; // DOWN ARROW
    keymapUS[39]                = 0x4D; // RIGHT ARROW
    keymapUS[45]                = 0x52; // INSERT
    keymapUS[46]                = 0x53; // DELETE
    keymapUS[36]                = 0x47; // HOME
    keymapUS[35]                = 0x4F; // FIN
    keymapUS[33]                = 0x49; // PAGE UP
    keymapUS[34]                = 0x51; // PAGE UP
    keymapUS[144]               = 0x45; // BLOQ.NUM.
    keymapUS[145]                = 0x46; // SCROLL LOCK
    keymapUS[112]                = 0x3B; // F1
    keymapUS[113]                = 0x3C; // F2
    keymapUS[114]                = 0x3D; // F3
    keymapUS[115]                = 0x3E; // F4
    keymapUS[116]                = 0x3F; // F5
    keymapUS[117]                = 0x40; // F6
    keymapUS[118]                = 0x41; // F7
    keymapUS[119]                = 0x42; // F8
    keymapUS[120]                = 0x43; // F9
    keymapUS[121]                = 0x44; // F10
    keymapUS[122]                = 0x57; // F11
    keymapUS[123]                = 0x58; // F12

    var ctrlkeymapUS = [];

    ctrlkeymapUS[65]                = 0x1E; // a
    ctrlkeymapUS[81]                = 0x10; // q
    ctrlkeymapUS[87]                = 0x11; // w
    ctrlkeymapUS[69]                = 0x12; // e
    ctrlkeymapUS[82]                = 0x13; // r
    ctrlkeymapUS[84]                = 0x14; // t
    ctrlkeymapUS[89]                = 0x15; // y
    ctrlkeymapUS[85]                = 0x16; // u
    ctrlkeymapUS[73]                = 0x17; // i
    ctrlkeymapUS[79]                = 0x18; // o
    ctrlkeymapUS[80]                = 0x19; // p
    ctrlkeymapUS[65]                = 0x1E; // a
    ctrlkeymapUS[83]                = 0x1F; // s
    ctrlkeymapUS[68]                = 0x20; // d
    ctrlkeymapUS[70]                = 0x21; // f
    ctrlkeymapUS[71]                = 0x22; // g
    ctrlkeymapUS[72]                = 0x23; // h
    ctrlkeymapUS[74]                = 0x24; // j
    ctrlkeymapUS[75]                = 0x25; // k
    ctrlkeymapUS[76]                = 0x26; // l
    ctrlkeymapUS[90]                = 0x2C; // z
    ctrlkeymapUS[88]                = 0x2D; // x
    ctrlkeymapUS[67]                = 0x2E; // c
    //ctrlkeymapUS[86]                = 0x2F; // v      to enable set disableClipboard = true in run.js
    ctrlkeymapUS[66]                = 0x30; // b
    ctrlkeymapUS[78]                = 0x31; // n
    ctrlkeymapUS[77]                = 0x32; // m

    var reservedCtrlKeymap = [];
    reservedCtrlKeymap[86] = 0x2F; //v


    return {
        getKeymap: function() {
            return keymapUS;
        },

        getCtrlKeymap: function() {
            return ctrlkeymapUS;
        },

        getReservedCtrlKeymap: function() {
            return reservedCtrlKeymap;
        },

        getCharmap: function() {
            return charmapUS;
        },

        setCtrlKey: function (key, val) {
            ctrlkeymapUS[key] = val;
        }
    };
}( );
wdi.keyShortcutsHandled = {
    CTRLV: 0
}

wdi.Keymap = {
    keymap: {},
    ctrlKeymap: {},
    charmap: {},
    ctrlPressed: false,
    twoBytesScanCodes: [0x5B, 0xDB, /*0x38, 0xB8,*/ 0x5C, 0xDC, 0x1D, 0x9D, 0x5D, 0xDD, 0x52, 0xD2, 0x53, 0xD3, 0x4B, 0xCB, 0x47, 0xC9, 0x4F, 0xCF, 0x48, 0xC8, 0x50, 0xD0, 0x49, 0xC9, 0x51, 0xD1, 0x4D, 0xCD, 0x1C, 0x9C],

    loadKeyMap: function(layout) {
        try {
            this.keymap = wdi['Keymap' + layout.toUpperCase()].getKeymap();
            this.ctrlKeymap = wdi['Keymap' + layout.toUpperCase()].getCtrlKeymap();
            this.reservedCtrlKeymap =  wdi['Keymap' + layout.toUpperCase()].getReservedCtrlKeymap();
            this.charmap = wdi['Keymap' + layout.toUpperCase()].getCharmap();
        } catch(e) {
			this.keymap = wdi.KeymapES.getKeymap();
            this.ctrlKeymap = wdi.KeymapES.getCtrlKeymap();
            this.reservedCtrlKeymap =  wdi.KeymapES.getReservedCtrlKeymap();
            this.charmap = wdi.KeymapES.getCharmap();
		}
    },

    isInKeymap: function(keycode) {
        if (this.keymap[keycode] === undefined) return false;
        else return true;
    },

    /**
     * Returns the associated spice key code from the given browser keyboard event
     * @param e
     * @returns {*}
     */
    getScanCodes: function(e) {
		if (e['hasScanCode']) {
			return e['scanCode'];
		} else if (this.handledByCtrlKeyCode(e['type'], e['keyCode'], e['generated'])) {// before doing anything else we check if the event about to be handled has to be intercepted
            return this.getScanCodeFromKeyCode(e['keyCode'], e['type'], this.ctrlKeymap, this.reservedCtrlKeymap);
        } else if (this.handledByCharmap(e['type'])) {
            return this.getScanCodesFromCharCode(e['charCode']);
        } else if (this.handledByNormalKeyCode(e['type'], e['keyCode'])) {
            return this.getScanCodeFromKeyCode(e['keyCode'], e['type'], this.keymap);
        } else {
            return [];
        }
    },

    getScanCodeFromKeyCode: function(keyCode, type, keymap, additionalKeymap) {
        this.controlPressed(keyCode, type);
        var key = null;
        if(keyCode in keymap) {
            key = keymap[keyCode];
        } else {
            key = additionalKeymap[keyCode];
        }
        if (key === undefined) return [];
        if (key < 0x100) {
            if (type == 'keydown') {
                return [this.makeKeymap(key)];
            } else if (type == 'keyup') {
                return [this.makeKeymap(key | 0x80)];
            }
        } else {
            if (type == 'keydown') {
                return [this.makeKeymap(0xe0 | ((key - 0x100) << 8))];
            } else if (type == 'keyup') {
                return [this.makeKeymap(0x80e0 | ((key - 0x100) << 8))];
            }
        }
        return key;
    },

    controlPressed: function(keyCode, type) {
        if (keyCode === 17 || keyCode === 91) {  // Ctrl or CMD key
            if (type === 'keydown') this.ctrlPressed = true;
            else if (type === 'keyup') this.ctrlPressed = false;
        }
    },

    handledByCtrlKeyCode: function(type, keyCode, generated) {
        if (type === 'keydown' || type === 'keyup' || type === 'keypress') {
            if (this.ctrlPressed) {
                if (type === 'keypress') {
                    return true;
                }

                if (this.ctrlKeymap[keyCode]) {
                    return true;  // is the second key in a keyboard shortcut (i.e. the x in Ctrl+x)
                }

                //check if the event is a fake event generated from our gui or programatically
                if(generated && this.reservedCtrlKeymap[keyCode]) {
                    return true;
                }
            }
        }
        return false;
    },

    handledByNormalKeyCode: function(type, keyCode) {
        if (type === 'keydown' || type === 'keyup') {
            if (this.keymap[keyCode]) {
                return true;
            }
        }
        return false;
    },

    handledByCharmap: function(type) {
        if (type === 'inputmanager') return true;
        else return false;
    },

    getScanCodesFromCharCode: function(charCode) {
        var scanCode = this.charmap[String.fromCharCode(charCode)];
        if (scanCode === undefined) scanCode = [];
        return scanCode;
    },

    makeKeymap: function(scancode) {
        if ($.inArray(scancode, this.twoBytesScanCodes) != -1) {
            return [0xE0, scancode, 0, 0];
        } else {
            return [scancode, 0, 0];
        }
    }
}
/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.

You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see
<http://www.gnu.org/licenses/agpl-3.0.txt>.

See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org

The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.

In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice.
 */

//Sandboxed script without access to other external functions, objects or anything.
//used for webworkers.
//includes: quic and lz_rgb

window = this;
if (!window['wdi']) {
	window['wdi'] = {};
}

window['wdi'].WorkerOperations = {
	quic: 0,
	lz_rgb: 1,
	bytesToUriJpeg: 2,
	bytesToUriPng: 3
};

function dispatch(arr, useMessage) {

	var u8 = new Uint8Array(arr);
	var postMessageW3CCompilant = u8[3];


	var result = null;
	var operation = u8[0];

	if (operation === wdi.WorkerOperations.quic) {
		try {
			result = wdi.JSQuic.quic_decode(arr);
		} catch (e) {

		}
	} else if (operation === wdi.WorkerOperations.lz_rgb) { //lz?
		try {
			result = wdi.LZSS.lz_rgb32_decompress_rgb(arr);
		} catch (e) {

		}
	} else if (operation === wdi.WorkerOperations.bytesToUriJpeg) {
		try {
			result = bytesToURI(u8, 'jpeg');
			self.postMessage(result);
			return; //string is not transferable!
		} catch (e) {

		}
	} else if (operation === wdi.WorkerOperations.bytesToUriPng) {
		try {
			result = bytesToURI(u8, 'png');
			self.postMessage(result);
			return; //string is not transferable!
		} catch (e) {

		}
	}
	if (useMessage && result) {

		if (postMessageW3CCompilant) {
			self.postMessage(result, [result]);
		} else {
			self.postMessage(result);
		}

	} else {
		return result;
	}

}

window['workerDispatch'] = dispatch;

window.addEventListener('message', function(e) {
	return dispatch(e.data, true);
}, false);



//bytes to uri
function bytesToURI(data, type) {
	var tmpstr = 'data:image/'+type+',';
	var len = data.length;
	for (var i = 4; i < len; i++) {
		if (data[i] < 16) {
			tmpstr += '%0';
		} else {
			tmpstr += '%';
		}
		tmpstr += data[i].toString(16);
	}

	return tmpstr;
}


//quic


wdi.QuicImageType = {
	QUIC_IMAGE_TYPE_INVALID: 0,
	QUIC_IMAGE_TYPE_GRAY: 1,
	QUIC_IMAGE_TYPE_RGB16: 2,
	QUIC_IMAGE_TYPE_RGB24: 3,
	QUIC_IMAGE_TYPE_RGB32: 4,
	QUIC_IMAGE_TYPE_RGBA: 5
};

function bytesToInt16(bytes) {
	var low = bytes.shift();
	var high = bytes.shift();

	return high * Math.pow(16, 2) + low;
}

function bytesToInt32(bytes) {
	var low = bytesToInt16(bytes);
	var high = bytesToInt16(bytes);

	return high * Math.pow(16, 4) + low;
}

wdi.quic = {};

function wdi_quic_QuicFamily() {
	this.notGRcwlen = [];
	this.nGRcodewords = [];
	this.notGRprefixmask = [];
	this.notGRsuffixlen = [];
	this.xlatU2L = [];
	this.xlatL2U = [];
}

function wdi_quic_s_bucket() {
	this.pcounters = null;
	this.bestcode = 0;
}

function wdi_quic_CommonState() {
	this.wm_trigger = this;
	this.encoder = null;
	this.waitcnt = 0;
	this.tabrand_seed = wdi.JSQuic.stabrand();
	this.wmidx = wdi.JSQuic.DEFwmistart;
	this.wmileft = wdi.JSQuic.wminext;
	wdi.JSQuic.set_wm_trigger(this);


	this.melcstate = 0;
	this.melclen = wdi.JSQuic.J[0];
	this.melcorder = (1 << this.melclen) >>> 0;
}


function wdi_quic_FamilyStat() {
	this.buckets_buf = null;
	this.buckets_ptrs = null;
	this.counters = 0;
}

function wdi_quic_Channel() {
	this.encoder = null;
	this.correlate_row_width = 0;
	this.correlate_row = null;

	this._buckets_ptrs = null;

	this.family_stat_8bpc = new wdi_quic_FamilyStat();
	this.family_stat_5bpc = new wdi_quic_FamilyStat();

	this.state = new wdi_quic_CommonState();
	this.oldFirst = 0;
}

wdi.JSQuic = {
	QUIC_MAGIC: 1364543811, //"QUIC"
	MAXNUMCODES: 8,

	DEFevol: 3,
	MINevol: 0,
	MAXevol: 5,

	DEFwmistart: 0,
	MINwmistart: 0,

	DEFmaxclen: 26,

	DEFwmimax: 6,

	DEFwminext: 2048,
	MINwminext: 1,
	MAXwminext: 100000000,
	MAX_CHANNELS: 4,

	wmimax: 6,

	wminext: 2048,

	evol: 3,
	family_8bpc: new wdi_quic_QuicFamily(),
	family_5bpc: new wdi_quic_QuicFamily(),

	bppmask: new Int32Array([
		0x00000000,
		0x00000001, 0x00000003, 0x00000007, 0x0000000f,
		0x0000001f, 0x0000003f, 0x0000007f, 0x000000ff,
		0x000001ff, 0x000003ff, 0x000007ff, 0x00000fff,
		0x00001fff, 0x00003fff, 0x00007fff, 0x0000ffff,
		0x0001ffff, 0x0003ffff, 0x0007ffff, 0x000fffff,
		0x001fffff, 0x003fffff, 0x007fffff, 0x00ffffff,
		0x01ffffff, 0x03ffffff, 0x07ffffff, 0x0fffffff,
		0x1fffffff, 0x3fffffff, 0x7fffffff, 0xffffffff
	]),

	bitat: new Int32Array([
		0x00000001, 0x00000002, 0x00000004, 0x00000008,
		0x00000010, 0x00000020, 0x00000040, 0x00000080,
		0x00000100, 0x00000200, 0x00000400, 0x00000800,
		0x00001000, 0x00002000, 0x00004000, 0x00008000,
		0x00010000, 0x00020000, 0x00040000, 0x00080000,
		0x00100000, 0x00200000, 0x00400000, 0x00800000,
		0x01000000, 0x02000000, 0x04000000, 0x08000000,
		0x10000000, 0x20000000, 0x40000000, 0x80000000
	]),

	TABRAND_TABSIZE: 256,
	TABRAND_SEEDMASK: 0x0ff,

	tabrand_chaos: new Int32Array([
		0x02c57542, 0x35427717, 0x2f5a2153, 0x9244f155, 0x7bd26d07, 0x354c6052, 0x57329b28, 0x2993868e,
		0x6cd8808c, 0x147b46e0, 0x99db66af, 0xe32b4cac, 0x1b671264, 0x9d433486, 0x62a4c192, 0x06089a4b,
		0x9e3dce44, 0xdaabee13, 0x222425ea, 0xa46f331d, 0xcd589250, 0x8bb81d7f, 0xc8b736b9, 0x35948d33,
		0xd7ac7fd0, 0x5fbe2803, 0x2cfbc105, 0x013dbc4e, 0x7a37820f, 0x39f88e9e, 0xedd58794, 0xc5076689,
		0xfcada5a4, 0x64c2f46d, 0xb3ba3243, 0x8974b4f9, 0x5a05aebd, 0x20afcd00, 0x39e2b008, 0x88a18a45,
		0x600bde29, 0xf3971ace, 0xf37b0a6b, 0x7041495b, 0x70b707ab, 0x06beffbb, 0x4206051f, 0xe13c4ee3,
		0xc1a78327, 0x91aa067c, 0x8295f72a, 0x732917a6, 0x1d871b4d, 0x4048f136, 0xf1840e7e, 0x6a6048c1,
		0x696cb71a, 0x7ff501c3, 0x0fc6310b, 0x57e0f83d, 0x8cc26e74, 0x11a525a2, 0x946934c7, 0x7cd888f0,
		0x8f9d8604, 0x4f86e73b, 0x04520316, 0xdeeea20c, 0xf1def496, 0x67687288, 0xf540c5b2, 0x22401484,
		0x3478658a, 0xc2385746, 0x01979c2c, 0x5dad73c8, 0x0321f58b, 0xf0fedbee, 0x92826ddf, 0x284bec73,
		0x5b1a1975, 0x03df1e11, 0x20963e01, 0xa17cf12b, 0x740d776e, 0xa7a6bf3c, 0x01b5cce4, 0x1118aa76,
		0xfc6fac0a, 0xce927e9b, 0x00bf2567, 0x806f216c, 0xbca69056, 0x795bd3e9, 0xc9dc4557, 0x8929b6c2,
		0x789d52ec, 0x3f3fbf40, 0xb9197368, 0xa38c15b5, 0xc3b44fa8, 0xca8333b0, 0xb7e8d590, 0xbe807feb,
		0xbf5f8360, 0xd99e2f5c, 0x372928e1, 0x7c757c4c, 0x0db5b154, 0xc01ede02, 0x1fc86e78, 0x1f3985be,
		0xb4805c77, 0x00c880fa, 0x974c1b12, 0x35ab0214, 0xb2dc840d, 0x5b00ae37, 0xd313b026, 0xb260969d,
		0x7f4c8879, 0x1734c4d3, 0x49068631, 0xb9f6a021, 0x6b863e6f, 0xcee5debf, 0x29f8c9fb, 0x53dd6880,
		0x72b61223, 0x1f67a9fd, 0x0a0f6993, 0x13e59119, 0x11cca12e, 0xfe6b6766, 0x16b6effc, 0x97918fc4,
		0xc2b8a563, 0x94f2f741, 0x0bfa8c9a, 0xd1537ae8, 0xc1da349c, 0x873c60ca, 0x95005b85, 0x9b5c080e,
		0xbc8abbd9, 0xe1eab1d2, 0x6dac9070, 0x4ea9ebf1, 0xe0cf30d4, 0x1ef5bd7b, 0xd161043e, 0x5d2fa2e2,
		0xff5d3cae, 0x86ed9f87, 0x2aa1daa1, 0xbd731a34, 0x9e8f4b22, 0xb1c2c67a, 0xc21758c9, 0xa182215d,
		0xccb01948, 0x8d168df7, 0x04238cfe, 0x368c3dbc, 0x0aeadca5, 0xbad21c24, 0x0a71fee5, 0x9fc5d872,
		0x54c152c6, 0xfc329483, 0x6783384a, 0xeddb3e1c, 0x65f90e30, 0x884ad098, 0xce81675a, 0x4b372f7d,
		0x68bf9a39, 0x43445f1e, 0x40f8d8cb, 0x90d5acb6, 0x4cd07282, 0x349eeb06, 0x0c9d5332, 0x520b24ef,
		0x80020447, 0x67976491, 0x2f931ca3, 0xfe9b0535, 0xfcd30220, 0x61a9e6cc, 0xa487d8d7, 0x3f7c5dd1,
		0x7d0127c5, 0x48f51d15, 0x60dea871, 0xc9a91cb7, 0x58b53bb3, 0x9d5e0b2d, 0x624a78b4, 0x30dbee1b,
		0x9bdf22e7, 0x1df5c299, 0x2d5643a7, 0xf4dd35ff, 0x03ca8fd6, 0x53b47ed8, 0x6f2c19aa, 0xfeb0c1f4,
		0x49e54438, 0x2f2577e6, 0xbf876969, 0x72440ea9, 0xfa0bafb8, 0x74f5b3a0, 0x7dd357cd, 0x89ce1358,
		0x6ef2cdda, 0x1e7767f3, 0xa6be9fdb, 0x4f5f88f8, 0xba994a3a, 0x08ca6b65, 0xe0893818, 0x9e00a16a,
		0xf42bfc8f, 0x9972eedc, 0x749c8b51, 0x32c05f5e, 0xd706805f, 0x6bfbb7cf, 0xd9210a10, 0x31a1db97,
		0x923a9559, 0x37a7a1f6, 0x059f8861, 0xca493e62, 0x65157e81, 0x8f6467dd, 0xab85ff9f, 0x9331aff2,
		0x8616b9f5, 0xedbd5695, 0xee7e29b1, 0x313ac44f, 0xb903112f, 0x432ef649, 0xdc0a36c0, 0x61cf2bba,
		0x81474925, 0xa8b6c7ad, 0xee5931de, 0xb2f8158d, 0x59fb7409, 0x2e3dfaed, 0x9af25a3f, 0xe1fed4d5
	]),

	besttrigtab: [
		[550, 900, 800, 700, 500, 350, 300, 200, 180, 180, 160],
		[110, 550, 900, 800, 550, 400, 350, 250, 140, 160, 140],
		[100, 120, 550, 900, 700, 500, 400, 300, 220, 250, 160]
	],

	lzeroes: new Int32Array([
		8, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
		2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	]),

	J: new Int32Array([
		0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7,
		7, 8, 9, 10, 11, 12, 13, 14, 15
	]),

	zeroLUT: null,

	BPC_MASK: {
		4: 0xff,
		5: 0xff,
		24: 0xff,
		16: 0x1f
	},

	stabrand: function() {
		return this.TABRAND_SEEDMASK;
	},

	tabrand: function(rgb_state) {
		rgb_state.tabrand_seed++;
		return this.tabrand_chaos[rgb_state.tabrand_seed & this.TABRAND_SEEDMASK];
	},

	set_wm_trigger: function(state) {
		var wm = state.wmidx;
		if (wm > 10) {
			wm = 10;
		}

		//>> 1 == / 2
		state.wm_trigger = wdi.JSQuic.besttrigtab[Math.floor(wdi.JSQuic.evol >> 1)][wm];
	},

	ceil_log_2: function(val) {
		var result;

		if (val === 1) {
			return 0;
		}

		result = 1;
		val -= 1;
		while ((val >>>= 1)) {
			result++;
		}

		return result;
	},

	decorelate_init: function(family, bpc) {
		var pixelbitmask = this.bppmask[bpc];
		var pixelbitmaskshr = pixelbitmask >>> 1;
		var s;

		for (s = 0; s <= pixelbitmask; s++) {
			if (s <= pixelbitmaskshr) {
				family.xlatU2L[s] = (s << 1) >>> 0;
			} else {
				family.xlatU2L[s] = (((pixelbitmask - s) << 1) >>> 0) + 1;
			}
		}
	},

	corelate_init: function(family, bpc) {
		var pixelbitmask = this.bppmask[bpc];
		var s;

		for (s = 0; s <= pixelbitmask; s++) {
			if (s & 0x01) {
				family.xlatL2U[s] = pixelbitmask - (s >>> 1);
			} else {
				family.xlatL2U[s] = (s >>> 1);
			}
		}
	},

	family_init: function(family, bpc, limit) {
		var l;

		for (l = 0; l < bpc; l++) {
			var altprefixlen, altcodewords;

			altprefixlen = limit - bpc;
			if (altprefixlen > parseInt(this.bppmask[bpc - l])) {
				altprefixlen = this.bppmask[bpc - l];
			}

			altcodewords = this.bppmask[bpc] + 1 - ((altprefixlen << l) >>> 0);

			family.nGRcodewords[l] = ((altprefixlen << l) >>> 0);
			family.notGRcwlen[l] = altprefixlen + this.ceil_log_2(altcodewords);
			family.notGRprefixmask[l] = this.bppmask[32 - altprefixlen];
			family.notGRsuffixlen[l] = this.ceil_log_2(altcodewords);
		}

		//this.decorelate_init(family, bpc);
		this.corelate_init(family, bpc);
	},

	init_zeroLUT: function() {

		this.zeroLUT = new Int32Array(256);

		var i, j, k, l;

		j = k = 1;
		l = 8;
		for (i = 0; i < 256; ++i) {
			this.zeroLUT[i] = l;
			--k;
			if (k === 0) {
				k = j;
				--l;
				j *= 2;
			}
		}
	},

	quic_init: function() {
		this.family_init(this.family_8bpc, 8, this.DEFmaxclen);
		//this.family_init(this.family_5bpc, 5, this.DEFmaxclen);
		this.init_zeroLUT();

		//perf improvment
		wdi.xlatL2U = new Int32Array(this.family_8bpc.xlatL2U.length);
		wdi.xlatL2U.set(this.family_8bpc.xlatL2U);

		wdi.notGRprefixmask = new Int32Array(this.family_8bpc.notGRprefixmask.length);
		wdi.notGRprefixmask.set(this.family_8bpc.notGRprefixmask);

		wdi.nGRcodewords = new Int32Array(this.family_8bpc.nGRcodewords.length);
		wdi.nGRcodewords.set(this.family_8bpc.nGRcodewords);


		wdi.notGRcwlen = new Int32Array(this.family_8bpc.notGRcwlen.length);
		wdi.notGRcwlen.set(this.family_8bpc.notGRcwlen);

		wdi.notGRsuffixlen = new Int32Array(this.family_8bpc.notGRsuffixlen.length);
		wdi.notGRsuffixlen.set(this.family_8bpc.notGRsuffixlen);


		//prepare precomputed lzeroes tables
		var lzeroes = wdi.JSQuic.lzeroes;
		var lzeroes8 = new Int32Array(lzeroes);
		var len = lzeroes.length;
		for (var i = 0; i < len; i++) {
			lzeroes8[i] = lzeroes[i] + 8;
		}
		wdi.JSQuic.lzeroes8 = lzeroes8;

		//prepare precomputed lzeroes tables
		var lzeroes16 = new Int32Array(lzeroes);
		for (var i = 0; i < len; i++) {
			lzeroes16[i] = lzeroes[i] + 16;
		}
		wdi.JSQuic.lzeroes16 = lzeroes16;

		//prepare precomputed lzeroes tables
		var lzeroes24 = new Int32Array(lzeroes);
		for (var i = 0; i < len; i++) {
			lzeroes24[i] = lzeroes[i] + 24;
		}
		wdi.JSQuic.lzeroes24 = lzeroes24;
	},

	quic_image_params: function(encoder, type) {
		var channels, bpc;
		switch (type) {
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_GRAY:
				channels = 1;
				bpc = 8;
				break;
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGB16:
				channels = 3;
				bpc = 5;
				break;
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGB24:
				channels = 3;
				bpc = 8;
				break;
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGB32:
				channels = 3;
				bpc = 8;
				break;
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGBA:
				channels = 4;
				bpc = 8;
				break;
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_INVALID:
			default:
				channels = 0;
				bpc = 0;
		}
		return [channels, bpc];
	},

	find_model_params: function(encoder, bpc) {
		var bsize = 0;
		var bstart = 0;
		var bend = 0;
		var repcntr = 0;

		var result = {};

		result.ncounters = 8;

		result.levels = 0x1 << bpc;

		result.n_buckets_ptrs = 0;

		switch (this.evol) {
			case 1:
				result.repfirst = 3;
				result.firstsize = 1;
				result.repnext = 2;
				result.mulsize = 2;
				break;
			case 3:
				result.repfirst = 1;
				result.firstsize = 1;
				result.repnext = 1;
				result.mulsize = 2;
				break;
			case 5:
				result.repfirst = 1;
				result.firstsize = 1;
				result.repnext = 1;
				result.mulsize = 4;
				break;
			case 0:
			case 2:
			case 4:
			default:
				wdi.Debug.error('fund model params: invalid evol');
				return false;
		}

		result.nbuckets = 0;
		repcntr = result.repfirst + 1;
		bsize = result.firstsize;

		do { /* other buckets */
			if (result.nbuckets) {
				bstart = bend + 1;
			} else {
				bstart = 0;
			}

			if (!--repcntr) {
				repcntr = result.repnext;
				bsize *= result.mulsize;
			}

			bend = bstart + bsize - 1;
			if (bend + bsize >= result.levels) {
				bend = result.levels - 1;
			}

			if (!result.n_buckets_ptrs) {
				result.n_buckets_ptrs = result.levels;
			}

			result.nbuckets++;
		} while (bend < result.levels - 1);
		return result;
	},

	init_model_structures: function(encoder, family, params) {
		family.buckets_buf = [];
		for (var i = 0; i < params.nbuckets; i++) {
			family.buckets_buf[i] = new wdi_quic_s_bucket();
		}
		family.buckets_ptrs = [];
		family.counters = [];
		this.fill_model_structures(encoder, family, params);
	},

	fill_model_structures: function(encoder, family, params) {
		var bsize, bstart, bend = 0,
			repcntr, bnumber;

		bnumber = 0;

		repcntr = params.repfirst + 1;
		bsize = params.firstsize;


		do {
			if (bnumber) {
				bstart = bend + 1;
			} else {
				bstart = 0;
			}

			if (!--repcntr) {
				repcntr = params.repnext;
				bsize *= params.mulsize;
			}

			bend = bstart + bsize - 1;
			if (bend + bsize >= params.levels) {
				bend = params.levels - 1;
			}

			family.buckets_buf[bnumber].pcounters = new Int32Array(params.ncounters);
			for (var x = 0; x < params.ncounters; x++) {
				family.buckets_buf[bnumber].pcounters[x] = 0;
			}

			for (var i = bstart; i <= bend; i++) {
				family.buckets_ptrs[i] = family.buckets_buf[bnumber];
			}


			bnumber++;
		} while (bend < params.levels - 1);
	},

	initChannel: function(encoder, channel) {
		channel.encoder = encoder;
		channel.state.encoder = encoder;
		channel.correlate_row_width = 0;
		channel.correlate_row = null;

		var params = this.find_model_params(encoder, 8);
		encoder.n_buckets_8bpc = params.nbuckets;
		this.init_model_structures(encoder, channel.family_stat_8bpc, params);

		params = this.find_model_params(encoder, 5);
		encoder.n_buckets_5bpc = params.nbuckets;
		this.init_model_structures(encoder, channel.family_stat_5bpc, params);
	},

	encoder_reste_channels: function(encoder, channels, width, bpc) {
		encoder.num_channels = channels;
		for (var i = 0; i < channels; i++) {
			var bucket, end_bucket;

			if (encoder.channels[i].correlate_row_width < width) {
				encoder.channels[i].correlate_row = new Array(width);
				encoder.channels[i].correlate_row_width = width;
			}
			encoder.channels[i].num_channel = i;
			if (bpc === 8) {
				bucket = encoder.channels[i].family_stat_8bpc.buckets_buf;
				end_bucket = encoder.n_buckets_8bpc;
				for (var x = 0; x < end_bucket; x++) {
					bucket[x].bestcode = 8 - 1;
				}
				encoder.channels[i]._buckets_ptrs = encoder.channels[i].family_stat_8bpc.buckets_ptrs;
			} else if (bpc === 5) {
				bucket = encoder.channels[i].family_stat_5bpc.buckets_buf;
				end_bucket = encoder.n_buckets_5bpc;
				for (var x = 0; x < end_bucket; x++) {
					bucket[x].bestcode = /*BPC*/ 5 - 1;
				}
				encoder.channels[i]._buckets_ptrs = encoder.channels[i].family_stat_5bpc.buckets_ptrs;
			} else {
				return FALSE;
			}

			encoder.channels[i].state.waitcnt = 0;
			encoder.channels[i].state.tabrand_seed = wdi.JSQuic.stabrand();
			encoder.channels[i].state.wmidx = wdi.JSQuic.DEFwmistart;
			encoder.channels[i].state.wmileft = wdi.JSQuic.wminext;
		}
		return true;
	},

	decode_channel_run: function(encoder, channel) {
		var runlen = 0;

		do {
			var temp, hits;
			//TODO: casting needed?
			temp = wdi.JSQuic.zeroLUT[(~(encoder.io_word >>> 24) >>> 0) % 256];

			for (hits = 1; hits <= temp; hits++) {
				runlen += channel.state.melcorder;

				if (channel.state.melcstate < 32) {
					channel.state.melclen = wdi.JSQuic.J[++channel.state.melcstate];
					channel.state.melcorder = (1 << channel.state.melclen) >>> 0;
				}
			}
			if (temp !== 8) {
				encoder.eatbits(temp + 1, encoder);
				break;
			}
			encoder.eatbits(8, encoder);
		} while (1);

		/* read the length of the remainder */
		if (channel.state.melclen) {
			runlen += encoder.io_word >>> (32 - channel.state.melclen);
			encoder.eatbits(channel.state.melclen, encoder);
		}

		/* adjust melcoder parameters */
		if (channel.state.melcstate) {
			channel.state.melclen = wdi.JSQuic.J[--channel.state.melcstate];
			channel.state.melcorder = (1 << channel.state.melclen) >>> 0;
		}

		return runlen;
	},

	decode_run: function(encoder) {
		var runlen = 0;
		var temp, hits, tempadd;
		var zeroLUT = wdi.JSQuic.zeroLUT;
		var rgb_state = encoder.rgb_state;
		var J = wdi.JSQuic.J;
		var eatbits = encoder.eatbits;
		do {

			//TODO: casting needed?
			temp = zeroLUT[(~(encoder.io_word >>> 24) >>> 0) % 256];
			tempadd = temp + 1;
			for (hits = 1; hits < tempadd; hits++) {
				runlen += encoder.rgb_state.melcorder;

				if (rgb_state.melcstate < 32) {
					rgb_state.melclen = J[++rgb_state.melcstate];
					rgb_state.melcorder = (1 << rgb_state.melclen) >>> 0;
				}
			}
			if (temp !== 8) {
				eatbits(tempadd, encoder);
				break;
			}
			encoder.eatbits(8, encoder);
		} while (1);

		if (rgb_state.melclen) {
			runlen += encoder.io_word >>> (32 - rgb_state.melclen);
			eatbits(rgb_state.melclen, encoder);
		}

		if (rgb_state.melcstate) {
			rgb_state.melclen = J[--rgb_state.melcstate];
			rgb_state.melcorder = (1 << rgb_state.melclen) >>> 0;
		}

		return runlen;
	},

	quic_decode: function(data) {
		//console.time("test");
		var view = new Uint32Array(data);
		var encoder = new wdi_quic_Encoder(view);
		var opaque = encoder.io_word & 0x0000FF00;
		var format = (encoder.io_word >>> 24) & 0xFF;


		encoder.eat32bits(); //skip quic size

		encoder.eat32bits();
		var magic = encoder.io_word;
		encoder.eat32bits();

		var version = encoder.io_word;
		encoder.eat32bits();

		var type = encoder.io_word;
		encoder.eat32bits();

		encoder.type = type; //here?

		var width = encoder.io_word;
		encoder.width = width; //here?
		encoder.eat32bits();

		var height = encoder.io_word;
		encoder.height = height; //here?
		encoder.eat32bits();

		var result = wdi.JSQuic.quic_image_params(encoder, type);
		var channels = result[0];
		var bpc = result[1];

		this.encoder_reste_channels(encoder, channels, width, bpc);

		var buf = new ArrayBuffer(width * height * 4);
		var buf8 = new Uint8Array(buf);
		var data = new Uint32Array(buf);
		encoder.result = buf8;
		encoder.resultData = data;
		encoder.setComputedWidth(width);

		switch (type) {
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGB32:
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGB24:
				//ASSERT(encoder->usr, ABS(stride) >= (int)encoder->width * 4);
				QUIC_UNCOMPRESS_RGB(encoder, channels, bpc, type);
				break;
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGB16:
				//				if (type == QUIC_IMAGE_TYPE_RGB16) {
				//					//ASSERT(encoder->usr, ABS(stride) >= (int)encoder->width * 2);
				//					QUIC_UNCOMPRESS_RGB(16, rgb16_pixel_t);
				//				} else if (type == QUIC_IMAGE_TYPE_RGB32) {
				//					//ASSERT(encoder->usr, ABS(stride) >= (int)encoder->width * 4);
				//					QUIC_UNCOMPRESS_RGB(16_to_32, rgb32_pixel_t);
				//				} else {
				//					//encoder->usr->warn(encoder->usr, "unsupported output format\n");
				//					return QUIC_ERROR;
				//				}

				break;
			case wdi.QuicImageType.QUIC_IMAGE_TYPE_RGBA:
				QUIC_UNCOMPRESS_RGBA(encoder, channels, bpc, type);
				if (opaque) {
					var len = buf8.length - 1;
					while (len > 0) {
						buf8[len] = 255;
						len -= 4;
					}
				}
				break;
			//QUIC_UNCOMPRESS_RGBA(encoder, channels, bpc, type);
			//
			//				if (type != QUIC_IMAGE_TYPE_RGBA) {
			//					//encoder->usr->warn(encoder->usr, "unsupported output format\n");
			//					return QUIC_ERROR;
			//				}
			//				//ASSERT(encoder->usr, ABS(stride) >= (int)encoder->width * 4);
			//				uncompress_rgba(encoder, buf, stride);
			//				break;
		}
		//		var len = encoder.result.length;
		//		while(len--) {
		//			imgData.data[len] = encoder.result[len];
		//		}
		//console.timeEnd("test");

		//imgData.data.set(buf8);
		return buf;
	}

};

wdi.JSQuic.quic_init();

function wdi_quic_Encoder(data) {
	this.computedWidth = 0;
	this.result = [];
	this.cnt = 0;
	this.pxCnt = 0,
		this.usr = data;
	this.type = null;
	this.width = null;
	this.height = null;
	this.num_channels = null;

	this.n_buckets_8bpc = null;
	this.n_buckets_5bpc = null;

	this.io_available_bits = 32;
	this.io_now = 0;

	this.io_next_word = null;
	this.io_now = null;

	this.read_io_word();
	this.io_word = this.io_next_word;

	this.read_io_word();

	this.io_words_count = data.length;

	this.rows_completed = 0; //??

	this.channels = [];

	this.alphaPos = 3; //first alpha

	this.rgb_state = new wdi_quic_CommonState();
	for (var i = 0; i < 4; i++) {
		this.channels[i] = new wdi_quic_Channel();
		wdi.JSQuic.initChannel(this, this.channels[i]);
	}
}

wdi_quic_Encoder.prototype.append = function(databyte) {
	this.result[this.cnt++] = databyte;
}

wdi_quic_Encoder.prototype.appendPixel = function(r, g, b) {
	this.resultData[this.pxCnt++] =
		(255 << 24) | // alpha
		(b << 16) | // blue
		(g << 8) | // green
		r; // red
	this.cnt += 4;
}

wdi_quic_Encoder.prototype.eatbits = function(len, encoder) {
	var available_bits = encoder.io_available_bits;
	var io_word = encoder.io_word;

	var delta = available_bits - len;

	io_word = io_word << len;

	//enough bits
	if (delta >= 0) {
		io_word = (io_word | encoder.io_next_word >>> delta) >>> 0;
		encoder.io_available_bits = delta;
		encoder.io_word = io_word;
		return;
	}

	var io_next_word = encoder.io_next_word;
	//not enough bits
	delta = -delta; //bits missing
	io_word = (io_word | (io_next_word << delta) >>> 0);

	///////////////////
	//read io word (inlined for perforemance)

	io_next_word = encoder.usr[encoder.io_now++];
	//end read io_word
	/////////////////

	available_bits = 32 - delta;
	io_word = (io_word | (io_next_word >>> available_bits)) >>> 0;

	encoder.io_available_bits = available_bits;
	encoder.io_word = io_word;
	encoder.io_next_word = io_next_word;
}

wdi_quic_Encoder.prototype.eat32bits = function() {
	this.eatbits(16, this);
	this.eatbits(16, this);
}

wdi_quic_Encoder.prototype.read_io_word = function() {
	this.io_next_word = this.usr[this.io_now++];
}

wdi_quic_Encoder.prototype.row_completed = function() {
	this.rows_completed++;
}

wdi_quic_Encoder.prototype.setComputedWidth = function(width) {
	this.computedWidth = width * 4;
}

wdi_quic_Encoder.prototype.appendAlpha = function(databyte) {
	this.result[this.alphaPos] = databyte;
	this.alphaPos += 4;
}

function cnt_l_zeroes(bits) {
	if (bits > 0x007FFFFF) {
		return wdi.JSQuic.lzeroes[bits >>> 24];
	} else if (bits > 0x00007FFF) {
		return 8 + wdi.JSQuic.lzeroes[((bits >>> 16) & 0x000000ff)];
	} else if (bits > 0x0000007F) {
		return 16 + wdi.JSQuic.lzeroes[((bits >>> 8) & 0x000000ff)];
	} else {
		return 24 + wdi.JSQuic.lzeroes[(bits & 0x000000ff)];
	}
}


/*
 *
 *
 * JSQUIC FAMILY
 *
 *
 */

function golomb_code_len(n, l) {
	if (n < wdi.nGRcodewords[l]) {
		return (n >>> l) + 1 + l;
	} else {
		return wdi.notGRcwlen[l];
	}
}

function golomb_decoding(l, bits, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen) {
	var cwlen;
	var result;
	//its better to check first for bigger, tested for performance
	if (bits > notGRprefixmask[l]) {
		var zeroprefix = cnt_l_zeroes(bits);
		cwlen = zeroprefix + 1 + l;
		result = ((zeroprefix << l)) | ((bits >>> (32 - cwlen)) & bppmask[l]);
	} else {
		cwlen = notGRcwlen[l];
		result = nGRcodewords[l] + ((bits) >>> (32 - cwlen) & bppmask[notGRsuffixlen[l]]);
	}
	return [result, cwlen];
}

/* update the bucket using just encoded curval */
function real_update_model(state, bucket, curval, bpp, wm_trigger) {
	var i;
	var bestcode;
	var bestcodelen;
	var ithcodelen;

	var pcounters = bucket.pcounters;
	bestcode = bpp - 1;
	bestcodelen = (pcounters[bestcode] += golomb_code_len(curval, bestcode));

	for (i = bpp - 2; i >= 0; i--) {
		ithcodelen = (pcounters[i] += golomb_code_len(curval, i));

		if (ithcodelen < bestcodelen) {
			bestcode = i;
			bestcodelen = ithcodelen;
		}
	}

	bucket.bestcode = bestcode;
	if (bestcodelen > state.wm_trigger) {
		while (bpp-- > 0) {
			pcounters[bpp] >>>= 1;
		}
	}
}

function UPDATE_MODEL(index, encoder, bpp, correlate_row_r, correlate_row_g, correlate_row_b) {
	real_update_model(encoder.rgb_state, find_bucket(encoder.channels[0],
		correlate_row_r[index - 1]), correlate_row_r[index], bpp);
	real_update_model(encoder.rgb_state, find_bucket(encoder.channels[1],
		correlate_row_g[index - 1]), correlate_row_g[index], bpp);
	real_update_model(encoder.rgb_state, find_bucket(encoder.channels[2],
		correlate_row_b[index - 1]), correlate_row_b[index], bpp);
}

function find_bucket(channel, val) {
	if (val === undefined) {
		val = channel.oldFirst;
	}
	return channel._buckets_ptrs[val];
}

/*
 *
 *
 * JSQUIC RGBA
 *
 *
 */

function QUIC_UNCOMPRESS_RGBA(encoder, channels, bpc, type) {
	quic_uncompress_row0(encoder, channels, bpc, type);
	quic_four_uncompress_row0(encoder, encoder.channels[3], bpc, type);
	encoder.row_completed();
	var height = encoder.height;
	var rgb_state = encoder.rgb_state;
	for (var row = 1; row < height; row++) {
		quic_uncompress_row_a(encoder, channels, bpc, type, rgb_state);
		quic_four_uncompress_row(encoder, encoder.channels[3], bpc, type);
		encoder.row_completed();
	}
}

function quic_four_uncompress_row(encoder, channel, bpc, type) {
	var bpc_mask = wdi.JSQuic.BPC_MASK[type];
	var pos = 0;
	var width = encoder.width;
	while ((wdi.JSQuic.wmimax > channel.state.wmidx) && (channel.state.wmileft <= width)) {
		if (channel.state.wmileft) {
			uncompress_four_row_seg(
				encoder,
				channel,
				pos,
				pos + channel.state.wmileft,
				bpc,
				bpc_mask,
				type
			);
			pos += channel.state.wmileft;
			width -= channel.state.wmileft;
		}

		channel.state.wmidx++;
		wdi.JSQuic.set_wm_trigger(channel.state);
		channel.state.wmileft = wdi.JSQuic.wminext;
	}

	if (width) {
		uncompress_four_row_seg(
			encoder,
			channel,
			pos,
			pos + width,
			bpc,
			bpc_mask,
			type
		);
		if (wdi.JSQuic.wmimax > channel.state.wmidx) {
			channel.state.wmileft -= width;
		}
	}
}

function uncompress_four_row_seg(encoder, channel, i, end, bpc, bpc_mask, type) {
	var correlate_row = channel.correlate_row;

	var stopidx = 0;

	var waitmask = wdi.JSQuic.bppmask[channel.state.wmidx];

	var run_index = 0;
	var run_end = 0;

	var rle = false;

	var computedWidth = encoder.computedWidth;

	var rows_completed = encoder.rows_completed;

	var offset = ((encoder.rows_completed - 1) * computedWidth);

	var data;

	var eatbits = encoder.eatbits;
	var appendAlpha = encoder.appendAlpha;

	var alpha;

	var ret, codewordlen;
	var bppmask = wdi.JSQuic.bppmask;

	var notGRprefixmask = wdi.notGRprefixmask;
	var notGRcwlen = wdi.notGRcwlen;
	var nGRcodewords = wdi.nGRcodewords;
	var notGRsuffixlen = wdi.notGRsuffixlen;

	if (!i) {
		alpha = UNCOMPRESS_ONE_0_A(channel, encoder, bpc_mask, offset);

		if (channel.state.waitcnt) {
			--channel.state.waitcnt;
		} else {
			channel.state.waitcnt = (wdi.JSQuic.tabrand(channel.state) & waitmask);
			real_update_model(channel.state, find_bucket(channel,
				correlate_row[-1]), correlate_row[0], bpc);
		}
		stopidx = ++i + channel.state.waitcnt;
	} else {
		stopidx = i + channel.state.waitcnt;
		alpha = encoder.result[encoder.alphaPos - 4];
	}

	for (;;) {
		while (stopidx < end) {
			for (; i <= stopidx; i++) {
				rle = RLE_PRED_A(i, encoder, run_index, computedWidth, rows_completed);
				if (rle) break;

				ret = golomb_decoding(find_bucket(channel, correlate_row[i - 1]).bestcode,
					encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);

				data = ret[0];
				codewordlen = ret[1];

				correlate_row[i] = data;
				alpha = (((wdi.xlatL2U[data] +
				((alpha + PIXEL_B(channel, encoder, i, offset)) >>> 1)) & bpc_mask) >>> 0);

				appendAlpha.call(encoder, alpha);
				eatbits(codewordlen, encoder);
			}
			if (!rle) {
				real_update_model(channel.state, find_bucket(channel,
					correlate_row[stopidx - 1]), correlate_row[stopidx], bpc);
				stopidx = i + (wdi.JSQuic.tabrand(channel.state) & waitmask);
			} else {
				break;
			}
		}
		if (!rle) {
			for (; i < end; i++) {
				rle = RLE_PRED_A(i, encoder, run_index, computedWidth, rows_completed);
				if (rle) break;

				ret = golomb_decoding(find_bucket(channel, correlate_row[i - 1]).bestcode,
					encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);

				data = ret[0];
				codewordlen = ret[1];
				correlate_row[i] = data;
				alpha = (((wdi.xlatL2U[data] +
				((alpha + PIXEL_B(channel, encoder, i, offset)) >>> 1)) & bpc_mask) >>> 0);

				appendAlpha.call(encoder, alpha);
				eatbits(codewordlen, encoder);
			}
			if (!rle) {
				channel.state.waitcnt = stopidx - end;
				return;
			}
		}

		//RLE
		channel.state.waitcnt = stopidx - i;
		run_index = i;
		run_end = i + wdi.JSQuic.decode_channel_run(encoder, channel);

		var cpos = ((encoder.rows_completed) * (encoder.width * 4)) + (i * 4);
		var a = encoder.result[cpos - 1];

		for (; i < run_end; i++) {
			//TODO: how to append?
			appendAlpha.call(encoder, a);
		}

		if (i === end) {
			return;
		}

		stopidx = i + channel.state.waitcnt;
		rle = false;
		//END RLE
	}
}


function quic_four_uncompress_row0(encoder, channel, bpc, type) {
	var bpc_mask = wdi.JSQuic.BPC_MASK[type];
	var pos = 0;
	var width = encoder.width;
	while ((wdi.JSQuic.wmimax > channel.state.wmidx) && (channel.state.wmileft <= width)) {
		if (channel.state.wmileft) {
			uncompress_four_row0_seg(
				encoder,
				channel,
				pos,
				pos + channel.wmileft,
				wdi.JSQuic.bppmask[channel.state.wmidx],
				bpc,
				bpc_mask,
				type
			);
			pos += channel.state.wmileft;
			width -= channel.state.wmileft;
		}

		channel.state.wmidx++;
		wdi.JSQuic.set_wm_trigger(channel.state);
		channel.state.wmileft = wdi.JSQuic.wminext;
	}

	if (width) {
		uncompress_four_row0_seg(
			encoder,
			channel,
			pos,
			pos + width,
			wdi.JSQuic.bppmask[channel.state.wmidx],
			bpc,
			bpc_mask,
			type
		);
		if (wdi.JSQuic.wmimax > channel.state.wmidx) {
			channel.state.wmileft -= width;
		}
	}
}

function uncompress_four_row0_seg(encoder, channel, i, end, waitmask, bpc, bpc_mask, type) {
	var correlate_row = channel.correlate_row;

	var stopidx = 0;

	if (!i) {
		UNCOMPRESS_ONE_ROW0_0_A(channel);

		if (channel.state.waitcnt) {
			--channel.state.waitcnt;
		} else {
			channel.state.waitcnt = (wdi.JSQuic.tabrand(channel.state) & waitmask);
			real_update_model(channel.state, find_bucket(channel,
				correlate_row[-1]), correlate_row[0], bpc);
		}
		stopidx = ++i + channel.state.waitcnt;
	} else {
		stopidx = i + channel.state.waitcnt;
	}

	while (stopidx < end) {
		for (; i <= stopidx; i++) {
			UNCOMPRESS_ONE_ROW0_A(channel, i, bpc_mask, encoder, correlate_row);
		}
		real_update_model(channel.state, find_bucket(channel,
			correlate_row[stopidx - 1]), correlate_row[stopidx], bpc);
		stopidx = i + (wdi.JSQuic.tabrand(channel.state) & waitmask);
	}

	for (; i < end; i++) {
		UNCOMPRESS_ONE_ROW0_A(channel, i, bpc_mask, encoder, correlate_row);
	}
	channel.state.waitcnt = stopidx - end;
}

function SAME_PIXEL_A(i, result) {
	if (result[i - 1] === result[i + 3]) {
		return true;
	}
	return false;
}

function RLE_PRED_A(i, encoder, run_index, width, rows_completed) {
	var pr = ((rows_completed - 1) * width) + (i * 4); //prev r
	if (run_index !== i && i > 2) {
		if (SAME_PIXEL_A(pr, encoder.result)) {
			pr = ((rows_completed) * width) + ((i - 1) * 4); // cur r
			if (SAME_PIXEL_A(pr, encoder.result)) {
				return true;
			}
		}
	}
	return false;
}

function UNCOMPRESS_ONE_0_A(channel, encoder, bpc_mask, offset) {
	var ret, codewordlen;
	channel.oldFirst = channel.correlate_row[0];
	ret = golomb_decoding(find_bucket(channel,
		channel.correlate_row[-1]).bestcode, encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);
	channel.correlate_row[0] = ret[0];
	codewordlen = ret[1];
	var residuum = wdi.xlatL2U[channel.correlate_row[0]];
	var prev = PIXEL_B(channel, encoder, 0, offset);
	var resultpixel = ((residuum + prev) & bpc_mask) >>> 0;
	encoder.appendAlpha(resultpixel);
	encoder.eatbits(codewordlen, encoder);
	return resultpixel;
}

function UNCOMPRESS_ONE_A(channel, i, bpc_mask, encoder, correlate_row, offset) {
	var ret, codewordlen;
	ret = golomb_decoding(find_bucket(channel, correlate_row[i - 1]).bestcode,
		encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);
	var data = ret[0];
	codewordlen = ret[1];
	correlate_row[i] = data;
	encoder.appendAlpha((((wdi.xlatL2U[data] +
	((PIXEL_A_A(encoder) + PIXEL_B(channel, encoder, i, offset)) >>> 1)) & bpc_mask) >>> 0));

	encoder.eatbits(codewordlen, encoder);
}


function UNCOMPRESS_ONE_ROW0_0_A(channel) {
	var ret, codewordlen;
	var encoder = channel.encoder;
	ret = golomb_decoding(find_bucket(channel, 0).bestcode, encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);
	channel.correlate_row[0] = ret[0];
	codewordlen = ret[1];
	encoder.appendAlpha(wdi.xlatL2U[channel.correlate_row[0]]);
	encoder.eatbits(codewordlen, encoder);
}

function UNCOMPRESS_ONE_ROW0_A(channel, i, bpc_mask, encoder, correlate_row) {
	var ret, codewordlen;
	ret = golomb_decoding(find_bucket(channel, correlate_row[i - 1]).bestcode, encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);
	var data = ret[0];
	codewordlen = ret[1];
	correlate_row[i] = data;
	encoder.appendAlpha(CORELATE_0_A(encoder, channel, i, bpc_mask, correlate_row));
	encoder.eatbits(codewordlen, encoder);
}

function CORELATE_0_A(encoder, channel, curr, bpc_mask, correlate_row) {
	return ((wdi.xlatL2U[correlate_row[curr]] + PIXEL_A_A(encoder)) & bpc_mask) >>> 0;
}

function PIXEL_A_A(encoder) {
	return encoder.result[encoder.alphaPos - 4];
}

/*
 *
 *
 * JSQUIC UNCOMPRESS
 *
 *
 */

function QUIC_UNCOMPRESS_RGB(encoder, channels, bpc, type) {
	quic_uncompress_row0(encoder, channels, bpc, type);
	encoder.row_completed();

	var rgb_state = encoder.rgb_state;
	var height = encoder.height;
	var computedAlpha = 255 << 24;
	var result = encoder.result;
	var resultData = encoder.resultData;
	var width = encoder.width;
	var bpc_mask = wdi.JSQuic.BPC_MASK[type];
	var jsquic = wdi.JSQuic;
	var channel_r = encoder.channels[0];
	var channel_g = encoder.channels[1];
	var channel_b = encoder.channels[2];
	var buckets_ptrs_r = channel_r._buckets_ptrs;
	var buckets_ptrs_g = channel_g._buckets_ptrs;
	var buckets_ptrs_b = channel_b._buckets_ptrs;
	var correlate_row_r = channel_r.correlate_row;
	var correlate_row_g = channel_g.correlate_row;
	var correlate_row_b = channel_b.correlate_row;
	var computedWidth = encoder.computedWidth;
	var xlatL2U = wdi.xlatL2U;
	var lzeroes = wdi.JSQuic.lzeroes;
	var lzeroes8 = wdi.JSQuic.lzeroes8;
	var lzeroes16 = wdi.JSQuic.lzeroes16;
	var lzeroes24 = wdi.JSQuic.lzeroes24;
	var notGRprefixmask = wdi.notGRprefixmask;
	var notGRcwlen = wdi.notGRcwlen;
	var nGRcodewords = wdi.nGRcodewords;
	var notGRsuffixlen = wdi.notGRsuffixlen;
	var eatbits = encoder.eatbits;
	var tabrand = wdi.JSQuic.tabrand;
	var decode_run = wdi.JSQuic.decode_run;
	var bppmask = wdi.JSQuic.bppmask;
	var jsquic = wdi.JSQuic;
	var tabrand_chaos = wdi.JSQuic.tabrand_chaos;
	var tabrand_seedmask = jsquic.TABRAND_SEEDMASK;
	var usr = encoder.usr;

	for (var row = 1; row < height; row++) {
		quic_uncompress_row(encoder, channels, bpc, type, rgb_state, computedAlpha, result, resultData, width, bpc_mask,
			jsquic, channel_r, channel_g, channel_b, buckets_ptrs_r, buckets_ptrs_g, buckets_ptrs_b, correlate_row_r,
			correlate_row_g, correlate_row_b, computedWidth, xlatL2U, lzeroes, lzeroes8, lzeroes16, lzeroes24,
			notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen, eatbits, tabrand, decode_run, bppmask, tabrand_chaos,
			tabrand_seedmask, usr);
		encoder.rows_completed++;
	}
}


function quic_uncompress_row(encoder, channels, bpc, type, rgb_state, computedAlpha, result, resultData, width, bpc_mask,
							 jsquic, channel_r, channel_g, channel_b, buckets_ptrs_r, buckets_ptrs_g, buckets_ptrs_b, correlate_row_r, correlate_row_g,
							 correlate_row_b, computedWidth, xlatL2U, lzeroes, lzeroes8, lzeroes16, lzeroes24,
							 notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen, eatbits, tabrand, decode_run, bppmask, tabrand_chaos,
							 tabrand_seedmask, usr) {

	var pos = 0;
	var rows_completed = encoder.rows_completed;
	var currentOffset32 = ((rows_completed) * computedWidth / 4);
	var offset = ((rows_completed - 1) * computedWidth);
	while ((jsquic.wmimax > rgb_state.wmidx) && (rgb_state.wmileft <= width)) {
		if (rgb_state.wmileft) {
			uncompress_row_seg(
				encoder,
				pos,
				pos + rgb_state.wmileft,
				bpc,
				bpc_mask,
				type,
				rgb_state,
				computedAlpha,
				result,
				resultData,
				channel_r,
				channel_g,
				channel_b,
				buckets_ptrs_r,
				buckets_ptrs_g,
				buckets_ptrs_b,
				correlate_row_r,
				correlate_row_g,
				correlate_row_b,
				computedWidth,
				xlatL2U,
				lzeroes,
				lzeroes8,
				lzeroes16,
				lzeroes24,
				notGRprefixmask,
				notGRcwlen,
				nGRcodewords,
				notGRsuffixlen,
				eatbits,
				tabrand,
				decode_run,
				bppmask,
				jsquic,
				tabrand_chaos,
				rows_completed,
				tabrand_seedmask,
				offset,
				currentOffset32,
				usr
			);
			pos += rgb_state.wmileft;
			width -= rgb_state.wmileft;
		}

		rgb_state.wmidx++;
		jsquic.set_wm_trigger(rgb_state);
		rgb_state.wmileft = jsquic.wminext;
	}

	if (width) {
		uncompress_row_seg(
			encoder,
			pos,
			pos + width,
			bpc,
			bpc_mask,
			type,
			rgb_state,
			computedAlpha,
			result,
			resultData,
			channel_r,
			channel_g,
			channel_b,
			buckets_ptrs_r,
			buckets_ptrs_g,
			buckets_ptrs_b,
			correlate_row_r,
			correlate_row_g,
			correlate_row_b,
			computedWidth,
			xlatL2U,
			lzeroes,
			lzeroes8,
			lzeroes16,
			lzeroes24,
			notGRprefixmask,
			notGRcwlen,
			nGRcodewords,
			notGRsuffixlen,
			eatbits,
			tabrand,
			decode_run,
			bppmask,
			jsquic,
			tabrand_chaos,
			rows_completed,
			tabrand_seedmask,
			offset,
			currentOffset32,
			usr
		);
		if (jsquic.wmimax > encoder.rgb_state.wmidx) {
			rgb_state.wmileft -= width;
		}
	}
}


function quic_uncompress_row_a(encoder, channels, bpc, type, rgb_state) {
	var bpc_mask = wdi.JSQuic.BPC_MASK[type];
	var pos = 0;
	var width = encoder.width;
	while ((wdi.JSQuic.wmimax > rgb_state.wmidx) && (rgb_state.wmileft <= width)) {
		if (rgb_state.wmileft) {
			uncompress_row_seg_a(
				encoder,
				pos,
				pos + rgb_state.wmileft,
				bpc,
				bpc_mask,
				type,
				rgb_state
			);
			pos += rgb_state.wmileft;
			width -= rgb_state.wmileft;
		}

		rgb_state.wmidx++;
		wdi.JSQuic.set_wm_trigger(rgb_state);
		rgb_state.wmileft = wdi.JSQuic.wminext;
	}

	if (width) {
		uncompress_row_seg_a(
			encoder,
			pos,
			pos + width,
			bpc,
			bpc_mask,
			type,
			rgb_state
		);
		if (wdi.JSQuic.wmimax > encoder.rgb_state.wmidx) {
			rgb_state.wmileft -= width;
		}
	}
}

function SAME_PIXEL_RGB_A(i, result) {

	if (result[i - 4] === result[i] && result[i - 3] === result[i + 1] && result[i - 2] === result[i + 2])
		return true;

	return false;
}

function SAME_PIXEL(i, result) {

	if (result[i - 1] === result[i])
		return true;

	return false;
}

function RLE_PRED_RGB_A(i, encoder, offset, currentOffset, run_index) {
	if (run_index !== i && i > 2) {
		if (SAME_PIXEL_RGB_A(offset, encoder.result)) { //fila de arriba
			var pr = currentOffset + ((i - 1) * 4);
			if (SAME_PIXEL_RGB_A(pr, encoder.result)) { //pixel de la izquierda
				return true;
			}
		}
	}
	return false;
}

function RLE_PRED(i, encoder, offset, currentOffset, run_index) {
	if (run_index !== i && i > 2) {
		if (SAME_PIXEL(offset * 4, encoder.result)) { //fila de arriba
			var pr = currentOffset + i - 1;
			if (SAME_PIXEL(pr * 4, encoder.result)) { //pixel de la izquierda
				return true;
			}
		}
	}
	return false;
}

function uncompress_row_seg(encoder, i, end, bpc, bpc_mask, type, rgb_state, computedAlpha, result, resultData,
							channel_r, channel_g, channel_b, buckets_ptrs_r, buckets_ptrs_g, buckets_ptrs_b, correlate_row_r, correlate_row_g,
							correlate_row_b, computedWidth, xlatL2U, lzeroes, lzeroes8, lzeroes16, lzeroes24, notGRprefixmask, notGRcwlen,
							nGRcodewords, notGRsuffixlen, eatbits, tabrand, decode_run, bppmask, jsquic, tabrand_chaos, rows_completed,
							tabrand_seedmask, offset, currentOffset32, usr) {

	var stopidx = 0;
	var waitmask = bppmask[rgb_state.wmidx];
	var run_index = 0;
	var rle = false;

	//var offset = ((rows_completed-1) * computedWidth);
	//var currentOffset32 = ((rows_completed) * computedWidth/4);

	var i_1, i_4; //for performance improvments

	var pr, pg, pb;

	var prevCorrelatedR, prevCorrelatedG, prevCorrelatedB;
	var ret, codewordlen, l, bits, zeroprefix;

	var cnt = encoder.cnt;
	var pxCnt = encoder.pxCnt;

	var prev_row, i4sub, stopidx_sub1;

	var available_bits, io_word, delta, io_next_word;

	if (!i) {
		pr = UNCOMPRESS_ONE_0(channel_r, encoder, bpc_mask, offset);
		pg = UNCOMPRESS_ONE_0(channel_g, encoder, bpc_mask, offset);
		pb = UNCOMPRESS_ONE_0(channel_b, encoder, bpc_mask, offset);

		prevCorrelatedR = correlate_row_r[0];
		prevCorrelatedG = correlate_row_g[0];
		prevCorrelatedB = correlate_row_b[0];
		//inlined appendPixel
		resultData[pxCnt++] =
			255 << 24 | // alpha
			pb << 16 | // blue
			pg << 8 | // green
			pr; // red
		//cnt += 4;

		if (rgb_state.waitcnt) {
			--rgb_state.waitcnt;
		} else {
			rgb_state.waitcnt = (tabrand.call(jsquic, rgb_state) & waitmask);
			UPDATE_MODEL(0, encoder, bpc, correlate_row_r, correlate_row_g, correlate_row_b);
		}
		stopidx = ++i + rgb_state.waitcnt;
	} else {
		stopidx = i + rgb_state.waitcnt;
		pr = result[cnt - 4];
		pg = result[cnt - 3];
		pb = result[cnt - 2];

		prevCorrelatedR = correlate_row_r[i - 1];
		prevCorrelatedG = correlate_row_g[i - 1];
		prevCorrelatedB = correlate_row_b[i - 1];
	}


	while (true) {
		while (stopidx < end) {
			i_4 = offset + i * 4;
			for (; i <= stopidx; i++) {
				/////// critical part
				//rle = RLE_PRED(i, encoder, ci, currentOffset32, run_index);
				//RLE_PRED INLINE
				//inlined same_pixel, see original rle_pred
				i4sub = i_4 / 4;
				if (resultData[i4sub - 1] === resultData[i4sub]) { //fila de arriba
					prev_row = currentOffset32 + i - 1;
					if (resultData[prev_row - 1] === resultData[prev_row]) { //pixel de la izquierda
						if (run_index !== i && i > 2) {
							rle = true;
							break;
						}
					}
				}


				/////////////////////// INLINING UNCOMPRESS_ONE
				//r
				/////////////////////// INLINING GOLOMB_DECODING
				//ret = golomb_decoding(buckets_ptrs_r[prevCorrelatedR].bestcode,
				//	encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				l = buckets_ptrs_r[prevCorrelatedR].bestcode;
				bits = encoder.io_word;
				if (bits > notGRprefixmask[l]) {
					//zeroprefix = cnt_l_zeroes(bits);

					if (bits > 0x007FFFFF) {
						zeroprefix = lzeroes[bits >>> 24];
					} else if (bits > 0x00007FFF) {
						zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					} else if (bits > 0x0000007F) {
						zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff)];
					} else {
						zeroprefix = lzeroes24[(bits & 0x000000ff)];
					}

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedR = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedR = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_r[i] = prevCorrelatedR;

				pr = ((((xlatL2U[prevCorrelatedR] +
				((pr +
				result[i_4++]) >>> 1)) & bpc_mask)));

				//eatbits(codewordlen, encoder);
				//INLINING EATBITS
				available_bits = encoder.io_available_bits;
				io_word = encoder.io_word;

				delta = available_bits - codewordlen;

				io_word = io_word << codewordlen;

				//enough bits
				if (delta >= 0) {
					io_word = (io_word | encoder.io_next_word >>> delta) >>> 0;
					encoder.io_available_bits = delta;
					encoder.io_word = io_word;
				} else {
					io_next_word = encoder.io_next_word;
					//not enough bits
					delta = -delta; //bits missing
					io_word = (io_word | (io_next_word << delta) >>> 0);

					///////////////////
					//read io word (inlined for perforemance)

					io_next_word = usr[encoder.io_now++];
					//end read io_word
					/////////////////

					available_bits = 32 - delta;
					io_word = (io_word | (io_next_word >>> available_bits)) >>> 0;

					encoder.io_available_bits = available_bits;
					encoder.io_word = io_word;
					encoder.io_next_word = io_next_word;
				}
				//END INLINING

				//g
				///////////////////////////////////////INLINING golomb_decoding

				//ret = golomb_decoding(buckets_ptrs_g[prevCorrelatedG].bestcode,
				//	encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				l = buckets_ptrs_g[prevCorrelatedG].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					//zeroprefix = cnt_l_zeroes(bits);

					if (bits > 0x007FFFFF) {
						zeroprefix = lzeroes[bits >>> 24];
					} else if (bits > 0x00007FFF) {
						zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					} else if (bits > 0x0000007F) {
						zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff)];
					} else {
						zeroprefix = lzeroes24[(bits & 0x000000ff)];
					}

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedG = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedG = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_g[i] = prevCorrelatedG;

				pg = ((((xlatL2U[prevCorrelatedG] +
				((pg +
				result[i_4++]) >>> 1)) & bpc_mask)));

				//INLINING EATBITS
				available_bits = encoder.io_available_bits;
				io_word = encoder.io_word;

				delta = available_bits - codewordlen;

				io_word = io_word << codewordlen;

				//enough bits
				if (delta >= 0) {
					io_word = (io_word | encoder.io_next_word >>> delta) >>> 0;
					encoder.io_available_bits = delta;
					encoder.io_word = io_word;
				} else {
					io_next_word = encoder.io_next_word;
					//not enough bits
					delta = -delta; //bits missing
					io_word = (io_word | (io_next_word << delta) >>> 0);

					///////////////////
					//read io word (inlined for perforemance)

					io_next_word = usr[encoder.io_now++];
					//end read io_word
					/////////////////

					available_bits = 32 - delta;
					io_word = (io_word | (io_next_word >>> available_bits)) >>> 0;

					encoder.io_available_bits = available_bits;
					encoder.io_word = io_word;
					encoder.io_next_word = io_next_word;
				}
				//END INLINING

				//b
				////////////////////////////////// INLINING golomb_decoding
				//ret = golomb_decoding(buckets_ptrs_b[prevCorrelatedB].bestcode,
				//	encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				l = buckets_ptrs_b[prevCorrelatedB].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					//zeroprefix = cnt_l_zeroes(bits);

					if (bits > 0x007FFFFF) {
						zeroprefix = lzeroes[bits >>> 24];
					} else if (bits > 0x00007FFF) {
						zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					} else if (bits > 0x0000007F) {
						zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff)];
					} else {
						zeroprefix = lzeroes24[(bits & 0x000000ff)];
					}

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedB = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedB = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}


				correlate_row_b[i] = prevCorrelatedB;

				pb = ((((xlatL2U[prevCorrelatedB] +
				((pb +
				result[i_4++]) >>> 1)) & bpc_mask)));

				//INLINING EATBITS
				available_bits = encoder.io_available_bits;
				io_word = encoder.io_word;

				delta = available_bits - codewordlen;

				io_word = io_word << codewordlen;

				//enough bits
				if (delta >= 0) {
					io_word = (io_word | encoder.io_next_word >>> delta) >>> 0;
					encoder.io_available_bits = delta;
					encoder.io_word = io_word;
				} else {
					io_next_word = encoder.io_next_word;
					//not enough bits
					delta = -delta; //bits missing
					io_word = (io_word | (io_next_word << delta) >>> 0);

					///////////////////
					//read io word (inlined for perforemance)

					io_next_word = usr[encoder.io_now++];
					//end read io_word
					/////////////////

					available_bits = 32 - delta;
					io_word = (io_word | (io_next_word >>> available_bits)) >>> 0;

					encoder.io_available_bits = available_bits;
					encoder.io_word = io_word;
					encoder.io_next_word = io_next_word;
				}
				//END INLINING
				////////////////////// END INLINING

				/**
				 pr = UNCOMPRESS_ONE(channel_r, i, i_1, i_4, bpc_mask, encoder, correlate_row_r, offset, result, 0, xlatL2U, buckets_ptrs_r, pr);
				 pg = UNCOMPRESS_ONE(channel_g, i, i_1, i_4, bpc_mask, encoder, correlate_row_g, offset, result, 1, xlatL2U, buckets_ptrs_g, pg);
				 pb = UNCOMPRESS_ONE(channel_b, i, i_1, i_4, bpc_mask, encoder, correlate_row_b, offset, result, 2, xlatL2U, buckets_ptrs_b, pb);
				 **/


					//this is inlined appendPixel
				resultData[pxCnt++] =
					computedAlpha | // alpha
					pb << 16 | // blue
					pg << 8 | // green
					pr; // red
				//cnt += 4;
				i_4++; //skip alpha
			}
			if (!rle) {
				//UPDATE_MODEL(stopidx, encoder, bpc, correlate_row_r, correlate_row_g, correlate_row_b);
				//inlining update_model
				stopidx_sub1 = stopidx - 1;
				real_update_model(rgb_state, buckets_ptrs_r[correlate_row_r[stopidx_sub1]],
					correlate_row_r[stopidx], bpc);
				real_update_model(rgb_state, buckets_ptrs_g[correlate_row_g[stopidx_sub1]],
					correlate_row_g[stopidx], bpc);
				real_update_model(rgb_state, buckets_ptrs_b[correlate_row_b[stopidx_sub1]],
					correlate_row_b[stopidx], bpc);
				//end inlining

				rgb_state.tabrand_seed++;
				stopidx = i + ((tabrand_chaos[rgb_state.tabrand_seed & tabrand_seedmask]) & waitmask);


			} else {
				break;
			}
		}

		if (!rle) {
			i_4 = offset + i * 4;
			for (; i < end; i++) {
				//ci = offset32+i;
				//rle = RLE_PRED(i, encoder, ci, currentOffset32, run_index);
				//RLE_PRED INLINE
				//inlined same_pixel, see original rle_pred
				i4sub = i_4 / 4;
				if (resultData[i4sub - 1] === resultData[i4sub]) { //fila de arriba
					prev_row = currentOffset32 + i - 1;
					if (resultData[prev_row - 1] === resultData[prev_row]) { //pixel de la izquierda
						if (run_index !== i && i > 2) {
							rle = true;
							break;
						}
					}
				}

				//END INLINE*/


				////////////////////// INLINING UNCOMPRESS_ONE
				//r
				//ret = golomb_decoding(buckets_ptrs_r[prevCorrelatedR].bestcode, encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				//prevCorrelatedR = ret[0];
				//codewordlen = ret[1];
				l = buckets_ptrs_r[prevCorrelatedR].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					//zeroprefix = cnt_l_zeroes(bits);

					if (bits > 0x007FFFFF) {
						zeroprefix = lzeroes[bits >>> 24];
					} else if (bits > 0x00007FFF) {
						zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					} else if (bits > 0x0000007F) {
						zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff)];
					} else {
						zeroprefix = lzeroes24[(bits & 0x000000ff)];
					}

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedR = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedR = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_r[i] = prevCorrelatedR;

				pr = ((((xlatL2U[prevCorrelatedR] +
				((pr +
				result[i_4++]) >>> 1)) & bpc_mask)));

				//INLINING EATBITS
				available_bits = encoder.io_available_bits;
				io_word = encoder.io_word;

				delta = available_bits - codewordlen;

				io_word = io_word << codewordlen;

				//enough bits
				if (delta >= 0) {
					io_word = (io_word | encoder.io_next_word >>> delta) >>> 0;
					encoder.io_available_bits = delta;
					encoder.io_word = io_word;
				} else {
					io_next_word = encoder.io_next_word;
					//not enough bits
					delta = -delta; //bits missing
					io_word = (io_word | (io_next_word << delta) >>> 0);

					///////////////////
					//read io word (inlined for perforemance)

					io_next_word = usr[encoder.io_now++];
					//end read io_word
					/////////////////

					available_bits = 32 - delta;
					io_word = (io_word | (io_next_word >>> available_bits)) >>> 0;

					encoder.io_available_bits = available_bits;
					encoder.io_word = io_word;
					encoder.io_next_word = io_next_word;
				}
				//END INLINING

				//g
				//				ret = golomb_decoding(buckets_ptrs_g[prevCorrelatedG].bestcode, encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				//				prevCorrelatedG = ret[0];
				//				codewordlen = ret[1];

				l = buckets_ptrs_g[prevCorrelatedG].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					//zeroprefix = cnt_l_zeroes(bits);

					if (bits > 0x007FFFFF) {
						zeroprefix = lzeroes[bits >>> 24];
					} else if (bits > 0x00007FFF) {
						zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					} else if (bits > 0x0000007F) {
						zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff)];
					} else {
						zeroprefix = lzeroes24[(bits & 0x000000ff)];
					}

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedG = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedG = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_g[i] = prevCorrelatedG;

				pg = ((((xlatL2U[prevCorrelatedG] +
				((pg +
				result[i_4++]) >>> 1)) & bpc_mask)));

				//INLINING EATBITS
				available_bits = encoder.io_available_bits;
				io_word = encoder.io_word;

				delta = available_bits - codewordlen;

				io_word = io_word << codewordlen;

				//enough bits
				if (delta >= 0) {
					io_word = (io_word | encoder.io_next_word >>> delta) >>> 0;
					encoder.io_available_bits = delta;
					encoder.io_word = io_word;
				} else {
					io_next_word = encoder.io_next_word;
					//not enough bits
					delta = -delta; //bits missing
					io_word = (io_word | (io_next_word << delta) >>> 0);

					///////////////////
					//read io word (inlined for perforemance)

					io_next_word = usr[encoder.io_now++];
					//end read io_word
					/////////////////

					available_bits = 32 - delta;
					io_word = (io_word | (io_next_word >>> available_bits)) >>> 0;

					encoder.io_available_bits = available_bits;
					encoder.io_word = io_word;
					encoder.io_next_word = io_next_word;
				}
				//END INLINING

				//b
				//				ret = golomb_decoding(buckets_ptrs_b[prevCorrelatedB].bestcode, encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				//				prevCorrelatedB = ret[0];
				//				codewordlen = ret[1];
				//

				l = buckets_ptrs_b[prevCorrelatedB].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					//zeroprefix = cnt_l_zeroes(bits);

					if (bits > 0x007FFFFF) {
						zeroprefix = lzeroes[bits >>> 24];
					} else if (bits > 0x00007FFF) {
						zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					} else if (bits > 0x0000007F) {
						zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff)];
					} else {
						zeroprefix = lzeroes24[(bits & 0x000000ff)];
					}

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedB = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedB = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}
				correlate_row_b[i] = prevCorrelatedB;

				pb = ((((xlatL2U[prevCorrelatedB] +
				((pb +
				result[i_4++]) >>> 1)) & bpc_mask)));

				//INLINING EATBITS
				available_bits = encoder.io_available_bits;
				io_word = encoder.io_word;

				delta = available_bits - codewordlen;

				io_word = io_word << codewordlen;

				//enough bits
				if (delta >= 0) {
					io_word = (io_word | encoder.io_next_word >>> delta) >>> 0;
					encoder.io_available_bits = delta;
					encoder.io_word = io_word;
				} else {
					io_next_word = encoder.io_next_word;
					//not enough bits
					delta = -delta; //bits missing
					io_word = (io_word | (io_next_word << delta) >>> 0);

					///////////////////
					//read io word (inlined for perforemance)

					io_next_word = usr[encoder.io_now++];
					//end read io_word
					/////////////////

					available_bits = 32 - delta;
					io_word = (io_word | (io_next_word >>> available_bits)) >>> 0;

					encoder.io_available_bits = available_bits;
					encoder.io_word = io_word;
					encoder.io_next_word = io_next_word;
				}
				//END INLINING
				///////////////////// END INLINING

				/**
				 pr = UNCOMPRESS_ONE(channel_r, i, i_1, i_4, bpc_mask, encoder, correlate_row_r, offset, result, 0, xlatL2U, buckets_ptrs_r, pr);
				 pg = UNCOMPRESS_ONE(channel_g, i, i_1, i_4, bpc_mask, encoder, correlate_row_g, offset, result, 1, xlatL2U, buckets_ptrs_g, pg);
				 pb = UNCOMPRESS_ONE(channel_b, i, i_1, i_4, bpc_mask, encoder, correlate_row_b, offset, result, 2, xlatL2U, buckets_ptrs_b, pb);
				 **/

					//this is inlined apendPixel
				resultData[pxCnt++] =
					(255 << 24) | // alpha
					(pb << 16) | // blue
					(pg << 8) | // green
					pr; // red
				//cnt += 4;
				i_4++;
			}
			if (!rle) {
				rgb_state.waitcnt = stopidx - end;
				encoder.cnt = pxCnt * 4;
				encoder.pxCnt = pxCnt;
				return;
			}
		}

		///END of critical part

		//RLE
		rgb_state.waitcnt = stopidx - i;
		run_index = i;
		run_end = decode_run(encoder);

		i = run_end + i;
		while (run_end-- > 0) {
			//this is inlined appendPixel
			resultData[pxCnt++] =
				computedAlpha | // alpha
				pb << 16 | // blue
				pg << 8 | // green
				pr; // red
			//cnt += 4;
		}


		if (i === end) {
			encoder.cnt = pxCnt * 4;
			encoder.pxCnt = pxCnt;
			return;
		}

		i_1 = i - 1;
		prevCorrelatedR = correlate_row_r[i_1];
		prevCorrelatedG = correlate_row_g[i_1];
		prevCorrelatedB = correlate_row_b[i_1];

		stopidx = i + rgb_state.waitcnt;
		rle = false;
		//END RLE
	}
}

function uncompress_row_seg_a(encoder, i, end, bpc, bpc_mask, type, rgb_state) {
	var channel_r = encoder.channels[0];
	var channel_g = encoder.channels[1];
	var channel_b = encoder.channels[2];

	var buckets_ptrs_r = channel_r._buckets_ptrs;
	var buckets_ptrs_g = channel_g._buckets_ptrs;
	var buckets_ptrs_b = channel_b._buckets_ptrs;

	var correlate_row_r = channel_r.correlate_row;
	var correlate_row_g = channel_g.correlate_row;
	var correlate_row_b = channel_b.correlate_row;

	var stopidx = 0;

	var waitmask = wdi.JSQuic.bppmask[rgb_state.wmidx];

	var run_index = 0;
	var run_end = 0;

	var rle = false;

	var computedWidth = encoder.computedWidth;

	var offset = ((encoder.rows_completed - 1) * computedWidth);
	var currentOffset = ((encoder.rows_completed) * computedWidth);

	var offset32 = ((encoder.rows_completed - 1) * computedWidth / 4);
	var currentOffset32 = ((encoder.rows_completed) * computedWidth / 4);

	var result = encoder.result;
	var resultData = encoder.resultData;

	var i_1, i_4; //for performance improvments

	var xlatL2U = wdi.xlatL2U;

	var pr, pg, pb;

	var prevCorrelatedR, prevCorrelatedG, prevCorrelatedB;

	var eatbits = encoder.eatbits;
	var tabrand = wdi.JSQuic.tabrand;
	var decode_run = wdi.JSQuic.decode_run;

	var ret, codewordlen, l, bits, zeroprefix;
	var lzeroes = wdi.JSQuic.lzeroes;
	var lzeroes8 = wdi.JSQuic.lzeroes8;
	var lzeroes16 = wdi.JSQuic.lzeroes16;
	var lzeroes24 = wdi.JSQuic.lzeroes24;

	var cnt = encoder.cnt;
	var pxCnt = encoder.pxCnt;

	var bppmask = wdi.JSQuic.bppmask;

	var notGRprefixmask = wdi.notGRprefixmask;
	var notGRcwlen = wdi.notGRcwlen;
	var nGRcodewords = wdi.nGRcodewords;
	var notGRsuffixlen = wdi.notGRsuffixlen;

	var prev_row, i4sub, ci;

	var computedAlpha = 255 << 24;

	if (!i) {
		pr = UNCOMPRESS_ONE_0(channel_r, encoder, bpc_mask, offset);
		pg = UNCOMPRESS_ONE_0(channel_g, encoder, bpc_mask, offset);
		pb = UNCOMPRESS_ONE_0(channel_b, encoder, bpc_mask, offset);

		prevCorrelatedR = correlate_row_r[0];
		prevCorrelatedG = correlate_row_g[0];
		prevCorrelatedB = correlate_row_b[0];
		//inlined appendPixel
		resultData[pxCnt++] =
			(255 << 24) | // alpha
			(pb << 16) | // blue
			(pg << 8) | // green
			pr; // red
		//cnt += 4;

		if (rgb_state.waitcnt) {
			--rgb_state.waitcnt;
		} else {
			rgb_state.waitcnt = (tabrand.call(wdi.JSQuic, rgb_state) & waitmask);
			UPDATE_MODEL(0, encoder, bpc, correlate_row_r, correlate_row_g, correlate_row_b);
		}
		stopidx = ++i + rgb_state.waitcnt;
	} else {
		stopidx = i + rgb_state.waitcnt;
		pr = result[cnt - 4];
		pg = result[cnt - 3];
		pb = result[cnt - 2];

		prevCorrelatedR = correlate_row_r[i - 1];
		prevCorrelatedG = correlate_row_g[i - 1];
		prevCorrelatedB = correlate_row_b[i - 1];
	}


	while (true) {
		while (stopidx < end) {
			i_4 = offset + i * 4;
			for (; i <= stopidx; i++) {
				/////// critical part
				rle = RLE_PRED_RGB_A(i, encoder, i_4, currentOffset, run_index);
				//RLE_PRED INLINE
				/*if(run_index !== i && i > 2) {
				 //inlined same_pixel, see original rle_pred
				 i4sub = i_4/4;
				 if(encoder.resultData[i4sub-1] === encoder.resultData[i4sub]) { //fila de arriba
				 var prev_row = currentOffset32 + i-1;
				 if(encoder.resultData[prev_row-1] === encoder.resultData[prev_row]) { //pixel de la izquierda
				 rle = true;
				 }
				 }
				 }*/
				//END INLINE
				if (rle) break;


				/////////////////////// INLINING UNCOMPRESS_ONE
				//r
				/////////////////////// INLINING GOLOMB_DECODING
				//ret = golomb_decoding(buckets_ptrs_r[prevCorrelatedR].bestcode,
				//	encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				l = buckets_ptrs_r[prevCorrelatedR].bestcode;
				bits = encoder.io_word;
				if (bits > notGRprefixmask[l]) {
					zeroprefix = cnt_l_zeroes(bits);
					/*
					 if (bits > 0x007FFFFF) {
					 zeroprefix = lzeroes[bits >>> 24];
					 } else if (bits > 0x00007FFF) {
					 zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					 } else if (bits > 0x0000007F) {
					 zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff) ];
					 } else {
					 zeroprefix = lzeroes24[(bits & 0x000000ff) ];
					 }*/

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedR = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedR = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_r[i] = prevCorrelatedR;

				pr = ((((xlatL2U[prevCorrelatedR] +
				((pr +
				result[i_4++]) >>> 1)) & bpc_mask)));

				eatbits(codewordlen, encoder);

				//g
				///////////////////////////////////////INLINING golomb_decoding

				//ret = golomb_decoding(buckets_ptrs_g[prevCorrelatedG].bestcode,
				//	encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				l = buckets_ptrs_g[prevCorrelatedG].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					zeroprefix = cnt_l_zeroes(bits);
					/*
					 if (bits > 0x007FFFFF) {
					 zeroprefix = lzeroes[bits >>> 24];
					 } else if (bits > 0x00007FFF) {
					 zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					 } else if (bits > 0x0000007F) {
					 zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff) ];
					 } else {
					 zeroprefix = lzeroes24[(bits & 0x000000ff) ];
					 }*/

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedG = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedG = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_g[i] = prevCorrelatedG;

				pg = ((((xlatL2U[prevCorrelatedG] +
				((pg +
				result[i_4++]) >>> 1)) & bpc_mask)));

				eatbits(codewordlen, encoder);

				//b
				////////////////////////////////// INLINING golomb_decoding
				//ret = golomb_decoding(buckets_ptrs_b[prevCorrelatedB].bestcode,
				//	encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				l = buckets_ptrs_b[prevCorrelatedB].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					zeroprefix = cnt_l_zeroes(bits);
					/*
					 if (bits > 0x007FFFFF) {
					 zeroprefix = lzeroes[bits >>> 24];
					 } else if (bits > 0x00007FFF) {
					 zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					 } else if (bits > 0x0000007F) {
					 zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff) ];
					 } else {
					 zeroprefix = lzeroes24[(bits & 0x000000ff) ];
					 }*/

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedB = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedB = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}


				correlate_row_b[i] = prevCorrelatedB;

				pb = ((((xlatL2U[prevCorrelatedB] +
				((pb +
				result[i_4++]) >>> 1)) & bpc_mask)));

				eatbits(codewordlen, encoder);
				////////////////////// END INLINING

				/**
				 pr = UNCOMPRESS_ONE(channel_r, i, i_1, i_4, bpc_mask, encoder, correlate_row_r, offset, result, 0, xlatL2U, buckets_ptrs_r, pr);
				 pg = UNCOMPRESS_ONE(channel_g, i, i_1, i_4, bpc_mask, encoder, correlate_row_g, offset, result, 1, xlatL2U, buckets_ptrs_g, pg);
				 pb = UNCOMPRESS_ONE(channel_b, i, i_1, i_4, bpc_mask, encoder, correlate_row_b, offset, result, 2, xlatL2U, buckets_ptrs_b, pb);
				 **/


					//this is inlined appendPixel
				resultData[pxCnt++] =
					computedAlpha | // alpha
					pb << 16 | // blue
					pg << 8 | // green
					pr; // red
				//cnt += 4;
				i_4++; //skip alpha
			}
			if (!rle) {
				UPDATE_MODEL(stopidx, encoder, bpc, correlate_row_r, correlate_row_g, correlate_row_b);
				stopidx = i + (tabrand.call(wdi.JSQuic, rgb_state) & waitmask);
			} else {
				break;
			}
		}

		if (!rle) {
			i_4 = offset + i * 4;
			for (; i < end; i++) {
				rle = RLE_PRED_RGB_A(i, encoder, i_4, currentOffset, run_index);
				//RLE_PRED INLINE
				/*if(run_index !== i && i > 2) {
				 //inlined same_pixel, see original rle_pred
				 i4sub = i_4/4;
				 if(encoder.resultData[i4sub-1] === encoder.resultData[i4sub]) { //fila de arriba
				 var prev_row = currentOffset32 + i-1;
				 if(encoder.resultData[prev_row-1] === encoder.resultData[prev_row]) { //pixel de la izquierda
				 rle = true;
				 }
				 }
				 }
				 //END INLINE*/
				if (rle) break;


				////////////////////// INLINING UNCOMPRESS_ONE
				//r
				//ret = golomb_decoding(buckets_ptrs_r[prevCorrelatedR].bestcode, encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				//prevCorrelatedR = ret[0];
				//codewordlen = ret[1];
				l = buckets_ptrs_r[prevCorrelatedR].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					zeroprefix = cnt_l_zeroes(bits);
					/*
					 if (bits > 0x007FFFFF) {
					 zeroprefix = lzeroes[bits >>> 24];
					 } else if (bits > 0x00007FFF) {
					 zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					 } else if (bits > 0x0000007F) {
					 zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff) ];
					 } else {
					 zeroprefix = lzeroes24[(bits & 0x000000ff) ];
					 }*/

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedR = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedR = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_r[i] = prevCorrelatedR;

				pr = ((((xlatL2U[prevCorrelatedR] +
				((pr +
				result[i_4++]) >>> 1)) & bpc_mask)));

				eatbits(codewordlen, encoder);

				//g
				//				ret = golomb_decoding(buckets_ptrs_g[prevCorrelatedG].bestcode, encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				//				prevCorrelatedG = ret[0];
				//				codewordlen = ret[1];

				l = buckets_ptrs_g[prevCorrelatedG].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					zeroprefix = cnt_l_zeroes(bits);
					/*
					 if (bits > 0x007FFFFF) {
					 zeroprefix = lzeroes[bits >>> 24];
					 } else if (bits > 0x00007FFF) {
					 zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					 } else if (bits > 0x0000007F) {
					 zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff) ];
					 } else {
					 zeroprefix = lzeroes24[(bits & 0x000000ff) ];
					 }*/

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedG = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedG = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}

				correlate_row_g[i] = prevCorrelatedG;

				pg = ((((xlatL2U[prevCorrelatedG] +
				((pg +
				result[i_4++]) >>> 1)) & bpc_mask)));

				eatbits(codewordlen, encoder);

				//b
				//				ret = golomb_decoding(buckets_ptrs_b[prevCorrelatedB].bestcode, encoder.io_word, bppmask, notGRprefixmask, notGRcwlen, nGRcodewords, notGRsuffixlen);
				//				prevCorrelatedB = ret[0];
				//				codewordlen = ret[1];
				//

				l = buckets_ptrs_b[prevCorrelatedB].bestcode;
				bits = encoder.io_word;

				if (bits > notGRprefixmask[l]) {
					zeroprefix = cnt_l_zeroes(bits);
					/*
					 if (bits > 0x007FFFFF) {
					 zeroprefix = lzeroes[bits >>> 24];
					 } else if (bits > 0x00007FFF) {
					 zeroprefix = lzeroes8[((bits >>> 16) & 0x000000ff)];
					 } else if (bits > 0x0000007F) {
					 zeroprefix = lzeroes16[((bits >>> 8) & 0x000000ff) ];
					 } else {
					 zeroprefix = lzeroes24[(bits & 0x000000ff) ];
					 }*/

					codewordlen = zeroprefix + 1 + l;
					prevCorrelatedB = ((zeroprefix << l)) | ((bits >>> (32 - codewordlen)) & bppmask[l]);
				} else {
					codewordlen = notGRcwlen[l];
					prevCorrelatedB = nGRcodewords[l] + ((bits) >>> (32 - codewordlen) & bppmask[notGRsuffixlen[l]]);
				}
				correlate_row_b[i] = prevCorrelatedB;

				pb = ((((xlatL2U[prevCorrelatedB] +
				((pb +
				result[i_4++]) >>> 1)) & bpc_mask)));

				eatbits(codewordlen, encoder);
				///////////////////// END INLINING

				/**
				 pr = UNCOMPRESS_ONE(channel_r, i, i_1, i_4, bpc_mask, encoder, correlate_row_r, offset, result, 0, xlatL2U, buckets_ptrs_r, pr);
				 pg = UNCOMPRESS_ONE(channel_g, i, i_1, i_4, bpc_mask, encoder, correlate_row_g, offset, result, 1, xlatL2U, buckets_ptrs_g, pg);
				 pb = UNCOMPRESS_ONE(channel_b, i, i_1, i_4, bpc_mask, encoder, correlate_row_b, offset, result, 2, xlatL2U, buckets_ptrs_b, pb);
				 **/

					//this is inlined apendPixel
				resultData[pxCnt++] =
					(255 << 24) | // alpha
					(pb << 16) | // blue
					(pg << 8) | // green
					pr; // red
				//cnt += 4;
				i_4++;
			}
			if (!rle) {
				rgb_state.waitcnt = stopidx - end;
				encoder.cnt = pxCnt * 4;
				encoder.pxCnt = pxCnt;
				return;
			}
		}

		///END of critical part

		//RLE
		rgb_state.waitcnt = stopidx - i;
		run_index = i;
		run_end = decode_run(encoder);

		i = run_end + i;
		while (run_end-- > 0) {
			//this is inlined appendPixel
			resultData[pxCnt++] =
				computedAlpha | // alpha
				pb << 16 | // blue
				pg << 8 | // green
				pr; // red
			//cnt += 4;
		}


		if (i === end) {
			encoder.cnt = pxCnt * 4;
			encoder.pxCnt = pxCnt;
			return;
		}

		i_1 = i - 1;
		prevCorrelatedR = correlate_row_r[i_1];
		prevCorrelatedG = correlate_row_g[i_1];
		prevCorrelatedB = correlate_row_b[i_1];

		stopidx = i + rgb_state.waitcnt;
		rle = false;
		//END RLE
	}
}


function quic_uncompress_row0(encoder, channels, bpc, type) {
	var bpc_mask = wdi.JSQuic.BPC_MASK[type];
	var pos = 0;
	var width = encoder.width;
	while ((wdi.JSQuic.wmimax > encoder.rgb_state.wmidx) && (encoder.rgb_state.wmileft <= width)) {
		if (encoder.rgb_state.wmileft) {
			uncompress_row0_seg(
				encoder,
				pos,
				pos + encoder.rgb_state.wmileft,
				wdi.JSQuic.bppmask[encoder.rgb_state.wmidx],
				bpc,
				bpc_mask,
				type
			);
			pos += encoder.rgb_state.wmileft;
			width -= encoder.rgb_state.wmileft;
		}

		encoder.rgb_state.wmidx++;
		wdi.JSQuic.set_wm_trigger(encoder.rgb_state);
		encoder.rgb_state.wmileft = wdi.JSQuic.wminext;
	}

	if (width) {
		uncompress_row0_seg(
			encoder,
			pos,
			pos + width,
			wdi.JSQuic.bppmask[encoder.rgb_state.wmidx],
			bpc,
			bpc_mask,
			type
		);
		if (wdi.JSQuic.wmimax > encoder.rgb_state.wmidx) {
			encoder.rgb_state.wmileft -= width;
		}
	}
}

function uncompress_row0_seg(encoder, i, end, waitmask, bpc, bpc_mask, type) {
	var channel_r = encoder.channels[0];
	var channel_g = encoder.channels[1];
	var channel_b = encoder.channels[2];

	var correlate_row_r = channel_r.correlate_row;
	var correlate_row_g = channel_g.correlate_row;
	var correlate_row_b = channel_b.correlate_row;

	var stopidx = 0;

	var pr, pg, pb;

	if (!i) {
		pr = UNCOMPRESS_ONE_ROW0_0(channel_r);
		pg = UNCOMPRESS_ONE_ROW0_0(channel_g);
		pb = UNCOMPRESS_ONE_ROW0_0(channel_b);

		encoder.appendPixel(pr, pg, pb);

		if (encoder.rgb_state.waitcnt) {
			--encoder.rgb_state.waitcnt;
		} else {
			encoder.rgb_state.waitcnt = (wdi.JSQuic.tabrand(encoder.rgb_state) & waitmask);
			UPDATE_MODEL(0, encoder, bpc, correlate_row_r, correlate_row_g, correlate_row_b);
		}
		stopidx = ++i + encoder.rgb_state.waitcnt;
	} else {
		stopidx = i + encoder.rgb_state.waitcnt;
	}

	while (stopidx < end) {
		for (; i <= stopidx; i++) {
			pr = UNCOMPRESS_ONE_ROW0(channel_r, i, bpc_mask, encoder, correlate_row_r, pr);
			pg = UNCOMPRESS_ONE_ROW0(channel_g, i, bpc_mask, encoder, correlate_row_g, pg);
			pb = UNCOMPRESS_ONE_ROW0(channel_b, i, bpc_mask, encoder, correlate_row_b, pb);

			encoder.appendPixel(pr, pg, pb);
		}
		UPDATE_MODEL(stopidx, encoder, bpc, correlate_row_r, correlate_row_g, correlate_row_b);
		stopidx = i + (wdi.JSQuic.tabrand(encoder.rgb_state) & waitmask);
	}

	for (; i < end; i++) {
		pr = UNCOMPRESS_ONE_ROW0(channel_r, i, bpc_mask, encoder, correlate_row_r, pr);
		pg = UNCOMPRESS_ONE_ROW0(channel_g, i, bpc_mask, encoder, correlate_row_g, pg);
		pb = UNCOMPRESS_ONE_ROW0(channel_b, i, bpc_mask, encoder, correlate_row_b, pb);
		encoder.appendPixel(pr, pg, pb);
	}
	encoder.rgb_state.waitcnt = stopidx - end;
}

function UNCOMPRESS_ONE_0(channel, encoder, bpc_mask, offset) {
	var ret, codewordlen;
	channel.oldFirst = channel.correlate_row[0];
	ret = golomb_decoding(find_bucket(channel,
		channel.correlate_row[0]).bestcode, encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);
	channel.correlate_row[0] = ret[0];
	codewordlen = ret[1];
	var residuum = wdi.xlatL2U[channel.correlate_row[0]];
	var prev = encoder.result[offset + channel.num_channel]; //PIXEL_B
	var resultpixel = ((residuum + prev) & bpc_mask);
	encoder.eatbits(codewordlen, encoder);
	return resultpixel;
}

function UNCOMPRESS_ONE(channel, i, i_1, i_4, bpc_mask, encoder, correlate_row, offset, result, num_channel, xlatL2U, buckets_ptrs, prev_pixel) {
	var ret, codewordlen;
	ret = golomb_decoding(buckets_ptrs[correlate_row[i_1]].bestcode, encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);

	var data = ret[0];
	codewordlen = ret[1];
	correlate_row[i] = data;

	var ret = ((((xlatL2U[data] +
	((prev_pixel +
	result[offset + (i_4) + num_channel]) >>> 1)) & bpc_mask)));

	encoder.eatbits(codewordlen, encoder);
	return ret;
}


function UNCOMPRESS_ONE_ROW0_0(channel) {
	var ret, codewordlen;
	var encoder = channel.encoder;
	ret = golomb_decoding(find_bucket(channel, 0).bestcode, encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);
	channel.correlate_row[0] = ret[0]
	codewordlen = ret[1];
	var ret = wdi.xlatL2U[channel.correlate_row[0]];
	encoder.eatbits(codewordlen, encoder);
	return ret;
}

function UNCOMPRESS_ONE_ROW0(channel, i, bpc_mask, encoder, correlate_row, prev_pixel) {
	var ret, codewordlen;
	ret = golomb_decoding(find_bucket(channel, correlate_row[i - 1]).bestcode, encoder.io_word, wdi.JSQuic.bppmask, wdi.notGRprefixmask, wdi.notGRcwlen, wdi.nGRcodewords, wdi.notGRsuffixlen);
	correlate_row[i] = ret[0];
	codewordlen = ret[1];
	var ret = CORELATE_0(encoder, channel, i, bpc_mask, correlate_row, prev_pixel);
	encoder.eatbits(codewordlen, encoder);
	return ret;
}

function CORELATE_0(encoder, channel, curr, bpc_mask, correlate_row, prev_pixel) {
	return ((wdi.xlatL2U[correlate_row[curr]] + prev_pixel) & bpc_mask);
}

function PIXEL_A(encoder) {
	return encoder.result[encoder.cnt - 4];
}

function PIXEL_B(channel, encoder, pos, offset) {
	return encoder.result[offset + (pos * 4) + channel.num_channel];
}

///////////////////////////////////////////////////////////////////
//LZ

var lzDecompress = {
	LZ_IMAGE_TYPE_INVALID: 0,
	LZ_IMAGE_TYPE_PLT1_LE: 1,
	LZ_IMAGE_TYPE_PLT1_BE: 2,
	LZ_IMAGE_TYPE_PLT4_LE: 3,
	LZ_IMAGE_TYPE_PLT4_BE: 4,
	LZ_IMAGE_TYPE_PLT8: 5,
	LZ_IMAGE_TYPE_RGB16: 6,
	LZ_IMAGE_TYPE_RGB24: 7,
	LZ_IMAGE_TYPE_RGB32: 8,
	LZ_IMAGE_TYPE_RGBA: 9,
	LZ_IMAGE_TYPE_XXXA: 10,
	LZPALETTE_FLAG_PAL_CACHE_ME: 1,
	LZPALETTE_FLAG_PAL_FROM_CACHE: 2,
	LZPALETTE_FLAG_TOP_DOWN: 4,
	PLT_PIXELS_PER_BYTE: [0, 8, 8, 2, 2, 1],
	PLT1_MASK: [1, 2, 4, 8, 16, 32, 64, 128],

	lz_rgb32_decompress_rgb_opaque_reverse: function(arr) {
		//TODO: global alpha and uncouple code

		var in_buf = new Uint8Array(arr);

		var type = in_buf[2];
		var low = in_buf[5] * 256 + in_buf[4]; // 256 = Math.pow(16, 2)
		var high = in_buf[7] * 256 + in_buf[6]; // 256 = Math.pow(16, 2)
		var len = high * 65536 + low; // 65536 = Math.pow(16,4)
		var buf = new ArrayBuffer(len);
		var data = new Uint32Array(buf);
		var view = new DataView(arr);
		var width = view.getUint32(8);
		var height = view.getUint32(12);
		var out_buf_len = len / 4 -1;
		var op = out_buf_len;
		var code, ref, ofs, b;
		var aux;
		var ctrl = in_buf[16];
		var encoder = 16; //padding

		while (op >= 0) {

			ctrl = in_buf[encoder++];
			//if ctrl is 0, there is no way for len to be > 0
			if (ctrl != 0 && (len = ctrl >> 5)!=0) { //>=32
				ref = op; //there is a reference to past bytes, the reference will be
				//provided as an offset to our position
				ofs = (ctrl & 31) << 8; //get the last 5 bits from ctrl

				if (len == 7) {
					do {
						code = in_buf[encoder++];
						len += code;
					} while (code == 255);
				}

				ofs += in_buf[encoder++];
				if (ofs == 0) {
					aux = data[ref+1]; //if osset is 0...it means just the prior pixel copied over and over....
					//in reverse mode, the prior pixel is just the next pixel to the right
					while(len > 9) {
						data[op] = aux;
						data[op-1] = aux;
						data[op-2] = aux;
						data[op-3] = aux;
						data[op-4] = aux;
						data[op-5] = aux;
						data[op-6] = aux;
						data[op-7] = aux;
						data[op-8] = aux;
						data[op-9] = aux;
						op-=10;
						len -= 10;
					}

					while (len-- != 0) {
						data[op--] = aux;
					}
				} else {
					if (ofs == 8191) { //check if all the bits in ofs are 1, then get two more bytes
						ofs += (in_buf[encoder] << 8) + in_buf[encoder+1];
						encoder += 2;
					}

					ref += ofs + 1;

					while(len > 9) {
						data[op] = data[ref];
						data[op-1] = data[ref-1];
						data[op-2] = data[ref-2];
						data[op-3] = data[ref-3];
						data[op-4] = data[ref-4];
						data[op-5] = data[ref-5];
						data[op-6] = data[ref-6];
						data[op-7] = data[ref-7];
						data[op-8] = data[ref-8];
						data[op-9] = data[ref-9];
						op-=10;
						len -= 10;
						ref -= 10;
					}

					while (len-- !== 0) {
						data[op--] = data[ref--];
					}
				}
			} else {
				while(ctrl > 9) {
					data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
					data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
					data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
					data[op-3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
					data[op-4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
					data[op-5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
					data[op-6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
					data[op-7] = 4278190080 | in_buf[encoder+21] << 16 | in_buf[encoder+22] << 8 | in_buf[encoder+23];
					data[op-8] = 4278190080 | in_buf[encoder+24] << 16 | in_buf[encoder+25] << 8 | in_buf[encoder+26];
					data[op-9] = 4278190080 | in_buf[encoder+27] << 16 | in_buf[encoder+28] << 8 | in_buf[encoder+29];
					encoder += 30;
					op -= 10;
					ctrl -= 10;
				}

				if(ctrl != 0) {
					if(ctrl == 9) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op-3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op-4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op-5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						data[op-6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
						data[op-7] = 4278190080 | in_buf[encoder+21] << 16 | in_buf[encoder+22] << 8 | in_buf[encoder+23];
						data[op-8] = 4278190080 | in_buf[encoder+24] << 16 | in_buf[encoder+25] << 8 | in_buf[encoder+26];
						encoder += 27;
						op -= 9;
					} else if(ctrl == 8) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op-3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op-4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op-5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						data[op-6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
						data[op-7] = 4278190080 | in_buf[encoder+21] << 16 | in_buf[encoder+22] << 8 | in_buf[encoder+23];
						encoder += 24;
						op -= 8;
					} else if(ctrl == 7) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op-3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op-4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op-5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						data[op-6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
						encoder += 21;
						op -= 7;
					} else if(ctrl == 6) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op-3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op-4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op-5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						encoder += 18;
						op -= 6;
					} else if(ctrl == 5) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op-3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op-4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						encoder += 15;
						op -= 5;
					} else if(ctrl == 4) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op-3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						encoder += 12;
						op -= 4;
					} else if(ctrl == 3) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op-2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						encoder += 9;
						op -= 3;
					} else if(ctrl == 2) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op-1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						encoder += 6;
						op -= 2;
					} else if(ctrl == 1) {
						data[op--] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						encoder += 3;
					}
				}

				data[op--] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
				encoder+=3;
			}
		}

		//reverse buf
		//while, line by line
		var left, right, line, temporary;
		var length = width-1;
		while(height--) {
			line = new Uint32Array(buf,height*width*4, width);
			left = 0;
			right = length;
			while (left < right)
			{
				var temporary = line[left];
				line[left++] = line[right];
				line[right--] = temporary;
			}
		}
		return buf;
	},

	lz_rgb32_decompress_rgb: function(arr) {
		//TODO: global alpha and uncouple code
		var op = 0;
		var in_buf = new Uint8Array(arr);

		var opaque = in_buf[1];
		var type = in_buf[2];
		var top_down = in_buf[3];
		if(opaque && !top_down) {
			return lzDecompress.lz_rgb32_decompress_rgb_opaque_reverse(arr);
		}
		var low = in_buf[5] * 256 + in_buf[4]; // 256 = Math.pow(16, 2)
		var high = in_buf[7] * 256 + in_buf[6]; // 256 = Math.pow(16, 2)
		var len = high * 65536 + low; // 65536 = Math.pow(16,4)
		var buf = new ArrayBuffer(len);
		var data = new Uint32Array(buf);
		var out_buf_len = len / 4;
		var code, ref, ofs, b;
		var op_4, aux;
		var ctrl = in_buf[16];
		var offsetView;
		var encoder = 16; //padding

		while (op != out_buf_len) {

			ctrl = in_buf[encoder++];
			//if ctrl is 0, there is no way for len to be > 0
			if (ctrl != 0 && (len = ctrl >> 5)!=0) { //>=32
				ref = op;
				ofs = (ctrl & 31) << 8; //get the last 5 bits from ctrl

				if (len == 7) {
					do {
						code = in_buf[encoder++];
						len += code;
					} while (code == 255);
				}

				ofs += in_buf[encoder++];

				if (ofs == 0) {
					aux = data[--ref];
					while(len > 9) {
						data[op] = aux;
						data[op+1] = aux;
						data[op+2] = aux;
						data[op+3] = aux;
						data[op+4] = aux;
						data[op+5] = aux;
						data[op+6] = aux;
						data[op+7] = aux;
						data[op+8] = aux;
						data[op+9] = aux;
						op+=10;
						len -= 10;
					}


					while (len-- != 0) {
						data[op++] = aux;
					}


				} else {
					if (ofs == 8191) { //check if all the bits in ofs are 1, then get two more bytes
						ofs += (in_buf[encoder] << 8) + in_buf[encoder+1];
						encoder += 2;
					}

					ref -= ofs + 1;
					//if the copy from array to array is bigger than 100 (tested using benchmark) its cheaper to
					//create a view and copy with set. If the copy is less than 100, then its cheaper
					//to just iterate it.
					if(len > 100 && ref+len < op) {
						offsetView = new Uint32Array(buf, ref*4, len);
						data.set(offsetView,op);
						op += len;
						ref += len;
					} else {
						while(len > 9) {
							data[op] = data[ref];
							data[op+1] = data[ref+1];
							data[op+2] = data[ref+2];
							data[op+3] = data[ref+3];
							data[op+4] = data[ref+4];
							data[op+5] = data[ref+5];
							data[op+6] = data[ref+6];
							data[op+7] = data[ref+7];
							data[op+8] = data[ref+8];
							data[op+9] = data[ref+9];
							op+=10;
							len -= 10;
							ref += 10;
						}

						while (len-- !== 0) {
							data[op++] = data[ref++];
						}

					}

				}
			} else {
				while(ctrl > 9) {
					data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
					data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
					data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
					data[op+3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
					data[op+4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
					data[op+5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
					data[op+6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
					data[op+7] = 4278190080 | in_buf[encoder+21] << 16 | in_buf[encoder+22] << 8 | in_buf[encoder+23];
					data[op+8] = 4278190080 | in_buf[encoder+24] << 16 | in_buf[encoder+25] << 8 | in_buf[encoder+26];
					data[op+9] = 4278190080 | in_buf[encoder+27] << 16 | in_buf[encoder+28] << 8 | in_buf[encoder+29];
					encoder += 30;
					op += 10;
					ctrl -= 10;
				}

				//if we are just out of the above loop, ctrl is 9, so do the 9 in a row
				if(ctrl != 0) {
					if(ctrl == 9) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op+3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op+4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op+5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						data[op+6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
						data[op+7] = 4278190080 | in_buf[encoder+21] << 16 | in_buf[encoder+22] << 8 | in_buf[encoder+23];
						data[op+8] = 4278190080 | in_buf[encoder+24] << 16 | in_buf[encoder+25] << 8 | in_buf[encoder+26];
						encoder += 27;
						op += 9;
					} else if(ctrl == 8) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op+3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op+4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op+5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						data[op+6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
						data[op+7] = 4278190080 | in_buf[encoder+21] << 16 | in_buf[encoder+22] << 8 | in_buf[encoder+23];
						encoder += 24;
						op += 8;
					} else if(ctrl == 7) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op+3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op+4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op+5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						data[op+6] = 4278190080 | in_buf[encoder+18] << 16 | in_buf[encoder+19] << 8 | in_buf[encoder+20];
						encoder += 21;
						op += 7;
					} else if(ctrl == 6) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op+3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op+4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						data[op+5] = 4278190080 | in_buf[encoder+15] << 16 | in_buf[encoder+16] << 8 | in_buf[encoder+17];
						encoder += 18;
						op += 6;
					} else if(ctrl == 5) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op+3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						data[op+4] = 4278190080 | in_buf[encoder+12] << 16 | in_buf[encoder+13] << 8 | in_buf[encoder+14];
						encoder += 15;
						op += 5;
					} else if(ctrl == 4) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						data[op+3] = 4278190080 | in_buf[encoder+9] << 16 | in_buf[encoder+10] << 8 | in_buf[encoder+11];
						encoder += 12;
						op += 4;
					} else if(ctrl == 3) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						data[op+2] = 4278190080 | in_buf[encoder+6] << 16 |	in_buf[encoder+7] << 8 | in_buf[encoder+8];
						encoder += 9;
						op += 3;
					} else if(ctrl == 2) {
						data[op] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						data[op+1] = 4278190080 | in_buf[encoder+3] << 16 | in_buf[encoder+4] << 8 | in_buf[encoder+5];
						encoder += 6;
						op += 2;
					} else if(ctrl == 1) {
						data[op++] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
						encoder += 3;
					}
				}

				data[op++] = 4278190080 | in_buf[encoder] << 16 | in_buf[encoder+1] << 8 | in_buf[encoder+2];
				encoder+=3;
			}
		}

		if (type === this.LZ_IMAGE_TYPE_RGBA && !opaque) {
			var buf8 = new Uint8Array(buf);

			op = 0;
			ctrl = null;
			//encoder--;
			for (ctrl = in_buf[encoder++]; op < out_buf_len; ctrl = in_buf[encoder++]) {
				ref = op;
				len = ctrl >> 5;
				ofs = ((ctrl & 31) << 8);
				op_4 = op * 4;

				if (ctrl >= 32) {

					code;
					len--;

					if (len === 7 - 1) {
						do {
							code = in_buf[encoder++];
							len += code;
						} while (code === 255);
					}
					code = in_buf[encoder++];
					ofs += code;


					if (code === 255) {
						if ((ofs - code) === (31 << 8)) {
							ofs = in_buf[encoder++] << 8;
							ofs += in_buf[encoder++];
							ofs += 8191;
						}
					}
					len += 3;

					ofs += 1;

					ref -= ofs;
					if (ref === (op - 1)) { //plt4/1 what?
						b = ref;

						for (; len; --len) {
							op_4 = op * 4;
							//COPY_PIXEL
							buf8[(op_4) + 3] = buf8[(b * 4) + 3];

							op++;
						}
					} else {

						for (; len; --len) {
							//COPY_REF_PIXEL
							op_4 = op * 4;
							buf8[(op_4) + 3] = buf8[(ref * 4) + 3];

							op++;
							ref++;
						}
					}
				} else {
					//COPY_COMP_PIXEL
					ctrl++;
					buf8[(op_4) + 3] = in_buf[encoder++];
					op++;


					for (--ctrl; ctrl; ctrl--) {
						//COPY_COMP_PIXEL
						op_4 = op * 4; // faster?
						buf8[(op_4) + 3] = in_buf[encoder++];
						op++;
					}
				}
			}
		}
		return buf;
	}
};

if (wdi.LZSS) {
	wdi.LZSS.lz_rgb32_decompress_rgb = lzDecompress.lz_rgb32_decompress_rgb
} else {
// if (!wdi.LZSS) {
	wdi.LZSS = lzDecompress;
}
