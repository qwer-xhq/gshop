(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55ac6f0c"],{"057f":function(e,t,r){var o=r("c6b6"),n=r("fc6a"),s=r("241c").f,i=r("f36a"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return s(e)}catch(t){return i(a)}};e.exports.f=function(e){return a&&"Window"==o(e)?c(e):s(n(e))}},"064a":function(e,t,r){"use strict";r("663a")},"24e6":function(e,t,r){"use strict";r("2be3")},"2be3":function(e,t,r){},"428f":function(e,t,r){var o=r("da84");e.exports=o},"4df4":function(e,t,r){"use strict";var o=r("da84"),n=r("0366"),s=r("c65b"),i=r("7b0b"),a=r("9bdd"),c=r("e95a"),f=r("68ee"),u=r("07fa"),l=r("8418"),d=r("9a1f"),h=r("35a1"),p=o.Array;e.exports=function(e){var t=i(e),r=f(this),o=arguments.length,v=o>1?arguments[1]:void 0,m=void 0!==v;m&&(v=n(v,o>2?arguments[2]:void 0));var b,g,y,w,Y,S,T=h(t),x=0;if(!T||this==p&&c(T))for(b=u(t),g=r?new this(b):p(b);b>x;x++)S=m?v(t[x],x):t[x],l(g,x,S);else for(w=d(t,T),Y=w.next,g=r?new this:[];!(y=s(Y,w)).done;x++)S=m?a(w,v,[y.value,x],!0):y.value,l(g,x,S);return g.length=x,g}},5808:function(e,t,r){"use strict";r("f6b6")},"5cbe":function(e,t,r){e.exports=r.p+"img/recommend_bg.794b6628.jpg"},"663a":function(e,t,r){},"746f":function(e,t,r){var o=r("428f"),n=r("1a2d"),s=r("e538"),i=r("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});n(t,e)||i(t,e,{value:s.f(e)})}},8418:function(e,t,r){"use strict";var o=r("a04b"),n=r("9bf2"),s=r("5c6c");e.exports=function(e,t,r){var i=o(t);i in e?n.f(e,i,s(0,r)):e[i]=r}},"9bdd":function(e,t,r){var o=r("825a"),n=r("2a62");e.exports=function(e,t,r,s){try{return s?t(o(r)[0],r[1]):t(r)}catch(i){n(e,"throw",i)}}},a4d3:function(e,t,r){"use strict";var o=r("23e7"),n=r("da84"),s=r("d066"),i=r("2ba4"),a=r("c65b"),c=r("e330"),f=r("c430"),u=r("83ab"),l=r("4930"),d=r("d039"),h=r("1a2d"),p=r("e8b5"),v=r("1626"),m=r("861d"),b=r("3a9b"),g=r("d9b5"),y=r("825a"),w=r("7b0b"),Y=r("fc6a"),S=r("a04b"),T=r("577e"),x=r("5c6c"),$=r("7c73"),N=r("df75"),O=r("241c"),H=r("057f"),_=r("7418"),j=r("06cf"),k=r("9bf2"),I=r("d1e7"),M=r("f36a"),A=r("6eeb"),L=r("5692"),P=r("f772"),E=r("d012"),G=r("90e3"),B=r("b622"),C=r("e538"),V=r("746f"),F=r("d44e"),J=r("69f3"),R=r("b727").forEach,U=P("hidden"),D="Symbol",Q="prototype",W=B("toPrimitive"),q=J.set,z=J.getterFor(D),K=Object[Q],X=n.Symbol,Z=X&&X[Q],ee=n.TypeError,te=n.QObject,re=s("JSON","stringify"),oe=j.f,ne=k.f,se=H.f,ie=I.f,ae=c([].push),ce=L("symbols"),fe=L("op-symbols"),ue=L("string-to-symbol-registry"),le=L("symbol-to-string-registry"),de=L("wks"),he=!te||!te[Q]||!te[Q].findChild,pe=u&&d((function(){return 7!=$(ne({},"a",{get:function(){return ne(this,"a",{value:7}).a}})).a}))?function(e,t,r){var o=oe(K,t);o&&delete K[t],ne(e,t,r),o&&e!==K&&ne(K,t,o)}:ne,ve=function(e,t){var r=ce[e]=$(Z);return q(r,{type:D,tag:e,description:t}),u||(r.description=t),r},me=function(e,t,r){e===K&&me(fe,t,r),y(e);var o=S(t);return y(r),h(ce,o)?(r.enumerable?(h(e,U)&&e[U][o]&&(e[U][o]=!1),r=$(r,{enumerable:x(0,!1)})):(h(e,U)||ne(e,U,x(1,{})),e[U][o]=!0),pe(e,o,r)):ne(e,o,r)},be=function(e,t){y(e);var r=Y(t),o=N(r).concat(Se(r));return R(o,(function(t){u&&!a(ye,r,t)||me(e,t,r[t])})),e},ge=function(e,t){return void 0===t?$(e):be($(e),t)},ye=function(e){var t=S(e),r=a(ie,this,t);return!(this===K&&h(ce,t)&&!h(fe,t))&&(!(r||!h(this,t)||!h(ce,t)||h(this,U)&&this[U][t])||r)},we=function(e,t){var r=Y(e),o=S(t);if(r!==K||!h(ce,o)||h(fe,o)){var n=oe(r,o);return!n||!h(ce,o)||h(r,U)&&r[U][o]||(n.enumerable=!0),n}},Ye=function(e){var t=se(Y(e)),r=[];return R(t,(function(e){h(ce,e)||h(E,e)||ae(r,e)})),r},Se=function(e){var t=e===K,r=se(t?fe:Y(e)),o=[];return R(r,(function(e){!h(ce,e)||t&&!h(K,e)||ae(o,ce[e])})),o};if(l||(X=function(){if(b(Z,this))throw ee("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?T(arguments[0]):void 0,t=G(e),r=function(e){this===K&&a(r,fe,e),h(this,U)&&h(this[U],t)&&(this[U][t]=!1),pe(this,t,x(1,e))};return u&&he&&pe(K,t,{configurable:!0,set:r}),ve(t,e)},Z=X[Q],A(Z,"toString",(function(){return z(this).tag})),A(X,"withoutSetter",(function(e){return ve(G(e),e)})),I.f=ye,k.f=me,j.f=we,O.f=H.f=Ye,_.f=Se,C.f=function(e){return ve(B(e),e)},u&&(ne(Z,"description",{configurable:!0,get:function(){return z(this).description}}),f||A(K,"propertyIsEnumerable",ye,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:X}),R(N(de),(function(e){V(e)})),o({target:D,stat:!0,forced:!l},{for:function(e){var t=T(e);if(h(ue,t))return ue[t];var r=X(t);return ue[t]=r,le[r]=t,r},keyFor:function(e){if(!g(e))throw ee(e+" is not a symbol");if(h(le,e))return le[e]},useSetter:function(){he=!0},useSimple:function(){he=!1}}),o({target:"Object",stat:!0,forced:!l,sham:!u},{create:ge,defineProperty:me,defineProperties:be,getOwnPropertyDescriptor:we}),o({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:Ye,getOwnPropertySymbols:Se}),o({target:"Object",stat:!0,forced:d((function(){_.f(1)}))},{getOwnPropertySymbols:function(e){return _.f(w(e))}}),re){var Te=!l||d((function(){var e=X();return"[null]"!=re([e])||"{}"!=re({a:e})||"{}"!=re(Object(e))}));o({target:"JSON",stat:!0,forced:Te},{stringify:function(e,t,r){var o=M(arguments),n=t;if((m(t)||void 0!==e)&&!g(e))return p(t)||(t=function(e,t){if(v(n)&&(t=a(n,this,e,t)),!g(t))return t}),o[1]=t,i(re,null,o)}})}if(!Z[W]){var xe=Z.valueOf;A(Z,W,(function(e){return a(xe,this)}))}F(X,D),E[U]=!0},a630:function(e,t,r){var o=r("23e7"),n=r("4df4"),s=r("1c7e"),i=!s((function(e){Array.from(e)}));o({target:"Array",stat:!0,forced:i},{from:n})},b046:function(e,t,r){"use strict";r("ff4a")},b3d7:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("NavBar",{ref:"navBar",staticClass:"home-nav",scopedSlots:e._u([{key:"center",fn:function(){return[e._v("购物街")]},proxy:!0}])}),r("HoverNav",{directives:[{name:"show",rawName:"v-show",value:e.isShowHoverNav,expression:"isShowHoverNav"}],ref:"hoverNav1",attrs:{titles:["流行","新款","精选"]},on:{changeType:e.changeType}}),r("Scroll",{ref:"scroll",class:{content:!e.isShowHoverNav,"content-change":e.isShowHoverNav},attrs:{probeType:3,pullUpLoad:!0},on:{scroll:e.scroll,pullingUp:e.loadMore}},[r("HomeSwiper",{attrs:{banners:e.banners},on:{swiperImageLoad:e.swiperImageLoad}}),r("RecommendView",{ref:"recommend",attrs:{recommends:e.recommends}}),r("FeatureView"),r("HoverNav",{directives:[{name:"show",rawName:"v-show",value:!e.isShowHoverNav,expression:"!isShowHoverNav"}],ref:"hoverNav2",attrs:{titles:["流行","新款","精选"]},on:{changeType:e.changeType}}),r("GoodsList",{attrs:{goods:e.showGoods}})],1),r("BackTop",{directives:[{name:"show",rawName:"v-show",value:e.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(t){return e.backTop.apply(null,arguments)}}})],1)},n=[];function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function i(e){if(Array.isArray(e))return s(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function c(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return i(e)||a(e)||c(e)||f()}var l=r("90b9"),d=r("eecb"),h=r("a7ac"),p=r("5d17"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hover-nav"},e._l(e.titles,(function(t,o){return r("div",{on:{click:function(t){return e.active(o)}}},[r("span",{class:{active:e.currentIndex===o}},[e._v(e._s(t))])])})),0)},m=[],b={name:"HoverNav",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{active:function(e){this.currentIndex=e,this.$emit("changeType",e)}}},g=b,y=(r("5808"),r("2877")),w=Object(y["a"])(g,v,m,!1,null,"17df0a9b",null),Y=w.exports,S=r("6d71"),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Swiper",e._l(e.banners,(function(t){return r("SwiperItem",[r("a",{attrs:{href:t.link}},[r("img",{attrs:{src:t.image,alt:""},on:{load:e.imageLoad}})])])})),1)},x=[],$=r("dc2c"),N={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},components:{Swiper:$["a"],SwiperItem:$["b"]},data:function(){return{isLoad:!1}},methods:{imageLoad:function(){this.swiperImageLoad("swiperImageLoad")}},mounted:function(){this.swiperImageLoad=Object(l["a"])(this.$emit,100)}},O=N,H=Object(y["a"])(O,T,x,!1,null,"da502c5a",null),_=H.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"recommend"},e._l(e.recommends,(function(t){return r("div",{staticClass:"recommend-item"},[r("a",{attrs:{href:t.link}},[r("img",{attrs:{src:t.image,alt:""}}),r("div",[e._v(e._s(t.title))])])])})),0)},k=[],I={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},M=I,A=(r("b046"),Object(y["a"])(M,j,k,!1,null,"3190eeba",null)),L=A.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"feature"},[o("a",{attrs:{href:""}},[o("img",{attrs:{src:r("5cbe"),alt:""}})])])}],G={name:"FeatureView"},B=G,C=(r("064a"),Object(y["a"])(B,P,E,!1,null,null,null)),V=C.exports,F=r("1bab");function J(){return Object(F["a"])({url:"/home/multidata"})}function R(e,t){return Object(F["a"])({url:"/home/data",params:{type:e,page:t}})}var U={name:"Home",components:{NavBar:h["a"],HomeSwiper:_,RecommendView:L,FeatureView:V,HoverNav:Y,GoodsList:S["a"],Scroll:p["a"]},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",previousType:"pop",isShowHoverNav:!1,timer:null,hoverNavoffsetTop:null,saveY:0,goodsY:{popY:0,popMaxY:0,newY:0,newMaxY:0,sellY:0,sellMaxY:0}}},mixins:[d["a"]],computed:{showGoods:function(){return this.goods[this.currentType].list}},methods:{changeType:function(e){this.$refs.scroll.refresh();var t=this.$refs.scroll.scroll.y,r=this.$refs.scroll.scroll.maxScrollY;switch(this.changeTypePos(t,r),e){case 0:this.currentType="pop",this.previousType=this.currentType,this.$refs.scroll.scroll.maxScrollY=this.goodsY.popMaxY,this.$refs.scroll.scrollTo(0,this.goodsY.popY,0);break;case 1:this.currentType="new",this.previousType=this.currentType,this.$refs.scroll.scroll.maxScrollY=this.goodsY.newMaxY,this.$refs.scroll.scrollTo(0,this.goodsY.newY,0);break;case 2:this.currentType="sell",this.previousType=this.currentType,this.$refs.scroll.scroll.maxScrollY=this.goodsY.sellMaxY,this.$refs.scroll.scrollTo(0,this.goodsY.sellY,0);break}this.$refs.hoverNav1.currentIndex=e,this.$refs.hoverNav2.currentIndex=e},changeTypePos:function(e,t){switch(this.previousType){case"pop":this.goodsY.popMaxY=t,this.goodsY.popY=e;break;case"new":this.goodsY.newMaxY=t,this.goodsY.newY=e;break;case"sell":this.goodsY.sellMaxY=t,this.goodsY.sellY=e;break}},scroll:function(e){this.isShowBackTop=-e.y>1e3,this.isShowHoverNav=-e.y>this.hoverNavoffsetTop-this.$refs.navBar.$el.offsetHeight},loadMore:function(){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){console.log("加载更多"),e.getHomeGoods(e.currentType)}),1e3)},swiperImageLoad:function(){this.hoverNavoffsetTop=this.$refs.hoverNav2.$el.offsetTop,this.goodsY.popY=-this.hoverNavoffsetTop,this.goodsY.newY=-this.hoverNavoffsetTop,this.goodsY.sellY=-this.hoverNavoffsetTop},getHomeMultidata:function(){var e=this;J().then((function(t){e.banners=t.data.banner.list,e.recommends=t.data.recommend.list}))},getHomeGoods:function(e){var t=this,r=this.goods[e].page+1;R(e,r).then((function(o){var n;(n=t.goods[e].list).push.apply(n,u(o.data.list)),t.goods[e].page=r}))}},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){var e=this;this.$root.$once("initMaxY",(function(t){e.goodsY.popMaxY=t,e.goodsY.newMaxY=t,e.goodsY.sellMaxY=t}))},activated:function(){this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,this.saveY,0);var e=Object(l["a"])(this.$refs.scroll.refresh,200);this.$root.$on("goodsImageLoad",(function(){e()}))},deactivated:function(){this.saveY=this.$refs.scroll.scroll.y,this.$root.$off("goodsImageLoad")},beforeDestroy:function(){}},D=U,Q=(r("24e6"),Object(y["a"])(D,o,n,!1,null,"577fd440",null));t["default"]=Q.exports},d28b:function(e,t,r){var o=r("746f");o("iterator")},e01a:function(e,t,r){"use strict";var o=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),a=r("1a2d"),c=r("1626"),f=r("3a9b"),u=r("577e"),l=r("9bf2").f,d=r("e893"),h=s.Symbol,p=h&&h.prototype;if(n&&c(h)&&(!("description"in p)||void 0!==h().description)){var v={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=f(p,this)?new h(e):void 0===e?h():h(e);return""===e&&(v[t]=!0),t};d(m,h),m.prototype=p,p.constructor=m;var b="Symbol(test)"==String(h("test")),g=i(p.toString),y=i(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,Y=i("".replace),S=i("".slice);l(p,"description",{configurable:!0,get:function(){var e=y(this),t=g(e);if(a(v,e))return"";var r=b?S(t,7,-1):Y(t,w,"$1");return""===r?void 0:r}}),o({global:!0,forced:!0},{Symbol:m})}},e538:function(e,t,r){var o=r("b622");t.f=o},f6b6:function(e,t,r){},fb6a:function(e,t,r){"use strict";var o=r("23e7"),n=r("da84"),s=r("e8b5"),i=r("68ee"),a=r("861d"),c=r("23cb"),f=r("07fa"),u=r("fc6a"),l=r("8418"),d=r("b622"),h=r("1dde"),p=r("f36a"),v=h("slice"),m=d("species"),b=n.Array,g=Math.max;o({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var r,o,n,d=u(this),h=f(d),v=c(e,h),y=c(void 0===t?h:t,h);if(s(d)&&(r=d.constructor,i(r)&&(r===b||s(r.prototype))?r=void 0:a(r)&&(r=r[m],null===r&&(r=void 0)),r===b||void 0===r))return p(d,v,y);for(o=new(void 0===r?b:r)(g(y-v,0)),n=0;v<y;v++,n++)v in d&&l(o,n,d[v]);return o.length=n,o}})},ff4a:function(e,t,r){}}]);
//# sourceMappingURL=chunk-55ac6f0c.3834cca9.js.map