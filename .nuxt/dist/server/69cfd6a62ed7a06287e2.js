exports.ids=[2],exports.modules={232:function(e,t,r){"use strict";r.r(t);var n=r(143),o=r.n(n),c=r(56),d=r.n(c);const l=process.env.API_URL||"http://sesbackend.thenameisvery.com";new o.a(l);var m={computed:{body(){return marked(this.blog.content)}},asyncData:async({params:e,error:t})=>({blog:await d.a.get(`${l}/blogs/${e.id}`).then(e=>e.data).catch(e=>{t({statusCode:404,message:"Posts not found"})})})},h=r(4),component=Object(h.a)(m,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._ssrNode('<img width="100%"'+e._ssrAttr("src","http://sesbackend.thenameisvery.com"+e.blog.image.url)+"> <h2>"+e._ssrEscape(e._s(e.blog.title))+"</h2> <div>"+e._ssrEscape(" "+e._s(e.blog.content))+"</div>")])},[],!1,null,null,"72f19432");t.default=component.exports}};
//# sourceMappingURL=69cfd6a62ed7a06287e2.js.map