import{e as h}from"./app.1414484b.js";import{i as $,j as V,w as D,r as g}from"./_common.fc53a880.js";const J=(r,...o)=>typeof r=="function"?r(...o):typeof r=="string"?h(r):typeof r=="number"?h(String(r)):null,{cubicBezierEaseInOut:e,cubicBezierEaseOut:N,cubicBezierEaseIn:P}=V;function K({overflow:r="hidden",duration:o=".3s",originalTransition:a="",leavingDelay:i="0s",foldPadding:l=!1,enterToProps:d=void 0,leaveToProps:s=void 0,reverse:p=!1}={}){const n=p?"leave":"enter",t=p?"enter":"leave";return[$(`&.fade-in-height-expand-transition-${t}-from,
 &.fade-in-height-expand-transition-${n}-to`,Object.assign(Object.assign({},d),{opacity:1})),$(`&.fade-in-height-expand-transition-${t}-to,
 &.fade-in-height-expand-transition-${n}-from`,Object.assign(Object.assign({},s),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:l?"0 !important":void 0,paddingBottom:l?"0 !important":void 0})),$(`&.fade-in-height-expand-transition-${t}-active`,`
 overflow: ${r};
 transition:
 max-height ${o} ${e} ${i},
 opacity ${o} ${N} ${i},
 margin-top ${o} ${e} ${i},
 margin-bottom ${o} ${e} ${i},
 padding-top ${o} ${e} ${i},
 padding-bottom ${o} ${e} ${i}
 ${a?","+a:""}
 `),$(`&.fade-in-height-expand-transition-${n}-active`,`
 overflow: ${r};
 transition:
 max-height ${o} ${e},
 opacity ${o} ${P},
 margin-top ${o} ${e},
 margin-bottom ${o} ${e},
 padding-top ${o} ${e},
 padding-bottom ${o} ${e}
 ${a?","+a:""}
 `)]}var R={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const k=r=>{const{textColor2:o,textColor3:a,textColorDisabled:i,primaryColor:l,primaryColorHover:d,inputColor:s,inputColorDisabled:p,borderColor:n,warningColor:t,warningColorHover:x,errorColor:c,errorColorHover:m,borderRadius:C,lineHeight:b,fontSizeTiny:f,fontSizeSmall:u,fontSizeMedium:S,fontSizeLarge:E,heightTiny:H,heightSmall:v,heightMedium:z,heightLarge:F,actionColor:L,clearColor:O,clearColorHover:T,clearColorPressed:j,placeholderColor:w,placeholderColorDisabled:y,iconColor:W,iconColorDisabled:B,iconColorHover:I,iconColorPressed:M}=r;return Object.assign(Object.assign({},R),{countTextColor:a,heightTiny:H,heightSmall:v,heightMedium:z,heightLarge:F,fontSizeTiny:f,fontSizeSmall:u,fontSizeMedium:S,fontSizeLarge:E,lineHeight:b,lineHeightTextarea:b,borderRadius:C,iconSize:"16px",groupLabelColor:L,groupLabelTextColor:o,textColor:o,textColorDisabled:i,textDecorationColor:o,caretColor:l,placeholderColor:w,placeholderColorDisabled:y,color:s,colorDisabled:p,colorFocus:s,groupLabelBorder:`1px solid ${n}`,border:`1px solid ${n}`,borderHover:`1px solid ${d}`,borderDisabled:`1px solid ${n}`,borderFocus:`1px solid ${d}`,boxShadowFocus:`0 0 0 2px ${g(l,{alpha:.2})}`,loadingColor:l,loadingColorWarning:t,borderWarning:`1px solid ${t}`,borderHoverWarning:`1px solid ${x}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${x}`,boxShadowFocusWarning:`0 0 0 2px ${g(t,{alpha:.2})}`,caretColorWarning:t,loadingColorError:c,borderError:`1px solid ${c}`,borderHoverError:`1px solid ${m}`,colorFocusError:s,borderFocusError:`1px solid ${m}`,boxShadowFocusError:`0 0 0 2px ${g(c,{alpha:.2})}`,caretColorError:c,clearColor:O,clearColorHover:T,clearColorPressed:j,iconColor:W,iconColorDisabled:B,iconColorHover:I,iconColorPressed:M,suffixTextColor:o})},q={name:"Input",common:D,self:k};var Q=q;export{R as c,K as f,Q as i,J as r};
