(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__2L4gO",input:"Filter_input__w4peb"}},13:function(t,e,n){t.exports={container:"Container_container__2Szp6"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1juBs",label:"ContactForm_label__2K4BM",input:"ContactForm_input__ytC-X",button:"ContactForm_button__1v3S_"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(20),n(15)),s=n(5),l=n(6),u=n(8),b=n(7),m=n(3),h=n.n(m),d=n(13),j=n.n(d),f=n(0);var p=function(t){var e=t.children;return Object(f.jsx)("div",{className:j.a.container,children:e})},C=n(14),O=n(2),g=n.n(O),v={name:"",number:""},_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=v,t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){return t.setState(v)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.form,children:[Object(f.jsxs)("label",{className:g.a.label,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange,className:g.a.input})]}),Object(f.jsxs)("label",{className:g.a.label,children:["Number",Object(f.jsx)("input",{type:"number",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleChange,className:g.a.input})]}),Object(f.jsx)("button",{type:"submit",className:g.a.button,children:"Add contact"})]})}}]),n}(a.Component),x=n(9),S=n.n(x),y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:S.a.item,children:[Object(f.jsxs)("p",{children:[a,": ",c]}),Object(f.jsx)("button",{type:"button",className:S.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},F=n(11),N=n.n(F),w=function(t){var e=t.filter,n=t.onChange;return Object(f.jsxs)("label",{className:N.a.label,children:["Find contact by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n,placeholder:"Enter name for search",className:N.a.input})]})},k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:h.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:h.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:h.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:h.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:h.a.generate(),name:n,number:a};c.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("Contact is already exists!"):n&&a?t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}})):alert("The field cannot be empty!")},t.handleChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.handleDeleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(f.jsxs)("div",{children:[Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(_,{onSubmit:this.handleAddContact})]}),Object(f.jsxs)(p,{children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(w,{filter:e,onChange:this.handleChangeFilter}),Object(f.jsx)(y,{contacts:t,onDeleteContact:this.handleDeleteContact})]})]})}}]),n}(a.Component),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),L()},9:function(t,e,n){t.exports={list:"ContactList_list__2USXK",item:"ContactList_item__2AB8F",button:"ContactList_button__1d6YH"}}},[[30,1,2]]]);
//# sourceMappingURL=main.527e6898.chunk.js.map