(this["webpackJsonpBidMastersP3-client"]=this["webpackJsonpBidMastersP3-client"]||[]).push([[0],{169:function(e,t,a){},170:function(e,t,a){},371:function(e,t,a){},401:function(e,t,a){},467:function(e,t,a){},479:function(e,t,a){},579:function(e,t,a){},581:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),s=a.n(r),i=(a(371),a(55)),l=a(44),o=a.n(l),j=a(67),d=a(27),u=a(25),b=a(60),h=a.n(b),x=a(662),m=a(282),O=a(652),p=a(636),g="https://bidmasters.herokuapp.com/api",v=a(4),f=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2),"& .MuiTextField-root":{margin:e.spacing(1),width:"300px"},"& .MuiButtonBase-root":{margin:e.spacing(2)}}}})),y=function(e){var t=e.handleClose,a=f(),c=Object(n.useState)(""),r=Object(d.a)(c,2),s=r[0],i=r[1],l=Object(n.useState)(""),u=Object(d.a)(l,2),b=u[0],x=u[1],m=Object(n.useState)(""),y=Object(d.a)(m,2),A=y[0],C=y[1],S=Object(n.useState)(""),w=Object(d.a)(S,2),N=w[0],I=w[1],k=function(){var e=Object(j.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={firstName:a.target.firstName.value,lastName:a.target.lastName.value,email:a.target.email.value,password:a.target.password.value},e.next=4,h.a.post("".concat(g,"/signup"),n,{withCredentials:!0});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{className:a.root,onSubmit:k,children:[Object(v.jsx)(O.a,{label:"First Name",variant:"filled",required:!0,value:s,name:"firstName",onChange:function(e){return i(e.target.value)}}),Object(v.jsx)(O.a,{label:"Last Name",variant:"filled",required:!0,value:b,name:"lastName",onChange:function(e){return x(e.target.value)}}),Object(v.jsx)(O.a,{label:"Email",variant:"filled",type:"email",required:!0,value:A,name:"email",onChange:function(e){return C(e.target.value)}}),Object(v.jsx)(O.a,{label:"Password",variant:"filled",type:"password",required:!0,value:N,name:"password",onChange:function(e){return I(e.target.value)}}),Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{type:"submit",variant:"contained",style:{backgroundColor:"#04435d",color:"white"},children:"Sign up"}),Object(v.jsx)(p.a,{variant:"contained",onClick:t,children:"Cancel"})]})]})},A=function(e){var t=e.open,a=e.handleClose;return Object(v.jsx)(x.a,{open:t,onClose:a,children:Object(v.jsx)(y,{handleClose:a})})},C=a(657),S=(a(169),Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2),"& .MuiTextField-root":{margin:e.spacing(1),width:"300px"},"& .MuiButtonBase-root":{margin:e.spacing(2)}}}}))),w=function(e){var t=e.onSignIn,a=e.handleSignIn,c=e.handleCloseSI,r=e.myError,s=S(),i=Object(n.useState)(""),l=Object(d.a)(i,2),o=l[0],j=l[1],u=Object(n.useState)(""),b=Object(d.a)(u,2),h=b[0],x=b[1];return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{className:s.root,onSubmit:t,children:[Object(v.jsx)(O.a,{label:"Email",variant:"filled",type:"email",required:!0,value:o,name:"email",onChange:function(e){return j(e.target.value)}}),Object(v.jsx)(O.a,{label:"Password",variant:"filled",type:"password",required:!0,value:h,name:"password",onChange:function(e){return x(e.target.value)}}),Object(v.jsxs)("div",{children:[r?Object(v.jsx)(C.a,{severity:"error",children:r.error}):null,Object(v.jsx)(p.a,{type:"submit",variant:"contained",onClick:{handleSignIn:a},style:{backgroundColor:"#04435d",color:"white"},children:"Log in"}),Object(v.jsx)(p.a,{variant:"contained",onClick:c,children:"Cancel"})]})]})})},N=function(e){var t=e.openSI,a=e.handleCloseSI,n=e.onSignIn,c=e.myError;return Object(v.jsx)(x.a,{open:t,onClose:a,children:Object(v.jsx)(w,{handleCloseSI:a,onSignIn:n,myError:c})})},I=a(73),k=a(667),E=a(666),D=a(650),B=(a(394),a(170),a(655)),T=a.p+"static/media/1.a27455bc.jpg",M=(a.p,a.p,a.p,a.p+"static/media/5.3cbea085.png"),Q=(a.p,a.p+"static/media/7.9a24a337.jpg"),F=(a.p,a.p+"static/media/9.1e6b431a.jpg"),P={height:"260px",color:" #FFFFFF",lineHeight:"160px",textAlign:"center",background:"#fffff"};var R=function(){return Object(v.jsx)("div",{className:"carousel",children:Object(v.jsxs)(B.a,{autoplay:!0,children:[Object(v.jsxs)("div",{className:"imageDiv",children:[Object(v.jsx)("img",{className:"image",src:T,style:P,alt:"art"}),Object(v.jsx)("div",{className:"text",children:Object(v.jsx)("h1",{children:"Soon available"})})]}),Object(v.jsxs)("div",{className:"imageDiv",children:[Object(v.jsx)("img",{className:"image",src:M,style:P,alt:"art"}),Object(v.jsx)("div",{className:"text",children:Object(v.jsx)("h1",{children:"Soon available"})})]}),Object(v.jsxs)("div",{className:"imageDiv",children:[Object(v.jsx)("img",{className:"image",src:F,style:P,alt:"art"}),Object(v.jsx)("div",{className:"text",children:Object(v.jsx)("h1",{children:"Soon available"})})]}),Object(v.jsxs)("div",{className:"imageDiv",children:[Object(v.jsx)("img",{className:"image",src:Q,style:P,alt:"art"}),Object(v.jsx)("div",{className:"text",children:Object(v.jsx)("h1",{children:"Soon available"})})]})]})})},U=(a(401),D.a.Meta);var G=function(e){var t=e.art;return t.length?Object(v.jsxs)("div",{children:[Object(v.jsx)(R,{}),Object(v.jsx)("div",{className:"containerX",children:t.map((function(e){return Object(v.jsx)("div",{className:"colX",children:Object(v.jsx)(I.b,{to:"/auctiondetail/".concat(e._id),children:Object(v.jsxs)(D.a,{hoverable:!0,className:"images",style:{width:240},cover:Object(v.jsx)("img",{alt:"art",src:e.image,height:200}),children:[Object(v.jsx)(U,{title:e.title}),Object(v.jsxs)("p",{children:["by : ",e.artist]})]})})})}))})]}):Object(v.jsx)(E.a,{sx:{display:"flex"},children:Object(v.jsx)(k.a,{})})},L=a(653),H=a(664),Y=a(651),q=(a(467),a(260)),K=a(344),z=a(658),V=a(656);var W=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],r=a[1];console.log();var s=e.btnSubmitG,i=q.a.Option,l=Object(v.jsxs)(q.a,{defaultValue:"USD",style:{width:60},children:[Object(v.jsx)(i,{value:"USD",children:"$"}),Object(v.jsx)(i,{value:"EUR",children:"\u20ac"}),Object(v.jsx)(i,{value:"GBP",children:"\xa3"}),Object(v.jsx)(i,{value:"CNY",children:"\xa5"})]});return console.log(e.user),Object(v.jsxs)(v.Fragment,{children:[e.user?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(K.a,{type:"primary",onClick:function(){r(!0)},children:"Make an offer"})}):null,Object(v.jsx)(z.a,{title:"Make your offer",placement:"bottom",onClose:function(){r(!1)},visible:c,children:Object(v.jsxs)("div",{className:"bids",children:[Object(v.jsx)("br",{}),Object(v.jsxs)("form",{onSubmit:s,children:[Object(v.jsx)(V.a,{placeholder:"Enter your bid",addonAfter:l,name:"bid",type:"number"}),Object(v.jsx)("button",{type:"submit",children:"Submit"})]})]})})]})},J=D.a.Meta;var X=function(e){var t=Object(u.g)().artId,a=Object(n.useState)(!0),c=Object(d.a)(a,2),r=c[0],s=c[1],l=(e.btnSubmitG,Object(n.useState)([])),b=Object(d.a)(l,2),x=b[0],m=b[1],O=Object(n.useState)(!1),p=Object(d.a)(O,2),f=p[0],y=p[1];if(Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(g,"/auctiondetail/").concat(t));case 2:a=e.sent,y(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),!f)return Object(v.jsx)(E.a,{sx:{display:"flex"},children:Object(v.jsx)(k.a,{})});var A=L.a.Countdown,C=Date.parse(f.createdAt)+864e5*f.days+3e4,S=function(){var a=Object(j.a)(o.a.mark((function a(n){var c,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),console.log("bid submited"),c={bid:n.target.bid.value,userId:e.user._id},console.log(c),a.next=6,h.a.post("".concat(g,"/auctiondetail/").concat(t),c);case 6:r=a.sent,m([r.data].concat(Object(i.a)(x))),console.log(r.data);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(R,{}),Object(v.jsx)("div",{className:"detail",children:Object(v.jsxs)(H.b,{direction:"vertical",children:[Object(v.jsxs)(D.a,{hoverable:!0,style:{width:240},width:200,cover:Object(v.jsx)(Y.a,{width:240,src:f.image}),children:[Object(v.jsx)(J,{title:f.title}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{children:["by : ",f.artist]}),Object(v.jsxs)("p",{children:["Year: ",f.year]}),Object(v.jsxs)("p",{children:["Starting bid: \u20ac",f.price]}),Object(v.jsx)("p",{children:"Last bid: "})]}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"offerButton",children:[Object(v.jsx)(A,{title:"Auction expires",value:C,onFinish:function(){console.log("finished!"),s(!1)}}),r?Object(v.jsx)(W,{btnSubmitG:S,user:e.user}):null]})]})})]})};a(479),a(582);var Z=function(e){var t=e.btnSubmit;return Object(v.jsx)("div",{children:e.user?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(R,{}),Object(v.jsx)("div",{class:"form",children:Object(v.jsx)(E.a,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:Object(v.jsxs)("form",{onSubmit:t,user:e.user._id,children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",{id:"inputID",class:"textFields",name:"artist",type:"text",placeholder:" Author"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{id:"inputID",class:"textFields",name:"title",type:"text",placeholder:" Title of artwork"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{id:"inputID",class:"textFields",name:"year",type:"text",placeholder:" Dated from"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{id:"inputID",class:"textFields",name:"price",type:"text",placeholder:" Price wanted"})}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{id:"inputID",class:"textFields",name:"days",type:"text",placeholder:" How many days of auction"})}),Object(v.jsxs)("div",{className:"upload-btn-wrapper",children:[Object(v.jsxs)("button",{class:"btn",children:[Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwABEJAAARCQAYms0rgAAAFuSURBVDhP5ZM7TsNQEEX9LBZAgwQCIiSwqJCIQNDRULADFsACaEmfloaNIKUEilShAWQKJH6hZAEUfIT84Tzn5pHYjkjccqSreTNv5nqCjfcXSZJsx3F8TWylabqkcjUwCTB7xijlHKMbNKfryWBwEz1as0GonaNFtY0HAwF6QIl8HJRYOr4ijrcpMxsMFDbLQ88ZpgsaK4e+Gk13qLBZHlrsph3ijMaH4WKZhpAYSRotwp0l62PmlNK0bDyjaA3t+jtoKit4XtMYU9N5CHq73DWVfnC+QG/Ky+HJt719itifqrYCvmIBnqjTZIw0rMp/NIyiqMGLW1fuoHZv36hSB6WEcNnLfuFT2kVH9vP45HCguoNanbvMdBBqbe7m1eagfozeR/5k3/dDVMcjQKvSCrU99Ko2R/8z6xuWGtP0xXAXPUkv1L51nSdzNKzf4cmzNLbI7d+nCj4e+8TQGm6RnJCsoWr/Hrwr1DbGHP4AkA+iN63NOYEAAAAASUVORK5CYILyQI54VMilwV2+GDGaD6N1SfCDumok39cyG8nxig4cx7m12/zgNcqyjJ6yo36m4aB7GiFijN7QvYxabt9gXIxfeNbDHXWcEbdjvElgEcnYoqAUTePVg9euGE8QWCJQSaCwD3WB4BHD447LSRlxORpnM4vqUVQjl79Eh2jeGLPyAeN9+9cTWGH7AAAAAElFTkSuQmCCPCSMdYF6mKuoMFJyAIhZSbAXpPY6sgEAAcQE7SvDwCdot5LouVQgLgPimxTExDMgzgXi32QMRsD7+wABRI0k8QCIPYB4ETQgiAXfgHgdELsC8WVKHQEQQCxUyqggz8QDsRIQ6wMxHxGheYXCmEQBAAHEQuVS8B4U0x0ABNCwqUcAAogJbfTiP4mZfaDAf2ixDx+BAQggkEf+IAlwUTosQyfwDy0f/gEIIFAeeQTEQlABESDOBOKp0OKQcRDGBMjNkUCsgiT+AiCAQBVaMwNkBQ8yAJUmnwdpbIBaIVpogTwNIIBAHpEEMo4CseIQzedvgdgaIIBAeQQ0Ah4FxPeHoCdeAnEsKAUBBBDyaDyoAZYDxC5ALEuDOoZa4C808A9A8/J1kCBAgAEAAvrrFL2y+XoAAAAASUVORK5CYII=",alt:"upload"})," Upload Photo"]}),Object(v.jsx)("input",{class:"btn",name:"myImage",type:"file",accept:"image/png, image/jpg",placeholder:"Photo here"})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{class:"button",type:"submit",style:{fontSize:"20px"},children:"Submit"})})]})})})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("p",{children:" Botar lottie here "})})})},_=a(668),$=a(669),ee=a(670),te=a(663),ae=a(665);var ne=function(e){return Object(v.jsx)(E.a,{sx:{flexGrow:1},children:Object(v.jsx)(_.a,{position:"static",children:Object(v.jsxs)($.a,{className:"myNav",children:[Object(v.jsx)(ae.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(v.jsx)(ee.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(v.jsx)(I.b,{to:"/",className:"myNav",children:Object(v.jsx)("img",{alt:"logo",src:"/logo2.jpg"})})}),Object(v.jsx)(te.a,{color:"inherit",children:Object(v.jsx)(I.b,{to:"/sellform",className:"myNav",children:"Sell"})}),e.user?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(te.a,{color:"inherit",children:Object(v.jsx)(I.b,{to:"/user",className:"myNav",children:"Profile"})}),Object(v.jsx)(te.a,{onClick:e.onLogout,color:"inherit",children:"Logout"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(te.a,{className:"myBtn",onClick:e.openSI,color:"inherit",children:"Log in"}),Object(v.jsx)(te.a,{onClick:e.open,color:"inherit",children:"Sign up"})]})]})})})},ce=a(338),re=a.n(ce);var se=function(e){var t=e.height,a=e.width,n={loop:!0,autoplay:!0,animationData:e.animation,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return Object(v.jsx)("div",{children:Object(v.jsx)(re.a,{options:n,height:t,width:a})})};var ie=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://assets8.lottiefiles.com/packages/lf20_uf2hp52m.json");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(v.jsxs)("div",{className:"errorSize",children:[Object(v.jsxs)("h1",{style:{color:"#04435D",textAlign:"center",marginBottom:12,marginTop:10},children:[" ERROR 404: PAGE NOT FOUND",Object(v.jsx)("br",{}),"  God created the world in six days and he's now resting. ",Object(v.jsx)("br",{})," Go home."]}),Object(v.jsx)(se,{animation:a,width:500,height:500})]})},le=a(258),oe=a.p+"static/media/logoFooter.e5708d60.png",je=a(247),de=a(647),ue=a(648),be=a(644),he=a(643),xe=a(109),me=a(646),Oe=a(104),pe=a(162),ge=a(220),ve=a(56),fe=(a(580),a(219)),ye=(a(569),a(339)),Ae=a(340),Ce=(a(579),Object(xe.a)({palette:{type:"dark"}})),Se=Object(m.a)((function(e){var t=e.palette,a=e.typography;return{top:{backgroundSize:"cover",overflow:"hidden"},middle:{backgroundColor:"dark"===t.type?"#192D36":t.action.hover},bottom:{backgroundColor:"dark"===t.type?"#0F2128":t.action.selected},newsletterText:{color:"#fff",fontSize:"0.875rem",textTransform:"uppercase"},form:{margin:0,minWidth:343,fontSize:"0.875rem"},legalLink:{textTransform:"uppercase",fontWeight:"bold",fontSize:"0.75rem",justifyContent:"center",color:t.text.hint,letterSpacing:"0.5px"},divider:{height:2,margin:"-1px 0"},overlay:{position:"absolute",top:0,left:0,bottom:0,right:0,filter:"grayscale(80%)","& img":{width:"100%",height:"100%",objectFit:"cover"}},info:Object(le.a)(Object(le.a)({},a.caption),{},{color:t.text.hint,marginTop:8})}})),we=c.a.memo((function(){var e=Se();return Object(v.jsxs)(je.a,{width:"100%",className:"addcolor",children:[Object(v.jsxs)(je.a,{px:2,py:6,className:e.top,position:"relative",children:[Object(v.jsx)("div",{className:e.overlay,children:Object(v.jsx)("img",{src:"https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200",alt:""})}),Object(v.jsx)(me.a,{theme:Ce,children:Object(v.jsxs)(Oe.ColumnToRow,{at:"sm",cssPosition:"relative",columnStyle:{alignItems:"center",textAlign:"center"},rowStyle:{justifyContent:"center"},gap:{xs:2,sm:3,md:4},wrap:!0,children:[Object(v.jsx)(Oe.Item,{children:Object(v.jsx)(be.a,{className:"textInput",children:"Be the first to know about all our auctions"})}),Object(v.jsx)(Oe.Item,{children:Object(v.jsxs)(ge.a,{className:e.form,onSubmit:function(e){return alert("Your email is ".concat(e,"."))},useStyles:ye.useReadyEmailSubscribeStyles,inputClearedAfterSubmit:!0,children:[Object(v.jsx)(ge.b,{placeholder:"Enter your email"}),Object(v.jsx)(ge.c,{style:{fontSize:"15px",backgroundColor:"#04435d"},children:"Submit"})]})})]})})]}),Object(v.jsx)(je.a,{px:2,py:10,className:e.middle,children:Object(v.jsx)(de.a,{disableGutters:!0,children:Object(v.jsxs)(he.a,{container:!0,spacing:4,children:[Object(v.jsxs)(he.a,{item:!0,xs:12,md:4,lg:3,children:[Object(v.jsx)(je.a,{component:"img",mt:-3,src:oe,alt:"",borderRadius:12}),Object(v.jsx)(be.a,{className:e.info,children:"Prinsengracht 437, 1016 HM Amsterdam, Netherlands"}),Object(v.jsx)(be.a,{className:e.info,children:"admin@bidmasters.fake"})]}),Object(v.jsx)(he.a,{item:!0,xs:12,md:8,lg:6,children:Object(v.jsxs)(he.a,{container:!0,spacing:2,children:[Object(v.jsx)(he.a,{item:!0,xs:6,sm:4,children:Object(v.jsxs)(ve.CategoryProvider,{useStyles:fe.useMagCategoryMenuStyles,children:[Object(v.jsx)(ve.CategoryTitle,{children:"Auctions"}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Next auctions"})}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Closed auctions"})}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Catalogues Subscription"})})]})}),Object(v.jsx)(he.a,{item:!0,xs:6,sm:4,children:Object(v.jsxs)(ve.CategoryProvider,{useStyles:fe.useMagCategoryMenuStyles,children:[Object(v.jsx)(ve.CategoryTitle,{children:"Services"}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Art expertise"})}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Appraisals"})}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Private sales"})})]})}),Object(v.jsx)(he.a,{item:!0,xs:5,sm:4,children:Object(v.jsxs)(ve.CategoryProvider,{useStyles:fe.useMagCategoryMenuStyles,children:[Object(v.jsx)(ve.CategoryTitle,{children:"About"}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Contact"})}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Who we are"})}),Object(v.jsx)(ve.CategoryItem,{children:Object(v.jsx)("h5",{children:"Press"})})]})})]})})]})})}),Object(v.jsx)(de.a,{disableGutters:!0,children:Object(v.jsx)(ue.a,{className:e.divider})}),Object(v.jsx)(je.a,{px:2,py:3,className:e.bottom,children:Object(v.jsx)(de.a,{disableGutters:!0,children:Object(v.jsxs)(Oe.ColumnToRow,{at:"md",columnStyle:{alignItems:"center"},rowStyle:{alignItems:"unset"},children:[Object(v.jsx)(Oe.Item,{grow:!0,ml:-2,shrink:0,children:Object(v.jsx)(pe.NavMenu,{useStyles:Ae.usePlainNavigationMenuStyles,children:Object(v.jsxs)(Oe.ColumnToRow,{at:"sm",children:[Object(v.jsx)(pe.NavItem,{className:e.legalLink,children:"Terms & Conditions"}),Object(v.jsx)(pe.NavItem,{className:e.legalLink,children:"Privacy Policy"})]})})}),Object(v.jsx)(Oe.Item,{children:Object(v.jsx)(je.a,{py:1,textAlign:{xs:"center",md:"right"},children:Object(v.jsx)(pe.NavItem,{className:e.legalLink,id:"phrase",children:"Created with mui, bootstrap and ant by In\xeas, Maria and Ricardo \xa9 2021 All rights unreserved, go see who we are"})})})]})})})]})}));var Ne=function(){var e=c.a.useState(60),t=Object(d.a)(e,2),a=t[0],n=t[1];return c.a.useEffect((function(){var e=a>0&&setInterval((function(){return n(a-1)}),1e3);return function(){return clearInterval(e)}}),[a]),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("div",{children:["Countdown: ",a]})})};var Ie=function(){return Object(v.jsx)("div",{children:"TESTE"})},ke=a(659),Ee=a(649);var De=function(){var e=Object(u.f)(),t=Object(n.useState)(null),a=Object(d.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(null),l=Object(d.a)(s,2),b=l[0],x=l[1],m=Object(n.useState)([]),O=Object(d.a)(m,2),p=O[0],f=O[1],C=Object(n.useState)(!1),S=Object(d.a)(C,2),I=S[0],k=S[1],E=function(){k(!1)},D=Object(n.useState)(!1),B=Object(d.a)(D,2),T=B[0],M=B[1],Q=function(){M(!1)},F=function(){var e=Object(j.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={email:t.target.email.value,password:t.target.password.value},console.log(t.target),e.next=6,h.a.post("".concat(g,"/signin"),a,{withCredentials:!0});case 6:n=e.sent,r(n.data),Q(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.response.data),x(e.t0.response.data);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(g,"/art"));case 2:t=e.sent,f(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var P=function(){var t=Object(j.a)(o.a.mark((function t(a){var n,r,s,l,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(a.target.myImage.files[0]),(n=new FormData).append("imageUrl",a.target.myImage.files[0]),t.next=6,h.a.post("".concat(g,"/upload"),n);case 6:return r=t.sent,s=c._id,l={artist:a.target.artist.value,title:a.target.title.value,year:a.target.year.value,image:r.data.image,price:a.target.price.value,days:a.target.days.value,user:s},t.next=11,h.a.post("".concat(g,"/sellform"),l);case 11:j=t.sent,f([j.data].concat(Object(i.a)(p))),e("/");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(g,"/logout"),{},{withCredentials:!0});case 2:r(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(ne,{onLogout:R,user:c,openSI:function(){M(!0)},handleCloseSI:Q,open:function(){k(!0)},handleClose:E}),Object(v.jsx)(A,{open:I,handleClose:E}),Object(v.jsx)(N,{openSI:T,handleCloseSI:Q,onSignIn:F,myError:b}),Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:"/signin",element:Object(v.jsx)(w,{myError:b,onSignIn:F})}),Object(v.jsx)(u.a,{path:"/signup",element:Object(v.jsx)(y,{})}),Object(v.jsx)(u.a,{path:"/sellform",element:Object(v.jsx)(Z,{btnSubmit:P,user:c})}),Object(v.jsx)(u.a,{path:"/",element:Object(v.jsx)(G,{art:p})}),Object(v.jsx)(u.a,{path:"/auctiondetail/:artId",element:Object(v.jsx)(X,{user:c})}),Object(v.jsx)(u.a,{path:"/live",element:Object(v.jsx)(Ne,{})}),Object(v.jsx)(u.a,{path:"*",element:Object(v.jsx)(ie,{})}),Object(v.jsx)(u.a,{path:"/user",element:Object(v.jsx)(Ie,{user:c})}),Object(v.jsx)(u.a,{path:"/furureauctions",element:Object(v.jsx)(Ee.a,{dateCellRender:function(e){var t=function(e){var t;switch(e.date()){case 8:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:t=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 22:t=[{type:"warning",content:"Auction day"},{type:"success",content:"This is very long usual event\u3002\u3002...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return t||[]}(e);return Object(v.jsx)("ul",{className:"events",children:t.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(ke.a,{status:e.type,text:e.content})},e.content)}))})},monthCellRender:function(e){var t=function(e){if(8===e.month())return 1394}(e);return t?Object(v.jsxs)("div",{className:"notes-month",children:[Object(v.jsx)("section",{children:t}),Object(v.jsx)("span",{children:"Backlog number"})]}):null}})})]}),Object(v.jsx)(we,{})]})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(I.a,{children:Object(v.jsx)(De,{})})}),document.getElementById("root"))}},[[581,1,2]]]);
//# sourceMappingURL=main.6e4beb19.chunk.js.map