(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{237:function(t,r,e){var content=e(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("4db9d57e",content,!0,{sourceMap:!1})},256:function(t,r,e){"use strict";var n=e(384),o=e(390),c=e(385),l=e(257),d=e(391),f=e(388),_=e(185),v=e(183),h=e(125),m=e(184),w=e(76),x=e(387),k=e(389),y=e(386),D=e(254),P=(e(109),{name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}),N=e(90),component=Object(N.a)(P,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[r(k.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[r(v.a,t._l(t.items,(function(e,i){return r(h.a,{key:i,attrs:{to:e.to,router:"",exact:""}},[r(m.a,[r(_.a,[t._v(t._s(e.icon))])],1),t._v(" "),r(w.a,[r(w.b,{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r(c.a,{on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r(_.a,[t._v("mdi-"+t._s("chevron-".concat(t.miniVariant?"right":"left")))])],1),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.clipped=!t.clipped}}},[r(_.a,[t._v("mdi-application")])],1),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.fixed=!t.fixed}}},[r(_.a,[t._v("mdi-minus")])],1),t._v(" "),r(D.a,{domProps:{textContent:t._s(t.title)}}),t._v(" "),r(y.a),t._v(" "),r(l.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r(_.a,[t._v("mdi-menu")])],1)],1),t._v(" "),r(x.a,[r(d.a,[r("Nuxt")],1)],1),t._v(" "),r(k.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(r){t.rightDrawer=r},expression:"rightDrawer"}},[r(v.a,[r(h.a,{nativeOn:{click:function(r){t.right=!t.right}}},[r(m.a,[r(_.a,{attrs:{light:""}},[t._v(" mdi-repeat ")])],1),t._v(" "),r(w.b,[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r(f.a,{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);r.a=component.exports},264:function(t,r,e){e(265),t.exports=e(266)},315:function(t,r,e){"use strict";e(237)},316:function(t,r,e){var n=e(20)(!1);n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=n},78:function(t,r,e){"use strict";var n=e(384),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(315),e(90)),component=Object(c.a)(o,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);r.a=component.exports}},[[264,8,2,9]]]);