import t from"./index.846f69df.js";import p from"./index.27863d36.js";import n from"./index.7a08708b.js";import{_ as d,f as v,h as g,r as e,o as m,g as s,w as r,d as i,B as h,D as b}from"./app.57a7fbdc.js";import{N as y}from"./Space.54d6e144.js";import"./logo.e96db4bd.js";import"./Layout.f4e7d2da.js";import"./_common.b37f9e07.js";import"./Tooltip.4fd45e00.js";import"./light.f8b639d0.js";import"./LayoutContent.6300b5a5.js";import"./Result.5ef35e40.js";import"./Warning.01f89cfc.js";import"./light.b15bef42.js";import"./Button.488cfa87.js";import"./light.c90d1399.js";import"./Spin.29a698cd.js";import"./use-message.8e19787a.js";import"./context.e4eb613b.js";import"./light.2f83da4b.js";import"./light.f943b396.js";const D=v({name:"DefaultLayout",components:{NSpace:y,Home:t,Article:p,About:n},setup(a,l){const o=b();return{component:g(()=>o.value.path==="/"?t:o.value.path.startsWith("/article/")?p:o.value.path==="/about/"?n:t)}}});function x(a,l,o,c,C,$){const u=e("n-space"),f=e("global-layout"),_=e("global-provider");return m(),s(_,null,{default:r(()=>[i(f,null,{default:r(()=>[i(u,{class:"space-container",vertical:""},{default:r(()=>[(m(),s(h(a.component)))]),_:1})]),_:1})]),_:1})}var O=d(D,[["render",x],["__file","default-layout.vue"]]);export{O as default};