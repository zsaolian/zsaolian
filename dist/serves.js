!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="dist/",e(e.s=36)}([function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=b[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(p(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(p(o.parts[i],e));b[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],p={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(p):t.push(o[a]={id:a,parts:[p]})}return t}function i(n,e){var t=g(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),x.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=g(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function s(n){var e=document.createElement("style");return n.attrs.type="text/css",l(e,n.attrs),i(n,e),e}function c(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",l(e,n.attrs),i(n,e),e}function l(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function p(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var l=v++;t=m||(m=s(e)),o=d.bind(null,t,l,!1),r=d.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=c(e),o=f.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=u.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function d(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function u(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function f(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var b={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(n){var e={};return function(t){if(void 0===e[t]){var o=n.call(this,t);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[t]=o}return e[t]}}(function(n){return document.querySelector(n)}),m=null,v=0,x=[],y=t(8);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a],c=b[s.id];c.refs--,i.push(c)}if(n){o(r(n,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete b[c.id]}}}};var k=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e,t){n.exports=t.p+"images/545afc929653f22b377c7bba713f28e9.png"},function(n,e,t){n.exports=t.p+"images/banners/f5956f1131a8da9c3675961376d3bb04.jpg"},function(n,e,t){n.exports=t.p+"images/banners/9c9ec70b7a92dd1e08d84fabdfc78032.jpg"},function(n,e,t){n.exports=t.p+"images/banners/b01b6b852d1e8b3a774b7582eea86c31.jpg"},function(n,e,t){n.exports=t.p+"images/banners/c99d48caf242ef14cc25de7035e5c603.jpg"},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(n,e,t){var o=t(10);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0;t(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){e=n.exports=t(0)(!1),e.push([n.i,"",""])},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=[{title:"首页",link:"index.html"},{title:"关于我们",link:"about.html"},{title:"产品服务",link:"projects.html"},{title:"服务范围",link:"serves.html"},{title:"业务流程",link:"process.html"},{title:"客户操作",link:""}];e.data={menu:o,about:{title:"公司简介",title_en:"information",des:["傲联文化策划（中山）有限公司成立于2016年，从最初单一的文化策划型企业向多元化运营的产业链跨度，构建了一整条完整的经济链条，研发、生产到品牌运营、终端销售，傲联始终坚持自我优势，纵向剖析国内服装市场，建立数据化管理体系，结合市场需求引导时尚消费，长期的积淀使傲联成为行业里具有代表性的一流高端品牌运营商。","不忘初心，方得始终。对内重视构建员工的发展平台，对外敢于担当社会责任，关爱弱势群体；在经营链条中，与供应商坚持诚信合作的原则，对顾客提供专业专注的专属服务；致力于通过前瞻的时尚理念和适合自身发展的经营系统，为女性创造关于美与品质的时尚体验。"]},projects:{list:[{project:"服装物联项目",des:["傲联服装物联采用宽网物联技术，以大量的标注服装，时时反映消费者对服装明确的需求信息。品牌服装企业因此可以清晰的了解核心消费者（俗称VIP客户）需求，为核心消费者提供极度个性化的专属服务（如：私享价、私享购、私享搭等），建立品牌与核心消费者之间的牢固亲密关系。","消费者具有明确的服装需求后，以傲联积分为基础，建立起来的通证体系，将发挥重塑服装产业模式的作用。建立由需求，到大批量生产，零库存无尾货的全新服装产业模式。","这是服装产业以物联网模式重构产业结构的一次新的机遇。"]},{project:"买手企划",des:["作为市场一线的销售人员，与顾客的接触颇为深厚，对时尚和款式具有一定程度的了解。正因如此，极其注重产品研发创意来源的傲联公司，特别针对一线销售人员，制定了买手激励企划，鼓励销售人员参与款式推介与产品评定会，并将自身的意见与顾客的反馈融入到研发生产的过程之中。","在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。"]},{project:"合作线上线下高端零售平台",des:["在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。","作为市场一线的销售人员，与顾客的接触颇为深厚，对时尚和款式具有一定程度的了解。正因如此，极其注重产品研发创意来源的傲联公司，特别针对一线销售人员，制定了买手激励企划，鼓励销售人员参与款式推介与产品评定会，并将自身的意见与顾客的反馈融入到研发生产的过程之中。"]}]},serves:{title:"服务范围",title_en:"our serves",list:[{title:"服装贸易",des:["傲联服装物联采用宽网物联技术，以大量的标注服装，时时反映消费者对服装明确的需求信息。品牌服装企业因此可以清晰的了解核心消费者（俗称VIP客户）需求，为核心消费者提供极度个性化的专属服务（如：私享价、私享购、私享搭等），建立品牌与核心消费者之间的牢固亲密关系。","消费者具有明确的服装需求后，以傲联积分为基础，建立起来的通证体系，将发挥重塑服装产业模式的作用。建立由需求，到大批量生产，零库存无尾货的全新服装产业模式。","这是服装产业以物联网模式重构产业结构的一次新的机遇。"]},{title:"品牌合作",subtitle:"合作设计师",des:["在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。"],brands:["logo_pm.jpg","logo_sandhana.jpg","logo_wanhung.jpg","logo_minnanhui.jpg"]},{title:"食品贸易",des:["由于网络的迅猛发展，越来越多的国产食品问题被曝光，加之中产阶层的大量产生，都推动了进口食品的迅猛发展。中国已成为美国在全球的第四大农产品出口市场，中国市场从早期的进口乳制品，酒类，到目前的食用油、粮食、肉类、饼干、零食的进口都在不断增加，以天然、绿色、保真品质为代表的进口食品将迎来高速发展期，选购进口食品或节日采购或馈赠亲友，已经成为当今社会风尚。","公司本着“平等互利、真诚合作”的宗旨，与国内大型供应链管理企业建立了战略合作伙伴关系，公司依托丰富的项目资源，高效的管理团队，专业的操作经验，周到细致的服务，为中国消费者提供安全、优质的食品，药品以及保健品。"],other:[{title:"战略合作伙伴",imgUrl:"src/images/serves/PAGE5_SHINEWA.jpg"},{title:"资质荣耀",imgUrl:"src/images/serves/honor.png"}]},{title:"儿童及亲子产品系列",des:['<span style="font-weight:bold;font-size:1.3em;display:block;margin-bottom:10px;">COMMING SOON</span>即将面试敬请期待。']}]},philosophy:{title:"企业理念",title_en:"corporate philosophy",des:["一直坚持“恪守信誉、以人为本”的经营理念，“服务至上、质量第一”的管理信念，在国内外打下坚实的社会基础，致力成为中国知名专业品牌。","我们一直追求专业化发展道路，始终秉持“质量第一，客户至上，开拓创新求发展”的运营方针，通过持续改进，用我们的专业化服务帮助客户创造更高的价值。","我们相信，通过我们的不断努力和追求，一定能够实现与客户的互利共赢！"]},partner:{title:"品牌合作 -- 合作设计师",title_en:"cooperative partner",list:[{brand:"wanhung",picture:"WANHUNG.jpg",des:""},{brand:"perfect moment",picture:"PM.jpg",des:""},{brand:"sandhana",picture:"sandhana.jpg",des:""},{brand:"shinewa",picture:"SHINEWA.jpg",des:""},{brand:"minnanhui",picture:"minnanhui.jpg",des:""}]},form:{title:"联系我们",title_en:"contact us",welcome:["Hello，你好！","感谢你来到傲联文化策划（中山），若你能有合作意向，请您为我们留言或者使用以下方式联系我们，我们将尽快给你回复，并为你提供真诚的服务，谢谢！","info@cx-m.com","0760-8880 3783","广东省中山市东区博爱五路21号大东裕大厦706"],table:[{title_cn:"名字",title_en:"name",type:"input",tip:"请输入您的名字",content:""},{title_cn:"电话",title_en:"phone",type:"input",tip:"请输入您的电话",content:""},{title_cn:"邮箱",title_en:"emai",type:"input",tip:"请输入您的邮箱",content:""},{title_cn:"描述",title_en:"descript",type:"textarea",tip:"请以30字以上描述您对网站的建议或看法，并且您的描述越详细越有利于我们能快速理解并且及时改善",content:""}],button_text:"提交"},base_info:{email:"电子邮箱：info@cx-m.com",phone:"联系电话：0760-8880 3783",company:"傲联文化策划（中山）有限公司 · 粤ICP备 160108585号 - 1"}}},function(n,e,t){"use strict";Vue.component("base-header",{props:["base_info","menus","menu_index"],template:'\n\t\t<section class="header">\n\t\t\t<div id="Top">\n\t\t\t\t<div class="wrap">{{base_info[\'phone\']}} &nbsp;&nbsp;&nbsp;&nbsp; {{base_info[\'email\']}}</div>\n\t\t\t</div>\n\t\t\t<div class="wrap">\n\t\t\t\t<h1 class="logo"></h1>\n\t\t\t\t<ul class="menu">\n\t\t\t\t\t<li v-for=\'m,i in menus\'>\n\t\t\t\t\t\t<a v-html=\'m.title\' :href="m.link" :class="i === menu_index? \'Stand\': \'\'"></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t'})},function(n,e,t){"use strict";Vue.component("base-banner",{props:["about"],template:"\n\t\t<section class=\"Banner\">\n\t\t\t<div v-if=\"about\" class=\"wrap\">\n\t\t\t\t<h5 v-html='about.title'></h5>\n\t\t\t\t<h6 v-html='about.title_en'></h6>\n\t\t\t\t<p v-html='about.des[0]'></p>\n\t\t\t</div>\n\t\t</section>\n\t"})},function(n,e,t){"use strict";Vue.component("base-footer",{props:["base_info"],template:'\n\t\t<section class="footer">\n\t\t\t<div class="wrap">\n\t\t\t\t<span v-for="f in base_info" v-html="f"></span>\n\t\t\t</div>\n\t\t</section>\n\t'})},,,,function(n,e,t){n.exports=t.p+"images/icons/e2f64c31a42f773808cc43258f654982.png"},function(n,e,t){n.exports=t.p+"images/icons/0a0898711806a4bafe7072e2eccb6553.png"},function(n,e,t){n.exports=t.p+"images/icons/1929be76337851d3ceac336a90e68cca.png"},function(n,e,t){n.exports=t.p+"images/icons/9e2b6c6ae4b662c5a8e501c58a96ed23.png"},function(n,e,t){n.exports=t.p+"images/icons/f539ad0e79321dfe7766587a842bed8a.png"},function(n,e,t){n.exports=t.p+"images/icons/a26ad5a060679722259292f642077641.png"},,,,,,,,,,,,,function(n,e,t){"use strict";t(37),t(9);var o=t(11);t(12),t(13),t(14);new Vue({el:"#app",data:function(){return{menu:o.data.menu,menu_index:3,serves:o.data.serves,serves_index:0,base_info:o.data.base_info}},beforeCreate:function(){},mounted:function(){},methods:{servesClick:function(n){this.serves_index=n}},watch:{}})},function(n,e,t){var o=t(38);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0;t(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){var o=t(7);e=n.exports=t(0)(!1),e.push([n.i,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\ninput {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #555;\n  -webkit-backface-visibility: hidden;\n  text-decoration: none;\n}\nli {\n  list-style: none;\n}\nbody {\n  color: #555;\n  -webkit-text-size-adjust: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\nbody {\n  font-family: "Microsoft YaHei", "HelveticaNeue-Light", "HelvLightIBM", Mono, Arial, sans-serif;\n}\n.wrap {\n  width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n}\n#Top {\n  font-size: 12px;\n  text-align: right;\n  height: 34px;\n  line-height: 34px;\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #e5e5e5;\n}\n.header {\n  overflow: auto;\n}\n.header .logo {\n  float: left;\n  width: 334px;\n  height: 46px;\n  margin-top: 10px;\n  background-image: url('+o(t(2))+");\n}\n.header .menu {\n  float: right;\n  height: 70px;\n}\n.header .menu li {\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  text-align: center;\n  width: 90px;\n}\n.header .menu li a {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  transition: all 0.3s;\n}\n.header .menu li a:hover,\n.header .menu li a.Stand {\n  color: #fff;\n  background-color: #0082ce;\n}\n.Banner {\n  height: 400px;\n  background-size: auto 400px;\n  background-position: center center;\n}\n.Banner.index-banner {\n  background-image: url("+o(t(3))+");\n}\n.Banner.projects-banner {\n  background-image: url("+o(t(4))+");\n}\n.Banner.about-banner {\n  background-image: url("+o(t(5))+");\n}\n.Banner.serves-banner {\n  background-image: url("+o(t(6))+");\n}\n.Banner.process-banner {\n  background-image: url("+o(t(39))+");\n}\n.footer {\n  font-size: 12px;\n  color: #fff;\n  line-height: 60px;\n  background-color: #000;\n}\n.footer span {\n  margin-right: 20px;\n}\n.footer span:last-child {\n  float: right;\n  margin-right: 0;\n}\n.Serves.index {\n  color: #fff;\n  background-color: #3a7de8;\n}\n.Serves h5,\n.Serves h6 {\n  letter-spacing: 2px;\n  text-align: center;\n}\n.Serves h5 {\n  font-size: 34px;\n  font-weight: bold;\n  font-variant: small-caps;\n  padding-top: 40px;\n  margin-bottom: 15px;\n}\n.Serves h6 {\n  font-size: 22px;\n}\n.Serves .head {\n  margin-top: 50px;\n}\n.Serves .head dd {\n  text-align: center;\n  width: 25%;\n  display: inline-block;\n}\n.Serves .head dd span {\n  border-style: solid;\n  border-width: 2px;\n  display: inline-block;\n  line-height: 44px;\n  width: 200px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.Serves .head dd span.On {\n  color: #3a7de8;\n  cursor: default;\n}\n.Serves.index .head dd span {\n  border-color: #fff;\n  color: #fff;\n}\n.Serves.index .head dd span:hover {\n  background-color: rgba(0,0,0,0.3);\n}\n.Serves.index .head dd span.On {\n  color: #3a7de8;\n  background-color: #fff;\n}\n.Serves.index .content.s-item-1 {\n  background-image: url("+o(t(18))+");\n}\n.Serves.index .content.s-item-3 {\n  background-image: url("+o(t(19))+");\n}\n.Serves.index .content.s-item-4 {\n  background-image: url("+o(t(20))+");\n}\n.Serves.default .head dd span {\n  border-color: #3a7de8;\n  color: #3a7de8;\n}\n.Serves.default .head dd span:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.Serves.default .head dd span.On {\n  color: #fff;\n  background-color: #3a7de8;\n}\n.Serves.default .content {\n  padding-bottom: 50px;\n}\n.Serves.default .content h4 {\n  padding-top: 50px;\n}\n.Serves.default .content.s-item-1 {\n  background-image: url("+o(t(21))+");\n}\n.Serves.default .content.s-item-3 {\n  background-image: url("+o(t(22))+");\n}\n.Serves.default .content.s-item-4 {\n  background-image: url("+o(t(23))+");\n}\n.Serves .content {\n  min-height: 350px;\n  margin-top: 20px;\n  padding-left: 400px;\n  padding-bottom: 50px;\n  background-repeat: no-repeat;\n  background-position: 60px 70px;\n}\n.Serves .content h4 {\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 80px;\n}\n.Serves .content p {\n  font-size: 16px;\n  letter-spacing: 2px;\n  line-height: 2em;\n  padding-top: 30px;\n}\n.Serves .content.s-item-2 {\n  padding-left: 0;\n  background-image: none;\n}\n.Serves .content.s-item-2 h4 {\n  padding-left: 400px;\n}\n.Serves .content.s-item-2 img {\n  margin-bottom: 25px;\n  margin-left: 27px;\n}\n.Serves .other h4 {\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 80px;\n  border-top: 2px solid #999;\n  padding-top: 50px;\n}\n.Serves .other img {\n  max-width: 100%;\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n",""])},function(n,e,t){n.exports=t.p+"images/banners/f676ad641bd46bdea29c02c954bd04a2.jpg"}]);