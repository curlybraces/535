exports.ids=[10],exports.modules={226:function(t,e,o){"use strict";o.r(e);var r=o(143),n=o.n(r),l=(o(56),o(144)),c=o.n(l);const v=process.env.API_URL||"http://sesbackend.thenameisvery.com";new n.a(v);var f={apollo:{portfolios:{query:c.a`
  query allPortfolios {
    portfolios {
      id
      title
      subtitle
      content
      feature
      thumbnail {
        url
      }
    }
  }
`}}},x=o(4),m=o(10),h=o.n(m),_=o(45),d=o(46),y=o(47),component=Object(x.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("v-layout",{attrs:{column:""}},[o("v-flex",{attrs:{"text-xs-center":""}},[o("img",{attrs:{width:"150",src:"http://sesbackend.thenameisvery.com"+t.portfolio.thumbnail.url}})]),t._v(" "),o("v-flex",{attrs:{"text-xs-center":""}},[o("h2",[t._v(t._s(t.portfolio.title))])]),t._v(" "),o("v-flex",[t._v("\n        "+t._s(t.portfolio.content)+"\n      ")])],1)],1)],1)},[],!1,null,null,"58a38ec9");e.default=component.exports;h()(component,{VContainer:_.a,VFlex:d.a,VLayout:y.a})}};
//# sourceMappingURL=56bf653c90165b3e7c33.js.map