(this.webpackJsonpfunnyquotes=this.webpackJsonpfunnyquotes||[]).push([[0],{71:function(e,t,n){e.exports=n(98)},76:function(e,t,n){},80:function(e,t){},81:function(e,t){},92:function(e,t){},95:function(e,t){},96:function(e,t){},97:function(e){e.exports=JSON.parse("{}")},98:function(e,t,n){"use strict";n.r(t);var a=n(22),o=n(4),r=n(9),u=n(12),c=n(13),i=n(25),l=n.n(i),s=n(50),f=n.n(s);n(76),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=n(44),h=(n(97),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.title="funnyquotes"}},{key:"render",value:function(){return null}}]),n}(l.a.Component)),d=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={quote:"Click the button to generate a quote!"},r.generate_quote=r.generate_quote.bind(Object(a.a)(r)),r}return Object(r.a)(n,[{key:"swap",value:function(e){var t={};for(var n in e)t[e[n]]=n;return t}},{key:"generate_quote",value:function(){for(var e,t,n,a=m.a([20],0),o=[],r=0;r<1e3&&(e=this.model.predict(a),e=m.c(e,0),t=m.b(e,1).arraySync()[0],a=m.a(t,0),n=this.seq2word[t[0]],o.push(n),"."!==n);r++);o=o.join(""),this.setState((function(e){return{quote:o}}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"textbox"},this.state.quote))}}]),n}(l.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("h2",null,"FunnyQuotes"),l.a.createElement("h4",null,"Yeah we need a better title"),l.a.createElement(d,null))}}]),n}(l.a.Component);f.a.render(l.a.createElement(h,null),document.getElementById("root")),f.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.ba7be1ce.chunk.js.map