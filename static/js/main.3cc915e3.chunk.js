(this.webpackJsonpreact17=this.webpackJsonpreact17||[]).push([[0],{216:function(e,t,c){},217:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(27),l=c.n(r),o=c.p+"static/media/logo.6ce24c58.svg",s=c(53),j=c(20),a=c(12),d=c(13),h=c(16),b=c(17),u=c(22),O=c(121),p=c(104),x=c(122),w=c(4),m=p.a.Option,v=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={visible:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){e.setState({visible:!1})},e.handleCancel=function(t){e.setState({visible:!1})},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){console.log("react17 dialog mounted")}},{key:"render",value:function(){var e=Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:"Content"}),Object(w.jsx)("div",{children:"Content"})]});return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"\u5f39\u7a97\u5904\u7406"}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("p",{children:"\u5f39\u7a97\u65e0\u9700\u5b50\u5e94\u7528\u505a\u4efb\u4f55\u5904\u7406\u5c31\u53ef\u4f7f\u7528"}),Object(w.jsx)("h3",{children:"1\u3001\u6253\u5f00antd\u5f39\u7a97"}),Object(w.jsx)("p",{children:Object(w.jsx)(u.a,{onClick:this.showModal,children:"Open Modal"})}),Object(w.jsxs)(O.a,{title:"Basic Modal",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,children:[Object(w.jsx)("div",{children:"Some contents..."}),Object(w.jsx)("div",{children:"Some contents..."}),Object(w.jsx)("div",{children:"Some contents..."})]}),Object(w.jsx)("h3",{children:"2\u3001\u6253\u5f00antd\u9009\u62e9\u5668"}),Object(w.jsx)("div",{className:"p",children:Object(w.jsxs)(p.a,{showSearch:!0,style:{width:200},placeholder:"Select a person",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(w.jsx)(m,{value:"jack",children:"Jack"}),Object(w.jsx)(m,{value:"lucy",children:"Lucy"}),Object(w.jsx)(m,{value:"tom",children:"Tom"})]})}),Object(w.jsx)("h3",{children:"3\u3001\u6253\u5f00antd\u6c14\u6ce1\u5361\u7247"}),Object(w.jsx)("div",{className:"p",children:Object(w.jsx)(x.a,{content:e,title:"Title",trigger:"hover",children:Object(w.jsx)(u.a,{children:"Hover me"})})})]})]})}}]),c}(i.a.Component),f=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"handleClick",value:function(){var e;null!==(e=window.__WUJIE)&&void 0!==e&&e.degrade||!window.Proxy||!window.CustomElementRegistry?window.$wujie.location.href="https://xy.woa.com/xy/app/prod/portal/home":window.location.href="https://xy.woa.com/xy/app/prod/portal/home"}},{key:"componentDidMount",value:function(){console.log("react17 location mounted")}},{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"\u8def\u7531\u5904\u7406"}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("h3",{children:"1\u3001\u8def\u7531\u540c\u6b65"}),Object(w.jsx)("p",{children:"\u8def\u7531\u540c\u6b65\u610f\u5473\u7740\u6d4f\u89c8\u5668\u7684\u5237\u65b0\u3001\u524d\u8fdb\u3001\u540e\u9000\u90fd\u53ef\u4ee5\u4f5c\u7528\u5230\u5b50\u5e94\u7528\u4e0a"}),Object(w.jsx)("p",{children:"\u5b50\u5e94\u7528\u540c\u6b65\u8def\u7531\u5230\u4e3b\u5e94\u7528url\u7684query\u53c2\u6570\u4e0a\u4e14 key\u503c\u4e3a\u5b50\u5e94\u7528\u7684name"}),Object(w.jsx)("h3",{children:"2\u3001location\u52ab\u6301"}),Object(w.jsx)("p",{children:"\u5f53\u7528\u6237\u8bbf\u95eelocation\u6765\u83b7\u53d6\u5f53\u524d\u7684url\u65f6\uff0cwujie\u7edf\u4e00\u62e6\u622a\u5e76\u56de\u586b\u5b50\u5e94\u7528\u6b63\u786e\u7684\u5730\u5740"}),Object(w.jsx)("h3",{children:"3\u3001\u83b7\u53d6window.location.host\u7684\u503c"}),Object(w.jsx)("p",{children:window.location.host}),Object(w.jsx)("h3",{children:"4\u3001\u4fee\u6539window.location.href"}),Object(w.jsxs)("div",{className:"p",children:[Object(w.jsx)(u.a,{type:"warning",onClick:this.handleClick,children:"\u8df3\u8f6c\u65e0\u6781"}),Object(w.jsx)("p",{children:"\u5b50\u5e94\u7528\u4fee\u6539location.href\uff0c\u4f1a\u5c06\u5f53\u524d\u7684\u5b50\u5e94\u7528\u7684shadow\u5220\u9664\u5e76\u4e14\u66ff\u6362\u6210\u4e00\u4e2aiframe"}),Object(w.jsx)("p",{children:"\u5982\u679c\u5b50\u5e94\u7528\u914d\u7f6e\u8def\u7531\u540c\u6b65\uff0c\u6d4f\u89c8\u5668\u53ef\u901a\u8fc7\u56de\u9000\u56de\u5230\u5b50\u5e94\u7528"})]})]})]})}}]),c}(i.a.Component),k=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).jump=function(){window.$wujie&&window.$wujie.props.jump("vue3")},e.handleAlert=function(){window.parent&&window.parent.alert("\u4e3b\u5e94\u7528alert")},e.handleEmit=function(){window.$wujie&&window.$wujie.bus.$emit("click","react17")},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"\u901a\u4fe1\u5904\u7406"}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("p",{children:"\u5e94\u7528\u53ef\u4ee5\u6709\u4e09\u79cd\u65b9\u5f0f\u8fdb\u884c\u901a\u4fe1"}),Object(w.jsx)("h3",{children:"1\u3001\u4e3b\u5e94\u7528\u901a\u8fc7 props \u5c5e\u6027\u6ce8\u5165\u7684\u65b9\u6cd5"}),Object(w.jsx)("p",{children:"\u4e3b\u5e94\u7528\u901a\u8fc7 props \u6ce8\u5165 jump\uff08\u8df3\u8f6c\u9875\u9762\uff09\u65b9\u6cd5\uff0c\u5b50\u5e94\u7528\u901a\u8fc7 $wujie.props.jump(xxx) \u6765\u4f7f\u7528"}),Object(w.jsxs)("p",{children:[Object(w.jsx)(u.a,{onClick:this.jump,children:"\u70b9\u51fb\u8df3\u8f6cvue3"}),Object(w.jsx)(u.a,{className:"app-jump",onClick:function(){var e;return null===(e=window)||void 0===e?void 0:e.$wujie.props.jump("angular12")},children:"\u8df3\u8f6cangular"})]}),Object(w.jsx)("h3",{children:"2\u3001\u901a\u8fc7 window.parent \u65b9\u6cd5\u62ff\u5230\u4e3b\u5e94\u7528\u7684\u5168\u5c40\u65b9\u6cd5"}),Object(w.jsx)("p",{children:"\u5b50\u5e94\u7528\u8c03\u7528 window.parent.alert \u6765\u8c03\u7528\u4e3b\u5e94\u7528\u7684 alert\u65b9\u6cd5"}),Object(w.jsx)("p",{children:Object(w.jsx)(u.a,{onClick:this.handleAlert,children:"\u663e\u793aalert"})}),Object(w.jsx)("h3",{children:"3\u3001\u901a\u8fc7 bus \u65b9\u6cd5\u53d1\u9001\u53bb\u4e2d\u5fc3\u5316\u7684\u4e8b\u4ef6"}),Object(w.jsxs)("p",{children:['\u4e3b\u5e94\u7528 bus.$on("click", (msg) =',">"," window.alert(msg)) \u76d1\u542c\u5b50\u5e94\u7528\u7684 click \u4e8b\u4ef6"]}),Object(w.jsx)("p",{children:"\u5b50\u5e94\u7528\u70b9\u51fb\u6309\u94ae $wujie.bus.$emit('click', 'react17') \u53d1\u9001 click \u4e8b\u4ef6"}),Object(w.jsx)("p",{children:Object(w.jsx)(u.a,{onClick:this.handleEmit,children:"\u663e\u793aalert"})})]})]})}}]),c}(i.a.Component),g=(c(101),function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={count:10},e}return Object(d.a)(c,[{key:"handleClick",value:function(){window.location.href="https://xy.woa.com/xy/app/prod/portal/home"}},{key:"componentDidMount",value:function(){console.log("react17 state mounted")}},{key:"render",value:function(){var e=this;return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"\u5b50\u5e94\u7528\u4fdd\u6d3b"}),Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("p",{children:"\u8bbe\u7f6e\u4fdd\u6d3b\u6a21\u5f0f\uff0c\u5207\u6362\u5e94\u7528\u65f6\uff0c\u5b50\u5e94\u7528\u7684\u8def\u7531\u548cstate\u90fd\u53ef\u4ee5\u5f97\u5230\u4fdd\u7559"}),Object(w.jsx)("h3",{children:"1\u3001\u6539\u52a8\u5b9e\u4f8b\u7684\u72b6\u6001\uff0c\u5207\u6362\u5230vue\uff0c\u70b9\u51fb\u6309\u94ae\u518d\u56de\u6765\u770b\u770b"}),Object(w.jsxs)("p",{className:"number-content",children:[Object(w.jsx)(u.a,{onClick:function(){return e.setState((function(e){return{count:e.count-1}}))},children:"-"}),Object(w.jsx)("span",{className:"number",children:this.state.count}),Object(w.jsx)(u.a,{onClick:function(){return e.setState((function(e){return{count:e.count+1}}))},children:"+"}),Object(w.jsx)(u.a,{className:"app-jump",onClick:function(){var e,t;null===(e=window)||void 0===e||e.$wujie.bus.$emit("add"),null===(t=window)||void 0===t||t.$wujie.props.jump("vue3")},children:"vue3 state+1 \u8df3\u56de"})]})]})]})}}]),c}(i.a.Component)),y=c(105),C=(c(201),c(203),c(218),c(207),function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"react17\u793a\u4f8b"}),Object(w.jsxs)("p",{children:["\u5f53\u524dreact\u7248\u672c"," ",Object(w.jsx)(y.a,{style:{verticalAlign:"text-top"},color:"blue",children:"17.0.2"})]}),Object(w.jsxs)("p",{children:["\u5f53\u524dantd\u7248\u672c"," ",Object(w.jsx)(y.a,{style:{verticalAlign:"text-top"},color:"geekblue",children:"4.18.3"})]}),Object(w.jsx)("p",{children:Object(w.jsx)(u.a,{onClick:function(){return window.open("https://git.woa.com/wujie/wujie/tree/master/examples/react17")},children:"\u4ed3\u5e93\u5730\u5740"})})]})});var N=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)("header",{className:"App-header",children:Object(w.jsx)(s.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("nav",{children:[Object(w.jsx)(s.b,{to:"/home",children:"\u9996\u9875"})," | ",Object(w.jsx)(s.b,{to:"/dialog",children:"\u5f39\u7a97"})," |"," ",Object(w.jsx)(s.b,{to:"/location",children:"\u8def\u7531"})," | ",Object(w.jsx)(s.b,{to:"/communication",children:"\u901a\u4fe1"})," |"," ",Object(w.jsx)(s.b,{to:"/state",children:"\u72b6\u6001"})]}),Object(w.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{exact:!0,path:"/home",children:Object(w.jsx)(C,{})}),Object(w.jsx)(j.b,{path:"/dialog",children:Object(w.jsx)(v,{})}),Object(w.jsx)(j.b,{path:"/location",children:Object(w.jsx)(f,{})}),Object(w.jsx)(j.b,{path:"/communication",children:Object(w.jsx)(k,{})}),Object(w.jsx)(j.b,{path:"/state",children:Object(w.jsx)(g,{})}),Object(w.jsx)(j.b,{exact:!0,path:"/",children:Object(w.jsx)(j.a,{to:"/home"})})]})]})})})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,219)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),n(e),i(e),r(e),l(e)}))};c(216);l.a.render(Object(w.jsx)(N,{}),document.getElementById("root")),$()}},[[217,1,2]]]);
//# sourceMappingURL=main.3cc915e3.chunk.js.map