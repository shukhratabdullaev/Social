(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],[,,,,,,function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__1cZft",dialogItems:"Dialogs_dialogItems__2o7-6",active:"Dialogs_active__HM_1A",dialog:"Dialogs_dialog__2jkpz",messages:"Dialogs_messages__1H9wA",message:"Dialogs_message__1lwsR"}},,,function(e,t,s){e.exports={nav:"Navbar_nav__22i5S",item:"Navbar_item__1I3PT",active:"Navbar_active__2PYrQ"}},,,,,,function(e,t,s){e.exports={header:"Header_header__1DhCr"}},,function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__140L0",posts:"MyPosts_posts__P98Db"}},function(e,t,s){e.exports={item:"Post_item__ciNlb"}},,,function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3KyQC"}},function(e,t,s){e.exports={userPhoto:"users_userPhoto__3yAYe"}},,function(e,t,s){},,,,function(e,t,s){},,,,,,,,function(e,t,s){"use strict";s.r(t);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;s(e),a(e),i(e),n(e),o(e)}))},i=(s(0),s(24),s(13)),n=s.n(i),o=s(5),c=(s(28),s(15)),l=s.n(c),r=s(1),d=function(){return Object(r.jsx)("header",{className:l.a.header,children:Object(r.jsx)("img",{className:l.a.img,src:"https://tinypng.com/images/social/website.jpg",alt:"avatar"})})},E=s(9),g=s.n(E),u=function(){return Object(r.jsxs)("nav",{className:g.a.nav,children:[Object(r.jsx)("div",{className:g.a.item,children:Object(r.jsx)(o.b,{to:"/profile",children:"Profile"})}),Object(r.jsx)("div",{className:g.a.item,children:Object(r.jsx)(o.b,{to:"/dialogs",children:"Messages"})}),Object(r.jsx)("div",{className:g.a.item,children:Object(r.jsx)(o.b,{to:"/",children:"News"})}),Object(r.jsx)("div",{className:g.a.item,children:Object(r.jsx)(o.b,{to:"/",children:"Music"})}),Object(r.jsx)("div",{className:g.a.item,children:Object(r.jsx)(o.b,{to:"/",children:"Settings"})})]})},j=s(7),x=s(8),h=s(3),C="ADD-POST",A="CHANGE-NEW-TEXT",f={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post?",likesCount:11},{id:3,message:"blabla",likesCount:11},{id:4,message:"Da da",likesCount:11}],messageForNewPost:""},I=s(17),O=s.n(I),P=s(18),p=s.n(P),M=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:p.a.item,children:[Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg",alt:"card"}),e.message]}),Object(r.jsx)("div",{children:Object(r.jsxs)("span",{className:p.a.item,children:["like ",e.likesCount]})})]})},m=Object(j.b)((function(e){return{posts:e.profilePage.posts,messageForNewPost:e.profilePage.messageForNewPost}}),(function(e){return{ChangeNewText:function(t){e(function(e){return{type:A,newText:e}}(t))},addPost:function(t){e(function(e){return{type:C,postMessage:e}}(t))}}}))((function(e){var t=e.posts.map((function(e){return Object(r.jsx)(M,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return Object(r.jsxs)("div",{className:O.a.postsBlock,children:[Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:"My posts"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{value:e.messageForNewPost,onChange:function(t){e.ChangeNewText(t.currentTarget.value)}})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){e.addPost(e.messageForNewPost)},children:"Add post"})})]}),Object(r.jsx)("div",{className:O.a.posts,children:t})]})})),q=s(21),N=s.n(q),y=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",alt:"img"})}),Object(r.jsx)("div",{className:N.a.descriptionBlock,children:"ava + description"})]})},R=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{}),Object(r.jsx)(m,{})]})},D=s(2),J="UPDATE-USER-MESSAGE-TEXT",w="SEND-USERS-MESSAGE",k={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],newMessage:""},S=s(6),G=s.n(S),F=function(e){var t="/dialogs/"+e.id;return Object(r.jsx)("div",{className:G.a.dialog+" "+G.a.active,children:Object(r.jsx)(o.c,{to:t,children:e.name})})},H=function(e){return Object(r.jsx)("div",{className:G.a.message,children:e.messageContent})},L=Object(j.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onChangeUserMessageHandler:function(t){e(function(e){return{type:J,newMessageText:e}}(t))},addUsersMessage:function(t){e(function(e){return{type:w,messageText:e}}(t))}}}))((function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(r.jsx)(F,{name:e.name,id:e.id},e.id)})),s=e.dialogsPage.messages.map((function(e){return Object(r.jsx)(H,{messageContent:e.message},e.id)}));return Object(r.jsxs)("div",{className:G.a.dialogs,children:[Object(r.jsx)("div",{className:G.a.dialogItems,children:t}),Object(r.jsxs)("div",{className:G.a.messages,children:[s,Object(r.jsx)("textarea",{value:e.dialogsPage.newMessage,onChange:function(t){e.onChangeUserMessageHandler(t.currentTarget.value)}}),Object(r.jsx)("button",{onClick:function(){e.addUsersMessage(e.dialogsPage.newMessage)},children:"Send"})]})]})})),B="FOLLOW",v="UNFOLLOW",Q="SET_USERS",b={users:[]},T=s(22),V=s.n(T),Y=Object(j.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:B,userId:e}}(t))},unfollow:function(t){e(function(e){return{type:v,userId:e}}(t))},setUsers:function(t){e(function(e){return{type:Q,users:e}}(t))}}}))((function(e){return 0===e.users.length&&e.setUsers([{id:1,photoURL:"data:image/png;base64,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",fullName:"Dmitry",followed:!0,status:"I am a boss",location:{city:"Minsk",country:"Belarus"}},{id:2,photoURL:"data:image/png;base64,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",fullName:"Sasha",followed:!1,status:"I am a boss too",location:{city:"Moscow",country:"Russia"}},{id:3,photoURL:"data:image/png;base64,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",fullName:"Andrew",followed:!0,status:"I am a boss too ofcourse",location:{city:"Kiev",country:"Ukraine"}}]),Object(r.jsx)("div",{children:e.users.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:t.photoURL,className:V.a.userPhoto,alt:"avatar"})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{onClick:function(){return e.unfollow(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{onClick:function(){return e.follow(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.fullName}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.location.country}),Object(r.jsx)("div",{children:t.location.city})]})]})]},t.id)}))})})),K=function(e){return Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(d,{}),Object(r.jsx)(u,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)(D.c,{children:[Object(r.jsx)(D.a,{path:"/dialogs",element:Object(r.jsx)(L,{})}),Object(r.jsx)(D.a,{path:"/profile",element:Object(r.jsx)(R,{message:e.profilePage.messageForNewPost,posts:e.profilePage.posts})}),Object(r.jsx)(D.a,{path:"/users",element:Object(r.jsx)(Y,{})})]})})]})},Z=s(19),W={},U=Object(Z.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var s={id:5,message:t.postMessage,likesCount:0};return Object(h.a)(Object(h.a)({},e),{},{posts:[].concat(Object(x.a)(e.posts),[s]),messageForNewPost:""});case A:return Object(h.a)(Object(h.a)({},e),{},{messageForNewPost:t.newText});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(h.a)(Object(h.a)({},e),{},{newMessage:t.newMessageText});case w:return Object(h.a)(Object(h.a)({},e),{},{newMessage:"",messages:[].concat(Object(x.a)(e.messages),[{id:6,message:e.newMessage}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!0}):e}))});case v:return Object(h.a)(Object(h.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)(Object(h.a)({},e),{},{followed:!1}):e}))});case Q:return Object(h.a)(Object(h.a)({},e),{},{users:[].concat(Object(x.a)(e.users),Object(x.a)(t.users))});default:return e}}}),z=Object(Z.b)(U);n.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(j.a,{store:z,children:Object(r.jsx)(K,{dialogsPage:z.getState().dialogsPage,profilePage:z.getState().profilePage,sidebar:z.getState().sidebar,usersPage:z.getState().usersPage})})}),document.getElementById("root")),a()}],[[36,1,2]]]);
//# sourceMappingURL=main.2c23e3e3.chunk.js.map