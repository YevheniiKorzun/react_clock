(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),l=n(4),s=n(1),h=n.n(s),d=n(0),u=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={date:new Date},t.timerId=void 0,t.clockMethod=function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timerId=setInterval(this.clockMethod,1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:this.state.date.toLocaleTimeString()}),Object(d.jsx)("p",{children:"Name: ".concat(this.props.name)})]})}}]),n}(h.a.Component),m=(n(13),function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:0},t.setClockNameHandler=function(){t.setState({clockName:Math.floor(100*Math.random())})},t.showClockHandler=function(){t.setState({isClockVisible:!0})},t.hideClockHandler=function(){t.setState({isClockVisible:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)("button",{type:"button",onClick:this.showClockHandler,children:"Show Clock"}),Object(d.jsx)("button",{type:"button",onClick:this.hideClockHandler,children:"Hide Clock"}),Object(d.jsx)("button",{type:"button",onClick:this.setClockNameHandler,children:"Set random name"}),Object(d.jsx)("p",{children:"Current time:"}),this.state.isClockVisible&&Object(d.jsx)(u,{name:this.state.clockName})]})}}]),n}(h.a.Component)),b=m;o.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b3699aa1.chunk.js.map