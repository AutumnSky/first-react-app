(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(13),n(1)),s=n(2),u=n(4),l=n(3),m=n(5),h=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.onCreate},r.a.createElement("input",{placeholder:"Input here!",value:this.props.currentItem.text,onChange:this.props.onInputChange}),r.a.createElement("button",{type:"submit"},"+"))}}]),e}(a.Component),p=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.props.itemList.map(function(e){return r.a.createElement("li",{key:e.id,id:e.id,className:!0===e.done?"checked":"not-checked",onClick:t.props.toggleState},e.text)});return r.a.createElement("ul",{className:"todo-item-list"},e)}}]),e}(a.Component),d=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).id=0,n.state={currentItem:{text:"",done:!1},itemList:[]},n.onCreate=function(t){t.preventDefault();var e=n.state,a=e.currentItem,r=e.itemList;n.setState({currentItem:{text:"",done:!1},itemList:r.concat({id:n.id+=1,text:a.text,done:a.done})})},n.onInputChange=function(t){n.setState({currentItem:{text:t.target.value,done:n.state.currentItem.done}})},n.toggleState=function(t){var e=t.target.id-1,a=n.state.itemList,r=!a[e].done;a[e].done=r,n.setState({itemList:a})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"todo-list"},r.a.createElement(h,{onCreate:this.onCreate,onInputChange:this.onInputChange,currentItem:this.state.currentItem}),r.a.createElement(p,{toggleState:this.toggleState,itemList:this.state.itemList}))}}]),e}(a.Component),b=(n(15),function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(d,null)}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.6267b87b.chunk.js.map