(this["webpackJsonpcar-wash-calendar"]=this["webpackJsonpcar-wash-calendar"]||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var d=t(2),c=t(4),r=(t(13),t(1)),s=t.n(r),n=t(0);function i(){for(var e=s()().startOf("week"),a=s()().add(1,"month"),t={date:s()("2022-12-26"),peopleIndex:0},d=["Henry","Ken","Leo","Yogurt","Nana"],c=[],r=[];e.isBefore(s()(a));){var i=e.add(1,"days"),j={date:i.format("YYYY-MM-DD"),dayISO:i.format("ddd"),day:i.day(),people:d[i.diff(t.date,"day")%5]};r.push(j),0===j.day&&(c.push(r),r=[])}return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:c.map((function(e){return Object(n.jsx)("tr",{children:e.map((function(e){return Object(n.jsx)("td",{className:s()(e.date).isSame(s()(),"day")?"active":"",children:Object(n.jsxs)("div",{className:"day",children:[Object(n.jsxs)("div",{className:"header",children:[e.date,Object(n.jsx)("br",{}),e.dayISO]}),Object(n.jsx)("div",{className:"people",children:Object(n.jsx)("b",{children:e.people})})]})})}))})}))})})})}var j=document.getElementById("root");Object(c.createRoot)(j).render(Object(n.jsx)(d.StrictMode,{children:Object(n.jsx)(i,{})}))}},[[16,1,2]]]);
//# sourceMappingURL=main.00cdfb3b.chunk.js.map