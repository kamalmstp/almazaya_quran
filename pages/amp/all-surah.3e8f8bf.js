(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{210:function(t,e,r){var content=r(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("d878027c",content,!0,{sourceMap:!1})},212:function(t,e,r){"use strict";var n=r(210);r.n(n).a},213:function(t,e,r){(e=r(34)(!1)).push([t.i,".surah__header[data-v-3942433b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.surah__title[data-v-3942433b]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-3942433b]{width:100%;font-size:1.2rem}.surah__trans[data-v-3942433b]{font-style:italic;line-height:2}.surah__count[data-v-3942433b],.surah__trans[data-v-3942433b]{text-align:right}.surah svg[data-v-3942433b]{fill:var(--text-color)}",""]),t.exports=e},214:function(t,e,r){"use strict";r(21),r(22),r(13),r(56),r(57),r(69),r(112);var n=r(26),o=r(36),c=r(27),l=r(28),h=r(15),f=r(5),d=r(16),v=r(19);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t){Object(c.a)(r,t);var e=_(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"doAddToFavorite",value:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})}},{key:"doRemoveFromfavorite",value:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})}},{key:"findInFavorite",value:function(t){return!!(this.surahFavorite||[]).find((function(e){return e.index===t.index}))}},{key:"getSurahDetailUrl",value:function(t){return"/".concat(t,"/")}},{key:"goToSurahDetail",value:function(t){var path=this.getSurahDetailUrl(t);this.$router.push(path)}},{key:"isAmp",get:function(){return this.source.includes("amp")}}]),r}(d.Vue);Object(f.a)([Object(d.Prop)({default:function(){return[]}})],m.prototype,"surahArray",void 0),Object(f.a)([Object(d.Prop)({type:String,default:""})],m.prototype,"source",void 0),Object(f.a)([v.State],m.prototype,"surahFavorite",void 0),Object(f.a)([v.Action],m.prototype,"addToFavorite",void 0),Object(f.a)([v.Action],m.prototype,"removeFromFavorite",void 0),Object(f.a)([v.Action],m.prototype,"showNotification",void 0);var y=m=Object(f.a)([d.Component],m),x=(r(212),r(7)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"surah__root"},t._l(t.surahArray,(function(e){return r("nuxt-link",{key:e.index,staticClass:"surah block_content has-shadow",attrs:{to:"/"+e.index+"/"},on:{click:function(r){return r.preventDefault(),t.goToSurahDetail(e.index)}}},[r("div",{staticClass:"surah__header"},[r("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(e.index)+"\n      ")]),t._v(" "),r("div",{staticClass:"surah__header--right"},[t.isAmp||t.findInFavorite(e)?t._e():r("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(r){return r.preventDefault(),t.doAddToFavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),!t.isAmp&&t.findInFavorite(e)?r("svg",{staticStyle:{fill:"#f5aa1e!important"},attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(r){return r.preventDefault(),t.doRemoveFromfavorite(e)}}},[r("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl",lang:"ar"}},[t._v("\n        "+t._s(e.arabic)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(e.latin)+"\n      ")])]),t._v(" "),r("div",{staticClass:"divider clearfix"},[r("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n      ")])])])})),1)}),[],!1,null,"3942433b",null);e.a=component.exports},237:function(t,e,r){var content=r(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(35).default)("e1cf14fc",content,!0,{sourceMap:!1})},289:function(t,e,r){"use strict";var n=r(237);r.n(n).a},290:function(t,e,r){(e=r(34)(!1)).push([t.i,".all-surah[data-v-9ce7c452]{width:90%;margin:0 auto}",""]),t.exports=e},458:function(t,e,r){"use strict";r.r(e);r(21),r(22),r(13),r(56),r(41);var n=r(3),o=r(26),c=r(36),l=r(27),h=r(28),f=r(15),d=r(5),v=r(16),_=r(19),m=r(214),y=r(68);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var j=function(t){Object(l.a)(r,t);var e=x(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"head",value:function(){return this.metaHead}},{key:"mounted",value:function(){this.setHeaderTitle("Daftar Surat"),this.setPage("all-surah")}},{key:"activated",value:function(){this.setHeaderTitle("Daftar Surat"),this.setPage("all-surah")}},{key:"metaHead",get:function(){return{title:y.m,meta:[{hid:"description",name:"description",content:y.c},{hid:"og:title",property:"og:title",content:y.m},{hid:"twitter:title",name:"twitter:title",content:y.m},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}],link:[{rel:"canonical",href:"".concat(y.a.PATH,"all-surah/")}]}}}]),r}(v.Vue);Object(d.a)([_.State],j.prototype,"settingActiveTheme",void 0),Object(d.a)([_.Mutation],j.prototype,"setHeaderTitle",void 0),Object(d.a)([_.Mutation],j.prototype,"setPage",void 0);var k=j=Object(d.a)([Object(v.Component)({components:{Surah:m.a},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(0).then(r.t.bind(null,441,3));case 2:return e=t.sent,t.abrupt("return",{allSurahList:e.surah_info.map((function(t,e){return Object.assign({},t,{index:e+1})}))});case 4:case"end":return t.stop()}}),t)})))()}})],j),O=(r(289),r(7)),component=Object(O.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("div",{staticClass:"all-surah"},[e("Surah",{attrs:{"surah-array":this.allSurahList,source:"amp"}})],1)]),this._v(" "),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footnote"},[e("a",{attrs:{href:"http://almazayaislamicschool.sch.id/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Al-Mazaya Islamic School Banjarmasin")])])}],!1,null,"9ce7c452",null);e.default=component.exports}}]);