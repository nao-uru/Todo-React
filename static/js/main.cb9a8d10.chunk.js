(this["webpackJsonpreact-blog-app"]=this["webpackJsonpreact-blog-app"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(7),o=a.n(s),r=(a(12),a(4)),i=a(5),l=a(0),u=function(e){var t=e.addTask,a=e.inputValue,n=e.onChange;return Object(l.jsx)("div",{className:"input-area",children:Object(l.jsx)("form",{id:"add-form",method:"get",children:Object(l.jsx)("input",{id:"add-input",placeholder:"New Task",type:"text",autoComplete:"off",onKeyPress:t,value:a,onChange:n})})})},j=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(""),j=Object(i.a)(o,2),d=j[0],p=j[1],h=Object(n.useState)(["Task1","Task2","React"]),b=Object(i.a)(h,2),f=b[0],O=b[1],m=[].concat(Object(r.a)(f),[c]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Todo List"}),Object(l.jsx)("p",{className:"content",children:"ADD TASK"}),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(u,{addTask:function(e){if("Enter"===e.key){if(console.log("add task"),e.preventDefault(),""===c)return;O(m),s(""),console.log("New task is "+c)}},inputValue:c,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("div",{className:"input-area",children:Object(l.jsx)("form",{id:"search-form",children:Object(l.jsx)("input",{id:"search-input",type:"text",placeholder:"Search Keyword",autoComplete:"off",onChange:function(e){p((function(){return e.target.value})),console.log(d),m.map((function(e){return!1!==e.startsWith(d)?(console.log(e),console.log(d)):console.log("no here"),d}))},value:d})})}),Object(l.jsx)("div",{className:"task-area",children:Object(l.jsx)("ul",{id:"task-area-list",children:f.map((function(e,t){return Object(l.jsxs)("li",{className:"task-area-list",children:[Object(l.jsx)("input",{type:"text",defaultValue:e,className:!1===e?"task-done":"task",onClick:function(){return function(e){var t=Object(r.a)(f);t.map((function(e){return console.log("hellofalse"),!1})),O(t)}()}}),Object(l.jsx)("i",{className:"fa fa-trash",onClick:function(){return function(e){var t=Object(r.a)(f);!0===window.confirm("todo\u3092\u524a\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304b\uff1f")&&(t.splice(e,1),O(t))}(t)}})]},t)}))})}),Object(l.jsx)("p",{className:"link",children:Object(l.jsx)("a",{href:"https://nao-uru.github.io/Todo-Js/",children:"JavaScripc Only"})})]})]})};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cb9a8d10.chunk.js.map