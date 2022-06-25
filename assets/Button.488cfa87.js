import{f as te,g as j,h as Te,i as f,j as Pe,k as ne,l as x,m as c,n as Z,o as Re,d as ie,p as ke,b as Ee,e as r,r as N,s as Fe,N as He,t as Ie}from"./_common.b37f9e07.js";import{u as Ne,c as ee,r as oe,i as Oe,a as je}from"./Space.54d6e144.js";import{m as ae,p as De,h as B,n as le,f as se,q as _e,s as R,v as Ke,l as p}from"./app.57a7fbdc.js";import{b as Me,N as Ve}from"./light.c90d1399.js";const re=te("n-form-item");function Ge(e,{defaultSize:h="medium",mergedSize:v,mergedDisabled:d}={}){const n=ae(re,null);De(re,null);const D=B(v?()=>v(n):()=>{const{size:m}=e;if(m)return m;if(n){const{mergedSize:E}=n;if(E.value!==void 0)return E.value}return h}),P=B(d?()=>d(n):()=>{const{disabled:m}=e;return m!==void 0?m:n?n.disabled.value:!1}),k=B(()=>{const{status:m}=e;return m||(n==null?void 0:n.mergedValidationStatus.value)});return le(()=>{n&&n.restoreValidation()}),{mergedSizeRef:D,mergedDisabledRef:P,mergedStatusRef:k,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}var We=j("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),qe=se({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Te("-base-wave",We,_e(e,"clsPrefix"));const h=R(null),v=R(!1);let d=null;return le(()=>{d!==null&&window.clearTimeout(d)}),{active:v,selfRef:h,play(){d!==null&&(window.clearTimeout(d),v.value=!1,d=null),Ke(()=>{var n;(n=h.value)===null||n===void 0||n.offsetHeight,v.value=!0,d=window.setTimeout(()=>{v.value=!1,d=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});const{cubicBezierEaseInOut:w}=Pe;function Qe({duration:e=".2s",delay:h=".1s"}={}){return[f("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),f("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),f("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w},
 max-width ${e} ${w} ${h},
 margin-left ${e} ${w} ${h},
 margin-right ${e} ${w} ${h};
 `),f("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${w} ${h},
 max-width ${e} ${w},
 margin-left ${e} ${w},
 margin-right ${e} ${w};
 `)]}function S(e){return ne(e,[255,255,255,.16])}function O(e){return ne(e,[0,0,0,.12])}const Le=te("n-button-group");var Ye=f([j("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[c("border",{borderColor:"var(--n-border-color)"}),x("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),Z("disabled",[f("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),f("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),f("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),Z("disabled",[f("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),f("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),f("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),j("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),typeof window!="undefined"&&"MozBoxSizing"in document.createElement("div").style?f("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",{border:"var(--n-border)"}),c("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),c("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[j("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[Re({top:"50%",originalTransform:"translateY(-50%)"})]),Qe()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[f("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),f("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),f("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const Ae=Object.assign(Object.assign({},ie.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:Boolean}),Ue=se({name:"Button",props:Ae,setup(e){const h=R(null),v=R(null),d=R(!1),n=ke(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),D=ae(Le,{}),{mergedSizeRef:P}=Ge({},{defaultSize:"medium",mergedSize:t=>{const{size:u}=e;if(u)return u;const{size:y}=D;if(y)return y;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),k=B(()=>e.focusable&&!e.disabled),m=t=>{var u;e.disabled||e.nativeFocusBehavior||k.value&&(t.preventDefault(),(u=h.value)===null||u===void 0||u.focus({preventScroll:!0}))},E=t=>{var u;if(!e.disabled&&!e.loading){const{onClick:y}=e;y&&je(y,t),e.text||(u=v.value)===null||u===void 0||u.play()}},de=t=>{switch(t.code){case"Enter":case"NumpadEnter":if(!e.keyboard)return;d.value=!1}},ce=t=>{switch(t.code){case"Enter":case"NumpadEnter":if(!e.keyboard||e.loading){t.preventDefault();return}d.value=!0}},ue=()=>{d.value=!1},{inlineThemeDisabled:Y,mergedClsPrefixRef:_,mergedRtlRef:be}=Ee(e),fe=ie("Button","-button",Ye,Me,e,_),he=Ne("Button",be,_),A=B(()=>{const t=fe.value,{common:{cubicBezierEaseInOut:u,cubicBezierEaseOut:y},self:o}=t,{rippleDuration:K,opacityDisabled:F,fontWeight:M,fontWeightStrong:V}=o,g=P.value,{dashed:G,type:z,ghost:W,text:C,color:a,round:U,circle:q,textColor:$,secondary:ve,tertiary:J,quaternary:pe,strong:me}=e,ge={"font-weight":me?V:M};let l={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const H=z==="tertiary",X=z==="default",i=H?"default":z;if(C){const s=$||a,b=s||o[r("textColorText",i)];l={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":b,"--n-text-color-hover":s?S(s):o[r("textColorTextHover",i)],"--n-text-color-pressed":s?O(s):o[r("textColorTextPressed",i)],"--n-text-color-focus":s?S(s):o[r("textColorTextHover",i)],"--n-text-color-disabled":s||o[r("textColorTextDisabled",i)]}}else if(W||G){const s=$||a;l={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[r("rippleColor",i)],"--n-text-color":s||o[r("textColorGhost",i)],"--n-text-color-hover":s?S(s):o[r("textColorGhostHover",i)],"--n-text-color-pressed":s?O(s):o[r("textColorGhostPressed",i)],"--n-text-color-focus":s?S(s):o[r("textColorGhostHover",i)],"--n-text-color-disabled":s||o[r("textColorGhostDisabled",i)]}}else if(ve){const s=X?o.textColor:H?o.textColorTertiary:o[r("color",i)],b=a||s,I=z!=="default"&&z!=="tertiary";l={"--n-color":I?N(b,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":I?N(b,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":I?N(b,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":I?N(b,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":b,"--n-text-color-hover":b,"--n-text-color-pressed":b,"--n-text-color-focus":b,"--n-text-color-disabled":b}}else if(J||pe){const s=X?o.textColor:H?o.textColorTertiary:o[r("color",i)],b=a||s;J?(l["--n-color"]=o.colorTertiary,l["--n-color-hover"]=o.colorTertiaryHover,l["--n-color-pressed"]=o.colorTertiaryPressed,l["--n-color-focus"]=o.colorSecondaryHover,l["--n-color-disabled"]=o.colorTertiary):(l["--n-color"]=o.colorQuaternary,l["--n-color-hover"]=o.colorQuaternaryHover,l["--n-color-pressed"]=o.colorQuaternaryPressed,l["--n-color-focus"]=o.colorQuaternaryHover,l["--n-color-disabled"]=o.colorQuaternary),l["--n-ripple-color"]="#0000",l["--n-text-color"]=b,l["--n-text-color-hover"]=b,l["--n-text-color-pressed"]=b,l["--n-text-color-focus"]=b,l["--n-text-color-disabled"]=b}else l={"--n-color":a||o[r("color",i)],"--n-color-hover":a?S(a):o[r("colorHover",i)],"--n-color-pressed":a?O(a):o[r("colorPressed",i)],"--n-color-focus":a?S(a):o[r("colorFocus",i)],"--n-color-disabled":a||o[r("colorDisabled",i)],"--n-ripple-color":a||o[r("rippleColor",i)],"--n-text-color":$||(a?o.textColorPrimary:H?o.textColorTertiary:o[r("textColor",i)]),"--n-text-color-hover":$||(a?o.textColorHoverPrimary:o[r("textColorHover",i)]),"--n-text-color-pressed":$||(a?o.textColorPressedPrimary:o[r("textColorPressed",i)]),"--n-text-color-focus":$||(a?o.textColorFocusPrimary:o[r("textColorFocus",i)]),"--n-text-color-disabled":$||(a?o.textColorDisabledPrimary:o[r("textColorDisabled",i)])};let Q={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?Q={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Q={"--n-border":o[r("border",i)],"--n-border-hover":o[r("borderHover",i)],"--n-border-pressed":o[r("borderPressed",i)],"--n-border-focus":o[r("borderFocus",i)],"--n-border-disabled":o[r("borderDisabled",i)]};const{[r("height",g)]:L,[r("fontSize",g)]:xe,[r("padding",g)]:ye,[r("paddingRound",g)]:Ce,[r("iconSize",g)]:we,[r("borderRadius",g)]:ze,[r("iconMargin",g)]:$e,waveOpacity:Se}=o,Be={"--n-width":q&&!C?L:"initial","--n-height":C?"initial":L,"--n-font-size":xe,"--n-padding":q||C?"initial":U?Ce:ye,"--n-icon-size":we,"--n-icon-margin":$e,"--n-border-radius":C?"initial":q||U?L:ze};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":u,"--n-bezier-ease-out":y,"--n-ripple-duration":K,"--n-opacity-disabled":F,"--n-wave-opacity":Se},ge),l),Q),Be)}),T=Y?Fe("button",B(()=>{let t="";const{dashed:u,type:y,ghost:o,text:K,color:F,round:M,circle:V,textColor:g,secondary:G,tertiary:z,quaternary:W,strong:C}=e;u&&(t+="a"),o&&(t+="b"),K&&(t+="c"),M&&(t+="d"),V&&(t+="e"),G&&(t+="f"),z&&(t+="g"),W&&(t+="h"),C&&(t+="i"),F&&(t+="j"+ee(F)),g&&(t+="k"+ee(g));const{value:a}=P;return t+="l"+a[0],t+="m"+y[0],t}),A,e):void 0;return{selfElRef:h,waveElRef:v,mergedClsPrefix:_,mergedFocusable:k,mergedSize:P,showBorder:n,enterPressed:d,rtlEnabled:he,handleMousedown:m,handleKeydown:ce,handleBlur:ue,handleKeyup:de,handleClick:E,customColorCssVars:B(()=>{const{color:t}=e;if(!t)return null;const u=S(t);return{"--n-border-color":t,"--n-border-color-hover":u,"--n-border-color-pressed":O(t),"--n-border-color-focus":u,"--n-border-color-disabled":t}}),cssVars:Y?void 0:A,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:h,onRender:v}=this;v==null||v();const d=oe(this.$slots.default,n=>n&&p("span",{class:`${e}-button__content`},n));return p(h,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&d,p(Ve,{width:!0},{default:()=>oe(this.$slots.icon,n=>(this.loading||n)&&p("span",{class:`${e}-button__icon`,style:{margin:Oe(this.$slots.default)?"0":""}},p(He,null,{default:()=>this.loading?p(Ie,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},n)})))}),this.iconPlacement==="left"&&d,this.text?null:p(qe,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});var oo=Ue;export{oo as N,re as f,Ge as u};
