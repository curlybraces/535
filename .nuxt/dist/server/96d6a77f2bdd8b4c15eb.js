exports.ids=[5],exports.modules={148:function(t,e,r){"use strict";var n=r(1),o=r(0),c=r.n(o);e.a=c.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(n.a)(this.height),r=Object(n.a)(this.minHeight),o=Object(n.a)(this.minWidth),c=Object(n.a)(this.maxHeight),l=Object(n.a)(this.maxWidth),d=Object(n.a)(this.width);return e&&(t.height=e),r&&(t.minHeight=r),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},149:function(t,e,r){"use strict";r(150),r(152);var n=r(9),o=r(0);var c=r.n(o).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,r=!0,e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t):{};var t,e,r}}}),l=r(148),d=r(8),h=r(3),v=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},m=Object(h.a)(n.a,c,l.a,d.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return v({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),f=r(22),y=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(h.a)(f.a,m).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return y({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},m.options.computed.classes.call(this))},styles:function(){var style=y({},m.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),r=e.tag,data=e.data;return data.style=this.styles,t(r,this.setBackgroundColor(this.color,data),this.$slots.default)}})},150:function(t,e,r){var content=r(151);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("be70614c",content,!0)},151:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}",""])},152:function(t,e,r){var content=r(153);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("74d835da",content,!0)},153:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}",""])},154:function(t,e,r){var content=r(155);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("5470a08c",content,!0)},155:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""])},156:function(t,e,r){var content=r(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(6).default("27f0eb42",content,!0)},157:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.v-responsive__content{flex:1 0 0px}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}",""])},158:function(t,e,r){"use strict";r(154),r(156);var n=r(148),o=r(3),c=Object(o.a)(n.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=r(7);e.a=c.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(l.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(l.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?t.calculatedAspectRatio=o/n:null!=e&&setTimeout(r,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},168:function(t,e,r){"use strict";var n=r(1),o=r(149),c=r(158),l=r(7),d=c.a.extend({name:"v-card-media",mounted:function(){Object(l.c)("v-card-media",this.src?"v-img":"v-responsive",this)}}),h=r(0),v=r.n(h).a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}});r.d(e,"a",function(){return f});var m=Object(n.c)("v-card__actions"),f=Object(n.c)("v-card__text");o.a},200:function(t,e,r){"use strict";var n=r(0),o=r.n(n).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var n=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},n)}}}),c=r(13),l=r(3),d=r(7);e.a=Object(l.a)(o,c.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(d.b)("v-hover is missing a default scopedSlot or bound value",this),null;var element=void 0;return this.$scopedSlots.default?element=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(element=this.$slots.default[0]),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(d.b)("v-hover should only contain a single element",this),element)}})},222:function(t,e,r){"use strict";r.r(e);var n=r(143),o=r.n(n);r(56);const c=process.env.API_URL||"http://sesbackend.thenameisvery.com",l=new o.a(c);var d={data:()=>({query:""}),computed:{careers(){return this.$store.getters["careers/list"]}},async fetch({store:t}){t.commit("careers/emptyList"),(await l.request("post","/graphql",{data:{query:"query {\n            careers {\n              id\n              title\n              content\n            }\n          }\n          "}})).data.careers.forEach(e=>{t.commit("careers/add",{id:e.id,...e})})}},h=r(4),v=r(10),m=r.n(v),f=r(149),y=r(168),_=r(45),x=r(75),S=r(200),z=r(47),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="slide ses_coverpage text-xs-center">',"</div>",[r("v-container",{attrs:{id:"scroll-target"}},[r("v-layout",{attrs:{column:"","pl-5":"","pr-5":""}},[r("h1",{staticClass:"pb-3"},[t._v("Carrers")]),t._v(" "),t._l(t.careers,function(e){return r("div",{key:e.id},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return r("v-card",t._g({staticClass:"mb-5",attrs:{color:"grey lighten-4","max-width":"500"}},t.on),[r("v-expand-transition",[o?r("nuxt-link",{staticClass:"d-flex transition-fast-in-fast-out green darken-2 v-card--reveal title white--text",staticStyle:{height:"100%"},attrs:{to:/carrer/+t.carrer.id,tag:"a"}},[t._v("\n                      Read More\n                    ")]):t._e()],1),t._v(" "),r("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[r("h3",{staticClass:"title font-weight-bold green--text mb-2"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"font-weight-light grey--text subtitle mb-2"},[t._v("South-East Asia's Most Energy Efficient Building")])])],1)}}],null,!0)})],1)})],2)],1)],1)])},[],!1,null,null,"4f682c1b");e.default=component.exports;m()(component,{VCard:f.a,VCardText:y.a,VContainer:_.a,VExpandTransition:x.a,VHover:S.a,VLayout:z.a})}};
//# sourceMappingURL=96d6a77f2bdd8b4c15eb.js.map