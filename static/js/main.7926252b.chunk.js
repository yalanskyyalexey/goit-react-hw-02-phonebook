(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__2nAR3",label:"ContactForm_label__sQwA8",text:"ContactForm_text__Kij7E",form__btn:"ContactForm_form__btn__357It"}},function(t,e,n){t.exports={list:"ContactList_list__1bpTi",items:"ContactList_items__b9NBt",text:"ContactList_text__3g55T",delete_btn:"ContactList_delete_btn__dVCGF"}},,,,,,function(t,e,n){t.exports={filter:"Filter_filter__qeN7P",filter__input:"Filter_filter__input__YqG9C"}},,function(t,e,n){t.exports={appWrapper:"App_appWrapper__ZHJML"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),i=(n(19),n(14)),o=n(4),l=n(5),u=n(7),b=n(6),m=n(11),j=n.n(m),h=n(12),d=n(2),f=n.n(d),p=n(0),_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(h.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;t.reset(),t.props.onSubmit(a,r)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsxs)("label",{className:f.a.label,children:[Object(p.jsx)("span",{className:f.a.text,children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:f.a.label,children:[Object(p.jsx)("span",{className:f.a.text,children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{className:f.a.form__btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=_,O=n(3),C=n.n(O),v=function(t){var e=t.contacts,n=t.onDelete;return Object(p.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(p.jsxs)("li",{className:C.a.items,children:[Object(p.jsxs)("p",{className:C.a.text,children:[e,": ",a]}),Object(p.jsx)("button",{className:C.a.delete_btn,type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})},g=n(23),N=n(9),S=n.n(N),y=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:S.a.filter,children:[Object(p.jsx)("span",{children:"Find contacts by name"}),Object(p.jsx)("input",{className:S.a.filter__input,type:"text",value:e,onChange:n})]})},w=n(13),F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:w,filter:""},t.formSubmitHandler=function(e,n,a){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return alert("Contact is already exist"),void a();var r={id:Object(g.a)(),name:e,number:n};t.setState((function(e){return t.reset(),{contacts:[].concat(Object(i.a)(e.contacts),[r])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.visibleContacts();return Object(p.jsxs)("div",{className:j.a.appWrapper,children:[Object(p.jsx)(x,{onSubmit:this.formSubmitHandler}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(y,{value:t,onChange:this.changeFilter}),Object(p.jsx)(v,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(a.Component),L=F;s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.7926252b.chunk.js.map