(this.webpackJsonpfood_pos=this.webpackJsonpfood_pos||[]).push([[0],Array(24).concat([function(e,t,c){},,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){var a={"./01.png":43,"./02.png":44,"./03.png":45,"./04.png":46,"./05.png":47,"./06.png":48,"./07.png":49,"./08.png":50,"./09.png":51,"./10.png":52,"./11.png":53,"./12.png":54,"./13.png":55,"./14.png":56,"./15.png":57};function n(e){var t=s(e);return c(t)}function s(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=42},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/01.c94b1a13.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/02.c94b1a13.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/03.c94b1a13.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/04.4d818e35.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/05.4d818e35.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/06.4d818e35.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/07.067c4276.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/08.067c4276.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/09.067c4276.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/10.a73a195c.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/11.a73a195c.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/12.a73a195c.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/13.fdcb05a3.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/14.fdcb05a3.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/15.fdcb05a3.png"},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(13),i=c.n(s),l=c(2),r=c(4),o=(c(24),c.p+"static/media/logo.ce7fdb1b.svg"),d=c(9),j=c(0);var u=function(){return Object(j.jsxs)("aside",{className:"main-sidebar",children:[Object(j.jsx)("nav",{className:"main-nav",children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)("span",{children:Object(j.jsx)("img",{src:o,className:"w-100"})})})})}),Object(j.jsx)("nav",{className:"main-nav",style:{marginBottom:"auto"},children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/",exact:!0,children:Object(j.jsx)("i",{className:"icon-Home"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/discount",children:Object(j.jsx)("i",{className:"icon-Discount"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/message",children:Object(j.jsx)("i",{className:"icon-Message"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/notification",children:Object(j.jsx)("i",{className:"icon-Notification"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/settings",children:Object(j.jsx)("i",{className:"icon-Setting"})})})]})}),Object(j.jsx)("nav",{className:"main-nav",children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"icon-Log-Out"})})})})})]})};var b=function(e){return Object(j.jsxs)("div",{className:"content-wrapper",children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"content",children:e.children})]})},m=(c(34),c(8)),O=(c(35),["label","color","theme","className","fullWidth","size","flat"]);function h(e){var t=e.label,c=void 0===t?e.children:t,a=e.color,n=void 0===a?"primary":a,s=e.theme,i=void 0===s?"default":s,r=e.className,o=void 0===r?"":r,d=e.fullWidth,u=e.size,b=e.flat,h=Object(m.a)(e,O),x="".concat(o," ").concat(d?"btn-block":""," ").concat(u?"btn-"+u:""," ").concat(b?"btn-flat":"");return Object(j.jsx)("button",Object(l.a)(Object(l.a)({className:"btn btn-".concat(i,"-").concat(n," ").concat(x)},h),{},{children:c}))}var x=c(14),p=Object(x.b)({name:"cart",initialState:{products:{}},reducers:{addToCart:function(e,t){var c=Object(r.a)(t.payload,3),a=c[0],n=c[1],s=c[2],i="".concat(a.id,"-").concat(s);e.products[i]?(n||(n=void 0),n?e.products[i].count=n:e.products[i].count++):e.products[i]={count:1,product:a,deliveryType:s}},removeFromCart:function(e,t){var c=t.payload;e.products[c]&&(e.products[c].count>1?e.products[c].count--:delete e.products[c])}}}),f=p.actions,v=f.addToCart,g=f.removeFromCart,N=p.reducer,y=(c(36),["type","className","icon","selectOnFocus"]);function C(e){var t=e.type,c=void 0===t?"text":t,a=e.className,n=void 0===a?"":a,s=e.icon,i=void 0===s?null:s,r=e.selectOnFocus,o=Object(m.a)(e,y);return Object(j.jsxs)("label",{className:"Input ".concat(i?"with-icon":""," ").concat(n),children:[Object(j.jsx)("input",Object(l.a)({onClick:function(e){r&&e.target.select()},className:"form-control",type:c},o)),i&&Object(j.jsx)("i",{className:"icon-".concat(i)})]})}var S=c(7);function w(e){var t=e.data,c=t.product,a=t.count,n=t.deliveryType,s=Object(S.b)();return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{colSpan:"2",children:Object(j.jsxs)("div",{className:"CartProducts__item",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:c.image,alt:""}),Object(j.jsxs)("div",{style:{flex:"1"},children:[Object(j.jsx)("h3",{children:c.name}),Object(j.jsxs)("span",{children:["$ ",c.price]})]}),Object(j.jsx)(C,{onChange:function(e){s(v([c,parseInt(e.target.value),n]))},value:a,selectOnFocus:!0})]}),Object(j.jsx)(C,{placeholder:"Order Note..."})]})}),Object(j.jsxs)("td",{children:[Object(j.jsxs)("span",{className:"CartProducts__price",children:["$ ",c.price*a]}),Object(j.jsx)(h,{onClick:function(){s(g("".concat(c.id,"-").concat(n)))},theme:"outline",color:"pink",style:{borderColor:"#FF7CA3"},children:Object(j.jsx)("i",{className:"icon-Trash",style:{fontSize:"26px"}})})]})]})}function _(e){var t=e.withoutHeader,c=void 0!==t&&t,a=Object(S.c)((function(e){return e.cart.products})),n=Object.values(a).filter((function(t){return void 0===e.activeDeliveryType||t.deliveryType===e.activeDeliveryType}));return Object(j.jsx)("div",{className:"CartProducts",style:{flex:"1",overflow:"auto"},children:Object(j.jsxs)("table",{className:"CartProducts__list",children:[!c&&Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Item"}),Object(j.jsx)("th",{style:{textAlign:"right",paddingRight:30},children:"Qty"}),Object(j.jsx)("th",{children:"Price"})]})}),Object(j.jsxs)("tbody",{children:[n.length?null:Object(j.jsx)("div",{className:"mt-3",children:"Empty..."}),n.map((function(e){return Object(j.jsx)(w,{data:e})}))]})]})})}var k=[{name:"Dine In",value:"dinein"},{name:"To Go",value:"togo"},{name:"Delivery",value:"delivery"}];function T(e){var t=e.onShowCheckout,c=Object(a.useState)(k[0].value),n=Object(r.a)(c,2),s=n[0],i=n[1],l=Object(S.c)((function(e){return e.cart.products})),o=Object.values(l).reduce((function(e,t){return e+t.count*t.product.price}),0).toFixed(2);return Object(j.jsxs)("div",{class:"Cart",children:[Object(j.jsx)("h2",{className:"h2",children:"Orders #34562"}),Object(j.jsx)("div",{children:k.map((function(e,t){var c=e.name,a=e.value;return Object(j.jsx)(h,{onClick:function(){return i(a)},label:c,color:"primary",theme:a===s?"default":"outline",className:"mr-2"},t)}))}),Object(j.jsx)(_,{activeDeliveryType:s}),Object(j.jsxs)("div",{style:{padding:"30px 0 0 0",borderTop:"1px solid #393C49"},children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[Object(j.jsx)("small",{className:"text-gray",children:"Discount"}),Object(j.jsx)("span",{children:"$0"})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[Object(j.jsx)("small",{className:"text-gray",children:"Sub total"}),Object(j.jsxs)("span",{children:["$",o]})]}),Object(j.jsx)(h,{label:"Continue to payment",disabled:o<=0,fullWidth:!0,size:"lg",style:{boxShadow:"0px 8px 24px rgba(234, 124, 105, 0.3)"},onClick:t})]})]})}c(38);function P(e){var t=e.hideCheckout,c=Object(S.c)((function(e){return e.cart.products})),a=Object.values(c).reduce((function(e,t){return e+t.count*t.product.price}),0).toFixed(2);return Object(j.jsxs)("div",{className:"Confirmation",children:[Object(j.jsx)(h,{flat:!0,onClick:t,style:{textAlign:"left",paddingLeft:0},children:Object(j.jsx)("i",{className:"icon-Back",style:{fontSize:25}})}),Object(j.jsxs)("div",{className:"d-flex align-items-center mb-3 pb-3",style:{borderBottom:"1px solid #393C49"},children:[Object(j.jsxs)("div",{className:"mr-auto",children:[Object(j.jsx)("h3",{className:"h1 mb-2 mt-2",children:"Confirmation"}),Object(j.jsx)("span",{className:"text-gray",children:"Orders #34562"})]}),Object(j.jsx)(h,{onClick:t,children:Object(j.jsx)("i",{className:"icon-Add",style:{fontSize:30}})})]}),Object(j.jsx)(_,{withoutHeader:!0}),Object(j.jsxs)("div",{className:"d-flex justify-content-between mb-3 pt-3 mt-3",style:{borderTop:"1px solid #393C49"},children:[Object(j.jsx)("small",{className:"text-gray",children:"Discount"}),Object(j.jsx)("span",{children:"$0"})]}),Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("small",{className:"text-gray",children:"Sub total"}),Object(j.jsxs)("span",{children:["$",a]})]})]})}var D=c(11),I=(c(39),["className","defaultValue","onChange"]);function M(e){var t=e.className,c=void 0===t?"":t,s=e.defaultValue,i=void 0===s?null:s,o=e.onChange,d=Object(m.a)(e,I),u=Object(a.useState)(!1),b=Object(r.a)(u,2),O=b[0],h=b[1],x=Object(a.useState)(i),p=Object(r.a)(x,2),f=p[0],v=p[1],g=function(e){v(e),h(!1),o&&o(e)},N=e.children.find((function(e){return e.props.value===f}));return Object(j.jsxs)("div",Object(l.a)(Object(l.a)({className:"Select ".concat(c)},d),{},{children:[Object(j.jsxs)("div",{className:"Select__value form-control",onClick:function(){return h(!O)},children:[Object(j.jsx)("i",{className:"icon-Arrow---Down"}),Object(j.jsx)("span",{children:N.props.label})]}),O&&Object(j.jsx)("div",{className:"Select__dropdown",children:e.children.map((function(e){return n.a.cloneElement(e,{active:f,onChange:g})}))})]}))}M.Option=function(e){var t=e.label,c=e.value,a=e.active,n=e.onChange;return Object(j.jsx)("div",{className:"Select__option ".concat(c===a?"Select__option_active":""),onClick:function(){return n(c)},children:t})};var L=c.p+"static/media/Icon-Fill-checkmark-circle.28d45c95.svg",A=c.p+"static/media/Icon-Line-Card.d5b31768.svg",B=c.p+"static/media/Icon-Line-Paypal.352822c3.svg",E=c.p+"static/media/Icon-Line-Iconly-Light outline-Wallet.8296c862.svg",F=["defaultValue","onChange","className"],z=[{name:"Credit Card",value:"card",icon:A},{name:"PayPal",value:"paypal",icon:B},{name:"Cash",value:"cash",icon:E}];function V(e){var t=e.defaultValue,c=e.onChange,n=e.className,s=Object(m.a)(e,F),i=Object(a.useState)(t),o=Object(r.a)(i,2),d=o[0],u=o[1],b=function(e){u(e.target.value),c(e.target.value)};return Object(j.jsx)("div",Object(l.a)(Object(l.a)({className:"PaymentMethodsSelect "+n},s),{},{children:z.map((function(e){return Object(j.jsxs)("label",{className:"PaymentMethodsSelect__item ".concat(e.value===d?"PaymentMethodsSelect__item_active":""),children:[Object(j.jsx)("input",{onChange:b,type:"radio",name:"payment-method",value:e.value,hidden:!0}),Object(j.jsx)("img",{src:e.icon,alt:""}),Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("img",{className:"PaymentMethodsSelect__item__check",alt:"",src:L})]})}))}))}function R(e){var t=e.hideCheckout,c=Object(a.useState)({holder_name:""}),n=Object(r.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)({}),d=Object(r.a)(o,2),u=d[0],b=d[1],m=function(e){var t={};for(var c in e){var a=e[c];switch(c){case"holder_name":a||(t[c]="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}}b(t)};return console.log(s,u),Object(j.jsxs)("div",{className:"Payment",children:[Object(j.jsxs)("div",{className:"pb-3 mb-3",style:{borderBottom:"1px solid #393C49",marginTop:42},children:[Object(j.jsx)("h3",{className:"h1 mb-2 mt-2",children:"Payment"}),Object(j.jsx)("span",{className:"text-gray",children:"3 payment method available"})]}),Object(j.jsxs)("form",{style:{display:"flex",flex:"1",flexDirection:"column"},children:[Object(j.jsx)("h3",{className:"h2 mt-0",children:"Payment Method"}),Object(j.jsx)(V,{defaultValue:"card",onChange:console.log,className:"mb-3"}),Object(j.jsxs)("div",{class:"mb-3",children:[Object(j.jsx)("label",{className:"mb-2",children:"Cardholder Name"}),Object(j.jsx)(C,{name:"holder_name",onChange:function(e){i(Object(l.a)(Object(l.a)({},s),{},Object(D.a)({},e.target.name,e.target.value))),m(Object(l.a)(Object(l.a)({},s),{},Object(D.a)({},e.target.name,e.target.value)))},placeholder:"Levi Ackerman",className:"w-100"}),u.holder_name&&Object(j.jsx)("small",{style:{color:"red"},children:u.holder_name})]}),Object(j.jsxs)("div",{class:"mb-3",children:[Object(j.jsx)("label",{className:"mb-2",children:"Card Number"}),Object(j.jsx)(C,{placeholder:"**** **** **** ****",className:"w-100"})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{class:"col-6 mb-3",children:[Object(j.jsx)("label",{className:"mb-2",children:"Expriration Date"}),Object(j.jsx)(C,{placeholder:"**/****",className:"w-100"})]}),Object(j.jsxs)("div",{class:"col-6 mb-3",children:[Object(j.jsx)("label",{className:"mb-2",children:"CVV"}),Object(j.jsx)(C,{placeholder:"***",type:"password",className:"w-100"})]})]}),Object(j.jsx)("hr",{className:"mb-3"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{class:"col-6 mb-3",children:[Object(j.jsx)("label",{className:"mb-2",children:"Expriration Date"}),Object(j.jsxs)(M,{defaultValue:"dinein",className:"ml-auto",style:{maxWidth:"100%"},children:[Object(j.jsx)(M.Option,{label:"Dine In",value:"dinein"}),Object(j.jsx)(M.Option,{label:"To Go",value:"togo"}),Object(j.jsx)(M.Option,{label:"Delivery",value:"delivery"})]})]}),Object(j.jsxs)("div",{class:"col-6 mb-3",children:[Object(j.jsx)("label",{className:"mb-2",children:"Table no."}),Object(j.jsx)(C,{placeholder:"123",type:"number",className:"w-100"})]})]}),Object(j.jsxs)("div",{className:"row",style:{marginTop:"auto"},children:[Object(j.jsx)("div",{class:"col-6",children:Object(j.jsx)(h,{type:"button",onClick:t,label:"Cancel",theme:"outline",size:"lg",fullWidth:!0})}),Object(j.jsx)("div",{class:"col-6",children:Object(j.jsx)(h,{label:"Confirm Payment",size:"lg",fullWidth:!0})})]})]})]})}function W(e){var t=e.visible,c=e.hide;return Object(j.jsxs)("div",{className:"Checkout ".concat(t?"Checkout_visible":""),children:[Object(j.jsx)(P,{hideCheckout:c}),Object(j.jsx)(R,{hideCheckout:c})]})}c(40);function $(e){var t=e.data,c=e.deliveryType,a=void 0===c?"dinein":c,n=t.image,s=t.name,i=t.price,l=t.avaliable_count,r=Object(S.b)();return Object(j.jsxs)("button",{className:"ProductCart",onClick:function(){r(v([t,void 0,a]))},children:[Object(j.jsx)("img",{className:"ProductCart__image",src:n,alt:""}),Object(j.jsx)("h3",{className:"ProductCart__title",children:s}),Object(j.jsxs)("div",{className:"ProductCart__price",children:["$ ",i]}),Object(j.jsxs)("div",{className:"ProductCart__count",children:[l," Bowls available"]})]})}c(41);var H,G=["value","onChange","className"];function J(e){var t=e.value,c=e.onChange,s=e.className,i=Object(m.a)(e,G),o=Object(a.useRef)(),d=Object(a.useState)(o.current?o.current.getBoundingClientRect().left:0),u=Object(r.a)(d,2),b=u[0],O=u[1],h=function(e,t){c(e)};return Object(a.useEffect)((function(){var e,t;H||(H=o.current);var c=null===(e=o.current)||void 0===e?void 0:e.getBoundingClientRect().left,a=null===(t=H)||void 0===t?void 0:t.getBoundingClientRect().left;O(b+(c-a)||0),H=o.current}),[t,e.children]),Object(j.jsxs)("div",Object(l.a)(Object(l.a)({className:"Tabs ".concat(s)},i),{},{children:[e.children.map((function(e,c){return n.a.cloneElement(e,{active:c===t,activeButtonRev:o,setActive:h,idx:c,key:c})})),Object(j.jsx)("span",{className:"Tabs-line",style:{left:b}})]}))}J.TabItem=function(e){var t=e.label,c=e.active,a=e.setActive,n=e.idx,s=e.activeButtonRev;return Object(j.jsx)("button",{ref:c?s:null,className:"TabItem ".concat(c?"TabItem-active":""),onClick:function(e){return a(n,e.target)},children:t})};var U={code:500,message:"Internal Server Error"},Q=1,q=[{id:1,name:"Hot Dishes"},{id:2,name:"Cold Dishes"},{id:3,name:"Soup"},{id:4,name:"Grill"},{id:5,name:"Appetizer"},{id:6,name:"Dessert"}],K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{id:Q++,name:e,price:t,blows:c,category_id:a}},X=[K("Spicy seasoned seafood noodles",2.29,20,1),K("Salted Pasta with mushroom sauce",2.69,11,2),K("Spicy seasoned seafood noodles",2.29,20,3),K("Spicy seasoned seafood noodles",2.29,20,4),K("Spicy seasoned seafood noodles",2.29,20,5),K("Spicy seasoned seafood noodles",2.29,20,6),K("Spicy seasoned seafood noodles",2.29,20,1),K("Spicy seasoned seafood noodles",2.29,20,2),K("Spicy seasoned seafood noodles",2.29,20,3),K("Spicy seasoned seafood noodles",2.29,20,2),K("Spicy seasoned seafood noodles",2.29,20,4),K("Spicy seasoned seafood noodles",2.29,20,2),K("Spicy seasoned seafood noodles",2.29,20,5),K("Spicy seasoned seafood noodles",2.29,20,1),K("Spicy seasoned seafood noodles",2.29,20,2)].map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{image:c(42)("./".concat(t+1>9?t+1:"0"+(t+1),".png")).default})})),Y=function(){return new Promise((function(e,t){setTimeout((function(){Math.random()>.01&&e({products:X}),t({error:U})}),1e3*Math.floor(3*Math.random()))}))},Z=function(){return new Promise((function(e,t){setTimeout((function(){Math.random()>.01&&e({categories:q}),t({error:U})}),1e3*Math.floor(3*Math.random()))}))},ee=J.TabItem;var te=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({items:[],loading:!1,error:null}),i=Object(r.a)(s,2),o=i[0],d=i[1],u=Object(a.useState)({items:[],loading:!1,error:null}),m=Object(r.a)(u,2),O=m[0],h=m[1],x=Object(a.useState)(""),p=Object(r.a)(x,2),f=p[0],v=p[1],g=Object(a.useState)(!1),N=Object(r.a)(g,2),y=N[0],S=N[1],w=Object(a.useState)("dinein"),_=Object(r.a)(w,2),k=_[0],P=_[1];Object(a.useEffect)((function(){d(Object(l.a)(Object(l.a)({},o),{},{loading:!0})),h(Object(l.a)(Object(l.a)({},O),{},{loading:!0})),Promise.all([Z(),Y()]).then((function(e){h(Object(l.a)(Object(l.a)({},O),{},{items:e[0].categories,loading:!1})),d(Object(l.a)(Object(l.a)({},o),{},{items:e[1].products,loading:!1}))})).catch((function(e){h(Object(l.a)(Object(l.a)({},O),{},{error:e[0].error,loading:!1})),d(Object(l.a)(Object(l.a)({},o),{},{error:e[1].error,loading:!1}))}))}),[]);var D=o.items.filter((function(e){return e.name.toLowerCase().indexOf(f.toLowerCase())>=0})).filter((function(e){return e.category_id===O.items[c].id}));return Object(j.jsxs)(b,{children:[Object(j.jsxs)("div",{className:"p-24",children:[Object(j.jsxs)("div",{className:"row mb-3",children:[Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsx)("h1",{className:"h1 mb-1",children:"Jaegar Resto"}),Object(j.jsx)("div",{className:"text-white2",children:(new Date).toLocaleDateString("US-us",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(C,{placeholder:"Search for food, coffe, etc..",className:"ml-auto w-max-content",icon:"Home",value:f,onChange:function(e){return v(e.target.value)}})})]}),Object(j.jsx)(J,{className:"mb-3",value:c,onChange:function(e){return n(e)},children:O.items.map((function(e){return Object(j.jsx)(ee,{label:e.name})}))}),Object(j.jsxs)("div",{className:"row mb-5",children:[Object(j.jsx)("div",{className:"col-6",children:"Products"}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)(M,{defaultValue:k,onChange:function(e){return P(e)},className:"ml-auto",style:{width:120,maxWidth:"100%"},children:[Object(j.jsx)(M.Option,{label:"Dine In",value:"dinein"}),Object(j.jsx)(M.Option,{label:"To Go",value:"togo"}),Object(j.jsx)(M.Option,{label:"Delivery",value:"delivery"})]})})]}),Object(j.jsx)("div",{className:"row",children:o.loading?Object(j.jsx)("div",{children:"Loading..."}):o.error?Object(j.jsx)("div",{children:o.error.message}):D.map((function(e){return Object(j.jsx)("div",{className:"col-12 col-md-4 col-xl-3",children:Object(j.jsx)($,{data:e,deliveryType:k},e.id)})}))})]}),Object(j.jsx)(T,{onShowCheckout:function(){return S(!0)}}),Object(j.jsx)(W,{visible:y,hide:function(){return S(!1)}})]})};var ce=function(){return Object(j.jsx)(d.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(te,{})})})},ae=Object(x.a)({reducer:{cart:N}});c(58);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(S.a,{store:ae,children:Object(j.jsx)(ce,{})})}),document.getElementById("root"))}]),[[59,1,2]]]);
//# sourceMappingURL=main.35aa7916.chunk.js.map