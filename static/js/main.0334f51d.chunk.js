(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{20:function(e,n,t){e.exports=t(33)},25:function(e,n,t){},26:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(17),s=t.n(r),i=(t(25),t(19)),l=(t(26),t(35)),c=t(27);var d=function(){var e=Object(a.useState)("# Welcome to my React Markdown Previewer!\n## This is a sub-heading...  \n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),n=Object(i.a)(e,2),t=n[0],r=n[1];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(l.a.Group,{controlId:"formBasicMarkdown"},o.a.createElement(l.a.Label,{className:"text"},"MarkDown Input"),o.a.createElement(l.a.Control,{as:"textarea",rows:"40",type:"text",placeholder:"Enter Markdown text",value:t,onChange:function(e){r(e.target.value)}}))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(l.a.Group,{controlId:"formBasicMarkOutput"},o.a.createElement(l.a.Label,{className:"text1"},"MarkDown Output"),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:c(t)}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.0334f51d.chunk.js.map