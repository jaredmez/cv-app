(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),a=c(6),s=c.n(a),i=(c(15),c(16),c(3)),r=c(4),b=c(2),o=c(0);var l=function(){var e=Object(n.useState)({position:"",company:"",city:"",from:"",to:"",isEdit:!0}),t=Object(i.a)(e,2),c=t[0],j=t[1],a=function(e){j(Object(b.a)(Object(b.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))},s=function(e){e.preventDefault(),j(Object(b.a)(Object(b.a)({},c),{},{isEdit:!c.isEdit}))};return c.isEdit?Object(o.jsxs)("form",{id:"experience-form",onSubmit:s,children:[Object(o.jsx)("input",{type:"text",name:"position",placeholder:"Position",value:c.position,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"company",placeholder:"Company",value:c.company,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"city",placeholder:"City",value:c.city,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"from",placeholder:"From",value:c.from,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"to",placeholder:"To",value:c.to,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{children:"Save"})]}):Object(o.jsxs)("div",{id:"workExp-input",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Position:"}),"  ",c.position]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Company:"}),"  ",c.company]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"City:"}),"  ",c.city]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"From:"}),"  ",c.from]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"To:"}),"  ",c.to]}),Object(o.jsx)("button",{className:"edit-btn",onClick:s,children:"edit"})]})};var d=function(){for(var e=Object(n.useState)(1),t=Object(i.a)(e,2),c=t[0],j=t[1],a=[],s=0;s<c;s++)console.log(s),a.push(Object(o.jsx)(l,{}));return Object(o.jsxs)("div",{className:"experience-ctn",children:[Object(o.jsx)("h3",{children:"Experience"}),Object(o.jsx)("div",{children:a}),Object(o.jsxs)("div",{className:"exp-btns",children:[Object(o.jsx)("div",{id:"add-exp-btn",onClick:function(){j(c+1)},children:"+ add"}),Object(o.jsx)("div",{id:"del-exp-btn",onClick:function(){1!==c&&j(c-1)},children:"-delete"})]})]})};var O=function(){var e=Object(n.useState)({name:"",email:"",number:""}),t=Object(i.a)(e,2),c=t[0],j=t[1],a=Object(n.useState)(!0),s=Object(i.a)(a,2),l=s[0],d=s[1],O=function(e){j(Object(b.a)(Object(b.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))},p=function(e){e.preventDefault(),d(!l)};return l?Object(o.jsxs)("form",{id:"personal-form",onSubmit:p,children:[Object(o.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:c.name,onChange:O}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:c.email,onChange:O}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"number",placeholder:"Number",value:c.number,onChange:O}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{children:"Save"})]}):Object(o.jsxs)("div",{id:"personal-input",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Name:"}),"  ",c.name]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Email:"}),"  ",c.email]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Number:"}),"  ",c.number]}),Object(o.jsx)("button",{className:"edit-btn",onClick:p,children:"edit"})]})};var p=function(){return Object(o.jsxs)("div",{className:"personal-info-ctn",children:[Object(o.jsx)("h3",{children:"Personal Info:"}),Object(o.jsx)(O,{})]})},x=c(7),u=c(8),h=c(10),m=c(9);var v=function(){var e=Object(n.useState)({school:"",major:"",year:"",isEdit:!0}),t=Object(i.a)(e,2),c=t[0],j=t[1],a=function(e){j(Object(b.a)(Object(b.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))},s=function(e){e.preventDefault(),j(Object(b.a)(Object(b.a)({},c),{},{isEdit:!c.isEdit}))};return c.isEdit?Object(o.jsxs)("form",{id:"edu-form",onSubmit:s,children:[Object(o.jsx)("input",{type:"text",name:"school",placeholder:"School",value:c.school,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"major",placeholder:"Major",value:c.major,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"tel",name:"year",placeholder:"Year",value:c.year,onChange:a}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{children:"Save"})]}):Object(o.jsxs)("div",{id:"edu-input",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"School:"}),"  ",c.school]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Major:"}),"  ",c.major]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Year:"}),"  ",c.year]}),Object(o.jsx)("button",{className:"edit-btn",onClick:s,children:"edit"})]})},f=function(e){Object(h.a)(c,e);var t=Object(m.a)(c);function c(){return Object(x.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"edu-ctn",children:[Object(o.jsx)("h3",{children:"Education:"}),Object(o.jsx)(v,{})]})}}]),c}(j.a.Component),y=f;var C=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"cv-header",children:" Cover Letter App "}),Object(o.jsxs)("div",{className:"main-page-body",children:[Object(o.jsx)(p,{}),Object(o.jsx)(y,{}),Object(o.jsx)(d,{})]})]})};s.a.render(Object(o.jsx)(j.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2e5a4cf7.chunk.js.map