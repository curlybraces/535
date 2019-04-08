exports.ids=[14],exports.modules={230:function(e,l,t){"use strict";t.r(l);var r=t(144),n=t.n(r);var o={data:()=>({}),apollo:{blogs:{query:n.a`
  query allBlogs {
    blogs {
      id
      title
      content
    }
  }
`,loadingKey:"loading"},careers:{query:n.a`
  query allCareers {
    careers {
      id
      title
    }
  }
`,loadingKey:"loading"}}},c=t(4),component=Object(c.a)(o,function(){var e=this,l=e.$createElement;return(e._self._c||l)("div",{staticClass:"post-list"},[e._ssrNode(e.loading>0?"\n    Loading\n  ":"<ul>"+e._ssrList(e.blogs,function(l){return"<li>"+e._ssrEscape("\n        "+e._s(l.title)+"\n      ")+"</li>"})+"</ul> <ul>"+e._ssrList(e.careers,function(l){return"<li>"+e._ssrEscape("\n        "+e._s(l.title)+"\n      ")+"</li>"})+"</ul>")])},[],!1,null,null,"1eb2d63a");l.default=component.exports}};
//# sourceMappingURL=c98029d2511c9af3eb64.js.map