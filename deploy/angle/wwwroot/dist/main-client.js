!function(A){function n(n){for(var e,B,i=n[0],a=n[1],g=n[2],E=0,w=[];E<i.length;E++)B=i[E],t[B]&&w.push(t[B][0]),t[B]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(A[e]=a[e]);for(s&&s(n);w.length;)w.shift()();return o.push.apply(o,g||[]),r()}function r(){for(var A,n=0;n<o.length;n++){for(var r=o[n],e=!0,i=1;i<r.length;i++){var a=r[i];0!==t[a]&&(e=!1)}e&&(o.splice(n--,1),A=B(B.s=r[0]))}return A}var e={},t={2:0},o=[];function B(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return A[n].call(r.exports,r,r.exports,B),r.l=!0,r.exports}B.e=function(A){var n=[],r=t[A];if(0!==r)if(r)n.push(r[2]);else{var e=new Promise(function(n,e){r=t[A]=[n,e]});n.push(r[2]=e);var o,i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,B.nc&&a.setAttribute("nonce",B.nc),a.src=function(A){return B.p+""+({}[A]||A)+".js"}(A),o=function(n){a.onerror=a.onload=null,clearTimeout(g);var r=t[A];if(0!==r){if(r){var e=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,B=new Error("Loading chunk "+A+" failed.\n("+e+": "+o+")");B.type=e,B.request=o,r[1](B)}t[A]=void 0}};var g=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,i.appendChild(a)}return Promise.all(n)},B.m=A,B.c=e,B.d=function(A,n,r){B.o(A,n)||Object.defineProperty(A,n,{enumerable:!0,get:r})},B.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},B.t=function(A,n){if(1&n&&(A=B(A)),8&n)return A;if(4&n&&"object"==typeof A&&A&&A.__esModule)return A;var r=Object.create(null);if(B.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:A}),2&n&&"string"!=typeof A)for(var e in A)B.d(r,e,function(n){return A[n]}.bind(null,e));return r},B.n=function(A){var n=A&&A.__esModule?function(){return A.default}:function(){return A};return B.d(n,"a",n),n},B.o=function(A,n){return Object.prototype.hasOwnProperty.call(A,n)},B.p="/dist/",B.oe=function(A){throw console.error(A),A};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var g=0;g<i.length;g++)n(i[g]);var s=a;o.push([1094,0]),r()}({1094:function(A,n,r){"use strict";
/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */Object.defineProperty(n,"__esModule",{value:!0});var e=r(0);r(1095);var t=r(1096),o=r(52);e.enableProdMode(),o.platformBrowser().bootstrapModuleFactory(t.AppModuleNgFactory).then(function(){window.appBootstrap&&window.appBootstrap()})},1095:function(A,n){!function(A,n,r){var e=[],t={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,n){var r=this;setTimeout(function(){n(r[A])},0)},addTest:function(A,n,r){e.push({name:A,fn:n,options:r})},addAsyncTest:function(A){e.push({name:null,fn:A})}},o=function(){};o.prototype=t,o=new o;var B=[];function i(A,n){return typeof A===n}var a=n.documentElement,g="svg"===a.nodeName.toLowerCase();function s(A){var n=a.className,r=o._config.classPrefix||"";if(g&&(n=n.baseVal),o._config.enableJSClass){var e=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");n=n.replace(e,"$1"+r+"js$2")}o._config.enableClasses&&(n+=" "+r+A.join(" "+r),g?a.className.baseVal=n:a.className=n)}function E(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):g?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}
/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
o.addTest("bgpositionshorthand",function(){var A=E("a").style,n="right 10px bottom 10px";return A.cssText="background-position: "+n+";",A.backgroundPosition===n});var w=t._config.usePrefixes?"Moz O ms Webkit".split(" "):[];function l(A,n){return!!~(""+A).indexOf(n)}t._cssomPrefixes=w;var Q={elem:E("modernizr")};o._q.push(function(){delete Q.elem});var c={style:Q.elem.style};function I(A,r,e,t){var o,B,i,s,w="modernizr",l=E("div"),Q=function(){var A=n.body;return A||((A=E(g?"svg":"body")).fake=!0),A}();if(parseInt(e,10))for(;e--;)(i=E("div")).id=t?t[e]:w+(e+1),l.appendChild(i);return(o=E("style")).type="text/css",o.id="s"+w,(Q.fake?Q:l).appendChild(o),Q.appendChild(l),o.styleSheet?o.styleSheet.cssText=A:o.appendChild(n.createTextNode(A)),l.id=w,Q.fake&&(Q.style.background="",Q.style.overflow="hidden",s=a.style.overflow,a.style.overflow="hidden",a.appendChild(Q)),B=r(l,A),Q.fake?(Q.parentNode.removeChild(Q),a.style.overflow=s,a.offsetHeight):l.parentNode.removeChild(l),!!B}function d(A){return A.replace(/([A-Z])/g,function(A,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function M(n,e){var t=n.length;if("CSS"in A&&"supports"in A.CSS){for(;t--;)if(A.CSS.supports(d(n[t]),e))return!0;return!1}if("CSSSupportsRule"in A){for(var o=[];t--;)o.push("("+d(n[t])+":"+e+")");return I("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",function(n){return"absolute"==function(n,r,e){var t;if("getComputedStyle"in A){t=getComputedStyle.call(A,n,r);var o=A.console;null!==t?e&&(t=t.getPropertyValue(e)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else t=!r&&n.currentStyle&&n.currentStyle[e];return t}(n,null,"position")})}return r}function m(A){return A.replace(/([a-z])-([a-z])/g,function(A,n,r){return n+r.toUpperCase()}).replace(/^-/,"")}o._q.unshift(function(){delete c.style});var C=t._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];function F(A,n){return function(){return A.apply(n,arguments)}}function b(A,n,e,t,o){var B=A.charAt(0).toUpperCase()+A.slice(1),a=(A+" "+w.join(B+" ")+B).split(" ");return i(n,"string")||i(n,"undefined")?function(A,n,e,t){if(t=!i(t,"undefined")&&t,!i(e,"undefined")){var o=M(A,e);if(!i(o,"undefined"))return o}for(var B,a,g,s,w,Q=["modernizr","tspan","samp"];!c.style&&Q.length;)B=!0,c.modElem=E(Q.shift()),c.style=c.modElem.style;function I(){B&&(delete c.style,delete c.modElem)}for(g=A.length,a=0;a<g;a++)if(s=A[a],w=c.style[s],l(s,"-")&&(s=m(s)),c.style[s]!==r){if(t||i(e,"undefined"))return I(),"pfx"!=n||s;try{c.style[s]=e}catch(A){}if(c.style[s]!=w)return I(),"pfx"!=n||s}return I(),!1}(a,n,t,o):function(A,n,r){var e;for(var t in A)if(A[t]in n)return!1===r?A[t]:i(e=n[A[t]],"function")?F(e,r||n):e;return!1}(a=(A+" "+C.join(B+" ")+B).split(" "),n,e)}function Y(A,n,e){return b(A,r,r,n,e)}t._domPrefixes=C,t.testAllProps=b,t.testAllProps=Y,
/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "https://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
o.addTest("bgpositionxy",function(){return Y("backgroundPositionX","3px",!0)&&Y("backgroundPositionY","5px",!0)}),
/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "https://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
o.addTest("bgrepeatround",Y("backgroundRepeat","round")),o.addTest("bgrepeatspace",Y("backgroundRepeat","space")),
/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/
o.addTest("bgsizecover",Y("backgroundSize","cover")),
/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/
o.addTest("borderradius",Y("borderRadius","0px",!0)),
/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
o.addTest("cssanimations",Y("animationName","a",!0));var f=t._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];t._prefixes=f,
/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
o.addTest("csscalc",function(){var A=E("a");return A.style.cssText="width:"+f.join("calc(10px);width:"),!!A.style.length}),
/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/
o.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&Y("transform","scale(1)",!0)});
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/
var h="CSS"in A&&"supports"in A.CSS,D="supportsCSS"in A;o.addTest("supports",h||D),
/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/
o.addTest("csstransforms3d",function(){return!!Y("perspective","1px",!0)}),
/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["denyskoch", "aFarkas"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/1748"
  }]
}
!*/
o.addTest("preserve3d",function(){var n,r,e=A.CSS,t=!1;return!!(e&&e.supports&&e.supports("(transform-style: preserve-3d)"))||(n=E("a"),r=E("a"),n.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",r.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",n.appendChild(r),a.appendChild(n),t=r.getBoundingClientRect(),a.removeChild(n),t=t.width&&t.width<4)}),
/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/
o.addTest("csstransitions",Y("transition","all",!0)),
/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/
o.addTest("flexboxtweener",Y("flexAlign","end",!0));var N,u=t.testStyles=I;
/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/function R(A,n){if("object"==typeof A)for(var r in A)N(A,r)&&R(r,A[r]);else{var e=(A=A.toLowerCase()).split("."),t=o[e[0]];if(2==e.length&&(t=t[e[1]]),void 0!==t)return o;n="function"==typeof n?n():n,1==e.length?o[e[0]]=n:(!o[e[0]]||o[e[0]]instanceof Boolean||(o[e[0]]=new Boolean(o[e[0]])),o[e[0]][e[1]]=n),s([(n&&0!=n?"":"no-")+e.join("-")]),o._trigger(A,n)}return o}(function(){var A=navigator.userAgent,n=A.match(/w(eb)?osbrowser/gi),r=A.match(/windows phone/gi)&&A.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return n||r})()?o.addTest("fontface",!1):u('@font-face {font-family:"font";src:url("https://")}',function(A,r){var e=n.getElementById("smodernizr"),t=e.sheet||e.styleSheet,B=t?t.cssRules&&t.cssRules[0]?t.cssRules[0].cssText:t.cssText||"":"",i=/src/i.test(B)&&0===B.indexOf(r.split(" ")[0]);o.addTest("fontface",i)}),
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
o.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var A={}.hasOwnProperty;N=i(A,"undefined")||i(A.call,"undefined")?function(A,n){return n in A&&i(A.constructor.prototype[n],"undefined")}:function(n,r){return A.call(n,r)}}(),t._l={},t.on=function(A,n){this._l[A]||(this._l[A]=[]),this._l[A].push(n),o.hasOwnProperty(A)&&setTimeout(function(){o._trigger(A,o[A])},0)},t._trigger=function(A,n){if(this._l[A]){var r=this._l[A];setTimeout(function(){var A;for(A=0;A<r.length;A++)(0,r[A])(n)},0),delete this._l[A]}},o._q.push(function(){t.addTest=R}),
/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "aliases": ["svgincss"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/
o.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var U={}.toString;
/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/o.addTest("svgclippaths",function(){return!!n.createElementNS&&/SVGClipPath/.test(U.call(n.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),
/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/
o.addTest("svgfilters",function(){var n=!1;try{n="SVGFEColorMatrixElement"in A&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(A){}return n}),
/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
o.addTest("svgforeignobject",function(){return!!n.createElementNS&&/SVGForeignObject/.test(U.call(n.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),
/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
o.addTest("inlinesvg",function(){var A=E("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)}),
/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/
o.addTest("smil",function(){return!!n.createElementNS&&/SVGAnimate/.test(U.call(n.createElementNS("http://www.w3.org/2000/svg","animate")))}),
/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/
o.addTest("localstorage",function(){var A="modernizr";try{return localStorage.setItem(A,A),localStorage.removeItem(A),!0}catch(A){return!1}}),
/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/
o.addTest("sessionstorage",function(){var A="modernizr";try{return sessionStorage.setItem(A,A),sessionStorage.removeItem(A),!0}catch(A){return!1}}),
/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/
o.addTest("websqldatabase","openDatabase"in A),
/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/