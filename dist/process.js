!function(n){function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="dist/",e(e.s=39)}([function(n,e){function t(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=o(i);return[t].concat(i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"})).concat([r]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=u[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(d(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(d(o.parts[r],e));u[o.id]={id:o.id,refs:1,parts:a}}}}function i(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],s=r[1],p=r[2],l=r[3],d={css:s,media:p,sourceMap:l};o[a]?o[a].parts.push(d):t.push(o[a]={id:a,parts:[d]})}return t}function r(n,e){var t=h(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=v[v.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),v.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=h(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,i)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=v.indexOf(n);e>=0&&v.splice(e,1)}function s(n){var e=document.createElement("style");return n.attrs.type="text/css",l(e,n.attrs),r(n,e),e}function p(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",l(e,n.attrs),r(n,e),e}function l(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function d(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var l=x++;t=b||(b=s(e)),o=c.bind(null,t,l,!1),i=c.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=p(e),o=g.bind(null,t,e),i=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=f.bind(null,t),i=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}function c(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=A(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function f(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function g(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=w(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var u={},m=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),h=function(n){var e={};return function(t){if(void 0===e[t]){var o=n.call(this,t);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[t]=o}return e[t]}}(function(n){return document.querySelector(n)}),b=null,x=0,v=[],w=t(9);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=i(n,e);return o(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var s=t[a],p=u[s.id];p.refs--,r.push(p)}if(n){o(i(n,e),e)}for(var a=0;a<r.length;a++){var p=r[a];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete u[p.id]}}}};var A=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){n.exports=t.p+"images/b2937ed62993c6bfc8303205a7d17a9a.png"},function(n,e,t){n.exports=t.p+"images/banners/f5956f1131a8da9c3675961376d3bb04.jpg"},function(n,e,t){n.exports=t.p+"images/banners/9c9ec70b7a92dd1e08d84fabdfc78032.jpg"},function(n,e,t){n.exports=t.p+"images/banners/b01b6b852d1e8b3a774b7582eea86c31.jpg"},function(n,e,t){n.exports=t.p+"images/banners/c99d48caf242ef14cc25de7035e5c603.jpg"},function(n,e,t){n.exports=t.p+"images/banners/f676ad641bd46bdea29c02c954bd04a2.jpg"},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return n;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(n,e,t){var o=t(11);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0};i.transform=void 0;t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){e=n.exports=t(0)(!1),e.push([n.i,"@media screen and (max-width: 1050px) {\n  .wrap {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n  .Serves .content.s-item-2 {\n    text-align: center;\n    padding-left: 50px;\n  }\n  .Serves .content.s-item-2 h4 {\n    padding-left: 0;\n  }\n}\n",""])},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=[{title:"首页",link:"index.html"},{title:"关于我们",link:"about.html"},{title:"产品服务",link:"projects.html"},{title:"服务范围",link:"serves.html"},{title:"业务流程",link:"process.html"},{title:"联系我们",link:"###"}],i={email:"info@cx-m.com",phone:"0760-2360 8918"};e.data={menu:o,about:{title:"公司简介",title_en:"information",des:["傲联文化策划（中山）有限公司成立于2016年，从最初单一的文化策划型企业向多元化运营的产业链跨度，构建了一整条完整的经济链条，研发、生产到品牌运营、终端销售，傲联始终坚持自我优势，纵向剖析国内服装市场，建立数据化管理体系，结合市场需求引导时尚消费，长期的积淀使傲联成为行业里具有代表性的一流高端品牌运营商。","不忘初心，方得始终。对内重视构建员工的发展平台，对外敢于担当社会责任，关爱弱势群体；在经营链条中，与供应商坚持诚信合作的原则，对顾客提供专业专注的专属服务；致力于通过前瞻的时尚理念和适合自身发展的经营系统，为女性创造关于美与品质的时尚体验。"]},projects:{list:[{project:"服装物联项目",des:["傲联服装物联采用宽网物联技术，以大量的标注服装，时时反映消费者对服装明确的需求信息。品牌服装企业因此可以清晰的了解核心消费者（俗称VIP客户）需求，为核心消费者提供极度个性化的专属服务（如：私享价、私享购、私享搭等），建立品牌与核心消费者之间的牢固亲密关系。","消费者具有明确的服装需求后，以傲联积分为基础，建立起来的通证体系，将发挥重塑服装产业模式的作用。建立由需求，到大批量生产，零库存无尾货的全新服装产业模式。","这是服装产业以物联网模式重构产业结构的一次新的机遇。"]},{project:"买手企划",des:["作为市场一线的销售人员，与顾客的接触颇为深厚，对时尚和款式具有一定程度的了解。正因如此，极其注重产品研发创意来源的傲联公司，特别针对一线销售人员，制定了买手激励企划，鼓励销售人员参与款式推介与产品评定会，并将自身的意见与顾客的反馈融入到研发生产的过程之中。","在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。"]},{project:"合作线上线下高端零售平台",des:["在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。","作为市场一线的销售人员，与顾客的接触颇为深厚，对时尚和款式具有一定程度的了解。正因如此，极其注重产品研发创意来源的傲联公司，特别针对一线销售人员，制定了买手激励企划，鼓励销售人员参与款式推介与产品评定会，并将自身的意见与顾客的反馈融入到研发生产的过程之中。"]}]},serves:{title:"服务范围",title_en:"our serves",list:[{title:"服装贸易",des:["傲联服装物联采用宽网物联技术，以大量的标注服装，时时反映消费者对服装明确的需求信息。品牌服装企业因此可以清晰的了解核心消费者（俗称VIP客户）需求，为核心消费者提供极度个性化的专属服务（如：私享价、私享购、私享搭等），建立品牌与核心消费者之间的牢固亲密关系。","消费者具有明确的服装需求后，以傲联积分为基础，建立起来的通证体系，将发挥重塑服装产业模式的作用。建立由需求，到大批量生产，零库存无尾货的全新服装产业模式。","这是服装产业以物联网模式重构产业结构的一次新的机遇。"]},{title:"品牌合作",subtitle:"合作设计师",des:["在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。"],brands:["logo_pm.jpg","logo_sandhana.jpg","logo_wanhung.jpg","logo_minnanhui.jpg"]},{title:"食品贸易",des:["由于网络的迅猛发展，越来越多的国产食品问题被曝光，加之中产阶层的大量产生，都推动了进口食品的迅猛发展。中国已成为美国在全球的第四大农产品出口市场，中国市场从早期的进口乳制品，酒类，到目前的食用油、粮食、肉类、饼干、零食的进口都在不断增加，以天然、绿色、保真品质为代表的进口食品将迎来高速发展期，选购进口食品或节日采购或馈赠亲友，已经成为当今社会风尚。","公司本着“平等互利、真诚合作”的宗旨，与国内大型供应链管理企业建立了战略合作伙伴关系，公司依托丰富的项目资源，高效的管理团队，专业的操作经验，周到细致的服务，为中国消费者提供安全、优质的食品，药品以及保健品。"],other:[{title:"战略合作伙伴",imgUrl:"src/images/serves/PAGE5_SHINEWA.jpg"},{title:"资质荣耀",imgUrl:"src/images/serves/honor.png"}]},{title:"儿童及亲子产品系列",des:['<span style="font-weight:bold;font-size:1.3em;display:block;margin-bottom:10px;">COMMING SOON</span>即将面试敬请期待。']}]},philosophy:{title:"企业理念",title_en:"corporate philosophy",des:["一直坚持“恪守信誉、以人为本”的经营理念，“服务至上、质量第一”的管理信念，在国内外打下坚实的社会基础，致力成为中国知名专业品牌。","我们一直追求专业化发展道路，始终秉持“质量第一，客户至上，开拓创新求发展”的运营方针，通过持续改进，用我们的专业化服务帮助客户创造更高的价值。","我们相信，通过我们的不断努力和追求，一定能够实现与客户的互利共赢！"]},partner:{title:"品牌合作 -- 合作设计师",title_en:"cooperative partner",list:[{brand:"wanhung",picture:"WANHUNG.jpg",des:""},{brand:"perfect moment",picture:"PM.jpg",des:""},{brand:"sandhana",picture:"sandhana.jpg",des:""},{brand:"shinewa",picture:"SHINEWA.jpg",des:""},{brand:"minnanhui",picture:"minnanhui.jpg",des:""}]},form:{title:"联系我们",title_en:"contact us",welcome:["Hello，你好！","感谢你来到傲联文化策划（中山），若你能有合作意向，请您为我们留言或者使用以下方式联系我们，我们将尽快给你回复，并为你提供真诚的服务，谢谢！",i.email,i.phone,"广东省中山市三乡镇鸦岗工业区"],table:[{title_cn:"名字",title_en:"name",type:"input",tip:"请输入您的名字",content:""},{title_cn:"电话",title_en:"phone",type:"input",tip:"请输入您的电话",content:""},{title_cn:"邮箱",title_en:"email",type:"input",tip:"请输入您的邮箱",content:""},{title_cn:"描述",title_en:"descript",type:"textarea",tip:"请以30字以上描述您对网站的建议或看法，并且您的描述越详细越有利于我们能快速理解并且及时改善",content:""}],button_text:"提交"},base_info:{email:"电子邮箱："+i.email,phone:"联系电话："+i.phone,filing:"粤ICP备 160108585号 - 1",company:"傲联文化策划（中山）有限公司"}}},function(n,e,t){"use strict";Vue.component("base-loading",{template:'\n\t\t<div class="Loading">\n\t\t\t<span></span>\n\t\t\t<span></span>\n\t\t\t<span></span>\n\t\t\t<p v-html="\'loading...\'"></p>\n\t\t</div>\n\t'})},function(n,e,t){"use strict";Vue.component("base-header",{props:["base_info","menus","menu_index"],template:'\n\t\t<section class="header">\n\t\t\t<div id="Top">\n\t\t\t\t<div class="wrap">{{base_info[\'phone\']}} &nbsp;&nbsp;&nbsp;&nbsp; {{base_info[\'email\']}}</div>\n\t\t\t</div>\n\t\t\t<div class="wrap">\n\t\t\t\t<h1 class="logo" :title="base_info[\'company\']"><a href="/"></a>{{base_info[\'company\']}}</h1>\n\t\t\t\t<ul class="menu">\n\t\t\t\t\t<li v-for=\'m,i in menus\'>\n\t\t\t\t\t\t<a v-html=\'m.title\' :href="m.link" :class="i === menu_index? \'Stand\': \'\'"></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t'})},function(n,e,t){"use strict";Vue.component("base-banner",{props:["about"],template:"\n\t\t<section class=\"Banner\">\n\t\t\t<div v-if=\"about\" class=\"wrap\">\n\t\t\t\t<h5 v-html='about.title'></h5>\n\t\t\t\t<h6 v-html='about.title_en'></h6>\n\t\t\t\t<p v-html='about.des[0]'></p>\n\t\t\t</div>\n\t\t</section>\n\t"})},function(n,e,t){"use strict";Vue.component("base-footer",{props:["base_info"],template:'\n\t\t<section class="footer">\n\t\t\t<div class="wrap">\n\t\t\t\t<span v-for="f in base_info" v-html="f"></span>\n\t\t\t</div>\n\t\t</section>\n\t'})},function(n,e,t){n.exports=t.p+"images/icons/5b8d173026dfea7b3057d32aa97e4c30.png"},function(n,e,t){n.exports=t.p+"images/icons/33b7cc3f20554539d3c4822fb2686301.png"},function(n,e,t){n.exports=t.p+"images/icons/d8a4e63ee2b4c3d7ba9014e8bacdd494.png"},function(n,e,t){n.exports=t.p+"images/icons/e2f64c31a42f773808cc43258f654982.png"},function(n,e,t){n.exports=t.p+"images/icons/0a0898711806a4bafe7072e2eccb6553.png"},function(n,e,t){n.exports=t.p+"images/icons/1929be76337851d3ceac336a90e68cca.png"},function(n,e,t){n.exports=t.p+"images/icons/9e2b6c6ae4b662c5a8e501c58a96ed23.png"},function(n,e,t){n.exports=t.p+"images/icons/f539ad0e79321dfe7766587a842bed8a.png"},function(n,e,t){n.exports=t.p+"images/icons/a26ad5a060679722259292f642077641.png"},function(n,e,t){var o=t(27);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0};i.transform=void 0;t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){var o=t(2);e=n.exports=t(0)(!1),e.push([n.i,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo,\ninput {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  background-color: #fff;\n  line-height: 1;\n  font-family: "Microsoft YaHei", "HelveticaNeue-Light", "HelvLightIBM", Mono, Arial, sans-serif;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #555;\n  -webkit-backface-visibility: hidden;\n  text-decoration: none;\n}\nli {\n  list-style: none;\n}\nbody {\n  color: #555;\n  -webkit-text-size-adjust: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\nbody {\n  font-family: "Microsoft YaHei", "HelveticaNeue-Light", "HelvLightIBM", Mono, Arial, sans-serif;\n}\n.wrap {\n  width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n}\n.Loading {\n  width: 100%;\n  position: fixed;\n  top: 50%;\n  margin-top: -150px;\n  text-align: center;\n}\n.Loading span {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  transform: scale(0, 0);\n  background-color: #3a7de8;\n  animation-duration: 1.5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n@media screen and (max-width: 1050px) {\n  .Loading span {\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n  }\n}\n.Loading span:nth-child(1) {\n  animation-name: animate-loading-show-1;\n}\n.Loading span:nth-child(2) {\n  animation-name: animate-loading-show-2;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n.Loading span:nth-child(3) {\n  animation-name: animate-loading-show-3;\n}\n.Loading p {\n  font-size: 11px;\n  color: base-color-1;\n  line-height: 40px;\n}\n@media screen and (max-width: 1050px) {\n  .Loading p {\n    font-size: 28px;\n    line-height: 120px;\n  }\n}\n@-moz-keyframes animate-loading-show-1 {\n  25% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(0, 0);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes animate-loading-show-1 {\n  25% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(0, 0);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n@-o-keyframes animate-loading-show-1 {\n  25% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(0, 0);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n@keyframes animate-loading-show-1 {\n  25% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(0, 0);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n@-moz-keyframes animate-loading-show-2 {\n  25% {\n    transform: scale(0, 0);\n  }\n  50% {\n    transform: scale(1, 1);\n  }\n  75% {\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes animate-loading-show-2 {\n  25% {\n    transform: scale(0, 0);\n  }\n  50% {\n    transform: scale(1, 1);\n  }\n  75% {\n    transform: scale(0, 0);\n  }\n}\n@-o-keyframes animate-loading-show-2 {\n  25% {\n    transform: scale(0, 0);\n  }\n  50% {\n    transform: scale(1, 1);\n  }\n  75% {\n    transform: scale(0, 0);\n  }\n}\n@keyframes animate-loading-show-2 {\n  25% {\n    transform: scale(0, 0);\n  }\n  50% {\n    transform: scale(1, 1);\n  }\n  75% {\n    transform: scale(0, 0);\n  }\n}\n@-moz-keyframes animate-loading-show-3 {\n  50% {\n    transform: scale(0, 0);\n  }\n  75% {\n    transform: scale(1, 1);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n@-webkit-keyframes animate-loading-show-3 {\n  50% {\n    transform: scale(0, 0);\n  }\n  75% {\n    transform: scale(1, 1);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n@-o-keyframes animate-loading-show-3 {\n  50% {\n    transform: scale(0, 0);\n  }\n  75% {\n    transform: scale(1, 1);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n@keyframes animate-loading-show-3 {\n  50% {\n    transform: scale(0, 0);\n  }\n  75% {\n    transform: scale(1, 1);\n  }\n  100% {\n    transform: scale(0, 0);\n  }\n}\n#Top {\n  font-size: 12px;\n  text-align: right;\n  height: 34px;\n  line-height: 34px;\n  background-color: #f2f2f2;\n  border-bottom: 1px solid #e5e5e5;\n}\n.header {\n  overflow: auto;\n}\n.header .logo {\n  font-size: 0;\n  text-indent: -999px;\n  float: left;\n  width: 280px;\n  height: 46px;\n  overflow: hidden;\n  margin-top: 10px;\n  background: url('+o(t(3))+") no-repeat 0 0;\n}\n.header .logo a {\n  display: block;\n  height: 100%;\n}\n.header .menu {\n  float: right;\n  height: 70px;\n}\n.header .menu li {\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  text-align: center;\n  width: 90px;\n}\n.header .menu li a {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  transition: all 0.3s;\n}\n.header .menu li a:hover,\n.header .menu li a.Stand {\n  color: #fff;\n  background-color: #0082ce;\n}\n.Banner {\n  height: 400px;\n  background-size: auto 400px;\n  background-position: center center;\n}\n.Banner.index-banner {\n  background-image: url("+o(t(4))+");\n}\n.Banner.projects-banner {\n  background-image: url("+o(t(5))+");\n}\n.Banner.about-banner {\n  background-image: url("+o(t(6))+");\n}\n.Banner.serves-banner {\n  background-image: url("+o(t(7))+");\n}\n.Banner.process-banner {\n  background-image: url("+o(t(8))+');\n}\n.footer {\n  font-size: 12px;\n  color: #fff;\n  line-height: 60px;\n  background-color: #000;\n}\n.footer span {\n  margin-right: 20px;\n}\n.footer span:nth-child(3),\n.footer span:nth-child(4) {\n  float: right;\n  margin-right: 0;\n}\n.footer span:nth-child(3):before {\n  content: "\\B7";\n  margin-left: 8px;\n  margin-right: 8px;\n}\nbody {\n  font-family: "Microsoft YaHei", "HelveticaNeue-Light", "HelvLightIBM", Mono, Arial, sans-serif;\n}\n.wrap {\n  width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n}\n.Projects .head {\n  height: 154px;\n  border-bottom: 1px solid #eee;\n}\n.Projects .head dd {\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-align: center;\n  font-weight: bold;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 33.333%;\n  height: 154px;\n  line-height: 240px;\n  border-right: 1px solid #eee;\n  background-repeat: no-repeat;\n  background-size: auto 65px;\n  background-position: center 35px;\n  overflow: hidden;\n}\n.Projects .head dd:first-child {\n  border-left: 1px solid #eee;\n}\n.Projects .head dd:nth-child(1) {\n  background-image: url('+o(t(17))+");\n}\n.Projects .head dd:nth-child(2) {\n  background-image: url("+o(t(18))+");\n}\n.Projects .head dd:nth-child(3) {\n  background-image: url("+o(t(19))+");\n}\n.Projects .head dd.On {\n  position: relative;\n}\n.Projects .head dd.On:before {\n  content: '';\n  position: absolute;\n  height: 2px;\n  width: 30px;\n  background-color: #4bcec6;\n  left: 158px;\n  top: 135px;\n}\n.Projects .project {\n  height: 380px;\n  padding-left: 450px;\n  background-repeat: no-repeat;\n  background-position: 90px center;\n}\n.Projects .project.item-1 {\n  background-image: url("+o(t(17))+");\n}\n.Projects .project.item-2 {\n  background-image: url("+o(t(18))+");\n}\n.Projects .project.item-3 {\n  background-image: url("+o(t(19))+');\n}\n.Projects .project h6 {\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 80px;\n}\n.Projects .project p {\n  color: #8c8c8c;\n  font-size: 16px;\n  letter-spacing: 2px;\n  line-height: 2em;\n  padding-top: 30px;\n}\n.Projects .default {\n  height: 600px;\n  background-position: 90px 90px;\n}\nbody {\n  font-family: "Microsoft YaHei", "HelveticaNeue-Light", "HelvLightIBM", Mono, Arial, sans-serif;\n}\n.wrap {\n  width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  box-sizing: border-box;\n}\n.Serves.index {\n  color: #fff;\n  background-color: #3a7de8;\n}\n.Serves h5,\n.Serves h6 {\n  letter-spacing: 2px;\n  text-align: center;\n}\n.Serves h5 {\n  font-size: 34px;\n  font-weight: bold;\n  font-variant: small-caps;\n  padding-top: 40px;\n  margin-bottom: 15px;\n}\n.Serves h6 {\n  font-size: 22px;\n}\n.Serves .head {\n  margin-top: 50px;\n}\n.Serves .head dd {\n  text-align: center;\n  width: 25%;\n  display: inline-block;\n}\n.Serves .head dd span {\n  border-style: solid;\n  border-width: 2px;\n  display: inline-block;\n  line-height: 44px;\n  width: 200px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.Serves .head dd span.On {\n  color: #3a7de8;\n  cursor: default;\n}\n.Serves.index .head dd span {\n  border-color: #fff;\n  color: #fff;\n}\n.Serves.index .head dd span:hover {\n  background-color: rgba(0,0,0,0.3);\n}\n.Serves.index .head dd span.On {\n  color: #3a7de8;\n  background-color: #fff;\n}\n.Serves.index .content.s-item-1 {\n  background-image: url('+o(t(20))+");\n}\n.Serves.index .content.s-item-3 {\n  background-image: url("+o(t(21))+");\n}\n.Serves.index .content.s-item-4 {\n  background-image: url("+o(t(22))+");\n}\n.Serves.default .head dd span {\n  border-color: #3a7de8;\n  color: #3a7de8;\n}\n.Serves.default .head dd span:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.Serves.default .head dd span.On {\n  color: #fff;\n  background-color: #3a7de8;\n}\n.Serves.default .content {\n  padding-bottom: 50px;\n}\n.Serves.default .content h4 {\n  padding-top: 50px;\n}\n.Serves.default .content.s-item-1 {\n  background-image: url("+o(t(23))+");\n}\n.Serves.default .content.s-item-3 {\n  background-image: url("+o(t(24))+");\n}\n.Serves.default .content.s-item-4 {\n  background-image: url("+o(t(25))+");\n}\n.Serves .content {\n  min-height: 350px;\n  margin-top: 20px;\n  padding-left: 400px;\n  padding-bottom: 50px;\n  background-repeat: no-repeat;\n  background-position: 60px 70px;\n}\n.Serves .content h4 {\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 80px;\n}\n.Serves .content p {\n  font-size: 16px;\n  letter-spacing: 2px;\n  line-height: 2em;\n  padding-top: 30px;\n}\n.Serves .content.s-item-2 {\n  padding-left: 0;\n  background-image: none;\n}\n.Serves .content.s-item-2 h4 {\n  padding-left: 400px;\n}\n.Serves .content.s-item-2 img {\n  margin-bottom: 25px;\n  margin-left: 27px;\n}\n.Serves .other h4 {\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 80px;\n  border-top: 2px solid #999;\n  padding-top: 50px;\n}\n.Serves .other img {\n  max-width: 100%;\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.Banner h5 {\n  display: inline-block;\n  color: #555;\n  font-size: 26px;\n  font-weight: bold;\n  letter-spacing: 5px;\n  border-bottom: 2px #d2d1d9 solid;\n  padding-top: 50px;\n  padding-bottom: 10px;\n}\n.Banner h6 {\n  font-size: 16px;\n  color: #777;\n  letter-spacing: 2px;\n  padding-top: 10px;\n  padding-bottom: 30px;\n}\n.Banner p {\n  font-size: 16px;\n  line-height: 2em;\n  letter-spacing: 3px;\n}\n.Philosophy {\n  height: 400px;\n}\n.Philosophy .wrap {\n  height: 100%;\n  padding-right: 450px;\n  background: url("+o(t(28))+") no-repeat right center;\n}\n.Philosophy h5 {\n  font-size: 34px;\n  font-weight: bold;\n  font-variant: small-caps;\n  padding-top: 40px;\n  margin-bottom: 15px;\n}\n.Philosophy h6 {\n  font-size: 22px;\n  padding-bottom: 15px;\n  border-bottom: 2px solid #d9d9d9;\n}\n.Philosophy p {\n  font-size: 16px;\n  letter-spacing: 2px;\n  line-height: 2em;\n  padding-top: 30px;\n  font-size: 14px;\n  padding-top: 15px;\n}\n.Partner {\n  height: 550px;\n  background-color: #f3f3f3;\n}\n.Partner h5 {\n  font-size: 34px;\n  font-weight: bold;\n  font-variant: small-caps;\n  padding-top: 40px;\n  margin-bottom: 15px;\n  padding-top: 70px;\n}\n.Partner h6 {\n  font-size: 22px;\n  padding-bottom: 15px;\n  border-bottom: 2px solid #d9d9d9;\n}\n.Partner .arrow {\n  font-size: 0;\n  text-align: right;\n  margin-top: -50px;\n  margin-bottom: 80px;\n}\n.Partner .arrow span {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  background-image: url("+o(t(29))+");\n  cursor: pointer;\n  opacity: 0.5;\n}\n.Partner .arrow span.arrow-2 {\n  background-position: top right;\n  margin-left: 10px;\n}\n.Partner .arrow span:hover {\n  opacity: 1;\n}\n.Partner .arrow span.unclick {\n  opacity: 0.25;\n  cursor: default;\n}\n.Partner .list {\n  height: 264px;\n  overflow: hidden;\n  position: relative;\n}\n.Partner .list dl {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.3s;\n  width: 99999px;\n}\n.Partner .list dl dd {\n  display: inline-block;\n  width: 430px;\n  margin-right: 20px;\n}\n.Partner .list dl dd image {\n  width: 100%;\n}\n.Partner .list dl dd span {\n  display: block;\n  font-size: 26px;\n  line-height: 50px;\n  text-align: center;\n  font-weight: bold;\n  font-variant: small-caps;\n}\n.Form {\n  color: #fff;\n  background-color: #3a7de8;\n  padding-bottom: 100px;\n  overflow: hidden;\n}\n.Form h4,\n.Form h5 {\n  text-align: center;\n}\n.Form h4 {\n  font-size: 34px;\n  font-weight: bold;\n  font-variant: small-caps;\n  padding-top: 40px;\n  margin-bottom: 15px;\n}\n.Form h5 {\n  font-size: 22px;\n}\n.Form .table {\n  float: right;\n  font-size: 14px;\n  width: 50%;\n  overflow: hidden;\n  margin-top: 50px;\n}\n.Form .table li span {\n  display: block;\n  padding: 20px 0 10px 15px;\n}\n.Form .table li input,\n.Form .table li textarea {\n  font-size: 14px;\n  width: 100%;\n  line-height: 32px;\n  border: 0 none;\n  outline: 0 none;\n  border-radius: 19px;\n  box-sizing: border-box;\n  padding: 3px 15px;\n}\n.Form .table li input {\n  height: 38px;\n}\n.Form .table li textarea {\n  height: 256px;\n  overflow: hidden;\n}\n.Form .table li button {\n  font-size: 16px;\n  color: #3a7de8;\n  font-weight: bold;\n  line-height: 40px;\n  text-align: center;\n  display: inline-block;\n  width: 150px;\n  background-color: #fff;\n  border-radius: 5px;\n  border: 0 none;\n  outline: 0 none;\n  margin-top: 30px;\n}\n.Form .welcome {\n  float: left;\n  width: 50%;\n  overflow: hidden;\n}\n.Form .welcome h6 {\n  padding-top: 70px;\n  font-size: 28px;\n}\n.Form .welcome p {\n  font-size: 14px;\n  line-height: 28px;\n  padding: 15px 50px 0 0;\n}\n.Form .welcome li {\n  font-size: 18px;\n  margin-top: 50px;\n}\n",""])},function(n,e,t){n.exports=t.p+"images/icons/c8571ec8c5848c6fc378c85eee887207.png"},function(n,e){n.exports="data:image/png;base64,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"},,,,,,,,,,function(n,e,t){"use strict";t(26),t(10);var o=t(12);t(13),t(14),t(15),t(16);new Vue({el:"#app",data:function(){return{menu:"",menu_index:4,base_info:o.data.base_info}},mounted:function(){var n=this;setTimeout(function(){n.menu=o.data.menu},1800)},methods:{},watch:{}})}]);